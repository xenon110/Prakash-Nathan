"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";




/* ── Stats ──────────────────────────────────────────────────── */
const stats = [
  { num: "25+", label: "Years Experience" },
  { num: "15+", label: "Years in Media & Entertainment" },
  { num: "100+", label: "Film Projects" },
];

/* ── Services cards ─────────────────────────────────────────── */
const services = [
  { icon: "🎬", title: "Content Strategist", desc: "Eagle Eye for content that works emotionally, aesthetically and commercially — that's the Eagle Eye Entertainment way." },
  { icon: "🎯", title: "Marketing Maestro", desc: "End-to-end marketing for films — from communication strategy to media planning, budgeting and distribution consultancy." },
  { icon: "🤝", title: "Industry Connector", desc: "Bridging writers, producers and investors — facilitating narrations and green-lighting exceptional Indian cinema." },
  { icon: "💡", title: "Rights Syndicator", desc: "Maximizing commercial recoveries through music rights, satellite, digital and beyond-theatrical revenues." },
];

/* ── Timeline ───────────────────────────────────────────────── */
const timeline = [
  { year: "2015", title: "Founded Eagle Eye Entertainment LLP", desc: "Launched his entrepreneurial journey — content development, marketing, release and rights syndication." },
  { year: "2007–2015", title: "Disney & UTV", desc: "8-year tenure as part of the release strategy for many films of varying scale and languages across India." },
  { year: "Key Achievement", title: "Ventilator — 3 National Awards", desc: "Marketing Consultant for Priyanka Chopra's Purple Pebble Pictures, contributing to the national award-winning film." },
  { year: "Earlier Career", title: "Top Brands — Marketing & Sales", desc: "Over a decade with Ambuja Cement, Sony Electronics, Xerox India, Videocon and more." },
];

export default function HomePage() {
  const particleRef = useRef<HTMLDivElement>(null);

  /* spawn particles */
  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1;
      p.className = "particle";
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;bottom:${Math.random() * 30}%;
        --dur:${Math.random() * 6 + 4}s;--delay:${Math.random() * 5}s;
      `;
      container.appendChild(p);
    }
  }, []);

  /* scroll-trigger animations */
  useEffect(() => {
    const els = document.querySelectorAll(".animate-in-up");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-6">
        {/* BG */}
        <div className="fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(212,168,50,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(192,57,43,0.04) 0%, transparent 50%), #0A0A0C",
          }}
        />
        <div ref={particleRef} className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" />

        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A832]/25 bg-[#D4A832]/10 mb-6">
              <span className="badge-dot" />
              <span className="font-accent text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#D4A832]">
                Entertainment Industry Expert
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4 text-gold-gradient">
              Prakash Nathan
            </h1>

            <p className="font-accent text-base text-[#A8A4A0] tracking-wider mb-4">
              Entrepreneur <span className="text-[#D4A832] mx-1">·</span> Consultant{" "}
              <span className="text-[#D4A832] mx-1">·</span> Entertainment (Films)
            </p>

            <p className="text-[#A8A4A0] text-[0.97rem] leading-loose mb-8">
              25+ years shaping the Indian entertainment landscape.
              <br />
              Founder of{" "}
              <span className="text-[#D4A832] font-medium">Eagle Eye Entertainment LLP</span>.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-accent font-semibold text-sm no-underline
                  bg-gradient-to-r from-[#D4A832] to-[#F0C84A] text-[#0A0A0C]
                  shadow-[0_4px_20px_rgba(212,168,50,0.35)] hover:shadow-[0_8px_30px_rgba(212,168,50,0.5)]
                  hover:-translate-y-0.5 transition-all duration-200"
              >
                Discover My Journey
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-accent font-semibold text-sm no-underline
                  border border-[#D4A832] text-[#D4A832]
                  hover:bg-[#D4A832]/12 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 flex-wrap">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  <div>
                    <span className="block font-display text-3xl font-bold text-[#D4A832]">{s.num}</span>
                    <span className="block font-accent text-[0.65rem] uppercase tracking-[0.1em] text-[#6B6866] mt-0.5">{s.label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-10 bg-white/7 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative shrink-0">
            <div
              className="absolute inset-[-20px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(212,168,50,0.18) 0%, transparent 70%)",
                animation: "glowPulse 3s ease-in-out infinite",
              }}
            />
            <Image
              src="/assets/portrait.jpg"
              alt="Prakash Nathan"
              width={340}
              height={440}
              className="relative z-10 rounded-2xl border border-[#D4A832]/30 object-cover grayscale-[20%] contrast-105 hover:grayscale-0 hover:border-[#D4A832] transition-all duration-300"
              style={{ width: "280px", height: "360px" }}
              priority
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator text-[#6B6866] font-accent text-[0.65rem] uppercase tracking-[0.15em]">
          <div className="w-px h-10 bg-gradient-to-b from-[#D4A832] to-transparent" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#111115]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Who I Am</div>
          <h2 className="font-display text-4xl font-bold mb-10 leading-tight">
            A Visionary{" "}
            <span className="text-[#D4A832]">At The Intersection</span> of Business &amp; Cinema
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {services.map((card) => (
              <div
                key={card.title}
                className="animate-in-up relative bg-[#16161C] border border-white/7 rounded-2xl p-7
                  hover:-translate-y-1 hover:border-[#D4A832]/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_40px_rgba(212,168,50,0.18)]
                  transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4A832] to-[#F0C84A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="font-display text-lg font-semibold text-[#F0EDE8] mb-2">{card.title}</h3>
                <p className="text-[#A8A4A0] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-accent text-sm font-medium no-underline
                border border-white/10 text-[#A8A4A0] hover:border-[#D4A832] hover:text-[#D4A832] hover:translate-x-1
                transition-all duration-200"
            >
              Read Full Profile →
            </Link>
          </div>
        </div>
      </section>


      {/* ══ TIMELINE ════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#111115]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Milestones</div>
          <h2 className="font-display text-4xl font-bold mb-12 leading-tight">
            A Career Defined by <span className="text-[#D4A832]">Impact</span>
          </h2>
          <div className="relative pl-8 border-l-2 border-gradient-to-b from-[#D4A832] to-[#D4A832]/10"
            style={{ borderImage: "linear-gradient(to bottom, #D4A832, rgba(212,168,50,0.1)) 1" }}>
            {timeline.map((item, i) => (
              <div key={item.title} className="animate-in-up relative pb-12 last:pb-0 pl-8">
                <div className="absolute -left-[2.6rem] top-1.5 w-3.5 h-3.5 rounded-full bg-[#D4A832] border-[3px] border-[#111115] shadow-[0_0_0_2px_#D4A832]" />
                <span className="block font-accent text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#D4A832] mb-1">
                  {item.year}
                </span>
                <h3 className="font-display text-xl font-semibold text-[#F0EDE8] mb-2">{item.title}</h3>
                <p className="text-[#A8A4A0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

  );
}
