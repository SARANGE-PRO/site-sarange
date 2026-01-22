import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown, Percent, Info, Briefcase, MapPin, Sparkles, Factory, Ruler, UserCheck } from 'lucide-react';
import { IMAGES } from '../../data/constants';

const Hero = ({ onOpenAides, onOpenIntervention }) => {
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
    <section
      id="hero"
      // CHANGEMENT: pb-20 pour laisser de la place au scroll indicator sur mobile
      className="relative min-h-[100dvh] flex items-center pt-24 sm:pt-24 lg:pt-16 pb-20 lg:pb-12 overflow-hidden bg-slate-950"
      aria-label="Menuiserie PVC et Alu sur-mesure Sarange"
    >
      {/* --- FOND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* OPTIMISATION SEO LCP : fetchPriority="high" */}
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-16 items-center">

        {/* --- COLONNE GAUCHE --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // CHANGEMENT: space-y-4 au lieu de 6 pour gagner de la place sur mobile
          className="lg:col-span-8 text-white space-y-4 lg:space-y-6"
        >
          <div className="flex flex-col items-start max-w-4xl">

            {/* Tagline */}
            <motion.div variants={itemVariants} className="text-[10px] sm:text-sm font-bold text-orange-400 uppercase tracking-[0.2em] mb-1 sm:mb-2 flex items-center">
              <span className="w-6 sm:w-8 h-[2px] bg-orange-500 mr-2 sm:mr-3 shadow-[0_0_12px_rgba(249,115,22,1)]"></span>
              Direct Fabricant • RAPPORT QUALITÉ-PRIX
            </motion.div>

            {/* H1 : KEYWORD PRINCIPAL */}
            <motion.h1
              variants={itemVariants}
              className="font-black uppercase tracking-tighter leading-none"
            >
              <span
                className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-100 to-slate-400 drop-shadow-2xl py-1 sm:py-2"
                // CHANGEMENT: clamp ajusté (2.5rem min) pour éviter les retours à la ligne intempestifs sur petit écran
                style={{ fontSize: 'clamp(2.5rem, 9vw, 6rem)' }}
              >
                FENÊTRES
              </span>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-0 sm:mt-1">
                <span className="text-white/90 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  PVC & ALU
                </span>

                <span className="relative inline-block group transform -skew-x-6 hover:skew-x-0 transition-transform duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-sm shadow-[0_5px_20px_rgba(249,115,22,0.4)]"></span>
                  <span className="relative z-10 text-slate-950 px-3 sm:px-4 py-0.5 sm:py-1 italic font-black text-lg sm:text-2xl lg:text-3xl block">
                    sur-mesure
                  </span>
                </span>
              </div>
            </motion.h1>

            {/* H2 : LOCALISATION */}
            <motion.h2 variants={itemVariants} className="font-semibold text-slate-200 mt-4 sm:mt-6 mb-3 sm:mb-4 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                <MapPin size={16} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">Combs-la-Ville <span className="text-orange-500 font-black">(77)</span></span>
              </div>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="text-slate-400 font-normal text-sm sm:text-base hidden sm:block">Île-de-France</span>
            </motion.h2>

            {/* Badge RGE */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-4 sm:mb-6">
              <div className="relative overflow-hidden inline-flex items-center bg-slate-800/60 backdrop-blur-xl border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-xl">
                <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 mr-2 sm:mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
                </div>
                <span className="text-[10px] sm:text-sm uppercase tracking-wide font-bold text-slate-200">
                  Fabricant-Installateur <span className="text-green-400 font-black">Certifié RGE Qualibat</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* LISTE TECHNIQUE */}
          {/* CHANGEMENT: gap réduit pour compacter sur mobile */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-6 max-w-2xl py-1 sm:py-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3 group">
                <feature.icon size={18} className="text-orange-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-slate-100 text-sm sm:text-base leading-tight">{feature.title}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{feature.sub}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mention légale */}
          <motion.p variants={itemVariants} className="text-[10px] text-slate-500 italic pl-1 hidden sm:block">
            *Taux réduit applicable sous conditions d'éligibilité.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="relative w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-1 overflow-hidden group z-20"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center justify-center text-base sm:text-lg tracking-wide">
                DEMANDER MON DEVIS GRATUIT
                <Sparkles size={18} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </button>
          </motion.div>

          {/* Mobile Shortcuts (Boutons secondaires) */}
          <motion.div variants={itemVariants} className="flex lg:hidden gap-2 pt-2 overflow-x-auto no-scrollbar pb-2">
            <button
              onClick={onOpenIntervention}
              className="whitespace-nowrap px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs font-bold text-slate-100 flex items-center gap-2 active:scale-95 transition-all backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Zones d'intervention
            </button>
            <button
              onClick={onOpenAides}
              className="whitespace-nowrap px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs font-bold text-orange-400 flex items-center gap-2 active:scale-95 transition-all backdrop-blur-sm"
            >
              <Percent size={12} />
              Aides & TVA*
            </button>
          </motion.div>
        </motion.div>

        {/* --- COLONNE DROITE (Desktop uniquement) --- */}
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

      {/* --- SCROLL INDICATOR MOBILE CENTRÉ --- */}
      <motion.div
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
        // CORRECTION ICI :
        // 1. Suppression de 'left-1/2' et '-translate-x-1/2' (qui entraient en conflit avec Framer Motion)
        // 2. Ajout de 'left-0', 'w-full' pour prendre toute la largeur
        // 3. 'flex-col items-center' assure le centrage horizontal parfait du contenu
        className="absolute bottom-6 left-0 w-full flex flex-col items-center lg:hidden cursor-pointer z-30 mix-blend-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <span className="text-[9px] text-slate-400 mb-1 font-bold tracking-widest uppercase drop-shadow-md">Découvrir</span>
        <div className="bg-slate-900/50 p-1 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
          <ChevronDown className="text-orange-500" size={20} />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;