import React from "react";
import { createPortal } from "react-dom";
import { Plus, ArrowRight, Info, CheckCircle2, Columns, Blinds, X, Percent, Tag, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==============================================================================
// 1. LE BADGE "LARGE" (Pour les cartes principales / Page produit)
// ==============================================================================
export const ProductPromoTrigger = ({ onClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-50 to-white border border-orange-200 rounded-xl shadow-sm hover:shadow-md hover:border-orange-300 transition-all group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-1.5 rounded-full text-orange-600 group-hover:text-white group-hover:bg-orange-500 transition-colors">
                    <Tag size={16} />
                </div>
                <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] text-orange-500 font-bold uppercase tracking-wider mb-0.5">Offre Duo</span>
                    <span className="text-sm font-black text-slate-800 group-hover:text-orange-600 transition-colors">
                        Pack Fenêtre PVC + Volet
                    </span>
                </div>
            </div>
            <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm animate-pulse text-center leading-tight">
                -20%<br /><span className="text-[8px] font-medium opacity-90">sur fenêtre</span>
            </div>
        </motion.button>
    );
};

// ==============================================================================
// 2. LE "MINI BADGE" (Pour les petites cartes / Listing compact)
// ==============================================================================
export const MiniPromoBadge = ({ onClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-red-500 text-white px-2.5 py-1 rounded-full shadow-lg border border-white/20 cursor-pointer hover:bg-red-600 transition-colors"
        >
            <Percent size={12} className="fill-current" />
            <span className="text-[10px] font-bold uppercase tracking-wide">
                -20% Fenêtre PVC
            </span>
            <Info size={10} className="ml-0.5 opacity-80" />
        </motion.button>
    );
};

// ==============================================================================
// 3. LA MODALE HARMONISÉE (Utilise Portal pour être au-dessus de tout)
// ==============================================================================
export const ComboInfoModal = ({ isOpen, onClose }) => {
    if (typeof document === 'undefined') return null; // Sécurité SSR

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md" onClick={onClose}>
                    <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-3xl w-full max-w-xl overflow-hidden flex flex-col shadow-2xl relative"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header Image / Titre */}
                        <div className="bg-slate-900 text-white pt-8 pb-6 px-8 shrink-0 relative overflow-hidden">
                            <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50">
                                <X size={24} className="text-white" />
                            </button>

                            <div className="relative z-10">
                                <div className="flex items-center space-x-3 mb-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/20">
                                        Offre Spéciale
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">Offre Combo Menuiserie</h3>
                                <p className="text-orange-200 text-lg font-medium">Équipez-vous malin</p>

                                <p className="text-slate-300 text-sm mt-4 leading-relaxed max-w-sm">
                                    Pourquoi payer plein tarif ? En groupant vos fenêtres PVC et vos volets, vous débloquez une remise immédiate.
                                </p>
                            </div>

                            {/* Motif de fond */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        </div>

                        {/* Contenu Scrollable */}
                        <div className="px-6 md:px-8 py-6">

                            {/* VISUEL ÉQUATION */}
                            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm w-16 h-16 flex items-center justify-center relative">
                                        <div className="absolute -top-2 -right-2 bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">1x</div>
                                        <Columns className="text-slate-500" size={28} />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-700 uppercase">Fenêtre</span>
                                    <span className="text-[9px] font-bold text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded-full">PVC Blanc</span>
                                </div>

                                <Plus size={20} className="text-slate-300 mb-6" />

                                <div className="flex flex-col items-center gap-1">
                                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm w-16 h-16 flex items-center justify-center relative">
                                        <div className="absolute -top-2 -right-2 bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">1x</div>
                                        <Blinds className="text-slate-500" size={28} />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">Volet</span>
                                    <span className="text-[9px] font-medium text-slate-400 px-1.5 py-0.5">&nbsp;</span>
                                </div>

                                <ArrowRight size={20} className="text-orange-500 mb-6" />

                                <div className="flex flex-col items-center gap-1">
                                    <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-2 rounded-xl shadow-lg w-16 h-16 flex flex-col items-center justify-center border-4 border-white ring-1 ring-slate-100 transform scale-110">
                                        <span className="text-xl font-black">-20%</span>
                                    </div>
                                    <span className="text-[9px] font-bold text-red-600 uppercase mt-1">Sur la fenêtre</span>
                                    <span className="text-[8px] font-bold text-slate-500">PVC Blanc uniquement</span>
                                </div>
                            </div>

                            {/* Explications */}
                            <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center">
                                <Info size={18} className="text-slate-400 mr-2" /> Conditions d'application
                            </h4>

                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                                <ul className="space-y-2 text-xs md:text-sm text-blue-900 font-medium">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                        <span>La remise s'applique <strong>automatiquement par paire</strong> (1 Fenêtre + 1 Volet).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                        <span>Valable exclusivement sur la gamme <strong>PVC Blanc</strong> (hors couleur/alu).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                                        <span className="opacity-80">Exemple : 3 fenêtres PVC blanc + 2 volets = 2 remises de 20% appliquées sur les fenêtres.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* CTA Bottom */}
                            <button
                                onClick={() => {
                                    onClose();
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group active:scale-[0.98]"
                            >
                                <span>J'ai compris, je profite de l'offre</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="flex justify-center items-center mt-4 space-x-6">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                                    <ShieldCheck size={12} className="mr-1.5 text-green-500" /> Sans engagement
                                </span>
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                                    <Zap size={12} className="mr-1.5 text-yellow-500" /> Réponse rapide
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

// ==============================================================================
// 4. LE BADGE "CONFIRMATION" (Devis) - INCHANGÉ
// ==============================================================================
export const DiscountBadge = ({ count }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-white border border-green-200 text-green-800 px-4 py-2.5 rounded-xl mt-2 w-full shadow-sm"
        >
            <div className="bg-green-100 p-1.5 rounded-full border border-green-200 text-green-600">
                <CheckCircle2 size={16} />
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-[11px] font-black uppercase tracking-wide text-green-700 mb-1">
                    Offre Combo Validée {count > 1 ? `(x${count})` : ''}
                </span>
                <span className="text-xs font-medium text-slate-600">
                    La remise de <strong className="text-green-700">-20%</strong> sera appliquée au devis (sur fenêtres PVC Blanc).
                </span>
            </div>
        </motion.div>
    );
};