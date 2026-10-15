import type { Metadata } from "next";
import PiercingCheckerPage from "@/components/PiercingCheckerPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Verificator piercing: ce se potrivește anatomiei tale | Hasha Tattoo",
  "Alege zona și răspunde la câteva întrebări despre anatomie: vezi dacă piercingul pare potrivit, cât costă și cât durează vindecarea. Hasha Tattoo, București.",
  "/verificator-piercing",
  "/assets/pierce-6.webp",
);

export default function Page() {
  return <PiercingCheckerPage />;
}
