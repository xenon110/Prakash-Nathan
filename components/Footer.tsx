import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200/80 pt-16 pb-8 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-transparent via-[#F59E0B]/15 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#7C3AED] p-[1px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-gold-gradient">PN</span>
                </div>
              </div>
              <span className="font-display text-2xl font-bold text-gold-gradient">
                Prakash Nathan
              </span>
            </div>
            <p className="text-[#475569] text-sm max-w-md leading-relaxed">
              Entrepreneur · Consultant · Media, Entertainment &amp; Technology. Over three decades of strategic commercial leadership and business transformation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/prakasshnathan/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-xs font-accent text-[#475569] hover:text-[#D97706] hover:border-[#D97706]/40 hover:bg-amber-50 transition-all no-underline"
              >
                📸 Instagram
              </a>
              <a
                href="https://www.imdb.com/name/nm3194009/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-xs font-accent text-[#475569] hover:text-[#D97706] hover:border-[#D97706]/40 hover:bg-amber-50 transition-all no-underline"
              >
                🎬 IMDb
              </a>
              <a
                href="mailto:mail@prakashnathan.com"
                className="px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-xs font-accent text-[#475569] hover:text-[#D97706] hover:border-[#D97706]/40 hover:bg-amber-50 transition-all no-underline"
              >
                ✉️ Email
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-accent text-xs font-bold uppercase tracking-widest text-[#B45309] mb-4">
              Navigation
            </h4>
            <ul className="list-none space-y-2.5 p-0 m-0">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Filmography", "/filmography"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#64748B] text-sm no-underline hover:text-[#D97706] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="font-accent text-xs font-bold uppercase tracking-widest text-[#B45309] mb-4">
              Key Ventures
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-[#0F172A] text-sm font-semibold m-0">Eagle Eye Entertainment LLP</p>
                <p className="text-[#64748B] text-xs leading-relaxed m-0">Content Development, Marketing &amp; Rights Syndication</p>
              </div>
              <div>
                <p className="text-[#0F172A] text-sm font-semibold m-0">CineMarkets Digital Solutions</p>
                <p className="text-[#64748B] text-xs leading-relaxed m-0">Digital Strategy, Campaigns &amp; Media Tech</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[#64748B] text-xs font-accent">
          <div>
            &copy; {new Date().getFullYear()} Prakash Nathan. All rights reserved.
          </div>
          <div className="text-[#64748B]">
            Where Strategy Drives Growth · Innovation Creates Opportunity
          </div>
        </div>
      </div>
    </footer>

  );
}

