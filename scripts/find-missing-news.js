// Script to find news URLs referenced in codebase but missing from news.json
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read news.json
const newsJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/content/news.json'), 'utf-8'));
const existingUrls = new Set(newsJson.map(item => {
  // Normalize URLs - remove query params and wayback prefixes for comparison
  let url = item.url;
  if (url.includes('web.archive.org')) {
    // Extract the original URL from wayback
    const match = url.match(/https:\/\/web\.archive\.org\/web\/\d+\/(https?:\/\/.+)/);
    if (match) url = match[1];
  }
  return url.split('?')[0].replace(/\/$/, '');
}));

// URLs found in content files
const referencedUrls = [
  'https://www.wired.com/2012/02/storyboard-hackathons/',
  'https://www.theverge.com/google/2017/11/20/16681556/apple-swift-language-google-fuchsia-os-open-source',
  'https://9to5google.com/2018/04/13/fuchsia-friday-the-dream-team-behind-googles-new-os/',
  'https://www.sfchronicle.com/bayarea/article/Ballot-battle-in-town-of-Alameda-pits-multiunit-15619564.php',
  'https://www.theverge.com/2017/11/20/16679342/google-fuchsia-os-swift-language-support', // Different URL from tech.mdx
  'https://venturebeat.com/2016/08/18/google-secretly-acqui-hired-mobile-app-development-startup-apportable/',
  'https://www.yimbylaw.org/press/hcd-include-jobs-housing-balance', // From README - housing lawsuit
  'https://www.imdb.com/name/nm7838510/', // DWDD University - not really news, but mentioned
];

// Check which are missing
const missing = [];
referencedUrls.forEach(url => {
  const normalized = url.split('?')[0].replace(/\/$/, '');
  if (!existingUrls.has(normalized)) {
    missing.push(url);
  }
});

console.log('Missing URLs from news.json:');
missing.forEach(url => console.log(`  - ${url}`));

// Also check for URLs in the original list that might be missing
const originalUrlList = [
  'https://alamedapost.com/news/post-election-update-3/',
  'https://alamedapost.com/news/draft-zoning-amendments-considered/',
  'https://alamedapost.com/news/alamedas-high-injury-corridor-set-for-revamp/',
  'https://alamedapost.com/news/council-approves-events-grant-program-more-housing/',
  'https://alamedapost.com/news/updated-masking-guidelines-oak-noise-a-conversation-about-housing/',
  'https://alamedapost.com/op-ed/apa-caucus-compiles-dcc-information-for-ad-18/',
  'https://alamedapost.com/news/salary-increase-for-council-on-november-ballot/',
  'https://techtalkscentral.com/interview/the-state-of-mobile-gaming-with-apportable/',
  'https://www.pocketgamer.biz/industry/zac-bowling/',
  'https://www.wsj.com/articles/BL-VCDB-13160',
  'https://www.hackathon.com/event/iosdevcamp-2016-20975525361',
  'https://www.sparkminute.com/2012/03/26/confessions-of-an-80x-hackathon-contender/',
  'https://postnewsgroup.com/district-delegates-to-state-democratic-party-central-committee-meeting-celebrate-election-victory/',
  'https://scobleizerblog.wordpress.com/2011/03/09/first-look-view-io-lets-you-see-news-and-info-about-places-near-you/',
  'https://www.dailydot.com/irl/apple-store-genius-coding-class/',
  'https://www.dailydot.com/unclick/vx-safety-dance-virgin-flight-attendant-irl/',
  'https://theultralinx.com/2012/07/playing-games-nexus-possibility/',
  'https://oaklandnorth.net/2012/06/12/developers-tackle-solar-energy-issues-with-code-at-oaklands-cleanweb-hackathon/',
  'https://www.sparkminute.com/2012/03/26/confessions-of-an-80x-hackathon-contender/',
  'https://finance.yahoo.com/news/hacking-helping-businesses-beyond-tech-170000239.html',
  'https://www.experthub.info/business/growing-a-business/innovation/how-to-host-a-hackathon/',
];

console.log('\nOriginal URL list items missing:');
originalUrlList.forEach(url => {
  const normalized = url.split('?')[0].replace(/\/$/, '');
  const waybackNormalized = `https://web.archive.org/web/20231126052140/${normalized}`;
  if (!existingUrls.has(normalized) && !Array.from(existingUrls).some(u => u.includes(normalized.split('//')[1]))) {
    console.log(`  - ${url}`);
  }
});

