import { pageMetadata } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { BUSINESS, type LegalSection } from "@/lib/legal";

const title = "Politica de confidențialitate | Hasha Tattoo București";
const description = "Cum prelucrează Hasha Tattoo datele tale personale, în ce scopuri, cât timp și ce drepturi ai conform GDPR. Contact pentru exercitarea drepturilor.";
export const metadata = pageMetadata(title, description, "/politica-de-confidentialitate");

const operator = BUSINESS.legalEntity ? `${BUSINESS.legalEntity}, sub numele comercial ${BUSINESS.name}` : BUSINESS.name;

const sections: LegalSection[] = [
  {
    title: "Cine este operatorul datelor",
    paragraphs: [
      `Operatorul datelor tale personale este ${operator}, cu sediul social în ${BUSINESS.registeredOffice}, și punct de lucru în ${BUSINESS.address}. Pentru orice întrebare despre datele tale ne poți scrie la ${BUSINESS.email} sau ne poți suna la ${BUSINESS.phone}.`,
      "Prelucrăm datele în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și cu legislația română aplicabilă.",
    ],
  },
  {
    title: "Ce date prelucrăm și de ce",
    items: [
      "Datele din conversațiile de programare (nume, număr de telefon, mesajele și imaginile de referință pe care ni le trimiți pe WhatsApp, prin telefon sau email). Scop: răspundem solicitării tale și stabilim programarea. Temei: pașii premergători unui contract, la cererea ta (art. 6 alin. 1 lit. b GDPR).",
      "Datele tehnice trimise automat de browserul tău când accesezi site-ul (adresă IP, tip de browser, pagini vizitate, data și ora). Scop: funcționarea, securitatea și stabilitatea site-ului. Temei: interesul nostru legitim (art. 6 alin. 1 lit. f GDPR).",
      "Date statistice despre folosirea site-ului, prin Google Analytics (pagini vizitate, durata vizitei, tipul dispozitivului, țara și orașul aproximativ, apăsările pe butoanele de WhatsApp și telefon). Cookie-urile analitice se setează doar dacă ți-ai dat acordul. Scop: înțelegem cum este folosit site-ul și îl îmbunătățim. Temei: consimțământul tău (art. 6 alin. 1 lit. a GDPR).",
      "Datele colectate prin alte cookie-uri și servicii terțe, doar dacă ți-ai dat acordul, de exemplu harta Google. Scop: cel descris în Politica cookies. Temei: consimțământul tău (art. 6 alin. 1 lit. a GDPR).",
    ],
    paragraphs: [
      "Formularul de estimare salvează serviciul ales, zona corpului și descrierea ideii tale într-o bază de date a studioului (Supabase), pentru a te putea contacta și a gestiona solicitările. Nu cerem nume sau telefon în formular. La fiecare cerere nouă primim o notificare pe email, trimisă prin Resend, care conține aceleași informații din formular. Apoi se deschide WhatsApp cu un mesaj pregătit, pe care îl trimiți tu. Dacă scrii date personale în câmpul de descriere, acestea se salvează la fel.",
    ],
  },
  {
    title: "Cât timp păstrăm datele",
    items: [
      "Conversațiile de programare: cât timp este necesar pentru a răspunde și a derula programarea, apoi cât impun obligațiile legale sau cât este necesar pentru apărarea unui drept al nostru.",
      "Cererile din formularul de estimare: până la 12 luni de la ultima interacțiune, apoi se șterg.",
      "Datele tehnice ale site-ului: pe perioada scurtă de păstrare a jurnalelor de către furnizorul de găzduire.",
      "Alegerea ta privind cookie-urile: 12 luni, apoi îți cerem din nou acordul.",
    ],
  },
  {
    title: "Cui transmitem datele",
    paragraphs: [
      "Nu vindem datele tale. Le pot primi doar furnizorii care ne ajută să oferim serviciile, în calitate de persoane împuternicite sau operatori independenți:",
    ],
    items: [
      "Vercel Inc., furnizorul de găzduire al site-ului.",
      "Supabase Inc., furnizorul bazei de date în care se salvează cererile din formular (regiune UE, Paris).",
      "Resend, Inc., furnizorul serviciului de email prin care trimitem studioului notificarea unei cereri noi din formular (servere în UE).",
      "Google Ireland Limited și Google LLC (Google Analytics), pentru statistici anonimizate despre folosirea site-ului, doar dacă ești de acord cu cookie-urile analitice. Fără acord, Google primește doar semnale fără cookie-uri, care nu te identifică.",
      "Meta Platforms (WhatsApp), când ne scrii pe WhatsApp, conform propriilor termeni și politici.",
      "Google (Google Maps), dacă ești de acord cu afișarea hărții.",
      "Autorități publice, doar dacă legea ne obligă.",
    ],
  },
  {
    title: "Transferuri în afara Spațiului Economic European",
    paragraphs: [
      "Unii dintre furnizorii de mai sus pot prelucra date în afara SEE, în special în Statele Unite. Transferurile se bazează pe mecanismele prevăzute de GDPR, precum decizia de adecvare sau clauzele contractuale standard.",
    ],
  },
  {
    title: "Drepturile tale",
    paragraphs: ["Conform GDPR ai următoarele drepturi:"],
    items: [
      "dreptul de acces la datele tale;",
      "dreptul la rectificarea datelor incorecte;",
      "dreptul la ștergerea datelor („dreptul de a fi uitat”);",
      "dreptul la restricționarea prelucrării;",
      "dreptul la portabilitatea datelor;",
      "dreptul de opoziție, inclusiv pentru prelucrările bazate pe interes legitim;",
      "dreptul de a-ți retrage oricând consimțământul, fără a afecta legalitatea prelucrării de până atunci.",
    ],
  },
  {
    title: "Cum îți exerciți drepturile",
    paragraphs: [
      `Trimite-ne o cerere la ${BUSINESS.email}. Îți răspundem în cel mult 30 de zile. Ne rezervăm dreptul de a-ți cere o dovadă a identității.`,
      "Dacă consideri că ți-am încălcat drepturile, poți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), Bd. General Gheorghe Magheru nr. 28-30, Sector 1, București, dataprotection.ro. Te invităm să ne contactezi mai întâi, ca să încercăm să rezolvăm problema.",
    ],
  },
  {
    title: "Securitate",
    paragraphs: [
      "Folosim măsuri tehnice și organizatorii rezonabile pentru protejarea datelor, inclusiv conexiune criptată (HTTPS) pe site. Nicio transmisie prin internet nu este însă complet lipsită de risc.",
    ],
  },
  {
    title: "Copii",
    paragraphs: [
      "Site-ul nu se adresează copiilor și nu colectăm în mod intenționat date de la persoane sub 16 ani prin intermediul site-ului.",
    ],
  },
  {
    title: "Modificări ale politicii",
    paragraphs: [
      "Putem actualiza această politică. Versiunea în vigoare este cea publicată pe această pagină, cu data ultimei actualizări afișată sus.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="HASHA TATTOO / DOCUMENTE LEGALE"
      title="Politica de confidențialitate"
      intro="Ce date prelucrăm, de ce, cât timp și ce drepturi ai. Pe scurt, folosim doar datele de care avem nevoie ca să-ți răspundem și să ținem site-ul în funcțiune."
      sections={sections}
    />
  );
}
