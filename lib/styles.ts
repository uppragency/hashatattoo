import { items } from "@/lib/portfolio";

export type StyleTag = "realism" | "black-grey" | "portrete" | "maneci" | "backpiece" | "ornamental" | "color";

export const STYLE_LABELS: Record<StyleTag, string> = {
  realism: "Realism",
  "black-grey": "Black and grey",
  portrete: "Portrete",
  maneci: "Mâneci",
  backpiece: "Backpiece",
  ornamental: "Ornamental",
  color: "Color",
};

/** Etichetele fiecărei lucrări din portofoliu, după titlul și descrierea ei. */
export const FILE_TAGS: Record<string, StyleTag[]> = {
  "lucrare-5.webp": ["black-grey", "backpiece"],
  "lucrare-3.webp": ["realism"],
  "lucrare-11.webp": ["realism", "portrete"],
  "lucrare-4.webp": ["black-grey", "maneci"],
  "lucrare-8.webp": ["realism", "backpiece"],
  "lucrare-7.webp": ["ornamental", "maneci"],
  "lucrare-12.webp": ["black-grey", "realism", "portrete"],
  "lucrare-6.webp": ["realism", "backpiece"],
  "lucrare-10.webp": ["realism", "portrete", "maneci"],
  "lucrare-1.webp": ["realism", "maneci"],
  "lucrare-9.webp": ["black-grey", "realism", "maneci"],
  "lucrare-2.webp": ["color", "maneci"],
  "lucrare-13.webp": ["black-grey", "realism", "portrete", "maneci"],
  "lucrare-14.webp": ["black-grey", "realism"],
  "lucrare-15.webp": ["realism", "backpiece", "color"],
  "lucrare-16.webp": ["black-grey", "portrete"],
  "lucrare-17.webp": ["black-grey", "realism", "portrete"],
  "lucrare-18.webp": ["realism", "portrete", "maneci"],
  "lucrare-19.webp": ["black-grey", "realism"],
  "lucrare-20.webp": ["black-grey", "realism"],
  "lucrare-21.webp": ["black-grey", "realism", "maneci"],
  "lucrare-22.webp": ["black-grey", "realism", "backpiece", "portrete"],
  "lucrare-23.webp": ["realism", "color"],
  "lucrare-24.webp": ["realism", "portrete", "maneci"],
  "lucrare-25.webp": ["color", "realism"],
  "lucrare-26.webp": ["black-grey", "realism", "portrete"],
  "lucrare-27.webp": ["black-grey", "realism", "maneci"],
  "lucrare-28.webp": ["black-grey", "realism"],
  "lucrare-29.webp": ["black-grey", "realism", "portrete"],
  "lucrare-30.webp": ["black-grey", "realism"],
  "lucrare-31.webp": ["black-grey", "realism", "backpiece"],
  "lucrare-32.webp": ["black-grey", "realism", "portrete"],
  "lucrare-33.webp": ["realism", "portrete", "color"],
  "lucrare-34.webp": ["color", "realism"],
  "lucrare-35.webp": ["black-grey", "realism", "portrete"],
  "lucrare-36.webp": ["black-grey", "realism", "portrete", "maneci"],
  "lucrare-37.webp": ["color", "ornamental"],
  "lucrare-38.webp": ["black-grey", "realism", "portrete", "maneci"],
  "lucrare-39.webp": ["color", "ornamental"],
  "lucrare-40.webp": ["black-grey", "realism", "portrete", "maneci"],
  "lucrare-41.webp": ["black-grey", "realism"],
  "lucrare-42.webp": ["black-grey", "realism", "portrete", "maneci"],
  "lucrare-43.webp": ["black-grey", "realism", "maneci"],
};

/** Indicii din lista `items` care au eticheta dată (în ordinea portofoliului). */
export const indicesFor = (tag: StyleTag | "all"): number[] =>
  items
    .map((it, i) => ({ it, i }))
    .filter(({ it }) => it[2] === "tattoo" && (tag === "all" || FILE_TAGS[it[0]]?.includes(tag)))
    .map(({ i }) => i);

/** Pagini existente pentru stilurile care au deja o pagină de serviciu. */
export const STYLE_LINKS: Partial<Record<StyleTag, string>> = {
  realism: "/tatuaje-realism-bucuresti",
  "black-grey": "/tatuaje-black-and-grey-bucuresti",
  portrete: "/stiluri/portrete",
  maneci: "/stiluri/maneci",
  backpiece: "/stiluri/backpiece",
};

export type StylePageDef = {
  slug: "portrete" | "maneci" | "backpiece";
  tag: StyleTag;
  kicker: string;
  h1: [string, string];
  title: string;
  description: string;
  lead: string;
  image: string;
  alt: string;
  statementTitle: [string, string];
  statement: string[];
  points: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  cta: [string, string];
  wa: string;
  short: string;
};

const PRICE_Q = {
  q: "Cât costă?",
  a: "Tatuajele se calculează după timpul de lucru. Prețul depinde de dimensiune, detalii, zonă, culoare sau monocrom și de experiența artistului. Îți dăm o estimare după ce discutăm ideea și vedem referințele.",
};

export const stylePages: StylePageDef[] = [
  {
    slug: "portrete",
    tag: "portrete",
    kicker: "TATUAJE PORTRETE",
    h1: ["Tatuaje portret", "în București."],
    title: "Tatuaje portret realist București | Hasha Tattoo",
    description:
      "Tatuaje portret în București, Sector 4: referințe, proporții și detalii lucrate fără grabă. Vezi lucrări din portofoliu și programează-te pe WhatsApp.",
    lead: "Un portret tatuat se bazează pe o referință bună, pe proporții exacte și pe răbdare la detalii. Vezi lucrări din portofoliu și află cum pregătim un portret, într-un studio privat din Sector 4.",
    image: "lucrare-12.webp",
    alt: "Tatuaj portret realist pe braț, realizat la Hasha Tattoo",
    statementTitle: ["Un portret cere", "mai mult decât talent."],
    statement: [
      "Un portret pe piele este una dintre cele mai exigente lucrări de tatuaj. Fața unei persoane se recunoaște după proporții mici: distanța dintre ochi, forma gurii, expresia. O eroare mică se vede imediat, de aceea portretul se pregătește mai atent decât un desen obișnuit.",
      "Nu promitem o fotografie pe piele. Promitem un proces clar: alegem împreună referința, zona și dimensiunea, aprobi designul, apoi lucrăm fără grabă, pe ședințe, dacă este nevoie.",
    ],
    points: [
      { title: "Referința decide mult", text: "O fotografie clară, cu lumină bună și rezoluție mare dă detalii mai fidele decât una încețoșată sau prelucrată. Dacă ai mai multe poze, trimite-le pe toate." },
      { title: "Zonă potrivită", text: "Portretele se așază bine pe suprafețe relativ plane și ușor de lucrat, cum sunt brațul, antebrațul, coapsa sau gamba. Zonele care se pliază sau se deformează cer o discuție în plus." },
      { title: "Dimensiune suficientă", text: "Ochii, expresia și umbrele fine au nevoie de loc. Un portret prea mic își pierde detaliile, iar în timp liniile fine se pot estompa. Artistul îți recomandă o dimensiune pentru referința ta." },
      { title: "Timp și ședințe", text: "Un portret detaliat poate cere o ședință lungă sau mai multe. Numărul lor îl stabilim după ce vedem designul, iar prețul se calculează pe timp de lucru." },
    ],
    faq: [
      { q: "Cât de asemănător va fi portretul?", a: "Asemănarea depinde de calitatea referinței, de proporții, de contrast și de poziționare. Nu promitem o fotografie pe piele, dar lucrăm la fidelitate și aprobi designul înainte de ședință." },
      { q: "Ce fotografie trimit?", a: "Una clară, cu lumină bună și rezoluție mare, cu fața vizibilă și fără filtre. Dacă ai mai multe poze, trimite-le pe toate, ca artistul să aleagă cea mai potrivită expresie." },
      { q: "Cât de mic poate fi un portret?", a: "Detaliile fine se pot pierde la dimensiuni foarte mici, iar în timp liniile subțiri se estompează. Artistul îți spune ce dimensiune este recomandată pentru fotografia ta și zona aleasă." },
      { q: "Black and grey sau color?", a: "Ambele sunt posibile. Black and grey pune accent pe contrast și umbre, iar culoarea adaugă expresivitate, dar cere mai multă întreținere în timp. Discutăm varianta potrivită ideii tale." },
      PRICE_Q,
    ],
    cta: ["Hai să discutăm", "despre portretul tău."],
    wa: "Bună! Vreau un tatuaj portret și aș dori să trimit o fotografie de referință.",
    short: "TATUAJE PORTRETE",
  },
  {
    slug: "maneci",
    tag: "maneci",
    kicker: "TATUAJE MÂNECI",
    h1: ["Mâneci tatuate", "în București."],
    title: "Mâneci tatuate (sleeve) București | Hasha Tattoo",
    description:
      "Mâneci tatuate în București, Sector 4: half sleeve și full sleeve, planificate de la început. Vezi lucrări din portofoliu și programează-te pe WhatsApp.",
    lead: "O mânecă bine făcută arată ca o singură lucrare, nu ca o adunare de tatuaje. Vezi lucrări din portofoliu și află cum planificăm o mânecă, într-un studio privat din Sector 4.",
    image: "lucrare-10.webp",
    alt: "Tatuaj full sleeve realist pe braț, realizat la Hasha Tattoo",
    statementTitle: ["O mânecă se planifică", "de la început."],
    statement: [
      "Mâneca acoperă brațul pe mare parte din lungime: half sleeve până la cot, full sleeve până la încheietură. Diferența dintre o mânecă reușită și una încărcată este planul: compoziția trebuie să curgă pe formele brațului și să aibă o logică vizuală.",
      "De aceea începem cu o discuție despre temă, stil și zonă, apoi stabilim cum se împarte lucrarea pe ședințe. Pielea trebuie să se vindece între ședințe, deci o mânecă este un proiect de câteva luni, nu de o zi.",
    ],
    points: [
      { title: "Plan, nu piese separate", text: "O mânecă coerentă are o temă, un contrast și un flux. Chiar dacă începi cu o piesă, e bine să se știe de la început încotro se extinde." },
      { title: "Ședințe cu pauze", text: "Pielea se vindecă complet între ședințe, de obicei în 3 până la 6 săptămâni. Artistul stabilește intervalul după zona lucrată și după cum se vindecă pielea ta." },
      { title: "Senzația diferă pe braț", text: "Partea exterioară a brațului este de obicei suportabilă, iar interiorul brațului și cotul sunt mai sensibile. Poți vedea zonele în harta durerii." },
      { title: "Estimare pe timp", text: "Prețul se calculează după timpul de lucru, deci depinde de mărime, detalii și stil. Estimarea o dăm după ce vedem tema și referințele." },
    ],
    faq: [
      { q: "Care este diferența dintre half sleeve și full sleeve?", a: "Half sleeve acoperă, de obicei, brațul până la cot sau de la cot în jos, iar full sleeve acoperă brațul de la umăr până la încheietură. Cât acoperim exact stabilim după idee, zonă și buget de timp." },
      { q: "Pot începe cu un singur tatuaj și extinde ulterior?", a: "Se poate, dar rezultatul este mai coerent dacă planul de ansamblu există de la început. Spune-i artistului că te gândești la o mânecă, ca prima piesă să lase loc pentru restul." },
      { q: "Câte ședințe sunt necesare?", a: "Depinde de dimensiune, detalii și stil. Numărul de ședințe îl stabilim după ce vedem designul. Între ședințe pielea se vindecă, de obicei în 3 până la 6 săptămâni." },
      { q: "Doare mai tare pe interiorul brațului?", a: "În general, da. Partea exterioară a brațului este mai suportabilă, iar interiorul brațului și cotul sunt mai sensibile. Vezi diferențele pe harta durerii." },
      PRICE_Q,
    ],
    cta: ["Hai să planificăm", "mâneca ta."],
    wa: "Bună! Mă gândesc la o mânecă tatuată și aș dori să discut tema, ședințele și o estimare.",
    short: "TATUAJE MÂNECI",
  },
  {
    slug: "backpiece",
    tag: "backpiece",
    kicker: "TATUAJE BACKPIECE",
    h1: ["Backpiece", "în București."],
    title: "Tatuaje backpiece pe spate București | Hasha Tattoo",
    description:
      "Tatuaje backpiece în București, Sector 4: lucrări ample pe spate, planificate pe ședințe. Vezi lucrări din portofoliu și programează-te pe WhatsApp.",
    lead: "Spatele este cea mai mare suprafață continuă pentru un tatuaj. Vezi lucrări din portofoliu și află cum planificăm un backpiece, într-un studio privat din Sector 4.",
    image: "lucrare-5.webp",
    alt: "Tatuaj black and grey amplu pe spate, realizat la Hasha Tattoo",
    statementTitle: ["Cel mai mare", "dintre tatuaje."],
    statement: [
      "Un backpiece folosește tot spatele sau o mare parte din el. Oferă loc pentru compoziții ample: scene, figuri, ornamente sau motive mitologice. Tocmai de aceea cere cel mai mult plan: o lucrare atât de mare se împarte pe ședințe, iar fiecare trebuie să se lege de celelalte.",
      "Discutăm tema, stilul, mărimea și dacă lucrarea ajunge pe umeri sau pe coaste. Apoi stabilim cum se împarte pe ședințe, iar tu aprobi designul înainte de început.",
    ],
    points: [
      { title: "Un singur desen, mai multe ședințe", text: "Designul se gândește ca o compoziție unitară, apoi se execută etapizat. Astfel, piesele finale se leagă fără să se vadă îmbinări." },
      { title: "Suprafață mare, piele relativ groasă", text: "Partea de sus a spatelui este, de obicei, suportabilă, iar zonele de lângă coloană și coaste sunt mai sensibile. Vezi diferențele pe harta durerii." },
      { title: "Poziție și răbdare", text: "Ședința se desfășoară de obicei cu spatele expus, într-o poziție stabilă, ceea ce înseamnă pauze, apă și un snack pentru ședințele lungi." },
      { title: "Vindecare etapizată", text: "Între ședințe zona trebuie să se vindece complet. În tot acest timp respecți îngrijirea indicată, ferești zona de soare și eviți frecarea cu hainele strânse." },
    ],
    faq: [
      { q: "Cât durează un backpiece?", a: "Depinde de dimensiune, nivelul de detaliu și stil. O lucrare amplă se face pe mai multe ședințe, iar numărul lor îl stabilim după ce vedem designul. Între ședințe pielea se vindecă, de obicei în 3 până la 6 săptămâni." },
      { q: "Pot face doar o parte din spate?", a: "Da. Se poate lucra o piesă pe omoplați sau pe partea de sus a spatelui. Dacă te gândești să o extinzi, spune-i artistului de la început, ca designul să lase loc." },
      { q: "Doare mai tare lângă coloană?", a: "În general, da. Zona de lângă coloană și de pe coaste este mai sensibilă decât partea de sus a spatelui. Vezi harta durerii ca să compari zonele." },
      { q: "Cum mă pregătesc pentru o ședință lungă?", a: "Dormi bine, mănâncă o masă consistentă înainte, bea apă și ia un snack. Detalii în ghidul despre pregătirea pentru ședința de tatuaj." },
      PRICE_Q,
    ],
    cta: ["Hai să planificăm", "backpiece-ul tău."],
    wa: "Bună! Mă gândesc la un backpiece și aș dori să discut tema, ședințele și o estimare.",
    short: "TATUAJE BACKPIECE",
  },
];

export const styleBySlug = (slug: string) => stylePages.find((p) => p.slug === slug);
