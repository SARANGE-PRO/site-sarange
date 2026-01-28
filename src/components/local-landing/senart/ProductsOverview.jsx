import React, { useState } from "react";
import { IMAGES } from "../../../data/constants";
import { ChevronRight, ArrowRight } from "lucide-react";
import ProductModal from "../../modals/ProductModal";
import { ProductPromoTrigger, ComboInfoModal, MiniPromoBadge } from "../../promo/PromoCombo";

const ProductsOverview = ({ city, onDevisClick }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showComboModal, setShowComboModal] = useState(false);

    // ✅ DONNÉES STRICTEMENT IDENTIQUES À L'ORIGINAL
    const products = [
        {
            title: "Fenêtres PVC",
            subtitle: "Gamme Schüco",
            img: IMAGES.pvc_fenetre_2vantaux,
            alt: `Fenêtre PVC Schüco sur-mesure - Fabrication ${city}`,
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
            tag: "Design",
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
            tag: "Sécurité",
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
            tag: "Confort",
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
            subtitle: "Motorisation Incluse",
            img: IMAGES.garage1,
            alt: `Porte de garage motorisée sectionnelle ou enroulable - ${city}`,
            tag: "Pratique",
            benefits: ["100% Motorisé", "Isolation Thermique 40mm", "Gain de place"],
            specs: [
                "Types : Sectionnelle (Plafond/Latérale) ou Enroulable",
                "Panneaux acier double paroi isolés (40mm)",
                "Sécurité : Détection obstacles & Anti-relevage",
                "Moteur silencieux avec télécommandes"
            ],
            options: "Hublots, portillon intégré, digicode, teintes RAL."
        },
        {
            title: "Vérandas",
            subtitle: "Extension Habitat",
            img: IMAGES.veranda1,
            alt: `Véranda Aluminium Extension Maison - ${city}`,
            tag: "Espace",
            benefits: ["Nouvelle pièce de vie", "Lumière naturelle", "Valorisation immo"],
            specs: [
                "Structure 100% Aluminium à rupture de pont thermique",
                "Toiture : Verre sécurité ou Panneaux isolants (Phonique/Thermique)",
                "Évacuation eaux pluviales intégrée",
                "Conception bioclimatique (Hiver/Été)"
            ],
            options: "Éclairage LED intégré, volets de toiture, stores screen."
        }
    ];

    return (
        // Changement Design : Fond Gris Clair (vs Blanc sur Melun)
        <section className={`py-12 md:py-20 bg-slate-50 border-b border-slate-200 relative ${showComboModal ? 'z-[9999]' : ''}`} id="produits">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Section : Texte différent pour SEO */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 px-1 gap-4">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-none">
                            L'Expertise SARANGE à {city}
                        </h2>
                        <p className="text-slate-500 text-sm md:text-lg mt-2">
                            Menuiseries performantes fabriquées pour votre confort.
                        </p>
                    </div>

                    {/* Lien Mobile différent */}
                    <div className="md:hidden flex items-center text-xs text-orange-600 font-bold animate-pulse">
                        Voir le catalogue <ChevronRight size={14} />
                    </div>
                </div>

                {/* LISTE PRODUITS - Design Cartes : Bordure plus marquée et ombre différente */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">

                    {products.map((p, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedProduct(p)}
                            className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto snap-center group cursor-pointer bg-white rounded-2xl border border-slate-200 hover:border-orange-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="h-52 overflow-hidden relative bg-slate-100">
                                <img
                                    src={p.img}
                                    alt={p.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Badge Promo ou Standard */}
                                {(i === 0 || i === 3) ? (
                                    // MINI BADGE PROMO pour Fenêtres PVC (0) et Volets (3)
                                    <MiniPromoBadge onClick={() => setShowComboModal(true)} />
                                ) : (
                                    // Badge Standard positionné en bas à gauche
                                    <div className="absolute bottom-3 left-3 z-20">
                                        <div className={`text-[10px] font-bold px-3 py-1 rounded-full shadow-md bg-white text-slate-900`}>
                                            {p.tag}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-black text-slate-900 leading-tight">{p.title}</h3>
                                        <p className="text-xs font-bold text-orange-600 uppercase">{p.subtitle}</p>
                                    </div>
                                    <ArrowRight size={20} className="text-slate-300 group-hover:text-orange-500 transition-colors" />
                                </div>

                                {/* Bénéfices Clés */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {p.benefits.slice(0, 2).map((b, idx) => (
                                        <span key={idx} className="bg-slate-50 text-slate-600 px-2 py-1 rounded text-[10px] font-bold border border-slate-100 truncate max-w-full">
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