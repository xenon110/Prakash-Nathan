import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prakash Nathan – Entrepreneur | Consultant | Media, Entertainment & Technology",
  description:
    "With over three decades of experience across Technology, Media, Entertainment, and Entrepreneurship, Prakash Nathan drives commercial leadership, strategic partnerships, and business transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative bg-[#F8FAFC] text-[#0F172A] selection:bg-[#F59E0B]/25 selection:text-[#0F172A]">
        {/* Global Ambient Glows (Luminous Colorful Aurora) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-grid-pattern">
          <div className="aurora-glow-1" />
          <div className="aurora-glow-2" />
          <div className="aurora-glow-3" />
          <div className="aurora-glow-4" />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>

    </html>
  );
}

