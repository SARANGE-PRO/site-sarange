import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Euro, Percent, ChevronRight } from 'lucide-react';

const AidesBanner = ({ onOpenAides }) => (
    <div className="bg-white border-b border-slate-100 shadow-md py-4 cursor-pointer relative z-20 group overflow-hidden" onClick={onOpenAides}>
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center bg-green-600 text-white px-5 py-2 rounded-full shadow-lg shadow-green-200 border border-green-500">
                <ShieldCheck className="mr-2 text-white" size={20} />
                <span className="font-bold uppercase tracking-wide text-xs md:text-sm">Entreprise Certifiée RGE</span>
            </motion.div>
            <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 group-hover:border-blue-200 transition-colors">
                <div className="bg-white p-1.5 rounded-full shadow-sm text-blue-600"><Percent size={18} /></div>
                <div className="flex items-center text-blue-900">
                    <span className="font-bold mr-2">TVA Réduite</span>
                    <span className="bg-blue-500 text-white text-xs font-black px-2 py-1 rounded-md shadow-sm">5.5%</span>
                </div>
            </div>
            <div className="flex items-center space-x-3 bg-orange-50 px-4 py-2 rounded-xl border border-orange-100 group-hover:border-orange-200 transition-colors">
                <div className="bg-white p-1.5 rounded-full shadow-sm text-orange-600"><ShieldCheck size={18} /></div>
                <div className="flex flex-col md:flex-row md:items-baseline text-orange-900">
                    <span className="font-bold">Garantie Décennale</span>
                </div>
            </div>
        </div>
    </div>
);

export default AidesBanner;