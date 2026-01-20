import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LegalModal from '../../components/modals/LegalModal';
import { useOffer } from '../context/OfferContext';
import {
  Plus,
  Trash2,
  Briefcase,
  ArrowRight,
  Flame,
  Columns,     // Fenêtre
  DoorOpen,    // Porte
  Maximize,    // Baie
  Blinds,      // Volet
  Warehouse,   // Garage
  Sun,         // Véranda
  CheckCircle2,
  Sparkles,
  Mail,           // Icône Envoi
  ClipboardCheck, // Icône Dossier
  Calculator      // Icône Chiffrage
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
  const { activePromo } = useOffer();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    message: '',
    address: '',
    marketingConsent: false
  });

  const [showMentionsModal, setShowMentionsModal] = useState(false);
  const [showPolitiqueModal, setShowPolitiqueModal] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [projectItems, setProjectItems] = useState([]);

  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [currentProductType, setCurrentProductType] = useState(null);

  const PRODUCT_ICONS = {
    fenetre: Columns,
    porte: DoorOpen,
    baie: Maximize,
    volet: Blinds,
    garage: Warehouse,
    veranda: Sun
  };

  const openConfigurator = (productType) => {
    const iconToUse = PRODUCT_ICONS[productType.id] || productType.icon;
    setCurrentProductType({ ...productType, icon: iconToUse });
    setIsConfiguratorOpen(true);
  };

  // 📍 AJOUT : Logique d'application de la promo au moment de l'ajout
  const addItem = (item) => {
    let finalItem = { ...item, id: Date.now() };

    // Si la promo PACK DUO est active (cochée dans PVCOffer)
    // On vérifie si le produit ajouté est éligible pour recevoir le badge
    if (activePromo) {
      const type = (item.productTypeId || '').toLowerCase(); // fenetre, volet...
      const material = (item.material || '').toLowerCase();
      const color = (item.color || '').toLowerCase();

      // Condition 1 : Fenêtre PVC Blanc
      const isFenetrePVCBlanc = type === 'fenetre' && material.includes('pvc') && color.includes('blanc');

      // Condition 2 : Volet Blanc (Peu importe le matériau souvent, ou PVC/Alu standard)
      const isVoletBlanc = type === 'volet' && color.includes('blanc');

      if (isFenetrePVCBlanc || isVoletBlanc) {
        finalItem.promo = 'PACK_DUO_20';
      }
    }

    setProjectItems([...projectItems, finalItem]);
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
  // 🚀 FORMATAGE EMAIL
  // ============================================================

  const formatProjectForEmail = () => {
    if (projectItems.length === 0) {
      return '<div style="color: #64748b; font-style: italic; padding: 20px; text-align: center;">Aucun produit configuré - Demande d\'information générale</div>';
    }

    return projectItems.map((item) => {
      let detailsHTML = '';

      // On vérifie la propriété qu'on a injectée dans addItem
      const isPromo = item.promo === 'PACK_DUO_20';

      let headerBadge = isPromo
        ? `<span style="background-color: #ef4444; color: white; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; margin-left: 8px; text-transform: uppercase;">🔥 -20% PACK DUO</span>`
        : '';

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
        <div style="background-color: #ffffff; padding: 16px 20px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 12px; position: relative;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span style="background-color: #0f172a; color: white; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px;">${item.quantity}x</span>
              <span style="font-weight: 700; color: #0f172a; font-size: 15px;">${item.productLabel}</span>
              ${headerBadge}
            </div>
          </div>
          <div style="font-size: 13px; color: #64748b; padding-left: 8px; border-left: 2px solid ${isPromo ? '#ef4444' : '#fed7aa'};">
            ${detailsHTML}
          </div>
        </div>
      `;
    }).join('');
  };

  // ============================================================
  // 📧 ENVOI FORMULAIRE
  // ============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // On ne bloque plus si marketing pas coché (optionnel)
    /* if (!formData.marketingConsent) {
        setConsentError(true);
        return;
    } */

    setStatus('loading');

    try {
      const projectHTML = formatProjectForEmail();
      const formDataToSend = new FormData(e.target);

      // Envoi forcé de la valeur "OUI" ou "NON" pour le consentement
      formDataToSend.append('Consentement_Marketing', formData.marketingConsent ? "✅ ACCEPTE" : "❌ REFUSE");

      formDataToSend.append('project_html', projectHTML);
      formDataToSend.append('project_count', projectItems.length.toString());

      const projectSummary = projectItems.length > 0
        ? projectItems.map(item => `${item.quantity}x ${item.productLabel}`).join(', ')
        : 'Aucun produit';
      formDataToSend.append('project_summary', projectSummary);

      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: formDataToSend, mode: 'no-cors' });

      setStatus('success');
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
      console.error('Erreur:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', email: '', zip: '', message: '', address: '', marketingConsent: false });
    setProjectItems([]);
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-12 sm:py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden relative min-h-[600px]">

          <AnimatePresence mode="wait">

            {/* --- ÉCRAN DE SUCCÈS --- */}
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 sm:p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm"
                >
                  <CheckCircle2 size={48} className="text-green-600" strokeWidth={3} />
                </motion.div>

                <h2 className="text-3xl font-black text-slate-900 mb-2">Demande Reçue !</h2>
                <p className="text-slate-500 max-w-lg text-lg mb-8 leading-relaxed">
                  Merci <strong>{formData.name}</strong>. Un technicien a bien reçu votre demande.
                </p>

                {/* Timeline des prochaines étapes */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 w-full max-w-md mb-8 relative overflow-hidden">
                  {/* Ligne verticale */}
                  <div className="absolute left-[29px] top-8 bottom-8 w-0.5 bg-slate-200"></div>

                  <div className="space-y-6 relative z-10">
                    {/* Étape 1 */}
                    <div className="flex items-start text-left">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 mr-4 border-2 border-white shadow-sm">
                        <ClipboardCheck size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">Dossier enregistré</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Vos dimensions ont été enregistrées.
                        </p>
                      </div>
                    </div>

                    {/* Étape 2 */}
                    <div className="flex items-start text-left">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 mr-4 border-2 border-white shadow-sm">
                        <Calculator size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">Étude & Chiffrage</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Analyse technique en cours.
                        </p>
                      </div>
                    </div>

                    {/* Étape 3 */}
                    <div className="flex items-start text-left">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0 mr-4 border-2 border-white shadow-sm">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">Envoi du devis</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Sous 24 à 48h ouvrées.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg active:scale-95"
                >
                  Nouvelle demande
                </button>
              </motion.div>
            ) : (

              /* --- FORMULAIRE STANDARD --- */
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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

                    {/* Banner Promo Active */}
                    {activePromo && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl flex items-center gap-3 shadow-lg"
                      >
                        <Flame size={28} fill="currentColor" className="shrink-0" />
                        <div className="flex-1">
                          <div className="font-bold text-lg">🎁 {activePromo.promoLabel}</div>
                          <div className="text-sm text-orange-100 mt-1">
                            Ajoutez vos Fenêtres PVC Blanc + Volets Roulants pour en profiter
                          </div>
                        </div>
                      </motion.div>
                    )}

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
                            {projectItems.map((item) => {
                              // 📍 VÉRIFICATION STRICTE DE LA PROPRIÉTÉ ITEM
                              const isPromo = item.promo === 'PACK_DUO_20';

                              return (
                                <div key={item.id} className={`bg-white p-4 rounded-xl border shadow-sm flex flex-col relative group hover:shadow-md transition-all ${isPromo ? 'border-orange-300 ring-1 ring-orange-100' : 'border-slate-200'}`}>

                                  {/* BADGE PROMO SUR L'ITEM */}
                                  {isPromo && (
                                    <div className="absolute -top-3 -right-2 bg-gradient-to-r from-red-500 to-pink-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md flex items-center animate-pulse">
                                      <Sparkles size={10} className="mr-1" fill="currentColor" /> -20% PACK DUO
                                    </div>
                                  )}

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
                              );
                            })}
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

                    {/* Opt-in marketing discret */}
                    <div className={`border rounded-lg p-3 transition-all ${consentError ? 'bg-red-50 border-red-300' : 'bg-slate-50 border-slate-200'
                      }`}>
                      <label className="flex items-start gap-2.5 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.marketingConsent}
                          onChange={(e) => {
                            setFormData({ ...formData, marketingConsent: e.target.checked });
                            if (e.target.checked) setConsentError(false);
                          }}
                          className={`mt-0.5 w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer ${consentError ? 'border-red-500' : ''
                            }`}
                        />
                        <div className="flex-1 text-xs text-slate-600 leading-relaxed">
                          J'accepte de recevoir des offres commerciales de SARANGE (optionnel).{' '}
                          <button
                            type="button"
                            onClick={() => setShowPolitiqueModal(true)}
                            className="text-orange-600 hover:text-orange-700 underline font-semibold"
                          >
                            Politique de confidentialité
                          </button>
                        </div>
                      </label>
                      {consentError && (
                        <p className="text-red-600 text-xs mt-2 ml-6.5 font-semibold">
                          ⚠️ Veuillez cocher cette case pour continuer
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-orange-600 hover:to-orange-500 text-white font-bold text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {status === 'loading' ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>RECEVOIR MON DEVIS <ArrowRight className="ml-2" size={20} /></>
                      )}
                    </button>

                    {/* Liens légaux */}
                    <div className="text-center text-xs text-slate-500 mt-3">
                      <button
                        type="button"
                        onClick={() => setShowMentionsModal(true)}
                        className="hover:text-orange-600 underline transition-colors"
                      >
                        Mentions légales
                      </button>
                      {' • '}
                      <button
                        type="button"
                        onClick={() => setShowPolitiqueModal(true)}
                        className="hover:text-orange-600 underline transition-colors"
                      >
                        Politique de confidentialité
                      </button>
                    </div>

                    <div className="flex justify-center pt-2">
                      <CTATrustBadges />
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ProductConfigurator
        isOpen={isConfiguratorOpen}
        onClose={() => setIsConfiguratorOpen(false)}
        productType={currentProductType}
        onAdd={addItem}
      />
      {/* Modales légales */}
      <LegalModal
        isOpen={showMentionsModal}
        onClose={() => setShowMentionsModal(false)}
        type="mentions"
      />
      <LegalModal
        isOpen={showPolitiqueModal}
        onClose={() => setShowPolitiqueModal(false)}
        type="politique"
      />
    </section>
  );
};

export default ContactForm;