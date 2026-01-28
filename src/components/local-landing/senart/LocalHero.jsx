import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Phone,
    Briefcase,
    ChevronDown,
    Sparkles,
    Factory,
    CheckCircle2,
    MapPin,
    ArrowRight,
    UserCheck,  // Pour "Pose par nos équipes"
    BadgeEuro   // Pour "Juste Prix"
} from "lucide-react";
import { IMAGES } from "../../../data/constants";

// --- Animations ---
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

const LocalHero = ({ city = "Sénart", zip = "77", onDevisClick, phoneLink }) => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const [heroHeight, setHeroHeight] = useState('100vh');

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "SARANGE", "item": "https://sarange.fr/" },
            { "@type": "ListItem", "position": 2, "name": "Zones d'Intervention", "item": "https://sarange.fr/villes" },
            { "@type": "ListItem", "position": 3, "name": city, "item": `https://sarange.fr/villes/${city.toLowerCase()}` }
        ]
    };

    useEffect(() => {
        const setFixedMobileHeight = () => setHeroHeight(`${window.innerHeight}px`);
        setFixedMobileHeight();

        let lastWidth = window.innerWidth;
        const handleResize = () => {
            if (window.innerWidth !== lastWidth) {
                setFixedMobileHeight();
                lastWidth = window.innerWidth;
            }
        };

        const handleScroll = () => {
            setShowScrollIndicator(window.scrollY <= 50);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section
                id="hero"
                className="relative flex items-center pt-24 pb-12 bg-slate-950 overflow-hidden"
                style={{ height: heroHeight, minHeight: '600px', maxHeight: heroHeight }}
            >
                {/* --- FOND --- */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={IMAGES.hero}
                        alt={`Menuiserie SARANGE - Intervention à ${city}`}
                        className="w-full h-full object-cover object-center opacity-50"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* --- COLONNE GAUCHE (TEXTE) --- */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 xl:col-span-8 text-white space-y-6"
                    >
                        <div className="flex flex-col items-start max-w-5xl">

                            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                            <motion.div variants={itemVariants} className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border border-white/10 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                <a href="/" className="hover:text-white transition-colors">SARANGE</a>
                                <span className="text-slate-600">/</span>
                                <span className="text-orange-500 font-bold">{city}</span>
                            </motion.div>

                            <motion.h2 variants={itemVariants} className="flex text-xs sm:text-sm font-bold text-orange-400 uppercase tracking-[0.2em] mb-3 items-center">
                                <span className="w-6 sm:w-8 h-[2px] bg-orange-500 mr-2 sm:mr-3 shadow-[0_0_12px_rgba(249,115,22,1)]"></span>
                                Fabricant Local • Atelier (77)
                            </motion.h2>

                            {/* H1 SEO */}
                            <motion.h1
                                variants={itemVariants}
                                className="font-black tracking-tight leading-none flex flex-col"
                            >
                                <span
                                    className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-100 to-slate-400 drop-shadow-2xl py-1"
                                    style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)' }}
                                >
                                    Fenêtres PVC & Aluminium
                                </span>

                                <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-1">
                                    <span className="text-white/90 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                                        sur mesure à {city}
                                    </span>

                                    <span className="relative inline-block group transform -skew-x-6 hover:skew-x-0 transition-transform duration-300">
                                        <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-sm shadow-[0_5px_20px_rgba(249,115,22,0.4)]"></span>
                                        <span className="relative z-10 text-slate-950 px-4 py-2 italic font-black text-lg sm:text-xl lg:text-2xl block uppercase">
                                            Direct Usine
                                        </span>
                                    </span>
                                </div>
                            </motion.h1>

                            {/* TEXTE GAUCHE */}
                            <motion.div variants={itemVariants} className="space-y-2 mt-4 mb-6 max-w-2xl">
                                <p className="text-slate-300 text-sm sm:text-lg font-medium leading-relaxed">
                                    Menuiserie Générale : Fenêtres, Volets, Portes & Vérandas.
                                </p>
                                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                                    Un savoir-faire complet pour une rénovation globale, gérée par un seul interlocuteur local.
                                </p>
                            </motion.div>

                            {/* Liste Produits */}
                            <motion.div variants={itemVariants} className="mt-2 mb-5">
                                <p className="text-sm sm:text-base font-bold text-slate-200 tracking-wide flex flex-wrap items-center gap-x-5 gap-y-2">
                                    <span className="flex items-center gap-2 text-orange-400">
                                        <CheckCircle2 size={16} className="text-orange-500" /> Fenêtres & Baies
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle2 size={16} className="text-orange-500" /> Volets
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle2 size={16} className="text-orange-500" /> Portes
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle2 size={16} className="text-orange-500" /> Vérandas
                                    </span>
                                </p>
                            </motion.div>

                            {/* Badge RGE */}
                            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6 max-w-full">
                                <div className="relative overflow-hidden inline-flex items-center bg-slate-800/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-lg shadow-xl max-w-full">
                                    <div className="relative flex h-3 w-3 mr-3 flex-shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
                                    </div>
                                    <span className="text-sm font-bold text-slate-200">
                                        <span className="text-green-400 font-black">RGE Qualibat</span> • Fabricant-Installateur
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA PREMIUM */}
                        <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button
                                onClick={onDevisClick}
                                className="relative w-full sm:w-auto px-8 py-4 rounded-xl border border-orange-500/30 bg-orange-500/80 hover:bg-orange-500 text-white font-bold shadow-[0_0_30px_rgba(249,115,22,0.25)] backdrop-blur-md transition-all transform hover:-translate-y-1 overflow-hidden group flex items-center justify-center touch-manipulation"
                            >
                                <span className="relative z-10 flex items-center justify-center text-lg tracking-wide text-center uppercase">
                                    Devis Gratuit à {city}
                                    <Sparkles size={20} className="ml-2 animate-pulse" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                            </button>
                            <a
                                href={phoneLink}
                                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
                            >
                                <Phone size={20} /> Conseil & Rendez-vous
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* --- COLONNE DROITE : CARTE "ARGUMENTS VISUELS" (Refaite) --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col items-end justify-center h-full"
                    >
                        {/* Carte Compacte & Structurée */}
                        <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-sm w-full group hover:border-orange-500/40 transition-all duration-500">

                            {/* Halo Lumière */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-colors"></div>

                            {/* 1. HEADER : TITRE DOMINANT */}
                            <div className="mb-5 pb-4 border-b border-white/10">
                                <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-1.5">
                                    VOTRE ATELIER LOCAL
                                </p>
                                <h3 className="text-white font-black text-2xl leading-none uppercase flex flex-col gap-1">
                                    <span>À DEUX PAS</span>
                                    <span className="flex items-center gap-2">
                                        DE CHEZ VOUS
                                        <MapPin className="text-orange-500 animate-bounce" size={20} />
                                    </span>
                                </h3>
                            </div>

                            {/* 2. BODY : 3 ARGUMENTS VISUELS (Pills) */}
                            <div className="space-y-2 mb-6">
                                {/* Argument 1 */}
                                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-2.5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <Factory className="text-orange-500 shrink-0" size={18} />
                                    <span className="font-bold text-white text-sm">Fabrication Interne</span>
                                </div>
                                {/* Argument 2 */}
                                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-2.5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <UserCheck className="text-orange-500 shrink-0" size={18} />
                                    <span className="font-bold text-white text-sm">Pose par nos équipes</span>
                                </div>
                                {/* Argument 3 (Prix mis en valeur) */}
                                <div className="flex items-center gap-3 bg-gradient-to-r from-green-900/30 to-slate-800 border border-green-500/30 p-2.5 rounded-lg">
                                    <BadgeEuro className="text-green-400 shrink-0" size={18} />
                                    <span className="font-bold text-white text-sm">Qualité au juste prix</span>
                                </div>
                            </div>

                            {/* 3. FOOTER : ADRESSE DISCRÈTE */}
                            <a
                                href="https://maps.google.com/?q=Sarange+Combs-la-Ville"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 justify-center text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <MapPin size={14} />
                                <span>28 Rue Jean Rostand, Combs-la-Ville (77)</span>
                                <ArrowRight size={12} />
                            </a>

                        </div>
                    </motion.div>

                </div>

            </section>

            {/* --- SCROLL INDICATOR --- */}
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

export default LocalHero;