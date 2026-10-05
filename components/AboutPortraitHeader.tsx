"use client";

import Image from "next/image";

export default function AboutPortraitHeader() {
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
          <Image
            src="/assets/about_profile.png"
            alt="Prakash Nathan - Executive Profile"
            fill
            className="object-cover object-[50%_20%]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
