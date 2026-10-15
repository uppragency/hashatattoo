import FaqPage from "@/components/FaqPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Întrebări frecvente despre tatuaje și piercing | Hasha Tattoo",
  "Răspunsuri la întrebările frecvente despre programare, prețuri, tatuaje, piercing și îngrijire la Hasha Tattoo, București, Sector 4.",
  "/intrebari-frecvente",
  "/assets/pierce-3.webp",
);

export default function Page() {
  return <FaqPage />;
}
