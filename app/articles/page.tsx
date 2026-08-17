import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles – Prakash Nathan",
  description: "Industry insights, film marketing perspectives and entrepreneurship lessons from Prakash Nathan.",
};

const articles = [
  { tag: "Film Marketing", title: "The Art of Releasing a Film Theatrically in Today's Market", excerpt: "With OTT platforms reshaping audience habits, deciding the right date, scale and territory for a theatrical release has never been more critical. Prakash shares his process for making these strategic decisions." },
  { tag: "Content Strategy", title: "What Makes Content \"Distributor-Friendly\"?", excerpt: "Great content must also be commercially viable. Prakash dives into the crucial balance between creative storytelling and the hard commercial realities of film distribution." },
  { tag: "Entrepreneurship", title: "Why I Started Eagle Eye Entertainment in 2015", excerpt: "After 8 years at UTV Disney and stints at Moserbaer and other companies, Prakash felt the urge to build something of his own. Here's his story of taking the entrepreneurial leap." },
  { tag: "Rights & Revenue", title: "Beyond Box Office: Maximizing Film Revenue Through Rights Syndication", excerpt: "Theatrical revenue is just the beginning. Prakash explains how music rights, satellite deals, digital streaming and merchandising can dramatically increase a film's commercial success." },
  { tag: "Script Development", title: "How to Nurture a Script Before Approaching a Producer", excerpt: "Writers often rush to producers with half-baked ideas. Prakash shares his framework for identifying good content, strengthening scripts, and creating the right conditions for a green light." },
  { tag: "Industry", title: "Lessons from a Decade at UTV Disney", excerpt: "Eight years at one of India's most respected media companies taught Prakash the importance of operational discipline, scale management and cross-language film releases." },
];

export default function ArticlesPage() {
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
            <span>Articles</span>
          </div>
          <div className="section-label">Insights &amp; Perspectives</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight text-[#F0EDE8]">
            Articles &amp; <span className="text-[#D4A832]">Thoughts</span>
          </h1>
          <p className="text-[#A8A4A0] text-lg mt-4 max-w-xl">
            Industry perspectives, film marketing insights and entrepreneurship lessons from Prakash Nathan's 25+ year journey.
          </p>
        </div>
      </div>

      {/* Articles */}
      <section className="py-20 px-6 bg-[#0A0A0C]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Industry Insights</div>
          <h2 className="font-display text-4xl font-bold mb-10">
            From the <span className="text-[#D4A832]">Eagle Eye</span> Perspective
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a) => (
              <div key={a.title}
                className="relative bg-[#16161C] border border-white/7 rounded-2xl p-7
                  hover:-translate-y-1 hover:border-[#D4A832]/25 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                  transition-all duration-300 group overflow-hidden flex flex-col">
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4A832] to-[#F0C84A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="inline-block bg-[#D4A832]/10 border border-[#D4A832]/25 text-[#D4A832] font-accent text-[0.65rem] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full mb-4 self-start">
                  {a.tag}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#F0EDE8] mb-3 leading-snug flex-1">
                  {a.title}
                </h3>
                <p className="text-[#A8A4A0] text-sm leading-relaxed mb-5">{a.excerpt}</p>
                <span className="font-accent text-[0.78rem] font-semibold text-[#D4A832] tracking-wide group-hover:gap-3 inline-flex items-center gap-1.5 transition-all duration-200">
                  Read More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 text-center overflow-hidden border-y border-[#D4A832]/15"
        style={{ background: "linear-gradient(135deg, #12100C 0%, #1A1500 50%, #12100C 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-[#F0EDE8] mb-4">Want Prakash to Write for You?</h2>
          <p className="text-[#A8A4A0] mb-8">For speaking engagements, guest columns or media interviews, reach out directly.</p>
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
