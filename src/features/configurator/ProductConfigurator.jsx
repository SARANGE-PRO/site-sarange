import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Palette, Info, Smartphone, CheckCircle } from 'lucide-react';
import { WindowIcons } from '../../components/icons/WindowIcons';
import ConfigSection from './ConfigSection';
import MeasurementGuideModal from './MeasurementGuideModal';

const ProductConfigurator = ({ isOpen, onClose, productType, onAdd }) => {
    // --- 1. ÉTAT INITIAL COMPLET ---
    const initialData = {
        quantity: 1,
        type: '',
        subtype: '', // Pour Veranda+Autre (Velux, Bois, Cintrée...)
        width: '',
        height: '',
        fleche: '', // Pour cintrée
        material: 'PVC', // Valeur par défaut, changera selon le produit
        color: 'Blanc',
        customColor: '',
        options: [],
        pose: 'Fourniture + Pose SARANGE',
        stylePanel: '', // Pour porte entrée
        otherTypeDetails: '' // Pour baie 'Autre'
    };

    const [data, setData] = useState(initialData);
    const [showGuide, setShowGuide] = useState(false);
    const [guideType, setGuideType] = useState('standard');

    // --- 2. RESET INTELLIGENT À L'OUVERTURE ---
    useEffect(() => {
        if (isOpen && productType) {
            let startMaterial = 'PVC';
            // Si c'est Baie, Garage ou Véranda, on part sur de l'Alu par défaut
            if (['baie', 'garage', 'veranda'].includes(productType.id)) startMaterial = 'Aluminium';

            setData({ ...initialData, material: startMaterial });
        }
    }, [isOpen, productType]);

    if (!isOpen || !productType) return null;

    // --- 3. LOGIQUE COULEURS (PVC vs ALU) ---
    const renderColorSection = () => {
        // Ne pas afficher si c'est un Velux ou une fenêtre bois (géré ailleurs)
        if (data.subtype === 'Fenêtre de toit (VELUX)' || data.subtype === 'Fenêtre Bois') return null;

        const colorsPVC = [
            { label: 'Blanc (Standard)', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
            { label: 'Gris 7016 Ext / Blanc Int', value: 'Bicolore Gris 7016', hex: 'linear-gradient(135deg, #374151 50%, #ffffff 50%)', border: 'border-transparent' },
            { label: 'Chêne Doré Ext / Blanc Int', value: 'Bicolore Chêne Doré', hex: 'linear-gradient(135deg, #B45F06 50%, #ffffff 50%)', border: 'border-transparent' },
        ];

        const colorsAlu = [
            { label: 'Blanc', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
            { label: 'Gris Anthracite (7016)', value: 'Gris 7016', hex: '#374151', border: 'border-transparent' },
            { label: 'Noir Sablé (2100)', value: 'Noir 2100', hex: '#1a1a1a', border: 'border-transparent' },
        ];

        const colorsMixte = [
            { label: 'Blanc (Standard)', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
            { label: 'Gris 7016 Ext / Blanc Int', value: 'Bicolore Gris 7016', hex: 'linear-gradient(135deg, #374151 50%, #ffffff 50%)', border: 'border-transparent' },
            { label: 'Chêne Doré Ext / Blanc Int', value: 'Bicolore Bicolore Chêne Doré', hex: 'linear-gradient(135deg, #B45F06 50%, #ffffff 50%)', border: 'border-transparent' },
        ];

        const colorsVolet = [
            { label: 'Blanc', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
            { label: 'Gris Anthracite (7016)', value: 'Gris 7016', hex: '#374151', border: 'border-transparent' },
            { label: 'Chêne Doré', value: 'Chêne Doré', hex: '#B45F06', border: 'border-transparent' },
        ];


        let activeColors = colorsPVC;
        if (productType.id === 'volet') {
            activeColors = colorsVolet;
        } else if (data.material === 'Mixte PVC/Alu') {
            activeColors = colorsMixte;
        } else if (data.material === 'Aluminium' || productType.id === 'baie' || productType.id === 'garage') {
            activeColors = colorsAlu;
        }

        return (
            <ConfigSection title="🎨 Couleur & Finition">
                <div className="flex flex-wrap gap-3">
                    {activeColors.map((c) => (
                        <button
                            key={c.label}
                            onClick={() => setData({ ...data, color: c.value })}
                            className={`flex items-center px-3 py-2 border rounded-lg transition-all ${data.color === c.value ? 'ring-2 ring-orange-500 bg-orange-50 border-orange-500' : 'bg-white hover:bg-slate-50 ' + c.border}`}
                        >
                            <div className="w-6 h-6 rounded-full mr-2 shadow-sm border border-black/10" style={{ background: c.hex }}></div>
                            <span className="text-xs font-bold text-slate-700">{c.label}</span>
                        </button>
                    ))}
                    <button
                        onClick={() => setData({ ...data, color: 'Autre' })}
                        className={`flex items-center px-3 py-2 border border-dashed rounded-lg transition-all ${data.color === 'Autre' ? 'ring-2 ring-orange-500 bg-orange-50 border-orange-500' : 'bg-white border-slate-300'}`}
                    >
                        <Palette size={16} className="mr-2 text-slate-500" />
                        <span className="text-xs font-bold text-slate-700">Autre / RAL</span>
                    </button>
                </div>
                {data.color === 'Autre' && (
                    <div className="mt-3">
                        <input
                            type="text"
                            placeholder="Précisez (Ex: Rouge 3004, Bicolore spécifique...)"
                            className="w-full p-3 border border-orange-200 rounded-lg bg-orange-50 text-sm focus:outline-orange-500"
                            onChange={(e) => setData({ ...data, customColor: e.target.value })}
                        />
                    </div>
                )}
            </ConfigSection>
        );
    };

    // --- 4. LOGIQUE SPÉCIFIQUE PAR PRODUIT ---
    const renderSpecificFields = () => {

        // --- CAS 1 : FENÊTRE ---
        if (productType.id === 'fenetre') {
            const types = [
                { label: 'Fenêtre 1 vantail', icon: <WindowIcons.OneLeaf selected={data.type === 'Fenêtre 1 vantail'} /> },
                { label: 'Fenêtre 2 vantaux', icon: <WindowIcons.TwoLeaves selected={data.type === 'Fenêtre 2 vantaux'} /> },
                { label: 'Porte-Fenêtre', icon: <WindowIcons.FrenchDoor selected={data.type === 'Porte-Fenêtre'} /> },
                { label: 'Châssis Fixe', icon: <WindowIcons.Fixed selected={data.type === 'Châssis Fixe'} /> },
                { label: 'Fenêtre coulissante (PVC)', icon: <WindowIcons.Sliding selected={data.type === 'Fenêtre coulissante (PVC)'} /> },
                { label: '3 vantaux ou composé', icon: <WindowIcons.Composite selected={data.type === '3 vantaux ou composé'} /> }
            ];

            return (
                <>
                    <ConfigSection title="2️⃣ Type d'ouverture">
                        <div className="grid grid-cols-2 gap-3">
                            {types.map(item => (
                                <button key={item.label} onClick={() => setData({ ...data, type: item.label })}
                                    className={`flex flex-col items-center justify-center p-3 border rounded-xl transition-all ${data.type === item.label ? 'bg-orange-50 border-orange-500 ring-1 ring-orange-500' : 'bg-white hover:bg-slate-50'}`}>
                                    <div className="mb-2">{item.icon}</div>
                                    <span className={`text-xs font-bold text-center ${data.type === item.label ? 'text-orange-700' : 'text-slate-600'}`}>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </ConfigSection>

                    {/* Options : Oscillo / Grille */}
                    <div className="mb-6 space-y-3">
                        {(data.type === 'Fenêtre 1 vantail' || data.type === 'Fenêtre 2 vantaux') && (
                            <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 p-3 rounded-lg border border-slate-200">
                                <input type="checkbox" className="w-5 h-5 rounded text-orange-500 accent-orange-500"
                                    onChange={e => {
                                        const newOpts = e.target.checked ? [...data.options, 'Oscillo-battant'] : data.options.filter(o => o !== 'Oscillo-battant');
                                        setData({ ...data, options: newOpts });
                                    }}
                                />
                                <span className="text-sm font-bold text-slate-700">Option Oscillo-battant</span>
                            </label>
                        )}
                        {data.type && data.type !== 'Châssis Fixe' && (
                            <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 p-3 rounded-lg border border-slate-200">
                                <input type="checkbox" className="w-5 h-5 rounded text-blue-500 accent-blue-500"
                                    onChange={e => {
                                        const newOpts = e.target.checked ? [...data.options, 'Grille de ventilation'] : data.options.filter(o => o !== 'Grille de ventilation');
                                        setData({ ...data, options: newOpts });
                                    }}
                                />
                                <span className="text-sm font-bold text-slate-700">Option Grille de ventilation (VMC)</span>
                            </label>
                        )}
                    </div>
                </>
            );
        }

        // --- CAS 2 : PORTE D'ENTRÉE ---
        if (productType.id === 'porte') {
            return (
                <ConfigSection title="2️⃣ Modèle & Matériau">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <button onClick={() => setData({ ...data, material: "Mixte PVC/Alu", stylePanel: "" })}
                            className={`p-3 rounded-xl border text-left transition-all ${data.material === "Mixte PVC/Alu" ? 'bg-orange-50 border-orange-500 ring-1 ring-orange-500' : 'bg-white border-slate-200'}`}>
                            <span className="block text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">⭐ Top Vente</span>
                            <span className="font-bold text-slate-900 block">Mixte PVC/Alu</span>
                            <span className="text-xs text-slate-500">Chaleur PVC + Design Alu</span>
                        </button>
                        <button onClick={() => setData({ ...data, material: "Aluminium", stylePanel: "" })}
                            className={`p-3 rounded-xl border text-left transition-all ${data.material === "Aluminium" ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' : 'bg-white border-slate-200'}`}>
                            <span className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Premium</span>
                            <span className="font-bold text-slate-900 block">Tout Aluminium</span>
                            <span className="text-xs text-slate-500">Solidité Max</span>
                        </button>
                        <button onClick={() => setData({ ...data, material: "Porte de service PVC", stylePanel: "Panneau sandwich 28mm" })}
                            className={`p-3 rounded-xl border text-left col-span-2 sm:col-span-2 transition-all ${data.material === "Porte de service PVC" ? 'bg-slate-100 border-slate-400' : 'bg-white border-slate-200'}`}>
                            <span className="font-bold text-slate-900 block">Porte de service PVC</span>
                        </button>
                    </div>

                    {data.material !== "Porte de service PVC" ? (
                        <>
                            <label className="flex items-center space-x-2 cursor-pointer mb-4">
                                <input type="checkbox" className="w-5 h-5 rounded text-orange-500"
                                    onChange={e => {
                                        const newOpts = e.target.checked ? [...data.options, 'Tierce'] : data.options.filter(o => o !== 'Tierce');
                                        setData({ ...data, options: newOpts });
                                    }}
                                />
                                <span className="text-sm font-medium text-slate-700">Ajouter une Tierce (Côté vitré ou plein)</span>
                            </label>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Style de panneau</label>
                                <textarea
                                    className="w-full p-3 border rounded-lg text-sm h-20"
                                    placeholder="Décrivez votre envie : Panneau plein moderne, vitré classique, avec inserts inox..."
                                    value={data.stylePanel}
                                    onChange={e => setData({ ...data, stylePanel: e.target.value })}
                                ></textarea>
                            </div>
                        </>
                    ) : (
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm text-slate-600 flex items-start">
                            <Info size={16} className="mr-2 mt-1 shrink-0 text-blue-500" />
                            Inclus automatiquement : Panneau sandwich isolant 28mm (Même couleur que la porte).
                        </div>
                    )}
                </ConfigSection>
            );
        }

        // --- CAS 3 : BAIE VITRÉE ---
        if (productType.id === 'baie') {
            return (
                <ConfigSection title="2️⃣ Type d'ouverture (Aluminium)">
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        {['Coulissant 2 Vantaux', 'Coulissant 3 Vantaux', 'Galandage', 'Autre'].map(t => (
                            <button key={t} onClick={() => setData({ ...data, type: t })}
                                className={`p-3 text-sm font-bold border rounded-lg transition-all ${data.type === t ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 hover:border-orange-300'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                    {data.type === 'Autre' && (
                        <textarea
                            className="w-full p-3 border rounded-lg text-sm h-20"
                            placeholder="Précisez : 4 vantaux, angle, châssis spécial..."
                            value={data.otherTypeDetails}
                            onChange={e => setData({ ...data, otherTypeDetails: e.target.value })}
                        ></textarea>
                    )}
                </ConfigSection>
            );
        }

        // --- CAS 4 : VOLET ROULANT ---
        if (productType.id === 'volet') {
            return (
                <ConfigSection title="2️⃣ Configuration Volet">
                    <div className="grid grid-cols-1 gap-2 mb-4">
                        {['Rénovation (Coffre extérieur)', 'Traditionnel (Dans coffre existant)', 'Monobloc (Avec fenêtre)'].map(t => (
                            <button key={t} onClick={() => setData({ ...data, type: t })}
                                className={`p-2 text-sm border rounded-lg ${data.type === t ? 'bg-slate-800 text-white' : 'bg-white text-slate-600'}`}>
                                {t}
                            </button>
                        ))}
                    </div>

                    <label className="block text-sm font-bold text-slate-700 mb-2">Motorisation</label>
                    <select className="w-full p-3 border rounded-lg mb-4 bg-white" onChange={e => {
                        const newOpts = data.options.filter(o => !o.startsWith('Moteur')); // Nettoyer ancien choix
                        if (e.target.value) setData({ ...data, options: [...newOpts, e.target.value] });
                    }}>
                        <option value="">Choisir...</option>
                        <option value="Moteur Solaire">Solaire (Sans fil, autonome)</option>
                        <option value="Moteur Radio">Radio (Télécommande)</option>
                        <option value="Moteur Filaire">Filaire (Interrupteur)</option>
                        <option value="Manuel">Manuel (Sangle/Manivelle)</option>
                    </select>

                    {(data.options.includes('Moteur Radio') || data.options.includes('Moteur Solaire')) && (
                        <label className="flex items-center space-x-2 cursor-pointer bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <input type="checkbox" className="w-5 h-5 rounded text-blue-600"
                                onChange={e => {
                                    const newOpts = e.target.checked ? [...data.options, 'Domotique Connectée'] : data.options.filter(o => o !== 'Domotique Connectée');
                                    setData({ ...data, options: newOpts });
                                }}
                            />
                            <Smartphone size={18} className="text-blue-600" />
                            <span className="text-sm font-bold text-blue-800">Option Domotique (App dédiée)</span>
                        </label>
                    )}
                </ConfigSection>
            );
        }

        // --- CAS 5 : GARAGE ---
        if (productType.id === 'garage') {
            return (
                <ConfigSection title="2️⃣ Type de Porte">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {['Sectionnelle Plafond', 'Enroulable', 'Basculante', 'Battante'].map(t => (
                            <button key={t} onClick={() => setData({ ...data, type: t })}
                                className={`p-2 text-sm border rounded-lg transition-all ${data.type === t ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 hover:border-orange-300'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                    <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 p-3 rounded-lg border">
                        <input type="checkbox" className="w-5 h-5 rounded text-orange-500"
                            onChange={e => {
                                const newOpts = e.target.checked ? [...data.options, 'Portillon Intégré'] : data.options.filter(o => o !== 'Portillon Intégré');
                                setData({ ...data, options: newOpts });
                            }}
                        />
                        <span className="text-sm font-medium text-slate-700">Option Portillon intégré (Porte piéton)</span>
                    </label>
                </ConfigSection>
            );
        }

        // --- CAS 6 : VÉRANDA & SPÉCIFIQUE ---
        if (productType.id === 'veranda') {
            return (
                <div className="space-y-6 mb-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">Quel est votre projet ?</label>
                        <div className="grid grid-cols-2 gap-3">
                            {['Véranda / Extension', 'Fenêtre de toit (VELUX)', 'Fenêtre Bois', 'Fenêtre Cintrée'].map(sub => (
                                <button key={sub} onClick={() => setData({ ...data, subtype: sub })}
                                    className={`p-4 text-sm font-bold border rounded-xl flex items-center justify-center text-center h-20 transition-all ${data.subtype === sub ? 'bg-slate-800 text-white border-slate-800 shadow-md' : 'bg-white text-slate-600 hover:border-orange-300'}`}>
                                    {sub}
                                </button>
                            ))}
                        </div>
                    </div>

                    {data.subtype === 'Fenêtre de toit (VELUX)' && (
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Référence VELUX ou Dimensions</label>
                                <input type="text" placeholder="Ex: MK04 ou 78x98cm" className="w-full p-3 border rounded-lg" value={data.type} onChange={e => setData({ ...data, type: e.target.value })} />
                            </div>
                            <label className="flex items-center space-x-2 cursor-pointer bg-white p-3 rounded-lg border">
                                <input type="checkbox" className="w-5 h-5 rounded text-orange-500"
                                    onChange={e => {
                                        const newOpts = e.target.checked ? [...data.options, 'Avec Store'] : data.options.filter(o => o !== 'Avec Store');
                                        setData({ ...data, options: newOpts });
                                    }}
                                />
                                <span className="text-sm font-medium text-slate-700">Ajouter un Store Solaire / Occultant ?</span>
                            </label>
                        </div>
                    )}

                    {data.subtype === 'Fenêtre Cintrée' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Matériau</label>
                                <div className="flex gap-2">
                                    {['PVC', 'Aluminium', 'Bois'].map(mat => (
                                        <button key={mat} onClick={() => setData({ ...data, material: mat })}
                                            className={`flex-1 py-2 px-3 border rounded-lg text-sm font-bold ${data.material === mat ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-600'}`}>
                                            {mat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 space-y-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-orange-800 font-bold flex items-center"><Info size={16} className="mr-2" /> Mesures spécifiques</p>
                                    <button onClick={() => { setGuideType('cintrage'); setShowGuide(true); }} className="text-xs text-blue-600 underline font-bold flex items-center"><Info size={14} className="mr-1" /> Aide mesure flèche</button>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-xs text-slate-500 mb-1 block font-bold">Largeur (Corde)</span>
                                        <input type="number" className="w-full p-3 border border-orange-200 rounded-lg bg-white" value={data.width} onChange={e => setData({ ...data, width: e.target.value })} />
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-500 mb-1 block font-bold">Hauteur Droit</span>
                                        <input type="number" className="w-full p-3 border border-orange-200 rounded-lg bg-white" value={data.height} onChange={e => setData({ ...data, height: e.target.value })} />
                                    </div>
                                    <div className="col-span-2">
                                        <span className="text-xs text-slate-500 mb-1 block font-bold">Hauteur de Flèche</span>
                                        <input type="number" className="w-full p-3 border border-orange-200 rounded-lg bg-white" value={data.fleche} onChange={e => setData({ ...data, fleche: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        return null;
    };

    // --- 5. VALIDATION ---
    const handleAdd = () => {
        if (productType.id !== 'veranda' || (data.subtype && data.subtype !== 'Fenêtre de toit (VELUX)')) {
            if (!data.width || !data.height) {
                alert("Merci d'indiquer des dimensions approximatives.");
                return;
            }
        }

        if (!data.type && productType.id === 'fenetre') {
            alert("Merci de sélectionner un type d'ouverture.");
            return;
        }

        // Label final pour le panier
        let label = productType.label;
        if (data.subtype) label = `${data.subtype}`;

        // Couleur Finale
        let finalColor = data.color;
        if (data.color === 'Autre') finalColor = data.customColor || 'Autre (Non précisé)';

        onAdd({
            ...data,
            color: finalColor,
            productTypeId: productType.id,
            productLabel: label
        });
        onClose();
    };


    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}>
                <motion.div
                    initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                    className="bg-white rounded-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-slate-900 text-white p-4 flex justify-between items-center shrink-0">
                        <h3 className="font-bold text-lg flex items-center">
                            <productType.icon className="mr-2" size={20} />
                            {productType.id === 'veranda' ? 'Projet Spécifique' : `Configurer : ${productType.label}`}
                        </h3>
                        <button onClick={onClose}><X size={24} /></button>
                    </div>

                    {/* Body */}
                    <div className="p-6 overflow-y-auto">

                        <ConfigSection title="1️⃣ Quantité">
                            <div className="flex items-center">
                                <button onClick={() => setData(d => ({ ...d, quantity: Math.max(1, d.quantity - 1) }))} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200">-</button>
                                <span className="mx-4 font-bold text-xl w-8 text-center">{data.quantity}</span>
                                <button onClick={() => setData(d => ({ ...d, quantity: d.quantity + 1 }))} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-200">+</button>
                            </div>
                        </ConfigSection>

                        {/* CHAMPS DYNAMIQUES SELON LE PRODUIT */}
                        {renderSpecificFields()}

                        {/* COULEURS (Sauf si désactivé pour certains produits) */}
                        {productType.id !== 'veranda' && renderColorSection()}

                        {/* DIMENSIONS (Sauf si déjà géré dans Veranda/Velux) */}
                        {productType.id !== 'veranda' && (
                            <ConfigSection title="📏 Dimensions (mm)" helpAction={() => { setGuideType('standard'); setShowGuide(true); }}>
                                <div className="flex items-center bg-slate-100 rounded-xl p-2 border border-slate-200">
                                    <div className="flex-1 px-4 border-r border-slate-300">
                                        <span className="text-xs text-slate-500 font-bold uppercase block mb-1">Largeur</span>
                                        <input type="number" placeholder="1200" className="bg-transparent font-mono text-xl font-bold w-full outline-none" value={data.width} onChange={e => setData({ ...data, width: e.target.value })} />
                                    </div>
                                    <div className="text-slate-400 font-light px-2">X</div>
                                    <div className="flex-1 px-4">
                                        <span className="text-xs text-slate-500 font-bold uppercase block mb-1">Hauteur</span>
                                        <input type="number" placeholder="1400" className="bg-transparent font-mono text-xl font-bold w-full outline-none" value={data.height} onChange={e => setData({ ...data, height: e.target.value })} />
                                    </div>
                                </div>
                            </ConfigSection>
                        )}

                        {/* POSE */}
                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <label className="block text-sm font-bold text-slate-700 mb-3">🛠️ Prestation souhaitée</label>
                            <div className="flex flex-col gap-2">
                                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors group">
                                    <input type="radio" name="pose" checked={data.pose === 'Fourniture + Pose SARANGE'} onChange={() => setData({ ...data, pose: 'Fourniture + Pose SARANGE' })} className="text-orange-500 w-5 h-5 accent-orange-500" />
                                    <span className="ml-3 text-sm font-bold text-slate-700 group-hover:text-orange-600">Fourniture + Pose (Recommandé)</span>
                                    <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">TVA 5.5%</span>
                                </label>
                                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                                    <input type="radio" name="pose" checked={data.pose === 'Fourniture seule'} onChange={() => setData({ ...data, pose: 'Fourniture seule' })} className="text-orange-500 w-5 h-5 accent-orange-500" />
                                    <span className="ml-3 text-sm font-medium text-slate-600">Fourniture seule (Livraison B2B/Chantier)</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="p-4 border-t bg-slate-50 shrink-0">
                        <button onClick={handleAdd} className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center">
                            Ajouter au devis <Plus size={18} className="ml-2" />
                        </button>
                        <p className="text-xs text-center text-slate-500 mt-2 flex items-center justify-center">
                            <CheckCircle size={12} className="mr-1 text-green-600" />
                            Aucun paiement requis. Projet gratuit.
                        </p>
                    </div>
                </motion.div>
                <MeasurementGuideModal isOpen={showGuide} onClose={() => setShowGuide(false)} specificContent={guideType} />
            </div>
        </AnimatePresence>
    );
};

export default ProductConfigurator;