import type { Metadata } from "next";
import StylesPage from "@/components/StylesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Stiluri de tatuaj: realism, black and grey, portrete, mâneci | Hasha Tattoo",
  "Galerie de tatuaje filtrată pe stil: realism, black and grey, portrete, mâneci, backpiece, ornamental și color. Lucrări realizate la Hasha Tattoo, București.",
  "/stiluri",
  "/assets/lucrare-4.webp",
);

export default function Page() {
  return <StylesPage />;
}
