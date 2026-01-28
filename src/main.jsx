import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import LocalLandingPage from './components/local-landing/LocalLandingPage.jsx';
import LocalLandingSenart from './components/local-landing/LocalLandingSenart.jsx';

import { OfferProvider } from './features/context/OfferContext';

import { cities } from './data/cities/index.js';

// Nettoyage de l'URL : on récupère le premier segment après le slash
// ex: "/melun" -> "melun", "/melun/" -> "melun"
const path = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();

// Vérification si le chemin correspond à une ville connue
const cityData = cities[path];

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {cityData && path !== 'senart' ? (
            <OfferProvider>
                <LocalLandingPage cityData={cityData} />
            </OfferProvider>
        ) : (
            <App />
        )}
    </React.StrictMode>,
)
