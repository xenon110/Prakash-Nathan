"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Filmography", href: "/filmography" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Contact",     href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3.5 bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_4px_20px_rgba(29,78,216,0.06)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#0284C7] p-[1px] shadow-sm">
            <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
              <span className="font-display font-bold text-xs text-[#1D4ED8]">PN</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
              Prakash
            </span>
            <span className="font-display text-xl font-semibold text-[#1D4ED8]">
              Nathan
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-1.5 font-accent text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 no-underline
                  ${
                    active
                      ? "text-white bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] shadow-[0_2px_12px_rgba(29,78,216,0.35)]"
                      : "text-[#475569] hover:text-[#1D4ED8] hover:bg-blue-50/60"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-accent font-semibold text-xs tracking-wider uppercase no-underline
              bg-[#1D4ED8] hover:bg-[#1E40AF] text-white shadow-[0_4px_14px_rgba(29,78,216,0.25)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Let's Connect</span>
            <span className="text-[#93C5FD]">→</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2.5 rounded-xl bg-white border border-slate-200 text-[#0F172A] cursor-pointer shadow-sm"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#0F172A] transition-all duration-200 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#0F172A] transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#0F172A] transition-all duration-200 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-2 shadow-xl">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-3 px-4 font-accent text-sm font-semibold rounded-xl no-underline transition-colors
                  ${
                    active
                      ? "text-white bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF]"
                      : "text-[#475569] hover:text-[#1D4ED8] hover:bg-blue-50/60"
                  }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center py-3 rounded-xl font-accent font-semibold text-xs tracking-wider uppercase no-underline
                bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF] text-white shadow-[0_2px_15px_rgba(29,78,216,0.3)]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
