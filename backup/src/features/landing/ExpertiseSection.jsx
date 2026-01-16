import React from 'react';
import { Factory, Ruler, Hammer, Truck, ShieldCheck } from 'lucide-react';

const ExpertiseSection = () => {
    return (
        <section id="fabrication" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                    Notre expertise de fabricant
                </h2>
                <p className="text-center text-xl text-slate-300 mb-16 max-w-3xl mx-auto">
                    Atelier de fabrication à <strong className="text-white">Combs-la-Ville (77)</strong>. De
                    la prise de cotes à la pose finale, nous maîtrisons l'intégralité du process.
                </p>

                <div className="grid md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                            <Ruler size={36} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">1. Prise de cotes</h3>
                        <p className="text-sm text-slate-400">
                            Relevé précis sur site par nos techniciens qualifiés
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                            <Factory size={36} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">2. Fabrication</h3>
                        <p className="text-sm text-slate-400">
                            Production sur-mesure dans notre atelier Combs-la-Ville
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                            <Truck size={36} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">3. Livraison</h3>
                        <p className="text-sm text-slate-400">
                            Transport sécurisé directement sur votre chantier
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                            <Hammer size={36} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">4. Pose</h3>
                        <p className="text-sm text-slate-400">
                            Installation par nos équipes salariées qualifiées RGE
                        </p>
                    </div>
                </div>

                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    <div className="bg-white px-6 py-3 rounded-lg text-sm font-bold text-slate-900 flex items-center">
                        <ShieldCheck size={20} className="mr-2" />
                        RGE Qualibat
                    </div>
                    <div className="bg-white px-6 py-3 rounded-lg text-sm font-bold text-slate-900">
                        Garantie Décennale
                    </div>
                    <div className="bg-white px-6 py-3 rounded-lg text-sm font-bold text-slate-900">
                        Schüco Partner
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
