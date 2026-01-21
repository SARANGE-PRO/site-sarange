import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check, Percent, Info, Briefcase, MapPin } from 'lucide-react';
import { IMAGES } from '@data/constants';

const Hero = ({ onOpenAides, onOpenIntervention }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-slate-900"
            aria-label="Introduction Menuiserie Sarange"
        >
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* SEO IMAGE : LCP optimisé */}
                <motion.img
                    src={IMAGES.hero}
                    alt="Fenêtres PVC et Alu Sarange - Fabricant Installateur Île-de-France"
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 sm:via-slate-950/80 to-slate-950/60 sm:to-transparent"></div>

                <div
                    className="absolute inset-0 z-0 opacity-10 sm:opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                    }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-10"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-8 text-white space-y-6 sm:space-y-8"
                >
                    {/* --- SEO H1 : HIERARCHIE CORRIGÉE (PRODUIT D'ABORD) --- */}
                    <h1 className="flex flex-col items-start max-w-4xl">

                        {/* Ligne 1 : Avantage Client (Au lieu du métier) */}
                        <motion.span variants={itemVariants} className="text-sm md:text-base font-bold text-orange-500 uppercase tracking-widest mb-2 flex items-center">
                            <span className="w-8 h-[2px] bg-orange-500 mr-3"></span>
                            Direct Usine & Sur-mesure
                        </motion.span>

                        {/* Ligne 2 : LE PRODUIT (H1 Principal) */}
                        <motion.span variants={itemVariants} className="h1-mobile font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300 drop-shadow-xl uppercase tracking-tighter leading-none">
                            FENÊTRES <br className="hidden sm:block" />PVC & ALU
                        </motion.span>

                        {/* Ligne 3 : LE MÉTIER & LA ZONE (Réassurance) */}
                        <motion.span variants={itemVariants} className="h3-mobile font-bold text-slate-100 leading-tight mt-4 flex flex-wrap items-center gap-2">
                            Fabricant & Installateur <span className="hidden sm:inline text-slate-500">|</span>
                            <span className="text-white flex items-center">
                                <MapPin size={20} className="text-orange-500 mr-1 inline" />
                                Île-de-France
                            </span>
                        </motion.span>
                    </h1>

                    {/* --- SEO DESCRIPTION --- */}
                    <motion.p
                        variants={itemVariants}
                        className="body-mobile text-slate-300 leading-relaxed max-w-2xl font-light text-lg"
                    >
                        Spécialiste de la <strong>rénovation énergétique</strong> de l'habitat.
                        Menuiseries haute isolation, fabriquées dans notre atelier du 77 et posées par nos experts.
                        <strong>Garantie 10 ans</strong>.
                    </motion.p>

                    {/* --- CHECKLIST --- */}
                    <motion.ul variants={itemVariants} className="space-y-3 sm:space-y-4 pt-2">
                        {[
                            'Fabrication locale à Combs-la-Ville (77)',
                            'Poseurs salariés SARANGE (Pas de sous-traitance)',
                            'Certifié RGE Qualibat : Éligible aux primes',
                        ].map((text, index) => (
                            <li key={index} className="flex items-center text-slate-100 font-medium group">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded-full bg-orange-500 flex items-center justify-center mr-3 sm:mr-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                                    <Check size={14} className="text-white stroke-[3px]" />
                                </div>
                                <span className="text-sm sm:text-base">{text}</span>
                            </li>
                        ))}
                    </motion.ul>

                    {/* --- CTAs --- */}
                    <motion.div
                        variants={itemVariants}
                        className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-5"
                    >
                        <button
                            onClick={() =>
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                            }
                            title="Demander un devis fenêtre gratuit"
                            className="tap-target px-6 sm:px-10 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg font-bold rounded-xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all flex items-center justify-center group"
                        >
                            DEVIS GRATUIT & RAPIDE
                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => document.getElementById('b2b').scrollIntoView({ behavior: 'smooth' })}
                            className="tap-target px-6 sm:px-10 py-3 sm:py-4 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-base sm:text-lg font-medium rounded-xl backdrop-blur-sm transition-all flex items-center justify-center group"
                        >
                            <Briefcase className="mr-3 text-slate-400 group-hover:text-white" size={20} />
                            Espace Architectes
                        </button>
                    </motion.div>

                    {/* Mobile Badges */}
                    <motion.div variants={itemVariants} className="flex lg:hidden flex-col gap-3 pt-4">
                        <button
                            onClick={onOpenIntervention}
                            className="tap-target inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 transition-all shadow-lg"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-wide text-slate-100">
                                Intervention 75, 77, 91, 94
                            </span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Colonne Droite : Trust Card (PC) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1.2, ease: 'easeOut' }}
                    className="hidden lg:flex flex-col items-end space-y-4 lg:col-span-4"
                >
                    <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl text-right max-w-xs transform hover:scale-105 transition-transform duration-500">
                        <p className="text-orange-500 font-black text-4xl mb-1">Direct</p>
                        <p className="text-white font-bold text-xl uppercase tracking-tighter mb-4 border-b border-orange-500/30 pb-3 inline-block">
                            USINE
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed block clear-both">
                            Fabrication française sans intermédiaire. <br />
                            Qualité contrôlée à chaque étape.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-3 mt-4">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg cursor-default">
                            <MapPin size={14} className="text-green-400" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-100">
                                Intervention Île-de-France
                            </span>
                        </div>

                        <button
                            onClick={onOpenAides}
                            className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/20 px-4 py-2 rounded-full border border-orange-400 transition-all"
                        >
                            <Percent size={14} className="text-white" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white">
                                Éligible MaPrimeRénov'
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;