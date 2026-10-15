export type Service = {
  slug: string;
  kicker: string;
  /** [linia 1, linia 2 (italic)] */
  h1: [string, string];
  title: string;
  description: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  statementTitle: [string, string];
  statement: string;
  gallery: { image: string; alt: string; label: string }[];
  principlesTitle: [string, string, string];
  principles: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  cta: [string, string];
  /** link scurt afisat in lista "Alte servicii" */
  short: string;
};

const PRICE_FAQ = {
  q: "Cât costă?",
  a: "Nu publicăm sume orientative, pentru că prețul depinde de dimensiune, complexitate, zonă și timpul de execuție. Îți oferim o estimare după ce discutăm ideea ta pe WhatsApp.",
};

export const services: Service[] = [
  {
    slug: "tatuaje-realism-bucuresti",
    kicker: "TATUAJE REALISM",
    h1: ["Tatuaje realism", "în București."],
    title: "Tatuaje realism București | Hasha Tattoo",
    description:
      "Tatuaje realism în București, Sector 4. Portrete și compoziții realiste, realizate cu ace sterile și tușuri vegane. Programează-te pe WhatsApp.",
    lead: "Portrete, compoziții și detalii care arată ca o fotografie pe piele. Discutăm ideea, o adaptăm zonei și lucrăm fără grabă, într-un studio privat din Sector 4.",
    heroImage: "lucrare-3.webp",
    heroAlt: "Tatuaj realist amplu pe piept, realizat la Hasha Tattoo",
    statementTitle: ["Realismul cere timp", "și răbdare."],
    statement:
      "Un tatuaj realist se bazează pe nuanțe fine, contraste controlate și proporții exacte. De aceea începem cu o discuție despre referințe, dimensiune și zona corpului, apoi stabilim împreună designul înainte de prima ședință. Lucrările mai mari pot necesita mai multe ședințe, iar numărul lor se stabilește după ce vedem designul.",
    gallery: [
      { image: "lucrare-11.webp", alt: "Tatuaj portret realist pe braț, realizat la Hasha Tattoo", label: "PORTRET / REALISM" },
      { image: "lucrare-12.webp", alt: "Tatuaj realist cu portret pe braț, realizat la Hasha Tattoo", label: "BLACK & GREY / PORTRET" },
    ],
    principlesTitle: ["Cum lucrăm", "un tatuaj", "realist."],
    principles: [
      { title: "Referințe clare", text: "Trimite-ne fotografii, schițe sau idei. Artistul îți spune sincer ce funcționează în realism și pe zona aleasă." },
      { title: "Design aprobat de tine", text: "Nu începem lucrarea până nu ești mulțumit de design, dimensiune și poziționare." },
      { title: "Siguranță", text: "Ace de unică folosință, instrumente sterilizate și tușuri vegane de la producători cunoscuți." },
      { title: "Îngrijire după ședință", text: "Primești instrucțiuni clare de îngrijire, iar dacă ai dubii în timpul vindecării ne poți scrie pe WhatsApp." },
    ],
    faq: [
      { q: "Ce este un tatuaj realist?", a: "Este un stil care redă cât mai fidel un portret, un obiect sau o scenă, prin gradații fine de umbre și lumini. Poate fi realizat în alb și negru sau în culori." },
      { q: "Cât durează un tatuaj realist?", a: "Depinde de dimensiune, nivelul de detaliu și zonă. Unele lucrări se termină într-o ședință, altele necesită mai multe. Îți spunem estimarea după ce vedem designul." },
      { q: "Pot veni cu o fotografie de referință?", a: "Da. O imagine clară ajută mult. Artistul o adaptează zonei și proporțiilor corpului tău, iar tu aprobi varianta finală înainte de ședință." },
      PRICE_FAQ,
    ],
    cta: ["Hai să discutăm", "despre tatuajul tău realist."],
    short: "TATUAJE REALISM",
  },
  {
    slug: "tatuaje-black-and-grey-bucuresti",
    kicker: "TATUAJE BLACK AND GREY",
    h1: ["Tatuaje black and grey", "în București."],
    title: "Tatuaje black and grey București | Hasha Tattoo",
    description:
      "Tatuaje black and grey în București, Sector 4. Lucrări în nuanțe de negru și gri, de la compoziții pe braț la backpiece. Programează-te pe WhatsApp.",
    lead: "Lucrări realizate în nuanțe de negru și gri, cu contrast și profunzime. De la compoziții pe braț la lucrări ample pe spate, într-un studio privat din Sector 4.",
    heroImage: "lucrare-5.webp",
    heroAlt: "Tatuaj black and grey amplu pe spate, realizat la Hasha Tattoo",
    statementTitle: ["Contrast, umbre", "și detalii."],
    statement:
      "Black and grey înseamnă tatuaje realizate doar din negru și degradeuri de gri, fără culoare. Rezultatul depinde de felul în care sunt construite umbrele și luminile, de aceea alegem împreună designul, dimensiunea și zona potrivită înainte de ședință. Pentru lucrări mari, cum sunt mânecile sau backpiece-urile, planificăm etapele împreună.",
    gallery: [
      { image: "lucrare-4.webp", alt: "Tatuaj black and grey pe braț, realizat la Hasha Tattoo", label: "BLACK & GREY / SLEEVE" },
      { image: "lucrare-9.webp", alt: "Tatuaj artistic realist pe picior, realizat la Hasha Tattoo", label: "BLACK & GREY / LEG SLEEVE" },
    ],
    principlesTitle: ["Cum lucrăm", "black", "and grey."],
    principles: [
      { title: "Discuție înainte de tot", text: "Ne spui ideea, zona și stilul dorit. Artistul îți recomandă dimensiunea și poziționarea potrivite." },
      { title: "Design discutat, nu impus", text: "Ajustăm designul împreună, până când arată exact cum îți dorești." },
      { title: "Siguranță", text: "Ace de unică folosință, instrumente sterilizate și respectarea normelor sanitare." },
      { title: "Îngrijire după ședință", text: "Primești instrucțiuni scrise de îngrijire, adaptate lucrării tale." },
    ],
    faq: [
      { q: "Ce înseamnă black and grey?", a: "Este un stil de tatuaj realizat în negru și nuanțe de gri, fără culori. Gradările de gri se obțin prin diluarea tușului negru." },
      { q: "Pot combina black and grey cu alte stiluri?", a: "Da. Discutăm ideea ta și vedem cum se poate îmbina, de exemplu cu elemente ornamentale sau cu un portret realist." },
      { q: "Cum păstrez tatuajul în timp?", a: "Orice tatuaj se schimbă în timp. Îngrijirea corectă în perioada de vindecare și protecția împotriva soarelui ajută la păstrarea contrastului. Artistul îți explică exact ce ai de făcut." },
      PRICE_FAQ,
    ],
    cta: ["Hai să discutăm", "despre tatuajul tău."],
    short: "TATUAJE BLACK AND GREY",
  },
  {
    slug: "piercing-ureche-bucuresti",
    kicker: "PIERCING URECHE",
    h1: ["Piercing ureche", "în București."],
    title: "Piercing ureche București | Hasha Tattoo",
    description:
      "Piercing în ureche în București, Sector 4. Montare cu instrumente sterile, bijuterii alese potrivit anatomiei tale. Programează-te pe WhatsApp.",
    lead: "Alegem împreună locul, bijuteria și poziția potrivite urechii tale. Montarea se face cu instrumente sterile, într-un studio privat din Sector 4.",
    heroImage: "pierce-6.webp",
    heroAlt: "Piercinguri și bijuterii pentru ureche, realizate la Hasha Tattoo",
    statementTitle: ["Piercing ales corect,", "montat corect."],
    statement:
      "Fiecare ureche este diferită, iar un piercing arată bine și se vindecă mai ușor când este ales potrivit anatomiei. Discutăm despre locul dorit, bijuterie și stilul tău, de la piercinguri simple până la industrial și compoziții cu mai multe bijuterii. La final primești instrucțiuni clare de îngrijire.",
    gallery: [
      { image: "pierce-3.webp", alt: "Piercing industrial și bijuterii în ureche, realizate la Hasha Tattoo", label: "INDUSTRIAL / EAR PIERCING" },
      { image: "pierce-8.webp", alt: "Piercinguri multiple în ureche, realizate la Hasha Tattoo", label: "URECHE / PIERCING" },
    ],
    principlesTitle: ["Cum lucrăm", "un piercing", "în ureche."],
    principles: [
      { title: "Alegem locul împreună", text: "Artistul se uită la forma urechii tale și îți recomandă ce se potrivește anatomiei și stilului tău." },
      { title: "Bijuterie potrivită", text: "Alegem împreună bijuteria, ca să arate bine și să fie comodă." },
      { title: "Montare sterilă", text: "Lucrăm cu instrumente sterile și respectăm normele sanitare." },
      { title: "Îngrijire clară", text: "La final primești instrucțiuni de îngrijire, iar pentru întrebări ne poți scrie pe WhatsApp." },
    ],
    faq: [
      { q: "Ce piercinguri se pot face în ureche?", a: "De la piercinguri simple până la industrial și compoziții cu mai multe bijuterii. Alegem împreună locul potrivit anatomiei tale." },
      { q: "Doare piercingul în ureche?", a: "Senzația diferă de la o persoană la alta și în funcție de zona aleasă. Artistul îți explică la ce să te aștepți înainte de montare." },
      { q: "Cum îngrijesc un piercing nou?", a: "Primești instrucțiuni clare la finalul ședinței. Perioada de vindecare diferă în funcție de zonă și de persoană, iar dacă ai dubii ne poți scrie pe WhatsApp." },
      PRICE_FAQ,
    ],
    cta: ["Hai să discutăm", "despre piercingul tău."],
    short: "PIERCING URECHE",
  },
  {
    slug: "piercing-buric-bucuresti",
    kicker: "PIERCING BURIC",
    h1: ["Piercing buric", "în București."],
    title: "Piercing buric București | Hasha Tattoo",
    description:
      "Piercing în buric în București, Sector 4. Montare cu instrumente sterile și bijuterii alese împreună. Programează-te pe WhatsApp.",
    lead: "Alegem împreună bijuteria și poziția potrivite. Montarea se face cu instrumente sterile, într-un spațiu privat și liniștit din Sector 4.",
    heroImage: "pierce-2.webp",
    heroAlt: "Piercing în buric cu bijuterie argintie, realizat la Hasha Tattoo",
    statementTitle: ["Un piercing simplu,", "făcut cu grijă."],
    statement:
      "Un piercing în buric arată bine când poziția și bijuteria se potrivesc anatomiei tale. Discutăm despre stilul dorit, alegem bijuteria și stabilim locul exact înainte de montare. Lucrăm într-un spațiu privat, fără grabă, iar la final primești instrucțiuni clare de îngrijire.",
    gallery: [
      { image: "pierce-4.webp", alt: "Piercing în buric cu bijuterie simplă, realizat la Hasha Tattoo", label: "BURIC / PIERCING" },
      { image: "pierce-2.webp", alt: "Piercing în buric cu bijuterie argintie, realizat la Hasha Tattoo", label: "BURIC / PIERCING" },
    ],
    principlesTitle: ["Cum lucrăm", "un piercing", "în buric."],
    principles: [
      { title: "Poziție potrivită", text: "Stabilim împreună locul exact, în funcție de anatomia ta și de stilul dorit." },
      { title: "Bijuterie aleasă împreună", text: "Îți arătăm variantele și o alegi pe cea care ți se potrivește." },
      { title: "Montare sterilă", text: "Lucrăm cu instrumente sterile și respectăm normele sanitare." },
      { title: "Îngrijire clară", text: "La final primești instrucțiuni de îngrijire, iar pentru întrebări ne poți scrie pe WhatsApp." },
    ],
    faq: [
      { q: "Cum se alege bijuteria pentru buric?", a: "Ne uităm la anatomia ta, la poziția dorită și la stilul preferat. Îți prezentăm variantele disponibile, iar alegerea finală îți aparține." },
      { q: "Doare piercingul în buric?", a: "Senzația diferă de la o persoană la alta. Artistul îți explică procesul înainte de montare, ca să știi la ce să te aștepți." },
      { q: "Cum îngrijesc un piercing nou?", a: "Primești instrucțiuni clare la finalul ședinței. Vindecarea diferă de la o persoană la alta, iar dacă ai dubii ne poți scrie pe WhatsApp." },
      PRICE_FAQ,
    ],
    cta: ["Hai să discutăm", "despre piercingul tău."],
    short: "PIERCING BURIC",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
