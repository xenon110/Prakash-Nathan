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
  const colorName        = colors.name              ?? "#F0EDE8";
  const colorDesignation = colors.designation       ?? "#D4A832";
  const colorTestimony   = colors.testimony         ?? "#A8A4A0";
  const colorArrowBg     = colors.arrowBackground   ?? "#1C1C22";
  const colorArrowFg     = colors.arrowForeground   ?? "#F0EDE8";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#D4A832";

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
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #16161C 0%, #1C1C24 100%)",
          border: "1px solid rgba(212,168,50,0.15)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Gold shimmer line at top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #D4A832 50%, transparent)" }}
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
                  className="shrink-0 rounded-xl flex items-center justify-center"
                  style={{
                    width: 56,
                    height: 56,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
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
                      fontSize: "1rem",
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
                      fontSize: "0.68rem",
                      fontFamily: "'Outfit', sans-serif",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      lineHeight: 1.4,
                    }}
                  >
                    {active.designation}
                  </p>
                </div>
              </div>

              {/* Open-quote glyph */}
              <div
                style={{
                  color: "#D4A832",
                  fontSize: "2rem",
                  fontFamily: "Georgia, serif",
                  opacity: 0.45,
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
                  fontSize: "0.88rem",
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
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Pill dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveIndex(i); restartAutoplay(); }}
                  aria-label={`Go to brand ${i + 1}`}
                  style={{
                    width: i === activeIndex ? 18 : 5,
                    height: 5,
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                    background: i === activeIndex ? "#D4A832" : "rgba(255,255,255,0.15)",
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
          color: "rgba(255,255,255,0.18)",
          fontSize: "0.68rem",
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: "0.1em",
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
        border: "1px solid rgba(255,255,255,0.08)",
        background: hov ? hover : bg,
        color: hov ? "#0A0A0C" : fg,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        transform: hov ? "scale(1.1)" : "scale(1)",
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
