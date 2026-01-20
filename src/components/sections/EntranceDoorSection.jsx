import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../../data/constants';
import { ChevronRight, ShieldCheck, Palette } from 'lucide-react';
import EntranceDoorModal from '../modals/EntranceDoorModal';

const EntranceDoorSection = () => {
    const [showEntranceModal, setShowEntranceModal] = useState(false);

    return (
        <section id="portes" className="py-12 md:py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background subtil */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Modale Comparative */}
            <EntranceDoorModal isOpen={showEntranceModal} onClose={() => setShowEntranceModal(false)} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-orange-400 font-bold uppercase tracking-widest text-xs mb-4">
                        Accueil & Sécurité
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Portes d'entrée <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Sur-Mesure</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 text-sm md:text-base font-medium text-slate-300">
                        <span className="flex items-center"><ShieldCheck size={18} className="text-green-400 mr-2" /> Sécurité Renforcée</span>
                        <span className="flex items-center"><Palette size={18} className="text-blue-400 mr-2" /> Design Illimité</span>
                    </div>

                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                        L'alliance parfaite entre performance thermique et design. Installation clé en main par nos équipes salariées.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">

                    {/* CARTE 1 : GAMME MIXTE (PVC/ALU) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-300 shadow-xl cursor-pointer"
                        onClick={() => setShowEntranceModal(true)}
                    >
                        {/* Image */}
                        <div className="relative h-72 md:h-96 overflow-hidden">
                            <img
                                src={IMAGES.porte}
                                loading="lazy"
                                alt="Porte d'entrée Mixte PVC Aluminium"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    🔥 N°1 DES VENTES
                                </span>
                                <span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    Eligible Rénovation
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">
                                Gamme Mixte (Hybride)
                            </h3>
                            <p className="text-slate-300 text-sm md:text-base mb-6 font-medium">
                                Structure PVC Renforcé Schüco + Panneau Alu 2 faces
                            </p>

                            <button className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg shadow-orange-900/20">
                                <span>Voir les modèles & détails</span>
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    {/* CARTE 2 : GAMME ALUMINIUM */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl cursor-pointer"
                        onClick={() => setShowEntranceModal(true)}
                    >
                        {/* Image */}
                        <div className="relative h-72 md:h-96 overflow-hidden">
                            <img
                                src={IMAGES.alu}
                                loading="lazy"
                                alt="Porte d'entrée Aluminium Premium"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    💎 PREMIUM
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                                Gamme 100% Aluminium
                            </h3>
                            <p className="text-slate-300 text-sm md:text-base mb-6 font-medium">
                                Finesse des lignes, rigidité exceptionnelle et prestige
                            </p>

                            <button className="w-full py-4 bg-slate-700 hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg border border-slate-600 group-hover:border-blue-500">
                                <span>Voir les modèles & détails</span>
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EntranceDoorSection;