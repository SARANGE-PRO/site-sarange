import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle, Lock, Lightbulb, Maximize2, Star, Award } from 'lucide-react';
import { IMAGES } from '../../data/constants';

const EntranceDoorModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleCtaClick = () => {
        onClose();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md" onClick={onClose}>
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 20, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-3xl w-full max-w-5xl overflow-hidden flex flex-col max-h-[90vh] shadow-2xl relative"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-slate-900 text-white py-6 px-8 shrink-0 relative">
                        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50">
                            <X size={24} className="text-white" />
                        </button>
                        <h3 className="text-2xl md:text-3xl font-bold text-center">Comparateur Portes d'Entrée</h3>
                        <p className="text-slate-300 text-center text-sm mt-2">Choisissez la gamme qui correspond à vos besoins</p>
                    </div>

                    {/* Contenu Scrollable */}
                    <div className="px-8 py-8 overflow-y-auto custom-scrollbar">

                        {/* Grille Comparative */}
                        <div className="grid lg:grid-cols-2 gap-8">

                            {/* COLONNE GAUCHE : MIXTE */}
                            <div className="bg-orange-50 rounded-2xl overflow-hidden border border-orange-100 shadow-lg">
                                {/* Badge */}
                                <div className="relative">
                                    <img
                                        src={IMAGES.porte}
                                        alt="Porte Mixte"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-lg">
                                            🔥 N°1 DES VENTES
                                        </span>
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="p-6">
                                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Gamme Mixte (Hybride)</h4>
                                    <p className="text-orange-700 font-medium mb-6">Le confort du PVC + L'élégance de l'Alu</p>

                                    <ul className="space-y-4 mb-6">
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 shrink-0">
                                                <CheckCircle size={14} className="text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium text-sm">Conception Hybride (Structure PVC + Habillage Alu)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 shrink-0">
                                                <CheckCircle size={14} className="text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium text-sm">Isolation thermique et acoustique renforcée</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 shrink-0">
                                                <CheckCircle size={14} className="text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium text-sm">Intérieur PVC chaleureux / Extérieur Alu résistant</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 shrink-0">
                                                <Lock size={14} className="text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium text-sm">Serrure 5 points de série (Sécurité maximale)</span>
                                        </li>
                                    </ul>

                                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                                        <p className="text-sm text-slate-600 font-semibold flex items-center">
                                            <Star size={16} className="text-orange-500 mr-2 shrink-0" />
                                            <span>Le meilleur compromis performance / esthétique / budget.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* COLONNE DROITE : ALUMINIUM */}
                            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                                {/* Badge */}
                                <div className="relative">
                                    <img
                                        src={IMAGES.alu}
                                        alt="Porte Aluminium"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-lg">
                                            PREMIUM
                                        </span>
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="p-6">
                                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Gamme Aluminium</h4>
                                    <p className="text-slate-700 font-medium mb-6">Finesse des lignes, rigidité et prestige</p>

                                    <ul className="space-y-4 mb-6">
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 shrink-0">
                                                <CheckCircle size={14} className="text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium text-sm">Structure 100% Aluminium haute résistance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 shrink-0">
                                                <CheckCircle size={14} className="text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium text-sm">Idéal pour les grandes dimensions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 shrink-0">
                                                <CheckCircle size={14} className="text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium text-sm">Design contemporain et finesse exceptionnelle</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 shrink-0">
                                                <Lock size={14} className="text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium text-sm">Serrure 5 points haute sécurité</span>
                                        </li>
                                    </ul>

                                    <div className="bg-white rounded-xl p-4 border border-slate-200">
                                        <p className="text-sm text-slate-600 font-semibold flex items-center">
                                            <Award size={16} className="text-slate-700 mr-2 shrink-0" />
                                            <span>La solution premium pour valoriser durablement votre façade.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Footer / CTA (Sticky Bottom) */}
                    <div className="p-6 border-t border-slate-100 bg-white shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20">
                        <button
                            onClick={handleCtaClick}
                            className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center group"
                        >
                            <span>Configurer mon projet Porte d'Entrée</span>
                            <div className="ml-3 bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </button>
                        <div className="flex justify-center items-center mt-4 space-x-6">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                                <ShieldCheck size={12} className="mr-1.5 text-green-500" /> Gratuit – Sans engagement
                            </span>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                                <ShieldCheck size={12} className="mr-1.5 text-green-500" /> Réponse rapide
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default EntranceDoorModal;
