import React from "react";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";

const PartnersBanner = ({ city }) => {
    return (
        <section className="py-6 bg-slate-100 border-b border-slate-200">
            <div className="container mx-auto px-4">
                <h2 className="sr-only">Nos Garanties et Certifications à {city}</h2>
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                    Certifications & Partenaires de Confiance
                </p>

                {/* Conteneur Flex pour les logos */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">

                    {/* SCHUCO (Partenaire Référence) */}
                    <div className="flex flex-col items-center leading-none group">
                        <h3 className="text-2xl font-black text-slate-800 tracking-tighter group-hover:text-slate-900">SCHÜCO</h3>
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-700">Partenaire Référence</span>
                    </div>

                    {/* MAPRIMERENOV (Remplacement de Somfy) */}
                    <div className="flex items-center gap-1 font-bold text-slate-800">
                        <h3 className="text-lg tracking-tight">maprime<span className="text-lg text-blue-500 italic">rénov'</span></h3>
                    </div>

                    {/* RGE QUALIBAT (Badge Pro) */}
                    <div className="flex items-center gap-2 border-2 border-blue-600/20 px-2 py-1 rounded bg-white">
                        <div className="bg-blue-600 text-white text-[10px] font-black px-1 rounded-sm">RGE</div>
                        <h3 className="font-bold text-blue-900 text-sm">QUALIBAT</h3>
                    </div>

                    {/* CEKAL / NF (Normes Vitrage) */}
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-blue-600 italic tracking-wide">CEKAL</h3>
                        <span className="h-4 w-px bg-slate-300"></span>
                        <div className="flex flex-col items-center leading-none">
                            <h4 className="text-xs font-black text-slate-700 border-2 border-slate-700 rounded-full w-6 h-6 flex items-center justify-center">NF</h4>
                        </div>
                    </div>

                    {/* FABRICATION FRANCAISE (Ton atout maître) */}
                    <div className="flex items-center gap-2 border-l-2 border-slate-300 pl-6 md:ml-4">
                        <Award size={20} className="text-orange-600" />
                        <h3 className="text-xs font-bold text-slate-700 leading-tight uppercase">
                            Fabrication<br />Française
                        </h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PartnersBanner;