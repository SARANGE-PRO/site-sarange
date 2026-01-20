import React, { useState, useEffect, useRef } from 'react';
import { Sun, Zap, Check, ChevronRight, Thermometer, ShieldCheck, Palette, Layers, Info, Signal, Power } from 'lucide-react';
import { IMAGES } from '../../data/constants';
import CTATrustBadges from '../ui/CTATrustBadges';

const VoletSection = () => {
    const [selectedMotor, setSelectedMotor] = useState('radio');
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    // Autoplay logic
    useEffect(() => {
        if (!isAutoPlaying || isHovering) return;

        const interval = setInterval(() => {
            setSelectedMotor(current => {
                if (current === 'radio') return 'solaire';
                if (current === 'solaire') return 'filaire';
                return 'radio';
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, isHovering]);

    const handleSelect = (id) => {
        setIsAutoPlaying(false);
        setSelectedMotor(id);
    };

    return (
        <section id="volets" className="py-12 md:py-20 bg-secondary-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-200 shadow-sm">
                        ☀️ L'indispensable confort
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-secondary-900 mb-4 tracking-tight">
                        VOLETS ROULANTS <span className="text-primary-600">SUR-MESURE</span>
                    </h2>
                    <p className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto">
                        Sécurisez et isolez votre maison. <span className="font-bold text-primary-700"> -20% sur tous les volets</span> pour toute commande simultanée avec vos fenêtres.
                    </p>
                </div>

                {/* Main Card */}
                <div
                    className="bg-white rounded-2xl md:rounded-[2rem] shadow-xl overflow-hidden border border-secondary-100 w-full mx-auto max-w-6xl flex flex-col lg:flex-row"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    ref={containerRef}
                >

                    {/* LEFT: Visual (Mobile Top / Desktop Left) */}
                    <div className="w-full lg:w-7/12 relative bg-secondary-900 flex flex-col">

                        {/* Container Image */}
                        <div className="relative h-72 md:h-96 lg:h-full overflow-hidden group">
                            <img
                                key={selectedMotor}
                                src={selectedMotor === 'solaire' ? IMAGES.volet_solaire : IMAGES.volet_electrique}
                                alt="Volet roulant aluminium"
                                className="w-full h-full object-cover animate-fadeIn transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-transparent to-black/30 lg:bg-gradient-to-t lg:from-secondary-900/60 lg:via-transparent lg:to-transparent"></div>

                            {/* Promo badge (Top Left) */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg uppercase tracking-wide animate-pulse flex items-center gap-1">
                                    <Zap size={14} fill="currentColor" /> -20% PACK DUO
                                </span>
                            </div>

                            {/* Auto indicator (Top Right) */}
                            {isAutoPlaying && !isHovering && (
                                <div className="absolute top-4 right-4 flex items-center gap-2 bg-secondary-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg z-20">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-white tracking-wide uppercase">Démo</span>
                                </div>
                            )}

                            {/* Navigation Arrows (Desktop Only) */}
                            <div className="hidden lg:flex justify-between absolute inset-0 items-center px-4 pointer-events-none">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsAutoPlaying(false);
                                        const motors = ['radio', 'solaire', 'filaire'];
                                        const currentIndex = motors.indexOf(selectedMotor);
                                        const prevIndex = currentIndex === 0 ? motors.length - 1 : currentIndex - 1;
                                        setSelectedMotor(motors[prevIndex]);
                                    }}
                                    className="w-10 h-10 bg-white/10 hover:bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-white hover:text-secondary-900 transition-all pointer-events-auto cursor-pointer"
                                >
                                    <ChevronRight size={20} className="rotate-180" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsAutoPlaying(false);
                                        const motors = ['radio', 'solaire', 'filaire'];
                                        const currentIndex = motors.indexOf(selectedMotor);
                                        const nextIndex = (currentIndex + 1) % motors.length;
                                        setSelectedMotor(motors[nextIndex]);
                                    }}
                                    className="w-10 h-10 bg-white/10 hover:bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-white hover:text-secondary-900 transition-all pointer-events-auto cursor-pointer"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* "Grey Card" / Advantages Bar */}
                        <div className="relative bg-secondary-900 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:bg-transparent z-10">
                            <div className="p-4 lg:p-6">
                                <div className="bg-secondary-800/50 lg:bg-secondary-950/80 backdrop-blur-xl border border-white/5 lg:border-white/10 rounded-xl p-4 shadow-xl">
                                    <div className="flex items-center gap-2 mb-3 text-white justify-center lg:justify-start">
                                        <Info size={14} className="text-primary-400" />
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary-200">
                                            Inclus de série sur tous nos modèles
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 md:gap-4">
                                        <FeatureBox icon={Layers} label="Lames Alu" color="text-secondary-300" />
                                        <FeatureBox icon={ShieldCheck} label="Sécurité" color="text-green-400" />
                                        <FeatureBox icon={Thermometer} label="Isolation" color="text-primary-400" />
                                        <FeatureBox icon={Palette} label="Couleurs" color="text-secondary-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Configurator */}
                    <div className="w-full lg:w-5/12 flex flex-col bg-white h-auto lg:h-[750px]">
                        {/* Scrollable area for options */}
                        <div className="p-6 md:p-8 flex-grow overflow-y-auto">
                            <h3 className="text-xl md:text-2xl font-black text-secondary-900 mb-2">
                                Configurez votre volet
                            </h3>
                            <p className="text-sm text-secondary-500 mb-6 font-medium">
                                Sélectionnez la motorisation adaptée à votre projet
                            </p>

                            <div className="space-y-3">
                                <MotorOption
                                    id="radio"
                                    icon={Signal}
                                    name="Électrique Radio"
                                    badge="🔥 N°1"
                                    badgeColor="bg-primary-500"
                                    description="Confort et simplicité au quotidien."
                                    features={[
                                        'Commande sans fil (télécommande)',
                                        'Moteur silencieux & arrêt doux',
                                        'Installation simplifiée (1 câble)',
                                        'Compatible Smartbox & Smartphone'
                                    ]}
                                    isSelected={selectedMotor === 'radio'}
                                    onSelect={handleSelect}
                                    colorScheme="orange"
                                />

                                <MotorOption
                                    id="solaire"
                                    icon={Sun}
                                    name="Solaire Autonome"
                                    badge="SANS TRAVAUX"
                                    badgeColor="bg-green-600"
                                    description="100% Autonome, zéro câblage."
                                    features={[
                                        'Panneau solaire + Batterie intégrée',
                                        'Pose ultra-rapide sans électricité',
                                        'Autonomie 30 jours sans soleil',
                                        'Compatible Domotique'
                                    ]}
                                    isSelected={selectedMotor === 'solaire'}
                                    onSelect={handleSelect}
                                    colorScheme="green"
                                />

                                <MotorOption
                                    id="filaire"
                                    icon={Power}
                                    name="Électrique Filaire"
                                    badge="ÉCO"
                                    badgeColor="bg-secondary-600"
                                    description="La solution fiable et économique."
                                    features={[
                                        'Commande par interrupteur mural',
                                        'Prix le plus bas du marché',
                                        'Technologie robuste éprouvée',
                                        'Entretien minimal'
                                    ]}
                                    isSelected={selectedMotor === 'filaire'}
                                    onSelect={handleSelect}
                                    colorScheme="blue"
                                />
                            </div>
                        </div>

                        {/* Sticky Bottom CTA */}
                        <div className="p-6 md:p-8 bg-white border-t border-secondary-100 z-20">
                            <button
                                className="w-full bg-secondary-900 text-white rounded-xl py-4 px-6 font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:bg-primary-600 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <span>DEMANDER MON DEVIS</span>
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="mt-4 flex justify-center">
                                <CTATrustBadges />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(1.05); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

// Feature box component
const FeatureBox = ({ icon: Icon, label, color }) => (
    <div className="flex flex-col items-center text-center group cursor-default">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center mb-1.5 group-hover:bg-white/10 transition-colors border border-white/10">
            <Icon className={`${color} transition-colors`} size={16} strokeWidth={2} />
        </div>
        <span className="text-[9px] md:text-[10px] font-bold text-secondary-300 leading-tight group-hover:text-white transition-colors uppercase tracking-wide">
            {label}
        </span>
    </div>
);

// Motor option component
const MotorOption = ({ id, icon: Icon, name, badge, badgeColor, description, features, isSelected, onSelect, colorScheme }) => {
    // Static color classes based on colorScheme
    const getColorClasses = () => {
        switch (colorScheme) {
            case 'orange':
                return {
                    border: 'border-primary-500',
                    bg: 'bg-primary-50',
                    iconBg: 'bg-primary-500',
                    text: 'text-primary-700',
                    radio: 'bg-primary-500',
                    radioBorder: 'border-primary-500'
                };
            case 'blue':
                return {
                    border: 'border-blue-500',
                    bg: 'bg-blue-50',
                    iconBg: 'bg-blue-500',
                    text: 'text-blue-700',
                    radio: 'bg-blue-500',
                    radioBorder: 'border-blue-500'
                };
            case 'green':
                return {
                    border: 'border-green-500',
                    bg: 'bg-green-50',
                    iconBg: 'bg-green-500',
                    text: 'text-green-700',
                    radio: 'bg-green-500',
                    radioBorder: 'border-green-500'
                };
            default:
                return {
                    border: 'border-secondary-500',
                    bg: 'bg-secondary-50',
                    iconBg: 'bg-secondary-500',
                    text: 'text-secondary-700',
                    radio: 'bg-secondary-500',
                    radioBorder: 'border-secondary-500'
                };
        }
    };

    const colors = getColorClasses();

    return (
        <button
            onClick={() => onSelect(id)}
            className={`
                w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-300 group
                ${isSelected
                    ? `${colors.border} ${colors.bg} shadow-md`
                    : 'border-secondary-100 bg-white hover:border-secondary-300 hover:bg-secondary-50'
                }
            `}
        >
            <div className="flex items-start gap-3 md:gap-4">
                {/* Icon */}
                <div className={`
                    p-2.5 rounded-lg shrink-0 transition-colors duration-300
                    ${isSelected ? `${colors.iconBg} text-white shadow-sm` : 'bg-secondary-100 text-secondary-400 group-hover:bg-white group-hover:text-secondary-600'}
                `}>
                    <Icon size={20} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                        <span className={`font-bold text-sm md:text-base ${isSelected ? 'text-secondary-900' : 'text-secondary-700'}`}>
                            {name}
                        </span>
                        {badge && (
                            // --- MODIFICATION ICI : Ajout de whitespace-nowrap, flex, items-center, justify-center et shrink-0 ---
                            <span className={`${badgeColor} text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider ml-2 whitespace-nowrap flex items-center justify-center shrink-0`}>
                                {badge}
                            </span>
                        )}
                    </div>
                    <p className="text-xs text-secondary-500 leading-snug mb-2">
                        {description}
                    </p>

                    {/* Accordion features */}
                    <div className={`
                        grid transition-all duration-300 ease-in-out overflow-hidden
                        ${isSelected ? 'grid-rows-[1fr] opacity-100 mt-2 pt-2 border-t border-black/5' : 'grid-rows-[0fr] opacity-0'}
                    `}>
                        <ul className="min-h-0 space-y-1.5">
                            {features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-secondary-600 font-medium">
                                    <Check size={12} className={`${colors.text} mt-0.5 shrink-0`} strokeWidth={3} />
                                    <span className="leading-tight">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Radio indicator */}
                <div className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5
                    ${isSelected ? colors.radioBorder : 'border-secondary-200'}
                `}>
                    {isSelected && <div className={`w-2.5 h-2.5 rounded-full ${colors.radio}`} />}
                </div>
            </div>
        </button>
    );
};

export default VoletSection;