import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Prakash Nathan | Leadership, Entrepreneurship & Entertainment",
  description:
    "Building Businesses. Creating Opportunities. Navigating Change. Over three decades of experience across Technology, Media, Entertainment, and Entrepreneurship.",
};

const techEnterpriseCompanies = [
  "Ambuja Cements",
  "Sony",
  "Xerox",
  "Videocon",
  "Moser Baer",
  "Galaxy Office Automation",
  "Wysetek Systems",
  "Unique Solutions",
];

const mediaEntertainmentCompanies = [
  "UTV",
  "Disney",
  "Ultra Media & Entertainment",
  "Eagle Eye Entertainment",
  "CineMarkets Digital Solutions",
];

const pillars = [
  {
    title: "Commercial Growth",
    desc: "Transforming ideas into resilient, revenue-generating commercial ventures.",
    accent: "#1D4ED8",
  },
  {
    title: "Strategic Partnerships",
    desc: "Forging synergistic alliances across studios, platforms, and technology leaders.",
    accent: "#E03E2D",
  },
  {
    title: "Content & Rights",
    desc: "Maximizing the full commercial lifecycle through distribution and syndication.",
    accent: "#F59E0B",
  },
  {
    title: "Technology Consulting",
    desc: "Empowering content with digital capabilities, marketing tech, and innovation.",
    accent: "#0284C7",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ══ HEADER BANNER ══════════════════════════════════════ */}
      <div className="relative pt-36 pb-16 px-6 overflow-hidden border-b border-slate-200/80">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-400/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#64748B] font-accent">
            <Link href="/" className="no-underline text-[#64748B] hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#1D4ED8] font-medium">About</span>
          </div>

          <div className="section-label">Executive Profile &amp; Journey</div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.12]">
            Building Businesses. <br />
            Creating Opportunities. <br />
            <span className="text-royal-gradient">Navigating Change.</span>
          </h1>

          <p className="font-accent text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed pt-2">
            With over three decades of experience across Technology, Media, Entertainment, and Entrepreneurship, Prakash Nathan has built his career across business development, sales, marketing, strategic partnerships, content, distribution, and commercial growth.
          </p>
        </div>
      </div>

      {/* ══ MAIN PROFILE BODY ══════════════════════════════════ */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Sticky Portrait & Pillars) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative group rounded-3xl p-3 glass-card border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.1)] overflow-hidden">
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/assets/portrait.jpg"
                  alt="Prakash Nathan"
                  fill
                  className="object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-lg">
                  <p className="font-display font-bold text-lg text-[#0F172A] m-0">Prakash Nathan</p>
                  <p className="font-accent text-xs text-[#1D4ED8] font-semibold m-0">30+ Years Leadership in Tech &amp; Entertainment</p>
                </div>
              </div>
            </div>

            {/* Strategic Strengths */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((item) => (
                <div key={item.title} className="p-4 rounded-2xl glass-card border border-slate-200/80 space-y-1">
                  <p className="font-display font-bold text-sm m-0" style={{ color: item.accent }}>{item.title}</p>
                  <p className="font-accent text-xs text-[#64748B] leading-snug m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Detailed Narrative Sections) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Leadership Overview Highlight */}
            <div className="p-7 sm:p-8 rounded-3xl glass-card border border-blue-200/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <p className="text-[#0F172A] font-display text-lg sm:text-xl leading-relaxed italic m-0">
                His professional journey includes leadership roles with organisations such as <span className="text-[#1D4ED8] font-bold not-italic">Ambuja Cements, Sony, Xerox, Videocon, Moser Baer, UTV, and Disney</span>, giving him experience across both enterprise and entertainment businesses with connects across Media &amp; Entertainment and IT industries.
              </p>
            </div>

            {/* Section 1: From Corporate Leadership to Entrepreneurship */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-accent font-semibold uppercase tracking-wider text-[#1D4ED8]">
                Entrepreneurial Evolution
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                From Corporate Leadership to <span className="text-royal-gradient">Entrepreneurship</span>
              </h2>
              <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed">
                <p>
                  In 2015, Prakash began his entrepreneurial journey with <span className="text-[#0F172A] font-semibold">Eagle Eye Entertainment LLP</span>, building a business focused on content development, marketing, film distribution, rights syndication, and strategic consulting. Over the years, he has worked with leading production houses, studios, creators, and industry stakeholders across the Indian entertainment ecosystem.
                </p>
                <p>
                  He also founded <span className="text-[#0F172A] font-semibold">CineMarkets Digital Solutions Pvt. Ltd.</span>, a digital solutions venture focused on the media and entertainment industry, bringing technology and digital capabilities into the business of content. CineMarkets has worked across digital campaigns, social media, and digital partnerships for film properties.
                </p>
              </div>
            </div>

            {/* Section 2: A Career Defined by Adaptability */}
            <div className="space-y-4 p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-accent font-semibold uppercase tracking-wider text-[#0284C7]">
                Core Philosophy
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                A Career Defined by <span className="text-royal-gradient">Adaptability</span>
              </h2>
              <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed">
                <p>
                  Across different industries and business environments, Prakash's strength has been his ability to recognise opportunity in changing circumstances.
                </p>
                <p>
                  He brings a practical approach to business, understanding the situation, identifying what can be leveraged, and adapting strategy to create value. This ability to move between industries, build relationships, and turn challenges into opportunities has shaped his entrepreneurial and leadership journey.
                </p>
              </div>
            </div>

            {/* Section 3: Experience Across Industries */}
            <div className="space-y-6">
              <div>
                <div className="section-label">Industry Breadth</div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Experience Across <span className="text-royal-gradient">Industries</span>
                </h2>
              </div>

              {/* Technology & Enterprise */}
              <div className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">💻</span>
                  <h3 className="font-display text-lg font-bold text-[#1D4ED8] m-0">
                    Technology &amp; Enterprise
                  </h3>
                </div>
                <p className="font-accent text-sm text-[#334155] leading-loose m-0 font-medium">
                  {techEnterpriseCompanies.join(" · ")}
                </p>
              </div>

              {/* Media & Entertainment */}
              <div className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🎬</span>
                  <h3 className="font-display text-lg font-bold text-[#E03E2D] m-0">
                    Media &amp; Entertainment
                  </h3>
                </div>
                <p className="font-accent text-sm text-[#334155] leading-loose m-0 font-medium">
                  {mediaEntertainmentCompanies.join(" · ")}
                </p>
              </div>
            </div>

            {/* Section 4: Today */}
            <div className="space-y-4 p-8 rounded-3xl bg-gradient-to-br from-blue-50 via-sky-50/40 to-slate-50 border border-blue-200/80 shadow-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-accent font-bold uppercase tracking-wider text-[#1D4ED8]">
                Present Focus
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Today
              </h2>
              <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed">
                <p>
                  Today, Prakash continues to work across business, technology, media, and entertainment, combining his corporate experience with an entrepreneurial mindset.
                </p>
                <p>
                  His focus remains on identifying opportunities, building strategic partnerships, supporting businesses and creators, technology consulting and turning ideas and changing circumstances into commercially meaningful outcomes.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/filmography"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
                    bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] text-white shadow-[0_0_20px_rgba(29,78,216,0.35)] hover:scale-105 transition-all"
                >
                  View 120+ Filmography →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-accent font-semibold text-xs uppercase tracking-wider no-underline
                    bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 shadow-sm transition-all"
                >
                  Connect With Prakash
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ═════════════════════════════════════════ */}
      <section className="relative py-20 px-6 text-center border-t border-slate-200/80 bg-slate-50">
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Ready to Explore Meaningful Partnerships?
          </h2>
          <p className="font-accent text-sm sm:text-base text-[#475569]">
            Whether you are expanding your business footprint, seeking distribution consultancy, or launching an entertainment initiative—reach out directly.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
                bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] text-white shadow-[0_4px_25px_rgba(29,78,216,0.35)] hover:shadow-[0_8px_35px_rgba(29,78,216,0.5)] hover:scale-105 transition-all duration-200"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
