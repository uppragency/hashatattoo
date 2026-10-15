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
  /** titlul H1, împărțit pe două rânduri (al doilea în italic) */
  heroTitle: [string, string];
  /** title și description SEO */
  metaTitle: string;
  metaDescription: string;
  /** descriere scurtă a imaginii din hero */
  imageAlt: string;
  /** "tool" = pagină interactivă cu rută proprie, fără conținut de articol */
  kind?: "tool";
  /** text pe butonul cardului */
  cardCta?: string;
};

export const guides: Guide[] = [
  {
    slug: "primul-tau-tatuaj",
    title: "Primul tău tatuaj: ghid complet",
    heroTitle: ["Primul tău tatuaj:", "ghid complet."],
    excerpt: "De la idee și alegerea artistului, până la ziua ședinței: ce trebuie să știi înainte să te tatuezi prima dată.",
    metaTitle: "Primul tău tatuaj: ghid complet pentru începători | Hasha Tattoo",
    metaDescription: "Ghid complet pentru primul tatuaj: cum alegi designul, zona și artistul, cât costă, cât doare, cum decurge ședința și cum îl îngrijești. Hasha Tattoo, București.",
    imageAlt: "Tatuaj realist black and grey pe spate, realizat la Hasha Tattoo București",
    category: "Tatuaje",
    readMin: 20,
    image: "lucrare-5.webp",
    published: true,
    date: "2026-10-16",
  },
  {
    slug: "cum-ingrijesti-un-tatuaj-nou",
    title: "Cum îngrijești un tatuaj nou, zi cu zi",
    heroTitle: ["Cum îngrijești un", "tatuaj nou."],
    excerpt: "Primele 7 zile, spălarea, crema potrivită și greșelile care strică o lucrare bună.",
    metaTitle: "Cum îngrijești un tatuaj nou: ghid zi cu zi | Hasha Tattoo",
    metaDescription: "Îngrijirea unui tatuaj nou, pas cu pas: bandajul, spălarea, crema, coaja, mâncărimea, soarele, sportul și semnele de infecție. Ghid de la Hasha Tattoo, București.",
    imageAlt: "Tatuaj realist pe antebraț, realizat la Hasha Tattoo, la finalul ședinței",
    category: "Îngrijire",
    readMin: 20,
    image: "lucrare-9.webp",
    published: true,
    date: "2026-10-16",
  },
  {
    slug: "cum-alegi-stilul-de-tatuaj",
    title: "Realism, black and grey sau color: cum alegi stilul",
    heroTitle: ["Realism, black and grey", "sau color."],
    excerpt: "Diferențele dintre stiluri, cum se văd în timp și cum alegi ce se potrivește ideii tale.",
    metaTitle: "Realism, black and grey sau color: cum alegi stilul de tatuaj | Hasha Tattoo",
    metaDescription: "Cum alegi stilul de tatuaj: diferențele dintre realism, black and grey și color, cum îmbătrânesc, ce zone se potrivesc și cum alegi artistul. Ghid Hasha Tattoo.",
    imageAlt: "Tatuaj color realist pe umăr, realizat la Hasha Tattoo București",
    category: "Tatuaje",
    readMin: 20,
    image: "lucrare-2.webp",
    published: true,
    date: "2026-10-16",
  },
  {
    slug: "piercing-ureche-ghid",
    title: "Piercing în ureche: tipuri, durere și vindecare",
    heroTitle: ["Piercing în ureche:", "ghid complet."],
    excerpt: "Lob, cartilaj, industrial, helix: ce alegi, cât doare și cât durează până se vindecă.",
    metaTitle: "Piercing în ureche: tipuri, durere, prețuri și vindecare | Hasha Tattoo",
    metaDescription: "Ghid despre piercingul în ureche: lob, helix, tragus, daith, industrial. Cât doare, cât costă, cât se vindecă, ce bijuterie alegi și cum îl îngrijești. Hasha Tattoo.",
    imageAlt: "Piercing industrial în ureche, realizat la Hasha Tattoo București",
    category: "Piercing",
    readMin: 20,
    image: "pierce-3.webp",
    published: true,
    date: "2026-10-16",
  },
  {
    slug: "cum-ingrijesti-un-piercing-nou",
    title: "Cum îngrijești un piercing nou și când e iritație, nu infecție",
    heroTitle: ["Cum îngrijești un", "piercing nou."],
    excerpt: "Curățarea corectă, ce eviți și semnalele pentru care merită să ne scrii.",
    metaTitle: "Cum îngrijești un piercing nou: curățare, iritație sau infecție | Hasha Tattoo",
    metaDescription: "Îngrijirea piercingului nou: cum îl cureți, ce eviți, cum deosebești iritația de infecție, cât durează vindecarea și când schimbi bijuteria. Ghid Hasha Tattoo.",
    imageAlt: "Piercing în cartilajul urechii, în perioada de vindecare, realizat la Hasha Tattoo",
    category: "Îngrijire",
    readMin: 20,
    image: "pierce-6.webp",
    published: true,
    date: "2026-10-16",
  },
  {
    slug: "cum-te-pregatesti-pentru-sedinta-de-tatuaj",
    title: "Cum te pregătești pentru ședința de tatuaj",
    heroTitle: ["Cum te pregătești pentru", "ședința de tatuaj."],
    excerpt: "Somn, mâncare, haine, ce aduci și ce eviți în ziua dinainte și în ziua ședinței.",
    metaTitle: "Cum te pregătești pentru ședința de tatuaj: lista completă | Hasha Tattoo",
    metaDescription: "Pregătirea pentru ședința de tatuaj: somn, mâncare, alcool, haine, ce aduci, cum faci față durerii și ce faci după. Ghid practic de la Hasha Tattoo, București.",
    imageAlt: "Tatuaj cu detalii fine pe picior, realizat la Hasha Tattoo București",
    category: "Tatuaje",
    readMin: 20,
    image: "lucrare-7.webp",
    published: true,
    date: "2026-10-16",
  },
  {
    slug: "harta-durerii",
    kind: "tool",
    cardCta: "DESCHIDE HARTA ",
    title: "Harta durerii: cât doare un tatuaj, pe zone",
    heroTitle: ["Harta durerii:", "cât doare pe zone."],
    excerpt: "Alegi o zonă a corpului și vezi o scară orientativă a durerii, ce simți și ce te ajută.",
    metaTitle: "Harta durerii la tatuaj: cât doare pe fiecare zonă | Hasha Tattoo",
    metaDescription: "Hartă interactivă a durerii la tatuaj: alege zona corpului și vezi cât doare orientativ, ce simți și cum faci ședința mai suportabilă. Hasha Tattoo, București.",
    imageAlt: "Tatuaj realizat la Hasha Tattoo București, pe antebraț",
    category: "Tatuaje",
    readMin: 4,
    image: "lucrare-9.webp",
    published: true,
    date: "2026-10-16",
  },
  {
    slug: "pentru-cei-care-se-tem-de-tatuaj",
    title: "Pentru cei care se tem de tatuaj",
    heroTitle: ["Pentru cei care", "se tem de tatuaj."],
    excerpt: "Frica de durere, de regret sau de ac este normală. Ce o provoacă, ce o liniștește și cum faci primul pas în ritmul tău.",
    metaTitle: "Ți-e frică de tatuaj? Ghid pentru cei care se tem | Hasha Tattoo",
    metaDescription: "Ți-e frică de durere, de ace sau de regret? Ghid blând pentru primul tatuaj sau piercing: ce provoacă frica, cum o reduci și cum faci primul pas în ritmul tău.",
    imageAlt: "Tatuaj realist pe braț, realizat la Hasha Tattoo București",
    category: "Tatuaje",
    readMin: 12,
    image: "lucrare-12.webp",
    published: true,
    date: "2026-10-16",
  },
];

export const publishedGuides = () => guides.filter((g) => g.published);
export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
