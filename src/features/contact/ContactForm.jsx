import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Briefcase } from 'lucide-react';
// Assurez-vous que les imports sont corrects selon votre structure
import { PRODUCT_TYPES } from '../../data/products';
import ProductConfigurator from '../configurator/ProductConfigurator';
import AddressInput from '../../components/ui/AddressInput';
import CTATrustBadges from '../../components/ui/CTATrustBadges';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // CORRECTION 1 : Ajout de 'address' dans l'état initial pour éviter les bugs d'input non contrôlé
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    message: '',
    address: ''
  });

  const [status, setStatus] = useState('idle');
  const [projectItems, setProjectItems] = useState([]);

  // États Modale Config
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [currentProductType, setCurrentProductType] = useState(null);

  const openConfigurator = (productType) => {
    setCurrentProductType(productType);
    setIsConfiguratorOpen(true);
  };

  const addItem = (item) => {
    setProjectItems([...projectItems, { ...item, id: Date.now() }]);
  };

  const removeItem = (id) => {
    setProjectItems(projectItems.filter(item => item.id !== id));
  };

  // Gestionnaires de changement d'état sécurisés (CORRECTION 2)
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddressSelect = (data) => {
    // On met à jour l'adresse ET le code postal/ville en même temps
    setFormData(prev => ({
      ...prev,
      address: data.fullAddress,
      zip: `${data.zip} ${data.city}`
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Fonction pour formater TOUTES les données d'un produit
      const formatProductDetails = (item) => {
        let details = [];

        // Ligne principale
        details.push(`▶ ${item.quantity}x ${item.productLabel}`);

        // Type d'ouverture / Modèle
        if (item.type) {
          details.push(`  Type: ${item.type}`);
        }

        // Sous-type (pour projets spéciaux: Velux, Bois, Cintrée...)
        if (item.subtype) {
          details.push(`  Projet: ${item.subtype}`);
        }

        // Matériau
        if (item.material) {
          details.push(`  Matériau: ${item.material}`);
        }

        // Dimensions
        if (item.width && item.height) {
          let dimStr = `  Dimensions: ${item.width}x${item.height}mm`;
          // Flèche pour fenêtres cintrées
          if (item.fleche) {
            dimStr += ` (Flèche: ${item.fleche}mm)`;
          }
          details.push(dimStr);
        }

        // Couleur
        if (item.color) {
          let colorStr = `  Coloris: ${item.color}`;
          if (item.customColor) {
            colorStr += ` - ${item.customColor}`;
          }
          details.push(colorStr);
        }

        // Options (tableau)
        if (item.options && item.options.length > 0) {
          details.push(`  Options: ${item.options.join(', ')}`);
        }

        // Pose
        if (item.pose) {
          details.push(`  Prestation: ${item.pose}`);
        }

        // Style panneau (pour portes d'entrée)
        if (item.stylePanel) {
          details.push(`  Style: ${item.stylePanel}`);
        }

        // Détails supplémentaires (baie "Autre")
        if (item.otherTypeDetails) {
          details.push(`  Précisions: ${item.otherTypeDetails}`);
        }

        return details.join('\n');
      };

      let projectSummary = projectItems.length > 0
        ? projectItems.map(item => formatProductDetails(item)).join('\n\n')
        : 'Aucun produit configuré';

      const devisData = {
        client: {
          nom: formData.name,
          email: formData.email,
          telephone: formData.phone,
          adresse: formData.address, // Utilisation de la donnée sécurisée
          codePostal: formData.zip
        },
        projet: {
          type: projectItems.length > 0 ? projectItems.map(i => i.productLabel).join(', ') : 'Non spécifié',
          message: formData.message,
          details: projectSummary,
          produits: projectItems
        },
        metadata: {
          date: serverTimestamp(),
          statut: 'Nouveau',
          source: 'Site Web'
        }
      };

      await addDoc(collection(db, 'devis_leads'), devisData);

      const emailParams = {
        to_name: formData.name,
        to_email: formData.email,
        phone_number: formData.phone,
        project_summary: projectSummary,
        message: formData.message || 'Aucun message complémentaire'
      };

      await emailjs.send('service_i0jj8of', 'template_vucj6ts', emailParams, 'MPR6F6LEh4Bausmby');
      await emailjs.send('service_i0jj8of', 'template_rqgztkt', emailParams, 'MPR6F6LEh4Bausmby');

      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', zip: '', message: '', address: '' });
        setProjectItems([]);
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100">
          <div className="bg-slate-900 p-6 sm:p-8 text-center rounded-t-3xl">
            <h2 className="h3-mobile font-bold text-white mb-2">Configurez votre projet</h2>
            <p className="text-slate-400 text-sm sm:text-base">Obtenez un chiffrage précis en indiquant vos dimensions approximatives.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10 md:p-14 space-y-8 sm:space-y-10">

            {/* Step 1: Coordonnées */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm font-bold flex-shrink-0">1</span>
                Vos Coordonnées
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input
                  required
                  type="text"
                  placeholder="Nom / Société"
                  className="tap-target w-full p-3 sm:p-4 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none text-sm font-light placeholder:text-slate-400 transition-all"
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                />
                <input
                  required
                  type="tel"
                  placeholder="Téléphone (Obligatoire)"
                  className="tap-target w-full p-3 sm:p-4 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none text-sm font-light placeholder:text-slate-400 transition-all"
                  value={formData.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="tap-target w-full p-3 sm:p-4 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none text-sm font-light placeholder:text-slate-400 transition-all"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                />

                {/* CORRECTION 3 : AddressInput correctement branché */}
                <AddressInput
                  value={formData.address}
                  onChange={(val) => handleChange('address', val)}
                  onSelect={handleAddressSelect}
                  placeholder="Rechercher votre adresse"
                  required={true} // Important pour la validation HTML5
                />
              </div>
            </div>

            {/* Step 2: Configurator Buttons */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm font-bold flex-shrink-0">2</span>
                Composez votre projet
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
                {PRODUCT_TYPES.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => openConfigurator(prod)}
                    className="tap-target flex flex-col items-center justify-center p-4 sm:p-6 bg-white border border-slate-100 shadow-sm rounded-2xl hover:shadow-md hover:border-orange-500 transition-all group"
                  >
                    <div className="bg-slate-100 p-2.5 sm:p-3 rounded-full text-slate-500 group-hover:bg-orange-500/10 group-hover:text-orange-600 transition-colors mb-2">
                      <prod.icon size={20} />
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-orange-700 text-sm md:text-base transition-colors">{prod.label}</span>
                    <span className="text-xs text-slate-400 mt-1 flex items-center group-hover:text-orange-500 transition-colors"><Plus size={12} className="mr-1" /> Ajouter</span>
                  </button>
                ))}
              </div>

              {/* Panier (Cart) */}
              <AnimatePresence>
                {projectItems.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-orange-50/50 border border-orange-100 rounded-2xl p-4 sm:p-6">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center text-sm sm:text-base"><Briefcase size={18} className="mr-2 text-orange-600" /> Récapitulatif</h4>
                    <div className="space-y-3">
                      {projectItems.map((item) => (
                        <div key={item.id} className="bg-white p-3 sm:p-4 rounded-xl border border-slate-100 shadow-sm">
                          {/* En-tête avec titre et bouton supprimer */}
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">{item.quantity}x</span>
                              <span className="font-bold text-slate-800 text-sm sm:text-base">{item.productLabel}</span>
                            </div>
                            <button type="button" onClick={() => removeItem(item.id)} className="tap-target text-red-400 hover:text-red-600 p-1 flex-shrink-0"><Trash2 size={16} /></button>
                          </div>

                          {/* Détails complets du produit */}
                          <div className="text-xs sm:text-sm text-slate-600 space-y-1 pl-2 border-l-2 border-orange-200">
                            {item.type && <div>✦ <span className="font-semibold">Type:</span> {item.type}</div>}
                            {item.subtype && <div>✦ <span className="font-semibold">Projet:</span> {item.subtype}</div>}
                            {item.material && <div>✦ <span className="font-semibold">Matériau:</span> {item.material}</div>}
                            {(item.width && item.height) && (
                              <div>✦ <span className="font-semibold">Dimensions:</span> {item.width}x{item.height}mm{item.fleche ? ` (Flèche: ${item.fleche}mm)` : ''}</div>
                            )}
                            {item.color && <div>✦ <span className="font-semibold">Coloris:</span
                            > {item.color}{item.customColor ? ` - ${item.customColor}` : ''}</div>}
                            {item.options && item.options.length > 0 && (
                              <div>✦ <span className="font-semibold">Options:</span> {item.options.join(', ')}</div>
                            )}
                            {item.pose && <div>✦ <span className="font-semibold">Prestation:</span> {item.pose}</div>}
                            {item.stylePanel && <div>✦ <span className="font-semibold">Style:</span> {item.stylePanel}</div>}
                            {item.otherTypeDetails && <div>✦ <span className="font-semibold">Précisions:</span> {item.otherTypeDetails}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Step 3: Message & Validation */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm font-bold flex-shrink-0">3</span>
                Détails supplémentaires
              </h3>
              <textarea
                className="w-full p-3 sm:p-4 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none h-28 sm:h-32 text-slate-700 text-sm font-light placeholder:text-slate-400 transition-all"
                placeholder="Précisions sur l'accès chantier, l'étage..."
                value={formData.message}
                onChange={e => handleChange('message', e.target.value)}
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="tap-target w-full py-4 sm:py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed text-white font-bold text-lg sm:text-xl rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all flex flex-col items-center justify-center transform hover:scale-[1.01]"
              >
                <span>
                  {status === 'loading' && 'Envoi en cours...'}
                  {status === 'success' && '✓ Demande envoyée !'}
                  {status === 'error' && '✗ Erreur - Réessayez'}
                  {status === 'idle' && 'RECEVOIR MON DEVIS GRATUIT'}
                </span>
              </button>
              <div className="mt-4 flex flex-col md:flex-row items-center justify-center text-xs sm:text-sm text-slate-500 space-y-2 md:space-y-0 md:space-x-6">
                <CTATrustBadges />
              </div>
            </div>
          </form>
        </div>
      </div>

      <ProductConfigurator
        isOpen={isConfiguratorOpen}
        onClose={() => setIsConfiguratorOpen(false)}
        productType={currentProductType}
        onAdd={addItem}
      />
    </section>
  );
};

export default ContactForm;