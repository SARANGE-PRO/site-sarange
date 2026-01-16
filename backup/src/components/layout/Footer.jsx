import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-secondary-950 text-secondary-400 py-12 border-t border-secondary-900">
    <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl font-black text-white mb-4">
          SARANGE<span className="text-primary-500">.</span>
        </h2>
        <p className="mb-6 max-w-sm">
          Menuisier Fabricant & Installateur. L'exigence du sur-mesure pour votre habitat en
          Île-de-France.
        </p>
        <p className="text-sm leading-relaxed text-secondary-500 mb-4 max-w-md">
          <strong className="text-secondary-400">Fabricant de fenêtres PVC et aluminium</strong>,
          SARANGE conçoit et installe vos{' '}
          <strong className="text-secondary-400">menuiseries sur-mesure</strong> : fenêtres, volets
          roulants, portes d'entrée, vérandas et portes de garage.{' '}
          <strong className="text-secondary-400">Pose incluse par nos équipes</strong> en
          Île-de-France, directement depuis notre atelier de{' '}
          <strong className="text-secondary-400">Combs-la-Ville (77)</strong>.
        </p>
        <div className="flex space-x-4">
          <div className="bg-white px-2 py-1 rounded text-xs font-bold text-secondary-900">
            RGE Qualibat
          </div>
          <div className="bg-white px-2 py-1 rounded text-xs font-bold text-secondary-900">
            Garantie Décennale
          </div>
          <div className="bg-white px-2 py-1 rounded text-xs font-bold text-secondary-900">
            Schüco
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <MapPin size={18} className="mr-2 mt-1 text-primary-500 shrink-0" />{' '}
            <span>
              28 Rue Jean Rostand
              <br />
              77380 Combs-la-Ville
            </span>
          </li>
          <li className="flex items-center">
            <Phone size={18} className="mr-2 text-primary-500 shrink-0" /> 09 86 71 34 44
          </li>
          <li className="flex items-center">
            <Mail size={18} className="mr-2 text-primary-500 shrink-0" /> contact@sarange.fr
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Zone d'intervention</h4>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          <li>
            <span className="font-bold text-secondary-300">75</span> Paris
          </li>
          <li>
            <span className="font-bold text-slate-300">77</span> Seine-et-Marne
          </li>
          <li>
            <span className="font-bold text-slate-300">78</span> Yvelines
          </li>
          <li>
            <span className="font-bold text-slate-300">91</span> Essonne
          </li>
          <li>
            <span className="font-bold text-slate-300">92</span> Hauts-de-Seine
          </li>
          <li>
            <span className="font-bold text-slate-300">93</span> Seine-Saint-Denis
          </li>
          <li>
            <span className="font-bold text-slate-300">94</span> Val-de-Marne
          </li>
          <li>
            <span className="font-bold text-slate-300">95</span> Val-d'Oise
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-12 pt-8 border-t border-secondary-900 text-sm">
      © {new Date().getFullYear()} SARANGE. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;
