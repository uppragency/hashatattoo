/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/site";

const WA = "https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20o%20programare%20la%20Hasha%20Tattoo.";

export default function ServicePage({ service: s }: { service: Service }) {
  const url = `${SITE_URL}/${s.slug}`;
  const others = services.filter((x) => x.slug !== s.slug);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: s.kicker.charAt(0) + s.kicker.slice(1).toLowerCase() + " București",
              description: s.description,
              url,
              areaServed: { "@type": "City", name: "București" },
              provider: {
                "@type": "TattooParlor",
                sameAs: SOCIAL_LINKS,
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
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: s.kicker.charAt(0) + s.kicker.slice(1).toLowerCase(), item: url },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <section className="subhero service-hero">
          <img src={`/assets/${s.heroImage}`} alt={s.heroAlt} fetchPriority="high" />
          <div className="subhero-overlay" />
          <div className="subhero-content">
            <span className="section-kicker-lite">HASHA TATTOO / {s.kicker}</span>
            <h1>
              {s.h1[0]}
              <br />
              <em>{s.h1[1]}</em>
            </h1>
            <p>{s.lead}</p>
          </div>
          <span className="subhero-corner">BUCUREȘTI / SECTOR 4</span>
        </section>

        <section className="about-statement section-pad">
          <div className="section-kicker reveal">
            <span>001 / DESPRE SERVICIU</span>
            <span>{s.kicker}</span>
          </div>
          <div className="about-statement-grid">
            <h2 className="reveal">
              {s.statementTitle[0]}
              <br />
              <em>{s.statementTitle[1]}</em>
            </h2>
            <p className="reveal">{s.statement}</p>
          </div>
        </section>

        <section className="about-gallery section-pad">
          <div className="about-picture tall">
            <img src={`/assets/${s.gallery[0].image}`} alt={s.gallery[0].alt} loading="lazy" />
            <span>{s.gallery[0].label}</span>
          </div>
          <div className="about-picture short">
            <img src={`/assets/${s.gallery[1].image}`} alt={s.gallery[1].alt} loading="lazy" />
            <span>{s.gallery[1].label}</span>
          </div>
        </section>

        <section className="values section-pad about-values">
          <div className="section-kicker reveal">
            <span>002 / MODUL NOSTRU DE LUCRU</span>
            <span>FĂRĂ SCURTĂTURI</span>
          </div>
          <div className="values-layout">
            <div className="values-head reveal">
              <h2>
                {s.principlesTitle[0]}
                <br />
                <em>{s.principlesTitle[1]}</em>
                <br />
                {s.principlesTitle[2]}
              </h2>
              <p>În centrul fiecărei ședințe rămân confortul, alegerea informată și rezultatul final.</p>
            </div>
            <div className="values-list">
              {s.principles.map((p, i) => (
                <div className="value-row reveal" key={p.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                  <b>↗︎</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="section-kicker reveal">
            <span>003 / ÎNTREBĂRI FRECVENTE</span>
            <span>BINE DE ȘTIUT</span>
          </div>
          <div className="faq-layout">
            <div className="faq-intro reveal">
              <h2>
                Întrebări?
                <br />
                <em>Avem răspunsuri.</em>
              </h2>
              <p>Pentru recomandări adaptate lucrării tale, vorbește direct cu artistul.</p>
            </div>
            <div className="faq-list reveal">
              {s.faq.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <span>+</span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="service-more section-pad">
          <div className="section-kicker reveal">
            <span>004 / ALTE SERVICII</span>
            <span>DESCOPERĂ MAI MULT</span>
          </div>
          <div className="service-more-links reveal">
            <Link className="text-arrow" href={s.slug.startsWith("piercing") ? "/piercing" : "/tatuaje"}>
              {s.slug.startsWith("piercing") ? "TOATE PIERCINGURILE" : "TOATE TATUAJELE"} <span>↗︎</span>
            </Link>
            {others.map((o) => (
              <Link className="text-arrow" href={`/${o.slug}`} key={o.slug}>
                {o.short} <span>↗︎</span>
              </Link>
            ))}
            <Link className="text-arrow" href="/preturi-tatuaje">
              DESPRE PREȚURI <span>↗︎</span>
            </Link>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="final-cta-art">
            <img src="/assets/lucrare-8.webp" alt="Detaliu dintr-un tatuaj realizat la Hasha Tattoo" loading="lazy" />
          </div>
          <div className="final-cta-shade" />
          <div className="final-inner">
            <span className="section-kicker-lite">005 / PROGRAMARE</span>
            <h2>
              {s.cta[0]}
              <br />
              <em>{s.cta[1]}</em>
            </h2>
            <p>Scrie-ne pe WhatsApp, iar un artist îți răspunde cu recomandări și un interval de programare.</p>
            <a className="btn btn-light" href={WA} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
              {"PROGRAMEAZĂ-TE PE WHATSAPP "}
              <span>↗︎</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
