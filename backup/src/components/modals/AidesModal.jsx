import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Euro, Percent, Home, Zap, Landmark } from 'lucide-react';

const AidesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          <div className="bg-orange-500 p-6 text-white flex justify-between items-center shrink-0">
            <h3 className="text-2xl font-bold flex items-center">
              <Euro className="mr-3" size={28} /> Financez vos travaux
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-6 md:p-8 overflow-y-auto">
            <p className="text-slate-600 mb-6 text-lg">
              Grâce à notre certification <strong>RGE Qualibat</strong>, vos travaux de menuiserie
              sont éligibles aux aides.
            </p>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="bg-green-100 p-3 rounded-full mr-4 text-green-600 flex-shrink-0">
                  <Percent size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">TVA réduite à 5,5 %</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Pour les travaux de rénovation énergétique dans un logement de plus de 2 ans.
                    <br />
                    Applicable sur la fourniture et la pose.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600 flex-shrink-0">
                  <Home size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">MaPrimeRénov’</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Aide forfaitaire de l’État pour le remplacement de vitrages simples par du
                    double vitrage performant, selon vos revenus.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-600 flex-shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Primes CEE</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Primes versées par les fournisseurs d’énergie, cumulables avec MaPrimeRénov’,
                    permettant de réduire votre reste à charge.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600 flex-shrink-0">
                  <Landmark size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Éco-PTZ</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Prêt à taux zéro jusqu’à 50 000 € pour financer vos travaux, sans intérêts.
                    <br />
                    Accessible uniquement via une entreprise RGE.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-slate-100 bg-slate-50 shrink-0 z-10 text-center">
            <button
              onClick={() => {
                onClose();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg transform active:scale-95 mb-3"
            >
              Vérifier mon éligibilité gratuitement
            </button>
            <p className="text-sm text-slate-600 font-medium mb-1">
              Gratuit – Sans engagement – Réponse rapide
            </p>
            <p className="text-xs text-slate-400">
              Sous réserve d’éligibilité et des conditions en vigueur.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AidesModal;
