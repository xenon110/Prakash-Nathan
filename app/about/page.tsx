import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Prakash Nathan",
  description:
    "25+ years in Marketing, Sales & Indian Film Industry. Founder of Eagle Eye Entertainment LLP.",
};

const tags = [
  "Film Marketing", "Content Strategy", "Rights Syndication",
  "Distribution", "Entrepreneurship", "Consulting", "Script Development",
];

export default function AboutPage() {
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
            <span>About</span>
          </div>
          <div className="section-label">The Man Behind The Vision</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight text-[#F0EDE8]">
            About <span className="text-[#D4A832]">Prakash Nathan</span>
          </h1>
          <p className="text-[#A8A4A0] text-lg mt-4 max-w-xl">
            Entrepreneur, Film Marketing Consultant & Founder of Eagle Eye Entertainment LLP
          </p>
        </div>
      </div>

      {/* Body */}
      <section className="py-20 px-6 bg-[#0A0A0C]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Left — portrait */}
          <div className="md:sticky md:top-24">
            <Image
              src="/assets/portrait.jpg"
              alt="Prakash Nathan"
              width={400}
              height={530}
              className="w-full max-w-sm rounded-2xl border border-[#D4A832]/25 object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300"
            />
            <div className="flex flex-wrap gap-2 mt-5">
              {tags.map((t) => (
                <span key={t}
                  className="bg-[#D4A832]/10 border border-[#D4A832]/25 text-[#D4A832] font-accent text-[0.72rem] font-semibold
                    px-3 py-1 rounded-full tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — bio */}
          <div>
            <div className="section-label">Biography</div>
            <h2 className="font-display text-3xl font-bold mb-6 leading-snug">
              25 Years of <span className="text-[#D4A832]">Excellence</span> Across Industries
            </h2>

            {/* Intro Highlight */}
            <div className="bg-[#D4A832]/10 border-l-[3px] border-[#D4A832] rounded-r-xl px-5 py-5 mb-8">
              <p className="text-[#F0EDE8] italic text-[1.02rem] leading-loose m-0">
                Prakash Nathan is a seasoned Business Consultant with over 25 years of experience in Marketing and Sales, including 15 years dedicated to Media & Entertainment. His illustrious career spans 8 years with Disney & UTV, 5 years as an entrepreneur, and leadership roles at Moserbaer, Ambuja Cement, Sony Electronics, Videocon, and Xerox India.
              </p>
            </div>

            {/* Grid of Expertise Areas */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div className="bg-[#16161C] border border-white/7 rounded-xl p-6 hover:border-[#D4A832]/30 transition-colors">
                <h3 className="font-display text-lg font-semibold text-[#D4A832] mb-3">Eagle Eye Entertainment</h3>
                <p className="text-[#A8A4A0] text-sm leading-relaxed">
                  Founded in 2015, specializing in content development, strategy, marketing, film releases, and rights syndication. Collaborates with industry giants like Salman Khan Films, Red Chillies Entertainment, Purple Pebble Pictures, and Zee.
                </p>
              </div>

              <div className="bg-[#16161C] border border-white/7 rounded-xl p-6 hover:border-[#D4A832]/30 transition-colors">
                <h3 className="font-display text-lg font-semibold text-[#D4A832] mb-3">End-to-End Marketing</h3>
                <p className="text-[#A8A4A0] text-sm leading-relaxed">
                  Strategizes entire marketing campaigns, including communication, media planning, budgeting, and distribution consultancy. Contributed significantly to award-winning films like <em>Ventilator</em> (3 National Awards).
                </p>
              </div>

              <div className="bg-[#16161C] border border-white/7 rounded-xl p-6 hover:border-[#D4A832]/30 transition-colors">
                <h3 className="font-display text-lg font-semibold text-[#D4A832] mb-3">Release & Syndication</h3>
                <p className="text-[#A8A4A0] text-sm leading-relaxed">
                  Leverages UTV-Disney experience to guide producers on theatrical release strategies (date, scale, territory) and maximizes commercial recoveries through music, satellite, digital, and merchandising rights syndication.
                </p>
              </div>

              <div className="bg-[#16161C] border border-white/7 rounded-xl p-6 hover:border-[#D4A832]/30 transition-colors">
                <h3 className="font-display text-lg font-semibold text-[#D4A832] mb-3">Nurturing Content</h3>
                <p className="text-[#A8A4A0] text-sm leading-relaxed">
                  Identifies and strengthens scripts to make them "distributor-friendly." Facilitates meetings between writers, producers, and investors to green-light commercially viable and emotionally resonant cinema.
                </p>
              </div>
            </div>

            <div className="space-y-5 mb-10">
              <h3 className="font-display text-xl font-bold text-[#F0EDE8]">Operational Mastery & Content Acquisition</h3>
              <p className="text-[#A8A4A0] text-[0.97rem] leading-loose">
                During his UTV days, Prakash gained deep exposure to post-production and release operations. He understands the technicalities perfectly and maintains strong connections with key players like UFO, Real Image, Scrabble, and Kay Sera Sera, supervising operational proceedings on some of the biggest releases in India and abroad.
              </p>
              <p className="text-[#A8A4A0] text-[0.97rem] leading-loose">
                Beyond new content development, Prakash has extensive experience in content acquisition—a discipline he pioneered during his time at Moserbaer over 12 years ago and successfully continues today through Eagle Eye Entertainment.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-2 px-7 py-3 rounded-full font-accent font-semibold text-sm no-underline
                bg-gradient-to-r from-[#D4A832] to-[#F0C84A] text-[#0A0A0C]
                shadow-[0_4px_20px_rgba(212,168,50,0.35)] hover:shadow-[0_8px_30px_rgba(212,168,50,0.5)]
                hover:-translate-y-0.5 transition-all duration-200"
            >
              Work With Prakash →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 text-center overflow-hidden border-y border-[#D4A832]/15"
        style={{ background: "linear-gradient(135deg, #12100C 0%, #1A1500 50%, #12100C 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-[#F0EDE8] mb-4">Ready to Collaborate?</h2>
          <p className="text-[#A8A4A0] mb-8">Whether you're a writer, producer or brand — let's create something extraordinary.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-accent font-semibold text-sm no-underline
              bg-gradient-to-r from-[#D4A832] to-[#F0C84A] text-[#0A0A0C]
              shadow-[0_4px_20px_rgba(212,168,50,0.35)] hover:shadow-[0_8px_30px_rgba(212,168,50,0.5)] hover:-translate-y-0.5 transition-all duration-200">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
