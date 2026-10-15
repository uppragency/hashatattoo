import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutMain from "@/components/sections/about-main";
import Footer from "@/components/sections/footer";

const title = "Despre noi | Hasha Tattoo, studio tatuaje București";
const description =
  "Află cine suntem, cum lucrăm și de ce clienții aleg Hasha Tattoo pentru tatuaje și piercing în București, Sector 4. Programează-te pe WhatsApp.";

export const metadata: Metadata = pageMetadata(title, description, "/despre-noi");

export default function AboutPage() {
  return (
    <>
      <AboutMain />
      <Footer />
    </>
  );
}
