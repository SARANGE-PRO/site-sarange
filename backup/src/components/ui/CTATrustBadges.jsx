import React from 'react';
import { ShieldCheck, Ruler, Truck, Award } from 'lucide-react';

const CTATrustBadges = () => {
    const badges = [
        {
            icon: Award,
            label: 'Excellence Reconnue',
            sub: 'Artisan Certifié RGE',
            color: 'text-yellow-500',
            bg: 'bg-yellow-50'
        },
        {
            icon: Ruler,
            label: '100% Sur Mesure',
            sub: 'Fabrication Précise',
            color: 'text-blue-500',
            bg: 'bg-blue-50'
        },
        {
            icon: ShieldCheck,
            label: 'Garantie Décennale',
            sub: 'Tranquillité Assurée',
            color: 'text-green-500',
            bg: 'bg-green-50'
        },
        {
            icon: Truck,
            label: 'Intervention Rapide',
            sub: 'Respect des Délais',
            color: 'text-orange-500',
            bg: 'bg-orange-50'
        }
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-t border-slate-100 mt-6">
            {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className={`p-2 rounded-full ${badge.bg} ${badge.color} shrink-0`}>
                        <badge.icon size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-sm leading-tight">{badge.label}</span>
                        <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">{badge.sub}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CTATrustBadges;
