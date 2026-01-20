import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Trash2,
  Briefcase,
  ArrowRight,
  Columns,     // Icône Fenêtre (2 vantaux)
  DoorOpen,    // Porte
  Maximize,    // Baie
  Blinds,      // Volet
  Warehouse,   // Garage
  Sun          // Véranda
} from 'lucide-react';
import { PRODUCT_TYPES } from '../../data/products';
import ProductConfigurator from '../configurator/ProductConfigurator';
import AddressInput from '../../components/ui/AddressInput';
import CTATrustBadges from '../../components/ui/CTATrustBadges';

// ============================================================
// 🎯 CONFIGURATION GOOGLE APPS SCRIPT
// ============================================================
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxjpgDnnP9alIIDvTDulEeA5j1nc70Hv-p7AtlK52E4ANd4Sv9xn-sI5HpKP8KYklkh/exec';

// ============================================================
// 🎨 COMPOSANT PRINCIPAL
// ============================================================

const ContactForm = () => {
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

  // 📍 MAPPING DES ICÔNES
  const PRODUCT_ICONS = {
    fenetre: Columns,
    porte: DoorOpen,
    baie: Maximize,
    volet: Blinds,
    garage: Warehouse,
    veranda: Sun
  };

  const openConfigurator = (productType) => {
    // On injecte la bonne icône dans l'objet produit pour la modale
    const iconToUse = PRODUCT_ICONS[productType.id] || productType.icon;
    setCurrentProductType({ ...productType, icon: iconToUse });
    setIsConfiguratorOpen(true);
  };

  const addItem = (item) => {
    setProjectItems([...projectItems, { ...item, id: Date.now() }]);
  };

  const removeItem = (id) => {
    setProjectItems(projectItems.filter(item => item.id !== id));
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddressSelect = (data) => {
    setFormData(prev => ({
      ...prev,
      address: data.fullAddress,
      zip: `${data.zip} ${data.city}`
    }));
  };

  // ============================================================
  // 🚀 FORMATAGE EMAIL (Logic complète conservée)
  // ============================================================

  const formatProjectForEmail = () => {
    if (projectItems.length === 0) {
      return '<div style="color: #64748b; font-style: italic; padding: 20px; text-align: center;">Aucun produit configuré - Demande d\'information générale</div>';
    }

    return projectItems.map((item, index) => {
      let detailsHTML = '';

      if (item.type) detailsHTML += `<div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Type:</span> ${item.type}</div>`;
      if (item.subtype) detailsHTML += `<div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Projet:</span> ${item.subtype}</div>`;
      if (item.material) detailsHTML += `<div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Matériau:</span> ${item.material}</div>`;

      if (item.width && item.height) {
        let dimStr = `${item.width}x${item.height}mm`;
        if (item.fleche) dimStr += ` (Flèche: ${item.fleche}mm)`;
        detailsHTML += `<div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Dimensions:</span> ${dimStr}</div>`;
      }

      if (item.color) {
        let colorStr = item.color;
        if (item.customColor) colorStr += ` - ${item.customColor}`;
        detailsHTML += `<div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Coloris:</span> ${colorStr}</div>`;
      }

      if (item.stylePanel) detailsHTML += `<div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Style:</span> ${item.stylePanel}</div>`;
      if (item.options && item.options.length > 0) detailsHTML += `<div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Options:</span> ${item.options.join(', ')}</div>`;
      if (item.otherTypeDetails) detailsHTML += `<div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Précisions:</span> ${item.otherTypeDetails}</div>`;
      if (item.pose) detailsHTML += `<div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Prestation:</span> ${item.pose}</div>`;

      return `
        <div style="background-color: #ffffff; padding: 16px 20px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="background-color: #0f172a; color: white; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px;">${item.quantity}x</span>
              <span style="font-weight: 700; color: #0f172a; font-size: 15px;">${item.productLabel}</span>
            </div>
          </div>
          <div style="font-size: 13px; color: #64748b; padding-left: 8px; border-left: 2px solid #fed7aa;">
            ${detailsHTML}
          </div>
        </div>
      `;
    }).join('');
  };

  // ============================================================
  // 📧 ENVOI FORMULAIRE (Système d'envoi conservé)
  // ============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const projectHTML = formatProjectForEmail();
      const formDataToSend = new FormData(e.target);

      // Ajout des données spécifiques au projet pour le script Google
      formDataToSend.append('project_html', projectHTML);
      formDataToSend.append('project_count', projectItems.length.toString());

      const projectSummary = projectItems.length > 0
        ? projectItems.map(item => `${item.quantity}x ${item.productLabel}`).join(', ')
        : 'Aucun produit';
      formDataToSend.append('project_summary', projectSummary);

      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: formDataToSend, mode: 'no-cors' });

      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', zip: '', message: '', address: '' });
        setProjectItems([]);
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden">

          {/* Header Form */}
          <div className="bg-slate-900 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Demander un Devis Gratuit</h2>
            <p className="text-slate-400 text-sm sm:text-base">Configurez vos menuiseries et recevez votre chiffrage sous 24h.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-12 space-y-10">
            <input type="text" name="robot_check" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            {/* Étape 1 : Coordonnées */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-lg font-bold text-slate-900">Vos Coordonnées</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nom / Société</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all font-medium"
                    value={formData.name}
                    onChange={e => handleChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Téléphone</label>
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    name="phone"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all font-medium"
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all font-medium"
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Adresse chantier</label>
                  <AddressInput
                    value={formData.address}
                    onChange={(val) => handleChange('address', val)}
                    onSelect={handleAddressSelect}
                    placeholder="Rechercher votre adresse"
                    required={true}
                  />
                </div>

                <input type="hidden" name="zip" value={formData.zip} />
                <input type="hidden" name="address" value={formData.address} />
              </div>
            </div>

            {/* Étape 2 : Configuration */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-lg font-bold text-slate-900">Composez votre projet</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {PRODUCT_TYPES.map((prod) => {
                  const ProductIcon = PRODUCT_ICONS[prod.id] || prod.icon;
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => openConfigurator(prod)}
                      className="flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-orange-500 hover:bg-orange-50/20 transition-all group active:scale-95 shadow-sm"
                    >
                      <div className="bg-slate-50 p-3 rounded-full text-slate-400 group-hover:bg-white group-hover:text-orange-500 group-hover:shadow-md transition-all mb-2">
                        <ProductIcon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="font-bold text-sm text-slate-700 group-hover:text-slate-900">{prod.label}</span>
                      <span className="text-[10px] font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex items-center">
                        <Plus size={10} className="mr-1" /> Ajouter
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* PANIER / LISTE */}
              <AnimatePresence>
                {projectItems.length > 0 && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center mb-4">
                      <Briefcase size={18} className="text-slate-400 mr-2" />
                      <span className="font-bold text-sm text-slate-500 uppercase tracking-wide">Récapitulatif ({projectItems.length})</span>
                    </div>

                    <div className="space-y-3">
                      {projectItems.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col relative group hover:shadow-md transition-shadow">
                          <button type="button" onClick={() => removeItem(item.id)} className="absolute top-3 right-3 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 size={16} />
                          </button>

                          <div className="flex items-center mb-2">
                            <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded mr-3">{item.quantity}x</span>
                            <span className="font-bold text-slate-800">{item.productLabel}</span>
                          </div>

                          <div className="pl-10 text-xs text-slate-500 space-y-1 border-l-2 border-slate-100 ml-3">
                            {item.type && <div>Type : <span className="font-semibold text-slate-700">{item.type}</span></div>}
                            {item.subtype && <div>Projet : <span className="font-semibold text-slate-700">{item.subtype}</span></div>}
                            {item.material && <div>Matériau : <span className="font-semibold text-slate-700">{item.material}</span></div>}

                            {(item.width && item.height) && (
                              <div>Dimensions : <span className="font-semibold text-slate-700">{item.width} x {item.height} mm {item.fleche ? `(Flèche: ${item.fleche})` : ''}</span></div>
                            )}

                            {item.color && <div>Couleur : <span className="font-semibold text-slate-700">{item.color} {item.customColor ? `(${item.customColor})` : ''}</span></div>}

                            {item.stylePanel && <div>Style : <span className="font-semibold text-slate-700">{item.stylePanel}</span></div>}

                            {item.options && item.options.length > 0 && (
                              <div>Options : <span className="font-semibold text-slate-700">{item.options.join(', ')}</span></div>
                            )}

                            {item.otherTypeDetails && <div>Précisions : <span className="font-semibold text-slate-700">{item.otherTypeDetails}</span></div>}

                            {item.pose && <div><span className="font-semibold text-slate-700">{item.pose}</span></div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Étape 3 : Validation */}
            <div className="space-y-6 pt-6 border-t border-slate-100">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message (Facultatif)</label>
                <textarea
                  name="message"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none transition-all h-32 resize-none"
                  placeholder="Précisions sur l'accès chantier, l'étage..."
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-orange-600 hover:to-orange-500 text-white font-bold text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'loading' ? 'Envoi en cours...' : status === 'success' ? 'Envoyé avec succès !' : status === 'error' ? 'Erreur - Réessayez' : (
                  <>RECEVOIR MON DEVIS <ArrowRight className="ml-2" size={20} /></>
                )}
              </button>

              <div className="flex justify-center pt-2">
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