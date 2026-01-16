
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'assets');
const IMAGES_DIR = path.join(ASSETS_DIR, 'images');

const filesToDelete = [
    // Unused (delete both original and webp)
    'banner-sarange-2.jpg', 'banner-sarange-2.webp',
    'banner-sarange-3.jpg', 'banner-sarange-3.webp',
    'banner-sarange.jpg', 'banner-sarange.webp',
    'coulissant-new.jpg', 'coulissant-new.webp',
    'f3vt.jpg', 'f3vt.webp',
    'porte-alu-new-v2.png', 'porte-alu-new-v2.webp',
    'porte-alu-new.png', 'porte-alu-new.webp',

    // Used (delete original only)
    'banner-sarange-4.jpg',
    'porte-mixte-new.jpg',
    'porte-alu-new-v3.jpg',
    'alu-fenetre-new.jpg',
    'fenetre-pvc-volet.jpg',
    'volet-solaire.jpg',
    'volet-electrique.jpg',
    'fenetre-1vantail.jpg',
    'fenetre-2vantaux.jpg',
    'fenetre-3vantaux.jpg',
    'porte-fenetre-2vantaux.png',
    'coulissant.jpg',
    'compose.jpg'
];

const imagesSubToDelete = [
    // Used (delete original only)
    'garage1.jpg',
    'garage2.jpg',
    'garage3.jpg',
    'garage4.jpg',
    'garage5.png',
    'veranda1.jpg',
    'veranda2.jpg',
    'veranda3.jpg',
    'veranda4.jpg'
];

function deleteFiles(dir, files) {
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.existsSync(filePath)) {
            try {
                fs.unlinkSync(filePath);
                console.log(`Deleted: ${file}`);
            } catch (err) {
                console.error(`Failed to delete ${file}:`, err);
            }
        } else {
            console.log(`Skipped (not found): ${file}`);
        }
    });
}

console.log('Starting cleanup...');
deleteFiles(ASSETS_DIR, filesToDelete);
deleteFiles(IMAGES_DIR, imagesSubToDelete);
console.log('Cleanup complete.');
