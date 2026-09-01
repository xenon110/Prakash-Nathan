"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";

/* ── Gallery Slides for Coverflow Carousel ── */
const GALLERY_SLIDES: CoverflowSlide[] = [
  {
    src: "/assets/p1.jpeg",
    alt: "Prakash Nathan - Strategic Advisor",
    title: "Prakash Nathan",
    subtitle: "Founder & Strategic Advisor",
  },
  {
    src: "/assets/gallery/Amir Khan.png",
    alt: "Prakash Nathan with Aamir Khan",
    title: "Aamir Khan & Prakash Nathan",
    subtitle: "Global Cinema & Studio Partnerships",
  },
  {
    src: "/assets/gallery/Sachin Tendulkar.png",
    alt: "Prakash Nathan with Sachin Tendulkar",
    title: "Sachin Tendulkar & Prakash Nathan",
    subtitle: "Enterprise & Iconic Industry Leaders",
  },
  {
    src: "/assets/gallery/Rajkumar Hirani.png",
    alt: "Prakash Nathan with Rajkumar Hirani",
    title: "Rajkumar Hirani & Prakash Nathan",
    subtitle: "Blockbuster Content Lifecycle",
  },
  {
    src: "/assets/gallery/Abhishek Kapoor.png",
    alt: "Prakash Nathan with Abhishek Kapoor",
    title: "Abhishek Kapoor & Prakash Nathan",
    subtitle: "Creative Incubation & Distribution",
  },
  {
    src: "/assets/gallery/Aditi Rao Hydari.png",
    alt: "Prakash Nathan with Aditi Rao Hydari",
    title: "Aditi Rao Hydari & Prakash Nathan",
    subtitle: "Entertainment & Talent Alliances",
  },
  {
    src: "/assets/gallery/cii event.jpeg",
    alt: "Prakash Nathan at CII Event",
    title: "CII Leadership Forum",
    subtitle: "Keynote & Strategic Advisory",
  },
];

/* ── Brand organisations list ── */
const companies = [
  { name: "Disney", logo: "/assets/brands/disney.png", category: "Global Studio", color: "#1D4ED8" },
  { name: "UTV", logo: "/assets/brands/utv.png", category: "Motion Pictures", color: "#E03E2D" },
  { name: "Sony", logo: "/assets/brands/sony.png", category: "Electronics & Media", color: "#0F172A" },
  { name: "Xerox", logo: "/assets/brands/xerox.png", category: "Enterprise Solutions", color: "#E03E2D" },
  { name: "Ambuja Cements", logo: "/assets/brands/ambuja.png", category: "Building & Materials", color: "#1D4ED8" },
  { name: "Videocon", logo: "/assets/brands/videocon.png", category: "Consumer Goods", color: "#F59E0B" },
  { name: "Moser Baer", logo: "/assets/brands/moserbaer.png", category: "Entertainment & Media", color: "#0284C7" },
  { name: "Eagle Eye Entertainment", logo: "/assets/brands/eagleeye.png", category: "Content & Distribution", color: "#1D4ED8" },
  { name: "Ultra Media & Entertainment", logo: "/assets/brands/ultra.png", category: "Media Rights", color: "#E03E2D" },
  { name: "CineMarkets", logo: "/assets/brands/cinemarkets.jpg", category: "Digital Solutions", color: "#0284C7" },
  { name: "Galaxy Office Automation", logo: "/assets/brands/galaxy.png", category: "IT Infrastructure", color: "#1D4ED8" },
  { name: "Unique Solutions", logo: "/assets/brands/unique_solutions.png", category: "Enterprise Tech", color: "#F59E0B" },
  { name: "Wysetek Systems", logo: "/assets/brands/wysetek.png", category: "Systems Integration", color: "#0284C7" },
];

/* ── Strategic Pillars ── */
const pillars = [
  {
    icon: "📈",
    title: "Business Strategy & Commercial Growth",
    desc: "Architecting scalable commercial models, revenue diversification, and high-impact go-to-market roadmaps across enterprise and entertainment sectors.",
    tag: "Commercial Leadership",
    accentColor: "#1D4ED8",
    badgeBg: "rgba(29, 78, 216, 0.08)",
    badgeText: "#1D4ED8",
  },
  {
    icon: "🤝",
    title: "Strategic Partnerships & Alliances",
    desc: "Forging synergistic alliances between global studios, independent producers, technology platforms, and corporate stakeholders.",
    tag: "Synergy Building",
    accentColor: "#E03E2D",
    badgeBg: "rgba(224, 62, 45, 0.08)",
    badgeText: "#E03E2D",
  },
  {
    icon: "🎬",
    title: "Content Development & Distribution",
    desc: "End-to-end content lifecycle advisory—from script incubation and talent syndication to wide theatrical release and territory scaling.",
    tag: "120+ Film Projects",
    accentColor: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    badgeText: "#D97706",
  },
  {
    icon: "💡",
    title: "Rights Monetisation & Digital Innovation",
    desc: "Unlocking non-linear revenues through music, satellite, global OTT syndication, digital campaigns, and emerging media technologies.",
    tag: "Value Maximization",
    accentColor: "#0284C7",
    badgeBg: "rgba(2, 132, 199, 0.08)",
    badgeText: "#0284C7",
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#1D4ED8]/15 via-[#38BDF8]/15 to-[#F59E0B]/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
        <div ref={particleRef} className="absolute inset-0 pointer-events-none overflow-hidden -z-10" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 backdrop-blur-md shadow-sm">
              <span className="badge-dot" />
              <span className="font-accent text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#1D4ED8]">
                Entrepreneur · Consultant · Industry Leader
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#0F172A]">
                Prakash <span className="text-royal-gradient">Nathan</span>
              </h1>
              <p className="font-accent text-sm sm:text-base md:text-lg font-semibold text-[#1D4ED8] tracking-wide flex flex-wrap items-center gap-2 pt-1">
                <span>Entrepreneur</span>
                <span className="text-slate-300">|</span>
                <span>Consultant</span>
                <span className="text-slate-300">|</span>
                <span>Media, Entertainment &amp; Technology</span>
              </p>
            </div>

            {/* Bio Narrative */}
            <div className="space-y-4 text-[#475569] text-sm sm:text-[0.96rem] leading-relaxed">
              <p>
                With over three decades of experience across <span className="text-[#0F172A] font-semibold">Technology, Media, Entertainment, and Entrepreneurship</span>, Prakash Nathan has built a career defined by commercial leadership, strategic thinking, and business transformation.
              </p>
              <p>
                Having held leadership roles with globally recognised organisations before founding <span className="text-[#1D4ED8] font-bold">Eagle Eye Entertainment LLP</span>, he brings together enterprise expertise with a deep understanding of the entertainment industry. His work spans business strategy, strategic partnerships, content development, rights monetisation, and commercial growth—helping businesses and creators unlock long-term value.
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
                  bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] text-white
                  shadow-[0_4px_20px_rgba(29,78,216,0.35)] hover:shadow-[0_8px_30px_rgba(29,78,216,0.5)]
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore His Journey</span>
                <span className="text-base">→</span>
              </Link>
              <Link
                href="/filmography"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-accent font-semibold text-xs uppercase tracking-wider no-underline
                  bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 shadow-sm hover:border-[#1D4ED8]/50
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>120+ Film Projects</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-accent font-semibold text-xs uppercase tracking-wider no-underline
                  text-[#1D4ED8] hover:bg-blue-50 border border-blue-200/80
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>

          {/* Hero Right Visual / Portrait Card & Quote Banner */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-5">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Vibrant ambient background glow behind portrait */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1D4ED8]/25 via-[#38BDF8]/20 to-[#F59E0B]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-90" />
              
              <div className="relative rounded-3xl p-3 glass-card border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.1)] overflow-hidden">
                <div className="relative h-[380px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-inner">
                  <Image
                    src="/assets/p1.jpeg"
                    alt="Prakash Nathan - Entrepreneur, Consultant, Entertainment Leader"
                    fill
                    className="object-cover object-[75%_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating badge inside portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-display font-bold text-base text-[#0F172A] m-0">Prakash Nathan</p>
                        <p className="font-accent text-xs text-[#1D4ED8] font-semibold m-0">Founder &amp; Strategic Advisor</p>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 font-accent text-[0.68rem] font-bold text-[#1D4ED8]">
                        30+ Yrs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Banner directly at the bottom of the profile image */}
            <div className="max-w-sm sm:max-w-md w-full relative pl-5 border-l-4 border-[#1D4ED8] bg-white/95 p-4 sm:p-5 rounded-r-2xl border-t border-b border-r border-slate-200/80 shadow-[0_4px_20px_rgba(29,78,216,0.08)]">
              <p className="text-base sm:text-lg font-display italic text-[#0F172A] leading-snug m-0">
                “Where strategy drives growth, innovation creates opportunity, and ideas become lasting businesses.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS HIGHLIGHT BANNER ══════════════════════════════ */}
      <section className="relative py-10 px-6 bg-gradient-to-r from-blue-600/10 via-sky-500/10 to-blue-600/10 border-y border-blue-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-[#1D4ED8] block mb-1">
              Leadership Milestone
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] m-0">
              30+ YEARS <span className="text-[#1D4ED8]">·</span> 4 INDUSTRIES <span className="text-[#E03E2D]">·</span> MULTIPLE BUSINESS JOURNEYS
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
              bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] text-white hover:shadow-[0_0_25px_rgba(29,78,216,0.4)] hover:scale-105 transition-all duration-200 shrink-0"
          >
            <span>Explore His Journey</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* ══ A CAREER BUILT ACROSS LEADING ORGANISATIONS ════════ */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-400/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="section-label">Enterprise &amp; Studio Heritage</div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A]">
              A Career Built Across <span className="text-royal-gradient">Leading Organisations</span>
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
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
                    <span className="font-display font-bold text-lg sm:text-xl text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                      {co.name}
                    </span>
                  </div>
                )}

                <div className="text-[0.7rem] font-accent uppercase tracking-wider text-[#64748B] group-hover:text-[#1D4ED8] transition-colors mt-auto font-medium">
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
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
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
                Strategic Leadership <span className="text-royal-gradient">&amp; Value Creation</span>
              </h2>
            </div>
            <Link
              href="/filmography"
              className="inline-flex items-center gap-2 font-accent text-xs font-bold uppercase tracking-wider text-[#1D4ED8] hover:text-[#1E40AF] transition-colors no-underline"
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
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: p.accentColor }}
                />
                
                <div className="space-y-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: p.badgeBg, borderColor: p.accentColor }}
                  >
                    {p.icon}
                  </div>
                  
                  <div
                    className="inline-block px-3 py-1 rounded-full font-accent text-[0.65rem] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: p.badgeBg, color: p.badgeText }}
                  >
                    {p.tag}
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0F172A] leading-snug group-hover:text-[#1D4ED8] transition-colors">
                    {p.title}
                  </h3>

                  <p className="font-accent text-sm text-[#475569] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-accent text-[#64748B]">
                  <span>Proven Track Record</span>
                  <span className="group-hover:translate-x-1 transition-transform font-bold" style={{ color: p.accentColor }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CALL TO ACTION BANNER (EXECUTIVE LIGHT UI/UX DESIGN) ══════════════ */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative rounded-3xl bg-white/95 backdrop-blur-xl p-8 sm:p-12 lg:p-16 border border-blue-200/80 shadow-[0_20px_60px_rgba(29,78,216,0.08)] overflow-hidden">
          {/* Soft Light Backdrop Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#1D4ED8]/10 via-[#38BDF8]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F59E0B]/10 via-blue-400/5 to-transparent blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Side */}
            <div className="lg:col-span-7 space-y-7 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 backdrop-blur-md">
                <span className="badge-dot" />
                <span className="font-accent text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#1D4ED8]">
                  Strategic Collaboration &amp; Advisory
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1]">
                  Partnering at the Intersection of <span className="text-royal-gradient">Business &amp; Innovation</span>
                </h2>
                <p className="font-accent text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl">
                  From commercial leadership and strategic entertainment alliances to global content distribution and enterprise technology consulting—we bring three decades of experience to unlock sustainable value.
                </p>
              </div>

              {/* Value Highlights Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#1D4ED8]/40 transition-colors">
                  <div className="font-display text-2xl font-bold text-[#0F172A]">30+ Yrs</div>
                  <div className="font-accent text-xs font-semibold text-[#1D4ED8] mt-0.5">Leadership Track Record</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#1D4ED8]/40 transition-colors">
                  <div className="font-display text-2xl font-bold text-[#0F172A]">120+ Films</div>
                  <div className="font-accent text-xs font-semibold text-[#0284C7] mt-0.5">Content &amp; Distribution</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#1D4ED8]/40 transition-colors">
                  <div className="font-display text-2xl font-bold text-[#0F172A]">15+ Brands</div>
                  <div className="font-accent text-xs font-semibold text-[#D97706] mt-0.5">Global Studios &amp; Tech</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
                    bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] text-white
                    shadow-[0_4px_25px_rgba(29,78,216,0.35)] hover:shadow-[0_8px_35px_rgba(29,78,216,0.5)]
                    hover:scale-105 transition-all duration-200"
                >
                  <span>Initiate a Conversation</span>
                  <span className="text-base">→</span>
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-accent font-semibold text-xs uppercase tracking-wider no-underline
                    bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 shadow-sm
                    hover:scale-105 transition-all duration-200"
                >
                  <span>View Moments &amp; Gallery</span>
                </Link>
              </div>
            </div>

            {/* Right Coverflow 3D Interactive Carousel */}
            <div className="lg:col-span-5 relative flex justify-center items-center py-4">
              <div className="w-full max-w-sm sm:max-w-md overflow-visible">
                <CoverflowCarousel
                  slides={GALLERY_SLIDES}
                  showCaption
                  showPagination
                  showNavigation
                  cardWidth="clamp(160px, 24vw, 240px)"
                  className="py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
