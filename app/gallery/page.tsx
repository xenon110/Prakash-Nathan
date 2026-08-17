import type { Metadata } from "next";
import Link from "next/link";
import ScrollMorphGallery from "@/components/ui/scroll-morph-hero";

export const metadata: Metadata = {
  title: "Gallery – Prakash Nathan",
  description: "Explore behind-the-scenes moments, film premieres, and industry milestones.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Banner */}
      <div className="relative pt-28 pb-6 px-6 bg-[#0A0A0C] border-b border-white/5 overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,168,50,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#6B6866] font-accent mb-5">
            <Link href="/" className="no-underline hover:text-[#D4A832] transition-colors">Home</Link>
            <span className="text-white/10">/</span>
            <span>Gallery</span>
          </div>
          <div className="section-label">Moments & Memories</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight text-[#F0EDE8]">
            Photo <span className="text-[#D4A832]">Gallery</span>
          </h1>
          <p className="text-[#A8A4A0] text-lg mt-4 max-w-xl">
            A visual journey through premieres, productions, and key milestones in the entertainment industry.
          </p>
        </div>
      </div>

      {/* Interactive Gallery Component */}
      <section className="bg-[#0A0A0C] pt-0 pb-16 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto h-[620px] relative">
          <ScrollMorphGallery />
        </div>
      </section>
      
      {/* CTA */}
      <section className="relative py-20 px-6 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #12100C 0%, #1A1500 50%, #12100C 100%)" }}>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-display text-4xl font-bold text-[#F0EDE8] mb-4">Want to create magic together?</h2>
          <p className="text-[#A8A4A0] mb-8">Reach out for film marketing, production consulting or syndication inquiries.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-accent font-semibold text-sm no-underline
              bg-gradient-to-r from-[#D4A832] to-[#F0C84A] text-[#0A0A0C]
              shadow-[0_4px_20px_rgba(212,168,50,0.35)] hover:shadow-[0_8px_30px_rgba(212,168,50,0.5)] hover:-translate-y-0.5 transition-all duration-200">
            Contact Prakash
          </Link>
        </div>
      </section>
    </>
  );
}
