import { useState, useEffect } from 'react';
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
  MousePointerClick,
  Trophy,
  BadgePercent
} from 'lucide-react';
import CTATrustBadges from '../ui/CTATrustBadges';
import { IMAGES } from '../../data/constants';
import { useOffer } from '../../features/context/OfferContext';

const PVCOffer = ({ onOpenAides }) => {
  // Context pour partager la promo avec ContactForm
  const { setPromo } = useOffer();

  // State principal
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [config, setConfig] = useState({
    opening: 'ob',
    leaves: 1,
    shutter: false
  });
  const [showModal, setShowModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Liste de toutes les images dans l'ordre de défilement
  const WINDOW_IMAGES = [
    { id: 'fenetre2vantaux', image: IMAGES.pvc_fenetre_2vantaux, tabKey: 'fenetre' },
    { id: 'fenetre1vantail', image: IMAGES.pvc_fenetre_1vantail, tabKey: 'fenetre' },
    { id: 'fenetre3vantaux', image: IMAGES.pvc_fenetre_3vantaux, tabKey: 'fenetre' },
    { id: 'pf2vantaux', image: IMAGES.pvc_porte_fenetre_2vantaux, tabKey: 'porte_fenetre' },
    { id: 'coulissant', image: IMAGES.pvc_coulissant, tabKey: 'coulissant' },
    { id: 'compose', image: IMAGES.pvc_compose, tabKey: 'compose' },
  ];

  // Configuration des onglets (CORRECTION PLURIEL)
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

  // Auto-rotation logic
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(current => {
        const nextIndex = (current + 1) % WINDOW_IMAGES.length;
        const newTabKey = WINDOW_IMAGES[nextIndex].tabKey;
        setConfig(prev => ({ ...prev, ...TABS[newTabKey].defaultConfig }));
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  // Récupère l'onglet actif
  const activeTab = WINDOW_IMAGES[currentImageIndex].tabKey;
  const currentTab = TABS[activeTab];
  const currentImage = WINDOW_IMAGES[currentImageIndex].image;

  // Scroll vers contact et active la promo si applicable
  const handleCtaClick = () => {
    // Si le volet roulant est sélectionné, activer la promo PACK DUO
    if (config.shutter) {
      setPromo(
        'PACK_DUO_20',
        'Pack Duo PVC Blanc + Volet -20%',
        ['fenetre', 'volet']
      );
      console.log('✅ Promo PACK_DUO_20 activée');
    }

    // Scroll vers le formulaire de contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 md:py-20 bg-slate-50 relative overflow-hidden" id="offer-pvc">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">

        {/* En-tête Section */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-4 border border-green-300 shadow-lg">
            🏆 MEILLEUR RAPPORT QUALITÉ / PRIX
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
            FENÊTRES SCHÜCO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">PRIX IMBATTABLE DIRECT USINE</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Pourquoi payer plus cher ? Le <strong>PVC Blanc</strong> offre la <strong>meilleure isolation du marché (jusqu'à Uw 1.1)</strong> pour un budget maîtrisé. <strong>Idéal Rénovation.</strong>
          </p>
        </div>

        {/* --- MAIN CARD --- */}
        <div
          className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row min-h-[600px] lg:h-[750px] group cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >

          {/* ZONE IMAGE (Gauche sur Desktop, Haut sur Mobile) */}
          <div className="relative w-full lg:w-1/2 h-80 md:h-96 lg:h-full shrink-0 bg-slate-100 overflow-hidden">

            {/* Image Container - Full cover */}
            <div className="absolute inset-0 w-full h-full">
              <img
                key={currentImageIndex}
                src={currentImage}
                alt={`Menuiserie PVC - ${currentTab.label}`}
                // Zoom doux (scale-105) sur hover du groupe
                className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out transform group-hover:scale-105 animate-fadeIn"
              />
              {/* Gradient subtil pour lisibilité des badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:to-black/5"></div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-col items-start gap-2">
              <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">🔥 N°1 DES VENTES</div>
              <span className="px-3 py-1.5 bg-white/95 backdrop-blur shadow-lg rounded-lg text-xs font-bold text-slate-900 border border-slate-100 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-orange-600" />
                Garantie 10 ans
              </span>
              {isAutoPlaying && !isHovering && (
                <span className="px-3 py-1.5 bg-slate-900/80 backdrop-blur text-white rounded-lg text-[10px] font-bold uppercase tracking-wider animate-pulse flex items-center gap-1.5">
                  <Zap size={12} className="text-yellow-400" fill="currentColor" /> Démo Auto
                </span>
              )}
            </div>

            {/* Navigation Rapide sur l'image (Arrows) - MASQUÉES SUR MOBILE */}
            <button
              onClick={(e) => { e.stopPropagation(); setIsAutoPlaying(false); setCurrentImageIndex(prev => prev === 0 ? WINDOW_IMAGES.length - 1 : prev - 1); }}
              className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/90 backdrop-blur rounded-full items-center justify-center text-white hover:text-slate-900 transition-all z-20"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setIsAutoPlaying(false); setCurrentImageIndex(prev => (prev + 1) % WINDOW_IMAGES.length); }}
              className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/90 backdrop-blur rounded-full items-center justify-center text-white hover:text-slate-900 transition-all z-20"
            >
              <ChevronRight size={24} />
            </button>

            {/* Mobile Overlay Text */}
            <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white z-20">
              <p className="text-xs font-medium text-white/90 mb-1">Modèle présenté</p>
              <div className="text-lg font-bold leading-none shadow-black drop-shadow-md">{currentTab.label}</div>
            </div>
          </div>

          {/* ZONE CONTENU (Droite sur Desktop, Bas sur Mobile) */}
          <div className="flex-1 flex flex-col bg-white h-full relative z-10">

            {/* Scrollable Tabs - Sticky top mobile */}
            <div className="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
              <div className="flex overflow-x-auto scrollbar-hide p-2 md:p-4 gap-2">
                {Object.values(TABS).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      const firstImageOfTab = WINDOW_IMAGES.findIndex(img => img.tabKey === tab.id);
                      if (firstImageOfTab !== -1) setCurrentImageIndex(firstImageOfTab);
                      setConfig(prev => ({ ...prev, ...tab.defaultConfig }));
                    }}
                    className={`
                      flex-shrink-0 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300
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
            <div className="p-5 md:p-8 flex-1 overflow-y-auto lg:overflow-y-visible">

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-tight">
                  {currentTab.title}
                </h3>
                <p className="text-slate-500 text-sm mb-5">
                  {currentTab.subtitle}
                </p>

                {/* Features Grid */}
                <div className="grid gap-3">
                  {currentTab.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-orange-50/50 border border-orange-100">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-600 shadow-sm shrink-0">
                        <feature.icon size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-slate-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION CONFIGURATEUR PROMO */}
              <div className="mt-auto">
                <div className="mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">OFFRE DU MOMENT</span>
                </div>

                {/* Pack Duo Card */}
                <div
                  onClick={(e) => { e.stopPropagation(); setConfig({ ...config, shutter: !config.shutter }); }}
                  className={`
                    relative cursor-pointer group/card rounded-xl border-2 p-4 transition-all duration-300
                    ${config.shutter
                      ? 'border-orange-500 bg-orange-50/50 shadow-lg shadow-orange-100'
                      : 'border-slate-200 hover:border-orange-300 bg-white'}
                  `}
                >
                  {/* Checkbox Visual */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`
                        w-6 h-6 rounded flex items-center justify-center border-2 transition-colors
                        ${config.shutter ? 'bg-orange-500 border-orange-500' : 'bg-white border-slate-300'}
                      `}>
                        {config.shutter && <Check size={16} className="text-white" strokeWidth={3} />}
                      </div>
                      <div>
                        <span className={`block font-bold ${config.shutter ? 'text-orange-900' : 'text-slate-800'}`}>
                          Ajouter Volet Roulant
                        </span>
                        <span className="text-xs text-slate-500">Solaire, Radio ou Filaire</span>
                      </div>
                    </div>

                    {/* Badge Promo */}
                    <div className={`
                      px-3 py-1 rounded-full text-xs font-black uppercase transform transition-transform group-hover/card:scale-105
                      ${config.shutter ? 'bg-orange-500 text-white rotate-0' : 'bg-slate-100 text-slate-400'}
                    `}>
                      -20% PACK DUO
                    </div>
                  </div>

                  {config.shutter && (
                    <div className="ml-9 text-xs font-medium text-orange-700 animate-fadeIn">
                      <span className="inline-block mr-1">🔥</span>
                      Offre appliquée : 20% de remise immédiate sur l'ensemble fenêtre + volet.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-5 md:p-8 bg-white border-t border-slate-100 z-20 mt-auto">
              <button
                onClick={(e) => { e.stopPropagation(); handleCtaClick(); }}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-600/30 hover:shadow-orange-700/40 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group/btn mb-3"
              >
                <span>Obtenir mon devis {config.shutter ? 'PACK DUO' : 'Express'}</span>
                <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <div className="flex justify-between items-center px-1">
                <button
                  onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline decoration-slate-300 underline-offset-2 transition-colors"
                >
                  Voir fiche technique
                </button>
                <div className="flex gap-2">
                  <CTATrustBadges />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- MODAL FICHE TECHNIQUE --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] shadow-2xl relative z-50 animate-fadeInUp">

            {/* Header Image / Titre - Style Alu */}
            <div className="bg-slate-900 text-white pt-8 pb-6 px-8 shrink-0 relative overflow-hidden">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              >
                <X size={24} className="text-white" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/20">
                    Performance & Clarté
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">Fenêtres PVC Blanc Schüco</h3>
                <p className="text-blue-200 text-lg font-medium">L'intemporel sans entretien</p>

                <p className="text-slate-300 text-sm mt-4 leading-relaxed max-w-lg">
                  Optez pour l'isolation thermique exceptionnelle et la robustesse du PVC. Le choix malin pour maximiser le confort et la luminosité, avec une durabilité à toute épreuve.
                </p>
              </div>

              {/* Motif de fond */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            </div>

            {/* Contenu Scrollable */}
            <div className="px-6 md:px-8 py-6 overflow-y-auto space-y-8 custom-scrollbar">

              {/* Pourquoi choisir... (Grid) */}
              <h4 className="font-bold text-slate-900 text-lg -mb-2">Pourquoi choisir le PVC Blanc ?</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100 flex items-start">
                  <Thermometer className="text-orange-500 mr-3 shrink-0" size={20} />
                  <span className="text-sm text-slate-700 font-medium">Isolation A++ : Le meilleur rapport performance/prix</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
                  <Sparkles className="text-yellow-500 mr-3 shrink-0" size={20} />
                  <span className="text-sm text-slate-700 font-medium">Éclat Durable : Ne jaunit pas, simple coup d'éponge</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
                  <ShieldCheck className="text-green-500 mr-3 shrink-0" size={20} />
                  <span className="text-sm text-slate-700 font-medium">Sécurité Renforcée : Renforts acier systématiques</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
                  <Zap className="text-cyan-500 mr-3 shrink-0" size={20} />
                  <span className="text-sm text-slate-700 font-medium">Économique : 15 à 20% moins cher que la couleur</span>
                </div>
              </div>

              {/* Bloc Technique Schüco */}
              <div className="bg-gradient-to-br from-orange-50 via-red-50 to-white rounded-2xl p-6 border border-orange-100/50">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-3 text-orange-600 shrink-0">
                    <Trophy size={22} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Excellence Technique (Schüco CT70)</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Profilés multi-chambres 70mm pour une isolation optimale",
                    "Joints EPDM double niveau : étanchéité parfaite air/eau",
                    "Vitrage 4/20/4 Argon + Warm Edge de série",
                    "Durée de vie supérieure à 30 ans sans altération"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 shrink-0 shadow-sm border border-orange-100">
                        <Check size={14} className="text-orange-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ & Infos */}
              <div>
                <h4 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
                  <Info className="text-slate-400 mr-2.5" size={22} />
                  Bon à savoir
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1"><BadgePercent size={18} className="text-green-500" /></div>
                    <div>
                      <span className="font-bold text-slate-800 text-sm block">Éligible aux aides ?</span>
                      <p className="text-xs text-slate-600">Oui, nos fenêtres respectent les critères Uw pour MaPrimeRénov'.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer / CTA (Sticky Bottom) */}
            <div className="p-4 md:p-6 border-t border-slate-100 bg-white shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20">
              <button
                onClick={() => {
                  setShowModal(false);
                  handleCtaClick();
                }}
                className="w-full py-3 md:py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-lg md:text-xl rounded-2xl shadow-xl hover:shadow-2xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center group"
              >
                <span>Demander mon étude PVC</span>
                <div className="ml-3 bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={18} />
                </div>
              </button>
              <div className="flex justify-center items-center mt-4 space-x-6 text-xs sm:text-sm">
                <span className="font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                  <ShieldCheck size={12} className="mr-1.5 text-green-500" /> Gratuit – Sans engagement
                </span>
                <span className="font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                  <Zap size={12} className="mr-1.5 text-yellow-500" /> Réponse rapide
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

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