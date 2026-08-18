import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filmsDir = path.join(__dirname, '..', 'public', 'assets', 'films');
if (!fs.existsSync(filmsDir)) {
  fs.mkdirSync(filmsDir, { recursive: true });
}

const films = [
  // HINDI (77)
  "PK", "Chennai Express", "Jodhaa Akbar", "Yeh Jawaani Hai Deewani", "Barfi!", "Dilwale", "Raees",
  "Kick", "2 States", "Dear Zindagi", "Haider", "Highway", "Tubelight", "Raajneeti", "Satyagraha",
  "Kaminey", "Rowdy Rathore", "Rustom", "The Lunchbox", "Guzaarish", "Delhi-6", "Dev.D",
  "Tees Maar Khan", "I Hate Luv Storys", "Wake Up Sid", "Paan Singh Tomar", "Chillar Party",
  "Delhi Belly", "Heroine", "7 Khoon Maaf", "No One Killed Jessica", "Arjun: The Warrior Prince",
  "ABCD: Any Body Can Dance", "Kai Po Che!", "Himmatwala", "Heropanti", "Luv Shuv Tey Chicken Khurana",
  "Gippi", "Shahid", "Filmistaan", "Rangrezz", "Joker", "Tere Naal Love Ho Gaya", "Thank You",
  "Saheb, Biwi Aur Gangster", "My Friend Pinto", "Kurbaan", "Chance Pe Dance", "We Are Family",
  "Peepli Live", "Udaan", "A Wednesday!", "Aamir", "Life in a... Metro", "The Blue Umbrella",
  "Mumbai Meri Jaan", "Dhan Dhana Dhan Goal", "Kismat Konnection", "Oye Lucky! Lucky Oye!",
  "Welcome to Sajjanpur", "Dhoondte Reh Jaaoge", "Aagey Se Right", "What's Your Raashee?",
  "Main Aurr Mrs Khanna", "Agyaat", "Jayantabhai Ki Luv Story", "Ghanchakkar", "Issaq",
  "Raja Natwarlal", "Dongri Ka Raja", "Bollywood Diaries", "Project Marathwada", "A Flying Jatt",
  "Shortcut Safari", "Lipstick Under My Burkha", "Love All",
  
  // ENGLISH (23)
  "The Avengers", "Guardians of the Galaxy", "Captain America: The Winter Soldier", "Maleficent",
  "Up", "Cinderella", "Million Dollar Arm", "The Proposal", "The Lone Ranger",
  "Oz the Great and Powerful", "Planes", "Planes: Fire & Rescue", "Surrogates", "Bolt",
  "A Christmas Carol", "The Princess and the Frog", "Muppets Most Wanted", "Bedtime Stories",
  "Race to Witch Mountain", "G-Force", "Tinker Bell and the Lost Treasure", "Old Dogs",
  "Confessions of a Shopaholic",

  // TAMIL (8)
  "Vettai", "Thaandavam", "Anjaan", "Settai", "Kalakalappu", "Mugamoodi",
  "Theeya Velai Seiyyanum Kumaru", "Muran",

  // MALAYALAM (2)
  "Grandmaster", "Husbands in Goa",

  // MARATHI (5)
  "Ventilator", "Harishchandrachi Factory", "No Entry: Pudhe Dhoka Aahey", "Youth", "Sur Sapata",

  // PUNJABI (1)
  "Sarvann",

  // MULTI-LANGUAGE (3)
  "Tutak Tutak Tutiya", "Ship of Theseus", "The Namesake"
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

const USER_AGENT = 'PrakashNathanPortfolio/1.0 (https://prakashnathan.com; mail@prakashnathan.com)';

async function fetchFromITunes(title, country = 'IN') {
  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(title)}&country=${country}&media=movie&limit=3`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      for (const item of data.results) {
        if (item.artworkUrl100) {
          return item.artworkUrl100.replace('100x100bb', '600x600bb');
        }
      }
    }
  } catch (e) {
    // ignore
  }
  return null;
}

async function fetchFromWikipedia(title) {
  const candidateTitles = [
    title,
    `${title} (film)`,
    `${title} (2014 film)`,
    `${title} (2013 film)`,
    `${title} (2012 film)`,
    `${title} (2011 film)`,
    `${title} (2010 film)`,
    `${title} (2009 film)`,
    `${title} (2008 film)`,
    `${title} (2016 film)`,
    `${title} (2017 film)`,
    `${title} (Hindi film)`,
    `${title} (Marathi film)`,
    `${title} (Tamil film)`,
    `${title} (Malayalam film)`
  ];

  for (const pageName of candidateTitles) {
    try {
      const parseUrl = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(pageName)}&prop=images&format=json&redirects=1`;
      const parseRes = await fetch(parseUrl, { headers: { 'User-Agent': USER_AGENT } });
      if (!parseRes.ok) continue;
      const parseData = await parseRes.json();
      
      const images = parseData.parse?.images || [];
      const poster = images.find(img => 
        !img.endsWith('.svg') && 
        !img.toLowerCase().includes('icon') && 
        !img.toLowerCase().includes('logo') && 
        !img.toLowerCase().includes('flag') &&
        !img.toLowerCase().includes('commons')
      );

      if (poster) {
        const fileUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(poster)}&prop=imageinfo&iiprop=url&format=json`;
        const fileRes = await fetch(fileUrl, { headers: { 'User-Agent': USER_AGENT } });
        if (fileRes.ok) {
          const fileData = await fileRes.json();
          const pages = Object.values(fileData.query?.pages || {});
          if (pages[0]?.imageinfo?.[0]?.url) {
            return pages[0].imageinfo[0].url;
          }
        }
      }
    } catch (e) {
      // continue
    }
  }

  // Fallback: search Wikipedia
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(title)}&limit=3&namespace=0&format=json`;
    const searchRes = await fetch(searchUrl, { headers: { 'User-Agent': USER_AGENT } });
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      if (searchData[1] && searchData[1].length > 0) {
        for (const candidate of searchData[1]) {
          const parseUrl = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(candidate)}&prop=images&format=json&redirects=1`;
          const parseRes = await fetch(parseUrl, { headers: { 'User-Agent': USER_AGENT } });
          if (!parseRes.ok) continue;
          const parseData = await parseRes.json();
          const images = parseData.parse?.images || [];
          const poster = images.find(img => 
            !img.endsWith('.svg') && 
            !img.toLowerCase().includes('icon') && 
            !img.toLowerCase().includes('logo') && 
            !img.toLowerCase().includes('flag') &&
            !img.toLowerCase().includes('commons')
          );
          if (poster) {
            const fileUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(poster)}&prop=imageinfo&iiprop=url&format=json`;
            const fileRes = await fetch(fileUrl, { headers: { 'User-Agent': USER_AGENT } });
            if (fileRes.ok) {
              const fileData = await fileRes.json();
              const pages = Object.values(fileData.query?.pages || {});
              if (pages[0]?.imageinfo?.[0]?.url) {
                return pages[0].imageinfo[0].url;
              }
            }
          }
        }
      }
    }
  } catch (e) {
    // ignore
  }

  return null;
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    });
    if (!res.ok) return false;
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 1500) return false;
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (e) {
    return false;
  }
}

async function main() {
  console.log(`Starting comprehensive poster download for all ${films.length} films...`);
  const mapping = {};
  let successCount = 0;

  for (let i = 0; i < films.length; i++) {
    const title = films[i];
    const slug = slugify(title);
    const destPath = path.join(filmsDir, `${slug}.jpg`);

    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 2000) {
      console.log(`[${i + 1}/${films.length}] (Cached) ${title}`);
      mapping[title] = `/assets/films/${slug}.jpg`;
      successCount++;
      continue;
    }

    console.log(`[${i + 1}/${films.length}] Searching: ${title}...`);
    
    // 1. iTunes (IN)
    let imgUrl = await fetchFromITunes(title, 'IN');
    // 2. iTunes (US)
    if (!imgUrl) imgUrl = await fetchFromITunes(title, 'US');
    // 3. Wikipedia exact parse
    if (!imgUrl) imgUrl = await fetchFromWikipedia(title);

    if (imgUrl) {
      const success = await downloadImage(imgUrl, destPath);
      if (success) {
        console.log(`   ✓ Saved: ${title} (${fs.statSync(destPath).size} bytes)`);
        mapping[title] = `/assets/films/${slug}.jpg`;
        successCount++;
      } else {
        console.log(`   ✗ Failed to download: ${imgUrl}`);
      }
    } else {
      console.log(`   ✗ Poster not found: ${title}`);
    }

    await new Promise(r => setTimeout(r, 80));
  }

  const mappingPath = path.join(__dirname, 'poster-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));

  console.log(`\n==============================================`);
  console.log(`COMPLETED: ${successCount}/${films.length} posters downloaded into public/assets/films/`);
  console.log(`==============================================`);
}

main();
