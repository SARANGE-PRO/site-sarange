import { Briefcase, Truck, HardHat } from 'lucide-react';
import CheckList from '../ui/CheckList';

const B2BSection = () => {
    return (
        <section id="b2b" className="py-12 md:py-24 bg-secondary-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
                    <div className="inline-flex items-center bg-primary-600 text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 tracking-wide uppercase">
                        <Briefcase size={14} className="mr-2 md:w-4 md:h-4" /> Cœur de Métier
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">
                        Partenariats B2B
                    </h2>
                    <p className="text-secondary-300 text-base md:text-xl px-2">
                        Architectes, Constructeurs, Artisans.<br className="hidden md:block" />
                        Simplifiez vos chantiers avec un partenaire réactif et des tarifs adaptés.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">

                    {/* Card 1 */}
                    <div className="bg-secondary-800 p-6 md:p-8 rounded-2xl border border-secondary-700 hover:border-primary-500 transition-colors group">
                        <div className="bg-secondary-700 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary-600 transition-colors">
                            <Truck className="text-white w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Offre "Fourniture Seule"</h3>
                        <p className="text-primary-400 font-bold text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6">
                            Prix Direct Usine
                        </p>
                        <p className="text-secondary-300 mb-6 text-sm md:text-base md:min-h-[60px]">
                            Boostez vos marges. Accédez à notre grille tarifaire réservée aux professionnels du bâtiment.
                        </p>
                        <CheckList dark items={["Tarifs Négociants / Revendeurs", "Livraison directe sur chantier", "Devis prioritaire sous 24h"]} />
                        <button onClick={() => document.getElementById('contact').scrollIntoView()} className="mt-8 w-full py-3 md:py-3.5 bg-white text-secondary-900 font-bold rounded-lg hover:bg-secondary-200 transition-colors text-sm md:text-base">
                            Obtenir mes tarifs Pro
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-secondary-800 p-6 md:p-8 rounded-2xl border border-secondary-700 hover:border-primary-500 transition-colors group">
                        <div className="bg-secondary-700 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary-600 transition-colors">
                            <HardHat className="text-white w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Offre "Pack Fourniture + Pose"</h3>
                        <p className="text-primary-400 font-bold text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6">
                            Gestion De A à Z
                        </p>
                        <p className="text-secondary-300 mb-6 text-sm md:text-base md:min-h-[60px]">
                            Déléguez 100% du lot menuiserie. Nous gérons le métré, la pose et le SAV pour vous.
                        </p>
                        <CheckList dark items={["Interlocuteur Unique", "Poseurs certifiés RGE", "Garanties Décennales & Biennales"]} />
                        <button onClick={() => document.getElementById('contact').scrollIntoView()} className="mt-8 w-full py-3 md:py-3.5 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors text-sm md:text-base">
                            Confier un projet
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default B2BSection;