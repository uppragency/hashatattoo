import type { Metadata } from "next";
import AreasPage from "@/components/AreasPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Unde ne găsești: tatuaje și piercing în Sector 4, București | Hasha Tattoo",
  "Studio privat de tatuaje și piercing pe Bulevardul Mărășești nr. 80, Sector 4, București. Alege zona din care vii și vezi ruta în Google Maps.",
  "/zone",
  "/assets/studio.webp",
);

export default function Page() {
  return <AreasPage />;
}
