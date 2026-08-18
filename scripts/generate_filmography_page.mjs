import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'poster-mapping.json'), 'utf8'));

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function getPoster(title) {
  if (mapping[title]) return mapping[title];
  const slug = slugify(title);
  const localFile = path.join(__dirname, '..', 'public', 'assets', 'films', `${slug}.jpg`);
  if (fs.existsSync(localFile)) {
    return `/assets/films/${slug}.jpg`;
  }
  return `/assets/films/${slug}.jpg`;
}

const rawFilms = [
  /* ── HINDI (77) ── */
  { title: "PK", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2014", highlight: true },
  { title: "Chennai Express", role: "Distribution & Marketing", lang: "Hindi", year: "2013", highlight: true },
  { title: "Jodhaa Akbar", role: "UTV Home Entertainment Team", lang: "Hindi", year: "2008", highlight: true },
  { title: "Yeh Jawaani Hai Deewani", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013", highlight: true },
  { title: "Barfi!", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2012", highlight: true },
  { title: "Dilwale", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2015" },
  { title: "Raees", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2017" },
  { title: "Kick", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2014" },
  { title: "2 States", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2014" },
  { title: "Dear Zindagi", role: "Overseas Distribution Logistics", lang: "Hindi", year: "2016" },
  { title: "Haider", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2014", highlight: true },
  { title: "Highway", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2014" },
  { title: "Tubelight", role: "Theatrical Distribution Logistics", lang: "Hindi", year: "2017" },
  { title: "Raajneeti", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2010" },
  { title: "Satyagraha", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013" },
  { title: "Kaminey", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009" },
  { title: "Rowdy Rathore", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2012" },
  { title: "Rustom", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2016" },
  { title: "The Lunchbox", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013", highlight: true },
  { title: "Guzaarish", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2010" },
  { title: "Delhi-6", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009" },
  { title: "Dev.D", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009", highlight: true },
  { title: "Tees Maar Khan", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2010" },
  { title: "I Hate Luv Storys", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2010" },
  { title: "Wake Up Sid", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009" },
  { title: "Paan Singh Tomar", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2012", highlight: true },
  { title: "Chillar Party", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2011" },
  { title: "Delhi Belly", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2011" },
  { title: "Heroine", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2012" },
  { title: "7 Khoon Maaf", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2011" },
  { title: "No One Killed Jessica", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2011" },
  { title: "Arjun: The Warrior Prince", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2012" },
  { title: "ABCD: Any Body Can Dance", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013" },
  { title: "Kai Po Che!", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013" },
  { title: "Himmatwala", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013" },
  { title: "Heropanti", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2014" },
  { title: "Luv Shuv Tey Chicken Khurana", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2012" },
  { title: "Gippi", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013" },
  { title: "Shahid", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2012", highlight: true },
  { title: "Filmistaan", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2014" },
  { title: "Rangrezz", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013" },
  { title: "Joker", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2012" },
  { title: "Tere Naal Love Ho Gaya", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2012" },
  { title: "Thank You", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2011" },
  { title: "Saheb, Biwi Aur Gangster", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2011" },
  { title: "My Friend Pinto", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2011" },
  { title: "Kurbaan", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009" },
  { title: "Chance Pe Dance", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2010" },
  { title: "We Are Family", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2010" },
  { title: "Peepli Live", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2010" },
  { title: "Udaan", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2010", highlight: true },
  { title: "A Wednesday!", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2008", highlight: true },
  { title: "Aamir", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2008" },
  { title: "Life in a... Metro", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2007" },
  { title: "The Blue Umbrella", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2005" },
  { title: "Mumbai Meri Jaan", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2008" },
  { title: "Dhan Dhana Dhan Goal", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2007" },
  { title: "Kismat Konnection", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2008" },
  { title: "Oye Lucky! Lucky Oye!", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2008" },
  { title: "Welcome to Sajjanpur", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2008" },
  { title: "Dhoondte Reh Jaaoge", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009" },
  { title: "Aagey Se Right", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009" },
  { title: "What's Your Raashee?", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009" },
  { title: "Main Aurr Mrs Khanna", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009" },
  { title: "Agyaat", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2009" },
  { title: "Jayantabhai Ki Luv Story", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013" },
  { title: "Ghanchakkar", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013" },
  { title: "Issaq", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2013" },
  { title: "Raja Natwarlal", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2014" },
  { title: "Dongri Ka Raja", role: "Head of Marketing & Distribution", lang: "Hindi", year: "2016" },
  { title: "Bollywood Diaries", role: "Associate Producer", lang: "Hindi", year: "2016", highlight: true },
  { title: "Project Marathwada", role: "Co-Producer", lang: "Hindi", year: "2016" },
  { title: "A Flying Jatt", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2016" },
  { title: "Shortcut Safari", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2016" },
  { title: "Lipstick Under My Burkha", role: "Marketing, Distribution & Syndication", lang: "Hindi", year: "2017", highlight: true },
  { title: "Love All", role: "Marketing & In-film", lang: "Hindi", year: "2023" },

  /* ── ENGLISH (23) ── */
  { title: "The Avengers", role: "Marketing, Distribution & Syndication", lang: "English", year: "2012", highlight: true },
  { title: "Guardians of the Galaxy", role: "Marketing, Distribution & Syndication", lang: "English", year: "2014", highlight: true },
  { title: "Captain America: The Winter Soldier", role: "Marketing, Distribution & Syndication", lang: "English", year: "2014", highlight: true },
  { title: "Maleficent", role: "Marketing, Distribution & Syndication", lang: "English", year: "2014" },
  { title: "Up", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009", highlight: true },
  { title: "Cinderella", role: "Marketing, Distribution & Syndication", lang: "English", year: "2015" },
  { title: "Million Dollar Arm", role: "Marketing, Distribution & Syndication", lang: "English", year: "2014" },
  { title: "The Proposal", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009" },
  { title: "The Lone Ranger", role: "Marketing, Distribution & Syndication", lang: "English", year: "2013" },
  { title: "Oz the Great and Powerful", role: "Marketing, Distribution & Syndication", lang: "English", year: "2013" },
  { title: "Planes", role: "Marketing, Distribution & Syndication", lang: "English", year: "2013" },
  { title: "Planes: Fire & Rescue", role: "Marketing, Distribution & Syndication", lang: "English", year: "2014" },
  { title: "Surrogates", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009" },
  { title: "Bolt", role: "Marketing, Distribution & Syndication", lang: "English", year: "2008" },
  { title: "A Christmas Carol", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009" },
  { title: "The Princess and the Frog", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009" },
  { title: "Muppets Most Wanted", role: "Marketing, Distribution & Syndication", lang: "English", year: "2014" },
  { title: "Bedtime Stories", role: "Marketing, Distribution & Syndication", lang: "English", year: "2008" },
  { title: "Race to Witch Mountain", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009" },
  { title: "G-Force", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009" },
  { title: "Tinker Bell and the Lost Treasure", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009" },
  { title: "Old Dogs", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009" },
  { title: "Confessions of a Shopaholic", role: "Marketing, Distribution & Syndication", lang: "English", year: "2009" },

  /* ── TAMIL (8) ── */
  { title: "Vettai", role: "Marketing, Distribution & Syndication", lang: "Tamil", year: "2012" },
  { title: "Thaandavam", role: "Marketing, Distribution & Syndication", lang: "Tamil", year: "2012" },
  { title: "Anjaan", role: "Marketing, Distribution & Syndication", lang: "Tamil", year: "2014" },
  { title: "Settai", role: "Marketing, Distribution & Syndication", lang: "Tamil", year: "2013" },
  { title: "Kalakalappu", role: "Marketing, Distribution & Syndication", lang: "Tamil", year: "2012" },
  { title: "Mugamoodi", role: "Marketing, Distribution & Syndication", lang: "Tamil", year: "2012" },
  { title: "Theeya Velai Seiyyanum Kumaru", role: "Marketing, Distribution & Syndication", lang: "Tamil", year: "2013" },
  { title: "Muran", role: "Marketing, Distribution & Syndication", lang: "Tamil", year: "2011" },

  /* ── MALAYALAM (2) ── */
  { title: "Grandmaster", role: "Marketing, Distribution & Syndication", lang: "Malayalam", year: "2012", highlight: true },
  { title: "Husbands in Goa", role: "Marketing, Distribution & Syndication", lang: "Malayalam", year: "2012" },

  /* ── MARATHI (5) ── */
  { title: "Ventilator", role: "Marketing & Commercials Consultant (Purple Pebble / 3 National Awards)", lang: "Marathi", year: "2016", highlight: true },
  { title: "Harishchandrachi Factory", role: "Marketing, Distribution & Syndication", lang: "Marathi", year: "2009", highlight: true },
  { title: "No Entry: Pudhe Dhoka Aahey", role: "Marketing, Distribution & Syndication", lang: "Marathi", year: "2012" },
  { title: "Youth", role: "Associate Producer", lang: "Marathi", year: "2016" },
  { title: "Sur Sapata", role: "Presented By", lang: "Marathi", year: "2019" },

  /* ── PUNJABI (1) ── */
  { title: "Sarvann", role: "Marketing & Commercials Consultant (Priyanka Chopra / Purple Pebble Pictures)", lang: "Punjabi", year: "2017", highlight: true },

  /* ── MULTI-LANGUAGE (3) ── */
  { title: "Tutak Tutak Tutiya", role: "Special thanks", lang: "Multi-Language", year: "2016", note: "Hindi / Tamil / Telugu" },
  { title: "Ship of Theseus", role: "Marketing, Distribution & Syndication", lang: "Multi-Language", year: "2013", note: "English / Hindi / Arabic / Swedish", highlight: true },
  { title: "The Namesake", role: "Marketing, Distribution & Syndication", lang: "Multi-Language", year: "2006", note: "English / Hindi", highlight: true }
];

const processedFilms = rawFilms.map(f => ({
  ...f,
  poster: getPoster(f.title)
}));

const tsContent = `"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Film {
  title: string;
  role: string;
  lang: "Hindi" | "English" | "Tamil" | "Malayalam" | "Marathi" | "Punjabi" | "Multi-Language";
  poster?: string;
  year?: string;
  note?: string;
  highlight?: boolean;
}

const filmographyData: Film[] = ${JSON.stringify(processedFilms, null, 2)};

const languageFilters = [
  "All",
  "Hindi",
  "English",
  "Tamil",
  "Malayalam",
  "Marathi",
  "Punjabi",
  "Multi-Language",
] as const;

const langThemeColors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  Hindi: { bg: "bg-amber-500/10", text: "text-[#B45309]", border: "border-amber-500/25", gradient: "from-amber-600 to-amber-900" },
  English: { bg: "bg-sky-500/10", text: "text-sky-700", border: "border-sky-500/25", gradient: "from-sky-700 to-indigo-950" },
  Marathi: { bg: "bg-rose-500/10", text: "text-rose-700", border: "border-rose-500/25", gradient: "from-rose-700 to-red-950" },
  Tamil: { bg: "bg-purple-500/10", text: "text-purple-700", border: "border-purple-500/25", gradient: "from-purple-700 to-slate-950" },
  Malayalam: { bg: "bg-emerald-500/10", text: "text-emerald-700", border: "border-emerald-500/25", gradient: "from-emerald-700 to-teal-950" },
  Punjabi: { bg: "bg-pink-500/10", text: "text-pink-700", border: "border-pink-500/25", gradient: "from-pink-700 to-rose-950" },
  "Multi-Language": { bg: "bg-orange-500/10", text: "text-orange-700", border: "border-orange-500/25", gradient: "from-orange-700 to-amber-950" },
};

function FilmPosterCard({ film, onSelect }: { film: Film; onSelect: () => void }) {
  const [imgError, setImgError] = useState(false);
  const theme = langThemeColors[film.lang] || langThemeColors.Hindi;

  return (
    <div
      onClick={onSelect}
      className={\`group relative rounded-2xl overflow-hidden glass-card-interactive cursor-pointer border flex flex-col justify-between transition-all duration-300
        \${film.highlight ? "border-amber-400/90 shadow-[0_8px_24px_rgba(245,158,11,0.14)] ring-1 ring-amber-300/40" : "border-slate-200/90 shadow-sm hover:border-slate-300"}\`}
    >
      {/* Poster Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-900">
        {film.poster && !imgError ? (
          <Image
            src={film.poster}
            alt={\`\${film.title} Poster\`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className={\`w-full h-full bg-gradient-to-br \${theme.gradient} p-4 flex flex-col justify-between relative overflow-hidden\`}>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-black pointer-events-none" />
            <div className="flex items-center justify-between z-10">
              <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[0.6rem] font-accent font-bold uppercase tracking-wider text-white border border-white/20">
                {film.lang}
              </span>
              {film.year && (
                <span className="text-[0.7rem] font-accent text-amber-200 font-semibold">
                  {film.year}
                </span>
              )}
            </div>

            <div className="z-10 space-y-0.5 my-auto text-center py-2">
              <span className="text-2xl block mb-1 opacity-80">🎬</span>
              <h4 className="font-display font-bold text-base sm:text-lg text-white leading-tight drop-shadow-md">
                {film.title}
              </h4>
            </div>

            <div className="z-10 text-center">
              <p className="font-accent text-[0.6rem] text-white/80 uppercase tracking-widest font-medium m-0">
                Cinema Portfolio
              </p>
            </div>
          </div>
        )}

        {/* Ambient Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-50 group-hover:opacity-85 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none z-10">
          <span className={\`px-2 py-0.5 rounded-full backdrop-blur-md font-accent text-[0.6rem] font-bold uppercase tracking-wider shadow-sm \${theme.bg} \${theme.text} bg-white/95 border \${theme.border}\`}>
            {film.lang}
          </span>
          {film.highlight && (
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white font-accent text-[0.6rem] font-bold shadow-md flex items-center gap-0.5">
              ⭐ Key
            </span>
          )}
        </div>

        {/* Hover Inspect Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-white/95 text-[#0F172A] flex items-center justify-center text-sm font-bold shadow-2xl scale-75 group-hover:scale-100 transition-transform">
            🔍
          </div>
        </div>

        {/* Bottom Details on Poster */}
        <div className="absolute bottom-0 left-0 right-0 p-3 z-10 transform translate-y-0.5 group-hover:translate-y-0 transition-transform">
          <div className="flex items-baseline justify-between gap-1">
            <h3 className="font-display text-sm sm:text-base font-bold text-white drop-shadow m-0 leading-snug truncate">
              {film.title}
            </h3>
            {film.year && (
              <span className="font-accent text-[0.7rem] font-semibold text-amber-300 drop-shadow shrink-0">
                {film.year}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Caption Strip Under Poster */}
      <div className="p-3 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
        <div>
          <p className="font-accent text-[0.72rem] text-[#64748B] leading-snug m-0 line-clamp-2 group-hover:text-[#334155] transition-colors">
            <strong className="text-[#0F172A] font-semibold">Role:</strong> {film.role}
          </p>
          {film.note && (
            <p className="font-accent text-[0.68rem] text-[#B45309] mt-0.5 m-0 font-medium truncate">
              ✨ {film.note}
            </p>
          )}
        </div>

        <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[0.68rem] font-accent text-[#64748B]">
          <span>Details</span>
          <span className="text-[#D97706] font-bold group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
}

export default function FilmographyPage() {
  const [selectedLang, setSelectedLang] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalFilm, setActiveModalFilm] = useState<Film | null>(null);

  const filteredFilms = useMemo(() => {
    return filmographyData.filter((film) => {
      const matchLang = selectedLang === "All" || film.lang === selectedLang;
      const matchSearch =
        film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (film.note && film.note.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (film.year && film.year.includes(searchQuery));
      return matchLang && matchSearch;
    });
  }, [selectedLang, searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalFilm(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* ══ HEADER BANNER ══════════════════════════════════════ */}
      <div className="relative pt-36 pb-16 px-6 overflow-hidden border-b border-slate-200/80">
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#64748B] font-accent">
            <Link href="/" className="no-underline text-[#64748B] hover:text-[#D97706] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#B45309] font-medium">Filmography</span>
          </div>

          <div className="section-label">Cinema Legacy &amp; Posters</div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.12]">
            Filmography &amp; <span className="text-gold-gradient">Releases</span>
          </h1>

          <p className="font-accent text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
            <span className="text-[#0F172A] font-semibold">120+ films</span> across Hindi, English, Tamil, Malayalam, Marathi, Punjabi and Multi-Language cinema. Explore visual posters, release titles, and commercial distribution leadership across three decades.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm font-accent text-xs text-[#475569]">
              <span className="text-[#B45309] font-bold text-sm">120+</span> Film Releases &amp; Posters
            </div>
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm font-accent text-xs text-[#475569]">
              <span className="text-[#B45309] font-bold text-sm">6+</span> Languages
            </div>
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm font-accent text-xs text-[#475569]">
              <span className="text-[#B45309] font-bold text-sm">3</span> National Awards (Ventilator)
            </div>
          </div>
        </div>
      </div>

      {/* ══ INTERACTIVE DIRECTORY ══════════════════════════════ */}
      <section className="py-16 px-6 relative min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Controls: Search & Language Filters */}
          <div className="space-y-6">
            {/* Search Input */}
            <div className="relative max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search film title, role or year (e.g. PK, Avengers, Ventilator)..."
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-3.5 pl-11 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none shadow-sm"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#64748B]">
                🔍
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-[#0F172A] bg-transparent border-0 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Language Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {languageFilters.map((lang) => {
                const count =
                  lang === "All"
                    ? filmographyData.length
                    : filmographyData.filter((f) => f.lang === lang).length;
                const active = selectedLang === lang;

                return (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    className={\`px-4 py-2 rounded-full font-accent text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer border
                      \${
                        active
                          ? "bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-white border-transparent shadow-[0_2px_12px_rgba(217,119,6,0.35)]"
                          : "bg-white text-[#475569] border-slate-200 hover:border-amber-400 hover:text-[#0F172A] shadow-sm"
                      }\`}
                  >
                    <span>{lang}</span>
                    <span
                      className={\`ml-1.5 px-1.5 py-0.5 rounded-full text-[0.65rem] \${
                        active ? "bg-white/20 text-white" : "bg-slate-100 text-[#64748B]"
                      }\`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs font-accent text-[#64748B] border-b border-slate-200/80 pb-3">
            <span>
              Showing <strong className="text-[#0F172A]">{filteredFilms.length}</strong> of {filmographyData.length} cinematic titles
            </span>
            <span className="text-[#B45309] font-medium">Click any movie poster card for credits &amp; details</span>
          </div>

          {/* Films Poster Grid (Compact 2 to 6 columns) */}
          {filteredFilms.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4.5">
              {filteredFilms.map((film, index) => (
                <FilmPosterCard
                  key={\`\${film.title}-\${index}\`}
                  film={film}
                  onSelect={() => setActiveModalFilm(film)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 rounded-3xl glass-card border border-slate-200 space-y-4">
              <p className="text-4xl">🎬</p>
              <p className="font-display text-xl text-[#0F172A]">No films matching "{searchQuery}"</p>
              <p className="text-xs text-[#64748B]">Try clearing your search query or selecting a different language tab.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLang("All");
                }}
                className="px-5 py-2 rounded-full font-accent text-xs font-semibold bg-[#D97706] text-white cursor-pointer border-none shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══ FILM DETAIL & POSTER MODAL ════════════════════════ */}
      {activeModalFilm && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={() => setActiveModalFilm(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalFilm(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center cursor-pointer border-none shadow-md hover:bg-[#D97706] transition-colors"
            >
              ✕
            </button>

            {/* Poster Left */}
            <div className="md:w-1/2 relative aspect-[2/3] bg-slate-900">
              {activeModalFilm.poster ? (
                <Image
                  src={activeModalFilm.poster}
                  alt={activeModalFilm.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-amber-600 to-slate-900 text-white">
                  <span className="text-5xl mb-3">🎬</span>
                  <h3 className="font-display text-2xl font-bold">{activeModalFilm.title}</h3>
                  <p className="font-accent text-xs text-amber-200 mt-2">{activeModalFilm.lang} Cinema</p>
                </div>
              )}
            </div>

            {/* Content Right */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-accent font-bold uppercase tracking-wider text-[#B45309]">
                    {activeModalFilm.lang}
                  </span>
                  {activeModalFilm.year && (
                    <span className="text-xs font-accent text-[#64748B] font-semibold">
                      Released {activeModalFilm.year}
                    </span>
                  )}
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] leading-tight m-0">
                  {activeModalFilm.title}
                </h2>

                {activeModalFilm.highlight && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-accent font-bold text-[#B45309]">
                    ⭐ Landmark Release / Award Recognition
                  </div>
                )}

                <div className="space-y-1.5 pt-2">
                  <p className="font-accent text-xs font-bold uppercase tracking-wider text-[#64748B] m-0">
                    Prakash Nathan's Role &amp; Contribution
                  </p>
                  <p className="font-accent text-sm text-[#0F172A] font-semibold leading-relaxed m-0">
                    {activeModalFilm.role}
                  </p>
                </div>

                {activeModalFilm.note && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-accent text-[#475569]">
                    {activeModalFilm.note}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/contact"
                  onClick={() => setActiveModalFilm(null)}
                  className="px-5 py-2.5 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
                    bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-white shadow-sm"
                >
                  Consult On Similar Projects →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ COLLABORATION CALLOUT ═════════════════════════════ */}
      <section className="relative py-20 px-6 text-center border-t border-slate-200/80 bg-slate-50">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="section-label">Commercial Collaboration</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Planning Your Next Film Release or Syndication Strategy?
          </h2>
          <p className="font-accent text-sm sm:text-base text-[#475569]">
            Benefit from 30+ years of distribution logistics, marketing consultancy, and commercial monetization expertise.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
                bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-white shadow-[0_4px_25px_rgba(217,119,6,0.35)] hover:shadow-[0_8px_35px_rgba(217,119,6,0.5)] hover:scale-105 transition-all duration-200"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '..', 'app', 'filmography', 'page.tsx'), tsContent);
console.log('Successfully updated app/filmography/page.tsx with compact cards and responsive 5-6 column grid!');
