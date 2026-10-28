import { pageMetadata } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import { BUSINESS, type LegalSection } from "@/lib/legal";

const title = "Politica cookies | Hasha Tattoo București";
const description = "Ce cookie-uri și servicii terțe folosește site-ul Hasha Tattoo, în ce scop și cum îți poți modifica oricând preferințele, inclusiv retragerea acordului.";
export const metadata = pageMetadata(title, description, "/politica-cookies");

const TABLE = (
  <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Nume</th>
                  <th>Furnizor</th>
                  <th>Scop</th>
                  <th>Durată</th>
                  <th>Categorie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>hasha_consent_v1 (localStorage)</td>
                  <td>Hasha Tattoo</td>
                  <td>Reține alegerea ta privind cookie-urile</td>
                  <td>12 luni</td>
                  <td>Necesar</td>
                </tr>
                <tr>
                  <td>_ga, _ga_2HE5ZV7L84</td>
                  <td>Google Analytics</td>
                  <td>Statistici despre pagini vizitate și interacțiuni (ex. apăsări pe WhatsApp sau telefon)</td>
                  <td>Până la 24 de luni</td>
                  <td>Analitic (doar cu acord)</td>
                </tr>
                <tr>
                  <td>Cookie-uri Google Maps</td>
                  <td>Google</td>
                  <td>Setate de Google când harta este încărcată, pentru funcționarea și personalizarea hărții</td>
                  <td>Stabilită de Google</td>
                  <td>Funcțional (doar cu acord)</td>
                </tr>
              </tbody>
            </table>
          </div>
);

const sections: LegalSection[] = [
  {
    title: "Ce sunt cookie-urile",
    paragraphs: [
      "Cookie-urile sunt fișiere mici pe care un site le salvează în browserul tău. Le folosim și pentru tehnologii similare, precum stocarea locală a browserului (localStorage).",
    ],
  },
  {
    title: "Categorii folosite",
    items: [
      "Necesare: fac site-ul să funcționeze și rețin alegerea ta privind cookie-urile. Nu necesită acord.",
      "Funcționale: servicii terțe pe care le afișăm la cererea ta, în prezent harta Google din pagina principală. Se activează doar cu acordul tău.",
      "Analitice: Google Analytics, pentru a înțelege cum este folosit site-ul. Cookie-urile se setează doar dacă ești de acord. Fără acord, Google primește doar semnale anonime fără cookie-uri, care nu te identifică.",
      "Marketing: ar măsura eficiența reclamelor. În prezent nu sunt active.",
    ],
    paragraphs: [
      "Dacă vom activa și module de marketing (de exemplu Google Ads), ele vor rula doar după acordul tău, iar această pagină va fi actualizată.",
    ],
  },
  { title: "Ce stocăm acum", paragraphs: [], extra: TABLE },
  {
    title: "Cum îți modifici alegerea",
    paragraphs: [
      "Poți schimba oricând preferințele cu butonul de mai jos. Poți șterge cookie-urile și din setările browserului, dar unele funcții ale site-urilor pot înceta să funcționeze.",
    ],
    extra: (
      <div className="legal-actions">
        <CookiePreferencesButton />
      </div>
    ),
  },
  {
    title: "Mai multe informații",
    paragraphs: [
      `Despre prelucrarea datelor personale găsești detalii în Politica de confidențialitate. Pentru întrebări ne poți scrie la ${BUSINESS.email}.`,
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      kicker="HASHA TATTOO / DOCUMENTE LEGALE"
      title="Politica cookies"
      intro="Folosim cât mai puține cookie-uri. Cele care nu sunt strict necesare se activează doar dacă ești de acord."
      sections={sections}
    />
  );
}
