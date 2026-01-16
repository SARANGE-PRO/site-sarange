// src/data/products.js
import { Home, Sun, Truck, ShieldCheck, LayoutGrid } from 'lucide-react';

export const PRODUCT_TYPES = [
  { 
    id: "fenetre", 
    label: "Fenêtres & Porte-Fenêtres", 
    icon: Home,
    description: "PVC et Alu, double ou triple vitrage."
  },
  { 
    id: "volet", 
    label: "Volets Roulants", 
    icon: Sun,
    description: "Motorisation solaire, radio ou filaire." 
  },
  { 
    id: "baie", 
    label: "Baie Vitrée Alu", 
    icon: Sun, // Note: Tu pourras changer l'icone plus tard si doublon
    description: "Lumière maximale et design moderne."
  },
  { 
    id: "porte", 
    label: "Porte d'Entrée", 
    icon: ShieldCheck,
    description: "Sécurité renforcée et isolation thermique."
  },
  { 
    id: "garage", 
    label: "Porte de Garage", 
    icon: Truck,
    description: "Sectionnelle, enroulable ou basculante."
  },
  { 
    id: "veranda", 
    label: "Véranda + Autre", 
    icon: LayoutGrid,
    description: "Extensions et projets sur-mesure."
  },
];