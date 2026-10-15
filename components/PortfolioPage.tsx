/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import Gallery from "@/components/Gallery";
import Lightbox from "@/components/Lightbox";
import { FinalCta, PageHero, num, waLink } from "@/components/PageParts";
import { items } from "@/lib/portfolio";
import { SITE_URL } from "@/lib/site";

const tattoo = items.filter((i) => i[2] === "tattoo").length;
const piercing = items.filter((i) => i[2] === "piercing").length;

const PATHS = [
  { href: "/tatuaje", k: "TATUAJE", t: "Realism, black and grey, portrete, mâneci și backpiece.", img: "lucrare-5.webp", alt: "Tatuaj black and grey pe spate, realizat la Hasha Tattoo" },
  { href: "/piercing", k: "PIERCING", t: "Ureche, industrial, buric, limbă și piercinguri de suprafață.", img: "pierce-6.webp", alt: "Piercinguri și bijuterii în ureche, realizate la Hasha Tattoo" },
];

export default function PortfolioPage() {
  const url = `${SITE_URL}/portofoliu`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ImageGallery",
              name: "Portofoliu Hasha Tattoo",
              url,
              inLanguage: "ro-RO",
              image: items.map((i) => ({
                "@type": "ImageObject",
                contentUrl: `${SITE_URL}/assets/${i[0]}`,
                name: i[1],
                description: i[3],
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Portofoliu", item: url },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker="PORTOFOLIU"
          title={["Lucrări care", "vorbesc."]}
          lead="Fără imagini de catalog. Doar tatuaje și piercinguri realizate în studio, văzute de aproape. Alege categoria și deschide orice lucrare pentru a o vedea pe tot ecranul."
          image="lucrare-12.webp"
          alt="Tatuaj portret realist pe braț, realizat la Hasha Tattoo"
          corner={`${items.length} LUCRĂRI / ${tattoo} TATUAJE / ${piercing} PIERCING`}
        />

        <section className="portfolio section-pad lp-sec" id="galerie">
          <div className="section-kicker reveal">
            <span>{num(1)} / GALERIE</span>
            <span>REALIZATE ÎN STUDIO</span>
          </div>
          <div className="lp-gallery-head reveal">
            <h2>
              Toate
              <br />
              <em>lucrările.</em>
            </h2>
            <p>Filtrează după tatuaje sau piercing, apoi apasă pe o lucrare ca să o vezi mărită. Poți naviga cu săgețile de pe tastatură.</p>
          </div>
          <Gallery showAll />
        </section>

        <section className="lp-guide section-pad">
          <div className="section-kicker reveal">
            <span>{num(2)} / EXPLOREAZĂ</span>
            <span>PE CATEGORII</span>
          </div>
          <div className="lp-path-grid">
            {PATHS.map((p) => (
              <Link className="lp-path reveal" href={p.href} key={p.href}>
                <div className="lp-path-img">
                  <img src={`/assets/${p.img}`} alt={p.alt} loading="lazy" />
                </div>
                <div className="lp-path-body">
                  <small>{p.k}</small>
                  <strong>Tot despre {p.k.toLowerCase()}</strong>
                  <p>{p.t}</p>
                  <span>
                    VEZI PAGINA <i>↗</i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <FinalCta
          n={3}
          title={["Ți-a plăcut", "ce ai văzut?"]}
          text="Spune-ne ideea ta pe WhatsApp, iar un artist îți răspunde cu recomandări și un interval de programare."
          image="lucrare-8.webp"
          wa={waLink("Bună! Am văzut portofoliul și aș dori o programare la Hasha Tattoo.")}
        />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
