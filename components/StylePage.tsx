import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import Lightbox from "@/components/Lightbox";
import StyleGallery from "@/components/StyleGallery";
import { FaqList, FinalCta, PageHero, num, waLink } from "@/components/PageParts";
import { parlor } from "@/components/AreaPage";
import { indicesFor, stylePages, type StylePageDef } from "@/lib/styles";
import { SITE_URL } from "@/lib/site";

export default function StylePage({ page: p }: { page: StylePageDef }) {
  const url = `${SITE_URL}/stiluri/${p.slug}`;
  const count = indicesFor(p.tag).length;
  const others = stylePages.filter((x) => x.slug !== p.slug);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Service", name: p.kicker.charAt(0) + p.kicker.slice(1).toLowerCase() + " București", description: p.description, url, areaServed: { "@type": "City", name: "București" }, provider: parlor() },
            { "@type": "FAQPage", mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Stiluri", item: `${SITE_URL}/stiluri` },
                { "@type": "ListItem", position: 3, name: p.kicker.charAt(0) + p.kicker.slice(1).toLowerCase(), item: url },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero kicker={`STILURI / ${p.kicker}`} title={p.h1} lead={p.lead} image={p.image} alt={p.alt} corner={`${count} LUCRĂRI`} />

        <section className="about-statement section-pad">
          <div className="section-kicker reveal">
            <span>001 / DESPRE STIL</span>
            <span>{p.kicker}</span>
          </div>
          <div className="about-statement-grid">
            <h2 className="reveal">
              {p.statementTitle[0]}
              <br />
              <em>{p.statementTitle[1]}</em>
            </h2>
            <div className="reveal">
              {p.statement.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio section-pad lp-sec" id="galerie">
          <div className="section-kicker reveal">
            <span>002 / LUCRĂRI</span>
            <span>DIN PORTOFOLIU</span>
          </div>
          <StyleGallery fixed={p.tag} />
          <p className="style-link">
            <Link className="text-arrow" href="/stiluri">
              TOATE STILURILE <span>↗︎</span>
            </Link>
          </p>
        </section>

        <section className="values section-pad about-values area-values">
          <div className="section-kicker reveal">
            <span>003 / CUM LUCRĂM</span>
            <span>FĂRĂ SCURTĂTURI</span>
          </div>
          <div className="values-layout">
            <div className="values-head reveal">
              <h2>
                Ce contează
                <br />
                <em>la acest stil.</em>
              </h2>
              <p>În centrul fiecărei ședințe rămân confortul, alegerea informată și rezultatul final.</p>
            </div>
            <div className="values-list">
              {p.points.map((r, i) => (
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
            <span>{p.kicker}</span>
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
            <FaqList items={p.faq} />
          </div>
        </section>

        <section className="service-more section-pad">
          <div className="section-kicker reveal">
            <span>005 / DESCOPERĂ MAI MULT</span>
            <span>ALTE STILURI ȘI GHIDURI</span>
          </div>
          <div className="service-more-links reveal">
            {others.map((o) => (
              <Link className="text-arrow" href={`/stiluri/${o.slug}`} key={o.slug}>
                {o.short} <span>↗︎</span>
              </Link>
            ))}
            <Link className="text-arrow" href="/ghiduri/harta-durerii">
              HARTA DURERII <span>↗︎</span>
            </Link>
            <Link className="text-arrow" href="/preturi">
              PREȚURI <span>↗︎</span>
            </Link>
          </div>
        </section>

        <FinalCta n={6} title={p.cta} text="Scrie-ne pe WhatsApp, iar un artist îți răspunde cu recomandări și un interval de programare." image="lucrare-8.webp" wa={waLink(p.wa)} />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
