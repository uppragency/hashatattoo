/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import { FaqList, FinalCta, waLink } from "@/components/PageParts";
import { PIERCING_EXTRAS, PIERCING_PRICES, TATTOO_PRICE_FACTORS, lei } from "@/lib/prices";
import { SITE_URL } from "@/lib/site";

const FAQ = [
  {
    q: "Cum se calculează prețul unui tatuaj?",
    a: "Prețurile Hasha Tattoo pentru tatuaje sunt calculate după timpul de lucru. Contează complexitatea, dimensiunea, zona corpului, dacă lucrarea este color sau monocromă, detaliile designului și experiența artistului.",
  },
  {
    q: "Pot afla prețul unui tatuaj fără să vin la studio?",
    a: "Pentru tatuaje mici și simple poți suna sau scrie pe WhatsApp, la +40 766 422 219. Pentru lucrările mai mari sau mai detaliate, estimarea o primești după ce discutăm ideea, dimensiunea și zona.",
  },
  {
    q: "Cât costă un piercing?",
    a: "Lobul urechii costă 80 lei. Cartilaj, industrial, buric, nas, septum, buză, sprânceană și smiley costă câte 150 lei. Piercingul intim costă 200 lei, iar dermalul 250 lei, cu bijuteria inclusă la ambele.",
  },
  {
    q: "Ce înseamnă manopera de 30 lei?",
    a: "Este costul pentru schimbarea bijuteriei, remontare, verificare sau curățare. Schimbarea unui piercing intim costă 60 lei.",
  },
  {
    q: "Cum cer o estimare?",
    a: "Completează formularul de pe această pagină sau scrie-ne pe WhatsApp. Trimite ideea, zona corpului și, dacă ai, imagini de referință, iar un artist îți răspunde cu recomandări și un interval de programare.",
  },
];

export default function PricingMain() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Prețuri", item: `${SITE_URL}/preturi` },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Prețuri piercing Hasha Tattoo",
              itemListElement: PIERCING_PRICES.map((r) => ({
                "@type": "Offer",
                priceCurrency: "RON",
                price: r.price,
                itemOffered: { "@type": "Service", name: `Piercing ${r.name.toLowerCase()}` },
              })),
            },
          ],
        }}
      />
      <main id="main">
        <section className="subhero pricing-hero">
          <img src="/assets/lucrare-4.webp" alt="Tatuaj detaliat, realizat la Hasha Tattoo" />
          <div className="subhero-overlay" />
          <div className="subhero-content">
            <span className="section-kicker-lite">{"HASHA TATTOO / COSTURI & PROGRAMĂRI"}</span>
            <h1>
              PREȚURI,
              <br />
              <em>FĂRĂ SURPRIZE.</em>
            </h1>
            <p>Piercingurile au prețuri afișate. Tatuajele se calculează după timpul de lucru, iar estimarea o primești după ce discutăm ideea ta.</p>
          </div>
          <span className="subhero-corner">CONTACTEAZĂ-NE PENTRU O ESTIMARE</span>
        </section>

        <section className="price-section section-pad">
          <div className="section-kicker reveal">
            <span>001 / TATUAJE</span>
            <span>PREȚ DUPĂ TIMPUL DE LUCRU</span>
          </div>
          <div className="price-layout">
            <div className="reveal">
              <h2>
                Ce influențează
                <br />
                <em>prețul final?</em>
              </h2>
              <p>
                Prețurile pentru tatuaje sunt calculate după timpul de lucru. Nu avem tarife fixe, pentru că două lucrări nu seamănă niciodată. După ce discutăm ideea, primești o estimare clară. Pentru tatuaje mici și simple poți suna sau scrie direct pe WhatsApp.
              </p>
              <div className="price-points">
                {TATTOO_PRICE_FACTORS.map((f, i) => (
                  <span key={f}>
                    {String(i + 1).padStart(2, "0")} / {f.toUpperCase()}
                  </span>
                ))}
              </div>
              <p className="price-call">
                <a className="text-arrow" href="tel:+40766422219" data-cta="call">
                  {"SUNĂ LA +40 766 422 219 "}
                  <span>↗</span>
                </a>
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="lp-prices section-pad" id="piercing">
          <div className="section-kicker reveal">
            <span>002 / PIERCING</span>
            <span>PREȚURI ÎN LEI</span>
          </div>
          <div className="lp-split">
            <div className="lp-head reveal">
              <h2>
                Prețuri
                <br />
                <em>piercing.</em>
              </h2>
              <p>Prețurile de mai jos sunt cele afișate de studio. Dacă vrei mai multe piercinguri într-o singură programare sau ai dubii legate de zonă, scrie-ne pe WhatsApp.</p>
              <Link className="text-arrow" href="/piercing">
                {"TOT DESPRE PIERCING "}
                <span>↗</span>
              </Link>
            </div>
            <div className="reveal">
              <div className="price-list">
                {PIERCING_PRICES.map((r) => (
                  <div key={r.name}>
                    <span>
                      {r.name}
                      {r.note ? <small>{r.note}</small> : null}
                    </span>
                    <strong>{lei(r.price)}</strong>
                  </div>
                ))}
              </div>
              <h3 className="price-sub">Alte servicii</h3>
              <div className="price-list">
                {PIERCING_EXTRAS.map((r) => (
                  <div key={r.name}>
                    <span>
                      {r.name}
                      {r.note ? <small>{r.note}</small> : null}
                    </span>
                    <strong>{lei(r.price)}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lp-guide section-pad">
          <div className="section-kicker reveal">
            <span>003 / ÎNGRIJIRE</span>
            <span>PE SCURT</span>
          </div>
          <div className="lp-head reveal">
            <h2>
              Îngrijirea
              <br />
              <em>contează.</em>
            </h2>
            <p>Un preț corect înseamnă puțin dacă lucrarea nu se vindecă bine. Iată regulile de bază. Instrucțiunile complete le primești la finalul ședinței.</p>
          </div>
          <div className="lp-guide-grid">
            <div className="lp-guide-item reveal">
              <span>01</span>
              <h3>Tatuaje</h3>
              <p>Păstrează bandajul câteva ore, apoi spală delicat cu apă călduță și săpun antibacterian și aplică un strat subțire de cremă pentru tatuaje. Prima fază de vindecare durează 7 zile, iar vindecarea completă între 3 și 6 săptămâni.</p>
            </div>
            <div className="lp-guide-item reveal">
              <span>02</span>
              <h3>Piercing în limbă</h3>
              <p>Se vindecă în 4 până la 6 săptămâni. Clătește cu apă sărată caldă și evită fumatul cel puțin 3 până la 4 zile.</p>
            </div>
            <div className="lp-guide-item reveal">
              <span>03</span>
              <h3>Piercing în nas</h3>
              <p>Curăță piercingul de două ori pe zi în primele 3 luni. Nu atinge zona cu mâinile murdare și nu schimba bijuteria singur.</p>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="intrebari">
          <div className="section-kicker reveal">
            <span>004 / ÎNTREBĂRI DESPRE PREȚURI</span>
            <span>{FAQ.length} RĂSPUNSURI</span>
          </div>
          <div className="faq-layout">
            <div className="faq-intro reveal">
              <h2>
                Întrebări?
                <br />
                <em>Avem răspunsuri.</em>
              </h2>
              <p>Alte întrebări frecvente le găsești pe pagina dedicată.</p>
              <Link className="btn btn-outline" href="/intrebari-frecvente">
                {"TOATE ÎNTREBĂRILE "}
                <span>↗</span>
              </Link>
            </div>
            <FaqList items={FAQ} />
          </div>
        </section>

        <FinalCta
          n={5}
          title={["Hai să discutăm", "despre lucrarea ta."]}
          text="Scrie-ne pe WhatsApp, iar un artist îți răspunde cu recomandări, o estimare și un interval de programare."
          image="lucrare-8.webp"
          wa={waLink("Bună! Aș dori o estimare de preț la Hasha Tattoo.")}
        />
      </main>
    </>
  );
}
