import React, { useMemo } from "react";
import { HelpCircle, ArrowRight } from "lucide-react"; // Ajout de ArrowRight

const FAQSection = ({ city }) => {

    // ✅ ANTI-DOUBLON : Questions différentes de Melun
    const faqs = [
        {
            q: `Intervenez-vous sur toute l'agglomération Grand Paris Sud ?`,
            a: "Oui. Notre atelier étant à Combs-la-Ville, nous couvrons quotidiennement Sénart (Lieusaint, Moissy, Tigery...)."
        },
        {
            q: "Les devis sont-ils payants ?",
            a: "Non. Le chiffrage est 100% gratuit et sans engagement."
        },
        {
            q: "Faites-vous uniquement le PVC ?",
            a: "Non. Nous sommes experts Aluminium (baies, volets, vérandas) et mixtes."
        },
        {
            q: "Vos menuiseries sont-elles éligibles aux aides ?",
            a: "Absolument. Notre certification RGE vous ouvre droit à MaPrimeRénov' et la TVA à 5,5%."
        },
        {
            q: "Avez-vous un showroom local ?",
            a: "Oui, à Combs-la-Ville (Zone de l'An 2000). Visite sur rendez-vous conseillée."
        }
    ];

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
        <section id="faq" className="py-8 bg-slate-50 border-t border-slate-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-4 max-w-4xl">

                <h2 className="text-2xl font-black text-slate-900 mb-6 text-center uppercase sr-only">
                    Questions Rénovation {city}
                </h2>

                <div className="flex items-center justify-center gap-2 mb-6 text-slate-400 font-bold uppercase tracking-widest text-xs">
                    <HelpCircle size={14} /> Réponses Menuiserie {city}
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 text-sm mb-1">{f.q}</h3>
                            <p className="text-slate-500 text-xs leading-snug">{f.a}</p>
                        </div>
                    ))}
                </div>

                {/* ✅ NOUVEAU CTA AJOUTÉ ICI */}
                <div className="mt-6 text-center">
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-orange-500 hover:text-orange-600 text-slate-600 font-bold rounded-xl transition-all shadow-sm active:scale-95 text-sm"
                    >
                        <span>Une autre question ? Contactez-nous</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;