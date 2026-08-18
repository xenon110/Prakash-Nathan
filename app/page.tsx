"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ── Brand organisations list ── */
const companies = [
  { name: "Disney", logo: "/assets/brands/disney.png", category: "Global Studio" },
  { name: "UTV", logo: "/assets/brands/utv.png", category: "Motion Pictures" },
  { name: "Sony", logo: "/assets/brands/sony.png", category: "Electronics & Media" },
  { name: "Xerox", logo: "/assets/brands/xerox.png", category: "Enterprise Solutions" },
  { name: "Ambuja Cements", logo: "/assets/brands/ambuja.png", category: "Building & Materials" },
  { name: "Videocon", logo: "/assets/brands/videocon.png", category: "Consumer Goods" },
  { name: "Moser Baer", logo: "/assets/brands/moserbaer.png", category: "Entertainment & Media" },
  { name: "Eagle Eye Entertainment", logo: "/assets/brands/eagleeye.png", category: "Content & Distribution" },
  { name: "Ultra Media & Entertainment", logo: null, category: "Media Rights" },
  { name: "CineMarkets", logo: null, category: "Digital Solutions" },
  { name: "Galaxy Office Automation", logo: null, category: "IT Infrastructure" },
  { name: "Unique Solutions", logo: null, category: "Enterprise Tech" },
  { name: "Wysetek Systems", logo: null, category: "Systems Integration" },
];

/* ── Strategic Pillars ── */
const pillars = [
  {
    icon: "📈",
    title: "Business Strategy & Commercial Growth",
    desc: "Architecting scalable commercial models, revenue diversification, and high-impact go-to-market roadmaps across enterprise and entertainment sectors.",
    tag: "Commercial Leadership",
  },
  {
    icon: "🤝",
    title: "Strategic Partnerships & Alliances",
    desc: "Forging synergistic alliances between global studios, independent producers, technology platforms, and corporate stakeholders.",
    tag: "Synergy Building",
  },
  {
    icon: "🎬",
    title: "Content Development & Distribution",
    desc: "End-to-end content lifecycle advisory—from script incubation and talent syndication to wide theatrical release and territory scaling.",
    tag: "120+ Film Projects",
  },
  {
    icon: "💡",
    title: "Rights Monetisation & Digital Innovation",
    desc: "Unlocking non-linear revenues through music, satellite, global OTT syndication, digital campaigns, and emerging media technologies.",
    tag: "Value Maximization",
  },
];

export default function HomePage() {
  const particleRef = useRef<HTMLDivElement>(null);

  /* Spawn ambient particles */
  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1.5;
      p.className = "particle";
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;bottom:${Math.random() * 35}%;
        --dur:${Math.random() * 7 + 4}s;--delay:${Math.random() * 4}s;
      `;
      container.appendChild(p);
    }
  }, []);

  return (
    <>
      {/* ══ HERO SECTION ════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
        {/* Dynamic Glows inside hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#F59E0B]/20 via-[#A78BFA]/20 to-[#38BDF8]/20 blur-[120px] pointer-events-none -z-10 rounded-full" />
        <div ref={particleRef} className="absolute inset-0 pointer-events-none overflow-hidden -z-10" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 backdrop-blur-md shadow-sm">
              <span className="badge-dot" />
              <span className="font-accent text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#B45309]">
                Entrepreneur · Consultant · Industry Leader
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#0F172A]">
                Prakash <span className="text-gold-gradient">Nathan</span>
              </h1>
              <p className="font-accent text-sm sm:text-base md:text-lg font-semibold text-[#B45309] tracking-wide flex flex-wrap items-center gap-2 pt-1">
                <span>Entrepreneur</span>
                <span className="text-slate-300">|</span>
                <span>Consultant</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#0F172A]">Media, Entertainment &amp; Technology</span>
              </p>
            </div>

            {/* Tagline Lead Highlight */}
            <div className="relative pl-5 border-l-4 border-[#D97706] bg-white/90 p-5 rounded-r-2xl border-t border-b border-r border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <p className="text-lg sm:text-xl font-display italic text-[#0F172A] leading-snug m-0">
                “Where strategy drives growth, innovation creates opportunity, and ideas become lasting businesses.”
              </p>
            </div>

            {/* Bio Narrative */}
            <div className="space-y-4 text-[#475569] text-sm sm:text-[0.96rem] leading-relaxed">
              <p>
                With over three decades of experience across <span className="text-[#0F172A] font-semibold">Technology, Media, Entertainment, and Entrepreneurship</span>, Prakash Nathan has built a career defined by commercial leadership, strategic thinking, and business transformation.
              </p>
              <p>
                Having held leadership roles with globally recognised organisations before founding <span className="text-[#B45309] font-bold">Eagle Eye Entertainment LLP</span>, he brings together enterprise expertise with a deep understanding of the entertainment industry. His work spans business strategy, strategic partnerships, content development, rights monetisation, and commercial growth—helping businesses and creators unlock long-term value.
              </p>
              <p className="hidden sm:block text-[#64748B]">
                A defining strength of his journey has been the ability to recognise opportunity in changing circumstances, turn challenges into possibilities, and adapt strategies to create meaningful outcomes across evolving markets.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
                  bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-white
                  shadow-[0_4px_20px_rgba(217,119,6,0.35)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.5)]
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore His Journey</span>
                <span className="text-base">→</span>
              </Link>
              <Link
                href="/filmography"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-accent font-semibold text-xs uppercase tracking-wider no-underline
                  bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 shadow-sm hover:border-[#D97706]/50
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>120+ Film Projects</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-accent font-semibold text-xs uppercase tracking-wider no-underline
                  text-[#B45309] hover:bg-amber-500/10 border border-amber-500/30
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>

          {/* Hero Right Visual / Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Vibrant ambient background glow behind portrait */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F59E0B]/35 via-[#A78BFA]/30 to-[#38BDF8]/25 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-90" />
              
              <div className="relative rounded-3xl p-3 glass-card border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.12)] overflow-hidden">
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-inner">
                  <Image
                    src="/assets/portrait.jpg"
                    alt="Prakash Nathan - Entrepreneur, Consultant, Entertainment Leader"
                    fill
                    className="object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating badge inside portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-display font-bold text-base text-[#0F172A] m-0">Prakash Nathan</p>
                        <p className="font-accent text-xs text-[#B45309] font-medium m-0">Founder &amp; Strategic Advisor</p>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 font-accent text-[0.68rem] font-bold text-[#B45309]">
                        30+ Yrs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS HIGHLIGHT BANNER ══════════════════════════════ */}
      <section className="relative py-10 px-6 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border-y border-amber-500/20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-[#B45309] block mb-1">
              Leadership Milestone
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] m-0">
              30+ YEARS <span className="text-[#D97706]">·</span> 4 INDUSTRIES <span className="text-[#D97706]">·</span> MULTIPLE BUSINESS JOURNEYS
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
              bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white hover:shadow-[0_0_25px_rgba(217,119,6,0.4)] hover:scale-105 transition-all duration-200 shrink-0"
          >
            <span>Explore His Journey</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* ══ A CAREER BUILT ACROSS LEADING ORGANISATIONS ════════ */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#A78BFA]/20 blur-[130px] pointer-events-none -z-10 rounded-full" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="section-label">Enterprise &amp; Studio Heritage</div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A]">
              A Career Built Across <span className="text-gold-gradient">Leading Organisations</span>
            </h2>
            <p className="font-accent text-sm sm:text-base text-[#475569] leading-relaxed">
              Decades of commercial leadership, scaling global brands, entertainment studios, enterprise powerhouses, and high-growth digital ventures.
            </p>
          </div>

          {/* Grid of Company Badges with Images & Rich Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
            {companies.map((co) => (
              <div
                key={co.name}
                className="group relative p-5 rounded-2xl glass-card-interactive flex flex-col items-center justify-center text-center h-36"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                {co.logo ? (
                  <div className="relative h-12 w-32 flex items-center justify-center mb-2">
                    <Image
                      src={co.logo}
                      alt={co.name}
                      width={120}
                      height={48}
                      className="max-h-11 max-w-[120px] w-auto h-auto object-contain filter group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-12 flex items-center justify-center mb-2">
                    <span className="font-display font-bold text-lg sm:text-xl text-[#0F172A] group-hover:text-gold-gradient transition-colors">
                      {co.name}
                    </span>
                  </div>
                )}

                <div className="text-[0.7rem] font-accent uppercase tracking-wider text-[#64748B] group-hover:text-[#B45309] transition-colors mt-auto font-medium">
                  {co.category}
                </div>
              </div>
            ))}
          </div>

          {/* Ticker marquee for endless energy */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="brands-track items-center">
              {[...companies, ...companies].map((co, idx) => (
                <div
                  key={`${co.name}-${idx}`}
                  className="flex items-center gap-3 px-5 py-2 rounded-full bg-slate-100/80 border border-slate-200 shrink-0"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                  <span className="font-accent text-xs font-semibold text-[#334155] tracking-wider uppercase whitespace-nowrap">
                    {co.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ STRATEGIC PILLARS / COMMERCIAL EXPERTISE ═══════════ */}
      <section className="py-24 px-6 bg-slate-50/70 relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="section-label">Core Capabilities</div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A]">
                Strategic Leadership <span className="text-gold-gradient">&amp; Value Creation</span>
              </h2>
            </div>
            <Link
              href="/filmography"
              className="inline-flex items-center gap-2 font-accent text-xs font-bold uppercase tracking-wider text-[#B45309] hover:text-[#0F172A] transition-colors no-underline"
            >
              <span>Explore 120+ Film Portfolio</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="relative p-8 rounded-3xl glass-card-interactive flex flex-col justify-between group overflow-hidden"
              >
                {/* Top border accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#7C3AED] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 font-accent text-[0.65rem] font-bold uppercase tracking-widest text-[#B45309]">
                    {p.tag}
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0F172A] leading-snug group-hover:text-[#D97706] transition-colors">
                    {p.title}
                  </h3>

                  <p className="font-accent text-sm text-[#475569] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-accent text-[#64748B]">
                  <span>Proven Track Record</span>
                  <span className="text-[#D97706] group-hover:translate-x-1 transition-transform font-bold">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CALL TO ACTION BANNER ══════════════════════════════ */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative rounded-3xl p-10 sm:p-16 glass-card border border-amber-500/30 text-center overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          {/* Internal colorful glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-[#B45309]">
              Let's Collaborate
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A]">
              Partnering at the Intersection of <span className="text-gold-gradient">Business &amp; Innovation</span>
            </h2>
            <p className="font-accent text-sm sm:text-base text-[#475569] leading-relaxed">
              Whether you are looking for business transformation, strategic entertainment partnerships, content syndication, or technology consulting—let's build sustainable growth together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
                  bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-white shadow-[0_4px_25px_rgba(217,119,6,0.35)] hover:shadow-[0_8px_35px_rgba(217,119,6,0.5)] hover:scale-105 transition-all duration-200"
              >
                Initiate a Conversation →
              </Link>
              <Link
                href="/gallery"
                className="px-7 py-3.5 rounded-full font-accent font-semibold text-xs uppercase tracking-wider no-underline
                  bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 shadow-sm transition-all duration-200"
              >
                View Moments &amp; Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

