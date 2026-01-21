import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, FileText } from "lucide-react";

const LegalModal = ({ isOpen, onClose, type }) => {

    // 1. Informations de l'entreprise (Ta version complète)
    const company = {
        denomination: "SARANGE",
        legalForm: "SAS (Société par actions simplifiée)",
        capital: "30 000,00 €",
        headOffice: "28 rue Jean Rostand, 77380 Combs-la-Ville, France",
        siren: "820 001 014",
        siret: "820 001 014 00027",
        rcs: "RCS Melun 820 001 014",
        vat: "FR22820001014",
        publicationDirector: "Driss Denis (Président)",
        email: "contact@sarange.fr",
        phone: "09 86 71 34 44",
        website: "sarange.fr",
    };

    const host = {
        name: "Vercel Inc.",
        address: "440 N Barranca Ave, Covina, CA 91723, USA",
        website: "https://vercel.com",
    };

    // 2. Contenu dynamique
    const content =
        type === "mentions"
            ? {
                title: "Mentions Légales",
                icon: <FileText className="w-6 h-6" />,
                sections: [
                    {
                        title: "1. Éditeur du site",
                        content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div><span class="font-semibold text-slate-900">Dénomination :</span> ${company.denomination}</div>
                    <div><span class="font-semibold text-slate-900">Forme :</span> ${company.legalForm}</div>
                    <div><span class="font-semibold text-slate-900">Capital :</span> ${company.capital}</div>
                    <div><span class="font-semibold text-slate-900">RCS :</span> ${company.rcs}</div>
                    <div><span class="font-semibold text-slate-900">SIREN :</span> ${company.siren}</div>
                    <div><span class="font-semibold text-slate-900">SIRET :</span> ${company.siret}</div>
                    <div><span class="font-semibold text-slate-900">TVA :</span> ${company.vat}</div>
                    <div class="md:col-span-2"><span class="font-semibold text-slate-900">Siège social :</span> ${company.headOffice}</div>
                    <div class="md:col-span-2 mt-2 pt-2 border-t border-slate-100">
                        <span class="font-semibold text-slate-900">Directeur de publication :</span> ${company.publicationDirector}<br/>
                        <span class="font-semibold text-slate-900">Contact :</span> <a href="mailto:${company.email}" class="text-orange-600 hover:text-orange-700 transition-colors">${company.email}</a> | ${company.phone}
                    </div>
                </div>
              `,
                    },
                    {
                        title: "2. Hébergement",
                        content: `
                Le site <strong>${company.website}</strong> est hébergé par <strong>${host.name}</strong>.<br/>
                <span class="text-slate-500 text-sm">${host.address}</span><br/>
                Site web : <a href="${host.website}" target="_blank" rel="noopener" class="text-orange-600 hover:underline">vercel.com</a>
              `,
                    },
                    {
                        title: "3. Propriété intellectuelle",
                        content: `
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les représentations iconographiques et photographiques.
              `,
                    },
                    // --- AJOUT DISCRET POUR SEO (Section 4) ---
                    // J'ai utilisé des classes Tailwind (text-xs, text-slate-400) pour que ce soit tout petit et gris clair.
                    {
                        title: "4. Transparence tarifaire",
                        content: `
                        <div class="text-xs text-slate-400 text-justify leading-snug p-2 bg-slate-50 rounded border border-slate-100">
                            <p class="mb-1 font-semibold text-slate-500">Information réglementaire (Code de la consommation) :</p>
                            <p>
                                Prix de référence unitaires TTC (hors pose/options) déclarés : 
                                Fenêtres PVC dès 173,60 € ; Portes d'entrée dès 1407,60 € ; Volets roulants dès 250,00 €.
                            </p>
                            <p class="italic mt-1">
                                Ces tarifs "à partir de" sont indicatifs pour le modèle standard le plus économique. 
                                Le prix final dépend des dimensions et contraintes techniques. Devis obligatoire.
                            </p>
                        </div>
                        `,
                    },
                ],
            }
            : {
                // Ta version complète de la Politique de Confidentialité
                title: "Politique de Confidentialité",
                icon: <ShieldCheck className="w-6 h-6" />,
                sections: [
                    {
                        title: "1. Responsable du traitement",
                        content: `
                <strong>${company.denomination}</strong><br/>
                ${company.headOffice}<br/>
                Délégué à la protection des données : <a href="mailto:${company.email}" class="text-orange-600 font-medium">${company.email}</a>
              `,
                    },
                    {
                        title: "2. Données collectées",
                        content: `
                Dans le cadre de l'utilisation du formulaire de devis, nous collectons les données suivantes :
                <ul class="list-disc list-inside space-y-1 ml-1 mt-2">
                    <li><strong>Identité :</strong> Nom, Prénom ou Raison sociale.</li>
                    <li><strong>Contact :</strong> Adresse email, Numéro de téléphone.</li>
                    <li><strong>Localisation :</strong> <span class="bg-orange-50 text-orange-700 px-1 rounded font-semibold">Adresse postale du chantier</span> (nécessaire pour l'étude technique et logistique).</li>
                    <li><strong>Projet :</strong> Détails des menuiseries configurées (dimensions, types) et contenu de votre message.</li>
                </ul>
              `,
                    },
                    {
                        title: "3. Finalité & Base légale",
                        content: `
                <strong>Finalités :</strong>
                <ul class="list-disc list-inside ml-1 mb-2">
                    <li>Gestion et suivi des demandes de devis et relation client.</li>
                    <li>Analyse technique du projet (faisabilité selon l'adresse).</li>
                    <li>Envoi d'offres commerciales (uniquement si vous avez coché la case dédiée).</li>
                </ul>
                <strong>Base légale :</strong> Votre consentement (art. 6.1.a RGPD) et l'exécution de mesures précontractuelles (demande de devis).
              `,
                    },
                    {
                        title: "4. Durée de conservation",
                        content: `
                Les données relatives aux prospects sont conservées pendant une durée de <strong>3 ans</strong> à compter du dernier contact entrant.
                En cas de conclusion d'un contrat (commande), les données sont conservées selon les obligations légales (10 ans pour les pièces comptables).
              `,
                    },
                    {
                        title: "5. Destinataires",
                        content: `
                Les données collectées sont destinées exclusivement à <strong>${company.denomination}</strong>.
                Elles peuvent être hébergées par notre prestataire technique dans le cadre strict du fonctionnement et de la maintenance du site.
              `,
                    },
                    {
                        title: "6. Transfert hors Union européenne",
                        content: `
                Les données peuvent être hébergées sur des serveurs situés hors de l’Union européenne (notamment via notre hébergeur Vercel Inc. aux USA).
                Dans ce cas, des garanties appropriées sont mises en œuvre conformément au RGPD (Clauses Contractuelles Types ou cadre de protection équivalent).
              `,
                    },
                    {
                        title: "7. Vos droits",
                        content: `
                Vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité de vos données, ainsi que d'un droit à la limitation et d'opposition au traitement.<br/>
                Pour exercer ces droits, contactez-nous : <a href="mailto:${company.email}" class="text-orange-600 font-medium">${company.email}</a>.
              `,
                    },
                    {
                        title: "8. Réclamation",
                        content: `
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la :<br/><br/>
                <strong>Commission Nationale de l’Informatique et des Libertés (CNIL)</strong><br/>
                3 Place de Fontenoy – TSA 80715<br/>
                75334 Paris Cedex 07<br/>
                <a href="https://www.cnil.fr" target="_blank" rel="noopener" class="text-orange-600 underline">https://www.cnil.fr</a>
              `,
                    },
                ],
            };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
                role="dialog"
                aria-modal="true"
            >
                {/* Backdrop avec flou */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-all"
                />

                {/* Container Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                    className="relative flex flex-col w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* --- HEADER --- */}
                    <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white z-10">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                {content.icon}
                            </div>
                            <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                                {content.title}
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all duration-200"
                            aria-label="Fermer"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* --- CONTENT --- */}
                    <div className="flex-1 overflow-y-auto p-6 scroll-smooth custom-scrollbar">
                        <div className="space-y-8">
                            {content.sections.map((section, index) => (
                                <section key={index} className="relative">
                                    {/* Ligne verticale entre sections */}
                                    {index !== content.sections.length - 1 && (
                                        <div className="absolute left-0 top-8 bottom-0 w-px bg-slate-100 hidden md:block -ml-4" />
                                    )}

                                    <h3 className="text-sm uppercase tracking-wider font-bold text-orange-600 mb-3 flex items-center gap-2">
                                        {section.title}
                                    </h3>
                                    <div
                                        className="text-slate-600 leading-relaxed text-[15px] bg-slate-50/50 p-4 rounded-xl border border-slate-100/50"
                                        dangerouslySetInnerHTML={{ __html: section.content }}
                                    />
                                </section>
                            ))}
                        </div>
                    </div>

                    {/* --- FOOTER --- */}
                    <div className="flex-shrink-0 px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end items-center gap-4">
                        <div className="hidden sm:block text-xs text-slate-400">
                            SARANGE - Menuiserie & Rénovation
                        </div>
                        <button
                            onClick={onClose}
                            className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-95 transition-all duration-200"
                        >
                            Fermer
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default LegalModal;