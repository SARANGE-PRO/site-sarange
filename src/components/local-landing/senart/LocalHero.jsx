import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Phone,
    MapPin,
    Factory,
    ChevronDown,
    Sparkles,
    CheckCircle2,
    ArrowRight
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

    // ✅ SEO : Schema.org optimisé pour "LocalBusiness" + Fil d'ariane
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "SARANGE", "item": "https://sarange.fr/" },
            { "@type": "ListItem", "position": 2, "name": "Menuisier 77", "item": "https://sarange.fr/villes" },
            { "@type": "ListItem", "position": 3, "name": `Fenêtres à ${city}`, "item": `https://sarange.fr/villes/${city.toLowerCase()}` }
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
                style={{ height: heroHeight, minHeight: heroHeight, maxHeight: heroHeight }}
            >
                {/* --- FOND OPTIMISÉ --- */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={IMAGES.hero}
                        // ✅ SEO : Alt Text riche en mots-clés géolocalisés
                        alt="Menuiserie Sénart : Atelier de fabrication fenêtres PVC Alu et Vérandas à Combs-la-Ville (77)"
                        className="w-full h-full object-cover object-center opacity-50"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
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

                            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                            {/* Fil d'ariane */}
                            <motion.div variants={itemVariants} className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border border-white/10 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                <a href="/" className="hover:text-white transition-colors">SARANGE</a>
                                <span className="text-slate-600">/</span>
                                <span className="text-orange-500 font-bold">{city} (77)</span>
                            </motion.div>

                            {/* ✅ SEO : H2 déguisé en Tagline (Mots clés : Menuiserie, Fabricant, 77) */}
                            <motion.h2 variants={itemVariants} className="hidden sm:flex text-xs sm:text-sm font-bold text-orange-400 uppercase tracking-[0.2em] mb-2 items-center">
                                <span className="w-8 h-[2px] bg-orange-500 mr-3 shadow-[0_0_12px_rgba(249,115,22,1)]"></span>
                                Fabricant-Installateur 77
                            </motion.h2>

                            {/* ✅ H1 SEO PRINCIPAL : FENÊTRES + LOCALISATION */}
                            <motion.h1
                                variants={itemVariants}
                                className="font-black uppercase tracking-tighter leading-none -mt-2 sm:mt-0 flex flex-col"
                            >
                                {/* Ligne 1 : FENÊTRES PVC & ALU */}
                                <span
                                    className="bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-100 to-slate-400 drop-shadow-2xl py-1"
                                    style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
                                >
                                    FENÊTRES PVC & ALU
                                </span>

                                {/* Ligne 2 : SÉNART + SUR-MESURE */}
                                <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-1">
                                    <span
                                        className="text-white whitespace-nowrap"
                                        style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
                                    >
                                        À SÉNART
                                    </span>

                                    {/* Badge "Direct Usine" & "Sur-Mesure" */}
                                    <span className="relative inline-block group transform -skew-x-6 hover:skew-x-0 transition-transform duration-300 ml-2 mt-1 sm:mt-0">
                                        <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-sm shadow-[0_5px_20px_rgba(249,115,22,0.4)]"></span>
                                        <div className="relative z-10 text-slate-950 px-3 py-1 italic font-black text-sm sm:text-lg lg:text-xl block uppercase leading-none">
                                            <span>DIRECT USINE</span>
                                            <span className="block text-[0.7em] opacity-80">SUR-MESURE</span>
                                        </div>
                                    </span>
                                </div>
                            </motion.h1>

                            {/* ✅ SEO : Paragraphe riche qui lie Atelier (Combs) et Zone (Sénart) */}
                            <motion.p variants={itemVariants} className="text-slate-300 text-sm sm:text-lg max-w-2xl leading-relaxed font-medium">
                                Votre <strong>atelier de fabrication</strong> est situé à <strong>Combs-la-Ville</strong>.
                                Nous installons vos menuiseries sans sous-traitance sur toute l'agglomération de Sénart.
                            </motion.p>

                            {/* Liste Produits (Vérandas en évidence pour le maillage sémantique) */}
                            <motion.div variants={itemVariants} className="mt-2 mb-6">
                                <p className="text-sm sm:text-base font-bold text-slate-200 tracking-wide flex flex-wrap items-center gap-x-5 gap-y-2 uppercase">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-orange-500" /> Vérandas
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-orange-500" /> Volets
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-orange-500" /> Portes
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-orange-500" /> Garages
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
                                        Certifié <span className="text-green-400 font-black">RGE Qualibat</span>
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
                                <Phone size={20} /> Appeler l'Atelier
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* --- COLONNE DROITE : FOCUS ATELIER (Reassurance Locale) --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="hidden lg:flex flex-col items-end lg:col-span-4"
                    >
                        {/* Carte Glassmorphism "ATELIER" */}
                        <div className="relative bg-slate-900/70 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-2xl max-w-sm group hover:border-orange-500/40 hover:shadow-[0_0_50px_rgba(249,115,22,0.15)] transition-all duration-500">

                            {/* Glow Effect Orange */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-colors"></div>

                            <div className="relative flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Votre Voisin</p>
                                    <h3 className="text-white font-black text-2xl uppercase leading-none">
                                        ATELIER
                                    </h3>
                                </div>
                                <Factory className="text-white/10 group-hover:text-orange-500/20 transition-colors" size={48} />
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                <strong>Circuit Court :</strong> Vos fenêtres sont fabriquées ici, à Combs-la-Ville, et posées par nos salariés.
                            </p>

                            {/* Adresse Compacte */}
                            {/* Adresse Compacte (Lien Itinéraire) */}
                            <a
                                href="https://www.google.com/maps/dir//SARANGE,+28+Rue+Jean+Rostand,+77380+Combs-la-Ville"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-600/50 rounded-xl flex items-start gap-3 mb-2 hover:bg-slate-700/50 transition-colors cursor-pointer group/map"
                            >
                                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} />
                                <div>
                                    <p className="text-white font-bold text-sm group-hover/map:text-orange-400 transition-colors">Combs-la-Ville (77)</p>
                                    <p className="text-slate-500 text-xs">Zone de l'An 2000</p>
                                </div>
                                <ArrowRight size={16} className="text-slate-600 ml-auto mt-1 group-hover/map:text-white transition-colors" />
                            </a>

                            {/* Indicateur Ouvert */}
                            <div className="flex items-center gap-2 mt-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-bold text-slate-300">Appelez-nous pour prendre rendez-vous</span>
                            </div>
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