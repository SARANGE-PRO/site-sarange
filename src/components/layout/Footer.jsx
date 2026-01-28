import React from "react";
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck } from "lucide-react";

const Footer = ({ onOpenMentions = () => { }, onOpenPolitique = () => { }, onOpenCookies = null }) => (
  <footer className="bg-secondary-950 text-secondary-400 pt-16 pb-8 border-t border-secondary-900 font-sans">
    <div className="container mx-auto px-4">
      {/* --- PARTIE HAUTE : GRILLE --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

        {/* COLONNE 1 : IDENTITÉ */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black text-white mb-6 tracking-tight">
              SARANGE<span className="text-primary-500">.</span>
            </h2>
            <p className="text-secondary-400 mb-6 leading-relaxed">
              Menuisier Fabricant & Installateur. L'exigence du sur-mesure pour votre habitat en Île-de-France.
              <br />
              <br />
              <strong className="text-white">Atelier :</strong>
              <br />
              Combs-la-Ville (77).
            </p>
          </div>

          {/* Badges de confiance */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["RGE Qualibat", "Garantie Décennale", "Partenaire Schüco"].map((badge, index) => (
              <div
                key={index}
                className="flex items-center bg-secondary-900 border border-secondary-800 px-3 py-1.5 rounded-md text-xs font-bold text-secondary-300 shadow-sm"
              >
                <ShieldCheck size={14} className="mr-1.5 text-primary-500" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* COLONNE 2 : CONTACT */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold text-lg mb-6 border-b-2 border-primary-500 w-12 pb-1">Contact</h4>
          <ul className="space-y-5">
            <li>
              <a
                href="https://www.google.com/maps/dir//SARANGE,+28+Rue+Jean+Rostand,+77380+Combs-la-Ville"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group hover:text-white transition-colors"
              >
                <div className="bg-secondary-900 p-2 rounded-lg mr-3 group-hover:bg-primary-500 transition-colors">
                  <MapPin size={18} className="text-primary-500 group-hover:text-white" />
                </div>
                <span className="text-sm">
                  28 rue Jean Rostand
                  <br />
                  77380 Combs-la-Ville
                </span>
              </a>
            </li>

            <li>
              <a href="tel:+33986713444" className="flex items-center group hover:text-white transition-colors">
                <div className="bg-secondary-900 p-2 rounded-lg mr-3 group-hover:bg-primary-500 transition-colors">
                  <Phone size={18} className="text-primary-500 group-hover:text-white" />
                </div>
                <span className="font-medium">09 86 71 34 44</span>
              </a>
            </li>

            <li>
              <a href="mailto:contact@sarange.fr" className="flex items-center group hover:text-white transition-colors">
                <div className="bg-secondary-900 p-2 rounded-lg mr-3 group-hover:bg-primary-500 transition-colors">
                  <Mail size={18} className="text-primary-500 group-hover:text-white" />
                </div>
                <span className="font-medium">contact@sarange.fr</span>
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <h5 className="text-white font-bold text-sm mb-3">Zone d'intervention</h5>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {[75, 77, 78, 91, 92, 93, 94, 95].map((dep) => (
                <span
                  key={dep}
                  className="bg-secondary-900 text-secondary-400 px-2 py-1 rounded border border-secondary-800"
                >
                  {dep}
                </span>
              ))}
            </div>

            <h5 className="text-white font-bold text-sm mb-3">Page commerciale</h5>
            <div className="flex flex-col gap-2">
              <a href="/melun" className="text-xs text-secondary-400 hover:text-orange-500 transition-colors flex items-center gap-1">
                <MapPin size={12} /> Melun
              </a>
              <a href="/senart" className="text-xs text-secondary-400 hover:text-orange-500 transition-colors flex items-center gap-1">
                <MapPin size={12} /> Sénart
              </a>
            </div>
          </div>
        </div>

        {/* COLONNE 3 : CARTE GOOGLE MAPS */}
        <div className="lg:col-span-5 h-64 lg:h-auto min-h-[250px] rounded-2xl overflow-hidden shadow-2xl border border-secondary-800 relative group">
          <div className="absolute inset-0 bg-secondary-950/20 pointer-events-none group-hover:bg-transparent transition-colors z-10" />

          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=fr&amp;q=SARANGE%2028%20Rue%20Jean%20Rostand%2077380%20Combs-la-Ville+(SARANGE)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full object-cover"
            title="Carte SARANGE"
          />

          <a
            href="https://www.google.com/maps/dir//SARANGE,+28+Rue+Jean+Rostand,+77380+Combs-la-Ville"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white text-secondary-950 text-xs font-bold px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20"
          >
            Itinéraire <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* --- PARTIE BASSE : COPYRIGHT & LÉGAL --- */}
      <div className="border-t border-secondary-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-500">
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} <span className="text-white font-bold">SARANGE</span>. Tous droits réservés.
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <button type="button" onClick={onOpenMentions} className="hover:text-primary-500 transition-colors text-left">
            Mentions Légales
          </button>
          <button type="button" onClick={onOpenPolitique} className="hover:text-primary-500 transition-colors text-left">
            Politique de Confidentialité
          </button>
          {typeof onOpenCookies === "function" && (
            <button type="button" onClick={onOpenCookies} className="hover:text-primary-500 transition-colors text-left">
              Cookies
            </button>
          )}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;