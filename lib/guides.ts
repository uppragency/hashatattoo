export type GuideCategory = "Tatuaje" | "Piercing" | "Îngrijire";

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: GuideCategory;
  readMin: number;
  image: string;
  /** false = apare în listă ca "În curând", fără link */
  published: boolean;
  /** ISO, doar pentru ghidurile publicate */
  date?: string;
};

export const guides: Guide[] = [
  {
    slug: "primul-tau-tatuaj",
    title: "Primul tău tatuaj: ghid complet",
    excerpt: "De la idee și alegerea artistului, până la ziua ședinței: ce trebuie să știi înainte să te tatuezi prima dată.",
    category: "Tatuaje",
    readMin: 10,
    image: "lucrare-5.webp",
    published: false,
  },
  {
    slug: "cum-ingrijesti-un-tatuaj-nou",
    title: "Cum îngrijești un tatuaj nou, zi cu zi",
    excerpt: "Primele 7 zile, spălarea, crema potrivită și greșelile care strică o lucrare bună.",
    category: "Îngrijire",
    readMin: 7,
    image: "lucrare-9.webp",
    published: false,
  },
  {
    slug: "cum-alegi-stilul-de-tatuaj",
    title: "Realism, black and grey sau color: cum alegi stilul",
    excerpt: "Diferențele dintre stiluri, cum se văd în timp și cum alegi ce se potrivește ideii tale.",
    category: "Tatuaje",
    readMin: 8,
    image: "lucrare-2.webp",
    published: false,
  },
  {
    slug: "piercing-ureche-ghid",
    title: "Piercing în ureche: tipuri, durere și vindecare",
    excerpt: "Lob, cartilaj, industrial, helix: ce alegi, cât doare și cât durează până se vindecă.",
    category: "Piercing",
    readMin: 8,
    image: "pierce-3.webp",
    published: false,
  },
  {
    slug: "cum-ingrijesti-un-piercing-nou",
    title: "Cum îngrijești un piercing nou și când e iritație, nu infecție",
    excerpt: "Curățarea corectă, ce eviți și semnalele pentru care merită să ne scrii.",
    category: "Îngrijire",
    readMin: 7,
    image: "pierce-6.webp",
    published: false,
  },
  {
    slug: "cum-te-pregatesti-pentru-sedinta-de-tatuaj",
    title: "Cum te pregătești pentru ședința de tatuaj",
    excerpt: "Somn, mâncare, haine, ce aduci și ce eviți în ziua dinainte și în ziua ședinței.",
    category: "Tatuaje",
    readMin: 6,
    image: "lucrare-7.webp",
    published: false,
  },
];

export const publishedGuides = () => guides.filter((g) => g.published);
