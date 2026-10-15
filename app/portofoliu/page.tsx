import PortfolioPage from "@/components/PortfolioPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Portofoliu tatuaje și piercing București | Hasha Tattoo",
  "Portofoliul Hasha Tattoo din București: tatuaje realism, black and grey, portrete, mâneci și backpiece, plus piercinguri în ureche, buric și limbă.",
  "/portofoliu",
  "/assets/lucrare-12.webp",
);

export default function Page() {
  return <PortfolioPage />;
}
