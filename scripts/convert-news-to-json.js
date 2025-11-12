// Script to convert all news MDX files to a single JSON file
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsDir = path.join(__dirname, '../src/content/news');
const outputFile = path.join(__dirname, '../src/content/news.json');

// Read all MDX files
const files = fs.readdirSync(newsDir).filter(f => f.endsWith('.mdx'));
const newsEntries = [];

files.forEach(file => {
  const filePath = path.join(newsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Parse frontmatter
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.log(`⚠ Skipping ${file}: No frontmatter found`);
    return;
  }
  
  const frontmatter = frontmatterMatch[1];
  const entry = {};
  
  // Parse each line of frontmatter
  frontmatter.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      let parsedValue = value.trim();
      
      // Remove quotes if present
      if (parsedValue.startsWith('"') && parsedValue.endsWith('"')) {
        parsedValue = parsedValue.slice(1, -1);
      }
      
      // Parse boolean
      if (parsedValue === 'true') parsedValue = true;
      if (parsedValue === 'false') parsedValue = false;
      
      entry[key] = parsedValue;
    }
  });
  
  // Skip placeholder entries without proper titles
  if (entry.title && !entry.title.includes('Article from') && entry.title !== 'Article from Alameda Post') {
    newsEntries.push({
      id: newsEntries.length + 1,
      title: entry.title,
      date: entry.date,
      url: entry.url,
      publication: entry.publication,
      category: entry.category || null,
      description: entry.description || null,
      featured: entry.featured || false,
    });
  } else {
    console.log(`⚠ Skipping placeholder: ${file}`);
  }
});

// Sort by date (newest first)
newsEntries.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
});

// Write JSON file
fs.writeFileSync(outputFile, JSON.stringify(newsEntries, null, 2));
console.log(`\n✓ Created news.json with ${newsEntries.length} entries`);

