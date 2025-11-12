// Script to update Alameda Post URLs to use Wayback Machine archive
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WAYBACK_PREFIX = 'https://web.archive.org/web/20231126052140';
const newsDir = path.join(__dirname, '../src/content/news');

// Read all news files
const files = fs.readdirSync(newsDir);
let updated = 0;

files.forEach(file => {
  if (!file.endsWith('.mdx')) return;
  
  const filePath = path.join(newsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if it's an Alameda Post URL that needs updating
  const urlMatch = content.match(/url:\s*(https?:\/\/[^\s]+)/);
  if (!urlMatch) return;
  
  const url = urlMatch[1].trim();
  
  // Check if it's an Alameda Post URL
  if (url.includes('alamedapost.com')) {
    // Remove query parameters for the archive URL
    const cleanUrl = url.split('?')[0];
    
    // Check if it's already a wayback URL
    if (url.includes('web.archive.org')) {
      console.log(`⚠ Already archived: ${file}`);
      return;
    }
    
    // Create the wayback URL
    const waybackUrl = `${WAYBACK_PREFIX}/${cleanUrl}`;
    
    // Replace the URL in the content
    const newContent = content.replace(
      /url:\s*https?:\/\/[^\s]+/,
      `url: ${waybackUrl}`
    );
    
    fs.writeFileSync(filePath, newContent);
    console.log(`✓ Updated: ${file}`);
    console.log(`  ${url} -> ${waybackUrl}`);
    updated++;
  }
});

console.log(`\nSummary: ${updated} Alameda Post URLs updated to use Wayback Machine`);

