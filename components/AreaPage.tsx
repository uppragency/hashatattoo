import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import { FaqList, FinalCta, PageHero, num, waLink } from "@/components/PageParts";
import { areas, mapsRoute, STUDIO_ADDRESS, type Area } from "@/lib/areas";
import { SITE_URL } from "@/lib/site";

export function parlor() {
  return {
    "@type": "TattooParlor",
    name: "Hasha Tattoo",
    url: `${SITE_URL}/`,
    telephone: "+40766422219",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bulevardul Mărășești nr. 80",
      addressLocality: "București",
      addressRegion: "Sector 4",
      addressCountry: "RO",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "12:00", closes: "20:00" },
    ],
  };
}

export default function AreaPage({ area: a }: { area: Area }) {
  const url = `${SITE_URL}/zone/${a.slug}`;
  const idx = areas.findIndex((x) => x.slug === a.slug);
  /* urmatoarele zone in ordine circulara: fiecare zona primeste linkuri interne de la alte 4 pagini */
  const others = Array.from({ length: areas.length - 1 }, (_, i) => areas[(idx + 1 + i) % areas.length]);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            { ...parlor(), areaServed: { "@type": "Place", name: `${a.name}, București` } },
            {
              "@type": "FAQPage",
              mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Zone și cartiere", item: `${SITE_URL}/zone` },
                { "@type": "ListItem", position: 3, name: a.name, item: url },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero kicker={`ZONE / ${a.name.toUpperCase()}`} title={a.h1} lead={a.lead} image={a.image} alt={a.alt} corner="BUCUREȘTI / SECTOR 4" />

        <section className="about-statement section-pad">
          <div className="section-kicker reveal">
            <span>001 / ZONA TA</span>
            <span>{a.name.toUpperCase()}</span>
          </div>
          <div className="about-statement-grid">
            <h2 className="reveal">
              {a.contextTitle[0]}
              <br />
              <em>{a.contextTitle[1]}</em>
            </h2>
            <div className="reveal">
              {a.context.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="lp-sec section-pad lp-route">
          <div className="section-kicker reveal">
            <span>002 / RUTA</span>
            <span>GOOGLE MAPS</span>
          </div>
          <div className="lp-route-box reveal">
            <div>
              <h2>
                Cum ajungi,
                <br />
                <em>de la tine.</em>
              </h2>
              <p>
                Destinație: {STUDIO_ADDRESS}. Ruta se deschide în Google Maps, cu traficul și programul transportului de la ora la care cauți.
              </p>
            </div>
            <div className="lp-route-actions">
              <a className="btn btn-light" href={mapsRoute(a.origin, "transit")} target="_blank" rel="noopener noreferrer">
                {"METROU ȘI TRANSPORT PUBLIC "}
                <span>↗︎</span>
              </a>
              <a className="btn btn-outline" href={mapsRoute(a.origin, "driving")} target="_blank" rel="noopener noreferrer">
                {"CU MAȘINA "}
                <span>↗︎</span>
              </a>
              <a className="btn btn-outline" href={mapsRoute(a.origin, "walking")} target="_blank" rel="noopener noreferrer">
                {"PE JOS "}
                <span>↗︎</span>
              </a>
            </div>
          </div>
        </section>

        <section className="values section-pad about-values area-values">
          <div className="section-kicker reveal">
            <span>003 / DE CE LA NOI</span>
            <span>FĂRĂ SCURTĂTURI</span>
          </div>
          <div className="values-layout">
            <div className="values-head reveal">
              <h2>
                Ce găsești
                <br />
                <em>la studio.</em>
              </h2>
              <p>Un studio privat din Sectorul 4, cu programare și fără grabă.</p>
            </div>
            <div className="values-list">
              {a.reasons.map((r, i) => (
                <div className="value-row reveal" key={r.title}>
                  <span>{num(i + 1).slice(1)}</span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                  <b>↗︎</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="section-kicker reveal">
            <span>004 / ÎNTREBĂRI FRECVENTE</span>
            <span>{a.name.toUpperCase()}</span>
          </div>
          <div className="faq-layout">
            <div className="faq-intro reveal">
              <h2>
                Întrebări?
                <br />
                <em>Avem răspunsuri.</em>
              </h2>
              <p>Pentru detalii despre lucrarea ta, scrie-ne pe WhatsApp.</p>
            </div>
            <FaqList items={a.faq} />
          </div>
        </section>

        <section className="service-more section-pad">
          <div className="section-kicker reveal">
            <span>005 / DESCOPERĂ MAI MULT</span>
            <span>ALTE ZONE ȘI SERVICII</span>
          </div>
          <div className="service-more-links reveal">
            <Link className="text-arrow" href="/zone">
              TOATE ZONELE <span>↗︎</span>
            </Link>
            {others.slice(0, 4).map((o) => (
              <Link className="text-arrow" href={`/zone/${o.slug}`} key={o.slug}>
                {o.name.toUpperCase()} <span>↗︎</span>
              </Link>
            ))}
            <Link className="text-arrow" href="/tatuaje">
              TATUAJE <span>↗︎</span>
            </Link>
            <Link className="text-arrow" href="/piercing">
              PIERCING <span>↗︎</span>
            </Link>
            <Link className="text-arrow" href="/preturi">
              PREȚURI <span>↗︎</span>
            </Link>
          </div>
        </section>

        <FinalCta
          n={6}
          title={["Hai să discutăm", "despre ideea ta."]}
          text="Scrie-ne pe WhatsApp, iar un artist îți răspunde cu recomandări și un interval de programare."
          image="lucrare-8.webp"
          wa={waLink(`Bună! Vin din ${a.name} și aș dori o programare la Hasha Tattoo.`)}
        />
      </main>
      <Footer />
    </>
  );
}
