"use client";
import Link from "next/link";
import { useState } from "react";

const contactDetails = [
  { icon: "🏢", label: "Office", value: "4th floor, Wework, Chincholi bunder, Malad West 400 064" },
  { icon: "✉️", label: "Email", value: "mail@prakashnathan.com", href: "mailto:mail@prakashnathan.com" },
  { icon: "📸", label: "Instagram", value: "tinyurl.com/ybbaohrc", href: "https://tinyurl.com/ybbaohrc" },
  { icon: "📘", label: "Facebook", value: "facebook.com/prakash.nathan", href: "https://www.facebook.com/prakash.nathan" },
  { icon: "🎬", label: "IMDb", value: "imdb.to/1TcvxYt", href: "https://imdb.to/1TcvxYt" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <>
      {/* Banner */}
      <div className="relative pt-32 pb-14 px-6 bg-[#0A0A0C] border-b border-white/5 overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,168,50,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#6B6866] font-accent mb-5">
            <Link href="/" className="no-underline hover:text-[#D4A832] transition-colors">Home</Link>
            <span className="text-white/10">/</span>
            <span>Contact</span>
          </div>
          <div className="section-label">Let's Connect</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight text-[#F0EDE8]">
            Get In <span className="text-[#D4A832]">Touch</span>
          </h1>
          <p className="text-[#A8A4A0] text-lg mt-4 max-w-xl">
            Have a film project, consulting need or collaboration in mind? Reach out and let's make it happen.
          </p>
        </div>
      </div>

      {/* Body */}
      <section className="py-20 px-6 bg-[#0A0A0C]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-14 items-start">

          {/* Info */}
          <div>
            <div className="section-label">Contact Information</div>
            <h2 className="font-display text-3xl font-bold mb-4 leading-snug">
              Let's Build <span className="text-[#D4A832]">Something Great</span> Together
            </h2>
            <p className="text-[#A8A4A0] text-sm leading-loose mb-8">
              Whether you're a first-time film producer, a writer with a great script, an established production house or a brand looking for entertainment partnerships — Prakash is always open to meaningful conversations.
            </p>

            <div className="space-y-3 mb-8">
              {contactDetails.map((d) => {
                const inner = (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-[#D4A832]/10 flex items-center justify-center text-lg shrink-0 group-hover:bg-[#D4A832]/20 transition-colors">
                      {d.icon}
                    </div>
                    <div>
                      <div className="font-accent text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6B6866] mb-0.5">{d.label}</div>
                      <div className="text-[#F0EDE8] text-sm group-hover:text-[#D4A832] transition-colors">{d.value}</div>
                    </div>
                  </>
                );

                const className = "group flex items-center gap-4 p-4 bg-[#16161C] border border-white/7 rounded-xl hover:border-[#D4A832]/30 hover:translate-x-1 transition-all duration-200 no-underline";

                return d.href ? (
                  <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {inner}
                  </a>
                ) : (
                  <div key={d.label} className={className}>
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="p-5 bg-[#16161C] border border-white/7 rounded-xl">
              <p className="text-[#A8A4A0] text-xs leading-loose m-0">
                <span className="text-[#D4A832] font-semibold block mb-1">Areas of Collaboration:</span>
                Film Marketing & Distribution · Content Development · Script Evaluation · Rights Syndication · Brand-Entertainment Partnerships · First-Time Producer Mentoring
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#16161C] border border-white/7 rounded-2xl p-8">
            <h3 className="font-display text-2xl font-semibold text-[#F0EDE8] mb-7">Send a Message</h3>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="font-display text-2xl font-semibold text-[#F0EDE8] mb-2">Message Sent!</h4>
                <p className="text-[#A8A4A0] text-sm">Thank you for reaching out. Prakash will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {["First Name", "Last Name"].map((label) => (
                    <div key={label}>
                      <label className="block font-accent text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#A8A4A0] mb-1.5">{label}</label>
                      <input required placeholder={`Your ${label.toLowerCase()}`}
                        className="w-full bg-[#111115] border border-white/7 rounded-xl text-[#F0EDE8] text-sm px-4 py-3
                          outline-none focus:border-[#D4A832] focus:shadow-[0_0_0_3px_rgba(212,168,50,0.12)] transition-all duration-200 placeholder:text-[#6B6866]" />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block font-accent text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#A8A4A0] mb-1.5">Email Address</label>
                  <input type="email" required placeholder="your@email.com"
                    className="w-full bg-[#111115] border border-white/7 rounded-xl text-[#F0EDE8] text-sm px-4 py-3
                      outline-none focus:border-[#D4A832] focus:shadow-[0_0_0_3px_rgba(212,168,50,0.12)] transition-all duration-200 placeholder:text-[#6B6866]" />
                </div>

                <div>
                  <label className="block font-accent text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#A8A4A0] mb-1.5">Subject</label>
                  <select required defaultValue=""
                    className="w-full bg-[#111115] border border-white/7 rounded-xl text-[#F0EDE8] text-sm px-4 py-3
                      outline-none focus:border-[#D4A832] focus:shadow-[0_0_0_3px_rgba(212,168,50,0.12)] transition-all duration-200">
                    <option value="" disabled>Select a topic…</option>
                    <option>Film Marketing Consultancy</option>
                    <option>Content Development</option>
                    <option>Distribution &amp; Release</option>
                    <option>Rights Syndication</option>
                    <option>Script Submission</option>
                    <option>Business Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-accent text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#A8A4A0] mb-1.5">Message</label>
                  <textarea required rows={5} placeholder="Tell Prakash about your project or enquiry…"
                    className="w-full bg-[#111115] border border-white/7 rounded-xl text-[#F0EDE8] text-sm px-4 py-3
                      outline-none focus:border-[#D4A832] focus:shadow-[0_0_0_3px_rgba(212,168,50,0.12)] transition-all duration-200 placeholder:text-[#6B6866] resize-y" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-full font-accent font-semibold text-sm
                    bg-gradient-to-r from-[#D4A832] to-[#F0C84A] text-[#0A0A0C]
                    shadow-[0_4px_20px_rgba(212,168,50,0.35)] hover:shadow-[0_8px_30px_rgba(212,168,50,0.5)]
                    hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed border-none cursor-pointer">
                  {loading ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
