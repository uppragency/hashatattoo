import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";
import "./transition.css";
import "./fixes.css";
import ScrollProgress from "@/components/ScrollProgress";
import SiteHeader from "@/components/SiteHeader";
import StickyCta from "@/components/StickyCta";
import Behavior from "@/components/Behavior";
import PageTransition from "@/components/PageTransition";
import CookieBanner from "@/components/CookieBanner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/assets/logo.png", apple: "/assets/logo.png" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Hasha Tattoo",
    images: ["/assets/lucrare-5.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0c0c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" data-scroll-behavior="smooth">
      <head>
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body>
        <ScrollProgress />
        <a className="skip-link" href="#main">
          Sari la conținut
        </a>
        <SiteHeader />
        {children}
        <StickyCta />
        <Behavior />
        <CookieBanner />
        <PageTransition />
      </body>
    </html>
  );
}
