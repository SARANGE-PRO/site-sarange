import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Cog } from 'lucide-react';

const ProductModal = ({ isOpen, onClose, product, onDevisClick }) => {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 custom-scrollbar-hide">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header Image */}
                        <div className="relative h-48 bg-slate-100 shrink-0">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>
                            <div className="absolute bottom-4 left-6 text-white">
                                <h3 className="text-2xl font-black uppercase tracking-tight">{product.title}</h3>
                                <p className="text-orange-300 font-semibold">{product.subtitle}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 overflow-y-auto">
                            {/* Benefits */}
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Points Forts</h4>
                                <ul className="space-y-2">
                                    {product.benefits?.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                                            <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Specs */}
                            <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Cog size={14} /> Caractéristiques
                                </h4>
                                <ul className="grid grid-cols-1 gap-2">
                                    {product.specs?.map((spec, i) => (
                                        <li key={i} className="text-xs sm:text-sm text-slate-600 font-medium flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Options */}
                            {product.options && (
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Options Disponibles</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {product.options}
                                    </p>
                                </div>
                            )}

                        </div>

                        {/* Footer Actions */}
                        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-3 shrink-0">
                            <button
                                onClick={() => {
                                    onClose();
                                    onDevisClick(); // Scrolls to contact
                                }}
                                className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                Demander un devis
                                <ArrowRight size={18} />
                            </button>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
