// Script to add missing news entries to news.json
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsFile = path.join(__dirname, '../src/content/news.json');
const news = JSON.parse(fs.readFileSync(newsFile, 'utf-8'));

// Helper to get publication from URL
function getPublication(url) {
  if (url.includes('alamedapost.com')) return 'Alameda Post';
  if (url.includes('alamedasun.com')) return 'Alameda Sun';
  if (url.includes('wired.com')) return 'Wired';
  if (url.includes('theverge.com')) return 'The Verge';
  if (url.includes('sfchronicle.com')) return 'San Francisco Chronicle';
  if (url.includes('eastbaytimes.com')) return 'East Bay Times';
  if (url.includes('9to5google.com')) return '9to5Google';
  if (url.includes('venturebeat.com')) return 'VentureBeat';
  if (url.includes('businessinsider.com')) return 'Business Insider';
  if (url.includes('ktvu.com')) return 'KTVU';
  if (url.includes('dailydot.com')) return 'Daily Dot';
  if (url.includes('androidauthority.com')) return 'Android Authority';
  if (url.includes('osnews.com')) return 'OSNews';
  if (url.includes('pocketgamer.biz')) return 'PocketGamer.biz';
  if (url.includes('wsj.com')) return 'Wall Street Journal';
  if (url.includes('hackathon.com')) return 'Hackathon.com';
  if (url.includes('sparkminute.com')) return 'Spark Minute';
  if (url.includes('postnewsgroup.com')) return 'Post News Group';
  if (url.includes('techtalkscentral.com')) return 'Tech Talks Central';
  if (url.includes('scobleizerblog.wordpress.com')) return 'Scobleizer';
  if (url.includes('theultralinx.com')) return 'The Ultra Linx';
  if (url.includes('oaklandnorth.net')) return 'Oakland North';
  if (url.includes('techcrunch.com')) return 'TechCrunch';
  if (url.includes('zdnet.com')) return 'ZDNet';
  if (url.includes('cnet.com')) return 'CNET';
  if (url.includes('finance.yahoo.com')) return 'Yahoo Finance';
  if (url.includes('experthub.info')) return 'Expert Hub';
  if (url.includes('yimbylaw.org')) return 'YIMBY Law';
  return 'Other';
}

// Missing entries to add
const missingEntries = [
  {
    title: "Google adds support for Apple's Swift programming language to Fuchsia",
    date: "2017-11-20",
    url: "https://www.theverge.com/2017/11/20/16679342/google-fuchsia-os-swift-language-support",
    publication: "The Verge",
    category: "Technology",
    description: "Coverage of enabling Swift to run natively on Fuchsia OS",
    featured: false
  },
  {
    title: "HCD Must Include Jobs-Housing Balance in Housing Element Review",
    date: "2022-01-01",
    url: "https://www.yimbylaw.org/press/hcd-include-jobs-housing-balance",
    publication: "YIMBY Law",
    category: "Housing",
    description: "Press release about winning lawsuit against California HCD for underestimating housing needs",
    featured: true
  },
  // Alameda Post entries (with wayback prefix)
  {
    title: "Post-election update",
    date: "2024-11-01",
    url: "https://web.archive.org/web/20231126052140/https://alamedapost.com/news/post-election-update-3/",
    publication: "Alameda Post",
    category: "Politics",
    description: null,
    featured: false
  },
  {
    title: "Draft zoning amendments considered",
    date: "2024-10-01",
    url: "https://web.archive.org/web/20231126052140/https://alamedapost.com/news/draft-zoning-amendments-considered/",
    publication: "Alameda Post",
    category: "Housing",
    description: null,
    featured: false
  },
  {
    title: "Alameda's high-injury corridor set for revamp",
    date: "2024-09-01",
    url: "https://web.archive.org/web/20231126052140/https://alamedapost.com/news/alamedas-high-injury-corridor-set-for-revamp/",
    publication: "Alameda Post",
    category: "Transportation",
    description: null,
    featured: false
  },
  {
    title: "Council approves events grant program, more housing",
    date: "2024-08-01",
    url: "https://web.archive.org/web/20231126052140/https://alamedapost.com/news/council-approves-events-grant-program-more-housing/",
    publication: "Alameda Post",
    category: "Housing",
    description: null,
    featured: false
  },
  {
    title: "Updated masking guidelines, OAK noise, a conversation about housing",
    date: "2024-07-01",
    url: "https://web.archive.org/web/20231126052140/https://alamedapost.com/news/updated-masking-guidelines-oak-noise-a-conversation-about-housing/",
    publication: "Alameda Post",
    category: "Housing",
    description: null,
    featured: false
  },
  {
    title: "APA Caucus compiles DCC information for AD-18",
    date: "2024-06-01",
    url: "https://web.archive.org/web/20231126052140/https://alamedapost.com/op-ed/apa-caucus-compiles-dcc-information-for-ad-18/",
    publication: "Alameda Post",
    category: "Politics",
    description: null,
    featured: false
  },
  {
    title: "Salary increase for council on November ballot",
    date: "2024-05-01",
    url: "https://web.archive.org/web/20231126052140/https://alamedapost.com/news/salary-increase-for-council-on-november-ballot/",
    publication: "Alameda Post",
    category: "Politics",
    description: null,
    featured: false
  },
  // Other tech blog entries
  {
    title: "The State of Mobile Gaming with Apportable",
    date: "2014-01-01",
    url: "https://techtalkscentral.com/interview/the-state-of-mobile-gaming-with-apportable/",
    publication: "Tech Talks Central",
    category: "Technology",
    description: null,
    featured: false
  },
  {
    title: "Zac Bowling",
    date: "2013-01-01",
    url: "https://www.pocketgamer.biz/industry/zac-bowling/",
    publication: "PocketGamer.biz",
    category: "Technology",
    description: null,
    featured: false
  },
  {
    title: "Confessions of an 80x Hackathon Contender",
    date: "2012-03-26",
    url: "https://www.sparkminute.com/2012/03/26/confessions-of-an-80x-hackathon-contender/",
    publication: "Spark Minute",
    category: "Technology",
    description: null,
    featured: false
  },
  {
    title: "District delegates to state Democratic Party central committee meeting celebrate election victory",
    date: "2021-01-01",
    url: "https://postnewsgroup.com/district-delegates-to-state-democratic-party-central-committee-meeting-celebrate-election-victory/",
    publication: "Post News Group",
    category: "Politics",
    description: null,
    featured: false
  },
  {
    title: "First Look: View.io Lets You See News and Info About Places Near You",
    date: "2011-03-09",
    url: "https://scobleizerblog.wordpress.com/2011/03/09/first-look-view-io-lets-you-see-news-and-info-about-places-near-you/",
    publication: "Scobleizer",
    category: "Technology",
    description: null,
    featured: false
  },
  {
    title: "Apple Store Genius Coding Class",
    date: "2012-01-01",
    url: "https://www.dailydot.com/irl/apple-store-genius-coding-class/",
    publication: "Daily Dot",
    category: "Technology",
    description: null,
    featured: false
  },
  {
    title: "Playing Games: Nexus Possibility",
    date: "2012-07-01",
    url: "https://theultralinx.com/2012/07/playing-games-nexus-possibility/",
    publication: "The Ultra Linx",
    category: "Technology",
    description: null,
    featured: false
  },
  {
    title: "Developers tackle solar energy issues with code at Oakland's CleanWeb hackathon",
    date: "2012-06-12",
    url: "https://oaklandnorth.net/2012/06/12/developers-tackle-solar-energy-issues-with-code-at-oaklands-cleanweb-hackathon/",
    publication: "Oakland North",
    category: "Technology",
    description: null,
    featured: false
  },
  {
    title: "Hacking: Helping Businesses Beyond Tech",
    date: "2012-01-01",
    url: "https://finance.yahoo.com/news/hacking-helping-businesses-beyond-tech-170000239.html",
    publication: "Yahoo Finance",
    category: "Technology",
    description: null,
    featured: false
  },
  {
    title: "How to Host a Hackathon",
    date: "2013-01-01",
    url: "https://www.experthub.info/business/growing-a-business/innovation/how-to-host-a-hackathon/",
    publication: "Expert Hub",
    category: "Technology",
    description: null,
    featured: false
  }
];

// Get the highest ID
const maxId = Math.max(...news.map(n => n.id));

// Add missing entries with sequential IDs
missingEntries.forEach((entry, index) => {
  // Check if URL already exists (normalized)
  const normalizedUrl = entry.url.split('?')[0].replace(/\/$/, '');
  const exists = news.some(n => {
    let nUrl = n.url;
    if (nUrl.includes('web.archive.org')) {
      const match = nUrl.match(/https:\/\/web\.archive\.org\/web\/\d+\/(https?:\/\/.+)/);
      if (match) nUrl = match[1];
    }
    return nUrl.split('?')[0].replace(/\/$/, '') === normalizedUrl;
  });
  
  if (!exists) {
    news.push({
      id: maxId + index + 1,
      ...entry
    });
    console.log(`✓ Added: ${entry.title}`);
  } else {
    console.log(`⚠ Skipped (duplicate): ${entry.title}`);
  }
});

// Sort by ID
news.sort((a, b) => a.id - b.id);

// Write back to file
fs.writeFileSync(newsFile, JSON.stringify(news, null, 2));
console.log(`\n✓ Updated news.json with ${news.length} total entries`);

