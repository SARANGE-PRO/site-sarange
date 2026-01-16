import React from 'react';
import { Briefcase, Truck, HardHat } from 'lucide-react';
import CheckList from '@components/ui/CheckList';

const B2BSection = () => {
    return (
        <section id="b2b" className="py-24 bg-secondary-900 text-white relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            ></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                        <Briefcase size={16} className="mr-2" /> Cœur de Métier
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Partenariats B2B</h2>
                    <p className="text-secondary-300 text-xl">
                        Architectes, Constructeurs, Menuisiers Poseurs.
                        <br />
                        Nous adaptons notre offre à votre business model.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-secondary-800 p-8 rounded-2xl border border-secondary-700 hover:border-primary-500 transition-colors group">
                        <div className="bg-secondary-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                            <Truck size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Offre "Fourniture Seule"</h3>
                        <p className="text-primary-400 font-bold text-sm uppercase tracking-wider mb-6">
                            Prix Direct Usine
                        </p>
                        <p className="text-secondary-300 mb-6 min-h-[60px]">
                            Idéal pour les artisans poseurs. Commandez vos menuiseries sur-mesure au meilleur
                            tarif.
                        </p>
                        <CheckList
                            dark
                            items={[
                                'Tarifs Négociants / Revendeurs',
                                'Livraison directe sur chantier',
                                'Respect strict des délais',
                            ]}
                        />
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView()}
                            className="mt-8 w-full py-3 bg-white text-secondary-900 font-bold rounded-lg hover:bg-secondary-200 transition-colors"
                        >
                            Ouvrir un compte Pro
                        </button>
                    </div>
                    <div className="bg-secondary-800 p-8 rounded-2xl border border-secondary-700 hover:border-primary-500 transition-colors group">
                        <div className="bg-secondary-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                            <HardHat size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Offre "Pack Fourniture + Pose"</h3>
                        <p className="text-primary-400 font-bold text-sm uppercase tracking-wider mb-6">
                            Gestion De A à Z
                        </p>
                        <p className="text-secondary-300 mb-6 min-h-[60px]">
                            Pour les architectes et promoteurs. Nous prenons en charge le lot menuiserie complet,
                            métré inclus.
                        </p>
                        <CheckList
                            dark
                            items={[
                                'Interlocuteur Unique',
                                'Poseurs salariés expérimentés',
                                'Garanties Décennales & Biennales',
                            ]}
                        />
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView()}
                            className="mt-8 w-full py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
                        >
                            Demander un chiffrage Projet
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default B2BSection;
