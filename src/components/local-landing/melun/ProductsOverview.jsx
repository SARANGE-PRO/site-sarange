import React, { useState } from "react";
import { IMAGES } from "../../../data/constants";
import { ChevronRight } from "lucide-react";
import ProductModal from "../../modals/ProductModal";
import { ProductPromoTrigger, ComboInfoModal, MiniPromoBadge } from "../../promo/PromoCombo";

const ProductsOverview = ({ city, onDevisClick }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showComboModal, setShowComboModal] = useState(false);

    const products = [
        {
            title: "Fenêtres PVC",
            subtitle: "Gamme Schüco",
            img: IMAGES.pvc_fenetre_2vantaux,
            alt: `Fenêtre PVC Schüco sur-mesure - Fabrication ${city}`,
            // BADGE SPÉCIAL (Orange/Feu)
            tag: "N°1 DES VENTES",
            benefits: ["Rapport Qualité/Prix Imbattable", "Isolation Thermique A++", "Entretien minimal"],
            specs: [
                "Vitrage Série : 4/20/4 Argon + Warm Edge",
                "Toutes ouvertures : Fixe, Battant, Soufflet, Coulissant...",
                "Renforts acier systématiques",
                "Profilé Leader Européen"
            ],
            options: "Toutes configurations (1 à 3 vantaux, composés), couleurs, imitation bois."
        },
        {
            title: "Fenêtres Alu",
            subtitle: "Gamme Schüco",
            img: IMAGES.alu_window,
            alt: `Fenêtre et Baie Aluminium Schüco - Installation ${city}`,
            tag: "Design", // Badge Standard
            benefits: ["Finesse des profils", "Clarté maximale", "Robustesse Schüco"],
            specs: [
                "Vitrage Série : 4/16/4 Argon + Warm Edge",
                "Solutions XXL : Coulissant, Galandage, Accordéon...",
                "Rupture de pont thermique totale",
                "Design contemporain"
            ],
            options: "Toutes teintes RAL, bicoloration, toutes formes."
        },
        {
            title: "Portes d'Entrée",
            subtitle: "Hybride ou 100% Alu",
            img: IMAGES.porte,
            alt: `Porte d'entrée Hybride PVC/Alu ou Aluminium - ${city}`,
            tag: "Sécurité", // Badge Standard
            benefits: ["Sécurité 5 points de série", "Isolation renforcée", "Design sur-mesure"],
            specs: [
                "Hybride : Cœur PVC isolant + Habillage Alu",
                "100% Alu : Structure haute résistance",
                "Serrure automatique 5 points ou crochets",
                "Dispo en Porte de Service (Panneau plein)"
            ],
            options: "Large choix de panneaux décoratifs, vitrés ou pleins."
        },
        {
            title: "Volets Roulants",
            subtitle: "Lames Alu de Série",
            img: IMAGES.volet_solaire,
            alt: `Volet roulant aluminium - Pose ${city}`,
            tag: "Confort", // Badge Standard
            benefits: ["Occultation & Sécurité", "Isolation thermique/phonique", "Durabilité Alu"],
            specs: [
                "Tablier Alu isolé (Mousse PU) de série",
                "Motorisation : Filaire, Radio ou Solaire",
                "Coffre intérieur ou extérieur",
                "Fabrication sur-mesure"
            ],
            options: "Centralisation, couleurs lames, moustiquaire."
        },
        {
            title: "Portes de Garage",
            subtitle: "Motorisation & Sur-mesure",
            img: IMAGES.garage1,
            alt: `Porte de garage motorisée sectionnelle ou enroulable - ${city}`,
            tag: "Motorisé", // Badge Standard
            benefits: ["Gain de place", "Isolation Renforcée 40mm", "Motorisation Connectée"],
            specs: [
                "4 Types : Sectionnelle (Plafond/Latérale), Enroulable, Battante",
                "Isolation : Panneaux 40/42mm haute densité",
                "Option Portillon : Accès piéton facile (Seuil PMR)",
                "Confort : Détection obstacles & Pilotage Smartphone"
            ],
            options: "Hublots, portillon intégré, finitions bois, domotique."
        },
        {
            title: "Vérandas",
            subtitle: "Extension Habitable",
            img: IMAGES.veranda1,
            alt: `Véranda Aluminium Extension Maison - ${city}`,
            tag: "Extension", // Badge Standard
            benefits: ["Pièce de vie (Isolation RE2020)", "Valorisation Patrimoine", "Structure Alu Schüco"],
            specs: [
                "Structure : 100% Alu Schüco (Rupture pont thermique)",
                "Toiture : Climalux Phonique ou Vitrage 4 Saisons (Anti-chaleur)",
                "Sécurité : Vitrage feuilleté & Retardateur effraction",
                "Design : Toiture plate, Victorienne ou Classique"
            ],
            options: "Volets roulants intégrés, BSO, Éclairage LED (variateur)."
        }
    ];

    return (
        <section className={`py-8 md:py-16 bg-white relative ${showComboModal ? 'z-[9999]' : ''}`} id="produits">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Section */}
                <div className="flex items-end justify-between mb-6 md:mb-10 px-1">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-none">
                            Nos Menuiseries à {city}
                        </h2>
                        <p className="text-slate-500 text-sm md:text-lg mt-1">
                            Intervention sur {city} et ses alentours.
                        </p>
                    </div>
                    {/* Indicateur de swipe mobile */}
                    <div className="md:hidden flex items-center text-xs text-slate-400 font-medium animate-pulse">
                        Glisser <ChevronRight size={14} />
                    </div>
                </div>

                {/* LISTE PRODUITS : Horizontal Scroll sur Mobile / Grid sur Desktop */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">

                    {products.map((p, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedProduct(p)}
                            className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto snap-center group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden relative bg-slate-100">
                                <img
                                    src={p.img}
                                    alt={p.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* --- GESTION DES BADGES --- */}
                                {i === 0 ? (
                                    // MINI BADGE PROMO POUR LE PVC
                                    <MiniPromoBadge onClick={() => setShowComboModal(true)} />
                                ) : i === 3 ? (
                                    // MINI BADGE PROMO POUR LES VOLETS (index 3)
                                    <MiniPromoBadge onClick={() => setShowComboModal(true)} />
                                ) : (
                                    // BADGE STANDARD POUR LES AUTRES (Sombre, à droite)
                                    <div className="absolute top-2 right-2 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
                                        {p.tag}
                                    </div>
                                )}
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-black text-slate-900 leading-tight">{p.title}</h3>
                                <p className="text-xs font-bold text-orange-600 mb-4 uppercase">{p.subtitle}</p>

                                {/* Bénéfices Clés */}
                                <div className="flex flex-wrap gap-2">
                                    {p.benefits.map((b, idx) => (
                                        <span key={idx} className="bg-slate-50 text-slate-700 px-2 py-1 rounded text-[11px] font-bold border border-slate-100 truncate max-w-full">
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modale Combo Offer */}
                <ComboInfoModal isOpen={showComboModal} onClose={() => setShowComboModal(false)} />

                <ProductModal
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    product={selectedProduct}
                    onDevisClick={onDevisClick}
                />
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default ProductsOverview;