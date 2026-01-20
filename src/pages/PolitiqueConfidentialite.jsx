import React from 'react';
import { ArrowLeft, Shield, Mail, Lock, Database, UserCheck, Eye } from 'lucide-react';

const PolitiqueConfidentialite = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-6">
                <div className="max-w-5xl mx-auto px-4">
                    <a
                        href="/"
                        className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-4"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Retour à l'accueil
                    </a>
                    <div className="flex items-center gap-3 mb-2">
                        <Shield className="text-orange-400" size={32} />
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                            Politique de Confidentialité
                        </h1>
                    </div>
                    <p className="text-slate-300 text-sm">Conforme au RGPD - Dernière mise à jour : Janvier 2026</p>
                </div>
            </div>

            {/* Contenu */}
            <div className="max-w-5xl mx-auto px-4 py-12">

                {/* Introduction */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                    <p className="text-slate-700 leading-relaxed">
                        <strong className="text-blue-900">SARANGE France</strong> s'engage à protéger votre vie privée.
                        Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles
                        conformément au Règlement Général sur la Protection des Données (RGPD).
                    </p>
                </div>

                <div className="space-y-6">

                    {/* Section 1 */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-5 flex items-center gap-3">
                            <Database className="text-white shrink-0" size={28} />
                            <h2 className="text-2xl font-bold text-white">1. Données collectées</h2>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="text-slate-700 mb-4">Lorsque vous utilisez notre formulaire de contact, nous collectons :</p>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2 mt-1">✦</span>
                                    <span><strong>Identité :</strong> Nom, prénom</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2 mt-1">✦</span>
                                    <span><strong>Contact :</strong> Email, téléphone, adresse, code postal</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2 mt-1">✦</span>
                                    <span><strong>Projet :</strong> Détails de votre demande de devis (type de menuiserie, dimensions, options)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2 mt-1">✦</span>
                                    <span><strong>Consentement marketing :</strong> Acceptation de recevoir nos offres commerciales (optionnel)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-slate-900 p-5 flex items-center gap-3">
                            <Lock className="text-orange-400 shrink-0" size={28} />
                            <h2 className="text-2xl font-bold text-white">2. Finalités du traitement</h2>
                        </div>
                        <div className="p-6 md:p-8 space-y-4">
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">📋 Traitement des demandes</h3>
                                <p className="text-slate-700 text-sm">
                                    Vos données sont utilisées pour traiter votre demande de devis, vous recontacter et établir une relation commerciale.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">✉️ Communications marketing (si consentement)</h3>
                                <p className="text-slate-700 text-sm">
                                    Si vous avez coché la case d'opt-in, nous utilisons votre email pour vous envoyer nos offres promotionnelles.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-5 flex items-center gap-3">
                            <UserCheck className="text-white shrink-0" size={28} />
                            <h2 className="text-2xl font-bold text-white">3. Base légale</h2>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="text-slate-700 leading-relaxed">
                                Le traitement de vos données repose sur votre <strong className="text-slate-900">consentement explicite</strong>,
                                donné lors de la soumission du formulaire. Vous pouvez retirer ce consentement à tout moment.
                            </p>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-slate-900 p-5 flex items-center gap-3">
                            <Mail className="text-orange-400 shrink-0" size={28} />
                            <h2 className="text-2xl font-bold text-white">4. Destinataires des données</h2>
                        </div>
                        <div className="p-6 md:p-8 space-y-3">
                            <p className="text-slate-700">Vos données sont transmises à :</p>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li className="bg-slate-50 p-3 rounded-lg">
                                    <strong className="text-slate-900">L'équipe SARANGE :</strong> pour traiter votre demande
                                </li>
                                <li className="bg-slate-50 p-3 rounded-lg">
                                    <strong className="text-slate-900">Google Apps Script :</strong> pour le stockage sécurisé (hébergement Google Cloud)
                                </li>
                            </ul>
                            <p className="text-slate-600 text-xs mt-4">
                                Nous ne vendons ni ne louons vos données à des tiers.
                            </p>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-5 flex items-center gap-3">
                            <Eye className="text-white shrink-0" size={28} />
                            <h2 className="text-2xl font-bold text-white">5. Durée de conservation</h2>
                        </div>
                        <div className="p-6 md:p-8">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold shrink-0">Prospects</span>
                                    <span className="text-sm">Vos données sont conservées <strong>3 ans</strong> si aucune relation client n'est établie</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold shrink-0">Clients</span>
                                    <span className="text-sm">Les données clients sont conservées <strong>10 ans</strong> (obligation légale comptable)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 6 - VOS DROITS */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-300 p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">🛡️ Vos droits RGPD</h2>
                        <p className="text-blue-800 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <strong className="text-blue-900">✓ Droit d'accès</strong>
                                <p className="text-slate-600 text-xs mt-1">Accéder à vos données</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <strong className="text-blue-900">✓ Droit de rectification</strong>
                                <p className="text-slate-600 text-xs mt-1">Corriger vos données</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <strong className="text-blue-900">✓ Droit à l'effacement</strong>
                                <p className="text-slate-600 text-xs mt-1">Supprimer vos données</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <strong className="text-blue-900">✓ Droit de portabilité</strong>
                                <p className="text-slate-600 text-xs mt-1">Récupérer vos données</p>
                            </div>
                        </div>
                        <div className="mt-6 bg-white p-4 rounded-lg">
                            <p className="text-slate-700 text-sm">
                                <strong className="text-slate-900">Pour exercer vos droits :</strong><br />
                                Contactez-nous par email à{' '}
                                <a href="mailto:contact@sarange.fr" className="text-orange-600 font-bold underline">contact@sarange.fr</a>
                                {' '}ou par courrier au siège social.
                            </p>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Réclamation</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :
                        </p>
                        <div className="mt-4 bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                            <p><strong>CNIL</strong></p>
                            <p>3 Place de Fontenoy, 75007 Paris</p>
                            <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">www.cnil.fr</a></p>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <div className="inline-block bg-orange-50 border border-orange-200 rounded-xl p-4">
                        <p className="text-sm text-orange-900">
                            <strong>Des questions sur vos données ?</strong>
                        </p>
                        <p className="text-xs text-orange-700 mt-1">
                            Contactez-nous : <a href="mailto:contact@sarange.fr" className="underline font-semibold">contact@sarange.fr</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PolitiqueConfidentialite;
