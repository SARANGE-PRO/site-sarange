import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase, Percent, Phone } from 'lucide-react'; // ✅ Phone ajouté

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

  // ✅ GA4 Tracking Tel Click
  const handleTelClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'tel_click', {
        event_category: 'Conversion',
        event_label: 'Header Desktop',
        value: 50 // Valeur lead tel
      });
    }
  };

  const logoGradientClass = isScrolled
    ? 'bg-gradient-to-b from-secondary-900 to-secondary-600 drop-shadow-sm'
    : 'bg-gradient-to-b from-white to-slate-300 drop-shadow-lg';

  const taglineClass = isScrolled ? 'text-secondary-600' : 'text-white/90';
  const navLinkClass = isScrolled ? 'text-secondary-700 hover:text-primary-500' : 'text-white hover:text-primary-500';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* LOGO (inchangé) */}
        <div className="flex flex-col md:flex-row md:items-center cursor-pointer group" onClick={() => scrollTo('hero')}>
          <div className="flex items-baseline">
            <span className={`text-2xl font-black tracking-tighter leading-none bg-clip-text text-transparent transition-all duration-300 ${logoGradientClass}`}>
              SARANGE
            </span>
            <span className="text-2xl font-black leading-none text-primary-500">.</span>
          </div>
          <div className={`hidden md:flex items-center ml-4 pl-4 border-l-2 h-7 transition-colors duration-300 ${isScrolled ? 'border-secondary-300' : 'border-white/30'}`}>
            <span className={`text-xs font-bold uppercase tracking-wide transition-colors duration-300 ${taglineClass}`}>
              Fenêtres PVC & Alu — Fabricant & Installateur
            </span>
          </div>
          <span className={`md:hidden text-[10px] font-bold tracking-wide uppercase mt-1 transition-colors duration-300 ${taglineClass}`}>
            Fenêtres PVC & Alu — Fabricant & Installateur
          </span>
        </div>

        {/* ✅ DESKTOP MENU + NOUVEAU NUMÉRO */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-semibold transition-colors ${navLinkClass}`}
            >
              {item.label}
            </button>
          ))}

          <button onClick={() => scrollTo('b2b')} className={`text-sm font-bold flex items-center ${navLinkClass}`}>
            <Briefcase size={14} className="mr-2" /> B2B
          </button>

          {/* ✅ NOUVEAU : NUMÉRO CLIQUABLE DESKTOP */}
          <a
            href="tel:+33986713444"
            className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-orange-50 rounded-xl transition-all group border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-md"
            onClick={handleTelClick}
          >
            <Phone size={18} className="text-orange-500 group-hover:animate-pulse transition-all" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Appelez-nous</span>
              <span className="font-black text-slate-900 text-base group-hover:text-orange-600 transition-colors">09 86 71 34 44</span>
            </div>
          </a>

          {/* CTA Devis */}
          <button onClick={() => scrollTo('contact')} className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-full transition-all shadow-lg transform hover:-translate-y-0.5">
            DEVIS GRATUIT
          </button>
        </div>

        {/* MOBILE MENU BUTTON (inchangé) */}
        <button className="lg:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={32} className="text-white z-50 relative" />
          ) : (
            <Menu size={32} className={isScrolled ? 'text-secondary-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* MOBILE MENU (inchangé) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary-950 border-t border-white/10 shadow-2xl absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-1">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-lg font-medium text-secondary-200 py-3.5 border-b border-white/5 hover:text-white transition-colors tap-target"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => scrollTo('b2b')}
                className="text-left text-lg font-bold text-white py-3.5 border-b border-white/10 flex items-center hover:text-primary-400 transition-colors"
              >
                <Briefcase className="mr-3 text-primary-500" size={20} /> ESPACE PRO / B2B
              </button>

              <button
                onClick={() => { setIsOpen(false); onOpenAides(); }}
                className="text-left text-lg font-medium text-emerald-400 py-3.5 border-b border-white/5 flex items-center hover:text-emerald-300 transition-colors"
              >
                <Percent className="mr-3" size={18} /> Voir les Aides & Primes
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-4 bg-primary-500 text-white font-bold rounded-xl mt-6 hover:bg-primary-600 transition-colors shadow-lg"
              >
                DEMANDER MON DEVIS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
