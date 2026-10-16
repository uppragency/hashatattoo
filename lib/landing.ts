import { PIERCING_PRICES, TATTOO_PRICE_FACTORS, lei } from "./prices";

export type LandingFaq = { q: string; a: string };

export type Landing = {
  slug: "tatuaje" | "piercing";
  kicker: string;
  /** [linia 1, linia 2 (italic)] */
  h1: [string, string];
  title: string;
  description: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  chips: string[];
  anchors: { id: string; label: string }[];
  intro: {
    title: [string, string];
    paragraphs: string[];
    facts: { k: string; v: string }[];
  };
  stylesHead: { kicker: string; title: [string, string]; text: string };
  styles: { title: string; text: string; image: string; alt: string; label: string; tags: string[]; href?: string }[];
  benefitsTitle: [string, string, string];
  benefitsText: string;
  benefits: { title: string; text: string }[];
  stepsTitle: [string, string, string];
  steps: { tag: string; title: string; text: string }[];
  guide: {
    kicker: string;
    title: [string, string];
    text: string;
    items: { title: string; text: string }[];
  };
  prepare: { title: [string, string]; text: string; items: string[] };
  healing: { kicker: string; title: [string, string]; text: string; rows: { k: string; v: string }[]; note: string };
  aftercare: { title: [string, string]; text: string; do: string[]; avoid: string[] };
  gallery: { image: string; alt: string; label: string }[];
  pricing: { title: [string, string]; text: string; factors: string[]; list?: { k: string; v: string }[] };
  faq: LandingFaq[];
  related: string[];
  quote: { service: string; title: [string, string]; text: string };
  cta: [string, string];
  waText: string;
};

export const landings: Landing[] = [
  {
    slug: "tatuaje",
    kicker: "TATUAJE",
    h1: ["Tatuaje în București,", "făcute cu răbdare."],
    title: "Tatuaje București, studio privat în Sector 4 | Hasha Tattoo",
    description:
      "Salon de tatuaje în București, Sector 4. Realism, black and grey, portrete, mâneci și backpiece. Ace sterile, tușuri vegane, consultanță înainte de ședință. Programează-te pe WhatsApp.",
    lead: "Realism, black and grey, portrete și lucrări ample, create după ideea ta într-un studio privat din Sector 4. Discutăm designul, zona și dimensiunea înainte de prima linie, iar tu aprobi tot ce urmează să ajungă pe piele.",
    heroImage: "lucrare-5.webp",
    heroAlt: "Tatuaj black and grey amplu pe spate, realizat la Hasha Tattoo",
    chips: ["Studio privat", "Ace de unică folosință", "Tușuri vegane", "Consultanță înainte de ședință"],
    anchors: [
      { id: "stiluri", label: "STILURI" },
      { id: "beneficii", label: "BENEFICII" },
      { id: "proces", label: "PROCES" },
      { id: "ingrijire", label: "ÎNGRIJIRE" },
      { id: "galerie", label: "GALERIE" },
      { id: "intrebari", label: "ÎNTREBĂRI" },
      { id: "contact", label: "PROGRAMARE" },
    ],
    intro: {
      title: ["Un tatuaj bun", "începe cu o discuție."],
      paragraphs: [
        "Hasha Tattoo este un studio de tatuaje și piercing situat pe Bulevardul Mărășești, în Sectorul 4 al Bucureștiului. Lucrăm într-un spațiu privat, organizat pentru confort și concentrare, cu un singur scop: ca tatuajul tău să arate bine în ziua în care îl faci și peste ani.",
        "Fiecare lucrare pornește de la ideea ta. Ne trimiți referințe, o schiță sau doar câteva cuvinte, iar artistul îți spune sincer ce funcționează pe zona aleasă, ce dimensiune este potrivită și ce detalii merită păstrate. Nu începem lucrarea până când designul, poziționarea și mărimea nu sunt aprobate de tine.",
        "Lucrăm cu ace de unică folosință, instrumente sterilizate și tușuri vegane de la producători cunoscuți. Nu ne grăbim și nu comprimăm ședințele, pentru că un tatuaj bun cere timp. Pentru lucrările ample, precum mânecile sau backpiece-urile, planificăm etapele împreună, ca să știi la fiecare pas ce urmează.",
      ],
      facts: [
        { k: "LOCAȚIE", v: "Bulevardul Mărășești nr. 80, Sector 4, București" },
        { k: "PROGRAM", v: "Luni până vineri, 12:00 până la 20:00" },
        { k: "PROGRAMARE", v: "WhatsApp sau telefon, +40 766 422 219" },
        { k: "STUDIO", v: "Spațiu privat, lucrăm fără grabă" },
      ],
    },
    stylesHead: {
      kicker: "001 / STILURI ȘI LUCRĂRI",
      title: ["Ce tatuaje", "facem."],
      text: "Lucrările din portofoliu acoperă mai multe stiluri. Dacă ideea ta nu se potrivește exact într-o categorie, o discutăm și găsim împreună direcția potrivită.",
    },
    styles: [
      {
        title: "Realism",
        text: "Portrete, obiecte și scene care redau cât mai fidel un subiect, prin gradații fine de lumini și umbre. Cere referințe clare și proporții exacte, de aceea stabilim designul înainte de ședință.",
        image: "lucrare-3.webp",
        alt: "Tatuaj realist pe piept, realizat la Hasha Tattoo",
        label: "REALISM / PIEPT",
        tags: ["Portret", "Scene", "Detalii fine"],
        href: "/tatuaje-realism-bucuresti",
      },
      {
        title: "Black and grey",
        text: "Lucrări realizate doar din negru și degradeuri de gri, cu contrast și profunzime. Potrivit atât pentru compoziții medii, cât și pentru lucrări ample pe spate sau pe picior.",
        image: "lucrare-5.webp",
        alt: "Tatuaj black and grey pe spate, realizat la Hasha Tattoo",
        label: "BLACK AND GREY / BACKPIECE",
        tags: ["Contrast", "Umbre", "Lucrări ample"],
        href: "/tatuaje-black-and-grey-bucuresti",
      },
      {
        title: "Portrete",
        text: "Portrete de oameni, personaje sau figuri care contează pentru tine. Pornim de la o fotografie bună, o adaptăm zonei și proporțiilor corpului și o aprobi înainte de prima ședință.",
        image: "lucrare-11.webp",
        alt: "Tatuaj portret realist pe braț, realizat la Hasha Tattoo",
        label: "PORTRET / REALISM",
        tags: ["Fotografie de referință", "Braț", "Alb și negru"],
        href: "/tatuaje-realism-bucuresti",
      },
      {
        title: "Mâneci și backpiece",
        text: "Lucrări ample care acoperă brațul, piciorul sau spatele. Le planificăm pe etape, cu un design coerent de la un cap la altul, astfel încât fiecare ședință să se lege de precedenta.",
        image: "lucrare-10.webp",
        alt: "Tatuaj full sleeve realist pe braț, realizat la Hasha Tattoo",
        label: "SLEEVE / BACKPIECE",
        tags: ["Mai multe ședințe", "Compoziție unitară", "Mitologie"],
      },
      {
        title: "Ornamental",
        text: "Elemente decorative, modele și compoziții care urmăresc forma corpului. Pot fi singure sau combinate cu un portret realist, într-un tatuaj care curge natural pe zona aleasă.",
        image: "lucrare-7.webp",
        alt: "Tatuaj ornamental pe braț, realizat la Hasha Tattoo",
        label: "ORNAMENTAL / SLEEVE",
        tags: ["Modele", "Compoziții", "Combinații de stiluri"],
      },
      {
        title: "Detalii color",
        text: "Dacă îți dorești culoare, discutăm paleta, locul în care funcționează cel mai bine și ce se poate obține pe tonul tău de piele. Culoarea se poate îmbina cu black and grey.",
        image: "lucrare-2.webp",
        alt: "Tatuaj cu detalii color pe braț, realizat la Hasha Tattoo",
        label: "COLOR / SLEEVE",
        tags: ["Paletă personalizată", "Accente de culoare"],
      },
    ],
    benefitsTitle: ["De ce să alegi", "Hasha", "Tattoo."],
    benefitsText: "Un tatuaj rămâne cu tine mult timp. De aceea punem accent pe lucrurile care contează înainte, în timpul și după ședință.",
    benefits: [
      { title: "Siguranță", text: "Ace de unică folosință, instrumente sterilizate și respectarea normelor sanitare, la fiecare lucrare." },
      { title: "Tușuri vegane", text: "Folosim tușuri vegane de la producători cunoscuți în industrie. Reacțiile individuale pot apărea, de aceea ne spui din timp dacă ai alergii sau afecțiuni ale pielii." },
      { title: "Studio privat", text: "Un spațiu liniștit, fără aglomerație, în care poți sta relaxat și poți discuta liber cu artistul." },
      { title: "Consiliere sinceră", text: "Artistul îți spune ce funcționează pe zona aleasă, ce dimensiune este potrivită și ce merită simplificat. Nu promitem ce nu se poate face bine." },
      { title: "Design aprobat de tine", text: "Nu începem lucrarea până când nu ești mulțumit de design, dimensiune și poziționare." },
      { title: "Fără grabă", text: "Lucrăm în ritmul pe care îl cere stilul ales. Pentru lucrările ample stabilim etapele împreună, ca să știi ce urmează." },
      { title: "Îngrijire explicată", text: "Primești instrucțiuni clare pentru perioada de vindecare, iar dacă ai dubii ne poți scrie oricând pe WhatsApp." },
      { title: "Ușor de ajuns", text: "Ne găsești într-o zonă centrală, pe Bulevardul Mărășești nr. 80, în Sectorul 4 din București." },
    ],
    stepsTitle: ["Pașii până", "la", "tatuajul tău."],
    steps: [
      { tag: "01 / PRIMUL CONTACT", title: "Ne scrii.", text: "Scrie-ne pe WhatsApp. Trimite ideea, zona corpului și, dacă ai, imagini de referință sau o schiță." },
      { tag: "02 / DISCUȚIA", title: "Clarificăm ideea.", text: "Artistul îți spune ce se poate face bine, ce dimensiune se potrivește și dacă lucrarea cere una sau mai multe ședințe." },
      { tag: "03 / DESIGNUL", title: "Stabilim designul.", text: "Ajustăm împreună designul, poziționarea și mărimea. Începem doar când ești mulțumit." },
      { tag: "04 / PROGRAMAREA", title: "Alegem data.", text: "Stabilim un interval liber și îți spunem ce trebuie să ai în vedere înainte de ședință." },
      { tag: "05 / ȘEDINȚA", title: "Vii la studio.", text: "Lucrăm cu materiale sterile, fără grabă, iar tu aprobi poziția înainte de prima linie." },
      { tag: "06 / DUPĂ ȘEDINȚĂ", title: "Te îndrumăm.", text: "Primești instrucțiuni de îngrijire, iar în timpul vindecării ne poți scrie oricând dacă ai întrebări." },
    ],
    guide: {
      kicker: "003 / ÎNAINTE SĂ DECIZI",
      title: ["Cum alegi", "designul și zona."],
      text: "Un tatuaj reușit depinde de felul în care se potrivesc ideea, dimensiunea și locul de pe corp. Iată ce urmărim împreună la consultație.",
      items: [
        { title: "Zona corpului", text: "Fiecare zonă se comportă diferit. Brațul, spatele sau piciorul oferă suprafață mare pentru lucrări detaliate, în timp ce zonele mici sau cu multă mișcare cer simplificarea designului." },
        { title: "Dimensiunea", text: "Detaliile fine au nevoie de spațiu ca să rămână lizibile. Dacă un design este prea mic pentru ce îți dorești, îți spunem și propunem o variantă mai potrivită." },
        { title: "Referințele", text: "O imagine clară și o idee bine descrisă scurtează mult drumul până la design. Poți trimite mai multe imagini, chiar dacă nu seamănă între ele." },
        { title: "Stilul", text: "Realism, black and grey, ornamental sau color. Dacă ești indecis, artistul îți recomandă ce se potrivește ideii și zonei alese." },
        { title: "Un tatuaj mai vechi", text: "Ai deja un tatuaj pe care vrei să îl schimbi sau să îl completezi? Trimite o fotografie, iar artistul îți spune ce variante există." },
        { title: "Numărul de ședințe", text: "Lucrările mici pot fi gata într-o singură ședință. Cele ample se împart pe etape, iar numărul lor se stabilește după ce vedem designul." },
      ],
    },
    prepare: {
      title: ["Cum te pregătești", "pentru ședință."],
      text: "Câteva lucruri simple fac ședința mai confortabilă și ajută pielea să se vindece mai bine.",
      items: [
        "Dormi suficient și vino odihnit. Oboseala face ședința mai greu de suportat.",
        "Mănâncă ceva înainte și ia cu tine apă. Ședințele pot dura câteva ore.",
        "Evită alcoolul în ziua dinainte și în ziua ședinței.",
        "Poartă haine largi, comode, care lasă zona tatuajului ușor de accesat.",
        "Nu expune zona la soare și nu o irita în zilele dinainte, ca pielea să fie în stare bună.",
        "Spune-ne dacă ai alergii, afecțiuni ale pielii sau urmezi un tratament, înainte să stabilim data.",
      ],
    },
    healing: {
      kicker: "004 / VINDECAREA",
      title: ["Ce se întâmplă", "după tatuaj."],
      text: "Vindecarea diferă de la o persoană la alta și în funcție de zonă, dar etapele sunt asemănătoare.",
      rows: [
        { k: "PRIMELE 7 ZILE", v: "Prima fază de vindecare. Zona poate fi roșie, sensibilă și ușor umflată. Respectă strict indicațiile primite de la artist pentru bandaj și spălare." },
        { k: "PÂNĂ LA 3 SAU 6 SĂPTĂMÂNI", v: "Pielea se descuamă și poate mânca. Nu scărpina și nu dezlipi crustele, pentru că pot lua pigmentul odată cu ele. Vindecarea completă durează de obicei între 3 și 6 săptămâni." },
        { k: "DUPĂ VINDECAREA DE SUPRAFAȚĂ", v: "Culoarea poate părea mai pală o perioadă. Pielea se așază treptat, iar aspectul final se vede după ce se termină vindecarea." },
        { k: "PE TERMEN LUNG", v: "Protecția împotriva soarelui ajută la păstrarea contrastului. Orice tatuaj se schimbă ușor în timp." },
      ],
      note: "Perioadele exacte depind de zonă, de lucrare și de pielea fiecăruia. Artistul îți dă instrucțiunile potrivite la finalul ședinței.",
    },
    aftercare: {
      title: ["Îngrijirea", "tatuajului nou."],
      text: "Tipul de bandaj și durata îngrijirii diferă în funcție de lucrare. Urmează indicațiile scrise primite de la artist. Regulile de mai jos sunt cele valabile în general.",
      do: [
        "Păstrează bandajul câteva ore, conform indicațiilor artistului.",
        "Spală delicat cu apă călduță și săpun antibacterian, doar când ți se recomandă.",
        "Aplică un strat subțire de cremă pentru tatuaje, după indicațiile primite.",
        "Poartă haine largi și curate peste zonă.",
        "Hidratează pielea după ce s-a vindecat la suprafață, conform recomandărilor primite.",
        "Scrie-ne pe WhatsApp dacă ai dubii în timpul vindecării.",
      ],
      avoid: [
        "Piscina, marea, băile prelungite și saunele în perioada de vindecare.",
        "Soarele direct și solarul.",
        "Scărpinatul și dezlipirea crustelor.",
        "Hainele care freacă zona și efortul care irită pielea.",
        "Produsele neindicate de artist, inclusiv cele cu parfum.",
      ],
    },
    gallery: [
      { image: "lucrare-3.webp", alt: "Tatuaj realist pe piept, realizat la Hasha Tattoo", label: "REALISM / PIEPT" },
      { image: "lucrare-4.webp", alt: "Tatuaj black and grey pe braț, realizat la Hasha Tattoo", label: "BLACK AND GREY / SLEEVE" },
      { image: "lucrare-8.webp", alt: "Tatuaj amplu pe spate cu motiv mitologic, realizat la Hasha Tattoo", label: "MITOLOGIE / BACKPIECE" },
      { image: "lucrare-12.webp", alt: "Tatuaj portret realist pe braț, realizat la Hasha Tattoo", label: "PORTRET / BLACK AND GREY" },
      { image: "lucrare-6.webp", alt: "Tatuaj artistic realist pe spate, realizat la Hasha Tattoo", label: "BACKPIECE / REALISM" },
      { image: "lucrare-9.webp", alt: "Tatuaj artistic pe picior, realizat la Hasha Tattoo", label: "LEG SLEEVE" },
      { image: "lucrare-21.webp", alt: "Sleeve black and grey cu ochi, caracatiță și portret, realizat la Hasha Tattoo", label: "SLEEVE / BLACK AND GREY" },
      { image: "lucrare-30.webp", alt: "Tatuaj realist cu elefant pe coapsă, realizat la Hasha Tattoo", label: "REALISM / COAPSĂ" },
      { image: "lucrare-39.webp", alt: "Tatuaj fine line cu floare roșie și text pe coloană, realizat la Hasha Tattoo", label: "FINE LINE / SPATE" },
      { image: "lucrare-25.webp", alt: "Tatuaj color cu motociclete pe antebraț, realizat la Hasha Tattoo", label: "COLOR / ANTEBRAȚ" },
      { image: "lucrare-37.webp", alt: "Tatuaj cu motive animale în compoziție grafică, cu accente roșii, realizat la Hasha Tattoo", label: "GRAFIC / GAMBĂ" },
      { image: "lucrare-34.webp", alt: "Tatuaj color pe antebraț cu un personaj în costum, realizat la Hasha Tattoo", label: "COLOR / ANTEBRAȚ" },
    ],
    pricing: {
      title: ["Cât costă", "un tatuaj."],
      text: "Prețurile pentru tatuaje se calculează după timpul de lucru. Nu avem tarife fixe, pentru că fiecare lucrare e diferită. După ce discutăm ideea, îți oferim o estimare clară, înainte să te angajezi la ceva. Pentru tatuaje mici și simple poți suna sau scrie direct pe WhatsApp.",
      factors: TATTOO_PRICE_FACTORS,
    },
    faq: [
      { q: "Cum se face un tatuaj?", a: "Un aparat electric introduce cerneala în piele cu ajutorul unor ace sterile. Pielea se vindecă apoi în jurul pigmentului, iar desenul rămâne vizibil." },
      { q: "Doare tatuajul?", a: "Senzația diferă de la o persoană la alta și în funcție de zonă. Majoritatea clienților o consideră suportabilă. Dacă ești relaxat și odihnit, ședința poate decurge mai ușor." },
      { q: "Unde doare cel mai tare?", a: "Zonele sensibile ale corpului pot fi mai dureroase, dar fiecare persoană simte diferit. Artistul îți recomandă amplasarea potrivită designului, iar alegerea finală îți aparține." },
      { q: "Cât durează o ședință?", a: "Depinde de dimensiune, stil și nivelul de detaliu. O lucrare mică poate fi gata într-o ședință scurtă, iar una amplă se împarte pe mai multe. Îți spunem estimarea după ce vedem designul." },
      { q: "Pot veni cu propriul design sau cu referințe?", a: "Da. Ne poți trimite imagini, schițe sau idei. Artistul le adaptează zonei și proporțiilor corpului tău, iar tu aprobi varianta finală înainte de ședință." },
      { q: "Pot modifica designul după ce l-am văzut?", a: "Da. Ajustăm împreună designul până când arată cum îți dorești. Nu începem lucrarea până nu ești mulțumit." },
      { q: "Cum mă programez?", a: "Cel mai simplu este pe WhatsApp, la +40 766 422 219. Ne spui ideea, zona și, dacă ai, imagini de referință. Poți suna și luni până vineri, între 12:00 și 20:00." },
      { q: "Cât costă un tatuaj?", a: "Tatuajele se calculează după timpul de lucru. Prețul depinde de complexitate, dimensiune, zonă, culoare sau monocrom, detaliile designului și experiența artistului. Îți oferim o estimare după ce discutăm ideea ta. Pentru tatuaje mici și simple poți suna sau scrie pe WhatsApp." },
      { q: "Sunt tușurile sigure pentru piele?", a: "Folosim tușuri vegane, de la producători cunoscuți. Totuși, reacțiile individuale pot apărea. Dacă ai alergii sau afecțiuni ale pielii, spune-ne înainte de ședință." },
      { q: "Cum îngrijesc un tatuaj nou?", a: "Tipul de bandaj și perioada de îngrijire diferă în funcție de lucrare. Urmează indicațiile scrise primite de la artist: păstrează pielea curată, spală delicat când ți se recomandă și folosește doar produsele indicate. Dacă ai dubii în timpul vindecării, scrie-ne pe WhatsApp și te îndrumăm." },
      { q: "Ce trebuie să evit după ședință?", a: "Evită piscina, marea, băile prelungite, soarele direct, scărpinatul, hainele care freacă zona și efortul care irită pielea. Respectă perioada de vindecare recomandată de artist." },
      { q: "Pot face un tatuaj dacă am alergii sau afecțiuni ale pielii?", a: "Spune-ne înainte de programare. Discutăm situația ta și îți spunem ce trebuie să iei în considerare. Pentru probleme medicale, consultă și medicul tău." },
      { q: "Pot să îmi completez sau să îmi schimb un tatuaj mai vechi?", a: "Trimite-ne o fotografie clară a tatuajului și ideea ta. Artistul îți spune ce variante există și ce rezultat este realist." },
    ],
    related: ["tatuaje-realism-bucuresti", "tatuaje-black-and-grey-bucuresti", "cover-up-tatuaje-bucuresti", "corectare-tatuaje-bucuresti", "piercing", "preturi"],
    quote: {
      service: "tatuaj",
      title: ["Ai o idee?", "Hai să o discutăm."],
      text: "Completează câteva rânduri și îți deschidem WhatsApp cu mesajul pregătit. Un artist îți răspunde cu recomandări și un interval de programare.",
    },
    cta: ["Hai să discutăm", "despre tatuajul tău."],
    waText: "Bună! Aș dori să discutăm despre un tatuaj.",
  },
  {
    slug: "piercing",
    kicker: "PIERCING",
    h1: ["Piercing în București,", "montat cu grijă."],
    title: "Piercing București, studio privat în Sector 4 | Hasha Tattoo",
    description:
      "Studio de piercing în București, Sector 4. Piercing în ureche, buric, industrial, limbă și suprafață. Montare cu instrumente sterile, bijuterii alese împreună, îngrijire explicată. Programează-te pe WhatsApp.",
    lead: "De la un piercing simplu în ureche până la industrial, buric sau compoziții cu mai multe bijuterii. Alegem împreună locul, bijuteria și poziția potrivite anatomiei tale, iar montarea se face cu instrumente sterile, într-un studio privat din Sector 4.",
    heroImage: "pierce-6.webp",
    heroAlt: "Piercinguri și bijuterii pentru ureche, realizate la Hasha Tattoo",
    chips: ["Studio privat", "Instrumente sterile", "Bijuterie aleasă împreună", "Instrucțiuni clare de îngrijire"],
    anchors: [
      { id: "tipuri", label: "TIPURI" },
      { id: "beneficii", label: "BENEFICII" },
      { id: "proces", label: "PROCES" },
      { id: "ingrijire", label: "ÎNGRIJIRE" },
      { id: "galerie", label: "GALERIE" },
      { id: "intrebari", label: "ÎNTREBĂRI" },
      { id: "contact", label: "PROGRAMARE" },
    ],
    intro: {
      title: ["Un piercing bun", "se alege și se montează."],
      paragraphs: [
        "Hasha Tattoo este un studio de tatuaje și piercing situat pe Bulevardul Mărășești, în Sectorul 4 din București. Piercingurile se fac într-un spațiu privat, liniștit, fără grabă, cu instrumente sterile și cu respectarea normelor sanitare.",
        "Fiecare anatomie este diferită. Un piercing arată bine și se vindecă mai ușor când locul și bijuteria sunt alese potrivit formei urechii, a buricului sau a zonei dorite. De aceea, înainte de montare, discutăm despre stilul tău, alegem împreună bijuteria și stabilim poziția exactă.",
        "La final primești instrucțiuni clare de îngrijire, pentru că rezultatul depinde cel puțin la fel de mult de perioada de vindecare ca de momentul montării. Dacă ai întrebări în zilele și săptămânile următoare, ne poți scrie oricând pe WhatsApp.",
      ],
      facts: [
        { k: "LOCAȚIE", v: "Bulevardul Mărășești nr. 80, Sector 4, București" },
        { k: "PROGRAM", v: "Luni până vineri, 12:00 până la 20:00" },
        { k: "PROGRAMARE", v: "WhatsApp sau telefon, +40 766 422 219" },
        { k: "STUDIO", v: "Spațiu privat, montare fără grabă" },
      ],
    },
    stylesHead: {
      kicker: "001 / TIPURI DE PIERCING",
      title: ["Ce piercinguri", "facem."],
      text: "Iată zonele pe care le regăsești în portofoliul nostru. Dacă ai în minte altceva, scrie-ne și îți spunem dacă și cum se poate face potrivit anatomiei tale.",
    },
    styles: [
      {
        title: "Piercing în ureche",
        text: "De la piercinguri simple până la compoziții cu mai multe bijuterii. Alegem împreună locul potrivit formei urechii și stilului tău, de la lob la zonele de cartilaj.",
        image: "pierce-6.webp",
        alt: "Piercinguri și bijuterii în ureche, realizate la Hasha Tattoo",
        label: "URECHE / COMPOZIȚIE",
        tags: ["Lob", "Helix", "Anti-helix", "Compoziții"],
        href: "/piercing-ureche-bucuresti",
      },
      {
        title: "Piercing industrial",
        text: "O bijuterie care leagă două puncte din cartilajul urechii. Cere poziționare atentă și o anatomie potrivită, de aceea o discutăm înainte de montare.",
        image: "pierce-3.webp",
        alt: "Piercing industrial în ureche, realizat la Hasha Tattoo",
        label: "INDUSTRIAL / URECHE",
        tags: ["Cartilaj", "Bijuterie lungă", "Poziționare atentă"],
        href: "/piercing-ureche-bucuresti",
      },
      {
        title: "Piercing în buric",
        text: "Un piercing clasic, care arată bine când poziția și bijuteria se potrivesc anatomiei tale. Stabilim locul exact și alegem împreună bijuteria.",
        image: "pierce-2.webp",
        alt: "Piercing în buric cu bijuterie argintie, realizat la Hasha Tattoo",
        label: "BURIC / PIERCING",
        tags: ["Poziție potrivită", "Bijuterie la alegere"],
        href: "/piercing-buric-bucuresti",
      },
      {
        title: "Piercing în limbă",
        text: "Un piercing care cere atenție la poziționare și la bijuterie. Artistul îți explică ce implică și cum arată perioada de vindecare.",
        image: "pierce-1.webp",
        alt: "Piercing în limbă cu bijuterie metalică, realizat la Hasha Tattoo",
        label: "LIMBĂ / PIERCING",
        tags: ["Consultație", "Îngrijire specifică"],
      },
      {
        title: "Piercing de suprafață",
        text: "Piercinguri montate la suprafața pielii, pe zone precum torace. Anatomia decide dacă și cum se poate face, deci începem cu o discuție.",
        image: "pierce-5.webp",
        alt: "Piercinguri de suprafață în zona toracelui, realizate la Hasha Tattoo",
        label: "SUPRAFAȚĂ / TORACE",
        tags: ["Evaluare anatomică", "Poziționare"],
      },
      {
        title: "Altă idee?",
        text: "Spune-ne ce ai în minte, ce zonă te interesează și ce stil îți place. Îți răspundem sincer dacă piercingul se poate face bine și ce alternative există.",
        image: "pierce-7.webp",
        alt: "Piercing industrial în ureche, realizat la Hasha Tattoo",
        label: "CONSULTAȚIE",
        tags: ["Nas", "Septum", "Sprânceană", "Buză"],
      },
    ],
    benefitsTitle: ["De ce să alegi", "Hasha", "Tattoo."],
    benefitsText: "La un piercing, montarea este doar începutul. Contează la fel de mult alegerea potrivită și îngrijirea de după.",
    benefits: [
      { title: "Montare sterilă", text: "Lucrăm cu instrumente sterile și respectăm normele sanitare, într-un spațiu amenajat pentru asta." },
      { title: "Studio privat", text: "Un loc liniștit, fără aglomerație, în care te poți relaxa și poți întreba orice înainte de montare." },
      { title: "Loc ales după anatomie", text: "Artistul se uită la forma urechii sau a zonei și îți recomandă ce se potrivește anatomiei și stilului tău." },
      { title: "Bijuterie aleasă împreună", text: "Îți arătăm variantele disponibile, iar tu o alegi pe cea care ți se potrivește. Dacă ai alergie la nichel, ne spui înainte." },
      { title: "Explicații sincere", text: "Îți spunem la ce să te aștepți: cum se simte, cât durează vindecarea și ce poate merge prost, ca să decizi informat." },
      { title: "Îngrijire pe înțelesul tuturor", text: "Primești instrucțiuni clare la finalul ședinței. Nu trebuie să te bazezi pe sfaturi aflate de pe internet." },
      { title: "Suport după montare", text: "Dacă piercingul se umflă, te doare sau ai dubii, ne scrii pe WhatsApp și te îndrumăm." },
      { title: "Ușor de ajuns", text: "Ne găsești pe Bulevardul Mărășești nr. 80, într-o zonă centrală din București, Sector 4." },
    ],
    stepsTitle: ["Pașii până", "la", "piercingul tău."],
    steps: [
      { tag: "01 / PRIMUL CONTACT", title: "Ne scrii.", text: "Scrie-ne pe WhatsApp ce zonă te interesează și, dacă ai, trimite o imagine cu stilul dorit." },
      { tag: "02 / DISCUȚIA", title: "Alegem locul.", text: "Artistul se uită la anatomia ta și îți recomandă poziția potrivită, apoi stabilim programarea." },
      { tag: "03 / BIJUTERIA", title: "Alegem bijuteria.", text: "Îți prezentăm variantele disponibile. Dacă ai alergii, ne spui înainte să alegem." },
      { tag: "04 / MONTAREA", title: "Montăm piercingul.", text: "Lucrăm cu instrumente sterile, fără grabă. Aprobi poziția înainte de montare." },
      { tag: "05 / INSTRUCȚIUNI", title: "Primești îngrijirea.", text: "Îți explicăm cum cureți piercingul, ce să eviți și la ce să fii atent în primele săptămâni." },
      { tag: "06 / DUPĂ MONTARE", title: "Rămânem în legătură.", text: "Dacă apar întrebări în timpul vindecării, ne poți scrie oricând pe WhatsApp." },
    ],
    guide: {
      kicker: "003 / BIJUTERIA",
      title: ["Cum alegi", "bijuteria potrivită."],
      text: "Bijuteria influențează atât felul în care arată piercingul, cât și felul în care se vindecă. Iată ce urmărim împreună.",
      items: [
        { title: "Alergia la nichel", text: "Alergiile la bijuterii sunt de cele mai multe ori legate de conținutul de nichel. Dacă știi că ai o astfel de reacție, spune-ne înainte de alegere." },
        { title: "Forma potrivită zonei", text: "Un lob, un cartilaj și un buric cer forme diferite de bijuterie. O alegere potrivită anatomiei reduce disconfortul și iritațiile." },
        { title: "Dimensiunea", text: "Un piercing nou se poate umfla în primele zile, iar bijuteria trebuie să lase loc pentru asta. Artistul alege dimensiunea potrivită zonei." },
        { title: "Stilul tău", text: "Simplu sau încărcat, discret sau vizibil. Îți arătăm variantele disponibile și te ajutăm să alegi ce se potrivește cu restul bijuteriilor tale." },
        { title: "Schimbarea bijuteriei", text: "Nu schimba bijuteria singur în perioada de vindecare. Dacă vrei o altă variantă, scrie-ne și îți spunem când este momentul potrivit." },
        { title: "Compoziții", text: "Vrei mai multe piercinguri în aceeași ureche? Le planificăm împreună, ca să arate echilibrat și să se poată vindeca fără să se încurce." },
      ],
    },
    prepare: {
      title: ["Cum te pregătești", "pentru montare."],
      text: "Pregătirea pentru un piercing este simplă, dar câteva lucruri fac diferența.",
      items: [
        "Mănâncă ceva înainte să vii și fii odihnit.",
        "Evită alcoolul în ziua dinainte și în ziua montării.",
        "Vino cu pielea curată, în zona în care urmează să fie piercingul.",
        "Poartă haine care nu apasă zona piercingului, mai ales dacă e vorba de buric.",
        "Spune-ne dacă ai alergii, în special la nichel, sau afecțiuni ale pielii.",
        "Dacă ai întrebări, scrie-ne înainte. Preferăm să le lămurim înainte de montare.",
      ],
    },
    healing: {
      kicker: "004 / VINDECAREA",
      title: ["Cât durează", "vindecarea."],
      text: "Perioadele de mai jos sunt orientative. Fiecare persoană se vindecă în ritmul ei, iar zona contează mult.",
      rows: [
        { k: "LOB", v: "De regulă 6 până la 8 săptămâni." },
        { k: "HELIX ȘI ANTI-HELIX", v: "Cartilajul se vindecă lent și în straturi, de obicei 3 până la 6 luni sau mai mult." },
        { k: "INDUSTRIAL", v: "Pot fi necesare luni bune, adesea 6 până la 12 luni, până la o vindecare completă." },
        { k: "BURIC", v: "De regulă 6 până la 12 luni." },
        { k: "LIMBĂ", v: "Vindecarea durează de obicei între 4 și 6 săptămâni. Clătește cu apă sărată caldă și evită fumatul cel puțin 3 până la 4 zile." },
        { k: "NAS", v: "Curăță piercingul de două ori pe zi în primele 3 luni." },
        { k: "SUPRAFAȚĂ", v: "Poate dura câteva luni, în funcție de zonă și de cât este solicitată." },
      ],
      note: "Aceste intervale nu sunt garanții. Artistul îți spune la ce să te aștepți pentru piercingul tău și când poți schimba bijuteria.",
    },
    aftercare: {
      title: ["Îngrijirea", "piercingului nou."],
      text: "Primești instrucțiuni clare la finalul ședinței. Până atunci, iată principiile care contează cel mai mult.",
      do: [
        "Spală-te pe mâini înainte să atingi piercingul.",
        "Curăță cu apă călduță și un săpun cu pH neutru sau cu o soluție dedicată de îngrijire, apoi clătește.",
        "Folosește spray izotonic cu apă sărată dacă zona se umflă sau se inflamează.",
        "Lasă piercingul în pace între curățări. Curățarea prea deasă poate crea probleme.",
        "Poartă haine largi în zona piercingului, mai ales cât este nou.",
      ],
      avoid: [
        "Atingerea piercingului cu mâinile murdare.",
        "Rotirea sau mișcarea inutilă a bijuteriei.",
        "Piscina, marea și apele stătătoare în perioada de vindecare.",
        "Hainele strâmte, curelele și orice care apasă sau freacă zona.",
        "Schimbarea bijuteriei înainte să fie vindecat piercingul.",
      ],
    },
    gallery: [
      { image: "pierce-6.webp", alt: "Compoziție de piercinguri în ureche, realizată la Hasha Tattoo", label: "URECHE / COMPOZIȚIE" },
      { image: "pierce-3.webp", alt: "Piercing industrial în ureche, realizat la Hasha Tattoo", label: "INDUSTRIAL" },
      { image: "pierce-2.webp", alt: "Piercing în buric cu bijuterie argintie, realizat la Hasha Tattoo", label: "BURIC" },
      { image: "pierce-8.webp", alt: "Piercinguri multiple în ureche, realizate la Hasha Tattoo", label: "URECHE / PIERCING" },
      { image: "pierce-4.webp", alt: "Piercing în buric cu bijuterie simplă, realizat la Hasha Tattoo", label: "BURIC / PIERCING" },
      { image: "pierce-5.webp", alt: "Piercinguri de suprafață în zona toracelui, realizate la Hasha Tattoo", label: "SUPRAFAȚĂ" },
    ],
    pricing: {
      title: ["Cât costă", "un piercing."],
      text: "La piercing avem prețuri afișate, în lei. Lista de mai jos cuprinde zonele cele mai frecvente, iar lista completă este pe pagina Prețuri. Dacă ai dubii sau vrei mai multe piercinguri într-o singură programare, scrie-ne pe WhatsApp.",
      factors: ["Zona piercingului", "Bijuteria aleasă", "Numărul de piercinguri", "Manopera, la schimbare sau verificare"],
      list: PIERCING_PRICES.slice(0, 8).map((r) => ({ k: r.name, v: lei(r.price) })),
    },
    faq: [
      { q: "Ce piercinguri se pot face în ureche?", a: "De la piercinguri simple până la industrial și compoziții cu mai multe bijuterii. Alegem împreună locul potrivit anatomiei tale." },
      { q: "Doare piercingul?", a: "Senzația diferă de la o persoană la alta și în funcție de zona aleasă. Artistul îți explică la ce să te aștepți înainte de montare." },
      { q: "Doare atunci când îți pui piercing în buric?", a: "Pentru piercingul în buric, durerea este de obicei evaluată ca mică, în jur de 2 pe o scară de la 1 la 10. Fiecare persoană simte diferit." },
      { q: "Se poate infecta piercingul meu?", a: "Da, infecția poate apărea prin contactul cu bacterii din mediu. Mai puțin de 5% dintre infecții apar în studiouri profesionale, iar majoritatea apar în timpul vindecării. De aceea contează să respecți îngrijirea." },
      { q: "Ce pot face dacă piercingul meu se umflă?", a: "Continuă să îl cureți regulat și folosește spray izotonic cu apă sărată pentru a reduce inflamația. Dacă umflătura persistă sau se agravează, scrie-ne pe WhatsApp." },
      { q: "Ce se întâmplă dacă am alergii?", a: "Alergiile la bijuterii sunt de obicei legate de conținutul de nichel. Spune-ne înainte de alegerea bijuteriei, ca să ținem cont de asta." },
      { q: "Ce pot face dacă mă doare piercingul sub haine?", a: "Poartă haine mai largi, mai ales în primele săptămâni, când piercingul este nou și sensibil." },
      { q: "Cât de des ar trebui să îmi curăț piercingul?", a: "Un piercing nou trebuie lăsat în pace și curățat doar atunci când este nevoie. Curățarea excesivă poate crea probleme, deci urmează instrucțiunile primite la ședință." },
      { q: "Cum îmi curăț piercingul?", a: "Spală-te pe mâini, apoi curăță zona cu apă călduță și un săpun cu pH neutru sau o soluție dedicată de îngrijire, după care clătește. Nu este nevoie să scoți bijuteria." },
      { q: "Cum îmi îngrijesc piercingul anti-helix?", a: "Cartilajul se vindecă lent și în straturi, așa că ai nevoie de răbdare. Urmează instrucțiunile artistului și nu forța bijuteria." },
      { q: "Pot să schimb singur bijuteria?", a: "Nu în perioada de vindecare. Scrie-ne și îți spunem când este momentul potrivit pentru schimbare." },
      { q: "Cum mă programez?", a: "Cel mai simplu este pe WhatsApp, la +40 766 422 219. Ne spui ce zonă te interesează și, dacă ai, trimiți o imagine cu stilul dorit. Poți suna și luni până vineri, între 12:00 și 20:00." },
      { q: "Cât costă un piercing?", a: "Lobul urechii costă 80 lei. Cartilaj, industrial, buric, nas, septum, buză, sprânceană și smiley costă câte 150 lei. Piercingul intim costă 200 lei, iar dermalul 250 lei, cu bijuteria inclusă la ambele. Manopera (schimbare, remontare, verificare, curățare) costă 30 lei. Lista completă este pe pagina Prețuri." },
    ],
    related: ["piercing-ureche-bucuresti", "piercing-buric-bucuresti", "tatuaje", "preturi"],
    quote: {
      service: "piercing",
      title: ["Știi ce vrei?", "Sau încă te gândești?"],
      text: "Spune-ne zona și stilul care îți plac. Îți deschidem WhatsApp cu mesajul pregătit, iar un artist îți răspunde cu recomandări și un interval de programare.",
    },
    cta: ["Hai să discutăm", "despre piercingul tău."],
    waText: "Bună! Aș dori să discutăm despre un piercing.",
  },
];

export const landingBySlug = (slug: string) => landings.find((l) => l.slug === slug);
