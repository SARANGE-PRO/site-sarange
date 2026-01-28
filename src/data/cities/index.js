import melunData from './melun.json';
import senartData from './senart.json';

// Registre central des villes
// Clé = Slug URL (ex: "melun" pour sarange.fr/melun)
// Valeur = Données JSON de la ville
export const cities = {
    'melun': melunData,
    'senart': senartData,
    // Pour ajouter une ville : importer le JSON et l'ajouter ici
    // 'brie-comte-robert': brieData,
};
