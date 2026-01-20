import React from 'react';
import { ArrowLeft } from 'lucide-react';

const MentionsLegales = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header avec retour */}
            <div className="bg-slate-900 text-white py-6">
                <div className="max-w-5xl mx-auto px-4">
                    <a
                        href="/"
                        className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-4"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Retour à l'accueil
                    </a>
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                        Mentions Légales
                    </h1>
                </div>
            </div>

            {/* Contenu */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

                    {/* Section 1 */}
                    <section className="p-6 md:p-8 border-b border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-black">1</span>
                            Éditeur du site
                        </h2>
                        <div className="pl-11 space-y-2 text-slate-700">
                            <p><strong className="text-slate-900">Raison sociale :</strong> SARANGE France</p>
                            <p><strong className="text-slate-900">Forme juridique :</strong> [SARL / SAS / EIRL]</p>
                            <p><strong className="text-slate-900">Capital social :</strong> [montant] euros</p>
                            <p><strong className="text-slate-900">Siège social :</strong> [Adresse complète]</p>
                            <p><strong className="text-slate-900">SIRET :</strong> [XXX XXX XXX XXXXX]</p>
                            <p><strong className="text-slate-900">RCS :</strong> [Ville + Numéro]</p>
                            <p><strong className="text-slate-900">TVA intracommunautaire :</strong> FR[XX XXX XXX XXX]</p>
                            <p><strong className="text-slate-900">Email :</strong> <a href="mailto:contact@sarange.fr" className="text-orange-600 underline">contact@sarange.fr</a></p>
                            <p><strong className="text-slate-900">Téléphone :</strong> <a href="tel:0986713444" className="text-orange-600 underline">09 86 71 34 44</a></p>
                            <p><strong className="text-slate-900">Directeur de publication :</strong> [Nom Prénom]</p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="p-6 md:p-8 border-b border-slate-100 bg-slate-50">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-black">2</span>
                            Hébergement
                        </h2>
                        <div className="pl-11 text-slate-700 space-y-2">
                            <p>Le site <strong className="text-slate-900">sarange.fr</strong> est hébergé par :</p>
                            <p><strong className="text-slate-900">Vercel Inc.</strong></p>
                            <p>440 N Barranca Ave, Covina, CA 91723, USA</p>
                            <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">vercel.com</a></p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="p-6 md:p-8 border-b border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-black">3</span>
                            Propriété intellectuelle
                        </h2>
                        <div className="pl-11 text-slate-700 leading-relaxed">
                            <p>
                                L'ensemble du contenu présent sur ce site (textes, images, vidéos, logos, graphismes)
                                est la propriété exclusive de <strong className="text-slate-900">SARANGE France</strong> et est protégé par le droit d'auteur français et international.
                            </p>
                            <p className="mt-3">
                                Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle,
                                est strictement interdite sans l'autorisation écrite préalable de SARANGE France.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="p-6 md:p-8 bg-slate-50">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-black">4</span>
                            Données personnelles
                        </h2>
                        <div className="pl-11 text-slate-700 leading-relaxed">
                            <p>
                                Pour plus d'informations sur la collecte et le traitement de vos données personnelles,
                                veuillez consulter notre{' '}
                                <a href="/politique-confidentialite" className="text-orange-600 font-semibold underline">
                                    Politique de Confidentialité
                                </a>.
                            </p>
                            <p className="mt-3 text-sm text-slate-600">
                                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès,
                                de rectification et de suppression de vos données personnelles.
                            </p>
                        </div>
                    </section>

                </div>

                {/* Footer info */}
                <div className="mt-8 text-center text-sm text-slate-500">
                    <p>Dernière mise à jour : Janvier 2026</p>
                </div>
            </div>
        </div>
    );
};

export default MentionsLegales;
