import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";
import { publishedGuides } from "@/lib/guides";
import { areas } from "@/lib/areas";
import { stylePages } from "@/lib/styles";

/** Data ultimei modificari de continut a paginilor fixe. Actualizeaz-o cand se schimba continutul. */
const SITE_UPDATED = "2026-10-28";

export default function sitemap(): MetadataRoute.Sitemap {
  const list: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1.0 },
    { url: `${SITE_URL}/despre-noi`, priority: 0.7 },
    { url: `${SITE_URL}/preturi`, priority: 0.7 },
    { url: `${SITE_URL}/tatuaje`, priority: 0.9 },
    { url: `${SITE_URL}/piercing`, priority: 0.9 },
    { url: `${SITE_URL}/contact`, priority: 0.8 },
    { url: `${SITE_URL}/portofoliu`, priority: 0.8 },
    { url: `${SITE_URL}/intrebari-frecvente`, priority: 0.7 },
    ...(publishedGuides().length
      ? [{ url: `${SITE_URL}/ghiduri`, priority: 0.7 }, ...publishedGuides().map((g) => ({ url: `${SITE_URL}/ghiduri/${g.slug}`, lastModified: g.date, priority: 0.7 }))]
      : []),
    { url: `${SITE_URL}/stiluri`, priority: 0.8 },
    ...stylePages.map((p) => ({ url: `${SITE_URL}/stiluri/${p.slug}`, priority: 0.7 })),
    { url: `${SITE_URL}/verificator-piercing`, priority: 0.7 },
    { url: `${SITE_URL}/zone`, priority: 0.7 },
    ...areas.map((a) => ({ url: `${SITE_URL}/zone/${a.slug}`, priority: 0.6 })),
    ...services.map((s) => ({ url: `${SITE_URL}/${s.slug}`, priority: 0.8 })),
    { url: `${SITE_URL}/termeni-si-conditii`, priority: 0.2 },
    { url: `${SITE_URL}/politica-de-confidentialitate`, priority: 0.2 },
    { url: `${SITE_URL}/politica-cookies`, priority: 0.2 },
  ];
  return list.map((e) => ({ lastModified: SITE_UPDATED, ...e }));
}
