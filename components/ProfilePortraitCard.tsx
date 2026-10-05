"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PORTRAIT_IMAGES = [
  {
    src: "/assets/p1.jpeg",
    alt: "Prakash Nathan - Strategic Advisor",
    objectPos: "object-[75%_20%]",
  },
  {
    src: "/assets/p2.png",
    alt: "Prakash Nathan - Media & Technology Leader",
    objectPos: "object-[50%_25%]",
  },
];

export default function ProfilePortraitCard({ showQuote = true }: { showQuote?: boolean }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % PORTRAIT_IMAGES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-5">
      <div className="relative group max-w-sm sm:max-w-md w-full">
        {/* Vibrant ambient background glow behind portrait */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#1D4ED8]/25 via-[#38BDF8]/20 to-[#F59E0B]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-90" />

        <div className="relative rounded-3xl p-3 glass-card border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.1)] overflow-hidden">
          <div className="relative h-[380px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900">
            {PORTRAIT_IMAGES.map((img, idx) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover ${img.objectPos} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  priority={idx === 0}
                />
              </div>
            ))}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 z-20 pointer-events-none" />

            {/* Floating badge inside portrait */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-lg z-30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-base text-[#0F172A] m-0">Prakash Nathan</p>
                  <p className="font-accent text-xs text-[#1D4ED8] font-semibold m-0">Founder &amp; Strategic Advisor</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* Indicator Dots */}
                  <div className="flex items-center gap-1.5 mr-1">
                    {PORTRAIT_IMAGES.map((_, i) => (
                      <span
                        key={i}
                        className={`block rounded-full transition-all duration-300 ${
                          i === currentIdx ? "w-4 h-1.5 bg-[#1D4ED8]" : "w-1.5 h-1.5 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 font-accent text-[0.68rem] font-bold text-[#1D4ED8]">
                    30+ Yrs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Banner directly at the bottom of the profile image */}
      {showQuote && (
        <div className="max-w-sm sm:max-w-md w-full relative pl-5 border-l-4 border-[#1D4ED8] bg-white/95 p-4 sm:p-5 rounded-r-2xl border-t border-b border-r border-slate-200/80 shadow-[0_4px_20px_rgba(29,78,216,0.08)]">
          <p className="text-xl sm:text-2xl font-quote italic font-semibold text-[#0F172A] leading-snug m-0 tracking-wide">
            “A Jack of all Traits”
          </p>
        </div>
      )}
    </div>
  );
}
