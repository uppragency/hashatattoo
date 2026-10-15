import type { Metadata } from "next";
import PainMapPage from "@/components/PainMapPage";
import { guideBySlug } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

const g = guideBySlug("harta-durerii")!;

export const metadata: Metadata = pageMetadata(g.metaTitle, g.metaDescription, `/ghiduri/${g.slug}`, `/assets/${g.image}`);

export default function Page() {
  return <PainMapPage />;
}
