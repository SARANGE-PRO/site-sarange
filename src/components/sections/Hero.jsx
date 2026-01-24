import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Percent, Info, Briefcase, MapPin, Sparkles, Factory, Ruler, UserCheck } from 'lucide-react';
import { IMAGES } from '../../data/constants';

const Hero = ({ onOpenAides, onOpenIntervention }) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    { icon: Factory, title: "Prix Direct Usine", sub: "Sans intermédiaire" },
    { icon: Ruler, title: "Métrage Précis", sub: "Technique certifiée" },
    { icon: UserCheck, title: "Pose Expert", sub: "Salariés SARANGE" },
    { icon: Percent, title: "TVA Réduite 5,5%*", sub: "Selon éligibilité" },
  ];

  return (
    <>
    <section
      id="hero"
      className="relative flex items-center pt-20 sm:pt-24 lg:pt-16 pb-12 bg-slate-950"
      style={{ height: '100vh', maxHeight: '100vh', minHeight: '100vh' }}
      aria-label="Menuiserie PVC et Alu sur-mesure Sarange"
    >
      {/* --- FOND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={IMAGES.hero}
          alt="Atelier de fabrication SARANGE - Menuiserie sur-mesure Combs-la-Ville"
          className="w-full h-full object-cover object-center opacity-60"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

        {/* --- COLONNE GAUCHE --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 text-white space-y-6"
        >
          <div className="flex flex-col items-start max-w-5xl">

            {/* Tagline : CACHÉE SUR MOBILE */}
            <motion.div variants={itemVariants} className="hidden sm:flex text-xs sm:text-sm font-bold text-orange-400 uppercase tracking-[0.2em] mb-2 items-center">
              <span className="w-8 h-[2px] bg-orange-500 mr-3 shadow-[0_0_12px_rgba(249,115,22,1)]"></span>
              Direct Fabricant • Meilleur Rapport Qualité/Prix
            </motion.div>

            {/* H1 : FENÊTRES (Remonté sur mobile avec -mt-12) */}
            <motion.h1
              variants={itemVariants}
              className="font-black uppercase tracking-tighter leading-none -mt-12 sm:mt-0"
            >
              <span
                className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-100 to-slate-400 drop-shadow-2xl py-2"
                style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
              >
                FENÊTRES
              </span>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-1">
                <span className="text-white/90 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  PVC & ALU
                </span>

                <span className="relative inline-block group transform -skew-x-6 hover:skew-x-0 transition-transform duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-sm shadow-[0_5px_20px_rgba(249,115,22,0.4)]"></span>
                  <span className="relative z-10 text-slate-950 px-4 py-1 italic font-black text-xl sm:text-2xl lg:text-3xl block">
                    sur-mesure
                  </span>
                </span>
              </div>
            </motion.h1>

            {/* H2 : LOCALISATION */}
            <motion.h2 variants={itemVariants} className="font-semibold text-slate-200 mt-6 mb-2 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                <MapPin size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">Combs-la-Ville <span className="text-orange-500 font-black">(77)</span></span>
              </div>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="text-slate-400 font-normal text-sm sm:text-base hidden sm:block">Île-de-France</span>
            </motion.h2>

            {/* LISTE PRODUITS */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl font-medium text-slate-300 leading-tight mb-6 tracking-wide">
              Volets • Portes • Vérandas • Garages
            </motion.p>

            {/* Badge RGE */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6">
              <div className="relative overflow-hidden inline-flex items-center bg-slate-800/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-lg shadow-xl">
                <div className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
                </div>
                <span
                  className="uppercase tracking-wide font-bold text-slate-200"
                  style={{ fontSize: 'clamp(0.65rem, 2.8vw, 0.875rem)' }}
                >
                  Fabricant-Installateur <span className="text-green-400 font-black">Certifié RGE Qualibat</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* LISTE TECHNIQUE : DESKTOP UNIQUEMENT */}
          <motion.div variants={itemVariants} className="hidden lg:grid grid-cols-2 gap-x-8 gap-y-6 max-w-2xl py-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <feature.icon size={20} className="text-orange-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-slate-100 text-sm sm:text-base leading-tight">{feature.title}</span>
                  <span className="text-xs text-slate-400 mt-0.5 leading-snug">{feature.sub}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p variants={itemVariants} className="text-[10px] text-slate-500 italic pl-1 hidden lg:block">
            *Taux réduit applicable sous conditions d'éligibilité.
          </motion.p>

          {/* CTA NOUVEAU STYLE (Glassmorphism + Centrage Parfait) */}
          <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="relative w-full sm:w-auto px-8 py-4 rounded-xl border border-orange-500/30 bg-orange-500/80 hover:bg-orange-500 text-white font-bold shadow-[0_0_30px_rgba(249,115,22,0.25)] backdrop-blur-md transition-all transform hover:-translate-y-1 overflow-hidden group flex items-center justify-center touch-manipulation"
            >
              <span className="relative z-10 flex items-center justify-center text-lg tracking-wide text-center uppercase">
                Demander mon devis
                <Sparkles size={20} className="ml-2 animate-pulse" />
              </span>
              {/* Effet Brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            </button>
          </motion.div>

          {/* BOUTONS SHORTCUTS MOBILE */}
          <motion.div variants={itemVariants} className="flex lg:hidden gap-3 pt-4 pb-2 flex-wrap justify-center w-full">
            <button
              onClick={onOpenIntervention}
              className="flex-1 min-w-[140px] px-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-xs font-bold text-slate-100 flex items-center justify-center gap-2 active:scale-95 transition-all touch-manipulation"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Zones d'intervention
            </button>
            <button
              onClick={onOpenAides}
              className="flex-1 min-w-[140px] px-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-xs font-bold text-orange-400 flex items-center justify-center gap-2 active:scale-95 transition-all touch-manipulation"
            >
              <Percent size={14} />
              Aides & TVA*
            </button>
          </motion.div>
        </motion.div>

        {/* --- COLONNE DROITE (Desktop Only) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden lg:flex flex-col items-end lg:col-span-4"
        >
          <div className="relative bg-slate-900/70 backdrop-blur-2xl border border-white/10 p-7 rounded-2xl shadow-2xl max-w-sm group hover:border-orange-500/40 hover:shadow-[0_0_50px_rgba(249,115,22,0.15)] transition-all duration-500">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-colors"></div>

            <div className="relative flex justify-between items-start mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 font-black text-7xl leading-none tracking-tighter">
                100<span className="text-4xl align-top text-orange-500">%</span>
              </span>
              <Briefcase className="text-white/10 group-hover:text-orange-500/20 transition-colors" size={40} />
            </div>

            <p className="text-white font-black text-xl uppercase tracking-wider mb-2 border-b-2 border-gradient-to-r from-orange-500 to-transparent pb-2 inline-block">
              Direct Usine
            </p>
            <p className="text-slate-400 text-sm leading-snug mb-6">
              Pas d'intermédiaire. Du métrage à l'installation, tout est géré par nos experts certifiés.
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={onOpenIntervention}
                className="w-full px-4 py-2.5 bg-slate-800 hover:bg-slate-750 border border-slate-600/50 rounded-lg flex items-center justify-between group/btn transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-lg shadow-green-500/50"></span>
                  </span>
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">Zones d'intervention</span>
                </div>
                <ChevronRight size={14} className="text-slate-500 group-hover/btn:text-white transition-all" />
              </button>

              <button
                onClick={onOpenAides}
                className="w-full px-4 py-2.5 bg-slate-800 hover:bg-slate-750 border border-slate-600/50 rounded-lg flex items-center justify-between group/btn transition-all"
              >
                <div className="flex items-center gap-2">
                  <Percent size={14} className="text-orange-400" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">Éligible Aides & TVA*</span>
                </div>
                <Info size={14} className="text-slate-500 group-hover/btn:text-orange-400 transition-colors" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>

    </section>

    {/* --- SCROLL INDICATOR (OUTSIDE SECTION) --- */}
    <AnimatePresence>
      {showScrollIndicator && (
        <motion.div 
          className="fixed bottom-[100px] sm:bottom-24 lg:bottom-10 left-0 right-0 flex justify-center pointer-events-none z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, y: { delay: 2, duration: 2, repeat: Infinity } }}
        >
          <div className="flex flex-col items-center px-4 py-2 bg-slate-950/80 backdrop-blur-sm rounded-full border border-slate-800/50">
            <span className="text-[10px] text-slate-400 mb-1 font-medium tracking-widest uppercase">
              Découvrir
            </span>
            <ChevronDown className="text-orange-500" size={22} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Hero;
