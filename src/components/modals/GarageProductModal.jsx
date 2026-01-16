import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle, Smartphone, Truck, Key, Maximize, Palette, Wind, Layers, ArrowRight } from 'lucide-react';

const GarageProductModal = ({ isOpen, onClose }) => {
    const contentRef = useRef(null);

    // Fonction pour scroller vers un élément dans la modale
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element && contentRef.current) {
            contentRef.current.scrollTo({
                top: element.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    };

    if (!isOpen) return null;

    const handleCtaClick = () => {
        onClose();
        // Attendre un peu que la modale se ferme
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md" onClick={onClose}>
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 20, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                    className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh] shadow-2xl relative"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header Image / Titre */}
                    <div className="bg-slate-900 text-white pt-10 pb-8 px-8 shrink-0 relative overflow-hidden">
                        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50">
                            <X size={24} className="text-white" />
                        </button>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/20 flex items-center">
                                        <Truck size={12} className="mr-1.5" /> Sur-mesure & Motorisé
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-2">Portes de Garage</h3>
                                <p className="text-orange-200 text-lg font-medium flex items-center">
                                    Sécurité, Isolation & Design
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-300 text-sm mt-6 leading-relaxed max-w-2xl relative z-10">
                            Du garage simple au double, du neuf à la rénovation : chaque porte est fabriquée sur-mesure. Performance thermique, sécurité renforcée et design personnalisé pour valoriser votre habitation.
                        </p>

                        {/* Motif de fond */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                    </div>

                    {/* Contenu Scrollable */}
                    <div ref={contentRef} className="px-8 py-8 overflow-y-auto custom-scrollbar flex-grow bg-slate-50/50">

                        {/* Types d'ouverture - Grid */}
                        <div className="mb-10">
                            <h4 className="font-bold text-slate-900 text-xl mb-6 flex items-center">
                                <Maximize className="text-orange-500 mr-3" />
                                Tous les types d'ouverture
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="font-bold text-slate-800 mb-2 flex items-center">
                                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mr-2 group-hover:scale-110 transition-transform">1</div>
                                        Sectionnelle Plafond
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        La plus répandue en France. Gain de place maximal, préserve les murs latéraux. Isolation thermique renforcée avec panneaux 40 ou 42 mm. Motorisable facilement.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="font-bold text-slate-800 mb-2 flex items-center">
                                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mr-2 group-hover:scale-110 transition-transform">2</div>
                                        Latérale
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Coulisse latéralement le long du mur. Idéale pour plafond encombré ou faible hauteur. Permet un accès piéton partiel rapide sans ouverture complète.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="font-bold text-slate-800 mb-2 flex items-center">
                                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mr-2 group-hover:scale-110 transition-transform">3</div>
                                        Enroulable
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Gain d'espace total : plafond et murs libérés. Enroulement vertical dans un coffre aluminium compact. Solution moderne, discrète et performante en isolation.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="font-bold text-slate-800 mb-2 flex items-center">
                                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mr-2 group-hover:scale-110 transition-transform">4</div>
                                        Battante & Basculante
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Battante : ouverture à la française, charme authentique. Basculante : un seul panneau bascule vers le plafond. Solutions fiables, adaptées à la rénovation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Confort & Options + Design - Grid Mixte */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Confort */}
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center">
                                    <ShieldCheck className="text-slate-700 mr-2" />
                                    Confort & Options
                                </h4>
                                <ul className="space-y-3">
                                    <li className="bg-white p-3 rounded-xl border border-slate-100 flex items-start">
                                        <Key className="text-green-500 mr-3 mt-0.5 shrink-0" size={18} />
                                        <div>
                                            <span className="font-bold text-slate-800 text-sm block">Portillon Piéton Intégré</span>
                                            <span className="text-xs text-slate-500">Seuil extra-plat PMR, accès rapide sans ouverture complète. Idéal pour vélos, poussettes ou usage quotidien.</span>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3 rounded-xl border border-slate-100 flex items-start">
                                        <Smartphone className="text-blue-500 mr-3 mt-0.5 shrink-0" size={18} />
                                        <div>
                                            <span className="font-bold text-slate-800 text-sm block">Motorisation Connectée</span>
                                            <span className="text-xs text-slate-500">Confort moderne : détection d'obstacles, pilotage smartphone, intégration domotique possible. Fiabilité et sécurité assurées.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Design */}
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center">
                                    <Palette className="text-slate-700 mr-2" />
                                    Design & Personnalisation
                                </h4>
                                <div className="bg-slate-900 text-white p-5 rounded-2xl relative overflow-hidden">
                                    <ul className="relative z-10 space-y-3">
                                        <li className="flex items-center text-sm">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                                            Dimensions 100 % sur-mesure
                                        </li>
                                        <li className="flex items-center text-sm">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                                            Toutes couleurs RAL, finitions bois
                                        </li>
                                        <li className="flex items-center text-sm">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                                            Hublots & portillon personnalisables
                                        </li>
                                        <li className="flex items-center text-sm">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                                            Motorisation intégrée de série
                                        </li>
                                    </ul>
                                    {/* Décor background */}
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Layers size={64} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Footer / CTA (Sticky Bottom) */}
                    <div className="p-6 border-t border-slate-100 bg-white shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20">
                        <button
                            onClick={handleCtaClick}
                            className="w-full py-4 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-slate-500/20 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center group"
                        >
                            <span>Configurer ma porte de garage</span>
                            <div className="ml-3 bg-white/10 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                <ArrowRight size={20} />
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default GarageProductModal;
