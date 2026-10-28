import type { Metadata } from "next";
import { ogUrl } from "@/lib/og";

/** Metadate complete per pagina (Open Graph si Twitter nu se mostenesc din layout cand pagina le suprascrie). */
export function pageMetadata(title: string, description: string, path: string, image = "/assets/lucrare-5.webp"): Metadata {
  const og = ogUrl(title, path, image);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ro_RO",
      siteName: "Hasha Tattoo",
      title,
      description,
      url: path,
      images: [{ url: og, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [og] },
  };
}
