import { areas } from "@/lib/areas";
import { publishedGuides } from "@/lib/guides";
import { services } from "@/lib/services";
import { stylePages } from "@/lib/styles";

export type SearchEntry = { title: string; text: string; href: string; type: string };

const pages: SearchEntry[] = [
  { title: "Tatuaje", text: "tatuaje realism black and grey portrete mâneci backpiece studio privat programare", href: "/tatuaje", type: "Pagină" },
  { title: "Piercing", text: "piercing ureche buric nas septum limbă buză sprânceană bijuterii", href: "/piercing", type: "Pagină" },
  { title: "Portofoliu", text: "lucrări poze galerie tatuaje piercing realizate în studio", href: "/portofoliu", type: "Pagină" },
  { title: "Prețuri", text: "cât costă tatuaj piercing lei tarife lob cartilaj industrial buric manoperă", href: "/preturi", type: "Pagină" },
  { title: "Despre noi", text: "studio privat artiști echipă istorie Hasha Tattoo București", href: "/despre-noi", type: "Pagină" },
  { title: "Contact", text: "program adresă telefon whatsapp email Bulevardul Mărășești 80 Sector 4 luni vineri 12:00 20:00", href: "/contact", type: "Pagină" },
  { title: "Întrebări frecvente", text: "programare prețuri îngrijire infecție durere întrebări răspunsuri", href: "/intrebari-frecvente", type: "Pagină" },
  { title: "Ghiduri", text: "ghiduri articole tatuaj piercing îngrijire pregătire", href: "/ghiduri", type: "Pagină" },
  { title: "Stiluri de tatuaj", text: "galerie filtrată realism black and grey portrete mâneci backpiece ornamental color", href: "/stiluri", type: "Pagină" },
  { title: "Verificator piercing", text: "ce piercing se potrivește anatomiei tale zonă preț vindecare quiz", href: "/verificator-piercing", type: "Instrument" },
  { title: "Zone și cartiere", text: "unde ne găsești sectoare cartiere ruta google maps", href: "/zone", type: "Pagină" },
];

export const searchIndex: SearchEntry[] = [
  ...pages,
  ...services.map((s) => ({ title: s.short.charAt(0) + s.short.slice(1).toLowerCase(), text: `${s.description} ${s.lead}`, href: `/${s.slug}`, type: "Serviciu" })),
  ...stylePages.map((s) => ({ title: s.kicker.charAt(0) + s.kicker.slice(1).toLowerCase(), text: `${s.description} ${s.lead}`, href: `/stiluri/${s.slug}`, type: "Stil" })),
  ...publishedGuides().map((g) => ({ title: g.title, text: `${g.excerpt} ${g.metaDescription}`, href: `/ghiduri/${g.slug}`, type: g.kind === "tool" ? "Instrument" : "Ghid" })),
  ...areas.map((a) => ({ title: `Tatuaje și piercing, ${a.name}`, text: `${a.description} ${a.name}`, href: `/zone/${a.slug}`, type: "Zonă" })),
];

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");

/** Rezultate ordonate după relevanță. Ignoră diacriticele și cuvintele foarte scurte. */
export function search(query: string, limit = 8): SearchEntry[] {
  const terms = norm(query)
    .split(/\s+/)
    .filter((t) => t.length > 1);
  if (!terms.length) return [];
  return searchIndex
    .map((e) => {
      const title = norm(e.title);
      const text = norm(e.text);
      let score = 0;
      for (const t of terms) {
        if (title.includes(t)) score += title.startsWith(t) ? 6 : 4;
        if (text.includes(t)) score += 1;
      }
      return { e, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.e);
}
