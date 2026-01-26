import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Lock, Award, Layers, Palette, ChevronRight } from 'lucide-react';
import { IMAGES } from '../../data/constants';

const EntranceDoorModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleCtaClick = () => {
        onClose();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}>
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white md:rounded-3xl w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-slate-900 text-white py-5 px-6 shrink-0 relative flex items-center justify-between">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold">Comparateur Portes d'Entrée</h3>
                            <p className="text-slate-400 text-xs md:text-sm mt-1">Trouvez la porte parfaite pour votre façade</p>
                        </div>
                        <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Contenu Scrollable */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50 p-4 md:p-8">

                        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">

                            {/* --- COLONNE GAUCHE : MIXTE --- */}
                            <div className="bg-white rounded-2xl overflow-hidden border-2 border-orange-100 shadow-xl flex flex-col">
                                {/* Visuel */}
                                <div className="relative h-48 md:h-64 shrink-0">
                                    <img src={IMAGES.porte} alt="Porte Mixte" className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                                            🔥 Le choix malin
                                        </span>
                                    </div>
                                    {/* LE BANDEAU A ÉTÉ SUPPRIMÉ ICI */}
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-2">Gamme Mixte (Hybride)</h4>
                                    <p className="text-orange-600 font-bold text-sm mb-6">L'isolation du PVC, le Design de l'Alu</p>

                                    <ul className="space-y-4 mb-8 flex-1">
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 shrink-0">
                                                <Layers size={14} className="text-orange-600" />
                                            </div>
                                            <div>
                                                <span className="block text-slate-900 font-bold text-sm">Conception Hybride Avancée</span>
                                                <span className="text-slate-500 text-xs leading-relaxed">Dormant et ouvrant en PVC renforcé Schüco habillé d'un panneau Aluminium 2 faces isolé.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 shrink-0">
                                                <Palette size={14} className="text-orange-600" />
                                            </div>
                                            <div>
                                                <span className="block text-slate-900 font-bold text-sm">Design Illimité</span>
                                                <span className="text-slate-500 text-xs">Vaste choix de panneaux décoratifs, vitrés, modernes ou classiques.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 shrink-0">
                                                <Lock size={14} className="text-orange-600" />
                                            </div>
                                            <div>
                                                <span className="block text-slate-900 font-bold text-sm">Sécurité Standard</span>
                                                <span className="text-slate-500 text-xs">Serrure automatique 5 points de série.</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="bg-orange-50 rounded-xl p-3 border border-orange-200 mt-auto">
                                        <p className="text-xs text-orange-800 font-semibold flex items-center justify-center text-center">
                                            <Award size={16} className="mr-2 shrink-0" />
                                            Rapport Qualité / Prix / Isolation Imbattable
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* --- COLONNE DROITE : ALUMINIUM --- */}
                            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg flex flex-col">
                                {/* Visuel */}
                                <div className="relative h-48 md:h-64 shrink-0">
                                    <img src={IMAGES.alu} alt="Porte Aluminium" className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-slate-900 text-white text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                                            💎 Excellence
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-2">Gamme 100% Aluminium</h4>
                                    <p className="text-slate-500 font-bold text-sm mb-6">Robustesse, Finesse et Prestige</p>

                                    <ul className="space-y-4 mb-8 flex-1">
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-3 shrink-0">
                                                <CheckCircle size={14} className="text-slate-700" />
                                            </div>
                                            <div>
                                                <span className="block text-slate-900 font-bold text-sm">Structure Alu</span>
                                                <span className="text-slate-500 text-xs">Conception haute résistance, indéformable dans le temps, idéale grands passages.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-3 shrink-0">
                                                <Palette size={14} className="text-slate-700" />
                                            </div>
                                            <div>
                                                <span className="block text-slate-900 font-bold text-sm">Finitions Haut de Gamme</span>
                                                <span className="text-slate-500 text-xs">Thermolaquage certifié, effets matières, inserts inox affleurants...</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-3 shrink-0">
                                                <Lock size={14} className="text-slate-700" />
                                            </div>
                                            <div>
                                                <span className="block text-slate-900 font-bold text-sm">Sécurité Renforcée</span>
                                                <span className="text-slate-500 text-xs">Serrure 5 points à crochets + Paumelles tridimensionnelles.</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="bg-slate-100 rounded-xl p-3 border border-slate-200 mt-auto">
                                        <p className="text-xs text-slate-700 font-semibold flex items-center justify-center text-center">
                                            <Award size={16} className="mr-2 shrink-0" />
                                            La solution prestige pour votre entrée
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Footer / CTA Sticky */}
                    <div className="p-4 md:p-6 border-t border-slate-100 bg-white z-20 shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                        <button
                            onClick={handleCtaClick}
                            className="w-full py-4 bg-slate-900 hover:bg-orange-600 text-white font-bold text-lg md:text-xl rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center group"
                        >
                            <span>Configurer mon projet Porte</span>
                            <div className="ml-3 bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                <ChevronRight size={18} />
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default EntranceDoorModal;