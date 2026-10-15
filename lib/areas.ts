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

type Spec = {
  slug: string;
  name: string;
  origin: string;
  /** "pentru Sector 1", "din Militari" etc. */
  h1b: string;
  img: string;
  where: string;
  ctx: [string, string];
  card: string;
  extraQ: { q: string; a: string };
};

const mk = (x: Spec): Area => ({
  slug: x.slug,
  name: x.name,
  origin: x.origin,
  h1: ["Tatuaje și piercing", x.h1b],
  title: `Tatuaje și piercing pentru ${x.name}, București | Hasha Tattoo`,
  description: `Tatuaje și piercing pentru clienții din ${x.name}, București. Studio privat în Sectorul 4, pe Bulevardul Mărășești nr. 80. Ruta din Google Maps și programare pe WhatsApp.`,
  lead: `${x.where} Vezi ruta din zona ta în Google Maps și programează-te pe WhatsApp.`,
  image: x.img,
  alt: "Lucrare de tatuaj realizată la Hasha Tattoo, București",
  contextTitle: [`Din ${x.name}`, "până la noi."],
  context: [x.ctx[0], x.ctx[1]],
  reasons: [
    { title: "Programare pe WhatsApp", text: "Ne scrii ideea, zona corpului și referințele, iar fixăm ziua și ora. Poți lămuri totul înainte să te deplasezi." },
    { title: "Studio privat", text: "Un spațiu liniștit, cu programare, unde lucrăm fără grabă și fără aglomerație." },
    { title: "Tatuaje și piercing", text: "Același studio pentru tatuaje, cover-up-uri, corectări și piercinguri. Prețurile le găsești pe pagina Prețuri." },
  ],
  faq: [...commonFaq(x.name), x.extraQ],
  card: x.card,
});

const routeQ = (name: string) => ({
  q: "Cum aflu cât durează drumul până la studio?",
  a: `Butoanele din pagină deschid în Google Maps ruta din ${name} până la Bulevardul Mărășești nr. 80, cu traficul actual. Nu dăm un timp fix, pentru că depinde de ora la care pleci și de punctul exact de plecare.`,
});

areas.push(
  mk({
    slug: "sector-1",
    name: "Sector 1",
    origin: "Sector 1, București",
    h1b: "pentru Sector 1.",
    img: "lucrare-3.webp",
    where: "Locuiești sau lucrezi în Sectorul 1? Studioul nostru este în Sectorul 4, pe Bulevardul Mărășești nr. 80.",
    ctx: [
      "Sectorul 1 este una dintre zonele din care vin clienți care vor un studio privat și o lucrare făcută fără grabă. Studioul este în Sectorul 4, pe Bulevardul Mărășești nr. 80, iar drumul diferă mult în funcție de cartierul din Sectorul 1 din care pleci.",
      "De aceea nu dăm un timp general. Butoanele de mai jos deschid ruta live în Google Maps, pentru ora la care vrei să ajungi, cu mașina, transportul public sau mersul pe jos.",
    ],
    card: "Ruta ta live, din orice cartier al sectorului.",
    extraQ: routeQ("Sectorul 1"),
  }),
  mk({
    slug: "sector-2",
    name: "Sector 2",
    origin: "Sector 2, București",
    h1b: "pentru Sector 2.",
    img: "lucrare-4.webp",
    where: "Vii din Sectorul 2? Studioul nostru este în Sectorul 4, pe Bulevardul Mărășești nr. 80.",
    ctx: [
      "Dacă locuiești sau lucrezi în Sectorul 2, ruta până la studio depinde de cartierul din care pornești și de ora la care mergi. Studioul este în Sectorul 4, pe Bulevardul Mărășești nr. 80, într-un spațiu privat, cu programare.",
      "Fixăm ședința din timp, pe WhatsApp, ca să știi exact la ce oră ajungi. Pentru drum, butoanele de mai jos deschid Google Maps de la zona ta până la studio.",
    ],
    card: "Programare din timp, ruta live în Maps.",
    extraQ: routeQ("Sectorul 2"),
  }),
  mk({
    slug: "sector-6",
    name: "Sector 6",
    origin: "Sector 6, București",
    h1b: "pentru Sector 6.",
    img: "lucrare-5.webp",
    where: "Locuiești sau lucrezi în Sectorul 6? Studioul nostru este în Sectorul 4, pe Bulevardul Mărășești nr. 80.",
    ctx: [
      "Din Sectorul 6 vin clienți care caută un artist anume sau un studio privat, iar drumul până în Sectorul 4 depinde de cartier și de ora la care pleci. De aceea îți arătăm ruta live, nu o estimare generală.",
      "Studioul este pe Bulevardul Mărășești nr. 80. Scrie-ne pe WhatsApp, stabilim ziua și ora, iar la ședință ajungi o singură dată, cu ideea, zona și estimarea deja lămurite.",
    ],
    card: "Din Militari, Drumul Taberei sau alt cartier.",
    extraQ: routeQ("Sectorul 6"),
  }),
  mk({
    slug: "militari",
    name: "Militari",
    origin: "Militari, București",
    h1b: "pentru Militari.",
    img: "lucrare-7.webp",
    where: "Militari face parte din Sectorul 6. Dacă vii de acolo, studioul nostru este în Sectorul 4, pe Bulevardul Mărășești nr. 80.",
    ctx: [
      "Militari este un cartier mare din Sectorul 6, iar drumul până la studio diferă în funcție de punctul din care pleci și de ora la care circuli. Nu dăm un timp fix, pentru că traficul îl schimbă mult.",
      "Butoanele de mai jos deschid în Google Maps ruta de la Militari până la Bulevardul Mărășești nr. 80, ca să alegi varianta potrivită la ora programării. Fixăm ședința pe WhatsApp, ca să nu faci drumul degeaba.",
    ],
    card: "Ruta ta de la Militari, verificată pe ora programării.",
    extraQ: routeQ("Militari"),
  }),
  mk({
    slug: "drumul-taberei",
    name: "Drumul Taberei",
    origin: "Drumul Taberei, București",
    h1b: "pentru Drumul Taberei.",
    img: "lucrare-9.webp",
    where: "Drumul Taberei face parte din Sectorul 6. Dacă vii de acolo, studioul nostru este în Sectorul 4, pe Bulevardul Mărășești nr. 80.",
    ctx: [
      "Drumul Taberei este un cartier din Sectorul 6. Drumul până la studio depinde de punctul din care pleci, de mijlocul de transport și de oră, așa că nu dăm o durată generală.",
      "Poți vedea ruta live în Google Maps cu butoanele de mai jos. Înainte să te deplasezi, lămurim pe WhatsApp ideea, zona corpului și intervalul de programare.",
    ],
    card: "Ruta ta din Drumul Taberei, live în Maps.",
    extraQ: routeQ("Drumul Taberei"),
  }),
  mk({
    slug: "titan",
    name: "Titan",
    origin: "Titan, București",
    h1b: "pentru Titan.",
    img: "lucrare-11.webp",
    where: "Titan face parte din Sectorul 3, care se învecinează cu Sectorul 4, unde se află studioul nostru, pe Bulevardul Mărășești nr. 80.",
    ctx: [
      "Titan este un cartier din Sectorul 3, sector care se învecinează cu Sectorul 4. Drumul până la studio depinde de punctul exact din care pleci și de ora la care circuli, deci nu dăm un timp fix.",
      "Cu butoanele de mai jos vezi în Google Maps ruta de la Titan până la studio, cu mașina, transportul public sau pe jos. Programarea o fixăm pe WhatsApp.",
    ],
    card: "Din Sectorul 3, spre Sectorul 4.",
    extraQ: routeQ("Titan"),
  }),
  mk({
    slug: "vitan",
    name: "Vitan",
    origin: "Vitan, București",
    h1b: "pentru Vitan.",
    img: "lucrare-12.webp",
    where: "Vitan face parte din Sectorul 3, care se învecinează cu Sectorul 4, unde se află studioul nostru, pe Bulevardul Mărășești nr. 80.",
    ctx: [
      "Vitan este o zonă din Sectorul 3, sector care se învecinează cu Sectorul 4. Cât durează drumul depinde de punctul din care pleci, de mijlocul de transport și de ora zilei.",
      "Ruta live o vezi în Google Maps, cu butoanele de mai jos. Dacă ai o idee de tatuaj sau de piercing, scrie-ne mai întâi pe WhatsApp: lămurim detaliile și fixăm ziua și ora.",
    ],
    card: "Din Sectorul 3, ruta verificată live.",
    extraQ: routeQ("Vitan"),
  }),
  mk({
    slug: "colentina",
    name: "Colentina",
    origin: "Colentina, București",
    h1b: "pentru Colentina.",
    img: "lucrare-1.webp",
    where: "Colentina face parte din Sectorul 2. Dacă vii de acolo, studioul nostru este în Sectorul 4, pe Bulevardul Mărășești nr. 80.",
    ctx: [
      "Colentina este o zonă din Sectorul 2. Drumul până la studio depinde de punctul din care pleci și de ora la care circuli, de aceea îți arătăm ruta live, nu o estimare generală.",
      "Butoanele de mai jos deschid Google Maps de la Colentina până la Bulevardul Mărășești nr. 80. Programarea o fixăm pe WhatsApp, ca să ajungi la ora potrivită și cu totul lămurit.",
    ],
    card: "Ruta ta de la Colentina, în Google Maps.",
    extraQ: routeQ("Colentina"),
  }),
);

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
