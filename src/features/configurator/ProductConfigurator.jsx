import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Palette, Info, Smartphone, CheckCircle, ArrowRight, AlertCircle, Sun, Wifi, Power, Hand } from 'lucide-react';
import { WindowIcons } from '../../components/icons/WindowIcons';
import ConfigSection from './ConfigSection';
import MeasurementGuideModal from './MeasurementGuideModal';

const ProductConfigurator = ({ isOpen, onClose, productType, onAdd }) => {
    // --- 1. ÉTAT INITIAL COMPLET ---
    const initialData = {
        quantity: 1,
        type: '',
        subtype: '',
        width: '',
        height: '',
        fleche: '',
        material: 'PVC',
        color: 'Blanc',
        customColor: '',
        options: [],
        pose: 'Fourniture + Pose SARANGE',
        stylePanel: '',
        otherTypeDetails: ''
    };

    const [data, setData] = useState(initialData);
    const [showGuide, setShowGuide] = useState(false);
    const [guideType, setGuideType] = useState('standard');
    const [validationError, setValidationError] = useState(null);
    const [allowNoDimensions, setAllowNoDimensions] = useState(false);

    // --- 2. RESET INTELLIGENT ---
    useEffect(() => {
        if (isOpen && productType) {
            let startMaterial = 'PVC';
            // Par défaut Alu pour ces catégories
            if (['baie', 'garage', 'veranda'].includes(productType.id)) startMaterial = 'Aluminium';
            setData({ ...initialData, material: startMaterial });
        }
    }, [isOpen, productType]);

    if (!isOpen || !productType) return null;

    // --- 3. LOGIQUE COULEURS (PVC vs ALU) ---
    const renderColorSection = () => {
        if (data.subtype === 'Fenêtre de toit (VELUX)' || data.subtype === 'Fenêtre Bois') return null;

        // Couleurs existantes conservées pour PVC
        const colorsPVC = [
            { label: 'Blanc (Standard)', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
            { label: 'Gris 7016 Ext / Blanc Int', value: 'Bicolore Gris 7016', hex: 'linear-gradient(135deg, #374151 50%, #ffffff 50%)', border: 'border-transparent' },
            { label: 'Chêne Doré Ext / Blanc Int', value: 'Bicolore Chêne Doré', hex: 'linear-gradient(135deg, #B45F06 50%, #ffffff 50%)', border: 'border-transparent' },
        ];

        // Couleurs spécifiques ALU demandées
        const colorsAluWindows = [
            { label: 'Gris Anthracite (7016)', value: 'Gris 7016', hex: '#374151', border: 'border-transparent' },
            { label: 'Blanc', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
            { label: 'Anodisé', value: 'Anodisé', hex: '#C0C0C0', border: 'border-slate-200' },
        ];

        // Couleurs Alu pour Baies/Garage
        const colorsAluStandard = [
            { label: 'Blanc', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
            { label: 'Gris Anthracite (7016)', value: 'Gris 7016', hex: '#374151', border: 'border-transparent' },
            { label: 'Noir Sablé (2100)', value: 'Noir 2100', hex: '#1a1a1a', border: 'border-transparent' },
        ];

        const colorsMixte = [
            { label: 'Blanc (Standard)', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
            { label: 'Gris 7016 Ext / Blanc Int', value: 'Bicolore Gris 7016', hex: 'linear-gradient(135deg, #374151 50%, #ffffff 50%)', border: 'border-transparent' },
            { label: 'Chêne Doré Ext / Blanc Int', value: 'Bicolore Chêne Doré', hex: 'linear-gradient(135deg, #B45F06 50%, #ffffff 50%)', border: 'border-transparent' },
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
        } else if (productType.id === 'fenetre' && data.material === 'Aluminium') {
            activeColors = colorsAluWindows;
        } else if (data.material === 'Aluminium' || productType.id === 'baie' || productType.id === 'garage') {
            activeColors = colorsAluStandard;
        }

        return (
            <ConfigSection title="🎨 Couleur & Finition">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {activeColors.map((c) => (
                        <button
                            key={c.label}
                            onClick={() => setData({ ...data, color: c.value })}
                            className={`flex flex-col items-center justify-center p-3 border rounded-xl transition-all h-24 ${data.color === c.value
                                ? 'ring-2 ring-orange-500 bg-orange-50/50 border-orange-500 shadow-sm'
                                : 'bg-white hover:bg-slate-50 border-slate-200'
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-full mb-2 shadow-sm ${c.border}`} style={{ background: c.hex }}></div>
                            <span className={`text-xs font-bold text-center leading-tight ${data.color === c.value ? 'text-orange-900' : 'text-slate-600'}`}>
                                {c.label}
                            </span>
                        </button>
                    ))}
                    <button
                        onClick={() => setData({ ...data, color: 'Autre' })}
                        className={`flex flex-col items-center justify-center p-3 border border-dashed rounded-xl transition-all h-24 ${data.color === 'Autre'
                            ? 'ring-2 ring-orange-500 bg-orange-50/50 border-orange-500'
                            : 'bg-slate-50 border-slate-300 hover:bg-slate-100'
                            }`}
                    >
                        <Palette size={20} className="mb-2 text-slate-400" />
                        <span className="text-xs font-bold text-slate-600">Autre / RAL</span>
                    </button>
                </div>

                <AnimatePresence>
                    {data.color === 'Autre' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4">
                            <label className="text-xs font-bold text-slate-500 mb-1 block uppercase">Précisez votre couleur</label>
                            <input
                                type="text"
                                placeholder="Ex: Rouge 3004, Bicolore spécifique..."
                                className="w-full p-4 border border-orange-300 rounded-xl bg-orange-50 text-slate-900 placeholder:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                onChange={(e) => setData({ ...data, customColor: e.target.value })}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </ConfigSection>
        );
    };

    // --- 4. LOGIQUE SPÉCIFIQUE ---
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
                    <ConfigSection title="1️⃣ Matériau">
                        <div className="flex bg-slate-100 p-1 rounded-xl">
                            {['PVC', 'Aluminium'].map((mat) => (
                                <button
                                    key={mat}
                                    onClick={() => {
                                        setData({
                                            ...data,
                                            material: mat,
                                            color: mat === 'Aluminium' ? 'Gris 7016' : 'Blanc'
                                        });
                                    }}
                                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all shadow-sm ${data.material === mat
                                        ? 'bg-white text-slate-900 shadow-md ring-1 ring-black/5'
                                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 shadow-none'
                                        }`}
                                >
                                    {mat}
                                </button>
                            ))}
                        </div>
                    </ConfigSection>

                    <ConfigSection title="2️⃣ Type d'ouverture">
                        <div className="grid grid-cols-2 gap-3">
                            {types.map(item => (
                                <button key={item.label} onClick={() => setData({ ...data, type: item.label })}
                                    className={`flex flex-col items-center justify-center p-4 border rounded-2xl transition-all duration-200 active:scale-95 ${data.type === item.label
                                        ? 'bg-slate-900 border-slate-900 shadow-lg'
                                        : 'bg-white border-slate-200 hover:border-orange-300 hover:bg-orange-50/30'
                                        }`}>
                                    <div className={`mb-3 ${data.type === item.label ? 'text-orange-500' : 'text-slate-400'}`}>
                                        {item.icon}
                                    </div>
                                    <span className={`text-xs font-bold text-center leading-tight ${data.type === item.label ? 'text-white' : 'text-slate-600'}`}>
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </ConfigSection>

                    <div className="mb-8 space-y-3">
                        {(data.type === 'Fenêtre 1 vantail' || data.type === 'Fenêtre 2 vantaux') && (
                            <label className="flex items-center justify-between cursor-pointer bg-white p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
                                <span className="text-sm font-bold text-slate-700">Option Oscillo-battant</span>
                                <input type="checkbox" className="w-6 h-6 rounded text-orange-500 focus:ring-orange-500 border-slate-300"
                                    onChange={e => {
                                        const newOpts = e.target.checked ? [...data.options, 'Oscillo-battant'] : data.options.filter(o => o !== 'Oscillo-battant');
                                        setData({ ...data, options: newOpts });
                                    }}
                                />
                            </label>
                        )}
                        {data.type && data.type !== 'Châssis Fixe' && (
                            <label className="flex items-center justify-between cursor-pointer bg-white p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
                                <span className="text-sm font-bold text-slate-700">Grille de ventilation (VMC)</span>
                                <input type="checkbox" className="w-6 h-6 rounded text-blue-500 focus:ring-blue-500 border-slate-300"
                                    onChange={e => {
                                        const newOpts = e.target.checked ? [...data.options, 'Grille de ventilation'] : data.options.filter(o => o !== 'Grille de ventilation');
                                        setData({ ...data, options: newOpts });
                                    }}
                                />
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
                    <div className="grid grid-cols-1 gap-3 mb-6">
                        {['Mixte PVC/Alu', 'Aluminium', 'Porte de service PVC'].map((mat) => {
                            const isSelected = data.material === mat;
                            return (
                                <button
                                    key={mat}
                                    onClick={() => setData({ ...data, material: mat, stylePanel: mat === 'Porte de service PVC' ? "Panneau sandwich 28mm" : "" })}
                                    className={`relative p-4 rounded-xl border-2 text-left transition-all ${isSelected
                                        ? 'bg-slate-900 border-slate-900 shadow-md'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className={`font-bold block text-lg ${isSelected ? 'text-white' : 'text-slate-900'}`}>{mat}</span>
                                            <span className={`text-xs ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                                                {mat === 'Mixte PVC/Alu' && '⭐ Top Vente : Chaleur PVC + Design Alu'}
                                                {mat === 'Aluminium' && '💎 Premium : Solidité maximale'}
                                                {mat === 'Porte de service PVC' && 'Entrée secondaire'}
                                            </span>
                                        </div>
                                        {isSelected && <CheckCircle className="text-orange-500" size={24} />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {data.material !== "Porte de service PVC" ? (
                        <div className="space-y-4">
                            <label className="flex items-center justify-between cursor-pointer bg-white p-4 rounded-xl border border-slate-200">
                                <span className="text-sm font-bold text-slate-700">Ajouter une Tierce</span>
                                <input type="checkbox" className="w-6 h-6 rounded text-orange-500 focus:ring-orange-500"
                                    onChange={e => {
                                        const newOpts = e.target.checked ? [...data.options, 'Tierce'] : data.options.filter(o => o !== 'Tierce');
                                        setData({ ...data, options: newOpts });
                                    }}
                                />
                            </label>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Style de panneau</label>
                                <textarea
                                    className="w-full p-4 border border-slate-300 rounded-xl text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                    rows="3"
                                    placeholder="Décrivez votre envie : Panneau plein moderne, vitré classique, inserts inox..."
                                    value={data.stylePanel}
                                    onChange={e => setData({ ...data, stylePanel: e.target.value })}
                                ></textarea>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800 flex items-start">
                            <Info size={18} className="mr-3 mt-0.5 shrink-0 text-blue-600" />
                            <span>Inclus automatiquement : Panneau sandwich isolant 28mm (Même couleur que la porte).</span>
                        </div>
                    )}
                </ConfigSection>
            );
        }

        // --- CAS 3 : BAIE VITRÉE ---
        if (productType.id === 'baie') {
            return (
                <ConfigSection title="2️⃣ Type d'ouverture (Aluminium)">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {['Coulissant 2 Vantaux', 'Coulissant 3 Vantaux', 'Galandage', 'Autre'].map(t => (
                            <button key={t} onClick={() => setData({ ...data, type: t })}
                                className={`p-4 text-sm font-bold border rounded-xl transition-all ${data.type === t
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                    }`}>
                                {t}
                            </button>
                        ))}
                    </div>
                    {data.type === 'Autre' && (
                        <textarea
                            className="w-full p-4 border border-slate-300 rounded-xl text-base focus:ring-2 focus:ring-orange-500 outline-none"
                            rows="3"
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
            // Liste des motorisations avec icônes
            const motors = [
                { id: 'Moteur Radio', label: 'Radio', sub: 'Télécommande', icon: Wifi },
                { id: 'Moteur Filaire', label: 'Filaire', sub: 'Interrupteur', icon: Power },
                { id: 'Moteur Solaire', label: 'Solaire', sub: '100% Autonome', icon: Sun },
                { id: 'Manuel', label: 'Manuel', sub: 'Manivelle', icon: Hand },
            ];

            // Récupère la motorisation actuelle depuis les options
            const currentMotor = data.options.find(o => ['Moteur Solaire', 'Moteur Radio', 'Moteur Filaire', 'Manuel'].includes(o));

            // Liste complète des configurations avec descriptions
            const allConfigs = [
                { id: 'RÉNOVATION', label: 'RÉNOVATION', sub: 'Coffre extérieur (pan coupé ou rond)' },
                { id: 'BLOC-BAIE', label: 'BLOC-BAIE', sub: 'Je change tout (Fenêtre + Volet).' },
                { id: 'TRADITIONNEL', label: 'TRADITIONNEL', sub: "J'ai déjà un coffre (bois ou mur)." },
                { id: 'INVISIBLE (ITE)', label: 'INVISIBLE (ITE)', sub: "Pour isolation par l'extérieur." },
            ];

            // Filtre les configurations : si Solaire, uniquement RÉNOVATION
            const configs = currentMotor === 'Moteur Solaire'
                ? allConfigs.filter(c => c.id === 'RÉNOVATION')
                : allConfigs;

            return (
                <>
                    {/* SECTION MOTORISATION (Au-dessus) */}
                    <ConfigSection title="2️⃣ Motorisation">
                        <div className="grid grid-cols-2 gap-3">
                            {motors.map((motor) => {
                                const isSelected = currentMotor === motor.id;
                                return (
                                    <button
                                        key={motor.id}
                                        onClick={() => {
                                            // Enlever les anciennes motorisations
                                            const newOpts = data.options.filter(o => !['Moteur Solaire', 'Moteur Radio', 'Moteur Filaire', 'Manuel'].includes(o));
                                            // Ajouter la nouvelle
                                            setData({ ...data, options: [...newOpts, motor.id] });
                                        }}
                                        className={`flex flex-col items-center justify-center p-3 border rounded-xl transition-all h-24 ${isSelected
                                            ? 'ring-2 ring-orange-500 bg-orange-50/50 border-orange-500 shadow-sm'
                                            : 'bg-white hover:bg-slate-50 border-slate-200'
                                            }`}
                                    >
                                        <motor.icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-orange-600' : 'text-slate-400'}`} />
                                        <span className={`text-xs font-bold text-center leading-tight ${isSelected ? 'text-orange-900' : 'text-slate-700'}`}>
                                            {motor.label}
                                        </span>
                                        <span className="text-[10px] text-slate-500 mt-1">{motor.sub}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Option Domotique */}
                        {(currentMotor === 'Moteur Radio' || currentMotor === 'Moteur Solaire') && (
                            <label className="flex items-center space-x-3 cursor-pointer bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
                                <input type="checkbox" className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
                                    onChange={e => {
                                        const newOpts = e.target.checked ? [...data.options, 'Domotique Connectée'] : data.options.filter(o => o !== 'Domotique Connectée');
                                        setData({ ...data, options: newOpts });
                                    }}
                                />
                                <div className="flex items-center text-blue-800 font-bold text-sm">
                                    <Smartphone size={18} className="mr-2" />
                                    Option Domotique (App dédiée)
                                </div>
                            </label>
                        )}
                    </ConfigSection>

                    {/* SECTION CONFIGURATION (En-dessous) */}
                    <ConfigSection title="3️⃣ Type de Configuration">
                        <div className="grid grid-cols-1 gap-3">
                            {configs.map(conf => (
                                <button key={conf.id} onClick={() => setData({ ...data, type: conf.id })}
                                    className={`p-4 text-left border rounded-xl transition-all flex flex-col justify-center ${data.type === conf.id
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                        }`}>
                                    <span className="font-bold text-sm mb-0.5">{conf.label}</span>
                                    <span className={`text-xs ${data.type === conf.id ? 'text-slate-300' : 'text-slate-400'}`}>
                                        {conf.sub}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </ConfigSection>
                </>
            );
        }

        // --- CAS 5 : GARAGE ---
        if (productType.id === 'garage') {
            return (
                <ConfigSection title="2️⃣ Type de Porte">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {['Sectionnelle Plafond', 'Enroulable', 'Basculante', 'Battante'].map(t => (
                            <button key={t} onClick={() => setData({ ...data, type: t })}
                                className={`p-3 text-sm font-bold border rounded-xl transition-all ${data.type === t ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
                                    }`}>
                                {t}
                            </button>
                        ))}
                    </div>
                    <label className="flex items-center justify-between cursor-pointer bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-sm font-bold text-slate-700">Portillon intégré (Porte piéton)</span>
                        <input type="checkbox" className="w-6 h-6 rounded text-orange-500 focus:ring-orange-500 border-slate-300"
                            onChange={e => {
                                const newOpts = e.target.checked ? [...data.options, 'Portillon Intégré'] : data.options.filter(o => o !== 'Portillon Intégré');
                                setData({ ...data, options: newOpts });
                            }}
                        />
                    </label>
                </ConfigSection>
            );
        }

        // --- CAS 6 : VÉRANDA & SPÉCIFIQUE ---
        if (productType.id === 'veranda') {
            return (
                <div className="space-y-6 mb-8">
                    <div>
                        <label className="block text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide">Quel est votre projet ?</label>
                        <div className="grid grid-cols-2 gap-3">
                            {['Véranda / Extension', 'Fenêtre de toit (VELUX)', 'Fenêtre Bois', 'Fenêtre Cintrée'].map(sub => (
                                <button key={sub} onClick={() => setData({ ...data, subtype: sub })}
                                    className={`p-4 text-sm font-bold border rounded-2xl flex items-center justify-center text-center h-24 transition-all ${data.subtype === sub ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300'
                                        }`}>
                                    {sub}
                                </button>
                            ))}
                        </div>
                    </div>

                    {data.subtype === 'Fenêtre de toit (VELUX)' && (
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Référence VELUX ou Dimensions</label>
                                <input type="text" placeholder="Ex: MK04 ou 78x98cm" className="w-full p-4 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-orange-500 outline-none" value={data.type} onChange={e => setData({ ...data, type: e.target.value })} />
                            </div>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 rounded text-orange-500 focus:ring-orange-500"
                                    onChange={e => {
                                        const newOpts = e.target.checked ? [...data.options, 'Avec Store'] : data.options.filter(o => o !== 'Avec Store');
                                        setData({ ...data, options: newOpts });
                                    }}
                                />
                                <span className="text-sm font-bold text-slate-700">Ajouter un Store Solaire / Occultant ?</span>
                            </label>
                        </div>
                    )}

                    {data.subtype === 'Fenêtre Cintrée' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Matériau</label>
                                <div className="flex bg-slate-100 p-1 rounded-xl">
                                    {['PVC', 'Aluminium', 'Bois'].map(mat => (
                                        <button key={mat} onClick={() => setData({ ...data, material: mat })}
                                            className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all ${data.material === mat ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                                                }`}>
                                            {mat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 space-y-4">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm text-orange-800 font-bold flex items-center"><Info size={16} className="mr-2" /> Mesures spécifiques</p>
                                    <button onClick={() => { setGuideType('cintrage'); setShowGuide(true); }} className="text-xs text-blue-600 underline font-bold flex items-center bg-white px-2 py-1 rounded-md shadow-sm">
                                        <Info size={12} className="mr-1" /> Aide mesure
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* 📍 INPUT NUMÉRIQUES */}
                                    <div>
                                        <span className="text-xs text-slate-500 mb-1 block font-bold uppercase">Largeur (Corde)</span>
                                        <input type="number" inputMode="numeric" pattern="[0-9]*" className="w-full p-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" value={data.width} onChange={e => setData({ ...data, width: e.target.value })} />
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-500 mb-1 block font-bold uppercase">Hauteur Droit</span>
                                        <input type="number" inputMode="numeric" pattern="[0-9]*" className="w-full p-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" value={data.height} onChange={e => setData({ ...data, height: e.target.value })} />
                                    </div>
                                    <div className="col-span-2">
                                        <span className="text-xs text-slate-500 mb-1 block font-bold uppercase">Hauteur de Flèche</span>
                                        <input type="number" inputMode="numeric" pattern="[0-9]*" className="w-full p-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" value={data.fleche} onChange={e => setData({ ...data, fleche: e.target.value })} />
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
        // Reset error
        setValidationError(null);

        // Vérifier le type d'ouverture pour fenêtres
        if (!data.type && productType.id === 'fenetre') {
            alert("Merci de sélectionner un type d'ouverture.");
            return;
        }

        // Vérifier les dimensions (sauf pour véranda et VELUX)
        const needsDimensions = productType.id !== 'veranda' || (data.subtype && data.subtype !== 'Fenêtre de toit (VELUX)');

        if (needsDimensions && !allowNoDimensions) {
            if (!data.width || !data.height) {
                setValidationError('dimensions');
                // Scroll vers le champ dimensions
                setTimeout(() => {
                    document.getElementById('dimensions-input')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 100);
                return;
            }
        }

        let label = productType.label;
        if (data.subtype) label = `${data.subtype}`;

        let finalColor = data.color;
        if (data.color === 'Autre') finalColor = data.customColor || 'Autre (Non précisé)';

        onAdd({
            ...data,
            color: finalColor,
            productTypeId: productType.id,
            productLabel: label,
            needsMeasurement: !data.width || !data.height
        });
        onClose();
    };


    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4" onClick={onClose}>
                {/* Backdrop avec flou */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] shadow-2xl relative z-10"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-white border-b border-slate-100 p-5 flex justify-between items-center shrink-0">
                        <h3 className="font-black text-xl text-slate-900 flex items-center">
                            <div className="p-2 bg-slate-100 rounded-full mr-3 text-slate-700">
                                <productType.icon size={20} />
                            </div>
                            {productType.id === 'veranda' ? 'Projet Spécifique' : productType.label}
                        </h3>
                        <button onClick={onClose} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                            <X size={20} className="text-slate-600" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 overflow-y-auto bg-slate-50/50">

                        <ConfigSection title="Quantité">
                            <div className="flex items-center justify-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <button onClick={() => setData(d => ({ ...d, quantity: Math.max(1, d.quantity - 1) }))} className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors active:scale-95">-</button>
                                <span className="mx-6 font-black text-3xl text-slate-900 w-12 text-center">{data.quantity}</span>
                                <button onClick={() => setData(d => ({ ...d, quantity: d.quantity + 1 }))} className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-xl font-bold text-white hover:bg-slate-800 transition-colors active:scale-95">+</button>
                            </div>
                        </ConfigSection>

                        {/* CHAMPS DYNAMIQUES */}
                        {renderSpecificFields()}

                        {/* COULEURS */}
                        {productType.id !== 'veranda' && renderColorSection()}

                        {/* MESSAGE D'ERREUR VALIDATION */}
                        {validationError === 'dimensions' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4"
                            >
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="text-red-500 shrink-0" size={20} />
                                    <div className="flex-1">
                                        <p className="text-red-800 font-bold text-sm mb-2">
                                            Veuillez renseigner les dimensions
                                        </p>
                                        <p className="text-red-600 text-xs mb-3">
                                            Les dimensions de votre menuiserie sont nécessaires pour établir un devis précis.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setAllowNoDimensions(true)}
                                            className="text-xs text-slate-600 underline hover:text-slate-800 transition-colors"
                                        >
                                            Je n'ai pas les mesures → Continuer quand même
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {allowNoDimensions && (
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4 text-xs">
                                <p className="text-blue-800 font-semibold mb-1">
                                    📏 Pas de mesures ? Aucun problème !
                                </p>
                                <p className="text-blue-600">
                                    Donnez-nous vos coordonnées, nous vous contacterons pour prendre les mesures.
                                </p>
                            </div>
                        )}

                        {/* DIMENSIONS */}
                        {productType.id !== 'veranda' && (
                            <ConfigSection title="📏 Dimensions (mm)" helpAction={() => { setGuideType('standard'); setShowGuide(true); }}>
                                <div id="dimensions-input" className="flex items-center bg-white rounded-2xl p-4 border border-slate-200 shadow-sm ring-1 ring-slate-100">
                                    <div className="flex-1 text-center border-r border-slate-100 pr-4">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Largeur</span>
                                        {/* 📍 INPUT NUMÉRIQUE + PATTERN */}
                                        <input
                                            type="number"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            placeholder="Ex: 1200"
                                            className="bg-transparent font-black text-2xl text-slate-900 w-full outline-none text-center placeholder:text-slate-200"
                                            value={data.width}
                                            onChange={e => setData({ ...data, width: e.target.value })}
                                        />
                                    </div>
                                    <div className="text-slate-300 font-light px-2 text-2xl">×</div>
                                    <div className="flex-1 text-center pl-4">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Hauteur</span>
                                        {/* 📍 INPUT NUMÉRIQUE + PATTERN */}
                                        <input
                                            type="number"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            placeholder="Ex: 1400"
                                            className="bg-transparent font-black text-2xl text-slate-900 w-full outline-none text-center placeholder:text-slate-200"
                                            value={data.height}
                                            onChange={e => setData({ ...data, height: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </ConfigSection>
                        )}

                        {/* POSE */}
                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <label className="block text-sm font-bold text-slate-800 mb-4 uppercase tracking-wide">Prestation souhaitée</label>
                            <div className="flex flex-col gap-3">
                                <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${data.pose === 'Fourniture + Pose SARANGE' ? 'border-orange-500 bg-orange-50/50' : 'border-slate-200 bg-white'}`}>
                                    <input type="radio" name="pose" checked={data.pose === 'Fourniture + Pose SARANGE'} onChange={() => setData({ ...data, pose: 'Fourniture + Pose SARANGE' })} className="text-orange-500 w-5 h-5 accent-orange-500" />
                                    <div className="ml-3 flex-1">
                                        <span className="block text-sm font-bold text-slate-900">Fourniture + Pose (Recommandé)</span>
                                        <span className="text-xs text-slate-500">Garantie décennale incluse, TVA réduite sous conditions</span>
                                    </div>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-md font-bold">TVA Réduite</span>
                                </label>
                                <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${data.pose === 'Fourniture seule' ? 'border-orange-500 bg-orange-50/50' : 'border-slate-200 bg-white'}`}>
                                    <input type="radio" name="pose" checked={data.pose === 'Fourniture seule'} onChange={() => setData({ ...data, pose: 'Fourniture seule' })} className="text-orange-500 w-5 h-5 accent-orange-500" />
                                    <span className="ml-3 text-sm font-bold text-slate-700">Fourniture seule</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="p-5 border-t border-slate-100 bg-white shrink-0 pb-8 sm:pb-5">
                        <button onClick={handleAdd} className="w-full py-4 bg-slate-900 text-white font-bold text-lg rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center active:scale-[0.98]">
                            Ajouter au devis <ArrowRight size={20} className="ml-2" />
                        </button>
                        <p className="text-[10px] text-center text-slate-400 mt-3 flex items-center justify-center uppercase tracking-wide font-bold">
                            <CheckCircle size={12} className="mr-1.5 text-green-500" />
                            Gratuit & Sans engagement
                        </p>
                    </div>
                </motion.div>

                <MeasurementGuideModal isOpen={showGuide} onClose={() => setShowGuide(false)} specificContent={guideType} />
            </div>
        </AnimatePresence>
    );
};

export default ProductConfigurator;