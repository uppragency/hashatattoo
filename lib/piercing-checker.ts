import { PIERCING_PRICES } from "@/lib/prices";

export type Answer = "da" | "nu" | "nu-stiu";

export type Check = {
  id: string;
  q: string;
  /** răspunsul care arată că anatomia pare potrivită */
  ok: "da" | "nu";
  /** ce spunem dacă răspunsul diferă de cel potrivit */
  why: string;
};

export type PiercingZone = {
  id: string;
  name: string;
  group: "Ureche" | "Nas" | "Buric" | "Față și gură";
  /** preț în lei, după lista studioului; null = nu e pe lista de prețuri */
  price: number | null;
  heal: string;
  /** senzație orientativă, doar unde există o informație sigură */
  feel: string | null;
  checks: Check[];
  lifestyle: { q: string; tip: string };
};

const priceOf = (name: string) => PIERCING_PRICES.find((p) => p.name === name)?.price ?? null;

const common: Check[] = [
  { id: "metal", q: "Ai alergie cunoscută la nichel sau la alte metale?", ok: "nu", why: "O alergie la metale cere o bijuterie special aleasă. Spune-i piercerului înainte." },
  { id: "cheloid", q: "Ai tendința de a face cicatrici ridicate (cheloide) când te rănești?", ok: "nu", why: "Cicatricile ridicate pot apărea și în jurul unui piercing. Discută cu piercerul și, la nevoie, cu medicul." },
];

export const piercingZones: PiercingZone[] = [
  {
    id: "lob",
    name: "Lob ureche",
    group: "Ureche",
    price: priceOf("Lob ureche"),
    heal: "6 până la 8 săptămâni, stabilizare în 2 până la 4 luni",
    feel: "Mică",
    checks: [{ id: "lob-g", q: "Lobul tău este moale și destul de gros, fără umflături sau noduli?", ok: "da", why: "Un lob foarte subțire sau cu noduli cere o evaluare a piercerului înainte." }, ...common],
    lifestyle: { q: "Dormi mai ales pe partea pe care vrei piercingul?", tip: "Dormi pe partea opusă sau folosește o pernă de călătorie cu gaură în mijloc, ca să eviți presiunea." },
  },
  {
    id: "helix",
    name: "Helix (marginea de sus a urechii)",
    group: "Ureche",
    price: priceOf("Cartilaj"),
    heal: "3 până la 6 luni la suprafață, 6 până la 12 luni pentru stabilizare",
    feel: "Medie",
    checks: [{ id: "helix-g", q: "Pe marginea de sus a urechii poți pipăi un cartilaj ferm, nu foarte subțire?", ok: "da", why: "Un cartilaj foarte subțire sau moale poate cere o altă poziție sau o altă zonă." }, ...common],
    lifestyle: { q: "Îți prinzi des părul sau porți pălării, glugi ori căști peste ureche?", tip: "Ferește piercingul de păr, pălării și căști în primele luni, pentru că presiunea îl irită." },
  },
  {
    id: "tragus",
    name: "Tragus",
    group: "Ureche",
    price: priceOf("Cartilaj"),
    heal: "3 până la 6 luni la suprafață, 6 până la 12 luni pentru stabilizare",
    feel: "Medie, cu presiune",
    checks: [{ id: "tragus-g", q: "Tragusul (cartilajul din fața canalului auditiv) este destul de mare cât să încapă o bijuterie fără să apese?", ok: "da", why: "Un tragus mic sau subțire poate face piercingul incomod. Piercerul îl evaluează direct." }, ...common],
    lifestyle: { q: "Porți des căști intra-auriculare?", tip: "Căștile din ureche pot presa piercingul. Folosește căști care nu apasă în primele luni." },
  },
  {
    id: "conch",
    name: "Conch (centrul urechii)",
    group: "Ureche",
    price: priceOf("Cartilaj"),
    heal: "4 până la 8 luni la suprafață, 9 până la 12 luni sau mai mult pentru stabilizare",
    feel: "Medie spre ridicată",
    checks: [{ id: "conch-g", q: "Zona din centrul urechii este destul de lată și relativ plată?", ok: "da", why: "Forma centrului urechii variază mult. Piercerul vede dacă este potrivită pentru o bijuterie." }, ...common],
    lifestyle: { q: "Dormi pe partea piercingului sau porți căști peste ureche?", tip: "Evită presiunea pe ureche în timp ce se vindecă. Pernă cu gaură în mijloc și căști care nu apasă." },
  },
  {
    id: "daith",
    name: "Daith",
    group: "Ureche",
    price: priceOf("Cartilaj"),
    heal: "4 până la 8 luni la suprafață, 9 până la 12 luni sau mai mult pentru stabilizare",
    feel: "Medie spre ridicată",
    checks: [{ id: "daith-g", q: "Pliul interior de cartilaj din fața canalului (daith) se vede clar și pare destul de gros?", ok: "da", why: "Daith-ul depinde mult de anatomie. Dacă pliul este mic sau subțire, piercerul poate recomanda altă zonă." }, ...common],
    lifestyle: { q: "Dormi pe partea piercingului?", tip: "Dormi pe partea opusă sau folosește o pernă cu gaură în mijloc, ca să nu apeși piercingul." },
  },
  {
    id: "industrial",
    name: "Industrial",
    group: "Ureche",
    price: priceOf("Industrial"),
    heal: "4 până la 8 luni la suprafață, 9 până la 12 luni sau mai mult pentru stabilizare",
    feel: "Ridicată",
    checks: [{ id: "ind-g", q: "Marginea de sus a urechii are suficient cartilaj pentru două puncte aliniate, într-o linie simplă?", ok: "da", why: "Industrialul depinde de anatomie: două puncte trebuie să se alinieze. Piercerul verifică urechea înainte." }, ...common],
    lifestyle: { q: "Dormi pe partea piercingului sau porți des căști peste ureche?", tip: "Industrialul are două puncte sensibile. Evită presiunea pe ureche și ferește-l de păr și pălării." },
  },
  {
    id: "nas",
    name: "Nas (nară)",
    group: "Nas",
    price: priceOf("Nas"),
    heal: "4 până la 6 luni, cu îngrijire de două ori pe zi în primele 3 luni",
    feel: null,
    checks: [{ id: "nas-g", q: "Pielea din jurul nărilor este sănătoasă, fără iritații sau acnee în zonă?", ok: "da", why: "Piercingul se montează pe piele sănătoasă. Amână dacă zona este iritată." }, ...common],
    lifestyle: { q: "Te sufli des din cauza alergiilor sau a răcelilor?", tip: "Atenție extra la igienă: nu te șterge agresiv și nu atinge piercingul cu mâinile necurate." },
  },
  {
    id: "septum",
    name: "Septum",
    group: "Nas",
    price: priceOf("Septum"),
    heal: "2 până la 4 luni, uneori mai mult",
    feel: null,
    checks: [
      { id: "sept-d", q: "Ai fost diagnosticat cu sept nazal deviat sau ai probleme de respirație pe nas?", ok: "nu", why: "Un sept deviat poate face piercingul mai greu de poziționat. Piercerul evaluează anatomia." },
      ...common,
    ],
    lifestyle: { q: "Te sufli des din cauza alergiilor sau a răcelilor?", tip: "Evită să răsucești bijuteria fără motiv și spală-te pe mâini înainte să o atingi." },
  },
  {
    id: "buric",
    name: "Buric",
    group: "Buric",
    price: priceOf("Buric"),
    heal: "6 până la 12 luni",
    feel: "Mică, aproximativ 2 din 10",
    checks: [
      { id: "buric-p", q: "Poți ciupi între degete un pliu de piele deasupra buricului?", ok: "da", why: "Piercingul în buric se face prin pliul de piele de deasupra. Fără pliu, poate fi nepotrivit." },
      { id: "buric-d", q: "Buricul tău este adânc, nu proeminent?", ok: "da", why: "Un buric proeminent poate cere altă abordare sau poate să nu fie potrivit. Piercerul decide după ce îl vede." },
      ...common,
    ],
    lifestyle: { q: "Porți des pantaloni cu talie înaltă sau faci sport care presează abdomenul?", tip: "Poartă haine largi, din bumbac, și evită presiunea pe abdomen în primele săptămâni." },
  },
  {
    id: "buza",
    name: "Buză",
    group: "Față și gură",
    price: priceOf("Buză"),
    heal: "2 până la 4 luni, uneori mai mult",
    feel: null,
    checks: [{ id: "buza-g", q: "Ai gingii sensibile sau probleme cu dinții, cum ar fi gingii retrase?", ok: "nu", why: "Bijuteria poate freca gingia și dinții. Discută cu piercerul și, la nevoie, cu stomatologul." }, ...common],
    lifestyle: { q: "Fumezi sau mănânci des alimente foarte condimentate sau fierbinți?", tip: "Evită fumatul câteva zile și alimentele foarte condimentate sau fierbinți în primele zile." },
  },
  {
    id: "spranceana",
    name: "Sprânceană",
    group: "Față și gură",
    price: priceOf("Sprânceană"),
    heal: "2 până la 4 luni, uneori mai mult",
    feel: null,
    checks: [
      { id: "spr-g", q: "Pielea din dreptul sprâncenei se poate ciupi ușor, fără să fie foarte întinsă?", ok: "da", why: "Piercingurile de suprafață depind de piele. Piercerul verifică dacă zona este potrivită." },
      ...common,
    ],
    lifestyle: { q: "Porți ochelari sau te freci des pe frunte și pe sprânceană?", tip: "Frecarea irită piercingul. Atenție la ochelari, la machiaj și la șapcă în primele săptămâni." },
  },
  {
    id: "limba",
    name: "Limbă",
    group: "Față și gură",
    price: null,
    heal: "4 până la 6 săptămâni",
    feel: null,
    checks: [{ id: "limba-g", q: "Ai gingii sensibile sau dinți fragili ori restaurați?", ok: "nu", why: "Bijuteria din gură poate irita gingia și poate deteriora smalțul. Discută cu piercerul și cu stomatologul." }, ...common],
    lifestyle: { q: "Fumezi sau mănânci des alimente foarte condimentate sau fierbinți?", tip: "Evită fumatul cel puțin 3 până la 4 zile, alimentele foarte condimentate sau fierbinți și jocul cu bijuteria cu dinții." },
  },
];

export const zoneById = (id: string) => piercingZones.find((z) => z.id === id)!;

export type Verdict = "potrivit" | "de-confirmat" | "de-discutat";

export function evaluate(zone: PiercingZone, answers: Record<string, Answer>) {
  const mismatches = zone.checks.filter((c) => answers[c.id] && answers[c.id] !== "nu-stiu" && answers[c.id] !== c.ok);
  const unsure = zone.checks.filter((c) => answers[c.id] === "nu-stiu");
  const verdict: Verdict = mismatches.length ? "de-discutat" : unsure.length ? "de-confirmat" : "potrivit";
  return { verdict, mismatches, unsure };
}
