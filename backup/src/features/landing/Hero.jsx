import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check, Percent, Info, Briefcase, Award, Shield, MapPin, Factory } from 'lucide-react';
import { IMAGES } from '../../data/constants';

const Hero = ({ onOpenAides, onOpenIntervention }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 pb-12 sm:pt-24 lg:pt-20 overflow-hidden bg-slate-900">

            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                    src={IMAGES.hero}
                    alt="Atelier de fabrication SARANGE - Fenêtres PVC et Alu sur-mesure Combs-la-Ville"
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 sm:via-slate-950/80 to-slate-950/40"></div>

                {/* Grille technique (Blueprint effect) */}
                <div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">

                {/* --- COLONNE GAUCHE (CONTENU) --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-8 text-white space-y-5 sm:space-y-6"
                >

                    {/* BLOC TITRE */}
                    <div className="flex flex-col items-start max-w-4xl relative">

                        {/* Tagline Direct Fabricant */}
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 opacity-90">
                            <Factory size={20} className="text-orange-500" />
                            <span className="text-orange-500 text-xs sm:text-sm font-bold uppercase tracking-widest">
                                Direct Fabricant • Prix d'Usine
                            </span>
                        </motion.div>

                        {/* H1 : Produit Principal */}
                        <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-7xl font-black text-white drop-shadow-xl leading-[1.05] mb-4">
                            Fenêtres <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">PVC & Alu</span>
                            <br />
                            <span className="text-2xl sm:text-4xl lg:text-6xl text-slate-300 font-bold">Sur-Mesure</span>
                        </motion.h1>

                        {/* H2 : Localisation */}
                        <motion.h2 variants={itemVariants} className="text-lg sm:text-2xl lg:text-3xl font-semibold text-slate-200 mb-3 flex items-center gap-2 flex-wrap">
                            <MapPin size={22} className="text-orange-500 flex-shrink-0" />
                            <span>Combs-la-Ville <span className="text-slate-400 font-normal text-base sm:text-xl">(77)</span></span>
                            <span className="text-slate-600 hidden sm:inline">|</span>
                            <span className="text-slate-400 font-normal text-base sm:text-xl">Île-de-France</span>
                        </motion.h2>

                        {/* P : Gamme de Produits */}
                        <motion.p variants={itemVariants} className="text-base sm:text-xl lg:text-2xl text-slate-300 font-medium mb-5 flex items-center gap-3 flex-wrap">
                            <span>Portes</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            <span>Volets</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            <span>Vérandas</span>
                        </motion.p>

                        {/* BADGES CERTIFICATIONS */}
                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
                            {/* Badge RGE */}
                            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg px-4 py-2.5 backdrop-blur-sm shadow-lg">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </div>
                                <Award size={18} className="text-green-400" />
                                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                                    Certifié <span className="text-green-400">RGE</span>
                                </span>
                            </div>

                            {/* Badge Qualibat */}
                            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 backdrop-blur-sm shadow-lg">
                                <Shield size={18} className="text-orange-400" />
                                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                                    Qualibat
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* PROPOSITION DE VALEUR */}
                    <motion.div variants={itemVariants} className="bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 pl-4 pr-6 py-3 rounded-r-lg backdrop-blur-sm">
                        <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-medium">
                            <span className="text-orange-400 font-bold">Fabrication 100% locale</span> dans notre atelier de Combs-la-Ville.
                            Du métrage à l'installation par nos techniciens certifiés.
                        </p>
                    </motion.div>

                    {/* ARGUMENTS DE VENTE */}
                    <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-3 pt-2">
                        {[
                            { icon: Factory, text: "Sans intermédiaire", sub: "Prix d'usine garantis" },
                            { icon: Award, text: "Profilés Schüco", sub: "Performance thermique optimale" },
                            { icon: Shield, text: "Garantie décennale", sub: "Pose certifiée" },
                            { icon: Percent, text: "TVA réduite 5,5%", sub: "Aides disponibles" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                                <item.icon size={20} className="text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                <div>
                                    <p className="text-white text-sm sm:text-base font-bold leading-tight">{item.text}</p>
                                    <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTAs PRINCIPAUX */}
                    <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm sm:text-base rounded-lg shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:-translate-y-0.5 hover:scale-105 flex items-center justify-center group"
                        >
                            <span>DEVIS GRATUIT SOUS 24H</span>
                            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                        </button>

                        <button
                            onClick={() => document.getElementById('realisations').scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold text-sm sm:text-base rounded-lg backdrop-blur-sm transition-all hover:border-white/50 flex items-center justify-center"
                        >
                            Voir nos Réalisations
                        </button>
                    </motion.div>

                    {/* MOBILE QUICK ACCESS */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
                        <button
                            onClick={onOpenIntervention}
                            className="whitespace-nowrap px-4 py-2.5 bg-slate-800/80 border border-slate-600/50 rounded-full text-xs font-bold text-slate-200 flex items-center gap-2 hover:bg-slate-700 hover:border-green-500/50 transition-all backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span>Zone d'intervention IDF</span>
                        </button>

                        <button
                            onClick={onOpenAides}
                            className="whitespace-nowrap px-4 py-2.5 bg-slate-800/80 border border-slate-600/50 rounded-full text-xs font-bold text-orange-400 flex items-center gap-2 hover:bg-slate-700 hover:border-orange-500/50 transition-all backdrop-blur-sm"
                        >
                            <Percent size={14} />
                            <span>Aides & TVA 5,5%</span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* --- COLONNE DROITE : CARD AVANTAGES (Desktop) --- */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="hidden lg:flex flex-col items-end lg:col-span-4"
                >
                    {/* Card Avantages RGE */}
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/20 w-full max-w-sm group hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 shadow-xl">

                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500/50 rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500/50 rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500/50 rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500/50 rounded-br-lg"></div>

                        {/* Header */}
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                    <Award className="text-orange-500" size={22} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-white font-black text-lg uppercase tracking-tight">Avantages</p>
                                    <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">Client</p>
                                </div>
                            </div>
                            <span className="text-orange-500 font-black text-4xl leading-none">100<span className="text-xl align-top">%</span></span>
                        </div>

                        {/* Liste des avantages */}
                        <ul className="space-y-3 mb-5">
                            {[
                                "TVA réduite à 5,5% automatique",
                                "Éligible MaPrimeRénov'",
                                "Garantie décennale incluse",
                                "Contrôle qualité CSTB"
                            ].map((text, index) => (
                                <li key={index} className="flex items-start gap-2.5 text-slate-200 text-sm">
                                    <Check size={16} className="text-green-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                    <span className="leading-snug">{text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Boutons d'action */}
                        <div className="flex flex-col gap-2.5 pt-3 border-t border-white/10">
                            <button
                                onClick={onOpenIntervention}
                                className="w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600/50 hover:border-green-500/50 rounded-lg flex items-center justify-between group/btn transition-all duration-200"
                            >
                                <div className="flex items-center gap-2.5">
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">Zone Île-de-France</span>
                                </div>
                                <ChevronRight size={16} className="text-slate-500 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                            </button>

                            <button
                                onClick={onOpenAides}
                                className="w-full px-4 py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 border border-orange-500/40 hover:border-orange-500/60 rounded-lg flex items-center justify-between group/btn transition-all duration-200"
                            >
                                <div className="flex items-center gap-2.5">
                                    <Percent size={16} className="text-orange-400" />
                                    <span className="text-xs font-bold text-white uppercase tracking-wide">Calculer mes Aides</span>
                                </div>
                                <Info size={16} className="text-orange-400 group-hover/btn:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
