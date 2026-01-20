import React from 'react';
import { Star, Quote, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "steeven lopez",
        date: "Décembre 2025",
        rating: 5,
        text: "Prix très compétitif et pose impeccable, je recommande",
    },
    {
        name: "Carolane Dubocage",
        date: "Avril 2025",
        rating: 5,
        text: "Pose d'une porte fenêtre, fenêtre et porte d'entrée. Tout c'est très bien passé, équipe professionnelle et au top ! Merci à vous",
    },
    {
        name: "Karine Ymar",
        date: "Décembre 2024",
        rating: 5,
        text: "Bon rapport qualité prix. Délai de fabrication rapide. Fenêtre de qualité. Pose faite avec professionnalisme. Je recommande",
    }
];

const ReviewsSection = () => {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-100 relative overflow-hidden">

            {/* Fond déco */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 mb-4 transition-transform hover:scale-105 cursor-default">
                        {/* Logo Google (SVG inline simple) */}
                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="font-bold text-slate-700 text-sm">5/5 Excellence Client</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">La satisfaction de nos clients<br />est notre meilleure publicité.</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Vérifiez par vous-même : nos clients témoignent de notre savoir-faire et de notre accompagnement.</p>
                </div>

                {/* Grille d'avis */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            <Quote className="absolute top-6 right-6 text-orange-100 w-8 h-8 fill-orange-50" />

                            {/* Étoiles */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, j) => (
                                    <Star key={j} size={16} className="fill-orange-400 text-orange-400" />
                                ))}
                            </div>

                            {/* Texte */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 italic flex-grow">"{review.text}"</p>

                            {/* Auteur */}
                            <div className="flex items-center gap-3 border-t border-slate-50 pt-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs shadow-inner uppercase">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm leading-none mb-1">{review.name}</p>
                                    <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase font-bold tracking-wide">
                                        <span className="text-orange-500">★</span> Google Review • {review.date}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lien Google */}
                <div className="text-center mt-12">
                    <a
                        href="https://www.google.com/search?q=sarange+menuiserie+avis"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 text-sm hover:text-slate-600 transition-colors"
                    >
                        <span>Voir l'ensemble des avis</span>
                        <ArrowRight size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
