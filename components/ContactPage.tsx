/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import ConsentMap from "@/components/ConsentMap";
import QuoteForm from "@/components/QuoteForm";
import { FaqList, FinalCta, PageHero, num, waLink } from "@/components/PageParts";
import { SITE_URL } from "@/lib/site";

const WA = waLink("Bună! Aș dori o programare la Hasha Tattoo.");

const CARDS = [
  { k: "WHATSAPP", v: "Cel mai rapid", t: "Scrie-ne ideea ta și primești răspuns de la un artist.", href: WA, cta: "SCRIE PE WHATSAPP", ext: true, data: "contact_whatsapp" },
  { k: "TELEFON", v: "+40 766 422 219", t: "Sună-ne luni până vineri, între 12:00 și 20:00.", href: "tel:+40766422219", cta: "SUNĂ ACUM", data: "call" },
  { k: "EMAIL", v: "hashatattoo@gmail.com", t: "Pentru întrebări mai lungi sau imagini de referință.", href: "mailto:hashatattoo@gmail.com", cta: "TRIMITE UN EMAIL" },
  { k: "ADRESĂ", v: "Bulevardul Mărășești nr. 80", t: "Sector 4, București. Studio privat, într-o zonă centrală.", href: "https://www.google.com/maps/dir/?api=1&destination=Bulevardul+M%C4%83r%C4%83%C8%99e%C8%99ti+80+Bucure%C8%99ti", cta: "DIRECȚII", ext: true, data: "directions" },
];

const HOURS = [
  { k: "LUNI", v: "12:00 până la 20:00" },
  { k: "MARȚI", v: "12:00 până la 20:00" },
  { k: "MIERCURI", v: "12:00 până la 20:00" },
  { k: "JOI", v: "12:00 până la 20:00" },
  { k: "VINERI", v: "12:00 până la 20:00" },
  { k: "SÂMBĂTĂ", v: "Închis" },
  { k: "DUMINICĂ", v: "Închis" },
];

const FAQ = [
  { q: "Cum mă programez?", a: "Cel mai simplu este pe WhatsApp, la +40 766 422 219. Ne spui ce ți-ai dori, zona corpului și, dacă ai, imagini de referință, iar un artist îți răspunde cu recomandări și un interval de programare. Poți suna și luni până vineri, între 12:00 și 20:00." },
  { q: "Care este programul studioului?", a: "Lucrăm de luni până vineri, între 12:00 și 20:00. Sâmbăta și duminica studioul este închis." },
  { q: "Unde se află studioul?", a: "Pe Bulevardul Mărășești nr. 80, Sector 4, București. Pe această pagină ai butonul de direcții și harta." },
  { q: "Cum cer o estimare de preț?", a: "Completează formularul de mai jos sau scrie-ne pe WhatsApp. Piercingurile au prețuri afișate pe pagina Prețuri. Pentru tatuaje, estimarea se face după ce discutăm ideea, dimensiunea și zona." },
  { q: "Pot trimite imagini de referință?", a: "Da. Pe WhatsApp sau pe email poți trimite fotografii, schițe sau idei. Artistul le folosește ca punct de plecare pentru design." },
];

export default function ContactPage() {
  const url = `${SITE_URL}/contact`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              url,
              name: "Contact Hasha Tattoo",
              inLanguage: "ro-RO",
              mainEntity: {
                "@type": "TattooParlor",
                name: "Hasha Tattoo",
                url: `${SITE_URL}/`,
                telephone: "+40766422219",
                email: "hashatattoo@gmail.com",
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
              },
            },
            { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Contact", item: url },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker="CONTACT"
          title={["Hai să vorbim", "despre ideea ta."]}
          lead="Scrie-ne pe WhatsApp, sună-ne sau vino direct pe Bulevardul Mărășești. Un artist îți răspunde cu recomandări și un interval de programare."
          image="studio.webp"
          alt="Interiorul studioului Hasha Tattoo din București"
          corner="LUNI PÂNĂ VINERI / 12:00 PÂNĂ LA 20:00"
        >
          <div className="lp-hero-ctas">
            <a className="btn btn-light" href={WA} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
              {"PROGRAMEAZĂ-TE PE WHATSAPP "}
              <span>↗︎</span>
            </a>
            <a className="btn btn-outline lp-btn-ghost" href="tel:+40766422219" data-cta="call">
              {"SUNĂ ACUM "}
              <span>↗︎</span>
            </a>
          </div>
        </PageHero>

        <section className="lp-contact-cards section-pad">
          <div className="section-kicker reveal">
            <span>{num(1)} / CUM NE CONTACTEZI</span>
            <span>4 MODURI</span>
          </div>
          <div className="lp-card-grid">
            {CARDS.map((c) => (
              <a
                key={c.k}
                className="lp-contact-card reveal"
                href={c.href}
                {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(c.data ? { "data-cta": c.data } : {})}
              >
                <small>{c.k}</small>
                <strong>{c.v}</strong>
                <p>{c.t}</p>
                <span>
                  {c.cta} <i>↗︎</i>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="lp-healing section-pad">
          <div className="section-kicker reveal">
            <span>{num(2)} / PROGRAM</span>
            <span>STUDIO PRIVAT</span>
          </div>
          <div className="lp-split">
            <div className="lp-head reveal">
              <h2>
                Când ne
                <br />
                <em>găsești.</em>
              </h2>
              <p>Lucrăm de luni până vineri. Pentru ședințe, te rugăm să ne scrii înainte, ca să stabilim un interval și să discutăm ideea ta.</p>
            </div>
            <div className="lp-table reveal">
              {HOURS.map((h) => (
                <div key={h.k}>
                  <strong>{h.k}</strong>
                  <p>{h.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-block section-pad" id="adresa">
          <div className="section-kicker reveal">
            <span>{num(3)} / UNDE NE GĂSEȘTI</span>
            <span>BD. MĂRĂȘEȘTI 80 · SECTOR 4</span>
          </div>
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h2>
                Vino pe
                <br />
                <em>Mărășești 80.</em>
              </h2>
              <dl>
                <div>
                  <dt>ADRESĂ</dt>
                  <dd>Bulevardul Mărășești nr. 80, Sector 4, București</dd>
                </div>
                <div>
                  <dt>PROGRAM</dt>
                  <dd>
                    Luni până vineri, 12:00 până la 20:00
                    <br />
                    Sâmbătă și duminică: închis
                  </dd>
                </div>
                <div>
                  <dt>TELEFON</dt>
                  <dd>
                    <a href="tel:+40766422219" data-cta="call">+40 766 422 219</a>
                  </dd>
                </div>
                <div>
                  <dt>EMAIL</dt>
                  <dd>
                    <a href="mailto:hashatattoo@gmail.com">hashatattoo@gmail.com</a>
                  </dd>
                </div>
              </dl>
              <div className="contact-actions">
                <a className="btn btn-light" href={WA} target="_blank" rel="noopener noreferrer" data-cta="contact_whatsapp">
                  {"PROGRAMARE "}
                  <span>↗︎</span>
                </a>
                <a className="btn btn-outline" href={CARDS[3].href} target="_blank" rel="noopener noreferrer" data-cta="directions">
                  {"DIRECȚII "}
                  <span>↗︎</span>
                </a>
              </div>
            </div>
            <ConsentMap />
          </div>
        </section>

        <section className="lp-quote section-pad lp-sec" id="estimare">
          <div className="section-kicker reveal">
            <span>{num(4)} / SCRIE-NE</span>
            <span>MESAJ PE WHATSAPP</span>
          </div>
          <div className="lp-split lp-quote-grid">
            <div className="lp-head reveal">
              <h2>
                Spune-ne
                <br />
                <em>ce îți dorești.</em>
              </h2>
              <p>Completează câteva rânduri și îți deschidem WhatsApp cu mesajul pregătit. Nu trimitem datele către un server.</p>
              <Link className="text-arrow" href="/preturi">
                {"VEZI PREȚURILE "}
                <span>↗︎</span>
              </Link>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="faq-section section-pad" id="intrebari">
          <div className="section-kicker reveal">
            <span>{num(5)} / ÎNTREBĂRI FRECVENTE</span>
            <span>PROGRAMARE ȘI CONTACT</span>
          </div>
          <div className="faq-layout">
            <div className="faq-intro reveal">
              <h2>
                Întrebări?
                <br />
                <em>Avem răspunsuri.</em>
              </h2>
              <p>Mai multe răspunsuri despre tatuaje, piercing și îngrijire găsești pe pagina dedicată.</p>
              <Link className="btn btn-outline" href="/intrebari-frecvente">
                {"TOATE ÎNTREBĂRILE "}
                <span>↗︎</span>
              </Link>
            </div>
            <FaqList items={FAQ} />
          </div>
        </section>

        <FinalCta
          n={6}
          title={["Te așteptăm", "la studio."]}
          text="Scrie-ne pe WhatsApp, iar un artist îți răspunde cu recomandări și un interval de programare. Program: luni până vineri, 12:00 până la 20:00."
          image="lucrare-8.webp"
          wa={WA}
        />
      </main>
      <Footer />
    </>
  );
}
