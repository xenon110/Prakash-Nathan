"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryItem {
  name: string;
  category: "Actors & Stars" | "Directors & Creators" | "Icons & Luminaries" | "Industry Events";
  src: string;
  note?: string;
}

const galleryData: GalleryItem[] = [
  { name: "Sachin Tendulkar", category: "Icons & Luminaries", src: "/assets/gallery/Sachin Tendulkar.png", note: "Cricket Legend" },
  { name: "Amir Khan", category: "Actors & Stars", src: "/assets/gallery/Amir Khan.png", note: "Iconic Bollywood Actor & Producer" },
  { name: "Shraddha Kapoor", category: "Actors & Stars", src: "/assets/gallery/Shraddha Kapoor.png", note: "Leading Bollywood Actress" },
  { name: "Rajkumar Hirani", category: "Directors & Creators", src: "/assets/gallery/Rajkumar Hirani.png", note: "Acclaimed Film Director (PK, 3 Idiots)" },
  { name: "Kabir Khan", category: "Directors & Creators", src: "/assets/gallery/Kabir Khan.jpeg", note: "Director (Bajrangi Bhaijaan, 83)" },
  { name: "Hansal Mehta", category: "Directors & Creators", src: "/assets/gallery/Hansal Mehta.jpeg", note: "National Award-winning Filmmaker" },
  { name: "Prakash Jha", category: "Directors & Creators", src: "/assets/gallery/Prakash Jha.png", note: "Acclaimed Filmmaker (Raajneeti, Gangaajal)" },
  { name: "Ashutosh Gowariker", category: "Directors & Creators", src: "/assets/gallery/Ashutosh Gowariker.png", note: "Academy Award Nominated Director" },
  { name: "Abhishek Kapoor", category: "Directors & Creators", src: "/assets/gallery/Abhishek Kapoor.png", note: "Director (Kai Po Che!, Rock On!)" },
  { name: "Mahesh Manjrekar", category: "Directors & Creators", src: "/assets/gallery/Mahesh Manjrekar.png", note: "Filmmaker & Veteran Actor" },
  { name: "Nitin Kakkar", category: "Directors & Creators", src: "/assets/gallery/Nitin Kakkar.jpeg", note: "National Award-winning Director (Filmistaan)" },
  { name: "Rajesh Mapuskar", category: "Directors & Creators", src: "/assets/gallery/Rajesh Mapuskar.png", note: "National Award-winning Director (Ventilator)" },
  { name: "Kaizad Gustad", category: "Directors & Creators", src: "/assets/gallery/Kaizad Gustad.jpeg", note: "Filmmaker & Writer" },
  { name: "Rakesh & Hrithik Roshan", category: "Industry Events", src: "/assets/gallery/Roshan se Roshan tak event- Rakesh & Rithik Roshan.png", note: "Roshan Se Roshan Tak Event" },
  { name: "Raghuram Rajan", category: "Icons & Luminaries", src: "/assets/gallery/Raghuram Rajan.png", note: "Former Governor of RBI & Renowned Economist" },
  { name: "Carolina Marin", category: "Icons & Luminaries", src: "/assets/gallery/Carolina Marin.png", note: "Olympic Badminton Champion" },
  { name: "Prithviraj Sukumaran", category: "Actors & Stars", src: "/assets/gallery/Prithviraj Sukumaran.png", note: "Superstar, Director & Producer" },
  { name: "Govinda", category: "Actors & Stars", src: "/assets/gallery/Govinda.jpeg", note: "Legendary Bollywood Superstar" },
  { name: "Om Puri", category: "Icons & Luminaries", src: "/assets/gallery/Om Puri.png", note: "Veteran Legend of World Cinema" },
  { name: "Pratik Gandhi", category: "Actors & Stars", src: "/assets/gallery/Pratik Gandhi.jpeg", note: "Actor (Scam 1992)" },
  { name: "Vir Das", category: "Actors & Stars", src: "/assets/gallery/Vir Das.png", note: "Emmy-winning Comedian & Actor" },
  { name: "Ali Fazal, Richa Chadda & Amitosh Nagpal", category: "Actors & Stars", src: "/assets/gallery/Ali Fazal, Richa Chadda & Amitosh Nagpal.jpeg", note: "Premiere & Industry Interaction" },
  { name: "Aditi Rao Hydari", category: "Actors & Stars", src: "/assets/gallery/Aditi Rao Hydari.png", note: "Acclaimed Actress" },
  { name: "Sunny Leone", category: "Actors & Stars", src: "/assets/gallery/Sunny Leone 2.png", note: "Global Personality & Actress" },
  { name: "Milind Soman", category: "Icons & Luminaries", src: "/assets/gallery/Milind Soman.jpeg", note: "Actor, Model & Ultramarathoner" },
  { name: "Jaaved Jaaferi", category: "Actors & Stars", src: "/assets/gallery/Jaaved Jaaferi.png", note: "Veteran Actor & Performer" },
  { name: "K K Menon", category: "Actors & Stars", src: "/assets/gallery/K K Menon.jpeg", note: "Masterclass Method Actor" },
  { name: "Saurabh Shukla", category: "Actors & Stars", src: "/assets/gallery/Saurabh Shukla.jpeg", note: "National Award-winning Actor & Writer" },
  { name: "Sanjay Mishra", category: "Actors & Stars", src: "/assets/gallery/Sanjay Mishra.jpeg", note: "Critically Acclaimed Veteran Actor" },
  { name: "Dalip Tahil", category: "Actors & Stars", src: "/assets/gallery/Dalip Tahil.jpeg", note: "Distinguished Film & Theatre Actor" },
  { name: "Amrita Puri", category: "Actors & Stars", src: "/assets/gallery/Amrita Puri.png", note: "Actress (Kai Po Che!, Aisha)" },
  { name: "Neha Sharma", category: "Actors & Stars", src: "/assets/gallery/Neha Sharma.jpeg", note: "Actress & Fashion Icon" },
  { name: "Nivetha Pethuraj", category: "Actors & Stars", src: "/assets/gallery/Nivetha Pethuraj.jpeg", note: "Leading South Indian Actress" },
  { name: "Warina Hussain", category: "Actors & Stars", src: "/assets/gallery/Warina Hussain.jpeg", note: "Bollywood Actress" },
  { name: "Gashmeer Mahajani", category: "Actors & Stars", src: "/assets/gallery/Gashmeer Mahajani.png", note: "Actor & Choreographer" },
  { name: "Lauren Gottlieb", category: "Actors & Stars", src: "/assets/gallery/Lauren Gottlieb.png", note: "Dancer & Actress (ABCD)" },
  { name: "Armaan Malik", category: "Actors & Stars", src: "/assets/gallery/Armaan Malik.png", note: "Award-winning Singer & Musician" },
  { name: "Javed Ali", category: "Actors & Stars", src: "/assets/gallery/Javed Ali.jpeg", note: "Celebrated Playback Singer" },
  { name: "Raima Sen", category: "Actors & Stars", src: "/assets/gallery/Raima Sen.png", note: "Acclaimed Film Actress" },
  { name: "Kunicka Sadanand", category: "Actors & Stars", src: "/assets/gallery/Kunicka Sadanand.jpeg", note: "Veteran Film & Television Actress" },
  { name: "CII Industry Leadership Event", category: "Industry Events", src: "/assets/gallery/cii event.jpeg", note: "Confederation of Indian Industry Summit" },
];

const categories = [
  "All",
  "Actors & Stars",
  "Directors & Creators",
  "Icons & Luminaries",
  "Industry Events",
] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredItems = useMemo(() => {
    return galleryData.filter((item) => {
      const matchCat = selectedCategory === "All" || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.note && item.note.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsPlaying(false);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setIsPlaying(false);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  /* Keyboard shortcuts */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  /* Auto-play slideshow timer */
  useEffect(() => {
    if (!isPlaying || lightboxIndex === null) return;
    const timer = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(timer);
  }, [isPlaying, lightboxIndex, nextImage]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <>
      {/* ══ HEADER BANNER ══════════════════════════════════════ */}
      <div className="relative pt-36 pb-16 px-6 overflow-hidden border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#64748B] font-accent">
            <Link href="/" className="no-underline text-[#64748B] hover:text-[#D97706] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#B45309] font-medium">Gallery</span>
          </div>

          <div className="section-label">Moments &amp; Associations</div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.12]">
            Industry Moments &amp; <span className="text-gold-gradient">Gallery</span>
          </h1>

          <p className="font-accent text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
            A visual retrospective of relationships, landmark film events, studio collaborations, and memorable moments with celebrated actors, visionary directors, and industry leaders over three decades.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/25 font-accent text-xs text-[#B45309]">
            <span>✨ Click any photo to view in Fullscreen Lightbox &amp; Slideshow Mode</span>
          </div>
        </div>
      </div>

      {/* ══ GALLERY GRID & CONTROLS ═════════════════════════════ */}
      <section className="py-16 px-6 relative min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? galleryData.length
                    : galleryData.filter((item) => item.category === cat).length;
                const active = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full font-accent text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer border
                      ${
                        active
                          ? "bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] text-white border-transparent shadow-[0_2px_12px_rgba(217,119,6,0.35)]"
                          : "bg-white text-[#475569] border-slate-200 hover:border-amber-400 hover:text-[#0F172A] shadow-sm"
                      }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[0.65rem] ${
                        active ? "bg-white/20 text-white" : "bg-slate-100 text-[#64748B]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search celebrity / event..."
                className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-2.5 pl-10 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none shadow-sm"
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#64748B]">🔍</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-[#0F172A] bg-transparent border-0 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-accent text-[#64748B] border-b border-slate-200/80 pb-3">
            <span>
              Showing <strong className="text-[#0F172A]">{filteredItems.length}</strong> photographs
            </span>
            <span className="text-[#B45309] font-medium">Click any card to inspect in high definition</span>
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-3xl overflow-hidden glass-card-interactive cursor-pointer border border-slate-200/90 shadow-sm hover:shadow-[0_20px_35px_-5px_rgba(217,119,6,0.2)] flex flex-col justify-between"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity" />

                    {/* Magnify Icon */}
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                      <span className="text-xs text-[#0F172A]">🔍</span>
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-[0.65rem] font-accent font-bold uppercase tracking-wider text-[#B45309] shadow-sm">
                      {item.category}
                    </div>
                  </div>

                  {/* Caption Strip */}
                  <div className="p-3.5 bg-white border-t border-slate-100">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#0F172A] truncate group-hover:text-[#D97706] transition-colors m-0">
                      {item.name}
                    </h3>
                    {item.note && (
                      <p className="font-accent text-xs text-[#64748B] truncate mt-0.5 m-0 font-medium">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 rounded-3xl glass-card border border-slate-200 space-y-4">
              <p className="text-4xl">📸</p>
              <p className="font-display text-xl text-[#0F172A]">No photos found for "{searchQuery}"</p>
              <p className="text-xs text-[#64748B]">Try clearing your search or browsing All categories.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-5 py-2 rounded-full font-accent text-xs font-semibold bg-[#D97706] text-white cursor-pointer border-none shadow-sm"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══ FULLSCREEN LIGHTBOX MODAL ══════════════════════════ */}
      {lightboxIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-accent text-xs text-[#F59E0B] font-bold uppercase tracking-wider">
                  {currentItem.category}
                </span>
                <span className="text-white/30">|</span>
                <span className="font-accent text-xs text-white/60">
                  Photo {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <h2 className="font-display text-lg sm:text-2xl font-bold text-white m-0">
                {currentItem.name}
              </h2>
              {currentItem.note && (
                <p className="font-accent text-xs text-amber-200 m-0">
                  {currentItem.note}
                </p>
              )}
            </div>

            {/* Modal Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3.5 py-1.5 rounded-full font-accent text-xs font-semibold border cursor-pointer transition-colors
                  ${
                    isPlaying
                      ? "bg-[#F59E0B] text-black border-[#F59E0B] shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
              >
                {isPlaying ? "⏸ Pause Slideshow" : "▶ Play Slideshow"}
              </button>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-lg cursor-pointer border border-white/20 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Main Photo Center Display */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Nav Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#F59E0B] text-white hover:text-black border border-white/20 flex items-center justify-center text-xl cursor-pointer transition-all duration-200 shadow-2xl"
              aria-label="Previous photograph"
            >
              ←
            </button>

            {/* Central High-Res Image */}
            <div className="relative w-full max-w-4xl h-full max-h-[70vh] flex items-center justify-center p-2">
              <div className="relative w-full h-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/15">
                <Image
                  src={currentItem.src}
                  alt={currentItem.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#F59E0B] text-white hover:text-black border border-white/20 flex items-center justify-center text-xl cursor-pointer transition-all duration-200 shadow-2xl"
              aria-label="Next photograph"
            >
              →
            </button>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div
            className="border-t border-white/10 pt-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 max-w-5xl mx-auto scrollbar-none">
              {filteredItems.map((thumb, idx) => (
                <button
                  key={`thumb-${idx}`}
                  onClick={() => openLightbox(idx)}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer p-0 bg-transparent
                    ${
                      idx === lightboxIndex
                        ? "border-[#F59E0B] scale-110 shadow-[0_0_15px_rgba(245,158,11,0.6)]"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <p className="text-center font-accent text-[0.7rem] text-white/50 mt-2 mb-0">
              Use Left &amp; Right Arrow keys on your keyboard to navigate · Esc to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
