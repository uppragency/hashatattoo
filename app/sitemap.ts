import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";
import { publishedGuides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1.0 },
    { url: `${SITE_URL}/despre-noi`, priority: 0.7 },
    { url: `${SITE_URL}/preturi`, priority: 0.7 },
    { url: `${SITE_URL}/tatuaje`, priority: 0.9 },
    { url: `${SITE_URL}/piercing`, priority: 0.9 },
    { url: `${SITE_URL}/contact`, priority: 0.8 },
    { url: `${SITE_URL}/portofoliu`, priority: 0.8 },
    { url: `${SITE_URL}/intrebari-frecvente`, priority: 0.7 },
    ...(publishedGuides().length
      ? [{ url: `${SITE_URL}/ghiduri`, priority: 0.7 }, ...publishedGuides().map((g) => ({ url: `${SITE_URL}/ghiduri/${g.slug}`, priority: 0.7 }))]
      : []),
    ...services.map((s) => ({ url: `${SITE_URL}/${s.slug}`, priority: 0.8 })),
    { url: `${SITE_URL}/termeni-si-conditii`, priority: 0.2 },
    { url: `${SITE_URL}/politica-de-confidentialitate`, priority: 0.2 },
    { url: `${SITE_URL}/politica-cookies`, priority: 0.2 },
  ];
}
