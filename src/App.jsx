import React, { useState } from 'react';
import { OfferProvider } from './features/context/OfferContext';
import CookieConsent from "react-cookie-consent";

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

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

        {/* --- BOUTON APPEL MOBILE (STICKY) --- */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/20 p-3 sm:p-4 z-40 flex justify-between items-center safe-area-bottom shadow-2xl bg-white/90 backdrop-blur-md">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-secondary-600 tracking-wider">Une question ?</span>
            <a href="tel:0986713444" className="tap-target font-black text-secondary-900 text-base sm:text-lg hover:text-primary-500 transition-colors">09 86 71 34 44</a>
          </div>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="tap-target bg-primary-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all hover:bg-primary-600"
          >
            DEVIS RAPIDE
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