import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase, Percent } from 'lucide-react';

// 1. CONFIGURATION DES LIENS
// Choix : TOUT AU PLURIEL pour la cohérence (Indique des gammes de produits)
const NAV_LINKS = [
  { label: 'Fenêtres PVC', id: 'offer-pvc' },
  { label: 'Volets', id: 'volets' },
  { label: "Portes d'entrée", id: 'portes' },
  { label: 'Aluminium', id: 'alu' }, // Aluminium reste au singulier car c'est un matériau
  { label: 'Vérandas & Garage', id: 'garage' }, // Mis à jour pour correspondre à la section
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
    } else {
      console.warn(`Section introuvable : #${id}`);
    }
  };

  // 2. GESTION DU STYLE (TEXTURE LOGO & COULEURS)

  // Gradient du Logo : Métallique (Haut) -> Encre Sombre (Scroll)
  const logoGradientClass = isScrolled
    ? 'bg-gradient-to-b from-secondary-900 to-secondary-600 drop-shadow-sm'
    : 'bg-gradient-to-b from-white to-slate-300 drop-shadow-lg';

  // Tagline : Blanc transparent (Haut) -> Gris foncé (Scroll)
  const taglineClass = isScrolled ? 'text-secondary-600' : 'text-white/90';

  // Liens : Blanc (Haut) -> Gris foncé (Scroll)
  const navLinkClass = isScrolled ? 'text-secondary-700 hover:text-primary-500' : 'text-white hover:text-primary-500';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* LOGO AREA */}
        <div className="flex flex-col md:flex-row md:items-center cursor-pointer group" onClick={() => scrollTo('hero')}>

          {/* NOM DE MARQUE AVEC TEXTURE */}
          <div className="flex items-baseline">
            <span className={`text-2xl font-black tracking-tighter leading-none bg-clip-text text-transparent transition-all duration-300 ${logoGradientClass}`}>
              SARANGE
            </span>
            <span className="text-2xl font-black leading-none text-primary-500">.</span>
          </div>

          {/* PHRASE SEO (Ordre : Produit -> Métier) */}

          {/* VERSION PC : Barre verticale + Texte à droite */}
          <div className={`hidden md:flex items-center ml-4 pl-4 border-l-2 h-7 transition-colors duration-300 ${isScrolled ? 'border-secondary-300' : 'border-white/30'}`}>
            <span className={`text-xs font-bold uppercase tracking-wide transition-colors duration-300 ${taglineClass}`}>
              Fenêtres PVC & Alu — Fabricant & Installateur
            </span>
          </div>

          {/* VERSION MOBILE : Texte en dessous */}
          <span className={`md:hidden text-[10px] font-bold tracking-wide uppercase mt-1 transition-colors duration-300 ${taglineClass}`}>
            Fenêtres PVC & Alu — Fabricant & Installateur
          </span>
        </div>

        {/* DESKTOP MENU */}
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

          <button onClick={() => scrollTo('contact')} className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-full transition-all shadow-lg transform hover:-translate-y-0.5">
            DEVIS GRATUIT
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={32} className="text-white z-50 relative" />
          ) : (
            <Menu size={32} className={isScrolled ? 'text-secondary-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
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