/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Landing } from "@/lib/landing";
import { services } from "@/lib/services";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";
import { SITE_URL, SOCIAL_LINKS, contactFor } from "@/lib/site";

const num = (n: number) => String(n).padStart(3, "0");
const strip = (s: string) => s.replace(/^\d+ \/ /, "");

export default function LandingPage({ page: p }: { page: Landing }) {
  const url = `${SITE_URL}/${p.slug}`;
  const c = contactFor(p.slug === "piercing");
  const wa = c.wa(p.waText);
  const name = p.kicker.charAt(0) + p.kicker.slice(1).toLowerCase();

  const related = p.related.map((slug) => {
    const svc = services.find((s) => s.slug === slug);
    if (svc) return { href: `/${svc.slug}`, label: svc.short };
    if (slug === "tatuaje") return { href: "/tatuaje", label: "TOATE TATUAJELE" };
    if (slug === "piercing") return { href: "/piercing", label: "TOATE PIERCINGURILE" };
    return { href: "/preturi-tatuaje", label: "DESPRE PREȚURI" };
  });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${url}#page`,
              url,
              name: p.title,
              description: p.description,
              inLanguage: "ro-RO",
              isPartOf: { "@type": "WebSite", name: "Hasha Tattoo", url: `${SITE_URL}/` },
            },
            {
              "@type": "Service",
              name: `${name} București`,
              description: p.description,
              url,
              areaServed: { "@type": "City", name: "București" },
              provider: {
                "@type": "TattooParlor",
                sameAs: SOCIAL_LINKS,
                name: "Hasha Tattoo",
                url: `${SITE_URL}/`,
                telephone: c.e164,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Bulevardul Mărășești nr. 80",
                  addressLocality: "București",
                  addressRegion: "Sector 4",
                  addressCountry: "RO",
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "12:00",
                    closes: "20:00",
                  },
                ],
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `${name} la Hasha Tattoo`,
                itemListElement: p.styles.map((s) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: s.title, description: s.text },
                })),
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name, item: url },
              ],
            },
          ],
        }}
      />
      <main id="main">
        {/* HERO */}
        <section className="subhero service-hero lp-hero">
          <img src={`/assets/${p.heroImage}`} alt={p.heroAlt} fetchPriority="high" />
          <div className="subhero-overlay" />
          <div className="subhero-content">
            <span className="section-kicker-lite">HASHA TATTOO / {p.kicker}</span>
            <h1>
              {p.h1[0]}
              <br />
              <em>{p.h1[1]}</em>
            </h1>
            <p>{p.lead}</p>
            <div className="lp-hero-ctas">
              <a className="btn btn-light" href={wa} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
                {"PROGRAMEAZĂ-TE PE WHATSAPP "}
                <span>↗︎</span>
              </a>
              <a className="btn btn-outline lp-btn-ghost" href={`#${p.anchors[0].id}`}>
                {p.slug === "tatuaje" ? "VEZI STILURILE " : "VEZI TIPURILE "}
                <span>↓︎</span>
              </a>
            </div>
          </div>
          <span className="subhero-corner">BUCUREȘTI / SECTOR 4</span>
        </section>

        <div className="lp-chips-bar">
          <ul className="lp-chips section-pad" aria-label="Pe scurt">
            {p.chips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <nav className="lp-anchors section-pad" aria-label="Pe această pagină">
          {p.anchors.map((a) => (
            <a key={a.id} href={`#${a.id}`}>
              {a.label}
            </a>
          ))}
        </nav>

        {/* INTRO */}
        <section className="lp-intro section-pad">
          <div className="section-kicker reveal">
            <span>DESPRE {p.kicker}</span>
            <span>STUDIO PRIVAT / SECTOR 4</span>
          </div>
          <div className="lp-intro-grid">
            <div className="reveal">
              <h2>
                {p.intro.title[0]}
                <br />
                <em>{p.intro.title[1]}</em>
              </h2>
              {p.intro.paragraphs.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
            <dl className="lp-facts reveal">
              {p.intro.facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* STILURI / TIPURI */}
        <section className="lp-styles section-pad lp-sec" id={p.anchors[0].id}>
          <div className="section-kicker reveal">
            <span>{num(1)} / {strip(p.stylesHead.kicker)}</span>
            <span>{p.styles.length} DIRECȚII</span>
          </div>
          <div className="lp-head reveal">
            <h2>
              {p.stylesHead.title[0]}
              <br />
              <em>{p.stylesHead.title[1]}</em>
            </h2>
            <p>{p.stylesHead.text}</p>
          </div>
          <div className="lp-style-grid">
            {p.styles.map((s, i) => (
              <article className="lp-style reveal" key={s.title}>
                <div className="lp-style-img">
                  <img src={`/assets/${s.image}`} alt={s.alt} loading="lazy" />
                  <span>{s.label}</span>
                </div>
                <div className="lp-style-body">
                  <small>{String(i + 1).padStart(2, "0")}</small>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {s.href ? (
                    <Link className="text-arrow" href={s.href}>
                      {"VEZI DETALII "}
                      <span>↗︎</span>
                    </Link>
                  ) : (
                    <a className="text-arrow" href={wa} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
                      {"ÎNTREABĂ PE WHATSAPP "}
                      <span>↗︎</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BENEFICII */}
        <section className="values section-pad lp-sec" id="beneficii">
          <div className="section-kicker reveal">
            <span>{num(2)} / DE CE HASHA</span>
            <span>{p.benefits.length} MOTIVE</span>
          </div>
          <div className="values-layout">
            <div className="values-head reveal">
              <h2>
                {p.benefitsTitle[0]}
                <br />
                <em>{p.benefitsTitle[1]}</em>
                <br />
                {p.benefitsTitle[2]}
              </h2>
              <p>{p.benefitsText}</p>
              <a className="btn btn-light lp-side-btn" href={wa} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
                {"SCRIE-NE PE WHATSAPP "}
                <span>↗︎</span>
              </a>
            </div>
            <div className="values-list">
              {p.benefits.map((b, i) => (
                <div className="value-row reveal" key={b.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.text}</p>
                  </div>
                  <b>↗︎</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GHID */}
        <section className="lp-guide section-pad">
          <div className="section-kicker reveal">
            <span>{num(3)} / {strip(p.guide.kicker)}</span>
            <span>GHID PE SCURT</span>
          </div>
          <div className="lp-head reveal">
            <h2>
              {p.guide.title[0]}
              <br />
              <em>{p.guide.title[1]}</em>
            </h2>
            <p>{p.guide.text}</p>
          </div>
          <div className="lp-guide-grid">
            {p.guide.items.map((g, i) => (
              <div className="lp-guide-item reveal" key={g.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCES */}
        <section className="steps section-pad lp-steps lp-sec" id="proces">
          <div className="section-kicker reveal">
            <span>{num(4)} / CUM DECURGE</span>
            <span>DE LA PRIMUL MESAJ LA REZULTAT</span>
          </div>
          <h2 className="steps-title reveal">
            {p.stepsTitle[0]}
            <br />
            {p.stepsTitle[1]} <em>{p.stepsTitle[2]}</em>
          </h2>
          <div className="steps-grid">
            {p.steps.map((s) => (
              <div className="step reveal" key={s.tag}>
                <span>{s.tag}</span>
                <strong>{s.title}</strong>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <a className="btn btn-outline" href={wa} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
            {"ÎNCEPE PE WHATSAPP "}
            <span>↗︎</span>
          </a>
        </section>

        {/* PREGĂTIRE */}
        <section className="lp-prepare section-pad">
          <div className="section-kicker reveal">
            <span>{num(5)} / ÎNAINTE DE ȘEDINȚĂ</span>
            <span>PREGĂTIRE</span>
          </div>
          <div className="lp-split">
            <div className="lp-head reveal">
              <h2>
                {p.prepare.title[0]}
                <br />
                <em>{p.prepare.title[1]}</em>
              </h2>
              <p>{p.prepare.text}</p>
            </div>
            <ol className="lp-checklist reveal">
              {p.prepare.items.map((t, i) => (
                <li key={t}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* VINDECARE */}
        <section className="lp-healing section-pad">
          <div className="section-kicker reveal">
            <span>{num(6)} / {strip(p.healing.kicker)}</span>
            <span>ORIENTATIV</span>
          </div>
          <div className="lp-split">
            <div className="lp-head reveal">
              <h2>
                {p.healing.title[0]}
                <br />
                <em>{p.healing.title[1]}</em>
              </h2>
              <p>{p.healing.text}</p>
              <p className="lp-note">{p.healing.note}</p>
            </div>
            <div className="lp-table reveal">
              {p.healing.rows.map((r) => (
                <div key={r.k}>
                  <strong>{r.k}</strong>
                  <p>{r.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ÎNGRIJIRE */}
        <section className="lp-aftercare section-pad lp-sec" id="ingrijire">
          <div className="section-kicker reveal">
            <span>{num(7)} / DUPĂ ȘEDINȚĂ</span>
            <span>ÎNGRIJIRE</span>
          </div>
          <div className="lp-head reveal">
            <h2>
              {p.aftercare.title[0]}
              <br />
              <em>{p.aftercare.title[1]}</em>
            </h2>
            <p>{p.aftercare.text}</p>
          </div>
          <div className="lp-do-grid">
            <div className="lp-do reveal">
              <span>DE FĂCUT</span>
              <ul>
                {p.aftercare.do.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="lp-do lp-dont reveal">
              <span>DE EVITAT</span>
              <ul>
                {p.aftercare.avoid.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section className="lp-gallery section-pad lp-sec" id="galerie">
          <div className="section-kicker reveal">
            <span>{num(8)} / DIN PORTOFOLIU</span>
            <span>REALIZATE ÎN STUDIO</span>
          </div>
          <div className="lp-head reveal">
            <h2>
              Lucrări
              <br />
              <em>din studio.</em>
            </h2>
            <Link className="text-arrow" href="/#portofoliu">
              {"VEZI TOT PORTOFOLIUL "}
              <span>↗︎</span>
            </Link>
          </div>
          <div className="lp-gallery-grid">
            {p.gallery.map((g) => (
              <figure className="reveal" key={g.image}>
                <img src={`/assets/${g.image}`} alt={g.alt} loading="lazy" />
                <figcaption>{g.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* STUDIO */}
        <section className="studio-banner lp-studio">
          <img src="/assets/studio.webp" loading="lazy" alt="Interiorul salonului Hasha Tattoo din București" />
          <div className="studio-banner-overlay" />
          <div className="studio-banner-content">
            <span className="section-kicker-lite">{num(9)} / STUDIOUL</span>
            <h2>
              UN STUDIO
              <br />
              <em>PRIVAT.</em>
            </h2>
            <p>Ne găsești pe Bulevardul Mărășești nr. 80, Sector 4. Un loc liniștit, organizat pentru confort, igienă și concentrare.</p>
            <Link className="text-arrow" href="/despre-noi">
              {"DESCOPERĂ STUDIOUL "}
              <span>↗︎</span>
            </Link>
          </div>
          <span className="studio-banner-side">HASHA TATTOO / BUCUREȘTI</span>
        </section>

        {/* PREȚ + ESTIMARE */}
        <section className="lp-quote section-pad lp-sec" id="estimare">
          <div className="section-kicker reveal">
            <span>{num(10)} / COSTURI ȘI ESTIMARE</span>
            <span>FĂRĂ SURPRIZE</span>
          </div>
          <div className="lp-split lp-quote-grid">
            <div className="lp-head reveal">
              <h2>
                {p.pricing.title[0]}
                <br />
                <em>{p.pricing.title[1]}</em>
              </h2>
              <p>{p.pricing.text}</p>
              {p.pricing.list ? (
                <div className="price-list lp-price-list">
                  {p.pricing.list.map((r) => (
                    <div key={r.k}>
                      <span>{r.k}</span>
                      <strong>{r.v}</strong>
                    </div>
                  ))}
                </div>
              ) : null}
              <ul className="lp-factors">
                {p.pricing.factors.map((f, i) => (
                  <li key={f}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link className="text-arrow" href="/preturi-tatuaje">
                {"AFLĂ MAI MULTE DESPRE PREȚURI "}
                <span>↗︎</span>
              </Link>
            </div>
            <div className="lp-quote-side">
              <div className="lp-head reveal">
                <h3>
                  {p.quote.title[0]}
                  <br />
                  <em>{p.quote.title[1]}</em>
                </h3>
                <p>{p.quote.text}</p>
              </div>
              <QuoteForm defaultService={p.quote.service} />
            </div>
          </div>
        </section>

        {/* RECENZII */}
        <section className="social-section section-pad">
          <div className="section-kicker reveal">
            <span>{num(11)} / RECENZII</span>
            <span>VOCEA CLIENȚILOR NOȘTRI</span>
          </div>
          <div className="social-inner reveal">
            <h2>
              Experiența
              <br />
              <em>vorbește.</em>
            </h2>
            <div>
              <p>Vrei să afli cum este la Hasha Tattoo? Citește părerile clienților noștri direct pe Google Maps, apoi scrie-ne pe WhatsApp pentru o programare.</p>
              <a href="https://www.google.com/maps?cid=8814312455281840630" target="_blank" rel="noopener noreferrer" className="text-arrow">
                {"CITEȘTE RECENZIILE PE GOOGLE "}
                <span>↗︎</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section section-pad lp-sec" id="intrebari">
          <div className="section-kicker reveal">
            <span>{num(12)} / ÎNTREBĂRI FRECVENTE</span>
            <span>{p.faq.length} RĂSPUNSURI</span>
          </div>
          <div className="faq-layout">
            <div className="faq-intro reveal">
              <h2>
                Întrebări?
                <br />
                <em>Avem răspunsuri.</em>
              </h2>
              <p>Am strâns cele mai frecvente întrebări. Pentru recomandări adaptate lucrării tale, vorbește direct cu artistul.</p>
              <a className="btn btn-outline" href={wa} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
                {"ÎNTREABĂ PE WHATSAPP "}
                <span>↗︎</span>
              </a>
            </div>
            <div className="faq-list reveal">
              {p.faq.map((f) => (
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

        {/* ALTE SERVICII */}
        <section className="service-more section-pad">
          <div className="section-kicker reveal">
            <span>{num(13)} / DESCOPERĂ MAI MULT</span>
            <span>ALTE PAGINI</span>
          </div>
          <div className="service-more-links reveal">
            {related.map((r) => (
              <Link className="text-arrow" href={r.href} key={r.href}>
                {r.label} <span>↗︎</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="final-cta lp-sec" id="contact">
          <div className="final-cta-art">
            <img src={`/assets/${p.slug === "tatuaje" ? "lucrare-8" : "pierce-8"}.webp`} alt="" loading="lazy" />
          </div>
          <div className="final-cta-shade" />
          <div className="final-inner">
            <span className="section-kicker-lite">{num(14)} / PROGRAMARE</span>
            <h2>
              {p.cta[0]}
              <br />
              <em>{p.cta[1]}</em>
            </h2>
            <p>Scrie-ne pe WhatsApp, iar un artist îți răspunde cu recomandări și un interval de programare. Program: luni până vineri, 12:00 până la 20:00.</p>
            <a className="btn btn-light" href={wa} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
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
