/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import { FaqList, FinalCta, PageHero, waLink } from "@/components/PageParts";
import { guideBySlug, type Guide } from "@/lib/guides";
import { countWords, type Block, type GuideContent } from "@/lib/guide-types";
import { SITE_URL } from "@/lib/site";

/** Suportă [text](/cale) și **bold** în texte. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<Link key={i++} href={m[2]}>{m[1]}</Link>);
    else out.push(<strong key={i++}>{m[3]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function BlockView({ b }: { b: Block }) {
  if (typeof b === "string") return <p>{inline(b)}</p>;
  if ("h3" in b) return <h3>{b.h3}</h3>;
  if ("ul" in b) return <ul>{b.ul.map((x) => <li key={x}>{inline(x)}</li>)}</ul>;
  if ("ol" in b) return <ol>{b.ol.map((x) => <li key={x}>{inline(x)}</li>)}</ol>;
  if ("note" in b)
    return (
      <aside className="ga-note">
        {b.title ? <strong>{b.title}</strong> : null}
        <p>{inline(b.note)}</p>
      </aside>
    );
  return (
    <div className="ga-table-wrap">
      <table>
        <thead>
          <tr>{b.table.head.map((h) => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {b.table.rows.map((r) => (
            <tr key={r[0]}>{r.map((c, i) => <td key={i}>{inline(c)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

export default function GuideArticle({ guide, content }: { guide: Guide; content: GuideContent }) {
  const words = countWords(content);
  const url = `${SITE_URL}/ghiduri/${guide.slug}`;
  const related = content.related.map(guideBySlug).filter((g): g is Guide => Boolean(g && g.published));
  const toc = [...content.sections.map((s) => ({ id: s.id, label: s.h2 })), { id: "intrebari", label: "Întrebări frecvente" }];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: guide.title,
              description: guide.metaDescription,
              wordCount: words,
              inLanguage: "ro-RO",
              datePublished: guide.date,
              dateModified: guide.date,
              mainEntityOfPage: url,
              image: `${SITE_URL}/assets/${guide.image}`,
              author: { "@type": "Organization", name: "Hasha Tattoo", url: SITE_URL },
              publisher: { "@type": "Organization", name: "Hasha Tattoo", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo.png` } },
            },
            {
              "@type": "FAQPage",
              mainEntity: content.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Ghiduri", item: `${SITE_URL}/ghiduri` },
                { "@type": "ListItem", position: 3, name: guide.title, item: url },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker={`GHIDURI / ${guide.category.toUpperCase()}`}
          title={guide.heroTitle}
          lead={guide.excerpt}
          image={guide.image}
          alt={guide.imageAlt}
          corner={`${guide.date ? fmt(guide.date).toUpperCase() : ""} / ${Math.max(1, Math.round(words / 200))} MIN CITIT`}
        />
        <div className="ga-layout section-pad">
          <aside className="ga-toc" aria-label="Cuprins">
            <details open>
              <summary>CUPRINS</summary>
              <ol>
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`}>{t.label}</a>
                  </li>
                ))}
              </ol>
            </details>
          </aside>
          <article className="ga-article">
            <div className="ga-intro">
              {content.intro.map((p) => (
                <p key={p.slice(0, 40)}>{inline(p)}</p>
              ))}
            </div>
            {content.sections.map((s) => (
              <section key={s.id} id={s.id} className="ga-section">
                <h2>{s.h2}</h2>
                {s.blocks.map((b, i) => (
                  <BlockView key={i} b={b} />
                ))}
              </section>
            ))}
            <section id="intrebari" className="ga-section ga-faq">
              <h2>Întrebări frecvente</h2>
              <FaqList items={content.faq} />
            </section>
            <p className="ga-byline">
              Ghid publicat de echipa Hasha Tattoo, studio de tatuaje și piercing din București, Sector 4. Informațiile au rol educativ și nu înlocuiesc sfatul medicului sau instrucțiunile primite de la artistul tău.
            </p>
          </article>
        </div>
        {related.length ? (
          <section className="lp-sec lp-guides section-pad ga-related">
            <div className="section-kicker reveal">
              <span>CITEȘTE ȘI</span>
              <span>{related.length} GHIDURI</span>
            </div>
            <div className="lp-guides-grid">
              {related.map((g) => (
                <Link key={g.slug} className="lp-guide-card reveal" href={`/ghiduri/${g.slug}`}>
                  <div className="lp-guide-card-img">
                    <img src={`/assets/${g.image}`} alt={g.imageAlt} loading="lazy" />
                  </div>
                  <div className="lp-guide-card-body">
                    <small>{g.category.toUpperCase()}</small>
                    <h3>{g.title}</h3>
                    <p>{g.excerpt}</p>
                    <span className="text-arrow">
                      {"CITEȘTE GHIDUL "}
                      <span>↗︎</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
        <FinalCta
          n={related.length ? 2 : 1}
          title={content.cta.title}
          text={content.cta.text}
          image="lucrare-8.webp"
          wa={waLink(content.cta.wa)}
        />
      </main>
      <Footer />
    </>
  );
}
