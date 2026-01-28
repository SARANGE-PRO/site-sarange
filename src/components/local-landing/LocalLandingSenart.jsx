import React, { useMemo, useCallback } from "react";
import { Phone, CalendarCheck, MessageSquare, ArrowRight } from "lucide-react";

// Layout (Shared)
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

// Sections (Sénart Specific)
import LocalReviews from "./LocalReviews";
import SEOHead from "../ui/SEOHead";
import LocalHero from "./senart/LocalHero";
import OfferSection from "./senart/OfferSection";
import PartnersBanner from "./senart/TrustSection";
import ProductsOverview from "./senart/ProductsOverview";
import FAQSection from "./senart/FAQSection";
import ContactBlock from "./senart/ContactBlock";

// Modals & Banners
import AidesBanner from "../sections/AidesBanner";
import AidesModal from "../modals/AidesModal";

const LocalLandingSenart = ({ cityData }) => {
    // Data Loading
    const name = "Sénart"; // Nom de la zone
    const zip = "77";
    const phoneLink = "tel:+33986713444";

    // ✅ URL CANONIQUE
    const canonical = `https://sarange.fr/senart`;

    // ✅ META DESCRIPTION OPTIMISÉE (recommandation SEO)
    const metaDescription = `Fenêtres, portes et volets sur mesure à Sénart. Fabrication directe SARANGE, pose RGE, aides possibles et TVA réduite. Devis gratuit.`;

    // ✅ SCHEMA LOCALBUSINESS (Optimisé Agglomération)
    const schema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness", // Plus précis que LocalBusiness
        "@id": `https://sarange.fr/senart#usine`,
        name: `SARANGE - Fabricant Menuiserie Sénart`,
        description: metaDescription,
        url: canonical,
        telephone: "+33986713444",
        priceRange: "€€",

        // Adresse de l'atelier (Point central pour Sénart)
        address: {
            "@type": "PostalAddress",
            streetAddress: "28 Rue Jean Rostand",
            addressLocality: "Combs-la-Ville",
            postalCode: "77380",
            addressCountry: "FR"
        },

        // Lien Google Maps direct
        hasMap: "https://www.google.com/maps?cid=YOUR_GOOGLE_CID_HERE",

        // Zone précise (Agglo Sénart)
        areaServed: [
            { "@type": "City", name: "Combs-la-Ville" },
            { "@type": "City", name: "Lieusaint" },
            { "@type": "City", name: "Moissy-Cramayel" },
            { "@type": "City", name: "Savigny-le-Temple" },
            { "@type": "City", name: "Cesson" },
            { "@type": "City", name: "Vert-Saint-Denis" },
            { "@type": "City", name: "Nandy" },
            { "@type": "City", name: "Tigery" }
        ],

        // Services catalogue (Structure complète pour éviter erreurs GSC)
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Menuiseries PVC et Aluminium",
            itemListElement: [
                {
                    "@type": "Product",
                    name: "Fenêtres PVC à Sénart",
                    description: "Fenêtres PVC double et triple vitrage Schüco CT 70, fabrication française sur mesure",
                    image: "https://sarange.fr/assets/windows/pvc-fenetre-2vantaux.webp",
                    brand: { "@type": "Brand", "name": "Schüco" },
                    offers: {
                        "@type": "Offer",
                        price: "173.60",
                        priceCurrency: "EUR",
                        availability: "https://schema.org/InStock",
                        url: "https://sarange.fr/senart"
                    }
                },
                {
                    "@type": "Product",
                    name: "Baies vitrées coulissantes à Sénart",
                    description: "Baies vitrées coulissantes aluminium 2, 3 ou 4 vantaux, double vitrage isolant",
                    image: "https://sarange.fr/assets/windows/alu-window.webp",
                    brand: { "@type": "Brand", "name": "Schüco" },
                    offers: {
                        "@type": "Offer",
                        price: "850.00",
                        priceCurrency: "EUR",
                        availability: "https://schema.org/InStock",
                        url: "https://sarange.fr/senart"
                    }
                },
                {
                    "@type": "Product",
                    name: "Volets roulants à Sénart",
                    description: "Volets roulants aluminium isolés, motorisation Somfy filaire ou solaire",
                    image: "https://sarange.fr/assets/shutters/volet-solaire.webp",
                    brand: { "@type": "Brand", "name": "Somfy" },
                    offers: {
                        "@type": "Offer",
                        price: "250.00",
                        priceCurrency: "EUR",
                        availability: "https://schema.org/InStock",
                        url: "https://sarange.fr/senart"
                    }
                },
                {
                    "@type": "Product",
                    name: "Portes d'entrée à Sénart",
                    description: "Portes d'entrée PVC/Aluminium sécurisées, serrure multipoints, isolation A+",
                    image: "https://sarange.fr/assets/doors/porte.webp",
                    offers: {
                        "@type": "Offer",
                        price: "1407.60",
                        priceCurrency: "EUR",
                        availability: "https://schema.org/InStock",
                        url: "https://sarange.fr/senart"
                    }
                }
            ]
        }
    }), []);

    const scrollToContact = useCallback(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }, []);

    // State pour AidesModal
    const [isAidesModalOpen, setIsAidesModalOpen] = React.useState(false);

    return (
        <div className="font-sans antialiased text-slate-900 bg-white min-h-screen selection:bg-orange-500 selection:text-white">

            <SEOHead
                // ✅ TITLE TAG OPTIMISÉ (recommandation SEO - 54 char)
                title={`Fenêtres PVC & Alu à Sénart | SARANGE Fabricant RGE`}
                description={metaDescription}
                canonical={canonical}
                schema={schema}
            />

            <Navbar
                simple={true}
                localMode={true}
                city="Sénart"
                customLinks={[
                    { label: "L'Atelier", id: "hero" }, // Lien vers le haut (l'usine)
                    { label: "Réalisations", id: "avis" },
                    { label: "Produits", id: "produits" },
                    { label: "Contact", id: "contact" },
                ]}
                onOpenAides={scrollToContact}
            />

            <main>
                {/* 1. HERO : L'accroche locale */}
                <LocalHero city="Sénart" zip="77" onDevisClick={scrollToContact} phoneLink={phoneLink} />

                {/* 2. CONFIANCE : Les partenaires avant l'offre commerciale */}
                <PartnersBanner city="Sénart" />

                {/* AIDES BANNER */}
                <AidesBanner onOpenAides={() => setIsAidesModalOpen(true)} />

                {/* 3. OFFRE : Maintenant qu'ils ont confiance, on vend l'offre */}
                <OfferSection city="Sénart" />

                {/* 4. PRODUITS : Le catalogue */}
                <ProductsOverview city="Sénart" onDevisClick={scrollToContact} />

                {/* 5. AVIS : La preuve sociale */}
                <div id="avis" className="scroll-mt-20">
                    <LocalReviews city="Sénart" reviews={cityData?.reviews} />
                </div>

                {/* 6. FAQ : Réponses aux objections */}
                <FAQSection city="Sénart" />

                {/* 7. CONTACT : Conversion finale */}
                <ContactBlock city="Sénart" phoneLink={phoneLink} />
            </main>

            <Footer />

            {/* STICKY MOBILE CTA (Version "Rendez-vous") */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] flex gap-3 safe-area-pb">
                <a
                    href={phoneLink}
                    className="flex-1 bg-slate-50 text-slate-800 font-bold py-3 px-4 rounded-xl text-center hover:bg-slate-100 text-sm flex items-center justify-center gap-2 border border-slate-200 active:scale-95 transition-all"
                >
                    <Phone size={18} className="text-slate-500" />
                    <span>Appeler</span>
                </a>
                <button
                    onClick={scrollToContact}
                    className="flex-[1.5] bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-4 rounded-xl text-center hover:from-orange-500 hover:to-orange-400 text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-95 transition-all"
                >
                    <ArrowRight size={18} />
                    <span>Devis Rapide</span>
                </button>
            </div>

            {/* AIDES MODAL */}
            <AidesModal isOpen={isAidesModalOpen} onClose={() => setIsAidesModalOpen(false)} />
        </div>
    );
};

export default LocalLandingSenart;