"use client";
import Link from "next/link";
import { useState } from "react";

const directChannels = [
  {
    icon: "✉️",
    label: "Official Email",
    value: "mail@prakashnathan.com",
    href: "mailto:mail@prakashnathan.com",
    tag: "Direct Inquiry",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@prakasshnathan",
    href: "https://www.instagram.com/prakasshnathan/",
    tag: "Social & Behind The Scenes",
  },
  {
    icon: "🎬",
    label: "IMDb Profile",
    value: "Prakash Nathan on IMDb",
    href: "https://www.imdb.com/name/nm3194009/",
    tag: "Filmography & Credits",
  },
];

const expertisePillars = [
  "Commercial Strategy & Business Growth",
  "Film Marketing & Theatrical Distribution Consultancy",
  "Content Incubation & Script Evaluation",
  "Rights Monetisation & Multi-Territory Syndication",
  "Media & Entertainment Technology Advisory",
  "Studio & Brand Partnerships",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "Business Strategy & Commercial Growth",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <>
      {/* ══ HEADER BANNER ══════════════════════════════════════ */}
      <div className="relative pt-36 pb-16 px-6 overflow-hidden border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#64748B] font-accent">
            <Link href="/" className="no-underline text-[#64748B] hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#1D4ED8] font-medium">Contact</span>
          </div>

          <div className="section-label">Connect &amp; Collaborate</div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.12]">
            Let's Build Something <br />
            <span className="text-royal-gradient">Impactful Together</span>
          </h1>

          <p className="font-accent text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed">
            Whether you represent a studio, enterprise brand, high-growth startup, or creative endeavor—reach out directly to explore strategic growth, distribution consultation, or investment collaborations.
          </p>
        </div>
      </div>

      {/* ══ CONTACT CHANNELS & FORM ═════════════════════════════ */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Channels & Address) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="section-label">Direct Channels</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
              Get in Touch
            </h2>
            <p className="font-accent text-sm text-[#475569] leading-relaxed">
              Prakash is based in Mumbai, India, and actively advises clients and ventures globally across entertainment, technology, and commercial monetization.
            </p>

            <div className="space-y-4 pt-2">
              {directChannels.map((c) => {
                const CardContent = (
                  <div className="p-5 rounded-2xl glass-card-interactive border border-slate-200/90 flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                      {c.icon}
                    </div>
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-accent text-[0.68rem] font-bold uppercase tracking-wider text-[#1D4ED8]">
                          {c.tag}
                        </span>
                        {c.href && (
                          <span className="text-xs text-[#1D4ED8] group-hover:translate-x-1 transition-transform font-bold">
                            ↗
                          </span>
                        )}
                      </div>
                      <p className="font-display font-bold text-sm sm:text-base text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors m-0 truncate">
                        {c.value}
                      </p>
                      <p className="font-accent text-xs text-[#64748B] m-0">
                        {c.label}
                      </p>
                    </div>
                  </div>
                );

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={c.label}>{CardContent}</div>
                );
              })}
            </div>

            {/* Key Domains */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <h3 className="font-display font-bold text-sm text-[#1D4ED8] m-0 uppercase tracking-wide">
                Key Advisory &amp; Collaboration Domains
              </h3>
              <ul className="list-none p-0 m-0 space-y-2 font-accent text-xs text-[#334155]">
                {expertisePillars.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#1D4ED8] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Inquiry Form) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-blue-200/80 shadow-[0_20px_50px_rgba(29,78,216,0.06)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
                    Send an Inquiry
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
                    Start a Conversation
                  </h2>
                  <p className="font-accent text-sm text-[#475569]">
                    Fill in your details below and our team will get back to you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-3 animate-in fade-in duration-300">
                    <p className="text-4xl">✉️</p>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">
                      Message Received!
                    </h3>
                    <p className="font-accent text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-[#0F172A]">{formData.firstName}</strong>. We have received your inquiry regarding <strong className="text-[#1D4ED8]">{formData.topic}</strong> and will respond shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          topic: "Business Strategy & Commercial Growth",
                          message: "",
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full font-accent text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF] text-white cursor-pointer border-none shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block font-accent text-xs font-bold uppercase tracking-wider text-[#334155]">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="e.g. Rahul"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none shadow-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block font-accent text-xs font-bold uppercase tracking-wider text-[#334155]">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="e.g. Sharma"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block font-accent text-xs font-bold uppercase tracking-wider text-[#334155]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rahul@company.com"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none shadow-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block font-accent text-xs font-bold uppercase tracking-wider text-[#334155]">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-accent text-xs font-bold uppercase tracking-wider text-[#334155]">
                        Subject / Discussion Topic *
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none shadow-sm"
                      >
                        <option value="Business Strategy & Commercial Growth">Business Strategy &amp; Commercial Growth</option>
                        <option value="Film Distribution & Marketing Consultancy">Film Distribution &amp; Marketing Consultancy</option>
                        <option value="Rights Monetisation & Content Syndication">Rights Monetisation &amp; Content Syndication</option>
                        <option value="Content Incubation & Script Evaluation">Content Incubation &amp; Script Evaluation</option>
                        <option value="Media & Entertainment Tech Advisory">Media &amp; Entertainment Tech Advisory</option>
                        <option value="Studio / Brand Strategic Alliance">Studio / Brand Strategic Alliance</option>
                        <option value="General Executive Inquiry">General Executive Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-accent text-xs font-bold uppercase tracking-wider text-[#334155]">
                        Message / Project Brief *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share context regarding your organization, film project, or strategic goals..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none resize-none shadow-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl font-accent font-bold text-xs uppercase tracking-wider text-white
                        bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] shadow-[0_4px_20px_rgba(29,78,216,0.35)]
                        hover:shadow-[0_8px_30px_rgba(29,78,216,0.5)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border-none disabled:opacity-50"
                    >
                      {loading ? "Transmitting..." : "Send Strategic Inquiry →"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
