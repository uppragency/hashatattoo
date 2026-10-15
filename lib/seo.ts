import type { Metadata } from "next";

/** Metadate complete per pagina (Open Graph si Twitter nu se mostenesc din layout cand pagina le suprascrie). */
export function pageMetadata(title: string, description: string, path: string): Metadata {
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
      images: ["/assets/lucrare-5.webp"],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/lucrare-5.webp"] },
  };
}
