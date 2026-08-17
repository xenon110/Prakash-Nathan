import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070708] border-t border-white/5 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold text-gold-gradient mb-2">
              Prakash Nathan
            </div>
            <p className="text-[#6B6866] text-sm">Entrepreneur · Consultant · Entertainment</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-accent text-[0.7rem] font-semibold uppercase tracking-widest text-[#D4A832] mb-4">
              Quick Links
            </h4>
            <ul className="list-none space-y-2">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Filmography", "/filmography"],
                ["Gallery", "/gallery"],
                ["Articles", "/articles"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#6B6866] text-sm no-underline hover:text-[#D4A832] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-accent text-[0.7rem] font-semibold uppercase tracking-widest text-[#D4A832] mb-4">
              Eagle Eye Entertainment LLP
            </h4>
            <p className="text-[#6B6866] text-sm leading-loose">
              Content Development &amp; Strategy
              <br />
              Film Marketing &amp; Release
              <br />
              Rights Syndication
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-[#6B6866] text-xs">
          &copy; {new Date().getFullYear()} Prakash Nathan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
