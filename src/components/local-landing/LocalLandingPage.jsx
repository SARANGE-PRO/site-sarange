import React, { useMemo, useCallback } from "react";
import { Phone, ArrowRight } from "lucide-react";

// Layout
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

// Sections
import LocalReviews from "./LocalReviews";
import SEOHead from "./melun/SEOHead";
import LocalHero from "./melun/LocalHero";
import OfferSection from "./melun/OfferSection";
import PartnersBanner from "./melun/TrustSection";
import ProductsOverview from "./melun/ProductsOverview";
import FAQSection from "./melun/FAQSection";
import ContactBlock from "./melun/ContactBlock";

const LocalLandingMelun = ({ cityData }) => {
    // Data Loading
    const { name = "Melun", zip = "77000", phoneLink = "tel:+33986713444", geo } = cityData || {};

    // SEO setup
    // ✅ URL OPTIMALE (No trailing slash)
    // Correction : Utilisation du format racine (sarange.fr/melun) comme défini dans le routage
    const canonical = useMemo(() => `https://sarange.fr/${String(name).toLowerCase()}`, [name]);

    // ✅ META DESCRIPTION OPTIMALE (155 char)
    const metaDescription = useMemo(() => {
        return `🏠 Fenêtres PVC & Alu sur mesure à ${name} et alentours (${zip}). Fabricant RGE Seine-et-Marne. Volets, portes. Devis gratuit 24h. ☎️ 09 86 71 34 44`;
    }, [name, zip]);

    // ✅ SCHEMA LOCALBUSINESS MAXIMAL 2026
    const schema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://sarange.fr/${name.toLowerCase()}#business`,
        name: `SARANGE - Fenêtres PVC & Alu à ${name}`,
        description: `Fabricant et installateur de fenêtres PVC & Aluminium, volets roulants et portes d'entrée à ${name} (${zip}). Certification RGE Qualibat, fabrication sur-mesure depuis notre atelier de Combs-la-Ville.`,

        // Images (obligatoire)
        image: [
            "https://sarange.fr/assets/hero/banner-sarange-4.webp",
            "https://sarange.fr/assets/logo-sarange.png"
        ],

        // URLs
        url: `https://sarange.fr/${name.toLowerCase()}`,

        // Contact (NAP consistency)
        telephone: "+33986713444",
        email: "contact@sarange.fr",

        // Prix indicatif
        priceRange: "€€-€€€",

        // Adresse EXACTE (NAP)
        address: {
            "@type": "PostalAddress",
            streetAddress: "28 Rue Jean Rostand",
            addressLocality: "Combs-la-Ville",
            addressRegion: "Île-de-France",
            postalCode: "77380",
            addressCountry: "FR"
        },

        // Géolocalisation GPS
        geo: {
            "@type": "GeoCoordinates",
            latitude: 48.6630,
            longitude: 2.5594
        },

        // Horaires (impact GBP signals 32%)
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "12:00"
            }
        ],

        // Zone d'intervention étendue
        areaServed: [
            { "@type": "City", name: name },
            { "@type": "City", name: "Dammarie-lès-Lys" },
            { "@type": "City", name: "Le Mée-sur-Seine" },
            { "@type": "City", name: "Vaux-le-Pénil" },
            { "@type": "City", name: "Rubelles" },
            { "@type": "City", name: "La Rochette" },
            { "@type": "State", name: "Seine-et-Marne" }
        ],

        // Réseaux sociaux (citation signals 13%)
        sameAs: [
            "https://www.facebook.com/p/Sarange-Artisan-Menuiserie-PVC-ALU-100079614376777/",
            "https://fr.linkedin.com/company/onsarange"
        ],

        // Expertise (AI visibility 24%)
        knowsAbout: [
            "Menuiserie PVC",
            "Menuiserie Aluminium",
            "Fenêtres double vitrage",
            "Volets roulants motorisés",
            "Portes d'entrée sécurisées",
            "Isolation thermique",
            "Rénovation énergétique",
            "Certification RGE"
        ],

        // Reviews Global (LocalBusiness matches index.html)
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "28",
            bestRating: "5"
        },

        // Services catalogue (Structure corrected: Product -> offers)
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Menuiseries PVC et Aluminium",
            itemListElement: [
                {
                    "@type": "Product",
                    name: `Fenêtres PVC sur mesure à ${name}`,
                    description: "Fenêtres PVC double et triple vitrage Schüco CT 70, fabrication française",
                    image: "https://sarange.fr/assets/windows/pvc-fenetre-2vantaux.webp",
                    brand: { "@type": "Brand", "name": "Schüco" },
                    offers: {
                        "@type": "Offer",
                        price: "173.60",
                        priceCurrency: "EUR",
                        availability: "https://schema.org/InStock",
                        url: `https://sarange.fr/${String(name).toLowerCase()}`
                    }
                },
                {
                    "@type": "Product",
                    name: `Baies vitrées aluminium à ${name}`,
                    description: "Baies coulissantes et fixes en aluminium Schüco",
                    image: "https://sarange.fr/assets/windows/alu-window.webp",
                    brand: { "@type": "Brand", "name": "Schüco" },
                    offers: {
                        "@type": "Offer",
                        price: "850.00",
                        priceCurrency: "EUR",
                        availability: "https://schema.org/InStock",
                        url: `https://sarange.fr/${String(name).toLowerCase()}`
                    }
                },
                {
                    "@type": "Product",
                    name: `Volets roulants motorisés à ${name}`,
                    description: "Volets roulants aluminium isolés, motorisation Somfy",
                    image: "https://sarange.fr/assets/shutters/volet-solaire.webp",
                    brand: { "@type": "Brand", "name": "Somfy" },
                    offers: {
                        "@type": "Offer",
                        price: "250.00",
                        priceCurrency: "EUR",
                        availability: "https://schema.org/InStock",
                        url: `https://sarange.fr/${String(name).toLowerCase()}`
                    }
                },
                {
                    "@type": "Product",
                    name: `Portes d'entrée PVC & Alu à ${name}`,
                    description: "Portes d'entrée sécurisées, serrure multipoints, isolation A+",
                    image: "https://sarange.fr/assets/doors/porte.webp",
                    offers: {
                        "@type": "Offer",
                        price: "1407.60",
                        priceCurrency: "EUR",
                        availability: "https://schema.org/InStock",
                        url: `https://sarange.fr/${String(name).toLowerCase()}`
                    }
                }
            ]
        }
    }), [name, zip]);

    const scrollToContact = useCallback(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div className="font-sans antialiased text-secondary-900 bg-white min-h-screen selection:bg-orange-100 selection:text-orange-900">
            <SEOHead
                // ✅ TITLE TAG OPTIMAL (60 char)
                title={`Fenêtres PVC & Alu à ${name} (${zip}) | Fabricant RGE 77`}
                description={metaDescription}
                canonical={canonical}
                schema={schema}
            />

            <Navbar
                simple={true}
                localMode={true}
                city={`${name} (${zip})`}
                customLinks={[
                    { label: "Offre", id: "hero" },
                    { label: "Produits", id: "produits" },
                    { label: "Avis", id: "avis" },
                    { label: "Contact", id: "contact" },
                ]}
                onOpenAides={scrollToContact}
            />

            <main>
                <LocalHero city={name} zip={zip} onDevisClick={scrollToContact} phoneLink={phoneLink} />

                <OfferSection city={name} />

                <PartnersBanner city={name} />

                <ProductsOverview city={name} onDevisClick={scrollToContact} />

                {/* REAL Reviews Section */}
                <div id="avis">
                    <LocalReviews city={name} />
                </div>

                <FAQSection city={name} />

                <ContactBlock city={name} phoneLink={phoneLink} />
            </main>

            <Footer />

            {/* STICKY BOTTOM BAR */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-4 py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] flex gap-3 safe-area-pb">
                <a
                    href={phoneLink}
                    className="flex-1 bg-slate-100 text-slate-900 font-bold py-3 px-4 rounded-xl text-center hover:bg-slate-200 text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                    <Phone size={18} /> Appeler
                </a>
                <button
                    onClick={scrollToContact}
                    className="flex-[1.5] bg-orange-500 text-white font-bold py-3 px-4 rounded-xl text-center hover:bg-orange-600 text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
                >
                    Devis Gratuit <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default LocalLandingMelun;
