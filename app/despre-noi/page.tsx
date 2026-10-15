import type { Metadata } from "next";
import AboutMain from "@/components/sections/about-main";
import Footer from "@/components/sections/footer";

const title = "Despre noi | Hasha Tattoo, studio tatuaje București";
const description =
  "Află cine suntem, cum lucrăm și de ce clienții aleg Hasha Tattoo pentru tatuaje și piercing în București, Sector 4. Programează-te pe WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/despre-noi" },
  openGraph: { title, description, url: "/despre-noi" },
  twitter: { title, description },
};

export default function AboutPage() {
  return (
    <>
      <AboutMain />
      <Footer />
    </>
  );
}
