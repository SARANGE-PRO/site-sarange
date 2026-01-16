import React from 'react';
import { motion } from 'framer-motion';

const AtelierSeal = ({ className = 'absolute top-4 left-4 z-20' }) => {
  return (
    <div
      className={`w-[80px] h-[80px] bg-primary-500 rounded-full border-4 border-white/20 flex flex-col items-center justify-center shadow-lg rotate-[15deg] ${className} hover:scale-110 transition-transform duration-300 cursor-pointer`}
    >
      {/* Inner Ring for extra detail */}
      <div className="absolute inset-1 border border-white/10 rounded-full pointer-events-none"></div>

      <span className="font-black text-white text-xl leading-none drop-shadow-sm">100%</span>
      <span className="text-[6px] font-bold uppercase tracking-tighter text-white/90 text-center leading-tight mt-0.5">
        Fabriqué à<br />
        <span className="text-[7px]">Combs-la-Ville</span>
      </span>
    </div>
  );
};

export default AtelierSeal;
