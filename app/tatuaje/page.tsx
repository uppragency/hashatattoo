import LandingPage from "@/components/LandingPage";
import { landingBySlug } from "@/lib/landing";
import { pageMetadata } from "@/lib/seo";

const page = landingBySlug("tatuaje")!;

export const metadata = pageMetadata(page.title, page.description, "/tatuaje", `/assets/${page.heroImage}`);

export default function Page() {
  return <LandingPage page={page} />;
}
