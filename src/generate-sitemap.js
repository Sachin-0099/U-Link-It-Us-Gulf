import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

// Get current directory using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

async function generateSitemap() {
  // Define your website URLs
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/services', changefreq: 'daily', priority: 0.6 },

    { url: '/protfolio', changefreq: 'monthly', priority: 0.5 },
    { url: '/contact', changefreq: 'monthly', priority: 0.4 },
    
    { url: '/blog', changefreq: 'monthly', priority: 0.3 },
  ];

  // Create a readable stream
  const links = pages.map(page => ({ url: page.url, changefreq: page.changefreq, priority: page.priority }));

  const stream = new SitemapStream({ hostname: 'https://ulinkitus.com' });

  try {
    // Generate XML string
    const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

    // Ensure public folder exists
    const publicDir = path.resolve(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write the sitemap.xml file to public folder
    fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), xmlString);

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
