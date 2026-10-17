import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import Lightbox from "@/components/Lightbox";
import StyleGallery from "@/components/StyleGallery";
import { FaqList, FinalCta, PageHero, num, waLink } from "@/components/PageParts";
import { indicesFor, stylePages } from "@/lib/styles";
import { SITE_URL } from "@/lib/site";

const FAQ = [
  { q: "Cum aleg stilul potrivit pentru ideea mea?", a: "Pornește de la ce vrei să transmită tatuajul: realismul pentru portrete și scene detaliate, black and grey pentru contrast și profunzime, culoarea pentru expresivitate, ornamentalul pentru forme și simetrie. Dacă ai dubii, artistul îți recomandă un stil după idee și zonă. Mai multe în ghidul despre alegerea stilului." },
  { q: "Pot combina mai multe stiluri?", a: "Da, dar rezultatul este mai coerent când stilurile sunt alese cu un plan. Spune-i artistului ce vrei să combini, iar el îți spune ce funcționează împreună pe piele." },
  { q: "Lucrările din galerie sunt realizate la Hasha Tattoo?", a: "Da, sunt lucrări din portofoliul studioului. Le poți vedea mărite, apăsând pe fiecare." },
  { q: "Cum mă programez?", a: "Scrie-ne pe WhatsApp la +40 766 422 219, cu ideea, zona corpului și referințele tale. Poți suna și luni până vineri, între 12:00 și 20:00." },
];

export default function StylesPage() {
  const total = indicesFor("all").length;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "CollectionPage", name: "Stiluri de tatuaj", url: `${SITE_URL}/stiluri`, isPartOf: { "@type": "WebSite", name: "Hasha Tattoo", url: SITE_URL } },
            { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Stiluri", item: `${SITE_URL}/stiluri` },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker="STILURI"
          title={["Stiluri de", "tatuaj."]}
          lead="Realism, black and grey, portrete, mâneci, backpiece, ornamental și color. Filtrează lucrările după stil și vezi cum arată de aproape."
          image="lucrare-4.webp"
          alt="Tatuaj black and grey pe braț, realizat la Hasha Tattoo"
          corner={`${total} LUCRĂRI / 7 STILURI`}
        />
        <section className="portfolio section-pad lp-sec" id="galerie">
          <div className="section-kicker reveal">
            <span>{num(1)} / GALERIE PE STIL</span>
            <span>REALIZATE ÎN STUDIO</span>
          </div>
          <div className="lp-gallery-head reveal">
            <h2>
              Alege
              <br />
              <em>stilul.</em>
            </h2>
            <p>O lucrare poate aparține mai multor stiluri, de aceea apare în mai multe filtre. Apasă pe orice lucrare ca să o vezi mărită.</p>
          </div>
          <StyleGallery />
        </section>

        <section className="service-more section-pad">
          <div className="section-kicker reveal">
            <span>{num(2)} / PAGINI PE STIL</span>
            <span>CITEȘTE MAI MULT</span>
          </div>
          <div className="service-more-links reveal">
            <Link className="text-arrow" href="/tatuaje-realism-bucuresti">
              REALISM <span>↗︎</span>
            </Link>
            <Link className="text-arrow" href="/tatuaje-black-and-grey-bucuresti">
              BLACK AND GREY <span>↗︎</span>
            </Link>
            {stylePages.map((s) => (
              <Link className="text-arrow" href={`/stiluri/${s.slug}`} key={s.slug}>
                {s.short.replace("TATUAJE ", "")} <span>↗︎</span>
              </Link>
            ))}
            <Link className="text-arrow" href="/ghiduri/cum-alegi-stilul-de-tatuaj">
              GHID: CUM ALEGI STILUL <span>↗︎</span>
            </Link>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="section-kicker reveal">
            <span>{num(3)} / ÎNTREBĂRI FRECVENTE</span>
            <span>DESPRE STILURI</span>
          </div>
          <div className="faq-layout">
            <div className="faq-intro reveal">
              <h2>
                Întrebări?
                <br />
                <em>Avem răspunsuri.</em>
              </h2>
              <p>Pentru recomandări adaptate ideii tale, vorbește direct cu un artist.</p>
            </div>
            <FaqList items={FAQ} />
          </div>
        </section>

        <FinalCta
          n={4}
          title={["Ai ales", "stilul?"]}
          text="Scrie-ne pe WhatsApp ideea ta, iar un artist îți răspunde cu recomandări și un interval de programare."
          image="lucrare-8.webp"
          wa={waLink("Bună! Am văzut stilurile și aș dori o programare la Hasha Tattoo.")}
        />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
