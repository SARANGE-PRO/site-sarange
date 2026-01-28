import React from "react";
import { MapPin, Phone, Clock, Navigation, CheckCircle2, ExternalLink } from "lucide-react";
import ContactForm from "../../../features/contact/ContactForm";

const ContactBlock = ({ city, phoneLink }) => (
    <section id="contact" className="py-12 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">

            {/* --- EN-TÊTE SECTION (Variante Sénart) --- */}
            <div className="text-center mb-10 md:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-orange-700 font-bold text-xs md:text-sm uppercase tracking-wider mb-4 border border-orange-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Devis Gratuit & Sans Engagement
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight leading-none">
                    Un Projet sur {city} ou Environ ?
                </h2>
                <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                    Obtenez votre chiffrage précis directement auprès de l'atelier local.
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">

                {/* --- COLONNE GAUCHE --- */}
                <div className="lg:col-span-7 xl:col-span-8">
                    <ContactForm />
                </div>

                {/* --- COLONNE DROITE --- */}
                <aside className="lg:col-span-5 xl:col-span-4 space-y-6 sticky top-24">

                    {/* ✅ CARTE (Keep logic, rewriting only descriptive text around it) */}
                    <a
                        href="https://www.google.com/maps/dir//28+Rue+Jean+Rostand,+77380+Combs-la-Ville"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white p-1 rounded-3xl border border-slate-200 shadow-lg group hover:ring-4 ring-orange-100 transition-all cursor-pointer"
                    >
                        {/* Map Header */}
                        <div className="relative h-48 rounded-t-[20px] overflow-hidden bg-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.234!2d2.5594438!3d48.6630544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5dce7d8c5c5c5%3A0x8e7d7c6b5a4b3c2d!2s28%20Rue%20Jean%20Rostand%2C%2077380%20Combs-la-Ville!5e0!3m2!1sfr!2sfr!4v1737919200000!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0, pointerEvents: 'none' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Atelier SARANGE Menuiserie"
                                className="opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="bg-white text-slate-900 font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                    <Navigation size={16} className="text-orange-500" /> Y aller
                                </span>
                            </div>

                            {/* Badge Permanent */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12 pointer-events-none">
                                <span className="text-white font-bold text-sm flex items-center gap-2">
                                    <MapPin size={16} className="text-orange-400" /> Atelier Combs-la-Ville
                                </span>
                            </div>
                        </div>

                        {/* Info Body */}
                        <div className="p-6 bg-white rounded-b-[20px]">
                            <address className="not-italic space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-black text-slate-900 text-lg">SARANGE</p>
                                            <ExternalLink size={14} className="text-slate-400" />
                                        </div>
                                        <p className="text-slate-600 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                                            28 Rue Jean Rostand, CA Paris-Sud<br />
                                            77380 Combs-la-Ville
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div className="text-sm w-full">
                                        <p className="font-bold text-slate-900 mb-1">Horaires d'ouverture</p>
                                        <div className="grid grid-cols-2 gap-x-2 text-slate-600 text-xs">
                                            <span>Semaine :</span>
                                            <span className="font-bold text-green-600 text-right">08:00 – 17:30</span>
                                            <span>Weekend :</span>
                                            <span className="font-bold text-slate-400 text-right">Fermé</span>
                                        </div>
                                    </div>
                                </div>
                            </address>
                        </div>
                    </a>

                    {/* Bloc "Nos Atouts" - Wording diff */}
                    <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="bg-orange-500 w-1 h-6 rounded-full"></span>
                            Les + SARANGE
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                                <span>Proximité Immédiate (Cœur Sénart)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                                <span>Poseurs Salariés Qualifiés</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                                <span>Garanties Complètes (RGE)</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Téléphone */}
                    <a
                        href={phoneLink}
                        className="group w-full flex items-center justify-between bg-gradient-to-r from-orange-500 to-red-600 text-white p-5 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-orange-100 font-bold uppercase tracking-wider">Un conseil ?</p>
                                <p className="text-xl font-black tracking-tight">09 86 71 34 44</p>
                            </div>
                        </div>
                    </a>

                </aside>
            </div>
        </div>
    </section>
);

export default ContactBlock;
