import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1.0 },
    { url: `${SITE_URL}/despre-noi`, priority: 0.7 },
    { url: `${SITE_URL}/preturi`, priority: 0.7 },
  ];
}
