import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LegalModal from '../../components/modals/LegalModal';
import {
  Plus,
  Trash2,
  Briefcase,
  ArrowRight,
  Flame,
  Columns,
  DoorOpen,
  Maximize,
  Blinds,
  Warehouse,
  Sun,
  CheckCircle2,
  Sparkles,
  Mail,
  ClipboardCheck,
  Calculator,
  Zap,
  Phone
} from 'lucide-react';
import { PRODUCT_TYPES } from '../../data/products';
import ProductConfigurator from '../configurator/ProductConfigurator';
import AddressInput from '../../components/ui/AddressInput';
import CTATrustBadges from '../../components/ui/CTATrustBadges';
import { DiscountBadge } from '../../components/promo/PromoCombo';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxjpgDnnP9alIIDvTDulEeA5j1nc70Hv-p7AtlK52E4ANd4Sv9xn-sI5HpKP8KYklkh/exec';

const ContactForm = () => {
  // 🆕 MODE SWITCHER
  const [formMode, setFormMode] = useState('quick'); // 'quick' | 'config'

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

  const [status, setStatus] = useState('idle');
  const [projectItems, setProjectItems] = useState([]);

  // ✅ NOUVEAU : Calcul automatique des remises combo (1 pour 1)
  const comboDiscounts = useMemo(() => {
    const fenetres = projectItems.filter(item =>
      item.productTypeId === 'fenetre' &&
      item.material?.toLowerCase().includes('pvc')
    ).length;

    const volets = projectItems.filter(item =>
      item.productTypeId === 'volet'
    ).length;

    return Math.min(fenetres, volets);
  }, [projectItems]);

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

  const addItem = (item) => {
    const finalItem = { ...item, id: Date.now() };
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

  const formatProjectForEmail = () => {
    if (projectItems.length === 0) {
      return '<div style="color: #64748b; font-style: italic; padding: 20px; text-align: center;">Aucun produit configuré - Demande d\'information générale</div>';
    }

    return projectItems.map((item) => {
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
        <div style="background-color: #ffffff; padding: 16px 20px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 12px; position: relative;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 8px;">
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const projectHTML = formatProjectForEmail();
      const formDataToSend = new FormData(e.target);

      formDataToSend.append('Consentement_Marketing', formData.marketingConsent ? "✅ ACCEPTE" : "❌ REFUSE");
      formDataToSend.append('project_html', projectHTML);
      formDataToSend.append('project_count', projectItems.length.toString());

      const projectSummary = projectItems.length > 0
        ? projectItems.map(item => `${item.quantity}x ${item.productLabel}`).join(', ')
        : 'Aucun produit';
      formDataToSend.append('project_summary', projectSummary);

      // 🆕 Indication du mode
      formDataToSend.append('form_mode', formMode === 'quick' ? 'Demande rapide / rappel' : 'Configuration complète');

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
    setFormMode('quick');
  };

  return (
    <section id="contact" className="py-8 sm:py-16 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden relative min-h-[500px]">

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

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 w-full max-w-md mb-8 relative overflow-hidden">
                  <div className="absolute left-[29px] top-8 bottom-8 w-0.5 bg-slate-200"></div>

                  <div className="space-y-6 relative z-10">
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

              /* --- FORMULAIRE OPTIMISÉ --- */
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                {/* Header Form - Compact */}
                <div className="bg-slate-900 p-6 sm:p-8 text-center">
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Demander un Devis Gratuit</h2>
                  <p className="text-slate-400 text-sm">Chiffrage personnalisé sous 24h • Étude gratuite</p>
                </div>

                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
                  <input type="text" name="robot_check" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                  {/* 🆕 MODE SWITCHER */}
                  <div className="space-y-3">
                    <p className="text-center text-sm text-slate-600 leading-relaxed">
                      <strong>Deux options :</strong> laissez juste vos coordonnées ou utilisez notre configurateur en ligne pour un devis sous 24h.
                    </p>

                    <div className="flex border-2 border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                      <button
                        type="button"
                        onClick={() => setFormMode('quick')}
                        className={`flex-1 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${formMode === 'quick'
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-white text-slate-600 hover:bg-slate-50'
                          }`}
                      >
                        <Phone size={18} /> Juste mes coordonnées
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormMode('config')}
                        className={`flex-1 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${formMode === 'config'
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-white text-slate-600 hover:bg-slate-50'
                          }`}
                      >
                        <Zap size={18} /> Configurateur en ligne - Devis sous 24h
                      </button>
                    </div>
                  </div>

                  {/* Étape 1 : Coordonnées - COMPACT */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">1</div>
                      <h3 className="text-base font-bold text-slate-900">Vos Coordonnées</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nom / Société</label>
                        <input
                          required
                          type="text"
                          name="name"
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all font-medium text-sm"
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
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all font-medium text-sm"
                          value={formData.phone}
                          onChange={e => handleChange('phone', e.target.value)}
                        />
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all font-medium text-sm"
                          value={formData.email}
                          onChange={e => handleChange('email', e.target.value)}
                        />
                      </div>

                      <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Adresse</label>
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

                  {/* Étape 2 : Configuration - CONDITIONNEL */}
                  {formMode === 'config' && (
                    <div className="space-y-3 pb-3 border-b border-slate-100">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">2</div>
                        <h3 className="text-base font-bold text-slate-900">Composez votre projet</h3>
                      </div>

                      {/* ✅ NOUVEAU : Badge Confirmation Combo */}
                      {comboDiscounts > 0 && (
                        <DiscountBadge count={comboDiscounts} />
                      )}

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {PRODUCT_TYPES.map((prod) => {
                          const ProductIcon = PRODUCT_ICONS[prod.id] || prod.icon;
                          return (
                            <button
                              key={prod.id}
                              type="button"
                              onClick={() => openConfigurator(prod)}
                              className="flex flex-col items-center justify-center p-3 bg-white border-2 border-slate-100 rounded-xl hover:border-orange-500 hover:bg-orange-50/20 transition-all group active:scale-95 shadow-sm"
                            >
                              <div className="bg-slate-50 p-2 rounded-full text-slate-400 group-hover:bg-white group-hover:text-orange-500 group-hover:shadow-md transition-all mb-1">
                                <ProductIcon size={20} strokeWidth={1.5} />
                              </div>
                              <span className="font-bold text-xs text-slate-700 group-hover:text-slate-900">{prod.label}</span>
                              <span className="text-[9px] font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 flex items-center">
                                <Plus size={9} className="mr-0.5" /> Ajouter
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* PANIER - COMPACT */}
                      <AnimatePresence>
                        {projectItems.length > 0 && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                            <div className="flex items-center mb-3">
                              <Briefcase size={16} className="text-slate-400 mr-2" />
                              <span className="font-bold text-xs text-slate-500 uppercase tracking-wide">Récapitulatif ({projectItems.length})</span>
                            </div>

                            <div className="space-y-2">
                              {projectItems.map((item) => {
                                return (
                                  <div key={item.id} className="bg-white p-3 rounded-lg border shadow-sm flex flex-col relative group hover:shadow-md transition-all border-slate-200">

                                    <button type="button" onClick={() => removeItem(item.id)} className="absolute top-2 right-2 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                      <Trash2 size={14} />
                                    </button>

                                    <div className="flex items-center mb-1.5">
                                      <span className="bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mr-2">{item.quantity}x</span>
                                      <span className="font-bold text-slate-800 text-sm">{item.productLabel}</span>
                                    </div>

                                    <div className="pl-7 text-[11px] text-slate-500 space-y-0.5 border-l-2 border-slate-100 ml-2">
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
                  )}

                  {/* Étape 3 : Validation - COMPACT */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message (Facultatif)</label>
                      <textarea
                        name="message"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none transition-all h-24 resize-none text-sm"
                        placeholder="Précisions complémentaires (facultatif)..."
                        value={formData.message}
                        onChange={e => handleChange('message', e.target.value)}
                      ></textarea>
                    </div>

                    {/* Opt-in marketing compact */}
                    <div className={`border rounded-lg p-2.5 transition-all ${consentError ? 'bg-red-50 border-red-300' : 'bg-slate-50 border-slate-200'}`}>
                      <label className="flex items-start gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.marketingConsent}
                          onChange={(e) => {
                            setFormData({ ...formData, marketingConsent: e.target.checked });
                            if (e.target.checked) setConsentError(false);
                          }}
                          className={`mt-0.5 w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer ${consentError ? 'border-red-500' : ''}`}
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
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-orange-600 hover:to-orange-500 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {status === 'loading' ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>RECEVOIR MON DEVIS <ArrowRight className="ml-2" size={20} /></>
                      )}
                    </button>

                    {/* Liens légaux */}
                    <div className="text-center text-xs text-slate-500">
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

                    <div className="flex justify-center pt-1">
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