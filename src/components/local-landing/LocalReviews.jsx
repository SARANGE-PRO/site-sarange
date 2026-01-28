import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const defaultReviews = [
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

const LocalReviews = ({ city, reviews = defaultReviews }) => {
    return (
        <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100 relative overflow-hidden">

            {/* Fond déco subtil */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                {/* En-tête Compact */}
                <div className="text-center mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200 mb-3 transition-transform hover:scale-105 cursor-default">
                        {/* Logo Google simplifié */}
                        <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="font-bold text-slate-700 text-xs md:text-sm">5/5 Excellence Client</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight">Avis Clients</h2>
                    <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">Découvrez les retours d'expérience.</p>
                </div>

                {/* Grille d'avis Mobile-Friendly (Scroll horizontal sur mobile, Grille sur desktop) */}
                <div className="flex overflow-x-auto pb-6 md:grid md:grid-cols-3 gap-4 md:gap-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-w-[280px] w-[85vw] md:w-auto snap-center flex-shrink-0"
                        >
                            <Quote className="absolute top-4 right-4 text-orange-100 w-6 h-6 fill-orange-50" />

                            {/* Étoiles */}
                            <div className="flex gap-0.5 mb-3">
                                {[...Array(review.rating)].map((_, j) => (
                                    <Star key={j} size={14} className="fill-orange-400 text-orange-400" />
                                ))}
                            </div>

                            {/* Texte */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-4 italic flex-grow line-clamp-4 md:line-clamp-none">"{review.text}"</p>

                            {/* Auteur Compact */}
                            <div className="flex items-center gap-3 border-t border-slate-50 pt-3 mt-auto">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-[10px] shadow-inner uppercase shrink-0">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-slate-900 text-xs truncate">{review.name}</h3>
                                    <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase font-bold tracking-wide">
                                        <span className="text-orange-500">G</span> Avis • {review.date}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lien Google Discret */}
                <div className="text-center mt-6 md:mt-8">
                    <a
                        href="https://www.google.com/search?q=sarange+menuiserie+avis"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-400 text-xs font-medium hover:text-orange-500 transition-colors group"
                    >
                        <span>Voir tous les avis Google</span>
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
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

export default LocalReviews;
