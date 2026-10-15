import type { Metadata } from "next";
import PricingMain from "@/components/sections/pricing-main";
import Footer from "@/components/sections/footer";

const title = "Prețuri tatuaje și piercing | Hasha Tattoo București";
const description = "Află cum se stabilește costul unui tatuaj sau piercing la Hasha Tattoo, București, și cere o estimare pe WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/preturi" },
  openGraph: { title, description, url: "/preturi" },
  twitter: { title, description },
};

export default function PricingPage() {
  return (
    <>
      <PricingMain />
      <Footer />
    </>
  );
}
