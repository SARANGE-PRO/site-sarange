import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ruler, Sun } from 'lucide-react';
import { IMAGES } from '@data/constants';
import AluProductModal from '@features/windows/AluProductModal';
import AtelierSeal from '@components/ui/AtelierSeal';

const AluSection = () => {
  const [showAluModal, setShowAluModal] = useState(false);

  return (
    <section id="alu" className="py-12 sm:py-16 md:py-24 bg-secondary-50 relative overflow-hidden">
      {/* Modale Aluminium */}
      <AluProductModal isOpen={showAluModal} onClose={() => setShowAluModal(false)} />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-bold tracking-wide sm:tracking-widest uppercase mb-2 block text-sm sm:text-base">
              Design & Lumière
            </span>
            <h2 className="h2-mobile font-black mb-4 sm:mb-6 text-secondary-900">
              L'Excellence <br className="hidden sm:block" />
              Aluminium.
            </h2>
            <p className="text-secondary-600 body-mobile mb-6 sm:mb-8 leading-relaxed">
              Pour vos pièces de vie, optez pour la finesse des profilés Schüco. Des montants
              ultra-fins pour un apport solaire maximal, sans compromis sur l'isolation.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="flex items-start">
                <div className="bg-white shadow-sm border border-secondary-100 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Ruler className="text-accent-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1 text-secondary-800">
                    Grandes Ouvertures
                  </h4>
                  <p className="text-secondary-500 text-xs sm:text-sm">
                    Baies coulissantes jusqu'à 3m de haut.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white shadow-sm border border-secondary-100 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Sun className="text-primary-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1 text-secondary-800">
                    Rupture de Pont Thermique
                  </h4>
                  <p className="text-secondary-500 text-xs sm:text-sm">
                    Isolation performante conforme RE2020.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowAluModal(true)}
              aria-label="Découvrir nos fenêtres et baies vitrées aluminium sur-mesure"
              className="tap-target mt-6 sm:mt-10 px-6 sm:px-8 py-2.5 sm:py-3 bg-secondary-900 text-white hover:bg-secondary-800 rounded-full transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Demander une étude Alu
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={IMAGES.alu_window}
              loading="lazy"
              alt="Baie vitrée aluminium"
              className="relative rounded-lg shadow-2xl border border-secondary-200 max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full sm:w-auto object-cover mx-auto cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => setShowAluModal(true)}
            />
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary-500 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold flex items-center shadow-lg z-10">
              <Ruler size={12} className="mr-1 sm:mr-1.5" />
              <span className="hidden sm:inline">Direct Fabricant – 100% Sur-mesure</span>
              <span className="sm:hidden">100% Sur-mesure</span>
            </div>
            {/* Sceau Atelier */}
            <AtelierSeal className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-20 scale-[0.6] sm:scale-75 md:scale-90" />
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border border-secondary-100 shadow-xl items-center space-x-3">
              <div className="w-12 h-12 bg-secondary-900 rounded-full flex items-center justify-center">
                <span className="text-white font-black text-xs">Schüco</span>
              </div>
              <div>
                <p className="text-xs text-secondary-500 uppercase">Partenaire</p>
                <p className="font-bold text-secondary-900">Officiel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AluSection;
