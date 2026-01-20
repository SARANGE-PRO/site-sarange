import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ruler, Sun, ArrowRight, CheckCircle2, Maximize, Scan, Info } from 'lucide-react';
import { IMAGES } from '../../data/constants';
import AluProductModal from '../modals/AluProductModal';

const AluSection = () => {
  const [showAluModal, setShowAluModal] = useState(false);

  // Fonction pour scroller vers le formulaire de contact (Action principale)
  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Liste pour montrer l'étendue de la gamme
  const PRODUCT_TYPES = [
    "Baies Coulissantes",
    "Fenêtres & PF",
    "Galandages",
    "Châssis Fixes"
  ];

  return (
    <section id="alu" className="py-12 md:py-24 bg-white relative overflow-hidden">

      {/* Décoration d'arrière-plan très subtile */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 pointer-events-none"></div>

      <AluProductModal isOpen={showAluModal} onClose={() => setShowAluModal(false)} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* COLONNE GAUCHE : TEXTE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Petit Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-slate-900"></span>
              <span className="text-slate-900 font-bold tracking-widest uppercase text-xs">
                Collection Design
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 leading-tight">
              L'Élégance <span className="text-slate-500">Aluminium.</span>
            </h2>

            {/* LISTE DES PRODUITS : Montre que tout est possible */}
            <div className="flex flex-wrap gap-2 mb-6">
              {PRODUCT_TYPES.map((type, i) => (
                <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] md:text-xs font-bold text-slate-600 uppercase tracking-wide">
                  <CheckCircle2 size={12} className="mr-1.5 text-slate-400" />
                  {type}
                </span>
              ))}
            </div>

            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
              Pour vos pièces de vie, optez pour la finesse des profilés <strong>Schüco</strong>. Des montants ultra-fins pour un apport solaire maximal, disponibles sur toutes les formes d'ouvertures.
            </p>

            {/* Features Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-white p-2 rounded-lg text-slate-900 shadow-sm border border-slate-100 mr-3 shrink-0">
                  <Maximize size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Grandes Dimensions</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Jusqu'à 3m de hauteur</p>
                </div>
              </div>

              <div className="flex items-start p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-white p-2 rounded-lg text-slate-900 shadow-sm border border-slate-100 mr-3 shrink-0">
                  <Sun size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Clarté Maximale</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Finesse des montants</p>
                </div>
              </div>
            </div>

            {/* ZONE ACTION */}
            <div className="flex flex-col items-start gap-4">
              {/* GROS BOUTON D'ACTION */}
              <button
                onClick={handleCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 transform hover:-translate-y-1 active:scale-[0.98]"
              >
                <span>Demander mon étude Alu</span>
                <ArrowRight size={20} />
              </button>

              {/* LIEN DISCRET VERS MODAL */}
              <button
                onClick={() => setShowAluModal(true)}
                className="group flex items-center gap-2 text-sm text-slate-500 font-medium hover:text-slate-800 transition-colors px-2"
              >
                <Info size={16} />
                <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-slate-800">
                  Voir les détails techniques et coloris
                </span>
              </button>
            </div>

          </motion.div>

          {/* COLONNE DROITE : IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 group cursor-pointer"
            onClick={() => setShowAluModal(true)}
          >
            {/* Image Cadre */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 aspect-[4/3] md:aspect-auto md:h-[500px]">
              <img
                src={IMAGES.alu_window}
                loading="lazy"
                alt="Menuiserie Aluminium Schüco - Fenêtres et Baies"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Badge Partenaire Flottant */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-[10px]">Schüco</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Partenaire Officiel</p>
                  <p className="font-bold text-slate-900 text-sm leading-none mt-0.5">Menuiserie Aluminium</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AluSection;