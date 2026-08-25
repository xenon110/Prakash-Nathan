import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Prakash Nathan | Leadership, Entrepreneurship & Entertainment",
  description:
    "Building Businesses. Creating Opportunities. Navigating Change. Over three decades of experience across Technology, Media, Entertainment, and Entrepreneurship.",
};

const companies = [
  { name: "Disney", logo: "/assets/brands/disney.png", category: "Global Studio", type: "Media & Entertainment" },
  { name: "UTV", logo: "/assets/brands/utv.png", category: "Motion Pictures", type: "Media & Entertainment" },
  { name: "Sony", logo: "/assets/brands/sony.png", category: "Electronics & Media", type: "Technology & Enterprise" },
  { name: "Xerox", logo: "/assets/brands/xerox.png", category: "Enterprise Solutions", type: "Technology & Enterprise" },
  { name: "Ambuja Cements", logo: "/assets/brands/ambuja.png", category: "Building & Materials", type: "Technology & Enterprise" },
  { name: "Videocon", logo: "/assets/brands/videocon.png", category: "Consumer Goods", type: "Technology & Enterprise" },
  { name: "Moser Baer", logo: "/assets/brands/moserbaer.png", category: "Entertainment & Media", type: "Technology & Enterprise" },
  { name: "Eagle Eye Entertainment", logo: "/assets/brands/eagleeye.png", category: "Content & Distribution", type: "Media & Entertainment" },
  { name: "Ultra Media & Entertainment", logo: "/assets/brands/ultra.png", category: "Media Rights", type: "Media & Entertainment" },
  { name: "CineMarkets", logo: "/assets/brands/cinemarkets.jpg", category: "Digital Solutions", type: "Media & Entertainment" },
  { name: "Galaxy Office Automation", logo: "/assets/brands/galaxy.png", category: "IT Infrastructure", type: "Technology & Enterprise" },
  { name: "Unique Solutions", logo: "/assets/brands/unique_solutions.png", category: "Enterprise Tech", type: "Technology & Enterprise" },
  { name: "Wysetek Systems", logo: "/assets/brands/wysetek.png", category: "Systems Integration", type: "Technology & Enterprise" },
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
          {/* Left Column (Sticky Portrait) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative group rounded-3xl p-3 glass-card border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.1)] overflow-hidden">
              <div className="relative h-[460px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-inner">
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

            {/* Section 3: Experience Across Industries with Home Page Scrolling Ticker */}
            <div className="space-y-6">
              <div>
                <div className="section-label">Industry Breadth</div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Experience Across <span className="text-royal-gradient">Industries</span>
                </h2>
              </div>

              {/* Scrolling Ticker Marquee (From Home Page) */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="brands-track items-center">
                  {[...companies, ...companies].map((co, idx) => (
                    <div
                      key={`${co.name}-${idx}`}
                      className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100/80 border border-slate-200 shrink-0"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8]" />
                      <span className="font-accent text-xs font-bold text-[#334155] tracking-wider uppercase whitespace-nowrap">
                        {co.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid of Company Badges with Brand Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                {companies.map((co) => (
                  <div
                    key={co.name}
                    className="group relative p-4 rounded-2xl glass-card-interactive flex flex-col items-center justify-center text-center h-32"
                  >
                    {co.logo ? (
                      <div className="relative h-10 w-28 flex items-center justify-center mb-1.5">
                        <Image
                          src={co.logo}
                          alt={co.name}
                          width={110}
                          height={40}
                          className="max-h-10 max-w-[110px] w-auto h-auto object-contain filter group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    ) : (
                      <div className="h-10 flex items-center justify-center mb-1.5">
                        <span className="font-display font-bold text-base text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                          {co.name}
                        </span>
                      </div>
                    )}

                    <div className="text-[0.68rem] font-accent uppercase tracking-wider text-[#64748B] group-hover:text-[#1D4ED8] transition-colors font-medium">
                      {co.category}
                    </div>
                  </div>
                ))}
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

