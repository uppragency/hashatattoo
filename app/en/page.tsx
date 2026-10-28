/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/sections/footer";
import { FaqList, FinalCta, PageHero, waLink } from "@/components/PageParts";
import { PIERCING_PRICES, lei } from "@/lib/prices";
import { GOOGLE_BUSINESS_URL, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

const title = "Piercing and tattoo studio in Bucharest | Hasha Tattoo";
const description =
  "Piercing and tattoo studio in Bucharest, Sector 4. Sterile needles, vegan inks, prices listed in lei. Book on WhatsApp. Open Monday to Friday, 12:00 to 20:00.";

export const metadata: Metadata = {
  ...pageMetadata(title, description, "/en"),
  alternates: {
    canonical: "/en",
    languages: { "ro-RO": "/", en: "/en", "x-default": "/" },
  },
};

const FAQ = [
  { q: "How do I book an appointment?", a: "Message us on WhatsApp at +40 766 422 219. Tell us the idea, the body area and, if you have one, a reference image. We agree a day and time, so you come to the studio once with everything clarified." },
  { q: "Do you take walk-ins?", a: "We work by appointment, so the best way is to message us first on WhatsApp." },
  { q: "What are your opening hours?", a: "Monday to Friday, 12:00 to 20:00. The studio is closed on Saturday and Sunday." },
  { q: "Where is the studio?", a: "Bulevardul Mărășești nr. 80, Sector 4, Bucharest. Open the Google Maps link on this page for a live route from where you are." },
  { q: "How much does a piercing cost?", a: "Earlobe 80 lei. Cartilage, industrial, navel, nose, septum, lip, eyebrow and smiley are 150 lei each. Intimate piercing is 200 lei and dermal is 250 lei, with the jewellery included for both. Changing, refitting or checking jewellery is 30 lei." },
  { q: "How much does a tattoo cost?", a: "Tattoos are priced by working time. Size, detail, body area, colour or black only, and the artist's experience all matter. Send us your idea and you get an estimate after we see the design and the area." },
];

const SERVICES: [string, string, string][] = [
  ["Ear piercing", "/piercing-ureche-bucuresti", "Lobe, helix, tragus and other cartilage positions."],
  ["Industrial piercing", "/piercing-industrial-bucuresti", "One bar joining two points in the ear cartilage."],
  ["Navel piercing", "/piercing-buric-bucuresti", "Jewellery and position chosen to suit your anatomy."],
  ["Nose and septum piercing", "/piercing-nas-bucuresti", "Both are 150 lei."],
  ["Dermal piercing", "/piercing-dermal-bucuresti", "Surface piercing on areas such as the back or chest, jewellery included."],
  ["Tattoos", "/tatuaje", "Realism, black and grey, cover-ups and corrections."],
];

export default function EnglishPage() {
  return (
    <div lang="en">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/en#page`,
              url: `${SITE_URL}/en`,
              name: title,
              description,
              inLanguage: "en",
              isPartOf: { "@type": "WebSite", name: "Hasha Tattoo", url: `${SITE_URL}/` },
            },
            {
              "@type": "TattooParlor",
              name: "Hasha Tattoo",
              url: `${SITE_URL}/en`,
              telephone: "+40766422219",
              sameAs: SOCIAL_LINKS,
              hasMap: GOOGLE_BUSINESS_URL,
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "12:00", closes: "20:00" },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bulevardul Mărășești nr. 80",
                addressLocality: "București",
                addressRegion: "Sector 4",
                addressCountry: "RO",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker="ENGLISH"
          title={["Piercing and tattoo studio", "in Bucharest."]}
          lead="A private studio in Sector 4 for piercing and tattoos. Sterile needles, vegan inks, prices listed in lei. Book on WhatsApp."
          image="lucrare-5.webp"
          alt="Tattoo made at Hasha Tattoo, Bucharest"
          corner="BUCHAREST / SECTOR 4"
        />

        <section className="lp-prices section-pad">
          <div className="section-kicker reveal">
            <span>001 / SERVICES</span>
            <span>PIERCING AND TATTOO</span>
          </div>
          <div className="lp-split">
            <div className="lp-head reveal">
              <h2>
                What we
                <br />
                <em>do.</em>
              </h2>
              <p>The service pages are in Romanian, with photos of real work. Message us on WhatsApp for any question.</p>
            </div>
            <div className="reveal">
              <div className="price-list">
                {SERVICES.map(([name, href, text]) => (
                  <div key={href}>
                    <span>
                      <Link href={href}>{name}</Link>
                      <small>{text}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lp-prices section-pad" id="prices">
          <div className="section-kicker reveal">
            <span>002 / PRICES</span>
            <span>IN LEI (RON)</span>
          </div>
          <div className="lp-split">
            <div className="lp-head reveal">
              <h2>
                Piercing
                <br />
                <em>prices.</em>
              </h2>
              <p>Tattoos are priced by working time. Send your idea on WhatsApp and you get an estimate after we see the design and the area.</p>
              <Link className="text-arrow" href="/preturi-tatuaje">
                {"FULL PRICE LIST (ROMANIAN) "}
                <span>↗︎</span>
              </Link>
            </div>
            <div className="reveal">
              <div className="price-list">
                {PIERCING_PRICES.map((r) => (
                  <div key={r.name}>
                    <span>
                      {EN_NAMES[r.name] ?? r.name}
                      {r.note ? <small>{r.note === "Bijuteria inclusă" ? "Jewellery included" : r.note}</small> : null}
                    </span>
                    <strong>{lei(r.price)}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lp-prices section-pad" id="visit">
          <div className="section-kicker reveal">
            <span>003 / VISIT</span>
            <span>ADDRESS AND HOURS</span>
          </div>
          <div className="lp-split">
            <div className="lp-head reveal">
              <h2>
                Find
                <br />
                <em>the studio.</em>
              </h2>
              <p>
                Bulevardul Mărășești nr. 80, Sector 4, Bucharest.
                <br />
                Monday to Friday, 12:00 to 20:00. Closed on Saturday and Sunday.
              </p>
              <a className="text-arrow" href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer">
                {"OPEN IN GOOGLE MAPS "}
                <span>↗︎</span>
              </a>
            </div>
            <div className="reveal">
              <div className="price-list">
                <div>
                  <span>WhatsApp and phone</span>
                  <strong>
                    <a href="tel:+40766422219" data-cta="call">+40 766 422 219</a>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="section-kicker reveal">
            <span>004 / FAQ</span>
            <span>{FAQ.length} ANSWERS</span>
          </div>
          <div className="faq-layout">
            <div className="faq-intro reveal">
              <h2>
                Questions?
                <br />
                <em>Quick answers.</em>
              </h2>
            </div>
            <FaqList items={FAQ} />
          </div>
        </section>

        <FinalCta
          n={5}
          title={["Ready to book?", "Message us."]}
          text="Write to us on WhatsApp with your idea, the body area and a reference image if you have one."
          image="lucrare-8.webp"
          wa={waLink("Hello! I would like to book an appointment at Hasha Tattoo.")}
          label="BOOK ON WHATSAPP "
        />
      </main>
      <Footer />
    </div>
  );
}

const EN_NAMES: Record<string, string> = {
  "Lob ureche": "Earlobe",
  Cartilaj: "Cartilage",
  Industrial: "Industrial",
  Buric: "Navel",
  Nas: "Nose",
  Septum: "Septum",
  Buză: "Lip",
  Sprânceană: "Eyebrow",
  Smiley: "Smiley",
  Intim: "Intimate",
  Dermal: "Dermal",
};
