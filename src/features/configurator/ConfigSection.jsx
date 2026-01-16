import React from 'react';
import { HelpCircle } from 'lucide-react';

const ConfigSection = ({ title, children, helpAction }) => (
  <div className="mb-6 animate-fadeIn">
    <div className="flex justify-between items-center mb-3">
      <label className="block text-sm font-bold text-slate-900">{title}</label>
      {helpAction && (
        <button onClick={helpAction} className="text-xs flex items-center text-blue-600 underline font-bold">
          <HelpCircle size={14} className="mr-1"/> Aide
        </button>
      )}
    </div>
    {children}
  </div>
);

export default ConfigSection;