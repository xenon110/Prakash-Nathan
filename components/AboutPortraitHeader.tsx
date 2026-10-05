"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PORTRAIT_IMAGES = [
  { src: "/assets/p1.jpeg", alt: "Prakash Nathan", objectPos: "object-[70%_20%]" },
  { src: "/assets/p2.png", alt: "Prakash Nathan", objectPos: "object-[50%_25%]" },
];

export default function AboutPortraitHeader() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % PORTRAIT_IMAGES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:col-span-5 flex justify-center lg:justify-end">
      <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center">
        {/* Soft ambient backlight glow */}
        <div className="absolute inset-4 bg-gradient-to-tr from-[#1D4ED8]/25 via-[#38BDF8]/20 to-[#F59E0B]/15 blur-3xl rounded-full pointer-events-none" />

        {/* Seamless diluted edge image container */}
        <div
          className="relative w-full h-full rounded-3xl overflow-hidden"
          style={{
            maskImage: "radial-gradient(ellipse 78% 78% at 50% 48%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 95%)",
            WebkitMaskImage: "radial-gradient(ellipse 78% 78% at 50% 48%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 95%)",
          }}
        >
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
                className={`object-cover ${img.objectPos}`}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
