import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowUpFromLine, Ruler } from 'lucide-react';

const MeasurementGuideModal = ({ isOpen, onClose, specificContent = null }) => {
    if (!isOpen) return null;
    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}>
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-2xl p-6 max-w-lg w-full relative"
                    onClick={e => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full"><X size={20}/></button>
                    
                    {specificContent === 'cintrage' ? (
                        <>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><ArrowUpFromLine className="mr-2 text-orange-500"/> Mesurer une fenêtre cintrée</h3>
                            <div className="space-y-4">
                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                    <p className="text-sm text-orange-800">Pour fabriquer votre cintre, nous avons besoin de 3 cotes essentielles.</p>
                                </div>
                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                    <li><strong>Largeur (Corde) :</strong> La largeur totale à la base du cintre.</li>
                                    <li><strong>Hauteur Droit :</strong> La hauteur de la partie verticale avant l'arrondi.</li>
                                    <li><strong>Hauteur de Flèche :</strong> La distance entre la base et le point le plus haut.</li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><Ruler className="mr-2 text-orange-500"/> Comment prendre vos mesures ?</h3>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <h4 className="font-bold text-blue-800 mb-2">La règle d'or : Mur à Mur</h4>
                                    <p className="text-sm text-blue-700">Mesurez la largeur et la hauteur du tableau (le trou dans le mur), à l'intérieur.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 border rounded-xl">
                                        <p className="font-bold text-sm">Largeur (L)</p>
                                        <p className="text-xs text-slate-500">Mur à mur horizontal</p>
                                    </div>
                                    <div className="text-center p-4 border rounded-xl">
                                        <p className="font-bold text-sm">Hauteur (H)</p>
                                        <p className="text-xs text-slate-500">Mur à mur vertical</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="flex items-center text-green-700 text-sm bg-green-50 p-3 rounded-lg mt-4">
                        <CheckCircle size={16} className="mr-2 shrink-0"/>
                        <span>Ce sont des mesures pour devis. Nos techniciens vérifieront tout sur place.</span>
                    </div>
                    <button onClick={onClose} className="w-full mt-6 bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors">
                        J'ai compris
                    </button>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default MeasurementGuideModal;