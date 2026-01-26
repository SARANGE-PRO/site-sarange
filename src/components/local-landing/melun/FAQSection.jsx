import React, { useMemo } from "react";
import { HelpCircle } from "lucide-react";

const FAQSection = ({ city }) => {

    const faqs = [
        {
            q: `Pose à ${city} ou fourniture seule ?`,
            a: "Clé en main : Fabrication + Pose par nos équipes. Fourniture seule possible (livraison chantier)."
        },
        {
            q: "Quels sont les délais ?",
            a: "4 semaines (PVC blanc / Alu standard). +2 semaines pour options (cintré, couleur...)."
        },
        {
            q: "Éligibilité aux aides (MaPrimeRénov') ?",
            a: "OUI. RGE Qualibat actif : Aides + TVA réduite (5,5%) possibles."
        },
        {
            q: "Comment se passe le devis ?",
            a: "1. Estimation gratuite. 2. Déplacement pour métré précis si le prix vous convient."
        },
        {
            q: "Zone d'intervention ?",
            a: `Sur ${city}, ses alentours et tout le département (77).`
        }
    ];

    // ✅ SCHEMA FAQ (Intact pour le SEO)
    const faqSchema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    }), [city]);

    return (
        // ✅ AJOUT DE L'ID "faq" ICI POUR LE SCROLL
        <section id="faq" className="py-8 bg-slate-50 border-t border-slate-200">
            {/* Injection Schema SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-4 max-w-4xl">

                {/* H2 SEO Section */}
                <h2 className="text-2xl font-black text-slate-900 mb-6 text-center uppercase sr-only">
                    Questions Fréquentes - Menuiserie à {city}
                </h2>

                {/* Titre Ultra Compact */}
                <div className="flex items-center justify-center gap-2 mb-6 text-slate-400 font-bold uppercase tracking-widest text-xs">
                    <HelpCircle size={14} /> Questions Fréquentes {city}
                </div>

                {/* Grille Compacte */}
                <div className="grid md:grid-cols-2 gap-3">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 text-sm mb-1">{f.q}</h3>
                            <p className="text-slate-500 text-xs leading-snug">{f.a}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;