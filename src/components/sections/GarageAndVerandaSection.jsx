import React, { useState, useEffect } from 'react';
import { ChevronRight, Home, CheckCircle, Truck } from 'lucide-react';
import { IMAGES } from '../../data/constants';
import SectionTitle from '../ui/SectionTitle';
import VerandaProductModal from '../modals/VerandaProductModal';
import GarageProductModal from '../modals/GarageProductModal';
import { Ruler } from 'lucide-react';


const GarageAndVerandaSection = () => {
    const [showVerandaModal, setShowVerandaModal] = useState(false);
    const [showGarageModal, setShowGarageModal] = useState(false);

    // Etats pour les slideshows
    const [verandaIndex, setVerandaIndex] = useState(0);
    const [garageIndex, setGarageIndex] = useState(0);

    const verandaImages = [IMAGES.veranda1, IMAGES.veranda2, IMAGES.veranda3, IMAGES.veranda4];
    const garageImages = [
        IMAGES.garage1,
        IMAGES.garage2,
        IMAGES.garage3,
        IMAGES.garage4,
        IMAGES.garage5
    ];

    // Auto-rotate slideshows
    useEffect(() => {
        const intervalVeranda = setInterval(() => {
            setVerandaIndex((prev) => (prev + 1) % verandaImages.length);
        }, 4000);

        const intervalGarage = setInterval(() => {
            setGarageIndex((prev) => (prev + 1) % garageImages.length);
        }, 3500); // Légèrement décalé

        return () => {
            clearInterval(intervalVeranda);
            clearInterval(intervalGarage);
        };
    }, []);

    return (
        <section id="garage" className="py-24 bg-slate-50">
            {/* Modales */}
            <VerandaProductModal isOpen={showVerandaModal} onClose={() => setShowVerandaModal(false)} />
            <GarageProductModal isOpen={showGarageModal} onClose={() => setShowGarageModal(false)} />

            <div className="container mx-auto px-4">
                <SectionTitle subtitle="Agrandir et protéger votre espace">Projets d'Envergure & Compléments</SectionTitle>
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* VÉRANDA avec Slideshow */}
                    <div
                        onClick={() => setShowVerandaModal(true)}
                        className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
                    >
                        <div className="grid md:grid-cols-2 h-full">
                            {/* Zone Image avec Slideshow */}
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                {verandaImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        loading="lazy"
                                        alt={`Véranda extension ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === verandaIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                            }`}
                                    />
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r"></div>
                                <div className="absolute bottom-6 left-6 text-white md:hidden"><h3 className="text-2xl font-bold">Vérandas & Extensions</h3></div>



                                {/* Indicateurs de slide (Centrés) */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                                    {verandaImages.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-all ${index === verandaIndex ? 'bg-white w-6' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Zone Texte */}
                            <div className="p-8 flex flex-col justify-center">
                                <div className="hidden md:block mb-4">
                                    <div className="bg-green-100 text-green-700 p-2 rounded-lg inline-block mb-3"><Home size={24} /></div>
                                    <h3 className="text-2xl font-bold text-slate-900">Vérandas & Extensions</h3>
                                </div>
                                <p className="text-lg font-semibold text-green-700 mb-4">Plus qu'une véranda, une extension de votre maison.</p>
                                <p className="text-slate-600 mb-6">Ajoutez des m² habitables sans permis de construire. Valorisez votre patrimoine avec une solution économique et rapide.</p>
                                <div className="space-y-2 mb-8">
                                    <div className="flex items-center text-sm text-slate-700"><CheckCircle size={16} className="text-green-500 mr-2" /> Structure Aluminium Schüco RE2020</div>
                                    <div className="flex items-center text-sm text-slate-700"><CheckCircle size={16} className="text-green-500 mr-2" /> Toiture Isolante ou Vitrée</div>
                                    <div className="flex items-center text-sm text-slate-700"><CheckCircle size={16} className="text-green-500 mr-2" /> Plus-value immobilière immédiate</div>
                                </div>
                                <button className="text-green-600 font-bold flex items-center hover:text-green-800 transition-colors group-hover:translate-x-1 transform transition-transform">
                                    Voir tous les détails <ChevronRight size={18} className="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* GARAGE avec Slideshow */}
                    <div
                        onClick={() => setShowGarageModal(true)}
                        className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden group flex flex-col cursor-pointer hover:shadow-xl transition-all"
                    >
                        <div className="relative h-48 overflow-hidden shrink-0">
                            {/* Badge Direct Fabricant */}

                            {/* Slideshow Garage */}
                            {garageImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    loading="lazy"
                                    alt={`Porte de garage ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === garageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                        }`}
                                />
                            ))}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center shadow-sm z-10">
                                <Truck size={12} className="mr-1" /> Motorisé
                            </div>



                            {/* Indicateurs de slide (Centrés) */}
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                                {garageImages.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-1.5 h-1.5 rounded-full transition-all ${index === garageIndex ? 'bg-white w-4' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-8 flex flex-col h-full bg-slate-50/10 hover:bg-slate-50/50 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Portes de Garage</h3>
                            <p className="text-slate-500 text-sm mb-6 flex-grow">
                                100 % sur-mesure, motorisées. Sectionnelle, latérale, enroulable ou battante. Isolation renforcée et sécurité maximale.
                            </p>
                            <button className="w-full py-2 border border-slate-200 rounded-lg text-slate-600 font-bold group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800 transition-all text-sm">
                                Voir les modèles
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default GarageAndVerandaSection;