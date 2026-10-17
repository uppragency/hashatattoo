/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import { FaqList, FinalCta, PageHero, waLink } from "@/components/PageParts";
import { parlor } from "@/components/AreaPage";
import { areas, mapsFromMe, STUDIO_ADDRESS } from "@/lib/areas";
import { SITE_URL } from "@/lib/site";

const FAQ = [
  { q: "Unde se află studioul Hasha Tattoo?", a: `${STUDIO_ADDRESS}, într-un spațiu privat. Adresa se deschide în Google Maps din pagina de contact și din subsolul site-ului.` },
  { q: "Care este programul?", a: "Luni până vineri, între 12:00 și 20:00. Sâmbăta și duminica studioul este închis." },
  { q: "Cum aflu cât durează drumul până la studio?", a: "Pe fiecare pagină de zonă găsești butoane către Google Maps, cu ruta de la zona ta până la studio, cu mașina, transport public sau pe jos. Timpul depinde de ora și de punctul exact de plecare, așa că îl verifici live." },
  { q: "Trebuie să mă programez?", a: "Da. Lucrăm pe bază de programare, într-un studio privat. Scrie-ne pe WhatsApp, la +40 766 422 219, cu ideea ta, zona corpului și eventualele referințe." },
];

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            parlor(),
            { "@type": "CollectionPage", name: "Zone și cartiere", url: `${SITE_URL}/zone`, isPartOf: { "@type": "WebSite", name: "Hasha Tattoo", url: SITE_URL } },
            { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Zone și cartiere", item: `${SITE_URL}/zone` },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker="ZONE ȘI CARTIERE"
          title={["Unde ne", "găsești."]}
          lead="Studio privat de tatuaje și piercing în Sectorul 4, pe Bulevardul Mărășești nr. 80. Alege zona din care vii și vezi ruta live în Google Maps."
          image="studio.webp"
          alt="Interiorul studioului Hasha Tattoo din Sector 4, București"
          corner="BUCUREȘTI / SECTOR 4"
        />
        <section className="lp-sec lp-guides section-pad">
          <div className="section-kicker reveal">
            <span>001 / ALEGE ZONA</span>
            <span>{areas.length} ZONE</span>
          </div>
          <div className="lp-gallery-head reveal">
            <h2>
              Din ce zonă
              <br />
              <em>vii?</em>
            </h2>
            <p>Fiecare pagină are ruta ta către studio și răspunsuri la întrebările frecvente ale celor din zona respectivă.</p>
          </div>
          <div className="lp-guides-grid">
            {areas.map((a) => (
              <Link className="lp-guide-card reveal" href={`/zone/${a.slug}`} key={a.slug}>
                <div className="lp-guide-card-img">
                  <img src={`/assets/${a.image}`} alt="" loading="lazy" />
                </div>
                <div className="lp-guide-card-body">
                  <small>ZONĂ / BUCUREȘTI</small>
                  <h3>{a.name}</h3>
                  <p>{a.card}</p>
                  <span className="text-arrow">
                    {"VEZI ZONA "}
                    <span>↗︎</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="lp-sec section-pad lp-route">
          <div className="section-kicker reveal">
            <span>002 / ADRESA</span>
            <span>PROGRAM LUNI PÂNĂ VINERI</span>
          </div>
          <div className="lp-route-box reveal">
            <div>
              <h2>
                Bulevardul
                <br />
                <em>Mărășești 80.</em>
              </h2>
              <p>Sector 4, București. Luni până vineri, între 12:00 și 20:00. Sâmbăta și duminica, închis.</p>
            </div>
            <div className="lp-route-actions">
              <a className="btn btn-light" href={mapsFromMe} target="_blank" rel="noopener noreferrer">
                {"RUTA DE LA TINE "}
                <span>↗︎</span>
              </a>
              <Link className="btn btn-outline" href="/contact">
                {"PAGINA DE CONTACT "}
                <span>↗︎</span>
              </Link>
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
              <p>Dacă nu găsești răspunsul, scrie-ne pe WhatsApp.</p>
            </div>
            <FaqList items={FAQ} />
          </div>
        </section>

        <FinalCta
          n={4}
          title={["Hai să discutăm", "despre ideea ta."]}
          text="Scrie-ne pe WhatsApp, iar un artist îți răspunde cu recomandări și un interval de programare."
          image="lucrare-8.webp"
          wa={waLink("Bună! Aș dori o programare la Hasha Tattoo.")}
        />
      </main>
      <Footer />
    </>
  );
}
