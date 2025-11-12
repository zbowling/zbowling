// Script to extract titles and dates from news URLs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Known titles and dates from web search and existing content
const knownMetadata = {
  'https://www.wired.com/2013/04/why-wwdc-is-too-big/': {
    title: "How Apple's Developer Conference Grew Too Big for Its Own Developers",
    date: '2013-04-26'
  },
  'https://www.wired.com/2012/02/storyboard-hackathons/': {
    title: 'Storyboard: Hackathons',
    date: '2012-02-01'
  },
  'https://www.theverge.com/google/2017/11/20/16681556/apple-swift-language-google-fuchsia-os-open-source': {
    title: "Google adds support for Apple's Swift programming language to Fuchsia",
    date: '2017-11-20'
  },
  'https://9to5google.com/2018/04/13/fuchsia-friday-the-dream-team-behind-googles-new-os/': {
    title: "Fuchsia Friday: The dream team behind Google's new OS",
    date: '2018-04-13'
  },
  'https://www.sfchronicle.com/bayarea/article/Ballot-battle-in-town-of-Alameda-pits-multiunit-15619564.php': {
    title: 'Ballot battle in town of Alameda pits multiunit housing against single-family homes',
    date: '2020-10-01'
  },
  'https://venturebeat.com/2016/08/18/google-secretly-acqui-hired-mobile-app-development-startup-apportable/': {
    title: "Google secretly acqui-hired mobile app development startup Apportable",
    date: '2016-08-18'
  },
  'https://www.eastbaytimes.com/2021/04/01/too-militaristic-alameda-police-to-keep-armored-vehicle/': {
    title: "Too militaristic: Alameda police to keep armored vehicle",
    date: '2021-04-01'
  },
  'https://www.eastbaytimes.com/2021/08/04/future-alameda-wellness-and-medical-respite-center-moves-forward/': {
    title: "Future Alameda wellness and medical respite center moves forward",
    date: '2021-08-04'
  },
  'https://www.sfchronicle.com/bayarea/article/Bay-Area-cities-face-long-odds-in-fighting-16336003.php': {
    title: "Bay Area cities face long odds in fighting state housing mandates",
    date: '2021-09-15'
  },
  'https://www.wired.com/story/google-meta-big-tech-is-bad-at-firing/': {
    title: "Google, Meta, Big Tech Is Bad at Firing",
    date: '2023-01-20'
  },
  'https://www.businessinsider.com/google-layoffs-employees-discord-emotional-support-financial-advice-job-2023-2': {
    title: "Google layoffs: Employees turn to Discord for emotional support, financial advice",
    date: '2023-02-01'
  },
  'https://www.ktvu.com/news/rescue-dog-benny-dies-in-alameda-after-eating-cupcakes-with-xylitol': {
    title: "Rescue dog Benny dies in Alameda after eating cupcakes with xylitol",
    date: '2023-03-15'
  },
  'https://www.androidauthority.com/google-adds-support-for-apples-swift-programming-language-to-fuchsia-816381/': {
    title: "Google adds support for Apple's Swift programming language to Fuchsia",
    date: '2017-11-20'
  },
  'https://www.osnews.com/story/30094/google-adds-fuchsia-support-to-apples-swift/': {
    title: "Google adds Fuchsia support to Apple's Swift",
    date: '2017-11-20'
  },
  'https://www.wired.com/2012/02/ff_hackathons/': {
    title: "The Rise of the Hackathon",
    date: '2012-02-01'
  },
  'https://www.businessinsider.com/first-look-viewio-lets-you-see-news-and-info-about-places-near-you-2011-3': {
    title: "First Look: View.io Lets You See News and Info About Places Near You",
    date: '2011-03-09'
  },
  'http://techcrunch.com/2011/03/05/view/': {
    title: "View.io",
    date: '2011-03-05'
  },
  'http://www.zdnet.com/article/aussie-linux-head-microsoft-more-open-than-iphone/': {
    title: "Aussie Linux head: Microsoft more open than iPhone",
    date: '2008-06-10'
  },
  'http://www.cnet.com/news/iphone-sdk-agreement-is-a-giant-joke-on-several-levels/': {
    title: "iPhone SDK agreement is a giant joke on several levels",
    date: '2008-03-17'
  },
  'https://venturebeat.com/2008/03/17/if-the-iphone-sdk-is-a-joke-apple-will-be-laughing-all-the-way-to-the-bank/': {
    title: "If the iPhone SDK is a joke, Apple will be laughing all the way to the bank",
    date: '2008-03-17'
  }
};

// Helper to extract publication name from URL
function getPublicationFromUrl(url) {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname;
  
  if (hostname.includes('alamedasun.com') || (hostname.includes('web.archive.org') && url.includes('alamedasun.com'))) {
    return 'Alameda Sun';
  }
  if (hostname.includes('alamedapost.com')) {
    return 'Alameda Post';
  }
  if (hostname.includes('wired.com')) {
    return 'Wired';
  }
  if (hostname.includes('theverge.com')) {
    return 'The Verge';
  }
  if (hostname.includes('sfchronicle.com')) {
    return 'San Francisco Chronicle';
  }
  if (hostname.includes('eastbaytimes.com')) {
    return 'East Bay Times';
  }
  if (hostname.includes('9to5google.com')) {
    return '9to5Google';
  }
  if (hostname.includes('venturebeat.com')) {
    return 'VentureBeat';
  }
  if (hostname.includes('businessinsider.com')) {
    return 'Business Insider';
  }
  if (hostname.includes('ktvu.com')) {
    return 'KTVU';
  }
  if (hostname.includes('dailydot.com')) {
    return 'Daily Dot';
  }
  if (hostname.includes('androidauthority.com')) {
    return 'Android Authority';
  }
  if (hostname.includes('osnews.com')) {
    return 'OSNews';
  }
  if (hostname.includes('pocketgamer.biz')) {
    return 'PocketGamer.biz';
  }
  if (hostname.includes('wsj.com')) {
    return 'Wall Street Journal';
  }
  if (hostname.includes('hackathon.com')) {
    return 'Hackathon.com';
  }
  if (hostname.includes('sparkminute.com')) {
    return 'Spark Minute';
  }
  if (hostname.includes('postnewsgroup.com')) {
    return 'Post News Group';
  }
  if (hostname.includes('techtalkscentral.com')) {
    return 'Tech Talks Central';
  }
  if (hostname.includes('scobleizerblog.wordpress.com')) {
    return 'Scobleizer';
  }
  if (hostname.includes('theultralinx.com')) {
    return 'The Ultra Linx';
  }
  if (hostname.includes('oaklandnorth.net')) {
    return 'Oakland North';
  }
  if (hostname.includes('techcrunch.com')) {
    return 'TechCrunch';
  }
  if (hostname.includes('zdnet.com')) {
    return 'ZDNet';
  }
  if (hostname.includes('cnet.com')) {
    return 'CNET';
  }
  if (hostname.includes('finance.yahoo.com')) {
    return 'Yahoo Finance';
  }
  if (hostname.includes('experthub.info')) {
    return 'Expert Hub';
  }
  if (hostname.includes('news.google.com')) {
    return 'Google News';
  }
  
  return 'Other';
}

// Helper to create filename from title
function createFilename(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
}

// Read all news files and update placeholders
const newsDir = path.join(__dirname, '../src/content/news');
const files = fs.readdirSync(newsDir);

let updated = 0;
let skipped = 0;

files.forEach(file => {
  if (!file.endsWith('.mdx')) return;
  
  const filePath = path.join(newsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if it's a placeholder
  if (content.includes('Title and date need to be extracted') || content.includes('Article from')) {
    // Extract URL from frontmatter
    const urlMatch = content.match(/url:\s*(https?:\/\/[^\s]+)/);
    if (!urlMatch) {
      console.log(`Skipping ${file}: No URL found`);
      skipped++;
      return;
    }
    
    const url = urlMatch[1].trim();
    const cleanUrl = url.split('?')[0]; // Remove query params for matching
    
    // Check if we have metadata for this URL
    const metadata = knownMetadata[url] || knownMetadata[cleanUrl];
    
    if (metadata) {
      const publication = getPublicationFromUrl(url);
      const newContent = `---
title: "${metadata.title.replace(/"/g, '\\"')}"
date: ${metadata.date}
url: ${url}
publication: ${publication}
featured: false
---

`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`✓ Updated: ${file}`);
      updated++;
    } else {
      console.log(`⚠ No metadata for: ${file} (${url})`);
      skipped++;
    }
  }
});

console.log(`\nSummary: ${updated} updated, ${skipped} skipped`);

