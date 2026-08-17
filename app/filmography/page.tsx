import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Filmography – Prakash Nathan",
  description: "Films and projects by Prakash Nathan — marketing, distribution and consulting.",
};

const films = [
  { badge: "Award Winner", year: "2016", title: "Ventilator", icon: "🏆", desc: "Priyanka Chopra's Purple Pebble Pictures. Marketing Consultancy. Won 3 National Awards." },
  { badge: "Release", year: "Eagle Eye", title: "Bollywood Diaries", icon: "🎬", desc: "Theatrically released under Eagle Eye Entertainment. Award-winning drama." },
  { badge: "Consulting", year: "Purple Pebble", title: "Sarvann", icon: "🎥", desc: "Marketing consultancy for Priyanka Chopra's Purple Pebble Pictures. Punjabi film." },
  { badge: "Consulting", year: "Purple Pebble", title: "Kaay Re Rascala", icon: "📽️", desc: "Marathi film produced by Purple Pebble Pictures. Marketing consultancy." },
  { badge: "Distribution", year: "UTV Disney Era", title: "Multi-Language Releases", icon: "🎞️", desc: "Part of release strategy for numerous films of varying scale and languages." },
  { badge: "Operations", year: "Eagle Eye", title: "Major Wide Releases", icon: "🌐", desc: "Supervised operational proceedings on some of the biggest releases in India and abroad." },
  { badge: "Partnership", year: "Ongoing", title: "Salman Khan Films", icon: "🎭", desc: "Active collaboration for marketing and distribution strategies." },
  { badge: "Partnership", year: "Ongoing", title: "Red Chillies Entertainment", icon: "✨", desc: "Work with Shah Rukh Khan's production house on content and marketing initiatives." },
];

export default function FilmographyPage() {
  return (
    <>
      {/* Banner */}
      <div className="relative pt-32 pb-14 px-6 bg-[#0A0A0C] border-b border-white/5 overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,168,50,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#6B6866] font-accent mb-5">
            <Link href="/" className="no-underline hover:text-[#D4A832] transition-colors">Home</Link>
            <span className="text-white/10">/</span>
            <span>Filmography</span>
          </div>
          <div className="section-label">Film Portfolio</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight text-[#F0EDE8]">
            Films &amp; <span className="text-[#D4A832]">Projects</span>
          </h1>
          <p className="text-[#A8A4A0] text-lg mt-4 max-w-xl">
            A showcase of films Prakash Nathan has been part of — across marketing, distribution, production consultancy and rights syndication.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-20 px-6 bg-[#0A0A0C]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Eagle Eye Entertainment &amp; Consulting Work</div>
          <h2 className="font-display text-4xl font-bold mb-10">
            Selected <span className="text-[#D4A832]">Film Projects</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {films.map((film) => (
              <div key={film.title}
                className="bg-[#16161C] border border-white/7 rounded-2xl overflow-hidden
                  hover:-translate-y-1.5 hover:border-[#D4A832]/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]
                  transition-all duration-300 group">
                {/* Poster */}
                <div className="relative h-44 bg-gradient-to-br from-[#111115] to-[#16161C] flex items-center justify-center">
                  <span className="text-5xl opacity-20">{film.icon}</span>
                  <span className="absolute top-3 left-3 bg-[#D4A832]/90 text-[#0A0A0C] font-accent text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {film.badge}
                  </span>
                </div>
                {/* Info */}
                <div className="p-5">
                  <div className="font-accent text-[0.7rem] text-[#D4A832] tracking-wide mb-1">{film.year}</div>
                  <div className="font-display text-base font-semibold text-[#F0EDE8] mb-1">{film.title}</div>
                  <div className="text-[#6B6866] text-xs leading-relaxed">{film.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#16161C] border border-white/7 rounded-2xl p-8 text-center">
            <p className="text-[#A8A4A0] text-sm leading-relaxed max-w-2xl mx-auto">
              This is a representative selection of Prakash Nathan's work. Over his 25+ year career, he has been associated with numerous films across Bollywood and regional cinema. For a detailed portfolio or collaboration opportunities, please{" "}
              <Link href="/contact" className="text-[#D4A832] no-underline hover:underline">get in touch</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
