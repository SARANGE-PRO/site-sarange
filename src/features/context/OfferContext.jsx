import React, { createContext, useContext, useState } from 'react';

// Créer le contexte
const OfferContext = createContext();

// Hook personnalisé pour utiliser le contexte facilement
export const useOffer = () => {
    const context = useContext(OfferContext);
    if (!context) {
        throw new Error('useOffer doit être utilisé à l\'intérieur d\'un OfferProvider');
    }
    return context;
};

// Provider qui wrappera l'application
export const OfferProvider = ({ children }) => {
    const [activePromo, setActivePromo] = useState(null);

    // Fonction pour définir une nouvelle promo
    const setPromo = (promoCode, promoLabel, eligibleProducts) => {
        setActivePromo({
            promoCode,
            promoLabel,
            eligibleProducts,
            timestamp: Date.now()
        });
    };

    // Fonction pour effacer la promo
    const clearPromo = () => {
        setActivePromo(null);
    };

    const value = {
        activePromo,
        setPromo,
        clearPromo
    };

    return (
        <OfferContext.Provider value={value}>
            {children}
        </OfferContext.Provider>
    );
};

export default OfferContext;
