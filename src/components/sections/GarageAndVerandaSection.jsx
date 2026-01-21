import React, { useState, useEffect } from 'react';
import { ChevronRight, Home, CheckCircle, Truck, Shield } from 'lucide-react';
import { IMAGES } from '../../data/constants';
import SectionTitle from '../ui/SectionTitle';
import VerandaProductModal from '../modals/VerandaProductModal';
import GarageProductModal from '../modals/GarageProductModal';

const GarageAndVerandaSection = () => {
    const [showVerandaModal, setShowVerandaModal] = useState(false);
    const [showGarageModal, setShowGarageModal] = useState(false);

    const [verandaIndex, setVerandaIndex] = useState(0);
    const [garageIndex, setGarageIndex] = useState(0);

    const verandaImages = [IMAGES.veranda1, IMAGES.veranda2, IMAGES.veranda3, IMAGES.veranda4];
    const garageImages = [IMAGES.garage1, IMAGES.garage2, IMAGES.garage3, IMAGES.garage4, IMAGES.garage5];

    useEffect(() => {
        const intervalVeranda = setInterval(() => {
            setVerandaIndex((prev) => (prev + 1) % verandaImages.length);
        }, 4000);

        const intervalGarage = setInterval(() => {
            setGarageIndex((prev) => (prev + 1) % garageImages.length);
        }, 3500);

        return () => {
            clearInterval(intervalVeranda);
            clearInterval(intervalGarage);
        };
    }, []);

    return (
        <section id="garage" className="py-24 bg-slate-50">
            <VerandaProductModal isOpen={showVerandaModal} onClose={() => setShowVerandaModal(false)} />
            <GarageProductModal isOpen={showGarageModal} onClose={() => setShowGarageModal(false)} />

            <div className="container mx-auto px-4">
                {/* --- TITRE DE SECTION MIS À JOUR --- */}
                <SectionTitle subtitle="Agrandir et protéger votre espace">
                    Vérandas & Portes de Garage
                </SectionTitle>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* --- CARTE VÉRANDA --- */}
                    <div
                        onClick={() => setShowVerandaModal(true)}
                        className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-2xl hover:border-green-500/30 transition-all duration-300 relative"
                    >
                        <div className="grid md:grid-cols-2 h-full">
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                {verandaImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        loading="lazy"
                                        alt={`Véranda sur-mesure ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${index === verandaIndex ? 'opacity-100 scale-100 group-hover:scale-105' : 'opacity-0 scale-110'
                                            }`}
                                    />
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent"></div>

                                {/* Titre Mobile Véranda */}
                                <div className="absolute bottom-6 left-6 text-white md:hidden">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Home size={18} className="text-green-400" />
                                        <span className="text-xs font-bold uppercase tracking-wider text-green-200">Extension</span>
                                    </div>
                                    <h3 className="text-2xl font-bold leading-tight">Vérandas</h3>
                                </div>

                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                                    {verandaImages.map((_, index) => (
                                        <div key={index} className={`h-1.5 rounded-full transition-all duration-300 ${index === verandaIndex ? 'bg-white w-6' : 'bg-white/40 w-1.5'}`} />
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col justify-center bg-white relative">
                                <div className="hidden md:block mb-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-green-100 text-green-700 p-2 rounded-lg"><Home size={20} /></span>
                                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Nouveauté</span>
                                    </div>
                                    {/* Titre Desktop Véranda */}
                                    <h3 className="text-3xl font-black text-slate-900">Vérandas</h3>
                                </div>

                                <p className="text-lg font-medium text-slate-700 mb-4 leading-relaxed">
                                    Valorisez votre patrimoine. Ajoutez des m² habitables sans permis de construire complexe.
                                </p>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-start text-sm text-slate-600">
                                        <CheckCircle size={18} className="text-green-500 mr-3 shrink-0 mt-0.5" />
                                        <span>Structure Aluminium <strong>Schüco RE2020</strong></span>
                                    </div>
                                    <div className="flex items-start text-sm text-slate-600">
                                        <CheckCircle size={18} className="text-green-500 mr-3 shrink-0 mt-0.5" />
                                        <span>Toiture isolante haute performance ou vitrée</span>
                                    </div>
                                    <div className="flex items-start text-sm text-slate-600">
                                        <CheckCircle size={18} className="text-green-500 mr-3 shrink-0 mt-0.5" />
                                        <span>Solution clé en main (Métrage, Fabrication, Pose)</span>
                                    </div>
                                </div>

                                <button className="self-start text-slate-900 font-bold flex items-center bg-slate-100 hover:bg-green-50 hover:text-green-700 px-5 py-3 rounded-xl transition-all group-hover:shadow-md">
                                    Découvrir les modèles <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- CARTE GARAGE --- */}
                    <div
                        onClick={() => setShowGarageModal(true)}
                        className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden group flex flex-col cursor-pointer hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300"
                    >
                        <div className="relative h-56 overflow-hidden shrink-0">
                            {garageImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    loading="lazy"
                                    alt={`Porte de garage ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${index === garageIndex ? 'opacity-100 scale-100 group-hover:scale-105' : 'opacity-0 scale-110'
                                        }`}
                                />
                            ))}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 flex items-center shadow-md z-10 border border-slate-100">
                                <Truck size={14} className="mr-1.5 text-orange-500" /> Motorisation incluse
                            </div>
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                                {garageImages.map((_, index) => (
                                    <div key={index} className={`h-1 rounded-full transition-all duration-300 ${index === garageIndex ? 'bg-white w-4' : 'bg-white/50 w-1'}`} />
                                ))}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-3">
                                {/* Titre Garage */}
                                <h3 className="text-xl font-bold text-slate-900">Portes de Garage</h3>
                                <Shield size={20} className="text-orange-500" />
                            </div>

                            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                                <strong>100% sur-mesure & sécurisées.</strong><br />
                                Sectionnelle, latérale ou enroulable. Isolation thermique renforcée et motorisation Somfy.
                            </p>

                            <button className="w-full py-3 border-2 border-slate-100 rounded-xl text-slate-600 font-bold group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all text-sm flex justify-center items-center">
                                Voir les configurations
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GarageAndVerandaSection;