import React from 'react';
import { ShieldCheck, Euro, Clock } from 'lucide-react';

const CTATrustBadges = () => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-4 px-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide flex items-center whitespace-nowrap">
                <ShieldCheck size={14} className="mr-1.5 text-green-500" strokeWidth={2.5} />
                100% Gratuit & Sans engagement
            </span>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide flex items-center whitespace-nowrap">
                <Euro size={14} className="mr-1.5 text-orange-500" strokeWidth={2.5} />
                Tarifs compétitifs garantis
            </span>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide flex items-center whitespace-nowrap">
                <Clock size={14} className="mr-1.5 text-blue-500" strokeWidth={2.5} />
                Réponse 24H
            </span>
        </div>
    );
};

export default CTATrustBadges;
