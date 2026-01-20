import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, type }) => {
    if (!isOpen) return null;

    const content = type === 'mentions' ? {
        title: 'Mentions Légales',
        sections: [
            {
                title: '1. Éditeur du site',
                content: `
          <strong>Raison sociale:</strong> SARANGE France<br/>
          <strong>Forme juridique:</strong> [SARL / SAS]<br/>
          <strong>Capital social:</strong> [montant] euros<br/>
          <strong>Siège social:</strong> [Adresse complète]<br/>
          <strong>SIRET:</strong> [XXX XXX XXX XXXXX]<br/>
          <strong>RCS:</strong> [Ville + Numéro]<br/>
          <strong>TVA intracommunautaire:</strong> FR[XX XXX XXX XXX]<br/>
          <strong>Email:</strong> contact@sarange.fr<br/>
          <strong>Téléphone:</strong> 09 86 71 34 44<br/>
          <strong>Directeur de publication:</strong> [Nom Prénom]
        `
            },
            {
                title: '2. Hébergement',
                content: `
          Le site <strong>sarange.fr</strong> est hébergé par :<br/>
          <strong>Vercel Inc.</strong><br/>
          440 N Barranca Ave, Covina, CA 91723, USA<br/>
          Site web : <a href="https://vercel.com" target="_blank" rel="noopener" class="text-orange-600 underline">vercel.com</a>
        `
            },
            {
                title: '3. Propriété intellectuelle',
                content: `
          L'ensemble du contenu présent sur ce site (textes, images, vidéos, logos, graphismes) 
          est la propriété exclusive de <strong>SARANGE France</strong> et est protégé par le droit d'auteur.
          Toute reproduction est strictement interdite sans autorisation préalable.
        `
            },
            {
                title: '4. Données personnelles',
                content: `
          Pour plus d'informations sur le traitement de vos données personnelles, consultez notre Politique de Confidentialité.
          Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.
        `
            }
        ]
    } : {
        title: 'Politique de Confidentialité',
        sections: [
            {
                title: '1. Données collectées',
                content: `
          <strong>Identité :</strong> Nom, prénom<br/>
          <strong>Contact :</strong> Email, téléphone, adresse, code postal<br/>
          <strong>Projet :</strong> Détails de votre demande de devis<br/>
          <strong>Consentement marketing :</strong> Acceptation de recevoir nos offres (optionnel)
        `
            },
            {
                title: '2. Finalités du traitement',
                content: `
          <strong>Traitement des demandes :</strong> Vos données sont utilisées pour traiter votre demande de devis et vous recontacter.<br/><br/>
          <strong>Communications marketing :</strong> Si vous avez coché la case d'opt-in, nous utilisons votre email pour vous envoyer nos offres promotionnelles.
        `
            },
            {
                title: '3. Durée de conservation',
                content: `
          <strong>Prospects :</strong> 3 ans si aucune relation client n'est établie<br/>
          <strong>Clients :</strong> 10 ans (obligation légale comptable)
        `
            },
            {
                title: '4. Vos droits RGPD',
                content: `
          ✓ Droit d'accès à vos données<br/>
          ✓ Droit de rectification<br/>
          ✓ Droit à l'effacement<br/>
          ✓ Droit de portabilité<br/><br/>
          <strong>Pour exercer vos droits :</strong> <a href="mailto:contact@sarange.fr" class="text-orange-600 font-bold underline">contact@sarange.fr</a>
        `
            },
            {
                title: '5. Réclamation',
                content: `
          Vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong><br/>
          3 Place de Fontenoy, 75007 Paris<br/>
          Site : <a href="https://www.cnil.fr" target="_blank" rel="noopener" class="text-orange-600 underline">www.cnil.fr</a>
        `
            }
        ]
    };

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">{content.title}</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)] custom-scrollbar">
                        {content.sections.map((section, index) => (
                            <div key={index} className={`mb-6 ${index !== 0 ? 'pt-6 border-t border-slate-200' : ''}`}>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h3>
                                <div
                                    className="text-slate-700 leading-relaxed text-sm"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
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
