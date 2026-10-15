import { pageMetadata } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { BUSINESS, type LegalSection } from "@/lib/legal";

const title = "Termeni și condiții | Hasha Tattoo București";
const description = "Termenii și condițiile de utilizare a site-ului Hasha Tattoo, studio de tatuaje și piercing din București, Sector 4.";
export const metadata = pageMetadata(title, description, "/termeni-si-conditii");

const operator = BUSINESS.legalEntity ? `${BUSINESS.legalEntity}, care operează sub numele comercial ${BUSINESS.name}` : BUSINESS.name;

const sections: LegalSection[] = [
  {
    title: "Informații generale",
    paragraphs: [
      `Acest site este operat de ${operator}, cu sediul în ${BUSINESS.address}. Poți să ne contactezi la ${BUSINESS.email} sau la ${BUSINESS.phone}.`,
      "Prin accesarea și folosirea site-ului accepți acești termeni. Dacă nu ești de acord cu ei, te rugăm să nu folosești site-ul.",
    ],
  },
  {
    title: "Scopul site-ului",
    paragraphs: [
      "Site-ul prezintă serviciile de tatuaje și piercing ale studioului, portofoliul de lucrări, programul și datele de contact. Site-ul nu este un magazin online și nu permite plata serviciilor.",
    ],
  },
  {
    title: "Programări și estimări",
    paragraphs: [
      "Programările se stabilesc prin WhatsApp sau telefon. Un mesaj trimis de tine nu reprezintă o programare confirmată. Programarea devine valabilă doar după confirmarea din partea studioului.",
      "Nu publicăm prețuri fixe. Costul final se stabilește după discuția despre idee, dimensiune, zonă și complexitate, iar estimarea primită este orientativă până la stabilirea detaliilor lucrării.",
    ],
  },
  {
    title: "Serviciile din studio",
    paragraphs: [
      "Condițiile concrete ale ședinței, inclusiv eventualele formulare de acord, vârsta minimă, pregătirea dinainte și instrucțiunile de îngrijire de după, se comunică în studio, conform legislației în vigoare.",
      "Informațiile de pe site au caracter general și nu înlocuiesc sfatul unui medic. Dacă ai alergii, afecțiuni ale pielii sau alte probleme de sănătate, spune-le artistului înainte de ședință.",
    ],
  },
  {
    title: "Fotografiile lucrărilor",
    paragraphs: [
      "Fotografiile din portofoliu sunt exemple de lucrări realizate în studio. Rezultatul final al unei lucrări poate diferi în funcție de piele, zonă, design și modul de vindecare.",
    ],
  },
  {
    title: "Proprietate intelectuală",
    paragraphs: [
      "Textele, fotografiile, designul, logo-ul și celelalte elemente ale site-ului aparțin Hasha Tattoo sau sunt folosite cu acordul titularilor și sunt protejate de legislația privind drepturile de autor. Lucrările de tatuaj aparțin artiștilor care le-au creat.",
      "Nu ai voie să copiezi, să distribui sau să refolosești conținutul site-ului în scop comercial fără acordul nostru scris.",
    ],
  },
  {
    title: "Limitarea răspunderii",
    paragraphs: [
      "Depunem eforturi ca informațiile de pe site să fie corecte și actualizate, dar nu garantăm că sunt complete sau lipsite de erori. Programul și datele de contact pot fi modificate, iar varianta valabilă este cea confirmată direct de studio.",
      "Nu răspundem pentru întreruperi temporare ale site-ului sau pentru conținutul și funcționarea site-urilor terțe către care trimit linkurile noastre, precum WhatsApp sau Google Maps.",
    ],
  },
  {
    title: "Date personale și cookies",
    paragraphs: [
      "Modul în care prelucrăm datele tale personale este explicat în Politica de confidențialitate, iar modul în care folosim cookie-urile, în Politica cookies. Ambele fac parte din acești termeni.",
    ],
  },
  {
    title: "Legea aplicabilă și soluționarea litigiilor",
    paragraphs: [
      "Acești termeni sunt guvernați de legea română. Încercăm să rezolvăm orice neînțelegere pe cale amiabilă. Dacă nu se poate, litigiul este soluționat de instanțele române competente.",
      "În calitate de consumator poți apela și la soluționarea alternativă a litigiilor prin ANPC (anpc.ro) sau la platforma europeană de soluționare online a litigiilor (ec.europa.eu/consumers/odr).",
    ],
  },
  {
    title: "Modificări",
    paragraphs: [
      "Putem actualiza acești termeni oricând. Versiunea în vigoare este cea publicată pe această pagină, cu data ultimei actualizări afișată sus.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      kicker="HASHA TATTOO / DOCUMENTE LEGALE"
      title="Termeni și condiții"
      intro="Regulile de folosire a site-ului Hasha Tattoo, scrise pe înțelesul tuturor."
      sections={sections}
    />
  );
}
