import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Loader2 } from 'lucide-react';

const AddressInput = ({ value, onChange, onSelect, placeholder = "Rechercher une adresse...", required = false }) => {
    const [query, setQuery] = useState(value || '');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Sync internal query with external value if it changes
    useEffect(() => {
        setQuery(value || '');
    }, [value]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const fetchAddresses = async (search) => {
        if (!search || search.length < 3) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(search)}&limit=5`);
            const data = await response.json();
            setSuggestions(data.features || []);
            setIsOpen(true);
        } catch (error) {
            console.error("Erreur API Adresse:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Debounce manual implementation
    useEffect(() => {
        const timer = setTimeout(() => {
            if (query && query.length >= 3) {
                // On ne fetch que si la query est différente de la value initiale (pour éviter de re-fetcher quand on clique sur une suggestion)
                // Note: C'est optionnel mais ça évite des appels API inutiles après sélection
                fetchAddresses(query);
            } else {
                setSuggestions([]);
                setIsOpen(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    const handleInputChange = (e) => {
        const newVal = e.target.value;
        setQuery(newVal);
        setIsOpen(true);
        onChange(newVal); // Propagate text change immediately
    };

    const handleSelect = (feature) => {
        const { label, postcode, city } = feature.properties;

        // 1. Mise à jour visuelle locale
        setQuery(label);

        // 2. IMPORTANT : Propager la valeur textuelle au parent pour la validation
        if (onChange) {
            onChange(label);
        }

        setSuggestions([]);
        setIsOpen(false);

        // 3. Envoyer l'objet structuré
        if (onSelect) {
            onSelect({
                fullAddress: label,
                zip: postcode,
                city: city
            });
        }
    };

    return (
        <div ref={wrapperRef} className="relative w-full">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    required={required}
                    className="tap-target w-full p-3 sm:p-4 pl-10 sm:pl-12 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none text-sm font-light placeholder:text-slate-400 transition-all"
                    autoComplete="off"
                />
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    {isLoading ? <Loader2 size={18} className="animate-spin text-orange-500" /> : <MapPin size={18} />}
                </div>
            </div>

            {/* Suggestions Dropdown */}
            {isOpen && suggestions.length > 0 && (
                <div className="absolute z-[9999] w-full mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <ul className="max-h-60 overflow-y-auto">
                        {suggestions.map((feature, index) => (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(feature)}
                                    className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors flex items-start gap-3 border-b border-slate-50 last:border-0"
                                >
                                    <MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-slate-800 text-sm">{feature.properties.label}</p>
                                        <p className="text-xs text-slate-500">{feature.properties.postcode} {feature.properties.city}</p>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-slate-50 px-3 py-1.5 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400">
                        <span>Sélectionnez une adresse</span>
                        <span className="font-bold">data.gouv.fr</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddressInput;