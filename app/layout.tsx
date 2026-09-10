import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CoreNovaIT — Build. Design. Grow. Automate.",
    template: "%s — CoreNovaIT",
  },
  description:
    "CoreNovaIT is a white-label web, app, design, and AI-integration partner for agencies that don't build in-house.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Sets data-theme before paint so a saved light-mode choice
            doesn't flash the dark default first. Keep in sync with
            ThemeToggle's THEME_STORAGE_KEY. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('corenovait-theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();",
          }}
        />
        <CursorTrail />
        <Header />
        <Marquee />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
