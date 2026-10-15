/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import { FinalCta, PageHero, waLink } from "@/components/PageParts";
import { guides, publishedGuides, type Guide } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

function Card({ g }: { g: Guide }) {
  const inner = (
    <>
      <div className="lp-guide-card-img">
        <img src={`/assets/${g.image}`} alt="" loading="lazy" />
        {!g.published ? <em>ÎN CURÂND</em> : null}
      </div>
      <div className="lp-guide-card-body">
        <small>
          {g.category.toUpperCase()} / {g.readMin} MIN CITIT
        </small>
        <h3>{g.title}</h3>
        <p>{g.excerpt}</p>
        {g.published ? (
          <span className="text-arrow">
            {"CITEȘTE GHIDUL "}
            <span>↗</span>
          </span>
        ) : null}
      </div>
    </>
  );
  const cls = `lp-guide-card${g.published ? "" : " is-soon"} reveal`;
  return g.published ? (
    <Link className={cls} href={`/ghiduri/${g.slug}`}>
      {inner}
    </Link>
  ) : (
    <article className={cls}>{inner}</article>
  );
}

export default function GuidesPage() {
  const live = publishedGuides();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: "Ghiduri despre tatuaje și piercing",
              url: `${SITE_URL}/ghiduri`,
              isPartOf: { "@type": "WebSite", name: "Hasha Tattoo", url: SITE_URL },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Ghiduri", item: `${SITE_URL}/ghiduri` },
              ],
            },
            ...(live.length
              ? [
                  {
                    "@type": "ItemList",
                    itemListElement: live.map((g, i) => ({
                      "@type": "ListItem",
                      position: i + 1,
                      name: g.title,
                      url: `${SITE_URL}/ghiduri/${g.slug}`,
                    })),
                  },
                ]
              : []),
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker="GHIDURI"
          title={["Ghiduri pentru", "tatuaje și piercing."]}
          lead="Tot ce vrei să știi înainte și după ședință, scris de artiștii din studio. Fără jargon, cu informații pe care te poți baza."
          image="lucrare-5.webp"
          alt="Detaliu dintr-un tatuaj realizat la Hasha Tattoo"
          corner={`${guides.length} GHIDURI / ${live.length} PUBLICATE`}
        />
        <section className="lp-sec lp-guides section-pad" id="ghiduri">
          <div className="section-kicker reveal">
            <span>001 / TOATE GHIDURILE</span>
            <span>{live.length ? `${live.length} PUBLICATE` : "ÎN PREGĂTIRE"}</span>
          </div>
          <div className="lp-gallery-head reveal">
            <h2>
              Citește înainte
              <br />
              <em>să te decizi.</em>
            </h2>
            <p>
              {live.length
                ? "Alege un subiect. Ghidurile se completează regulat."
                : "Publicăm primele ghiduri în curând. Până atunci, răspunsurile rapide le găsești la întrebări frecvente."}
            </p>
          </div>
          <div className="lp-guides-grid">
            {guides.map((g) => (
              <Card key={g.slug} g={g} />
            ))}
          </div>
          <p className="lp-guides-note reveal">
            Ai o întrebare care nu e acoperită?{" "}
            <Link className="text-arrow" href="/intrebari-frecvente">
              {"ÎNTREBĂRI FRECVENTE "}
              <span>↗</span>
            </Link>
          </p>
        </section>
        <FinalCta
          n={2}
          title={["Ce ai vrea", "să afli de la noi?"]}
          text="Spune-ne ce subiect te interesează și îl putem transforma într-un ghid. Sau scrie-ne direct pentru ideea ta."
          image="lucrare-8.webp"
          wa={waLink("Bună! Aș vrea un ghid despre: ")}
          label="SCRIE-NE PE WHATSAPP "
        />
      </main>
      <Footer />
    </>
  );
}
