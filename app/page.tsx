import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { preload } from "react-dom";
import HomeMain from "@/components/sections/home-main";
import Footer from "@/components/sections/footer";
import Lightbox from "@/components/Lightbox";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/site";

const title = "Salon tatuaje și piercing București | Hasha Tattoo";
const description =
  "Tatuaje și piercing în București, Sector 4. Ace sterile, tușuri vegane, spațiu privat. Programează-te direct pe WhatsApp, de luni până vineri.";

export const metadata: Metadata = pageMetadata(title, description, "/");

const faq: [string, string][] = [
  ["Cum se face un tatuaj?", "Un aparat electric introduce cerneala în piele cu ajutorul unor ace sterile. Pielea se vindecă în jurul pigmentului, iar desenul rămâne vizibil."],
  ["Doare tatuajul?", "Senzația diferă de la o persoană la alta și în funcție de zona aleasă. Artistul te ajută să te pregătești pentru ședință."],
  ["Cum îngrijesc un tatuaj nou?", "Urmează indicațiile de îngrijire primite de la artist, adaptate tipului de bandaj și lucrării. Menține zona curată și evită iritarea pielii în perioada vindecării."],
  ["Ce trebuie să evit după ședință?", "Evită piscina, marea, băile prelungite, soarele direct, scărpinatul, frecarea și hainele strâmte în timpul vindecării."],
  ["Unde doare cel mai tare?", "Zonele sensibile pot fi mai dureroase, însă experiența diferă de la persoană la persoană. Artistul îți poate recomanda amplasarea potrivită."],
  ["Sunt tușurile sigure pentru piele?", "La Hasha Tattoo folosim tușuri vegane, alese de la producători cunoscuți. Informează artistul despre alergii sau afecțiuni ale pielii înainte de ședință."],
];

export default function HomePage() {
  preload("/assets/lucrare-5.webp", { as: "image" });
  preload("/assets/pierce-3.webp", { as: "image" });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TattooParlor",
          sameAs: SOCIAL_LINKS,
          name: "Hasha Tattoo",
          description: "Studio de tatuaje și piercing în București, Sector 4.",
          telephone: "+40766422219",
          email: "hashatattoo@gmail.com",
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "12:00", closes: "20:00" },
          ],
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/assets/studio.webp`,
          hasMap: "https://www.google.com/maps?cid=8814312455281840630",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bulevardul Mărășești nr. 80",
            addressLocality: "București",
            addressRegion: "Sector 4",
            addressCountry: "RO",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
        }}
      />
      <HomeMain />
      <Footer />
      <Lightbox />
    </>
  );
}
