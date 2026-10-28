import ContactPage from "@/components/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact Hasha Tattoo | Tatuaje și piercing București",
  "Contact Hasha Tattoo: Bulevardul Mărășești nr. 80, Sector 4, București. Program luni până vineri, 12:00 până la 20:00. WhatsApp +40 766 422 219.",
  "/contact",
  "/assets/studio.webp",
);

export default function Page() {
  return <ContactPage />;
}
