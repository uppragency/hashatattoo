export type Area = {
  slug: string;
  /** numele zonei, folosit în titluri */
  name: string;
  /** punct de plecare pentru ruta din Google Maps */
  origin: string;
  /** H1: [rând 1, rând 2 italic] */
  h1: [string, string];
  title: string;
  description: string;
  lead: string;
  image: string;
  alt: string;
  /** titlul secțiunii de context, pe două rânduri */
  contextTitle: [string, string];
  context: string[];
  /** 3 motive concrete */
  reasons: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  /** text scurt pe card în hub */
  card: string;
};

export const STUDIO_ADDRESS = "Bulevardul Mărășești nr. 80, Sector 4, București";
export const STUDIO_DESTINATION = "Bulevardul Mărășești 80, București";

export const mapsRoute = (origin: string, mode: "transit" | "driving" | "walking") =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(STUDIO_DESTINATION)}&travelmode=${mode}`;

export const mapsFromMe = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STUDIO_DESTINATION)}`;

const hours = "Luni până vineri, între 12:00 și 20:00. Sâmbăta și duminica studioul este închis.";

const commonFaq = (name: string) => [
  {
    q: `Cum mă programez, dacă vin din ${name}?`,
    a: "Cel mai simplu este pe WhatsApp, la +40 766 422 219. Ne spui ideea, zona corpului și, dacă ai, imagini de referință. Fixăm împreună ziua și ora, iar la ședință ajungi o singură dată, cu toate detaliile lămurite.",
  },
  {
    q: "Care este programul studioului?",
    a: hours,
  },
];

export const areas: Area[] = [
  {
    slug: "sector-4",
    name: "Sector 4",
    origin: "Sector 4, București",
    h1: ["Tatuaje și piercing", "în Sector 4."],
    title: "Tatuaje și piercing în Sector 4, București | Hasha Tattoo",
    description:
      "Studio privat de tatuaje și piercing în Sector 4, București, pe Bulevardul Mărășești nr. 80. Program luni până vineri, 12:00 până la 20:00. Programare pe WhatsApp.",
    lead: "Hasha Tattoo se află în Sectorul 4, pe Bulevardul Mărășești nr. 80. Un studio privat, cu programare, unde lucrăm fără grabă și fără aglomerație.",
    image: "studio.webp",
    alt: "Interiorul studioului Hasha Tattoo din Sector 4, București",
    contextTitle: ["Chiar în", "Sectorul 4."],
    context: [
      "Dacă locuiești sau lucrezi în Sectorul 4, studioul este în sectorul tău. Bulevardul Mărășești face legătura între zona Parcului Carol și Splaiul Unirii, iar stațiile de metrou Unirii și Tineretului se află în zona bulevardului. Ruta exactă de la adresa ta, cu timpul de azi, o vezi în Google Maps cu butoanele de mai jos.",
      "Lucrăm pe bază de programare, într-un spațiu privat. Asta înseamnă că vii la ora stabilită, artistul este disponibil doar pentru tine, iar ședința nu este întreruptă de alți clienți.",
    ],
    reasons: [
      { title: "Studio privat", text: "Un spațiu liniștit, în care te poți concentra pe idee și pe ședință." },
      { title: "Program clar", text: "Luni până vineri, între 12:00 și 20:00. Te programezi pe WhatsApp." },
      { title: "Tatuaje și piercing", text: "Același studio pentru tatuaje, cover-up, corectări și piercinguri în ureche, buric, nas și alte zone." },
    ],
    faq: [
      ...commonFaq("Sectorul 4"),
      { q: "Unde exact este studioul?", a: "Pe Bulevardul Mărășești nr. 80, Sector 4, București, într-un spațiu privat. Adresa se deschide direct în Google Maps din pagina de contact." },
    ],
    card: "Studioul este chiar în sectorul tău.",
  },
  {
    slug: "tineretului",
    name: "Tineretului",
    origin: "Metrou Tineretului, București",
    h1: ["Tatuaje și piercing", "lângă Tineretului."],
    title: "Tatuaje și piercing zona Tineretului, București | Hasha Tattoo",
    description:
      "Tatuaje și piercing pentru cei din zona Tineretului, București. Studio privat pe Bulevardul Mărășești nr. 80, Sector 4. Ruta din Google Maps și programare pe WhatsApp.",
    lead: "Locuiești sau lucrezi în zona Tineretului? Studioul nostru este în Sectorul 4, pe Bulevardul Mărășești nr. 80, iar ruta o vezi în câteva secunde în Google Maps.",
    image: "lucrare-6.webp",
    alt: "Detaliu dintr-un tatuaj realizat la Hasha Tattoo, București",
    contextTitle: ["Din zona Tineretului", "până la noi."],
    context: [
      "Zona Tineretului se află în Sectorul 4, ca și studioul. Stația de metrou Tineretului este în zona Bulevardului Mărășești, așa că mulți clienți vin cu metroul sau pe jos, în funcție de punctul din care pleacă.",
      "Nu afirmăm o distanță sau un timp fix, pentru că depind de locul de unde pornești. Butoanele de mai jos deschid ruta în Google Maps, de la stația Tineretului până la studio, cu mijlocul de transport ales de tine.",
    ],
    reasons: [
      { title: "În același sector", text: "Nu traversezi orașul: studioul este în Sectorul 4, ca și zona Tineretului." },
      { title: "Metrou în zonă", text: "Stația Tineretului este în zona bulevardului. Verifică traseul exact în Google Maps." },
      { title: "Programare simplă", text: "Scrii pe WhatsApp, fixăm ziua și ora, apoi vii la ședință." },
    ],
    faq: [
      ...commonFaq("zona Tineretului"),
      { q: "Pot ajunge cu metroul?", a: "Stația de metrou Tineretului se află în zona Bulevardului Mărășești. Pentru ruta exactă și timpul de azi, deschide butonul „Metrou și transport public” din această pagină, care te duce direct în Google Maps." },
    ],
    card: "Metrou în zona bulevardului, același sector.",
  },
  {
    slug: "unirii",
    name: "Unirii și centru",
    origin: "Piața Unirii, București",
    h1: ["Tatuaje și piercing", "lângă Piața Unirii."],
    title: "Tatuaje și piercing lângă Piața Unirii, București | Hasha Tattoo",
    description:
      "Tatuaje și piercing pentru cei din zona Unirii și a centrului. Studio privat pe Bulevardul Mărășești nr. 80, Sector 4. Ruta din Google Maps și programare pe WhatsApp.",
    lead: "Lucrezi sau locuiești în zona Unirii ori în centru? Bulevardul Mărășești ajunge la Splaiul Unirii, iar studioul nostru este pe acest bulevard, la numărul 80.",
    image: "lucrare-8.webp",
    alt: "Detaliu dintr-un tatuaj realizat la Hasha Tattoo, București",
    contextTitle: ["De la Unirii,", "până la noi."],
    context: [
      "Bulevardul Mărășești face legătura între zona Parcului Carol și Splaiul Unirii, iar stația de metrou Unirii este în zona bulevardului. Pentru mulți clienți din centru, drumul până la studio este scurt, dar durata depinde de punctul exact din care pleci.",
      "De aceea îți lăsăm ruta live: butoanele de mai jos deschid Google Maps de la Piața Unirii până la Bulevardul Mărășești nr. 80, pentru mers pe jos, transport public sau mașină.",
    ],
    reasons: [
      { title: "Aproape de centru", text: "Bulevardul Mărășești ajunge la Splaiul Unirii, deci drumul din centru nu este unul lung." },
      { title: "După program", text: "Studioul lucrează între 12:00 și 20:00, ceea ce se potrivește unei pauze lungi sau unei zile libere." },
      { title: "Fără așteptare", text: "Lucrăm pe programare, deci nu stai la coadă." },
    ],
    faq: [
      ...commonFaq("zona Unirii"),
      { q: "Pot veni în pauza de masă?", a: "Pentru piercinguri simple, un interval scurt poate fi suficient, dar stabilim durata la programare. Tatuajele cer mai mult timp, deci se programează cu ședință dedicată. Scrie-ne pe WhatsApp și vedem ce se potrivește." },
    ],
    card: "Bulevardul ajunge la Splaiul Unirii.",
  },
  {
    slug: "berceni",
    name: "Berceni",
    origin: "Berceni, București",
    h1: ["Tatuaje și piercing", "pentru Berceni."],
    title: "Tatuaje și piercing pentru zona Berceni, București | Hasha Tattoo",
    description:
      "Tatuaje și piercing pentru cei din Berceni, București. Studio privat în Sectorul 4, pe Bulevardul Mărășești nr. 80. Ruta din Google Maps și programare pe WhatsApp.",
    lead: "Berceni este în Sectorul 4, ca și studioul nostru. Dacă vii din zona Berceni, ruta o poți verifica în Google Maps, apoi te programezi pe WhatsApp.",
    image: "lucrare-10.webp",
    alt: "Detaliu dintr-un tatuaj realizat la Hasha Tattoo, București",
    contextTitle: ["Din Berceni", "în Sectorul 4."],
    context: [
      "Berceni face parte din Sectorul 4, iar studioul se află pe Bulevardul Mărășești nr. 80, în același sector. Drumul depinde de ora la care pleci și de mijlocul de transport ales, așa că nu promitem un timp fix.",
      "Butoanele de mai jos deschid în Google Maps ruta de la Berceni până la studio, cu mașina, transportul public sau mersul pe jos, ca să alegi varianta care ți se potrivește la ora programării.",
    ],
    reasons: [
      { title: "Același sector", text: "Studioul este în Sectorul 4, ca și Berceni." },
      { title: "Planifici drumul", text: "Verifici în Google Maps ruta pentru ora programării, nu o estimare generală." },
      { title: "Ședințe fără grabă", text: "Dacă lucrarea este mare, o împărțim în ședințe, iar tu alegi ce zile ți se potrivesc." },
    ],
    faq: [
      ...commonFaq("Berceni"),
      { q: "Cum aflu cât durează drumul?", a: "Folosește butoanele din pagină: deschid ruta de la Berceni până la Bulevardul Mărășești nr. 80 în Google Maps, cu trafic actual. Nu dăm un timp fix, pentru că depinde de ora și de punctul exact din care pleci." },
    ],
    card: "Din Berceni, tot în Sectorul 4.",
  },
  {
    slug: "sector-3",
    name: "Sector 3",
    origin: "Sector 3, București",
    h1: ["Tatuaje și piercing", "pentru Sector 3."],
    title: "Tatuaje și piercing pentru Sector 3, București | Hasha Tattoo",
    description:
      "Tatuaje și piercing pentru clienții din Sectorul 3, București. Studio privat în Sectorul 4, pe Bulevardul Mărășești nr. 80. Ruta din Google Maps și programare pe WhatsApp.",
    lead: "Sectorul 3 se învecinează cu Sectorul 4, unde se află studioul nostru. Vezi ruta din zona ta în Google Maps și programează-te pe WhatsApp.",
    image: "lucrare-1.webp",
    alt: "Lucrare de tatuaj realizată la Hasha Tattoo, București",
    contextTitle: ["Din Sectorul 3", "până la noi."],
    context: [
      "Studioul este în Sectorul 4, pe Bulevardul Mărășești nr. 80, iar Sectorul 3 se învecinează cu el. Mulți clienți din Sectorul 3 ajung în zona noastră cu transportul public sau cu mașina, în funcție de cartierul din care pleacă.",
      "Fiecare zonă a sectorului este diferită, de aceea nu dăm o durată generală a drumului. Ruta live, de la punctul tău de plecare până la studio, o vezi în Google Maps, cu butoanele de mai jos.",
    ],
    reasons: [
      { title: "Sector învecinat", text: "Sectorul 3 se învecinează cu Sectorul 4, unde este studioul." },
      { title: "Ședință planificată", text: "Programarea se face pe WhatsApp, cu ziua și ora stabilite din timp." },
      { title: "O singură deplasare", text: "Lămurim ideea, zona și estimarea pe WhatsApp, ca la studio să vii direct pentru ședință." },
    ],
    faq: [
      ...commonFaq("Sectorul 3"),
      { q: "Pot discuta ideea înainte să vin?", a: "Da. Pe WhatsApp poți trimite referințe, zona corpului și întrebările tale. Artistul îți răspunde cu recomandări și o estimare, astfel încât la studio să vii cu totul clarificat." },
    ],
    card: "Sector învecinat, drum scurt de verificat în Maps.",
  },
  {
    slug: "sector-5",
    name: "Sector 5",
    origin: "Sector 5, București",
    h1: ["Tatuaje și piercing", "pentru Sector 5."],
    title: "Tatuaje și piercing pentru Sector 5, București | Hasha Tattoo",
    description:
      "Tatuaje și piercing pentru clienții din Sectorul 5, București. Studio privat în Sectorul 4, pe Bulevardul Mărășești nr. 80. Ruta din Google Maps și programare pe WhatsApp.",
    lead: "Sectorul 5 se învecinează cu Sectorul 4, unde se află studioul nostru. Vezi ruta din zona ta în Google Maps și programează-te pe WhatsApp.",
    image: "lucrare-2.webp",
    alt: "Lucrare de tatuaj realizată la Hasha Tattoo, București",
    contextTitle: ["Din Sectorul 5", "până la noi."],
    context: [
      "Studioul este în Sectorul 4, pe Bulevardul Mărășești nr. 80, iar Sectorul 5 se învecinează cu el. Drumul diferă în funcție de cartier și de ora la care pleci, de aceea nu dăm o durată generală.",
      "Ruta de la adresa ta până la studio o vezi în Google Maps cu butoanele de mai jos, cu trafic actual și cu varianta de transport ales de tine.",
    ],
    reasons: [
      { title: "Sector învecinat", text: "Sectorul 5 se învecinează cu Sectorul 4, unde este studioul." },
      { title: "Program clar", text: "Luni până vineri, între 12:00 și 20:00, cu programare pe WhatsApp." },
      { title: "Totul lămurit dinainte", text: "Idee, zonă, estimare și referințe se discută pe WhatsApp, înainte de ședință." },
    ],
    faq: [
      ...commonFaq("Sectorul 5"),
      { q: "Lucrați și cu piercing?", a: "Da. Montăm piercinguri în ureche, buric, nas și alte zone, cu bijuterii alese împreună. Lista de prețuri este pe pagina Prețuri." },
    ],
    card: "Sector învecinat, ruta live în Google Maps.",
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
