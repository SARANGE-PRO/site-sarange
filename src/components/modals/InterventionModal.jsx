import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Hammer, CheckCircle, Truck } from 'lucide-react';

const InterventionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
          <div className="bg-blue-600 p-6 text-white flex justify-between items-center shrink-0"><h3 className="text-2xl font-bold flex items-center"><MapPin className="mr-3" size={28} /> Zones d'Intervention</h3><button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors"><X size={24} /></button></div>
          <div className="p-6 md:p-8 overflow-y-auto">
            <div className="mb-8"><h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><span className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-3"><Hammer size={20} /></span> Installation &amp; Pose (RGE)</h4><p className="text-slate-600 mb-4">Nos équipes de poseurs salariés interviennent pour tous vos projets de rénovation et construction neuve dans les zones suivantes :</p><ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 mb-4"><li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> <span className="font-bold">75</span> - Paris</li><li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> <span className="font-bold">77</span> - Seine-et-Marne (Siège)</li><li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> <span className="font-bold">78</span> - Yvelines</li><li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> <span className="font-bold">91</span> - Essonne</li><li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> <span className="font-bold">92</span> - Hauts-de-Seine</li><li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> <span className="font-bold">93</span> - Seine-Saint-Denis</li><li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> <span className="font-bold">94</span> - Val-de-Marne</li><li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> <span className="font-bold">95</span> - Val-d'Oise</li></ul></div>
            <div><h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><span className="bg-orange-100 p-2 rounded-lg text-orange-600 mr-3"><Truck size={20} /></span> Livraison Nationale (Offre B2B)</h4><p className="text-slate-600">Pour les <strong>professionnels</strong>, nous assurons la <strong>livraison de menuiseries (fourniture seule) dans toute la France</strong>.</p></div>
          </div>
          <div className="p-6 border-t border-slate-100 bg-slate-50 shrink-0 z-10"><button onClick={() => { onClose(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg transform active:scale-95">Vérifier ma zone &amp; Demander un devis</button></div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InterventionModal;