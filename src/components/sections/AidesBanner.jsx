import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Percent, ChevronRight, CheckCircle2, Medal } from 'lucide-react';

const AidesBanner = ({ onOpenAides }) => (
    <div
        className="bg-white border-b border-slate-100 shadow-sm py-3 cursor-pointer relative z-20 group transition-all hover:bg-slate-50"
        onClick={onOpenAides}
    >
        <div className="container mx-auto px-4 relative z-10">

            {/* Conteneur Flex : Sur mobile on garde en ligne avec scroll horizontal si besoin, ou wrap serré */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">

                {/* Badge RGE - Mis en avant */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-green-100 text-green-800 px-4 py-1.5 rounded-full border border-green-200 shadow-sm shrink-0"
                >
                    <CheckCircle2 className="mr-2 text-green-600" size={18} strokeWidth={2.5} />
                    <span className="font-bold uppercase tracking-wide text-xs sm:text-sm">Entreprise RGE Certifiée</span>
                </motion.div>

                {/* Les autres badges - Disposés en ligne sur mobile pour gagner de la place */}
                <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm text-slate-600 overflow-x-auto w-full md:w-auto justify-center scrollbar-hide">

                    {/* TVA */}
                    <div className="flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100/50">
                        <Percent size={16} className="text-blue-500 mr-2 shrink-0" />
                        <span className="mr-1.5">TVA Réduite</span>
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">5.5%</span>
                    </div>

                    {/* Garantie */}
                    <div className="flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-100/50">
                        <Medal size={16} className="text-orange-500 mr-2 shrink-0" />
                        <span className="font-semibold text-slate-700">Garantie Décennale</span>
                    </div>
                </div>

                {/* Indicateur de clic (Desktop et Mobile) */}
                <div className="hidden md:flex items-center text-slate-400 text-xs font-semibold group-hover:text-slate-800 transition-colors absolute right-4">
                    <span>Voir les aides</span>
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    </div>
);

export default AidesBanner;