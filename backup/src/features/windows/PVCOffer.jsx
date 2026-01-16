import { useState, useEffect } from 'react';
import {
  Thermometer,
  ShieldCheck,
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
import CTATrustBadges from '@components/ui/CTATrustBadges';
import { IMAGES, PVC_OFFERS } from '@data/constants';

// Liste de toutes les images dans l'ordre de défilement
const WINDOW_IMAGES = [
  { id: 'fenetre2vantaux', image: IMAGES.pvc_fenetre_2vantaux, tabKey: 'fenetre' },
  { id: 'fenetre1vantail', image: IMAGES.pvc_fenetre_1vantail, tabKey: 'fenetre' },
  { id: 'fenetre3vantaux', image: IMAGES.pvc_fenetre_3vantaux, tabKey: 'fenetre' },
  { id: 'pf2vantaux', image: IMAGES.pvc_porte_fenetre_2vantaux, tabKey: 'porte_fenetre' },
  { id: 'coulissant', image: IMAGES.pvc_coulissant_new, tabKey: 'coulissant' },
  { id: 'compose', image: IMAGES.pvc_compose, tabKey: 'compose' },
];

const PVCOffer = () => {
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

  // Auto-rotation logic - défile image par image
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(current => {
        const nextIndex = (current + 1) % WINDOW_IMAGES.length;
        // Met à jour l'onglet actif en fonction de l'image
        const newTabKey = WINDOW_IMAGES[nextIndex].tabKey;
        setConfig(prev => ({ ...prev, ...PVC_OFFERS[newTabKey].defaultConfig }));
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  // Récupère l'onglet actif basé sur l'image courante
  const activeTab = WINDOW_IMAGES[currentImageIndex].tabKey;
  const currentTab = PVC_OFFERS[activeTab];
  const currentImage = WINDOW_IMAGES[currentImageIndex].image;

  // Scroll vers contact avec pré-remplissage (simulé via query ou state global si dispo, ici scroll simple + log)
  const handleCtaClick = () => {
    // Idéalement, on passerait ces infos au composant Contact via un Context ou URL params
    const configSummary = {
      type: currentTab.label,
      ...config,
      promo: config.shutter ? 'PACK_DUO_20' : null
    };
    console.log("Configuration envoyée au devis:", configSummary);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="offer-pvc">
      {/* Décoration d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">

        {/* En-tête Section */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-4 border border-green-300 shadow-lg">
            🏆 MEILLEUR RAPPORT QUALITÉ / PRIX
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            FENÊTRE SCHÜCO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">PRIX IMBATTABLE DIRECT USINE</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pourquoi payer plus cher ? Le <strong>PVC Blanc</strong> offre la <strong>meilleure isolation du marché (jusqu'à Uw 1.1)</strong> pour un budget maîtrisé. <strong>Idéal Rénovation.</strong>
          </p>
        </div>

        {/* --- CARTE PRINCIPALE --- */}
        <div
          className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100 flex flex-col lg:flex-row min-h-[600px] transition-all duration-300 hover:shadow-slate-300/60"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >

          {/* COLONNE GAUCHE : VISUEL */}
          <div className="lg:w-7/12 relative h-96 lg:h-auto overflow-hidden bg-slate-100 group">
            {/* Image Dynamique avec transition */}
            <div className="absolute inset-0">
              <img
                key={currentImageIndex}
                src={currentImage}
                alt={`Fenêtre PVC Blanc - ${currentTab.label}`}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 animate-fadeIn"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            {/* Auto-play indicator */}
            {isAutoPlaying && !isHovering && (
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg z-20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-medium text-white tracking-wide uppercase">Démo Auto</span>
              </div>
            )}

            {/* Badges Flottants */}
            <div className="absolute top-6 left-6 flex flex-col gap-2 items-start">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                🔥 N°1 des ventes
              </span>
              <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                <Thermometer size={14} /> Isolation A++
              </span>
            </div>

            {/* Overlay du bas (Infos Clés) */}
            <div className="absolute bottom-6 left-6 right-6 text-white p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl opacity-90 lg:opacity-100 transition-opacity">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Zap className="text-yellow-300" size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">💡 L'ASTUCE PRIX</h4>
                  <p className="text-sm text-blue-50 leading-relaxed">
                    Le Blanc est <strong>30% moins cher</strong> que la couleur et <strong>disponible plus vite</strong>. C'est le choix intelligent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : CONFIGURATION & OFFRE */}
          <div className="lg:w-5/12 p-6 lg:p-10 flex flex-col bg-white relative z-10">

            {/* 1. Onglets de sélection */}
            <div className="flex p-1 bg-slate-100 rounded-xl mb-8 overflow-x-auto scrollbar-hide">
              {Object.values(PVC_OFFERS).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    // Trouve la première image de ce tab
                    const firstImageOfTab = WINDOW_IMAGES.findIndex(img => img.tabKey === tab.id);
                    if (firstImageOfTab !== -1) {
                      setCurrentImageIndex(firstImageOfTab);
                    }
                    setConfig(prev => ({ ...prev, ...tab.defaultConfig }));
                  }}
                  className={`
                                        flex-1 py-2.5 px-3 rounded-lg text-sm font-bold transition-all duration-300 whitespace-nowrap
                                        ${activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-md transform scale-[1.02]'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}
                                    `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 2. Titre & Features Dynamiques */}
            <div className="mb-8">
              <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">
                {currentTab.title}
              </h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">
                {currentTab.subtitle}
              </p>

              <ul className="space-y-3">
                {currentTab.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="p-1.5 bg-white rounded-md shadow-sm text-blue-500">
                      <feature.icon size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-semibold">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Configurations Possibles (Informative) */}
            <div className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-200/60">
              <div className="mb-3">
                <h4 className="text-xs uppercase font-bold text-slate-700 mb-4 tracking-wider">CONFIGURATIONS POSSIBLES</h4>

                {/* Ligne 1 : Formes & Châssis */}
                <div className="flex items-start gap-3 mb-4 p-3 bg-white rounded-xl border border-slate-100">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                    <Maximize size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900 mb-1">Toutes formes & châssis</div>
                    <div className="text-xs text-slate-500 leading-relaxed">Fixe, 1 à 3 vantaux, Ensembles composés...</div>
                  </div>
                </div>

                {/* Ligne 2 : Ouverture */}
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-100">
                  <div className="p-2 bg-green-50 rounded-lg shrink-0">
                    <MousePointerClick size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Ouverture : Oscillo-battant disponible</div>
                  </div>
                </div>
              </div>

              {/* Option Volet - Important pour le Pack Duo */}
              <div className={`
                                flex items-center justify-between p-3 rounded-xl border-2 transition-all cursor-pointer group
                                ${config.shutter ? 'border-orange-500 bg-orange-50' : 'border-slate-200 bg-white hover:border-slate-300'}
                            `}
                onClick={() => setConfig({ ...config, shutter: !config.shutter })}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center ${config.shutter ? 'bg-orange-500 border-orange-500' : 'border-slate-300 bg-slate-100'}`}>
                    {config.shutter && <Check size={14} className="text-white" strokeWidth={3} />}
                  </div>
                  <span className={`text-sm font-bold ${config.shutter ? 'text-orange-900' : 'text-slate-600'}`}>
                    Ajouter un volet roulant
                  </span>
                </div>
                {config.shutter && (
                  <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full font-bold animate-pulse">
                    -20%
                  </span>
                )}
              </div>
            </div>

            {/* CTA Zone */}
            <div className="mt-auto space-y-3">
              <button
                onClick={handleCtaClick}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-slate-900/30 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles size={18} className="text-yellow-400" />
                <span>Obtenir mon devis {config.shutter ? 'PACK DUO' : 'PVC'}</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center px-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-xs font-bold text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-slate-800 transition-colors"
                >
                  En savoir plus et fiche technique
                </button>
              </div>
              <CTATrustBadges />
            </div>

          </div>
        </div>

        {/* --- BANDEAU PROMO PACK DUO --- */}
        <div className={`
                    mt-8 transition-all duration-500 ease-in-out transform
                    ${(config.shutter || isHovering) ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-4'}
                `}>
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden group cursor-pointer" onClick={() => !config.shutter && setConfig({ ...config, shutter: true })}>
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-inner shrink-0">
                  <BadgePercent size={32} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-white text-red-600 text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase">Offre Limitée</span>
                    <span className="text-orange-100 text-xs font-bold tracking-wide">PACK DUO</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black leading-none mb-1">
                    -20% SUR TOUT LE DEVIS
                  </h3>
                  <p className="text-orange-100 font-medium text-sm md:text-base">
                    Pour l'achat simultané de <strong>Fenêtres + Volets</strong> (Solaire, Radio ou Filaire).
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* Badges motorisation */}
                <div className="flex gap-2">
                  {['Solaire', 'Radio', 'Filaire'].map((m) => (
                    <span key={m} className="px-3 py-1 bg-black/20 rounded-lg text-xs font-bold border border-white/10 backdrop-blur-sm">
                      {m}
                    </span>
                  ))}
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
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/20">
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
            <div className="px-8 py-6 overflow-y-auto space-y-8 custom-scrollbar">

              {/* Pourquoi choisir... (Grid) */}
              <h4 className="font-bold text-slate-900 text-lg -mb-2">Pourquoi choisir le PVC Blanc ?</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
                  <Thermometer className="text-blue-500 mr-3 shrink-0" size={20} />
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
              <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-white rounded-2xl p-6 border border-blue-100/50">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-3 text-blue-600 shrink-0">
                    <Trophy size={22} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Excellence Technique (Schüco CT70)</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Profilés multi-chambres 70mm pour une isolation optimale",
                    "Joints EPDM double niveau : étanchéité parfaite air/eau",
                    "Vitrage 4/16/4 ou 4/20/4 Argon + Warm Edge de série",
                    "Durée de vie supérieure à 30 ans sans altération"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 shrink-0 shadow-sm border border-blue-100">
                        <Check size={14} className="text-blue-600" />
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

            {/* Footer / CTA (Sticky Bottom) - Style Alu */}
            <div className="p-6 border-t border-slate-100 bg-white shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20">
              <button
                onClick={() => {
                  setShowModal(false);
                  handleCtaClick();
                }}
                className="w-full py-4 bg-gradient-to-r from-blue-900 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl shadow-slate-900/20 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center group"
              >
                <span>Demander mon étude PVC</span>
                <div className="ml-3 bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={18} />
                </div>
              </button>
              <div className="flex justify-center items-center mt-4 space-x-6">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                  <ShieldCheck size={12} className="mr-1.5 text-green-500" /> Gratuit – Sans engagement
                </span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                  <Zap size={12} className="mr-1.5 text-yellow-500" /> Réponse rapide
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PVCOffer;