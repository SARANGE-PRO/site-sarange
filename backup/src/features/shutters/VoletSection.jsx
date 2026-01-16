import React, { useState, useEffect, useRef } from 'react';
import {
  Check,
  ChevronRight,
  Layers,
  Info,
  ShieldCheck,
  Thermometer,
  Palette,
} from 'lucide-react';
import { IMAGES, MOTOR_OPTIONS } from '@data/constants';

const VoletSection = () => {
  const [selectedMotor, setSelectedMotor] = useState('radio');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      setSelectedMotor((current) => {
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
    <section className="py-16 bg-secondary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-secondary-900 mb-4 tracking-tight">
            Volets Roulants Sur-Mesure
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            <span className="font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">
              -20% sur tous les volets
            </span>{' '}
            pour toute commande avec fenêtres
          </p>
        </div>

        {/* Main Card */}
        <div
          className="bg-white rounded-[2rem] shadow-2xl shadow-secondary-200/50 overflow-hidden border border-secondary-100 w-full mx-auto max-w-6xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={containerRef}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
            {/* LEFT: Visual */}
            <div className="lg:col-span-7 relative h-96 lg:h-auto bg-secondary-800 overflow-hidden">
              {/* Image with overlay */}
              <div className="absolute inset-0">
                <img
                  key={selectedMotor}
                  src={selectedMotor === 'solaire' ? IMAGES.volet_solaire : IMAGES.volet_electrique}
                  alt="Volet roulant"
                  className="w-full h-full object-cover animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Auto indicator */}
              {isAutoPlaying && !isHovering && (
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-secondary-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg z-20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                  </span>
                  <span className="text-[10px] font-medium text-white tracking-wide uppercase">
                    Démo Auto
                  </span>
                </div>
              )}

              {/* Promo badge */}
              <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg uppercase tracking-wide z-20 animate-bounce-slow">
                -20% avec fenêtres
              </div>

              {/* Bottom glass panel */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <div className="bg-secondary-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 text-white justify-center md:justify-start">
                    <Info size={16} className="text-accent-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-100/90">
                      Inclus de série sur tous nos modèles
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <FeatureBox icon={Layers} label="Lames Alu" color="text-secondary-300" />
                    <FeatureBox icon={ShieldCheck} label="Sécurité" color="text-green-400" />
                    <FeatureBox icon={Thermometer} label="Isolation" color="text-accent-400" />
                    <FeatureBox icon={Palette} label="Couleurs" color="text-primary-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Configurator */}
            <div className="lg:col-span-5 p-6 md:p-10 flex flex-col bg-white">
              <h3 className="text-2xl font-black text-secondary-900 mb-2">
                Configurez votre volet
              </h3>
              <p className="text-sm text-secondary-500 mb-6">
                Choisissez la motorisation idéale pour votre projet
              </p>

              {/* Options */}
              <div className="space-y-3 mb-8 flex-grow">
                {MOTOR_OPTIONS.map((option) => (
                  <MotorOption
                    key={option.id}
                    {...option}
                    isSelected={selectedMotor === option.id}
                    onSelect={handleSelect}
                  />
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-4 border-t border-secondary-100">
                <button
                  className="w-full bg-primary-600 text-white rounded-xl py-4 px-6 font-bold text-base shadow-lg shadow-orange-900/20 hover:shadow-xl hover:bg-primary-700 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  DEMANDER MON DEVIS
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
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
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s infinite ease-in-out;
                }
            `}</style>
    </section>
  );
};

// Feature box component
const FeatureBox = ({ icon: Icon, label, color }) => (
  <div className="flex flex-col items-center text-center group cursor-default">
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:bg-white/10 transition-colors border border-white/10">
      <Icon className={`${color} transition-colors`} size={20} strokeWidth={1.5} />
    </div>
    <span className="text-[10px] font-bold text-secondary-300 leading-tight group-hover:text-white transition-colors uppercase tracking-wide">
      {label}
    </span>
  </div>
);

// Motor option component
const MotorOption = ({
  id,
  icon: Icon,
  name,
  badge,
  badgeColor,
  description,
  features,
  isSelected,
  onSelect,
  colorScheme,
}) => {
  // Static color classes based on colorScheme
  const getColorClasses = () => {
    switch (colorScheme) {
      case 'orange':
        return {
          border: 'border-primary-500',
          bg: 'bg-primary-50',
          iconBg: 'bg-primary-500',
          text: 'text-primary-600',
          radio: 'bg-primary-500',
          radioBorder: 'border-primary-500',
        };
      case 'blue':
        return {
          border: 'border-blue-500',
          bg: 'bg-accent-50',
          iconBg: 'bg-accent-500',
          text: 'text-accent-600',
          radio: 'bg-accent-500',
          radioBorder: 'border-blue-500',
        };
      case 'green':
        return {
          border: 'border-green-500',
          bg: 'bg-green-50',
          iconBg: 'bg-green-500',
          text: 'text-green-600',
          radio: 'bg-green-500',
          radioBorder: 'border-green-500',
        };
      default:
        return {
          border: 'border-secondary-500',
          bg: 'bg-secondary-50',
          iconBg: 'bg-secondary-500',
          text: 'text-secondary-600',
          radio: 'bg-secondary-500',
          radioBorder: 'border-secondary-500',
        };
    }
  };

  const colors = getColorClasses();

  return (
    <button
      onClick={() => onSelect(id)}
      className={`
                w-full text-left p-3 rounded-xl border-2 transition-all duration-300 group
                ${isSelected
          ? `${colors.border} ${colors.bg} shadow-lg scale-[1.02]`
          : 'border-secondary-100 hover:border-secondary-200 hover:bg-secondary-50'
        }
            `}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className={`
                    p-2.5 rounded-lg shrink-0 transition-colors duration-300
                    ${isSelected ? `${colors.iconBg} text-white shadow-md` : 'bg-secondary-100 text-secondary-400 group-hover:bg-white group-hover:text-secondary-600'}
                `}
        >
          <Icon size={20} strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-0.5">
            <span
              className={`font-bold text-base ${isSelected ? 'text-secondary-900' : 'text-secondary-700'}`}
            >
              {name}
            </span>
            {badge && (
              <span
                className={`${badgeColor} text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider ml-2`}
              >
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-secondary-500 leading-snug">{description}</p>

          {/* Accordion features */}
          <div
            className={`
                        grid transition-all duration-500 ease-in-out overflow-hidden
                        ${isSelected ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-secondary-200/60' : 'grid-rows-[0fr] opacity-0'}
                    `}
          >
            <ul className="min-h-0 space-y-1.5">
              {features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-secondary-700 font-medium"
                >
                  <Check size={12} className={`${colors.text} mt-0.5 shrink-0`} strokeWidth={3} />
                  <span className="leading-tight">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Radio indicator */}
        <div
          className={`
                    w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 mt-1
                    ${isSelected ? colors.radioBorder : 'border-secondary-300'}
                `}
        >
          {isSelected && <div className={`w-2 h-2 rounded-full ${colors.radio}`} />}
        </div>
      </div>
    </button>
  );
};

export default VoletSection;
