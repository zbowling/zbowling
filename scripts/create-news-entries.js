// Script to create news entries from provided data
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to extract publication name from URL
function getPublicationFromUrl(url) {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname;
  
  if (hostname.includes('alamedasun.com') || hostname.includes('web.archive.org') && url.includes('alamedasun.com')) {
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

// Parse date string to Date object
function parseDate(dateStr) {
  const months = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  
  // Format: "April 28, 2021" or "01-01-2019"
  if (dateStr.includes(',')) {
    const [monthDay, year] = dateStr.split(', ');
    const [month, day] = monthDay.split(' ');
    return `${year}-${months[month]}-${day.padStart(2, '0')}`;
  } else if (dateStr.includes('-')) {
    const [month, day, year] = dateStr.split('-');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  return dateStr;
}

// JSON entries from user
const jsonEntries = [
  {
    "title": "Putting AB 1322 in its Proper Context",
    "date": "April 28, 2021",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/news/putting-ab-1322-its-proper-context",
    "category": "Other",
    "description": "Zac Bowling Part one in a series"
  },
  {
    "title": "Support SB 9 & 10: More homes in our neighborhoods",
    "date": "August 12, 2021",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/letters/14579",
    "category": "Other",
    "description": "Editor: California's housing shortage began with the downzonings of the 1970s and 80s..."
  },
  {
    "title": "The State of Site A",
    "date": "February 14, 2019",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/news/state-site",
    "category": "Other",
    "description": "A drone piloted by Alameda resident Zac Bowling captured the view..."
  },
  {
    "title": "SB 9 Needed But with Possible Changes",
    "date": "January 13, 2022",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/letters/15139",
    "category": "Other",
    "description": "Mayor and Council: I ask that you adopt the resolution..."
  },
  {
    "title": "Workshop Held to Discuss Shopping Center Zoning",
    "date": "January 20, 2022",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/news/workshop-held-discuss-shopping-center-zo",
    "category": "Other",
    "description": "On Jan. 10th, the Planning Board held a public workshop..."
  },
  {
    "title": "Bridge, tunnel crowd",
    "date": "July 12, 2018",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/letters/9509",
    "category": "Other",
    "description": "Editor: The bridges and tunnels we have are more than adequate..."
  },
  {
    "title": "Council Moves Forward",
    "date": "July 25, 2019",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/news/council-moves-forward",
    "category": "Other",
    "description": "Divided community response reflects attitudes toward Council's legal fees"
  },
  {
    "title": "COVID-19 Testing",
    "date": "July 28, 2020",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/news/covid-19-testing",
    "category": "Other",
    "description": "Alameda's COVID-19 testing site has been plagued with temporary shutdowns..."
  },
  {
    "title": "The Truth Matters",
    "date": "March 13, 2019",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/letters/10778",
    "category": "Other",
    "description": "As the April 9th special election is getting closer..."
  },
  {
    "title": "The Truth Matters",
    "date": "March 14, 2019",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/news/truth-matters",
    "category": "Other",
    "description": ""
  },
  {
    "title": "Fear mongering and homeless stereotyping",
    "date": "March 21, 2019",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/letters/10825",
    "category": "Other",
    "description": "Editor: I was once homeless. I stumbled into Alameda some 10 years ago..."
  },
  {
    "title": "Putting AB 1322 in its Proper Context",
    "date": "May 05, 2021",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/news/putting-ab-1322-its-proper-context-0",
    "category": "Other",
    "description": "News Analysis In January 2023, Alameda must submit a plan..."
  },
  {
    "title": "Putting AB 1322 in its Proper Context",
    "date": "May 13, 2021",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/news/putting-ab-1322-its-proper-context-1",
    "category": "Other",
    "description": "Assembly passed bill on Monday Zac Bowling Part three of three..."
  },
  {
    "title": "Preserve our community by voting Yes on Z",
    "date": "October 01, 2020",
    "url": "https://web.archive.org/web/20231126052140/https://alamedasun.com/letters/13511",
    "category": "Other",
    "description": "Editor: One of the questions we require before allowing anyone to join the Alameda Peeps Facebook group..."
  }
];

// URL list from user
const urlList = [
  'https://alamedapost.com/news/post-election-update-3/?highlight=bowling',
  'https://alamedapost.com/news/draft-zoning-amendments-considered/?highlight=zac%20bowling',
  'https://alamedapost.com/news/alamedas-high-injury-corridor-set-for-revamp/?highlight=zac',
  'https://alamedapost.com/news/council-approves-events-grant-program-more-housing/?highlight=zac',
  'https://alamedapost.com/news/updated-masking-guidelines-oak-noise-a-conversation-about-housing/?highlight=zac',
  'https://alamedapost.com/op-ed/apa-caucus-compiles-dcc-information-for-ad-18/?highlight=zac',
  'https://alamedapost.com/news/salary-increase-for-council-on-november-ballot/',
  'https://www.eastbaytimes.com/2021/04/01/too-militaristic-alameda-police-to-keep-armored-vehicle/',
  'https://alamedapost.com/news/council-approves-events-grant-program-more-housing/',
  'https://www.wired.com/2013/04/why-wwdc-is-too-big/',
  'https://techtalkscentral.com/interview/the-state-of-mobile-gaming-with-apportable/',
  'https://www.pocketgamer.biz/industry/zac-bowling/',
  'https://www.wsj.com/articles/BL-VCDB-13160',
  'https://www.hackathon.com/event/iosdevcamp-2016-20975525361',
  'https://www.sparkminute.com/2012/03/26/confessions-of-an-80x-hackathon-contender/',
  'https://postnewsgroup.com/district-delegates-to-state-democratic-party-central-committee-meeting-celebrate-election-victory/',
  'https://www.wired.com/story/google-meta-big-tech-is-bad-at-firing/',
  'https://www.businessinsider.com/google-layoffs-employees-discord-emotional-support-financial-advice-job-2023-2',
  'https://www.ktvu.com/news/rescue-dog-benny-dies-in-alameda-after-eating-cupcakes-with-xylitol',
  'https://scobleizerblog.wordpress.com/2011/03/09/first-look-view-io-lets-you-see-news-and-info-about-places-near-you/',
  'https://techtalkscentral.com/interview/the-state-of-mobile-gaming-with-apportable/',
  'https://www.dailydot.com/irl/apple-store-genius-coding-class/',
  'https://www.eastbaytimes.com/2021/08/04/future-alameda-wellness-and-medical-respite-center-moves-forward/',
  'https://www.sfchronicle.com/bayarea/article/Bay-Area-cities-face-long-odds-in-fighting-16336003.php',
  'https://www.dailydot.com/unclick/vx-safety-dance-virgin-flight-attendant-irl/',
  'https://www.sfchronicle.com/bayarea/article/Ballot-battle-in-town-of-Alameda-pits-multiunit-15619564.php',
  'https://9to5google.com/2018/04/13/fuchsia-friday-the-dream-team-behind-googles-new-os/',
  'https://www.androidauthority.com/google-adds-support-for-apples-swift-programming-language-to-fuchsia-816381/',
  'https://www.theverge.com/google/2017/11/20/16681556/apple-swift-language-google-fuchsia-os-open-source',
  'https://www.osnews.com/story/30094/google-adds-fuchsia-support-to-apples-swift/',
  'https://venturebeat.com/mobile/google-secretly-acqui-hired-mobile-app-development-startup-apportable/',
  'https://www.experthub.info/business/growing-a-business/innovation/how-to-host-a-hackathon/',
  'https://finance.yahoo.com/news/hacking-helping-businesses-beyond-tech-170000239.html',
  'http://www.wired.com/2013/04/why-wwdc-is-too-big/',
  'https://theultralinx.com/2012/07/playing-games-nexus-possibility/',
  'https://oaklandnorth.net/2012/06/12/developers-tackle-solar-energy-issues-with-code-at-oaklands-cleanweb-hackathon/',
  'https://www.sparkminute.com/2012/03/26/confessions-of-an-80x-hackathon-contender/',
  'http://www.wired.com/2012/02/ff_hackathons/',
  'https://www.businessinsider.com/first-look-viewio-lets-you-see-news-and-info-about-places-near-you-2011-3',
  'http://techcrunch.com/2011/03/05/view/',
  'http://www.zdnet.com/article/aussie-linux-head-microsoft-more-open-than-iphone/',
  'http://www.cnet.com/news/iphone-sdk-agreement-is-a-giant-joke-on-several-levels/',
  'https://venturebeat.com/2008/03/17/if-the-iphone-sdk-is-a-joke-apple-will-be-laughing-all-the-way-to-the-bank/'
];

function createNewsEntry(entry, index) {
  const filename = createFilename(entry.title) + (index > 0 ? `-${index}` : '') + '.mdx';
  const date = parseDate(entry.date);
  const publication = entry.publication || getPublicationFromUrl(entry.url);
  
  const content = `---
title: "${entry.title.replace(/"/g, '\\"')}"
date: ${date}
url: ${entry.url}
publication: ${publication}
${entry.category ? `category: ${entry.category}` : ''}
${entry.description ? `description: ${entry.description.substring(0, 200).replace(/"/g, '\\"')}` : ''}
featured: false
---

`;
  
  return { filename, content };
}

// Create entries from JSON
jsonEntries.forEach((entry, index) => {
  const { filename, content } = createNewsEntry(entry, index);
  const filePath = path.join(__dirname, '../src/content/news', filename);
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filename}`);
});

// For URL list, we'll need to fetch titles - for now create placeholder entries
console.log('\nURL list entries need title extraction - creating placeholders...');
urlList.forEach((url, index) => {
  const publication = getPublicationFromUrl(url);
  const filename = `url-entry-${index + 1}.mdx`;
  const content = `---
title: "Article from ${publication}"
date: 2024-01-01
url: ${url}
publication: ${publication}
featured: false
---

<!-- Title and date need to be extracted from URL -->
`;
  const filePath = path.join(__dirname, '../src/content/news', filename);
  fs.writeFileSync(filePath, content);
  console.log(`Created placeholder: ${filename}`);
});

console.log('\nDone! Review and update placeholder entries with actual titles and dates.');

