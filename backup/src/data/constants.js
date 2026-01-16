import { Sun, ShieldCheck, Palette, Signal, Power, Thermometer, Zap, Maximize, Minimize, Sparkles, Check } from 'lucide-react';

import heroImage from '../assets/hero/banner-main.webp';
import porteImage from '../assets/doors/porte-mixte.webp';
import aluImage from '../assets/doors/porte-alu.webp';
import aluWindowImage from '../assets/windows/fenetre-alu.webp';
import pvcImage from '../assets/windows/fenetre-pvc-volet.webp';
import voletSolaireImage from '../assets/shutters/volet-solaire.webp';
import voletElectriqueImage from '../assets/shutters/volet-electrique.webp';
import veranda1Image from '../assets/veranda/veranda-1.webp';
import veranda2Image from '../assets/veranda/veranda-2.webp';
import veranda3Image from '../assets/veranda/veranda-3.webp';
import veranda4Image from '../assets/veranda/veranda-4.webp';

// PVC Window Types - Carousel Images
import fenetre1vantailImage from '../assets/windows/fenetre-1vantail.webp';
import fenetre2vantauxImage from '../assets/windows/fenetre-2vantaux.webp';
import fenetre3vantauxImage from '../assets/windows/fenetre-3vantaux.webp';
import porteFenetre2vantauxImage from '../assets/windows/porte-fenetre-2vantaux.webp';
import coulissantImage from '../assets/windows/coulissant.webp';
import composeImage from '../assets/windows/compose.webp';

export const API_KEY = ''; // Ta clé API future

export const IMAGES = {
  hero: heroImage,
  pvc: pvcImage,
  alu: aluImage,
  alu_window: aluWindowImage,
  porte: porteImage,
  volet_solaire: voletSolaireImage,
  volet_electrique: voletElectriqueImage,
  // PVC Window types - Carousel
  pvc_fenetre: fenetre2vantauxImage, // Default for tabs using generic key
  pvc_fenetre_1vantail: fenetre1vantailImage,
  pvc_fenetre_2vantaux: fenetre2vantauxImage,
  pvc_fenetre_3vantaux: fenetre3vantauxImage,
  pvc_porte_fenetre: porteFenetre2vantauxImage, // Default for tab
  pvc_porte_fenetre_2vantaux: porteFenetre2vantauxImage,
  pvc_coulissant: coulissantImage, // Default generic
  pvc_coulissant_new: coulissantImage, // Specific if different
  pvc_compose: composeImage,
  garage:
    'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  garage1: new URL('../assets/garage/garage-1.webp', import.meta.url).href,
  garage2: new URL('../assets/garage/garage-2.webp', import.meta.url).href,
  garage3: new URL('../assets/garage/garage-3.webp', import.meta.url).href,
  garage4: new URL('../assets/garage/garage-4.webp', import.meta.url).href,
  garage5: new URL('../assets/garage/garage-5.webp', import.meta.url).href,
  veranda1: veranda1Image,
  veranda2: veranda2Image,
  veranda3: veranda3Image,
  veranda4: veranda4Image,
};

export const COLORS = [
  { label: 'Blanc', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
  {
    label: 'Gris Anthracite (7016)',
    value: 'Gris 7016',
    hex: '#374151',
    border: 'border-transparent',
  },
  { label: 'Noir Sablé (2100)', value: 'Noir 2100', hex: '#1a1a1a', border: 'border-transparent' },
  { label: 'Chêne Doré', value: 'Chêne Doré', hex: '#B45F06', border: 'border-transparent' },
  {
    label: 'Autre (RAL)',
    value: 'Autre',
    hex: 'transparent',
    icon: Palette,
    border: 'border-dashed border-slate-300',
  },
];

export const MOTOR_OPTIONS = [
  {
    id: 'radio',
    icon: Signal,
    name: 'Électrique Radio',
    badge: 'BEST-SELLER',
    badgeColor: 'bg-primary-500',
    description: 'Confort et simplicité au quotidien.',
    features: [
      'Commande sans fil par télécommande (centralisation possible)',
      'Moteur silencieux avec démarrage et arrêt progressifs',
      "Installation simplifiée : un seul câble d'alimentation",
      'Compatible Smartbox : pilotage via Smartphone',
    ],
    colorScheme: 'orange',
  },
  {
    id: 'solaire',
    icon: Sun,
    name: 'Solaire Autonome',
    badge: 'SANS TRAVAUX',
    badgeColor: 'bg-green-600',
    description: 'Autonome, sans câblage.',
    features: [
      '100 % autonome : panneau solaire et batterie intégrée',
      'Pose sans travaux : aucun raccordement électrique',
      "Autonomie jusqu'à 30 jours sans soleil",
      'Compatible Smartbox : pilotage via Smartphone',
    ],
    colorScheme: 'green',
  },
  {
    id: 'filaire',
    icon: Power,
    name: 'Électrique Filaire',
    badge: 'PRIX IMBATTABLE',
    badgeColor: 'bg-secondary-600',
    description: 'Fiable et économique.',
    features: [
      'Commande murale par interrupteur',
      'Solution la plus économique de la gamme',
      'Technologie filaire robuste et éprouvée',
      'Entretien minimal et longue durée de vie',
    ],
    colorScheme: 'blue',
  },
];

export const PVC_OFFERS = {
  fenetre: {
    id: 'fenetre',
    label: 'Fenêtre',
    imageKey: 'pvc_fenetre', // Using keys to reference IMAGES object if needed, or direct import if preferred.
    // However, existing code uses IMAGES.pvc_fenetre. I need to ensure IMAGES has these keys.
    // I added them above.
    title: "Fenêtre PVC Schüco",
    subtitle: "Le blanc performant au meilleur prix du marché",
    features: [
      { icon: Thermometer, text: "Isolation Thermique Top Niveau jusqu’à Uw 1,1" },
      { icon: ShieldCheck, text: "Renforts Acier : Indéformable & Sûr" },
      { icon: Zap, text: "Direct usine : qualité premium, prix imbattable" }
    ],
    defaultConfig: { opening: 'ob', leaves: 1 }
  },
  porte_fenetre: {
    id: 'porte_fenetre',
    label: 'Porte-Fenêtre',
    imageKey: 'pvc_porte_fenetre',
    title: "Porte-fenêtre PVC Schüco",
    subtitle: "Plus de lumière. Moins de dépenses",
    features: [
      { icon: Maximize, text: "Jusqu’à +20 % de luminosité naturelle" },
      { icon: Thermometer, text: "Isolation thermique jusqu’à Uw 1,1" },
      { icon: ShieldCheck, text: "Le meilleur rapport qualité-prix" }
    ],
    defaultConfig: { opening: 'ob', leaves: 1 }
  },
  coulissant: {
    id: 'coulissant',
    label: 'Coulissant',
    imageKey: 'pvc_coulissant_new',
    title: "Coulissant PVC Schüco Soft Slide",
    subtitle: "Le coulissant fluide, isolant et économique",
    features: [
      { icon: Minimize, text: "Grandes surfaces vitrées, zéro compromis" },
      { icon: Zap, text: "Système Soft Slide : ouverture douce, sans effort" },
      { icon: Thermometer, text: "Jusqu’à 40 % moins cher que l’aluminium" }
    ],
    defaultConfig: { opening: 'battant', leaves: 2 }
  },
  compose: {
    id: 'compose',
    label: 'Composées',
    imageKey: 'pvc_compose',
    title: "Ensembles composés PVC Schüco",
    subtitle: "Harmonie totale. Budget optimisé.",
    features: [
      { icon: Sparkles, text: "Pose simplifiée, économies immédiates" },
      { icon: Check, text: "Sur mesure, moins cher que des produits séparés" },
      { icon: Thermometer, text: "Performance globale, coût global réduit" }
    ],
    defaultConfig: { opening: 'ob', leaves: 1 }
  }
};
