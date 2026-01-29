import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Local page configurations
const LOCAL_PAGES = [
    {
        slug: 'melun',
        city: 'Melun',
        zip: '77000',
        title: 'Fenêtres PVC & Alu à Melun | SARANGE Menuisier RGE',
        description: 'Votre menuiserie à Melun : fenêtres PVC & aluminium, volets et portes. Fabrication locale SARANGE, pose RGE. Demandez votre devis gratuit.',
    },
    {
        slug: 'senart',
        city: 'Sénart',
        zip: '77',
        title: 'Fenêtres PVC & Alu à Sénart | SARANGE Fabricant RGE',
        description: 'Fenêtres, portes et volets sur mesure à Sénart. Fabrication directe SARANGE, pose RGE, aides possibles et TVA réduite. Devis gratuit.',
    }
];

/**
 * Prerender static HTML files for local landing pages
 * This ensures Google sees correct meta tags immediately
 */
function prerenderLocalPages() {
    const distPath = path.join(__dirname, '..', 'dist');
    const indexPath = path.join(distPath, 'index.html');

    // Check if dist/index.html exists
    if (!fs.existsSync(indexPath)) {
        console.error('❌ Error: dist/index.html not found. Run "npm run build" first.');
        process.exit(1);
    }

    // Read the base index.html
    let baseHTML = fs.readFileSync(indexPath, 'utf-8');

    console.log('🚀 Starting prerendering for local pages...\n');

    LOCAL_PAGES.forEach(page => {
        console.log(`📄 Prerendering /${page.slug}...`);

        // Clone the base HTML
        let pageHTML = baseHTML;

        // Replace meta tags with page-specific values
        pageHTML = pageHTML
            // Title tag
            .replace(
                /<title>.*?<\/title>/,
                `<title>${page.title}</title>`
            )
            // Meta description
            .replace(
                /<meta name="description" content=".*?"\/>/,
                `<meta name="description" content="${page.description}"/>`
            )
            // OG Title
            .replace(
                /<meta property="og:title" content=".*?"\/>/,
                `<meta property="og:title" content="${page.title}"/>`
            )
            // OG Description
            .replace(
                /<meta property="og:description" content=".*?"\/>/,
                `<meta property="og:description" content="${page.description}"/>`
            )
            // Twitter Title
            .replace(
                /<meta property="twitter:title" content=".*?"\/>/,
                `<meta property="twitter:title" content="${page.title}"/>`
            )
            // Twitter Description
            .replace(
                /<meta property="twitter:description" content=".*?"\/>/,
                `<meta property="twitter:description" content="${page.description}"/>`
            );

        // Add canonical link if not present, or update existing one
        const canonicalURL = `https://sarange.fr/${page.slug}`;
        if (pageHTML.includes('<link rel="canonical"')) {
            pageHTML = pageHTML.replace(
                /<link rel="canonical" href=".*?"\/>/,
                `<link rel="canonical" href="${canonicalURL}"/>`
            );
        } else {
            // Insert before closing </head>
            pageHTML = pageHTML.replace(
                '</head>',
                `  <link rel="canonical" href="${canonicalURL}"/>\n</head>`
            );
        }

        // Add OG URL if not present, or update existing one
        if (pageHTML.includes('<meta property="og:url"')) {
            pageHTML = pageHTML.replace(
                /<meta property="og:url" content=".*?"\/>/,
                `<meta property="og:url" content="${canonicalURL}"/>`
            );
        } else {
            // Insert before closing </head>
            pageHTML = pageHTML.replace(
                '</head>',
                `  <meta property="og:url" content="${canonicalURL}"/>\n</head>`
            );
        }

        // Write the prerendered HTML directly as a file (e.g. dist/melun.html)
        // This avoids directory trailing slash redirects (308) on Vercel
        const outputPath = path.join(distPath, `${page.slug}.html`);
        fs.writeFileSync(outputPath, pageHTML, 'utf-8');

        console.log(`   ✅ Created: ${page.slug}.html`);
        console.log(`   📝 Title: ${page.title}`);
        console.log(`   🔗 Canonical: ${canonicalURL}\n`);
    });

    console.log('✨ Prerendering complete!\n');
    console.log('📁 Generated files:');
    LOCAL_PAGES.forEach(page => {
        console.log(`   - dist/${page.slug}.html`);
    });
}

// Run the prerendering
try {
    prerenderLocalPages();
} catch (error) {
    console.error('❌ Prerendering failed:', error);
    process.exit(1);
}
