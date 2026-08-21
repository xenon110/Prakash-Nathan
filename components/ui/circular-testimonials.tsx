"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
}: CircularTestimonialsProps) => {
  const colorName        = colors.name              ?? "#0F172A";
  const colorDesignation = colors.designation       ?? "#1D4ED8";
  const colorTestimony   = colors.testimony         ?? "#475569";
  const colorArrowBg     = colors.arrowBackground   ?? "#F1F5F9";
  const colorArrowFg     = colors.arrowForeground   ?? "#0F172A";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#1D4ED8";

  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const active = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials]);

  const restartAutoplay = useCallback(() => {
    if (!autoplay) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % testimonialsLength);
    }, 4500);
  }, [autoplay, testimonialsLength]);

  useEffect(() => {
    restartAutoplay();
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [restartAutoplay]);

  const handleNext = useCallback(() => {
    setActiveIndex((p) => (p + 1) % testimonialsLength);
    restartAutoplay();
  }, [testimonialsLength, restartAutoplay]);

  const handlePrev = useCallback(() => {
    setActiveIndex((p) => (p - 1 + testimonialsLength) % testimonialsLength);
    restartAutoplay();
  }, [testimonialsLength, restartAutoplay]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handlePrev, handleNext]);

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden glass-card bg-white/95"
        style={{
          border: "1px solid rgba(226, 232, 240, 0.9)",
          boxShadow: "0 10px 30px -5px rgba(29, 78, 216, 0.07), 0 4px 6px -2px rgba(15, 23, 42, 0.03)",
        }}
      >
        {/* Top gradient line with Royal Blue & Sky */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, #1D4ED8 0%, #38BDF8 50%, #F59E0B 100%)" }}
        />

        <div className="p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {/* Logo + meta row */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="shrink-0 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200/80 shadow-sm"
                  style={{
                    width: 56,
                    height: 56,
                  }}
                >
                  <img
                    src={active.src}
                    alt={active.name}
                    style={{ width: 38, height: 38, objectFit: "contain" }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      color: colorName,
                      fontSize: "1.05rem",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      marginBottom: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {active.name}
                  </p>
                  <p
                    style={{
                      color: colorDesignation,
                      fontSize: "0.72rem",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      lineHeight: 1.4,
                    }}
                  >
                    {active.designation}
                  </p>
                </div>
              </div>

              {/* Open-quote glyph in Royal Blue / Sky tint */}
              <div
                style={{
                  color: "#1D4ED8",
                  fontSize: "2.2rem",
                  fontFamily: "Georgia, serif",
                  opacity: 0.35,
                  lineHeight: 1,
                  marginBottom: 6,
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p
                style={{
                  color: colorTestimony,
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                }}
              >
                {active.quote}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Footer: dots + arrows */}
          <div
            className="flex items-center justify-between mt-6 pt-5"
            style={{ borderTop: "1px solid rgba(226, 232, 240, 0.8)" }}
          >
            {/* Pill dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveIndex(i); restartAutoplay(); }}
                  aria-label={`Go to brand ${i + 1}`}
                  style={{
                    width: i === activeIndex ? 18 : 6,
                    height: 6,
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                    background: i === activeIndex ? "#1D4ED8" : "rgba(148, 163, 184, 0.4)",
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <CompactArrow onClick={handlePrev} dir="left"  bg={colorArrowBg} fg={colorArrowFg} hover={colorArrowHoverBg} label="Previous" />
              <CompactArrow onClick={handleNext} dir="right" bg={colorArrowBg} fg={colorArrowFg} hover={colorArrowHoverBg} label="Next" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle counter */}
      <p
        className="text-center mt-3"
        style={{
          color: "#94A3B8",
          fontSize: "0.72rem",
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: "0.1em",
          fontWeight: 600,
        }}
      >
        {String(activeIndex + 1).padStart(2, "0")} / {String(testimonialsLength).padStart(2, "0")}
      </p>
    </div>
  );
};

/* ── Compact arrow button ─────────────────────────────────── */
function CompactArrow({
  onClick, dir, bg, fg, hover, label,
}: {
  onClick: () => void;
  dir: "left" | "right";
  bg: string; fg: string; hover: string; label: string;
}) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={label}
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        border: "1px solid rgba(203, 213, 225, 0.8)",
        background: hov ? hover : bg,
        color: hov ? "#FFFFFF" : fg,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        transform: hov ? "scale(1.08)" : "scale(1)",
        padding: 0,
        flexShrink: 0,
      }}
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        {dir === "left" ? (
          <path d="M7 1.5L3 5.5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M4 1.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default CircularTestimonials;
