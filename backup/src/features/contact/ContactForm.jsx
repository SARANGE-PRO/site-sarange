import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Briefcase, ShieldCheck, Euro } from 'lucide-react';
import { PRODUCT_TYPES } from '@data/products';
import ProductConfigurator from '@features/configurator/ProductConfigurator';
import AddressInput from '@components/ui/AddressInput';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setProjectItems(projectItems.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let finalMessage = `Projet Client :\n`;
    if (projectItems.length > 0) {
      finalMessage += projectItems
        .map(
          (item) =>
            `- ${item.quantity}x ${item.productLabel} (${item.type})\n  Coloris: ${item.color}\n  Dims: ${item.width}x${item.height}mm`
        )
        .join('\n');
    }
    finalMessage += `\n\nMessage complémentaire : ${formData.message}`;

    console.log('Envoi du devis :', { ...formData, projectDetails: finalMessage });

    setIsSubmitted(true);
    setTimeout(() => {
      alert('Merci ! Votre demande a été reçue. Nous allons vous rappeler.');
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', zip: '', message: '' });
      setProjectItems([]);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100">
          <div className="bg-slate-900 p-6 sm:p-8 text-center rounded-t-2xl sm:rounded-t-3xl">
            <h2 className="h3-mobile font-bold text-white mb-2">Configurez votre projet</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Obtenez un chiffrage précis en indiquant vos dimensions approximatives.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-5 sm:p-8 md:p-12 space-y-8 sm:space-y-10">
            {/* Step 1: Coordonnées */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm font-bold flex-shrink-0">
                  1
                </span>
                Vos Coordonnées
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input
                  required
                  type="text"
                  placeholder="Nom / Société"
                  className="tap-target w-full p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm sm:text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  required
                  type="tel"
                  placeholder="Téléphone (Obligatoire)"
                  className="tap-target w-full p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm sm:text-base"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="tap-target w-full p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm sm:text-base"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <AddressInput
                  value={formData.address}
                  onChange={(val) => setFormData({ ...formData, address: val })}
                  onSelect={(data) =>
                    setFormData({
                      ...formData,
                      address: data.fullAddress,
                      zip: `${data.zip} ${data.city}`,
                    })
                  }
                  placeholder="Rechercher votre adresse"
                />
              </div>
            </div>

            {/* Step 2: Configurator Buttons */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm font-bold flex-shrink-0">
                  2
                </span>
                Composez votre projet
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
                {PRODUCT_TYPES.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => openConfigurator(prod)}
                    className="tap-target flex flex-col items-center justify-center p-4 sm:p-6 border-2 border-dashed border-slate-200 rounded-2xl hover:border-orange-500 hover:bg-orange-50 transition-all group"
                  >
                    <div className="bg-slate-100 p-2.5 sm:p-3 rounded-full text-slate-500 group-hover:bg-orange-500 group-hover:text-white transition-colors mb-2">
                      <prod.icon size={20} />
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-orange-700 text-sm md:text-base">
                      {prod.label}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 flex items-center">
                      <Plus size={12} className="mr-1" /> Ajouter
                    </span>
                  </button>
                ))}
              </div>

              {/* Panier (Cart) */}
              <AnimatePresence>
                {projectItems.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6"
                  >
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center text-sm sm:text-base">
                      <Briefcase size={18} className="mr-2 text-blue-600" /> Récapitulatif
                    </h4>
                    <div className="space-y-3">
                      {projectItems.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white p-3 sm:p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-start gap-2"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">
                                {item.quantity}x
                              </span>
                              <span className="font-bold text-slate-800 text-sm sm:text-base">
                                {item.productLabel}
                              </span>
                            </div>
                            <div className="text-xs sm:text-sm text-slate-600 mt-1">
                              {item.type} | {item.width}x{item.height}mm | {item.color}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="tap-target text-red-400 hover:text-red-600 p-2 flex-shrink-0"
                          >
                            <Trash2 size={18} />
                          </button>
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
                <span className="bg-orange-100 text-orange-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm font-bold flex-shrink-0">
                  3
                </span>
                Détails supplémentaires
              </h3>
              <textarea
                className="w-full p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none h-28 sm:h-32 text-slate-700 text-sm sm:text-base"
                placeholder="Précisions sur l'accès chantier, l'étage..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitted}
                className="tap-target w-full py-4 sm:py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg sm:text-xl rounded-xl shadow-xl hover:shadow-orange-500/40 transition-all flex flex-col items-center justify-center"
              >
                <span>{isSubmitted ? 'Envoi en cours...' : 'RECEVOIR MON DEVIS GRATUIT'}</span>
              </button>
              <div className="mt-4 flex flex-col md:flex-row items-center justify-center text-xs sm:text-sm text-slate-500 space-y-2 md:space-y-0 md:space-x-6">
                <span className="flex items-center">
                  <ShieldCheck size={16} className="mr-1.5 text-green-600" /> 100% Gratuit & Sans
                  engagement
                </span>
                <span className="flex items-center">
                  <Euro size={16} className="mr-1.5 text-orange-500" /> Tarifs compétitifs garantis
                </span>
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
