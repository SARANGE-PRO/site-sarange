import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShieldCheck,
  CheckCircle,
  Hammer,
  Smartphone,
  Sun,
  BatteryCharging,
  Wind,
  UserCheck,
  Layers,
  Award,
  Thermometer,
} from 'lucide-react';

const VoletProductModal = ({ isOpen, onClose }) => {
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
          {/* Header Image / Titre */}
          <div className="bg-slate-900 text-white pt-8 pb-6 px-8 shrink-0 relative overflow-hidden">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            >
              <X size={24} className="text-white" />
            </button>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/20">
                  Protection & Domotique
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">Volets Roulants</h3>
              <p className="text-blue-200 text-lg font-medium">
                Confort, sécurité et pilotage intelligent
              </p>

              <p className="text-slate-300 text-sm mt-4 leading-relaxed max-w-lg">
                Les volets roulants SARANGE améliorent votre confort thermique, votre sécurité et
                votre confort d’utilisation, tout en s’adaptant parfaitement à votre logement, en
                rénovation comme en neuf.
              </p>
            </div>

            {/* Motif de fond */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          </div>

          {/* Contenu Scrollable */}
          <div className="px-8 py-6 overflow-y-auto space-y-8 custom-scrollbar">
            {/* Pourquoi choisir... (Grid) */}
            <h4 className="font-bold text-slate-900 text-lg -mb-2">
              Pourquoi choisir les volets roulants SARANGE ?
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
                <Thermometer className="text-orange-500 mr-3 shrink-0" size={20} />
                <span className="text-sm text-slate-700 font-medium">
                  Amélioration de l’isolation thermique et acoustique
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
                <ShieldCheck className="text-blue-500 mr-3 shrink-0" size={20} />
                <span className="text-sm text-slate-700 font-medium">
                  Protection renforcée contre les intrusions
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
                <UserCheck className="text-green-500 mr-3 shrink-0" size={20} />
                <span className="text-sm text-slate-700 font-medium">
                  Confort d’utilisation au quotidien
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
                <Award className="text-purple-500 mr-3 shrink-0" size={20} />
                <span className="text-sm text-slate-700 font-medium">
                  Valorisation de votre habitation
                </span>
              </div>
            </div>

            {/* Motorisations & Pilotage */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
                <Smartphone className="text-blue-600 mr-2.5" size={22} />
                Motorisations & Pilotage
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-100 transition-colors">
                    <CheckCircle size={14} className="text-blue-500" />
                  </div>
                  <span className="text-slate-700 font-medium mr-2">
                    Motorisation Radio, Filaire ou Solaire
                  </span>
                  <span className="px-2 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded uppercase tracking-wide animate-pulse">
                    Autonome
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-100 transition-colors">
                    <CheckCircle size={14} className="text-blue-500" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    Commande simple et fiable, sans effort
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-100 transition-colors">
                    <CheckCircle size={14} className="text-blue-500" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    Compatible domotique et pilotage smartphone
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-100 transition-colors">
                    <CheckCircle size={14} className="text-blue-500" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    Possibilité de centralisation des volets
                  </span>
                </li>
              </ul>
            </div>

            {/* Qualité & Conception */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
                <Award className="text-orange-500 mr-2.5" size={22} />
                Qualité & Conception
              </h4>
              <ul className="space-y-3 pl-2 border-l-2 border-orange-100 ml-1">
                <li className="text-slate-600 text-sm">
                  Lames aluminium isolées mousse polyuréthane (PU)
                </li>
                <li className="text-slate-600 text-sm">
                  Excellente isolation thermique et rigidité accrue
                </li>
                <li className="text-slate-600 text-sm">Durabilité et résistance aux intempéries</li>
                <li className="text-slate-600 text-sm">Fonctionnement silencieux et fluide</li>
              </ul>
            </div>

            {/* Coffres & Intégration */}
            <div className="bg-slate-50 rounded-2xl p-5 flex items-start border border-slate-100">
              <div className="bg-white p-2 rounded-full shadow-sm mr-4 text-slate-700 shrink-0">
                <Layers size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Coffres & Intégration</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Nos volets roulants sont disponibles avec coffres rénovation ou coffres monobloc,
                  assurant une intégration esthétique parfaite à votre façade ou à vos menuiseries.
                </p>
              </div>
            </div>

            {/* Pose & Savoir-faire */}
            <div className="bg-blue-50/50 rounded-2xl p-5 flex items-start border border-blue-100/50">
              <div className="bg-white p-2 rounded-full shadow-sm mr-4 text-blue-600 shrink-0">
                <Hammer size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Pose & Savoir-faire SARANGE
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Nos équipes assurent une pose soignée et durable, adaptée à votre configuration,
                  pour garantir la performance et la fiabilité dans le temps.
                </p>
              </div>
            </div>
          </div>

          {/* Footer / CTA (Sticky Bottom) */}
          <div className="p-6 border-t border-slate-100 bg-white shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20">
            <button
              onClick={handleCtaClick}
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center group"
            >
              <span>Demander mon devis gratuit</span>
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

export default VoletProductModal;
