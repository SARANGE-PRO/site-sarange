import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    ShieldCheck,
    CheckCircle,
    Hammer,
    TrendingUp,
    Euro,
    Sun,
    Lightbulb,
    Palette,
    Home,
    Zap,
    Blinds,
    Sparkles,
} from 'lucide-react';

const VerandaProductModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleCtaClick = () => {
        onClose();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 20, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-slate-900 text-white pt-8 pb-6 px-8 shrink-0 relative overflow-hidden">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
                        >
                            <X size={24} className="text-white" />
                        </button>

                        <div className="relative z-10">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-lg shadow-green-500/20">
                                    Valorisation & Confort
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                                Extensions & Vérandas
                            </h3>
                            <p className="text-blue-200 text-lg font-medium">Agrandissez votre espace de vie</p>

                            <p className="text-slate-300 text-sm mt-4 leading-relaxed max-w-lg">
                                Ajoutez une véritable pièce à vivre à votre maison. Une extension véranda coûte
                                moins cher qu'une construction traditionnelle tout en augmentant significativement
                                la valeur de votre patrimoine.
                            </p>
                        </div>

                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    </div>

                    {/* Contenu Scrollable */}
                    <div className="px-8 py-6 overflow-y-auto space-y-8 custom-scrollbar">
                        {/* Pourquoi une Véranda SARANGE (Argumentaire Financier) */}
                        <h4 className="font-bold text-slate-900 text-lg -mb-2">
                            Pourquoi une Véranda SARANGE ?
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <TrendingUp className="text-green-600 mr-3 shrink-0" size={20} />
                                <span className="text-sm text-slate-700 font-medium">
                                    Plus-value immobilière immédiate : Créez des m² habitables supplémentaires
                                </span>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <Euro className="text-green-600 mr-3 shrink-0" size={20} />
                                <span className="text-sm text-slate-700 font-medium">
                                    Alternative économique : Budget maîtrisé par rapport à une extension maçonnerie
                                </span>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <Sun className="text-orange-500 mr-3 shrink-0" size={20} />
                                <span className="text-sm text-slate-700 font-medium">
                                    Lumière & Bien-être : Une connexion unique avec votre jardin, été comme hiver
                                </span>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <Home className="text-blue-500 mr-3 shrink-0" size={20} />
                                <span className="text-sm text-slate-700 font-medium">
                                    Isolation RE2020 : Pièce chauffée et habitable toute l'année
                                </span>
                            </div>
                        </div>

                        {/* Structure Aluminium Schüco & Design */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
                                <Sparkles className="text-blue-600 mr-2.5" size={22} />
                                Structure Aluminium Schüco & Design
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-center group">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-100 transition-colors">
                                        <CheckCircle size={14} className="text-blue-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium">
                                        Structure 100% Aluminium Schüco à rupture de pont thermique
                                    </span>
                                </li>
                                <li className="flex items-center group">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-100 transition-colors">
                                        <CheckCircle size={14} className="text-blue-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium">
                                        Finesse des profils pour un clair de jour maximal
                                    </span>
                                </li>
                                <li className="flex items-center group">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-100 transition-colors">
                                        <CheckCircle size={14} className="text-blue-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium">
                                        Design sur-mesure : Toiture plate, Victorienne, ou pente classique
                                    </span>
                                </li>
                                <li className="flex items-center group">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-100 transition-colors">
                                        <Palette size={14} className="text-blue-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium">
                                        Toutes les couleurs possibles (Bi-coloration, texturé, sablé...)
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Toiture & Vitrages Haute Performance */}
                        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
                                <Sparkles className="text-orange-500 mr-2.5" size={22} />
                                Toiture & Vitrages Haute Performance
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start group">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-100 transition-colors mt-0.5">
                                        <ShieldCheck size={14} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <span className="text-slate-700 font-semibold">
                                            Toiture Climalux & Phonique :
                                        </span>
                                        <span className="text-slate-600">
                                            {' '}
                                            Panneaux isolants haute densité avec traitement acoustique pour réduire
                                            considérablement le bruit de la pluie et de la grêle.
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-orange-100 transition-colors mt-0.5">
                                        <Sun size={14} className="text-orange-500" />
                                    </div>
                                    <div>
                                        <span className="text-slate-700 font-semibold">
                                            Vitrage "4 Saisons" (Contrôle Solaire) :
                                        </span>
                                        <span className="text-slate-600">
                                            {' '}
                                            Technologie intelligente qui rejette jusqu'à 80% de la chaleur en été tout en
                                            conservant les calories en hiver (Anti-effet de serre).
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-red-100 transition-colors mt-0.5">
                                        <ShieldCheck size={14} className="text-red-500" />
                                    </div>
                                    <div>
                                        <span className="text-slate-700 font-semibold">
                                            Sécurité Renforcée (Feuilleté) :
                                        </span>
                                        <span className="text-slate-600">
                                            {' '}
                                            Vitrage feuilleté de sécurité (type 44.2) obligatoire en toiture (protection
                                            des personnes) et retardateur d'effraction en façade.
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-green-100 transition-colors mt-0.5">
                                        <Sparkles size={14} className="text-green-500" />
                                    </div>
                                    <div>
                                        <span className="text-slate-700 font-semibold">Entretien Facilité :</span>
                                        <span className="text-slate-600">
                                            {' '}
                                            Option vitrage Auto-nettoyant (Bioclean) disponible pour limiter le nettoyage
                                            des zones difficiles d'accès.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Options de Confort */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
                                <Zap className="text-purple-600 mr-2.5" size={22} />
                                Options de Confort
                            </h4>
                            <ul className="space-y-3 pl-2 border-l-2 border-purple-100 ml-1">
                                <li className="text-slate-600 text-sm flex items-center">
                                    <Blinds size={14} className="mr-2 text-purple-500" />
                                    Volets roulants de toiture ou de façade intégrés
                                </li>
                                <li className="text-slate-600 text-sm flex items-center">
                                    <Blinds size={14} className="mr-2 text-purple-500" />
                                    Brise-soleil orientables (BSO)
                                </li>
                                <li className="text-slate-600 text-sm flex items-center">
                                    <Lightbulb size={14} className="mr-2 text-purple-500" />
                                    Éclairage LED intégré dans les chevrons (avec variateur)
                                </li>
                            </ul>
                        </div>

                        {/* Pose & Savoir-faire */}
                        <div className="bg-slate-50 rounded-2xl p-5 flex items-start border border-slate-100">
                            <div className="bg-white p-2 rounded-full shadow-sm mr-4 text-slate-700 shrink-0">
                                <Hammer size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Expertise SARANGE</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Nos équipes spécialisées assurent une réalisation sur-mesure, de l'étude technique
                                    à la pose finale, pour garantir la pérennité de votre extension.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer / CTA */}
                    <div className="p-6 border-t border-slate-100 bg-white shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20">
                        <button
                            onClick={handleCtaClick}
                            className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl shadow-green-500/20 hover:shadow-green-500/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center group"
                        >
                            <span>Étudier mon projet d'extension</span>
                            <div className="ml-3 bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                        <div className="flex justify-center items-center mt-4 space-x-6">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center">
                                <ShieldCheck size={12} className="mr-1.5 text-green-500" /> Gratuit – Sans
                                engagement
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

export default VerandaProductModal;
