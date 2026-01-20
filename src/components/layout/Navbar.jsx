import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase, Percent } from 'lucide-react';

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => scrollTo('hero')}>
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-secondary-900' : 'text-white'}`}>SARANGE<span className="text-primary-500">.</span></span>
          <span className={`text-[10px] font-medium tracking-wide uppercase ${isScrolled ? 'text-secondary-500' : 'text-secondary-200'}`}>Fabricant Fenêtres, PVC & Alu</span>
          <span className={`text-[9px] tracking-wide ${isScrolled ? 'text-secondary-400' : 'text-secondary-300/80'} mt-0.5`}>
            Fenêtres, volets et menuiseries sur-mesure – Fabrication & pose en Île-de-France
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {['Fenêtres PVC', 'Volets', 'Portes d\'entrée', 'Aluminium', 'Garage / Extension'].map((item) => (
            <button key={item} onClick={() => scrollTo(item === 'Fenêtres PVC' ? 'offer-pvc' : item === 'Volets' ? 'volets' : item === 'Portes d\'entrée' ? 'portes' : item === 'Aluminium' ? 'alu' : 'garage')} className={`text-sm font-semibold hover:text-primary-500 transition-colors ${isScrolled ? 'text-secondary-700' : 'text-white'}`}>{item}</button>
          ))}
          <button onClick={() => scrollTo('b2b')} className={`text-sm font-bold flex items-center bg-secondary-800 text-white px-3 py-1 rounded hover:bg-secondary-700 transition-colors`}><Briefcase size={14} className="mr-2" /> B2B</button>
          <button onClick={() => scrollTo('contact')} className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-full transition-all shadow-lg transform hover:-translate-y-0.5">DEVIS GRATUIT</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-primary-500" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={32} /> : <Menu size={32} className={isScrolled ? 'text-secondary-800' : 'text-white'} />}</button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden glass-dark border-t border-white/10 shadow-2xl">
            <div className="flex flex-col p-5 sm:p-6 space-y-1">
              {['Fenêtres PVC', 'Volets', 'Portes d\'entrée', 'Aluminium', 'Garage / Extension'].map((item) => (
                <button key={item} onClick={() => scrollTo(item === 'Fenêtres PVC' ? 'offer-pvc' : item === 'Volets' ? 'volets' : item === 'Portes d\'entrée' ? 'portes' : item === 'Aluminium' ? 'alu' : 'garage')} className="tap-target text-base sm:text-lg font-medium text-secondary-200 py-3 sm:py-3.5 border-b border-white/5 hover:text-white transition-colors">{item}</button>
              ))}
              <button onClick={() => scrollTo('b2b')} className="tap-target text-base sm:text-lg font-bold text-white py-3 sm:py-3.5 border-b border-white/10 flex items-center hover:text-primary-400 transition-colors"><Briefcase className="mr-2 text-primary-500" size={20} /> ESPACE PRO / B2B</button>
              <button onClick={onOpenAides} className="tap-target text-base sm:text-lg font-medium text-success-400 py-3 sm:py-3.5 border-b border-success-500/20 flex items-center hover:text-success-300 transition-colors"><Percent className="mr-2" size={18} /> Voir les Aides & Primes</button>
              <button onClick={() => scrollTo('contact')} className="tap-target w-full py-3.5 sm:py-4 bg-primary-500 text-white font-bold rounded-xl mt-4 hover:bg-primary-600 transition-colors shadow-lg">DEMANDER MON DEVIS</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;