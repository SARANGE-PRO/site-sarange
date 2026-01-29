import { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ShieldCheck,
  Thermometer,
  Zap,
  Check,
  ChevronRight,
  Info,
  X,
  Sparkles,
  Maximize,
  Minimize,
  Trophy,
  BadgePercent
} from 'lucide-react';
import CTATrustBadges from '../ui/CTATrustBadges';
import { IMAGES } from '../../data/constants';
import { ProductPromoTrigger, ComboInfoModal } from '../promo/PromoCombo';

const PVCOffer = ({ onOpenAides }) => {
  // State principal
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [config, setConfig] = useState({
    opening: 'ob',
    leaves: 1
  });
  const [showModal, setShowModal] = useState(false);
  const [showComboModal, setShowComboModal] = useState(false);

  // Liste de toutes les images dans l'ordre de défilement
  const WINDOW_IMAGES = [
    { id: 'fenetre2vantaux', image: IMAGES.pvc_fenetre_2vantaux, tabKey: 'fenetre' },
    { id: 'fenetre1vantail', image: IMAGES.pvc_fenetre_1vantail, tabKey: 'fenetre' },
    { id: 'fenetre3vantaux', image: IMAGES.pvc_fenetre_3vantaux, tabKey: 'fenetre' },
    { id: 'pf2vantaux', image: IMAGES.pvc_porte_fenetre_2vantaux, tabKey: 'porte_fenetre' },
    { id: 'coulissant', image: IMAGES.pvc_coulissant, tabKey: 'coulissant' },
    { id: 'compose', image: IMAGES.pvc_compose, tabKey: 'compose' },
  ];

  // Configuration des onglets
  const TABS = {
    fenetre: {
      id: 'fenetre',
      label: 'Fenêtres',
      image: IMAGES.pvc,
      title: "Fenêtres PVC Schüco",
      subtitle: "Le blanc performant au meilleur prix du marché",
      features: [
        { icon: Thermometer, text: "Isolation Thermique Top Niveau jusqu'à Uw 1,1" },
        { icon: ShieldCheck, text: "Renforts Acier : Indéformable & Sûr" },
        { icon: Zap, text: "Direct usine : qualité premium, prix imbattable" }
      ],
      defaultConfig: { opening: 'ob', leaves: 1 }
    },
    porte_fenetre: {
      id: 'porte_fenetre',
      label: 'Portes-Fenêtres',
      image: IMAGES.pvc_porte_fenetre_2vantaux,
      title: "Portes-fenêtres PVC Schüco",
      subtitle: "Plus de lumière. Moins de dépenses",
      features: [
        { icon: Maximize, text: "Jusqu'à +20 % de luminosité naturelle" },
        { icon: Thermometer, text: "Isolation thermique jusqu'à Uw 1,1" },
        { icon: ShieldCheck, text: "Le meilleur rapport qualité-prix" }
      ],
      defaultConfig: { opening: 'ob', leaves: 1 }
    },
    coulissant: {
      id: 'coulissant',
      label: 'Coulissants',
      image: IMAGES.pvc_coulissant,
      title: "Coulissants PVC Schüco Soft Slide",
      subtitle: "Le coulissant fluide, isolant et économique",
      features: [
        { icon: Minimize, text: "Grandes surfaces vitrées, zéro compromis" },
        { icon: Zap, text: "Système Soft Slide : ouverture douce, sans effort" },
        { icon: Thermometer, text: "Jusqu'à 40 % moins cher que l'aluminium" }
      ],
      defaultConfig: { opening: 'battant', leaves: 2 }
    },
    compose: {
      id: 'compose',
      label: 'Composés',
      image: IMAGES.pvc_compose,
      title: "Ensembles composés PVC Schüco",
      subtitle: "Harmonie totale. Budget optimisé.",
      features: [
        { icon: Sparkles, text: "Pose simplifiée, économies immédiates" },
        { icon: Check, text: "Sur mesure, moins cher que des produits séparés" },
        { icon: Thermometer, text: "Performance globale, coût global réduit" }
      ],
      defaultConfig: { opening: 'ob', leaves: 1 }
    }
  };



  // Récupère l'onglet actif
  const activeTab = WINDOW_IMAGES[currentImageIndex].tabKey;
  const currentTab = TABS[activeTab];
  const currentImage = WINDOW_IMAGES[currentImageIndex].image;

  // Scroll vers contact
  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`py-6 md:py-16 bg-slate-50 relative overflow-hidden ${showComboModal ? 'z-[9999]' : ''}`}
      id="offer-pvc"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-[40%] -right-[10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-100/40 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">

        {/* En-tête Section - Compacté */}
        <div className="text-center mb-6 md:mb-10">
          <span className="inline-block py-0.5 px-2 md:py-1 md:px-3 rounded-full bg-green-100 text-green-700 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 border border-green-300 shadow-sm">
            🏆 MEILLEUR RAPPORT QUALITÉ / PRIX
          </span>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4 tracking-tight leading-tight">
            FENÊTRES SCHÜCO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">PRIX IMBATTABLE DIRECT USINE</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto px-2 leading-relaxed">
            Pourquoi payer plus cher ? Le <strong>PVC Blanc</strong> offre la <strong>meilleure isolation du marché (jusqu'à Uw 1.1)</strong> pour un budget maîtrisé. <strong>Idéal Rénovation.</strong>
          </p>
        </div>

        {/* --- MAIN CARD --- */}
        <div
          className="bg-white rounded-xl md:rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row lg:h-[700px] group cursor-pointer"
        >

          {/* ZONE IMAGE (Taille augmentée sur mobile pour bien voir le produit) */}
          <div className="relative w-full lg:w-1/2 h-80 sm:h-96 lg:h-full shrink-0 bg-slate-100 overflow-hidden">

            <div className="absolute inset-0 w-full h-full">
              <img
                key={currentImageIndex}
                src={currentImage}
                alt={`Menuiserie PVC - ${currentTab.label}`}
                className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out transform group-hover:scale-105 animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:to-black/5"></div>
            </div>

            {/* Badges Flottants (Plus discrets sur mobile) */}
            <div className="absolute top-3 left-3 z-20 flex flex-row lg:flex-col flex-wrap gap-2">
              <div className="bg-orange-500/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                🔥 N°1 DES VENTES
              </div>
              <span className="px-2 py-1 bg-white/80 backdrop-blur-sm shadow-sm rounded-lg text-[10px] md:text-xs font-bold text-slate-900 border border-white/50 flex items-center gap-1">
                <ShieldCheck size={12} className="text-orange-600" />
                Garantie 10 ans
              </span>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? WINDOW_IMAGES.length - 1 : prev - 1); }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white backdrop-blur rounded-full flex items-center justify-center text-slate-900 transition-all z-30 shadow-lg active:scale-95"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => (prev + 1) % WINDOW_IMAGES.length); }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white backdrop-blur rounded-full flex items-center justify-center text-slate-900 transition-all z-30 shadow-lg active:scale-95"
            >
              <ChevronRight size={24} />
            </button>

            {/* Mobile Overlay Text (Plus lisible) */}
            <div className="absolute bottom-3 left-3 right-3 lg:hidden text-white z-20">
              <p className="text-[10px] font-medium text-white/80 uppercase tracking-widest mb-0.5">Modèle présenté</p>
              <div className="text-xl font-bold leading-none shadow-black drop-shadow-lg">{currentTab.label}</div>
            </div>
          </div>

          {/* ZONE CONTENU */}
          <div className="flex-1 flex flex-col bg-white h-full relative z-10">

            {/* Scrollable Tabs - Sticky top mobile */}
            <div className="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
              <div className="flex overflow-x-auto scrollbar-hide p-2 md:p-4 gap-2">
                {Object.values(TABS).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      const firstImageOfTab = WINDOW_IMAGES.findIndex(img => img.tabKey === tab.id);
                      if (firstImageOfTab !== -1) setCurrentImageIndex(firstImageOfTab);
                      setConfig(prev => ({ ...prev, ...tab.defaultConfig }));
                    }}
                    className={`
                      flex-shrink-0 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap
                      ${activeTab === tab.id
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md'
                        : 'bg-slate-50 text-slate-500 hover:bg-orange-50'}
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 md:p-8 flex-1 overflow-y-auto lg:overflow-y-visible">

              <div className="mb-2 md:mb-6">
                <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-1 leading-tight hidden md:block">
                  {currentTab.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm mb-4 hidden md:block">
                  {currentTab.subtitle}
                </p>

                {/* Features Grid - Layout optimisé mobile */}
                <div className="grid gap-2 md:gap-3">
                  {currentTab.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-orange-50/50 border border-orange-100">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-orange-600 shadow-sm shrink-0">
                        <feature.icon size={14} className="md:w-4 md:h-4" strokeWidth={2.5} />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-slate-700 leading-tight">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Badge Offre Combo */}
                {activeTab === 'fenetre' && (
                  <ProductPromoTrigger onClick={() => setShowComboModal(true)} />
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-4 md:p-8 bg-white border-t border-slate-100 z-20 mt-auto -mx-4 -mb-4 md:mx-0 md:mb-0">
                <button
                  onClick={(e) => { e.stopPropagation(); handleCtaClick(); }}
                  className="w-full py-3.5 md:py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-base md:text-xl rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 group/btn mb-2 md:mb-3"
                >
                  <span>Obtenir mon devis Express</span>
                  <div className="ml-2 bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={18} />
                  </div>
                </button>

                <div className="flex justify-between items-center px-1">
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline decoration-slate-300 underline-offset-2 transition-colors"
                  >
                    Voir fiche technique
                  </button>
                  <div className="flex gap-2 scale-95 md:scale-100 origin-right">
                    <CTATrustBadges />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- MODAL FICHE TECHNIQUE --- */}
        {showModal && createPortal(
          <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="bg-white rounded-2xl md:rounded-3xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] shadow-2xl relative z-50 animate-fadeInUp">

              {/* Header Image / Titre */}
              <div className="bg-slate-900 text-white pt-6 pb-4 px-6 md:pt-8 md:pb-6 md:px-8 shrink-0 relative overflow-hidden">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
                >
                  <X size={20} className="text-white" />
                </button>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] md:text-[11px] font-bold rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/20">
                      Performance & Clarté
                    </span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold leading-tight mb-1">Fenêtres PVC Blanc Schüco</h3>
                  <p className="text-blue-200 text-sm md:text-lg font-medium">L'intemporel sans entretien</p>

                  <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed max-w-lg">
                    Optez pour l'isolation thermique exceptionnelle et la robustesse du PVC. Le choix malin pour maximiser le confort et la luminosité, avec une durabilité à toute épreuve.
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              </div>

              {/* Contenu Scrollable */}
              <div className="px-5 md:px-8 py-5 overflow-y-auto space-y-6 custom-scrollbar">

                {/* Pourquoi choisir... */}
                <h4 className="font-bold text-slate-900 text-base md:text-lg -mb-2">Pourquoi choisir le PVC Blanc ?</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-orange-50/50 p-3 rounded-xl border border-orange-100 flex items-start">
                    <Thermometer className="text-orange-500 mr-2 shrink-0" size={18} />
                    <span className="text-xs md:text-sm text-slate-700 font-medium">Isolation A++ : Le meilleur rapport performance/prix</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start">
                    <Sparkles className="text-yellow-500 mr-2 shrink-0" size={18} />
                    <span className="text-xs md:text-sm text-slate-700 font-medium">Éclat Durable : Ne jaunit pas, simple coup d'éponge</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start">
                    <ShieldCheck className="text-green-500 mr-2 shrink-0" size={18} />
                    <span className="text-xs md:text-sm text-slate-700 font-medium">Sécurité Renforcée : Renforts acier systématiques</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start">
                    <Zap className="text-cyan-500 mr-2 shrink-0" size={18} />
                    <span className="text-xs md:text-sm text-slate-700 font-medium">Économique : 15 à 20% moins cher que la couleur</span>
                  </div>
                </div>

                {/* Bloc Technique */}
                <div className="bg-gradient-to-br from-orange-50 via-red-50 to-white rounded-xl p-4 md:p-6 border border-orange-100/50">
                  <div className="flex items-center mb-3">
                    <div className="bg-white p-1.5 rounded-full shadow-sm mr-2.5 text-orange-600 shrink-0">
                      <Trophy size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg">Excellence Technique (Schüco CT70)</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Profilés multi-chambres 70mm pour une isolation optimale",
                      "Joints EPDM double niveau : étanchéité parfaite air/eau",
                      "Vitrage 4/20/4 Argon + Warm Edge de série",
                      "Durée de vie supérieure à 30 ans sans altération"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-2.5 shrink-0 shadow-sm border border-orange-100">
                          <Check size={12} className="text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium text-xs md:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ */}
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center text-base md:text-lg">
                    <Info className="text-slate-400 mr-2" size={18} />
                    Bon à savoir
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="mr-2.5 mt-0.5"><BadgePercent size={16} className="text-green-500" /></div>
                      <div>
                        <span className="font-bold text-slate-800 text-sm block">Éligible aux aides ?</span>
                        <p className="text-xs text-slate-600">Oui, nos fenêtres respectent les critères Uw pour MaPrimeRénov'.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer Modal */}
              <div className="p-4 md:p-6 border-t border-slate-100 bg-white shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20">
                <button
                  onClick={() => {
                    setShowModal(false);
                    handleCtaClick();
                  }}
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-base md:text-xl rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center group"
                >
                  <span>Demander mon étude PVC</span>
                  <div className="ml-3 bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={16} />
                  </div>
                </button>
                <div className="flex justify-center items-center mt-3 space-x-4 md:space-x-6 text-[10px] md:text-sm">
                  <span className="font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                    <ShieldCheck size={12} className="mr-1 text-green-500" /> Gratuit – Sans engagement
                  </span>
                  <span className="font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                    <Zap size={12} className="mr-1 text-yellow-500" /> Réponse rapide
                  </span>
                </div>
              </div>

            </div>
          </div>,
          document.body
        )}

        {/* Modale Offre Combo */}
        <ComboInfoModal isOpen={showComboModal} onClose={() => setShowComboModal(false)} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default PVCOffer;