import React from "react";
import { Factory, Truck, ShieldCheck, Clock, Check } from "lucide-react";

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

                {/* HEADER SÉNART : AXÉ PROXIMITÉ */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-1.5 text-blue-700 font-bold text-[10px] uppercase tracking-wider mb-2 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                        <Truck size={10} /> Intervention Rapide Grand Paris Sud
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-none">
                        La Qualité Allemande, <span className="text-orange-500">Fabriquée Ici.</span>
                    </h2>
                </div>

                {/* GRID BENTO (Variation Sénart) */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-4">

                    {/* BLOC 1 : FABRICATION (Le point fort local) */}
                    <div className="col-span-2 md:col-span-6 bg-slate-900 rounded-xl p-4 md:p-5 text-white shadow-lg flex flex-row md:flex-col items-center md:items-start justify-between relative overflow-hidden group">
                        {/* Déco de fond */}
                        <div className="absolute right-[-20px] top-[-20px] bg-white/10 w-32 h-32 rounded-full blur-2xl transition-all group-hover:bg-orange-500/20"></div>

                        <div className="flex items-center gap-3 md:block z-10">
                            <div className="bg-orange-500 p-2 rounded-lg inline-flex shadow-lg shadow-orange-500/20">
                                <Factory size={20} className="text-white" />
                            </div>
                            <h3 className="text-lg md:text-2xl font-black uppercase italic tracking-tight">
                                100% LOCAL
                            </h3>
                        </div>
                        <div className="text-right md:text-left mt-0 md:mt-3 z-10">
                            <p className="text-slate-300 text-xs md:text-sm font-medium leading-tight">
                                Vos menuiseries sortent de<br />notre usine de Combs-la-Ville.
                            </p>
                        </div>
                    </div>

                    {/* BLOC 2 : SAV & RÉACTIVITÉ */}
                    <div className="col-span-1 md:col-span-3 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-3 md:p-5 flex flex-col justify-center text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                            <Clock size={24} className="text-blue-600" />
                        </div>
                        <h3 className="text-xs md:text-base font-bold text-blue-900 leading-tight mb-1">
                            SAV Express
                        </h3>
                        <p className="text-blue-700/80 text-[10px] md:text-xs leading-tight">
                            Nous sommes voisins.<br />Intervention immédiate.
                        </p>
                    </div>

                    {/* BLOC 3 : GARANTIE */}
                    <div className="col-span-1 md:col-span-3 bg-orange-50 border border-orange-100 rounded-xl p-3 md:p-5 flex flex-col justify-center text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                            <ShieldCheck size={24} className="text-orange-600" />
                        </div>
                        <h3 className="text-xs md:text-base font-bold text-orange-900 leading-tight mb-1">
                            Garantie 10 Ans
                        </h3>
                        <p className="text-orange-700/80 text-[10px] md:text-xs leading-tight">
                            Pièces, Main d'œuvre<br />& Déplacement inclus.
                        </p>
                    </div>

                </div>

                {/* CTA SPÉCIFIQUE SÉNART - MODIFIÉ */}
                <div className="mt-4 md:mt-8 text-center">
                    <button
                        onClick={scrollToContact}
                        className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg active:scale-95 text-sm flex items-center justify-center gap-2 mx-auto transition-all"
                    >
                        <span>Devis Gratuit à {city}</span>
                        <Check size={16} />
                    </button>
                    <p className="text-[10px] text-slate-400 mt-2">
                        Réponse rapide • Sans engagement
                    </p>
                </div>

            </div>
        </section>
    );
};

export default OfferSection;