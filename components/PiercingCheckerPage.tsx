import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import PiercingChecker from "@/components/PiercingChecker";
import { PIERCING_NUMBER } from "@/lib/site";
import { FaqList, FinalCta, PageHero, num, waLink } from "@/components/PageParts";
import { piercingZones } from "@/lib/piercing-checker";
import { SITE_URL } from "@/lib/site";

const FAQ = [
  { q: "Cât de exact este verificatorul?", a: "Este orientativ. Pornește de la întrebări simple despre anatomia ta și îți arată dacă zona pare potrivită sau merită discutată. Decizia finală o ia piercerul, după ce vede direct zona." },
  { q: "Pot face piercing în orice zonă a urechii?", a: "Nu întotdeauna. Unele piercinguri, cum sunt daith-ul, tragusul sau industrialul, depind mult de forma urechii. Piercerul verifică anatomia și îți recomandă ce se potrivește." },
  { q: "Ce fac dacă răspund „nu știu” la o întrebare?", a: "Nu e o problemă. Piercerul verifică acel punct direct, la consultație. Poți trimite și o fotografie pe WhatsApp, înainte de programare." },
  { q: "Cât costă un piercing?", a: "Lobul costă 80 lei, iar cartilajul, industrialul, buricul, nasul, septumul, buza și sprânceana costă 150 lei. Lista completă este pe pagina Prețuri. Pentru limbă îți spunem prețul pe WhatsApp." },
  { q: "Pot face piercing dacă am alergie la nichel?", a: "Spune-i piercerului înainte. O alergie la metale cere o bijuterie special aleasă. Dacă ai dubii, discută și cu medicul." },
  { q: "Cum mă programez?", a: "Scrie-ne pe WhatsApp la +40 752 259 040 sau sună luni până vineri, între 12:00 și 20:00. Poți trimite o fotografie a zonei, ca să discutăm din timp." },
];

export default function PiercingCheckerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebPage", name: "Verificator de piercing pe anatomie", url: `${SITE_URL}/verificator-piercing`, inLanguage: "ro-RO", isPartOf: { "@type": "WebSite", name: "Hasha Tattoo", url: SITE_URL } },
            { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Verificator piercing", item: `${SITE_URL}/verificator-piercing` },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker="VERIFICATOR PIERCING"
          title={["Ce piercing", "se potrivește anatomiei tale?"]}
          lead="Alege zona, răspunde la câteva întrebări simple despre anatomia ta și vezi dacă zona pare potrivită, cât costă și cât durează vindecarea. Un punct de plecare, nu o decizie finală."
          image="pierce-6.webp"
          alt="Piercinguri în ureche, realizate la Hasha Tattoo"
          corner="INTERACTIV / 1 MIN"
        />
        <section className="lp-sec section-pad">
          <div className="section-kicker reveal">
            <span>{num(1)} / VERIFICATOR</span>
            <span>3 PAȘI</span>
          </div>
          <PiercingChecker />
        </section>

        <section className="lp-sec section-pad">
          <div className="section-kicker reveal">
            <span>{num(2)} / TOATE ZONELE</span>
            <span>PREȚ ȘI VINDECARE</span>
          </div>
          <table className="pm-table reveal">
            <thead>
              <tr>
                <th>ZONA</th>
                <th>PREȚ</th>
                <th>VINDECARE</th>
              </tr>
            </thead>
            <tbody>
              {piercingZones.map((z) => (
                <tr key={z.id}>
                  <td>{z.name}</td>
                  <td>{z.price !== null ? `${z.price} lei` : "La cerere"}</td>
                  <td>{z.heal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="style-link">
            Intervalele sunt generale și pot varia. Detalii în ghidurile <Link href="/ghiduri/piercing-ureche-ghid">piercing în ureche</Link> și{" "}
            <Link href="/ghiduri/cum-ingrijesti-un-piercing-nou">îngrijirea unui piercing nou</Link>.
          </p>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="section-kicker reveal">
            <span>{num(3)} / ÎNTREBĂRI FRECVENTE</span>
            <span>DESPRE VERIFICATOR</span>
          </div>
          <div className="faq-layout">
            <div className="faq-intro reveal">
              <h2>
                Întrebări?
                <br />
                <em>Avem răspunsuri.</em>
              </h2>
              <p>Pentru o evaluare reală, scrie-ne pe WhatsApp, cu o fotografie a zonei.</p>
            </div>
            <FaqList items={FAQ} />
          </div>
        </section>

        <FinalCta
          n={4}
          title={["Hai să vedem", "anatomia ta."]}
          text="Trimite-ne pe WhatsApp zona dorită și, dacă vrei, o fotografie. Un piercer îți răspunde cu recomandări și un interval de programare."
          image="lucrare-8.webp"
          wa={waLink("Bună! Vreau un piercing și aș dori să discutăm ce se potrivește anatomiei mele.", PIERCING_NUMBER)}
        />
      </main>
      <Footer />
    </>
  );
}
