import React from "react";
import { MapPin, Users, ShieldCheck, Euro, Check } from "lucide-react";

const OfferSection = ({ city }) => {

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-8 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* HEADER SUPER COMPACT */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-1.5 text-orange-600 font-bold text-[10px] uppercase tracking-wider mb-2 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                        <MapPin size={10} /> Installation sur {city} et alentours
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-none">
                        Menuiserie à {city} : Fabrication, Fourniture et Pose
                    </h2>
                </div>

                {/* GRID BENTO OPTIMISÉE MOBILE (2 colonnes) */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-4">

                    {/* BLOC 1 : PRIX (Largeur totale sur mobile) - TAPE À L'OEIL */}
                    <div className="col-span-2 md:col-span-5 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-4 md:p-5 text-white shadow-lg shadow-orange-500/20 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center relative overflow-hidden group">
                        {/* Effet brillant */}
                        <div className="absolute right-[-10px] top-[-10px] bg-white/20 w-20 h-20 rounded-full blur-xl animate-pulse"></div>

                        <div className="flex items-center gap-3 md:block z-10">
                            <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm inline-flex">
                                <Euro size={20} className="text-white" />
                            </div>
                            <h3 className="text-lg md:text-2xl font-black uppercase italic tracking-tighter">
                                DIRECT USINE
                            </h3>
                        </div>
                        <div className="text-right md:text-left mt-0 md:mt-2 z-10">
                            <p className="text-white/90 text-xs md:text-sm font-medium leading-tight">
                                Le Meilleur Rapport
                            </p>
                            <p className="text-white font-black text-sm md:text-lg uppercase">
                                Qualité / Prix
                            </p>
                        </div>
                    </div>

                    {/* BLOC 2 : GARANTIE (Demi-largeur mobile) */}
                    <div className="col-span-1 md:col-span-4 bg-slate-900 rounded-xl p-3 md:p-5 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left shadow-md relative overflow-hidden">
                        <div className="flex items-baseline gap-1 mb-0.5">
                            <span className="text-3xl md:text-4xl font-black text-green-400">10</span>
                            <span className="text-sm md:text-lg font-bold uppercase">ANS</span>
                        </div>
                        <h3 className="text-xs md:text-lg font-bold leading-none mb-1">Garantie Décennale</h3>
                        <p className="text-slate-400 text-[10px] md:text-xs leading-tight hidden md:block">
                            Produits & Pose certifiée RGE.
                        </p>
                    </div>

                    {/* BLOC 3 : ÉQUIPE (Demi-largeur mobile) */}
                    <div className="col-span-1 md:col-span-3 bg-slate-50 border border-slate-100 rounded-xl p-3 md:p-5 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-1.5 mb-1 text-blue-700 font-bold text-xs md:text-base">
                            <Users size={16} />
                            <span>Notre Équipe</span>
                        </div>
                        <p className="text-slate-600 text-[10px] md:text-xs leading-tight">
                            Poseurs internes.<br /> Zéro sous-traitance.
                        </p>
                        <div className="mt-2 hidden md:block">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Métrage inclus</span>
                        </div>
                    </div>

                </div>

                {/* CTA COMPACT */}
                <div className="mt-4 md:mt-8 text-center">
                    <button
                        onClick={scrollToContact}
                        className="w-full md:w-auto bg-slate-900 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg active:scale-95 text-sm flex items-center justify-center gap-2 mx-auto transition-all"
                    >
                        <span>Devis Gratuit sur {city} et alentours</span>
                        <Check size={16} />
                    </button>
                    <p className="text-[10px] text-slate-400 mt-2">Réponse rapide • Déplacement offert pour métrage final</p>
                </div>

            </div>
        </section>
    );
};

export default OfferSection;