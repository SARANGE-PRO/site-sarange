import React from 'react';
import { MapPin } from 'lucide-react';

const LocalSection = () => {
    return (
        <section id="zone-intervention" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                    Zone d'intervention en Île-de-France
                </h2>
                <p className="text-center text-xl text-slate-600 mb-12">
                    Basés à <strong>Combs-la-Ville (77380)</strong> en Seine-et-Marne,
                    nous intervenons dans toute l'Île-de-France.
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Google Maps */}
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.123456789!2d2.558!3d48.656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM5JzIxLjYiTiAywrAzMyczMi44IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="SARANGE - Combs-la-Ville"
                        ></iframe>
                    </div>

                    {/* Départements */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <MapPin className="mr-3 text-orange-500" size={32} />
                            Nos zones d'intervention
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { num: '75', name: 'Paris' },
                                { num: '77', name: 'Seine-et-Marne' },
                                { num: '78', name: 'Yvelines' },
                                { num: '91', name: 'Essonne' },
                                { num: '92', name: 'Hauts-de-Seine' },
                                { num: '93', name: 'Seine-Saint-Denis' },
                                { num: '94', name: 'Val-de-Marne' },
                                { num: '95', name: "Val-d'Oise" }
                            ].map(dept => (
                                <div key={dept.num} className="flex items-center bg-slate-50 p-3 rounded-lg border border-slate-200 hover:border-orange-400 transition-colors">
                                    <span className="font-black text-2xl text-orange-500 mr-3">{dept.num}</span>
                                    <span className="text-sm font-medium">{dept.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocalSection;
