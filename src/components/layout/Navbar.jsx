import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase, Percent, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Fenêtres PVC', id: 'offer-pvc' },
  { label: 'Volets', id: 'volets' },
  { label: "Portes d'entrée", id: 'portes' },
  { label: 'Aluminium', id: 'alu' },
  { label: 'Vérandas & Garage', id: 'garage' },
];

const Navbar = ({ onOpenAides }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Tracking Google Analytics 4
  const handleTelClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'tel_click', {
        event_category: 'Conversion',
        event_label: 'Header Desktop',
        value: 50
      });
    }
  };

  // Styles dynamiques selon le scroll
  const logoGradient = isScrolled
    ? 'bg-gradient-to-b from-slate-900 to-slate-600'
    : 'bg-gradient-to-b from-white to-slate-300';

  const textColor = isScrolled ? 'text-slate-700' : 'text-white';
  const hoverColor = 'hover:text-orange-500';
  const separatorColor = isScrolled ? 'bg-slate-200' : 'bg-white/20';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* --- LOGO (Épuré : Uniquement le nom) --- */}
        <div className="flex items-center cursor-pointer group" onClick={() => scrollTo('hero')}>
          <div className="flex items-baseline">
            <span className={`text-3xl lg:text-4xl font-black tracking-tighter leading-none bg-clip-text text-transparent transition-all ${logoGradient}`}>
              SARANGE
            </span>
            <span className="text-3xl lg:text-4xl font-black leading-none text-orange-500">.</span>
          </div>
        </div>

        {/* --- MENU DESKTOP ÉPURÉ --- */}
        <div className="hidden lg:flex items-center gap-6">

          {/* Liens de navigation */}
          <div className="flex items-center gap-5">
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-semibold transition-colors ${textColor} ${hoverColor}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Séparateur vertical discret */}
          <div className={`h-6 w-px ${separatorColor}`}></div>

          {/* Actions Droite (B2B, Tel, CTA) */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => scrollTo('b2b')}
              className={`text-xs font-bold flex items-center opacity-80 hover:opacity-100 transition-opacity ${textColor}`}
            >
              <Briefcase size={14} className="mr-1.5" /> PRO
            </button>

            {/* Numéro Minimaliste (Plus de gros bloc gris) */}
            <a
              href="tel:+33986713444"
              className={`flex items-center gap-2 group transition-all ${textColor}`}
              onClick={handleTelClick}
            >
              <div className={`p-1.5 rounded-full transition-colors ${isScrolled ? 'bg-orange-100 group-hover:bg-orange-500' : 'bg-white/10 group-hover:bg-orange-500'}`}>
                <Phone size={16} className={`transition-colors ${isScrolled ? 'text-orange-600 group-hover:text-white' : 'text-white'}`} />
              </div>
              <span className="font-bold text-sm tracking-wide">09 86 71 34 44</span>
            </a>

            {/* CTA Devis */}
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-orange-500/30 transform hover:-translate-y-0.5"
            >
              DEVIS GRATUIT
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <button className="lg:hidden focus:outline-none p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-white/10 shadow-2xl absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-2">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-lg font-medium text-slate-300 py-3 border-b border-white/5 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => scrollTo('b2b')}
                  className="text-left text-sm font-bold text-white py-2 flex items-center"
                >
                  <Briefcase className="mr-3 text-orange-500" size={18} /> ESPACE PRO / B2B
                </button>

                <button
                  onClick={() => { setIsOpen(false); onOpenAides(); }}
                  className="text-left text-sm font-bold text-white py-2 flex items-center"
                >
                  <Percent className="mr-3 text-orange-500" size={18} /> Voir les Aides & Primes
                </button>

                <a
                  href="tel:+33986713444"
                  onClick={handleTelClick}
                  className="flex items-center gap-3 text-white font-bold py-2"
                >
                  <div className="p-2 bg-orange-500 rounded-full">
                    <Phone size={16} className="text-white" />
                  </div>
                  09 86 71 34 44
                </a>

                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl mt-2 hover:bg-orange-600 transition-colors shadow-lg"
                >
                  DEMANDER MON DEVIS
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;