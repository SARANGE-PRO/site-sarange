import React, { useState, Suspense } from 'react';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from '@components/ui/LoadingSpinner';
import ErrorBoundary from '@components/ui/ErrorBoundary';

// Lazy Loaded Sections
const Hero = React.lazy(() => import('@features/landing/Hero'));
const AidesBanner = React.lazy(() => import('@features/landing/AidesBanner'));
const PVCOffer = React.lazy(() => import('@features/windows/PVCOffer'));
const VoletSection = React.lazy(() => import('@features/shutters/VoletSection'));
const B2BSection = React.lazy(() => import('@features/b2b/B2BSection'));
const AluSection = React.lazy(() => import('@features/windows/AluSection'));
const EntranceDoorSection = React.lazy(() => import('@features/doors/EntranceDoorSection'));
const GarageAndVerandaSection = React.lazy(() => import('@features/garage/GarageAndVerandaSection'));
const ExpertiseSection = React.lazy(() => import('@features/landing/ExpertiseSection'));
const LocalSection = React.lazy(() => import('@features/landing/LocalSection'));

// Lazy Loaded Features
const ContactForm = React.lazy(() => import('./features/contact/ContactForm'));

// Modals
import AidesModal from './components/modals/AidesModal';
import InterventionModal from './components/modals/InterventionModal';

const App = () => {
  const [showAidesModal, setShowAidesModal] = useState(false);
  const [showInterventionModal, setShowInterventionModal] = useState(false);

  return (
    <div className="font-sans antialiased text-secondary-800 bg-white pb-20 md:pb-0">
      {/* Modales Globales */}
      <AidesModal isOpen={showAidesModal} onClose={() => setShowAidesModal(false)} />
      <InterventionModal
        isOpen={showInterventionModal}
        onClose={() => setShowInterventionModal(false)}
      />

      {/* Navigation */}
      <Navbar onOpenAides={() => setShowAidesModal(true)} />

      {/* Contenu Principal */}
      <main>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero
              onOpenAides={() => setShowAidesModal(true)}
              onOpenIntervention={() => setShowInterventionModal(true)}
            />

            <AidesBanner onOpenAides={() => setShowAidesModal(true)} />
            <PVCOffer onOpenAides={() => setShowAidesModal(true)} />
            <VoletSection />
            <B2BSection />
            <AluSection />
            <EntranceDoorSection />
            <GarageAndVerandaSection />

            {/* Formulaire & Configurateur */}
            <ContactForm />
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />

      {/* Sticky Call Button Mobile (Optimisé avec Glassmorphism) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/20 p-3 sm:p-4 z-40 flex justify-between items-center safe-area-bottom shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-secondary-600 tracking-wider">
            Une question ?
          </span>
          <a
            href="tel:0100000000"
            className="tap-target font-black text-secondary-900 text-base sm:text-lg hover:text-primary-500 transition-colors"
          >
            01 XX XX XX XX
          </a>
        </div>
        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="tap-target bg-primary-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all hover:bg-primary-600"
        >
          DEVIS RAPIDE
        </button>
      </div>
    </div>
  );
};

export default App;
