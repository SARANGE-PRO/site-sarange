import React from 'react';
import { HelpCircle } from 'lucide-react';

const ConfigSection = ({ title, children, helpAction }) => (
  <div className="mb-8 animate-fadeIn">
    <div className="flex justify-between items-center mb-4">
      <label className="block text-sm font-bold text-slate-800 uppercase tracking-wide">
        {title}
      </label>
      {helpAction && (
        <button
          onClick={helpAction}
          className="text-xs flex items-center text-blue-600 hover:text-blue-700 font-bold bg-blue-50 px-2 py-1 rounded-md transition-colors"
        >
          <HelpCircle size={14} className="mr-1.5" /> Aide
        </button>
      )}
    </div>
    <div className="bg-white/50 backdrop-blur-sm rounded-xl">
      {children}
    </div>
  </div>
);

export default ConfigSection;