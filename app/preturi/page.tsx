import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PricingMain from "@/components/sections/pricing-main";
import Footer from "@/components/sections/footer";

const title = "Prețuri tatuaje și piercing | Hasha Tattoo București";
const description = "Prețuri piercing în lei (lob 80, cartilaj 150, nas 150, dermal 250) și cum se calculează un tatuaj la Hasha Tattoo, București. Cere o estimare pe WhatsApp.";

export const metadata: Metadata = pageMetadata(title, description, "/preturi");

export default function PricingPage() {
  return (
    <>
      <PricingMain />
      <Footer />
    </>
  );
}
