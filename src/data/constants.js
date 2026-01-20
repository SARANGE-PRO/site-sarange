// src/data/constants.js
import { Home, Sun, Truck, ShieldCheck, LayoutGrid, Palette } from 'lucide-react';

import heroImage from '../assets/hero/banner-sarange-4.webp';
import porteImage from '../assets/doors/porte-mixte-new.webp';
import aluImage from '../assets/doors/porte-alu-new-v3.webp';
import aluWindowImage from '../assets/windows/alu-fenetre-new.webp';
import pvcImage from '../assets/windows/fenetre-pvc-volet.webp';
import voletSolaireImage from '../assets/shutters/volet-solaire.webp';
import voletElectriqueImage from '../assets/shutters/volet-electrique.webp';
import veranda1Image from '../assets/veranda/veranda1.webp';
import veranda2Image from '../assets/veranda/veranda2.webp';
import veranda3Image from '../assets/veranda/veranda3.webp';
import veranda4Image from '../assets/veranda/veranda4.webp';

// PVC Window Types - Carousel Images
// PVC Window Types - Carousel Images
import fenetre1vantailImage from '../assets/windows/fenetre-1vantail.webp';
import fenetre2vantauxImage from '../assets/windows/fenetre-2vantaux.webp';
import fenetre3vantauxImage from '../assets/windows/fenetre-3vantaux.webp';
import porteFenetre2vantauxImage from '../assets/windows/porte-fenetre-2vantaux.webp';
import coulissantImage from '../assets/windows/coulissant.webp';
import composeImage from '../assets/windows/compose.webp';



export const IMAGES = {
  hero: heroImage,
  pvc: pvcImage,
  alu: aluImage,
  alu_window: aluWindowImage,
  porte: porteImage,
  volet_solaire: voletSolaireImage,
  volet_electrique: voletElectriqueImage,
  // PVC Window types - Carousel
  pvc_fenetre_1vantail: fenetre1vantailImage,
  pvc_fenetre_2vantaux: fenetre2vantauxImage,
  pvc_fenetre_3vantaux: fenetre3vantauxImage,
  pvc_porte_fenetre_2vantaux: porteFenetre2vantauxImage,
  pvc_coulissant: coulissantImage,
  pvc_compose: composeImage,
  garage: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  garage1: new URL('../assets/garage/garage1.webp', import.meta.url).href,
  garage2: new URL('../assets/garage/garage2.webp', import.meta.url).href,
  garage3: new URL('../assets/garage/garage3.webp', import.meta.url).href,
  garage4: new URL('../assets/garage/garage4.webp', import.meta.url).href,
  garage5: new URL('../assets/garage/garage5.webp', import.meta.url).href,
  veranda1: veranda1Image,
  veranda2: veranda2Image,
  veranda3: veranda3Image,
  veranda4: veranda4Image
};

export const COLORS = [
  { label: 'Blanc', value: 'Blanc', hex: '#FFFFFF', border: 'border-slate-200' },
  { label: 'Gris Anthracite (7016)', value: 'Gris 7016', hex: '#374151', border: 'border-transparent' },
  { label: 'Noir Sablé (2100)', value: 'Noir 2100', hex: '#1a1a1a', border: 'border-transparent' },
  { label: 'Chêne Doré', value: 'Chêne Doré', hex: '#B45F06', border: 'border-transparent' },
  { label: 'Autre (RAL)', value: 'Autre', hex: 'transparent', icon: Palette, border: 'border-dashed border-slate-300' }
];