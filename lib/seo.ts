import type { Metadata } from "next";

/** Metadate complete per pagina (Open Graph si Twitter nu se mostenesc din layout cand pagina le suprascrie). */
export function pageMetadata(title: string, description: string, path: string, image = "/assets/lucrare-5.webp"): Metadata {
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
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
