import React, { useState } from 'react';
import { OfferProvider } from './features/context/OfferContext';
import CookieConsent from "react-cookie-consent";
import { Phone, ArrowRight } from 'lucide-react';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SEOHead from './components/ui/SEOHead';

// Sections
import Hero from './components/sections/Hero';
import AidesBanner from './components/sections/AidesBanner';
import PVCOffer from './components/sections/PVCOffer';
import VoletSection from './components/sections/VoletSection';
import B2BSection from './components/sections/B2BSection';
import AluSection from './components/sections/AluSection';
import EntranceDoorSection from './components/sections/EntranceDoorSection';
import GarageAndVerandaSection from './components/sections/GarageAndVerandaSection';
import ReviewsSection from './components/sections/ReviewsSection';

// Features
import ContactForm from './features/contact/ContactForm';

// Modals
import AidesModal from './components/modals/AidesModal';
import InterventionModal from './components/modals/InterventionModal';
import LegalModal from './components/modals/LegalModal';

const App = () => {
  const [showAidesModal, setShowAidesModal] = useState(false);
  const [showInterventionModal, setShowInterventionModal] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'mentions', 'politique' ou null

  return (
    <OfferProvider>
      <div className="font-sans antialiased text-secondary-800 bg-white pb-20 md:pb-0">
        <SEOHead
          title="Fenêtres PVC/Alu Direct Usine à Combs-la-Ville | SARANGE"
          description="Économisez sur vos Fenêtres, Portes et Volets sur-mesure. Direct usine avec pose RGE, aides possibles et TVA réduite. Avis 5/5. Devis gratuit"
          canonical="https://sarange.fr/"
        />

        {/* --- MODALES --- */}
        <AidesModal isOpen={showAidesModal} onClose={() => setShowAidesModal(false)} />
        <InterventionModal isOpen={showInterventionModal} onClose={() => setShowInterventionModal(false)} />

        <LegalModal
          isOpen={activeModal === 'mentions'}
          onClose={() => setActiveModal(null)}
          type="mentions"
        />
        <LegalModal
          isOpen={activeModal === 'politique'}
          onClose={() => setActiveModal(null)}
          type="politique"
        />

        {/* --- NAVIGATION --- */}
        <Navbar onOpenAides={() => setShowAidesModal(true)} />

        {/* --- CONTENU PRINCIPAL --- */}
        <main>
          <Hero
            onOpenAides={() => setShowAidesModal(true)}
            onOpenIntervention={() => setShowInterventionModal(true)}
          />

          <AidesBanner onOpenAides={() => setShowAidesModal(true)} />
          <PVCOffer onOpenAides={() => setShowAidesModal(true)} />
          <VoletSection />
          <EntranceDoorSection />
          <AluSection />
          <GarageAndVerandaSection />
          <B2BSection />
          <ReviewsSection />

          <ContactForm />
        </main>

        {/* --- FOOTER --- */}
        <Footer
          onOpenMentions={() => setActiveModal('mentions')}
          onOpenPolitique={() => setActiveModal('politique')}
        />

        {/* --- BOUTON MOBILE (STICKY BOTTOM BAR) - Unifié --- */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] flex gap-3 safe-area-pb">
          <a
            href="tel:0986713444"
            className="flex-1 bg-slate-50 text-slate-800 font-bold py-3 px-4 rounded-xl text-center hover:bg-slate-100 text-sm flex items-center justify-center gap-2 border border-slate-200 active:scale-95 transition-all"
          >
            <Phone size={18} className="text-slate-500" />
            <span>Appeler</span>
          </a>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="flex-[1.5] bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-4 rounded-xl text-center hover:from-orange-500 hover:to-orange-400 text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-95 transition-all"
          >
            <ArrowRight size={18} />
            <span>Devis Rapide</span>
          </button>
        </div>

      </div>

      {/* --- BANNIÈRE COOKIES --- */}
      <CookieConsent
        location="bottom"
        buttonText="Tout accepter"
        declineButtonText="Tout refuser"
        enableDeclineButton
        cookieName="sarange_cookie_consent"
        style={{
          background: "#0f172a",
          alignItems: "center",
          padding: "20px",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
          zIndex: 100
        }}
        buttonStyle={{
          background: "linear-gradient(to right, #f97316, #dc2626)",
          color: "white",
          fontSize: "14px",
          borderRadius: "10px",
          padding: "12px 24px",
          fontWeight: "700"
        }}
        declineButtonStyle={{
          background: "transparent",
          border: "2px solid #94a3b8",
          color: "#94a3b8",
          fontSize: "14px",
          borderRadius: "10px",
          padding: "10px 24px",
          fontWeight: "600"
        }}
        expires={180}
      >
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div className="flex-1 min-w-[280px]">
            <p className="text-white font-semibold text-base mb-1">
              🍪 Nous utilisons des cookies
            </p>
            <p className="text-slate-300 text-sm">
              Ce site utilise des cookies pour améliorer votre expérience.{" "}
              {/* CORRECTION : Le bouton ouvre maintenant la modale au lieu de changer de page */}
              <button
                onClick={() => setActiveModal('politique')}
                className="underline text-orange-400 hover:text-orange-300 transition-colors font-semibold bg-transparent border-none cursor-pointer p-0"
              >
                En savoir plus
              </button>
            </p>
          </div>
        </div>
      </CookieConsent>
    </OfferProvider>
  );
};

export default App;