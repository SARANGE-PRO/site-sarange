import { useState } from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@data/constants';
import { Ruler } from 'lucide-react';
import EntranceDoorModal from '@features/doors/EntranceDoorModal';
import AtelierSeal from '@components/ui/AtelierSeal';

const EntranceDoorSection = () => {
  const [showEntranceModal, setShowEntranceModal] = useState(false);

  return (
    <section id="portes" className="py-24 bg-slate-900 text-white">
      {/* Modale Comparative */}
      <EntranceDoorModal isOpen={showEntranceModal} onClose={() => setShowEntranceModal(false)} />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            Accueil & Sécurité
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Portes d'entrée PVC, mixtes et aluminium sur-mesure
          </h2>
          <p className="text-xl text-orange-500 font-bold mb-4">
            Isolation · Sécurité · Esthétique · Pose clé en main
          </p>
          <p className="text-slate-400 text-lg">
            Isolation thermique performante, sécurité renforcée, esthétique personnalisée.
            Installation clé en main par nos équipes salariées.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Gamme Mixte - Carte Simplifiée */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => setShowEntranceModal(true)}
            className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 group hover:border-orange-500 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-96 overflow-hidden">
              <img
                src={IMAGES.porte}
                loading="lazy"
                alt="Porte Mixte PVC Alu"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute top-4 left-6">
                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
                  BEST-SELLER
                </div>
              </div>
              <div className="absolute top-4 right-6">
                <div className="bg-slate-800 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center shadow-lg">
                  <Ruler size={14} className="mr-1.5" />
                  Direct Fabricant
                </div>
              </div>
              {/* Sceau Atelier */}
              <AtelierSeal className="absolute bottom-28 right-4 z-20 scale-75" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-bold mb-3">Gamme Mixte (Hybride)</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Le confort du PVC + L'élégance de l'Alu
                </p>
                <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all text-sm uppercase tracking-wide shadow-lg group-hover:shadow-xl">
                  Voir les détails & Comparer
                </button>
              </div>
            </div>
          </motion.div>

          {/* Gamme Alu - Carte Simplifiée */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => setShowEntranceModal(true)}
            className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 group hover:border-blue-500 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-96 overflow-hidden">
              <img
                src={IMAGES.alu}
                loading="lazy"
                alt="Porte Aluminium"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute top-4 left-6">
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
                  PREMIUM
                </div>
              </div>
              <div className="absolute top-4 right-6">
                <div className="bg-slate-800 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center shadow-lg">
                  <Ruler size={14} className="mr-1.5" />
                  Direct Fabricant
                </div>
              </div>
              {/* Sceau Atelier */}
              <AtelierSeal className="absolute bottom-28 right-4 z-20 scale-75" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-bold mb-3">Gamme Aluminium</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Finesse des lignes, rigidité et prestige
                </p>
                <button className="w-full py-3 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold rounded-xl transition-all text-sm uppercase tracking-wide shadow-lg group-hover:shadow-xl">
                  Voir les détails & Comparer
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default EntranceDoorSection;
