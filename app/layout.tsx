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
import { ogUrl } from "@/lib/og";

const GA_ID = "G-2HE5ZV7L84";
/* Consent Mode v2: totul refuzat implicit; se actualizeaza din lib/consent.ts dupa alegerea utilizatorului. */
const GTAG_INIT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});gtag('js',new Date());gtag('config','${GA_ID}');`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/assets/logo.png", apple: "/assets/logo.png" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Hasha Tattoo",
    images: [{ url: ogUrl("Tatuaje și piercing în București", "/", "/assets/lucrare-5.webp"), width: 1200, height: 630 }],
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
        <script dangerouslySetInnerHTML={{ __html: GTAG_INIT }} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
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
