import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Reconstitution de __dirname pour les ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIGURATION
// Plus besoin de Place ID complexe, juste le nom exact
const QUERY = "SARANGE Combs-la-Ville";
const HTML_FILE = path.join(__dirname, '../index.html');

async function updateReviews() {
    try {
        console.log('🔍 Recherche des avis via SerpApi...');

        const apiKey = process.env.SERPAPI_KEY;
        if (!apiKey) {
            throw new Error('La clé API SERPAPI_KEY est manquante dans les variables d\'environnement.');
        }

        // Appel API SerpApi (Google Maps)
        const url = `https://serpapi.com/search.json?engine=google_maps&q=${encodeURIComponent(QUERY)}&api_key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            throw new Error(`Erreur SerpApi : ${data.error}`);
        }

        // SerpApi retourne souvent le premier résultat dans "place_results" ou "local_results"
        // Pour Google Maps engine, c'est souvent "place_results" quand on cherche un lieu précis
        const place = data.place_results;

        if (!place) {
            throw new Error('Aucun résultat trouvé pour ce lieu.');
        }

        const newRating = place.rating; // ex: 5
        const newReviewCount = place.reviews; // ex: 28

        // Sécurité : Vérifier que ce sont bien des chiffres
        if (!newRating || !newReviewCount) {
            throw new Error('Données incomplètes (note ou nombre d\'avis manquant).');
        }

        console.log(`✅ Données trouvées sur Google : Note ${newRating} / Avis ${newReviewCount}`);

        // Lecture du fichier index.html
        let htmlContent = fs.readFileSync(HTML_FILE, 'utf8');

        // Mises à jour via Regex pour modifier le JSON-LD
        const ratingRegex = /"ratingValue":\s*"\d+(\.\d+)?"/;
        const countRegex = /"reviewCount":\s*"\d+"/;

        if (!htmlContent.match(ratingRegex) || !htmlContent.match(countRegex)) {
            throw new Error('Impossible de trouver les champs "ratingValue" ou "reviewCount" dans index.html');
        }

        let updatedHtml = htmlContent
            .replace(ratingRegex, `"ratingValue": "${newRating}"`)
            .replace(countRegex, `"reviewCount": "${newReviewCount}"`);

        if (updatedHtml !== htmlContent) {
            fs.writeFileSync(HTML_FILE, updatedHtml, 'utf8');
            console.log('🚀 index.html mis à jour avec succès !');
        } else {
            console.log('😴 Aucune mise à jour nécessaire (valeurs identiques).');
        }

    } catch (error) {
        console.error('❌ Erreur :', error.message);
        process.exit(1); // Quitter avec erreur pour que GitHub notifie
    }
}

updateReviews();
