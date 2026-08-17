"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Filmography", href: "/filmography" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Articles",    href: "/articles" },
  { label: "Contact",     href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0A0A0C]/90 backdrop-blur-xl border-b border-white/5"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1.5 no-underline">
          <span className="font-display text-xl font-semibold text-[#F0EDE8]">Prakash</span>
          <span className="font-display text-xl font-normal italic text-[#D4A832]">Nathan</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex list-none gap-1">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative block px-4 py-2 font-accent text-sm font-medium rounded-md transition-colors duration-200 no-underline
                    ${active ? "text-[#D4A832]" : "text-[#A8A4A0] hover:text-[#D4A832]"}`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-0.5 bg-gradient-to-r from-[#D4A832] to-[#F0C84A] rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#F0EDE8] transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F0EDE8] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F0EDE8] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0A0A0C]/97 backdrop-blur-xl border-b border-white/5 px-6 py-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-3 font-accent text-sm font-medium no-underline border-b border-white/5 last:border-0 transition-colors
                ${pathname === href ? "text-[#D4A832]" : "text-[#A8A4A0]"}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
