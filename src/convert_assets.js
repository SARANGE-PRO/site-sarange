
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'assets');

async function convertImages() {
    console.log('Starting image conversion...');

    const processDirectory = async (dir) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                await processDirectory(fullPath);
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();
                if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                    // Check if it's one of the files we want to convert? 
                    // The user said "convert the used ones". 
                    // Since we deleted (or tried to delete) the unused ones, 
                    // we can convert all remaining jpg/png in assets.

                    const newPath = fullPath.replace(ext, '.webp');

                    try {
                        await sharp(fullPath)
                            .webp({ quality: 80 })
                            .toFile(newPath);
                        console.log(`Converted: ${entry.name} -> ${path.basename(newPath)}`);
                    } catch (err) {
                        console.error(`Error converting ${entry.name}:`, err);
                    }
                }
            }
        }
    };

    await processDirectory(ASSETS_DIR);
    console.log('Conversion complete!');
}

convertImages();
