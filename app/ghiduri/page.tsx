import GuidesPage from "@/components/GuidesPage";
import { publishedGuides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

const base = pageMetadata(
  "Ghiduri despre tatuaje și piercing | Hasha Tattoo",
  "Ghiduri practice despre primul tatuaj, îngrijirea tatuajelor și piercingurilor, alegerea stilului și pregătirea pentru ședință, de la Hasha Tattoo București.",
  "/ghiduri",
  "/assets/lucrare-5.webp",
);

// Pagina nu se indexează până există cel puțin un ghid publicat.
export const metadata = publishedGuides().length ? base : { ...base, robots: { index: false, follow: true } };

export default function Page() {
  return <GuidesPage />;
}
