import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./transition.css";
import ScrollProgress from "@/components/ScrollProgress";
import SiteHeader from "@/components/SiteHeader";
import StickyCta from "@/components/StickyCta";
import Behavior from "@/components/Behavior";
import PageTransition from "@/components/PageTransition";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
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
        <PageTransition />
      </body>
    </html>
  );
}
