import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowUpFromLine, Ruler } from 'lucide-react';

const MeasurementGuideModal = ({ isOpen, onClose, specificContent = null }) => {
    if (!isOpen) return null;
    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl"
                    onClick={e => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600">
                        <X size={20} />
                    </button>

                    {specificContent === 'cintrage' ? (
                        <>
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-orange-100 rounded-full mr-4 text-orange-600">
                                    <ArrowUpFromLine size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 leading-tight">Mesurer une fenêtre cintrée</h3>
                            </div>

                            <div className="space-y-5">
                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-sm text-orange-900 font-medium">
                                    Pour fabriquer votre cintre, nous avons besoin de 3 cotes essentielles.
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-3 shrink-0"></span>
                                        <span><strong className="text-slate-900">Largeur (Corde) :</strong> Largeur totale à la base.</span>
                                    </li>
                                    <li className="flex items-start text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-3 shrink-0"></span>
                                        <span><strong className="text-slate-900">Hauteur Droit :</strong> Partie verticale avant l'arrondi.</span>
                                    </li>
                                    <li className="flex items-start text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-3 shrink-0"></span>
                                        <span><strong className="text-slate-900">Flèche :</strong> Distance base - point le plus haut.</span>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-blue-100 rounded-full mr-4 text-blue-600">
                                    <Ruler size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 leading-tight">Prise de cotes standard</h3>
                            </div>

                            <div className="space-y-5">
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 text-sm mb-1 uppercase tracking-wide">La règle d'or</h4>
                                    <p className="text-sm text-blue-700">Mesurez toujours de <strong>Mur à Mur</strong> (intérieur tableau).</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 border-2 border-slate-100 rounded-xl bg-slate-50">
                                        <span className="block font-black text-2xl text-slate-900 mb-1">L</span>
                                        <p className="text-xs font-bold text-slate-500 uppercase">Largeur</p>
                                        <p className="text-[10px] text-slate-400">Mur à mur horizontal</p>
                                    </div>
                                    <div className="text-center p-4 border-2 border-slate-100 rounded-xl bg-slate-50">
                                        <span className="block font-black text-2xl text-slate-900 mb-1">H</span>
                                        <p className="text-xs font-bold text-slate-500 uppercase">Hauteur</p>
                                        <p className="text-[10px] text-slate-400">Mur à mur vertical</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="flex items-start mt-6 p-3 rounded-lg bg-green-50 border border-green-100">
                        <CheckCircle size={16} className="mr-3 mt-0.5 text-green-600 shrink-0" />
                        <span className="text-xs font-medium text-green-800 leading-relaxed">
                            Pas d'inquiétude : ce sont des cotes estimatives pour le devis. Nos métreurs valideront tout sur place.
                        </span>
                    </div>

                    <button onClick={onClose} className="w-full mt-6 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg active:scale-95">
                        C'est compris
                    </button>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default MeasurementGuideModal;