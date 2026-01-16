
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..', 'src');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const IMAGES_DIR = path.join(ASSETS_DIR, 'images');

// Mapping: Source File -> { destFolder, newName }
// file paths are relative to src/assets/ OR src/assets/images/
const IMAGE_MAPPING = {
  // Hero
  'banner-sarange-4.jpg': { folder: 'hero', name: 'banner-main' },
  
  // Doors
  'porte-mixte-new.jpg': { folder: 'doors', name: 'porte-mixte' },
  'porte-alu-new-v3.jpg': { folder: 'doors', name: 'porte-alu' },
  
  // Windows
  'alu-fenetre-new.jpg': { folder: 'windows', name: 'fenetre-alu' },
  'fenetre-pvc-volet.jpg': { folder: 'windows', name: 'fenetre-pvc-volet' },
  'fenetre-1vantail.jpg': { folder: 'windows', name: 'fenetre-1vantail' },
  'fenetre-2vantaux.jpg': { folder: 'windows', name: 'fenetre-2vantaux' },
  'fenetre-3vantaux.jpg': { folder: 'windows', name: 'fenetre-3vantaux' },
  'porte-fenetre-2vantaux.png': { folder: 'windows', name: 'porte-fenetre-2vantaux' },
  'coulissant.jpg': { folder: 'windows', name: 'coulissant' },
  'compose.jpg': { folder: 'windows', name: 'compose' },

  // Shutters
  'volet-solaire.jpg': { folder: 'shutters', name: 'volet-solaire' },
  'volet-electrique.jpg': { folder: 'shutters', name: 'volet-electrique' },

  // Garage (some are in assets/images/)
  'images/garage1.jpg': { folder: 'garage', name: 'garage-1' },
  'images/garage2.jpg': { folder: 'garage', name: 'garage-2' },
  'images/garage3.jpg': { folder: 'garage', name: 'garage-3' },
  'images/garage4.jpg': { folder: 'garage', name: 'garage-4' },
  'images/garage5.png': { folder: 'garage', name: 'garage-5' },

  // Veranda (in assets/images/)
  'images/veranda1.jpg': { folder: 'veranda', name: 'veranda-1' },
  'images/veranda2.jpg': { folder: 'veranda', name: 'veranda-2' },
  'images/veranda3.jpg': { folder: 'veranda', name: 'veranda-3' },
  'images/veranda4.jpg': { folder: 'veranda', name: 'veranda-4' },
};

async function optimizeImages() {
  console.log('Starting image optimization...');

  for (const [srcFile, config] of Object.entries(IMAGE_MAPPING)) {
    let sourcePath = path.join(ASSETS_DIR, srcFile);
    
    // Check if it exists directly in assets
    if (!fs.existsSync(sourcePath)) {
        console.warn(`Warning: Source file not found at ${sourcePath}`);
        continue;
    }

    const destDir = path.join(ASSETS_DIR, config.folder);
    const destPath = path.join(destDir, `${config.name}.webp`);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    try {
      await sharp(sourcePath)
        .webp({ quality: 80 })
        .toFile(destPath);
      
      console.log(`✅ Optimized: ${srcFile} -> ${config.folder}/${config.name}.webp`);
    } catch (error) {
      console.error(`❌ Error converting ${srcFile}:`, error);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages();
