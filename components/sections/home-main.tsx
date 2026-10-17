/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Gallery from "@/components/Gallery";
import ConsentMap from "@/components/ConsentMap";

export default function HomeMain() {
  return (
    <>
    <main id="main">
      <section className="hero" aria-label="Hasha Tattoo – tatuaje și piercing">
        <div className="hero-panel hp-one">
          <img src="/assets/lucrare-5.webp" alt="Tatuaj artistic black and grey pe spate, realizat la Hasha Tattoo" width="910" height="1200" fetchPriority="high" />
          <div className="hero-panel-shade" />
          <div className="hero-marker">
            <span>01 / TATTOO</span>
            <span className="marker-rule" />
            <span>
              ARTĂ CARE
              <br />
              RĂMÂNE
            </span>
          </div>
        </div>
        <div className="hero-panel hp-two">
          <img src="/assets/pierce-3.webp" alt="Piercing industrial și bijuterii în ureche, realizate la Hasha Tattoo" width="800" height="1066" fetchPriority="high" />
          <div className="hero-panel-shade" />
          <div className="hero-marker">
            <span>02 / PIERCING</span>
            <span className="marker-rule" />
            <span>
              DETALII CARE
              <br />
              TE DEFINESC
            </span>
          </div>
        </div>
        <div className="hero-panel hp-three">
          <img src="/assets/lucrare-11.webp" alt="Tatuaj realist cu portret, realizat la Hasha Tattoo" width="752" height="1200" />
          <div className="hero-panel-shade" />
          <div className="hero-marker">
            <span>03 / STIL PERSONAL</span>
            <span className="marker-rule" />
            <span>
              UN STIL
              <br />
              DOAR AL TĂU
            </span>
          </div>
        </div>
        <div className="hero-content">
          <h1>
            Tatuaje și piercing
            <br />
            {"în București, "}
            <em>făcute cu grijă.</em>
          </h1>
          <p>Ace sterile, tușuri vegane și consultanță înainte de fiecare lucrare. Spune-ne ideea ta și îți propunem un interval liber.</p>
          <div className="hero-ctas">
            <a className="btn btn-light" href="https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20o%20programare%20la%20Hasha%20Tattoo." target="_blank" rel="noopener noreferrer" data-cta="hero_whatsapp">
              {"PROGRAMEAZĂ-TE PE WHATSAPP "}
              <span>↗︎</span>
            </a>
            <a className="hero-link" href="#portofoliu">VEZI LUCRĂRILE ↓︎</a>
          </div>
        </div>
        <div className="hero-bottom">
          <span className="hero-scroll">
            {"DERULEAZĂ "}
            <i />
          </span>
        </div>
        <div className="hero-vertical">HASHA TATTOO · BUCUREȘTI</div>
      </section>
      <div className="info-strip">
        <a href="#contact">
          <span>PROGRAM</span>
          <strong>LUNI — VINERI · 12:00 — 20:00</strong>
        </a>
        <a href={"https://www.google.com/maps/search/?api=1&query=Bulevardul+M%C4%83r%C4%83%C8%99e%C8%99ti+80+Bucure%C8%99ti"} target="_blank" rel="noopener noreferrer">
          <span>GĂSEȘTE-NE</span>
          <strong>BD. MĂRĂȘEȘTI 80 · SECTOR 4 ↗︎</strong>
        </a>
        <a href="tel:+40766422219" data-cta="call">
          <span>SUNĂ-NE</span>
          <strong>+40 766 422 219 ↗︎</strong>
        </a>
      </div>
      <section className="intro section-pad" id="intro">
        <div className="section-kicker reveal">
          <span>001 / UN ALT FEL DE EXPERIENȚĂ</span>
          <span>BINE AI VENIT</span>
        </div>
        <div className="intro-layout">
          <h2 className="intro-title reveal">
            {"Fiecare lucrare "}
            <br />
            {"începe cu "}
            <em>
              {"o conversație, "}
              <br />
              nu cu un preț.
            </em>
          </h2>
          <div className="intro-aside reveal">
            <p>
              Studio privat în Sector 4, pe Bulevardul Mărășești. Discutăm designul, zona și dimensiunea, apoi lucrăm fără grabă, cu ace de unică folosință și tușuri vegane.
            </p>
            <div className="cta-stack">
              <a className="btn btn-light" href="https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20o%20programare%20la%20Hasha%20Tattoo." target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
                {"PROGRAMEAZĂ-TE PE WHATSAPP "}
                <span>↗︎</span>
              </a>
              <div className="micro-links">
                <a href="#portofoliu">VEZI LUCRĂRILE NOASTRE ↘︎</a>
                <Link href="/preturi">DESPRE PREȚURI ↗︎</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="disciplines section-pad" id="tatuaje">
        <div className="section-kicker reveal">
          <span>002 / CE FACEM</span>
          <span>FIECARE DETALIU CONTEAZĂ</span>
        </div>
        <div className="discipline-list">
          <article className="discipline reveal">
            <div className="discipline-index">01 — TATTOO</div>
            <div className="discipline-image">
              <img src="/assets/lucrare-3.webp" loading="lazy" alt="Tatuaj realist amplu realizat pe piept la Hasha Tattoo" />
              <span className="image-corner">01 / LUCRARE SELECTATĂ</span>
            </div>
            <div className="discipline-copy">
              <h2>
                Tatuajul tău,
                <br />
                <em>de la idee</em>
                <br />
                la piele.
              </h2>
              <p>
                Vii cu o idee, o schiță sau doar o direcție. Împreună alegem designul, dimensiunea și zona potrivită, apoi îl realizăm într-un spațiu curat și liniștit. Fie că ești la primul tatuaj sau la al zecelea, știi exact ce urmează.
              </p>
              <Link className="text-arrow" href="/tatuaje">
                {"VEZI TOATE TATUAJELE "}
                <span>↗︎</span>
              </Link>
            <div className="discipline-more">
              <Link href="/tatuaje-realism-bucuresti">TATUAJE REALISM</Link>
              <Link href="/tatuaje-black-and-grey-bucuresti">BLACK AND GREY</Link>
            </div>
            </div>
          </article>
          <article className="discipline discipline-reverse reveal" id="piercing">
            <div className="discipline-index">02 — PIERCING</div>
            <div className="discipline-image">
              <img src="/assets/pierce-6.webp" loading="lazy" alt="Piercinguri și bijuterii pentru ureche, realizate la Hasha Tattoo" />
              <span className="image-corner">02 / PRECIZIE ȘI STIL</span>
            </div>
            <div className="discipline-copy">
              <h2>
                Piercing ales
                <br />
                <em>corect,</em>
                <br />
                montat corect.
              </h2>
              <p>
                Alegem împreună locul, bijuteria și poziția potrivite anatomiei tale. Montarea se face cu instrumente sterile, iar la final primești instrucțiuni clare de îngrijire.
              </p>
              <Link className="text-arrow" href="/piercing">
                {"VEZI TOATE PIERCINGURILE "}
                <span>↗︎</span>
              </Link>
            <div className="discipline-more">
              <Link href="/piercing-ureche-bucuresti">PIERCING URECHE</Link>
              <Link href="/piercing-buric-bucuresti">PIERCING BURIC</Link>
            </div>
            </div>
          </article>
        </div>
      </section>
      <section className="portfolio section-pad" id="portofoliu">
        <div className="section-kicker reveal">
          <span>003 / DIN PORTOFOLIUL NOSTRU</span>
          <span>REALIZATE ÎN STUDIO</span>
        </div>
        <div className="portfolio-heading reveal">
          <h2>
            Lucrări care
            <br />
            <em>vorbesc.</em>
          </h2>
          <p>Fără imagini de catalog. Doar tatuaje și piercinguri realizate în studio, văzute de aproape.</p>
        </div>
        <Gallery />
        <p className="lp-portfolio-more">
          <Link className="text-arrow" href="/portofoliu">
            {"VEZI TOT PORTOFOLIUL "}
            <span>↗︎</span>
          </Link>
        </p>
      </section>
      <section className="studio-banner" id="studio">
        <img src="/assets/studio.webp" loading="lazy" alt="Interiorul salonului Hasha Tattoo din București" />
        <div className="studio-banner-overlay" />
        <div className="studio-banner-content">
          <span className="section-kicker-lite">004 / STUDIOUL</span>
          <h2>
            UN LOC.
            <br />
            <em>POVESTEA TA.</em>
          </h2>
          <p>Ne găsești pe Bulevardul Mărășești nr. 80, într-un studio privat, organizat pentru confort și concentrare.</p>
          <Link className="text-arrow" href="/despre-noi">
            {"DESCOPERĂ STUDIOUL "}
            <span>↗︎</span>
          </Link>
        </div>
        <span className="studio-banner-side">HASHA TATTOO / BUCUREȘTI</span>
      </section>
      <section className="values section-pad" id="de-ce-hasha">
        <div className="section-kicker reveal">
          <span>005 / STANDARDUL HASHA</span>
          <span>GRIJĂ ÎN FIECARE DETALIU</span>
        </div>
        <div className="values-layout">
          <div className="values-head reveal">
            <h2>
              Ce primești
              <br />
              <em>când ajungi</em>
              <br />
              la noi.
            </h2>
            <p>O experiență în care fiecare detaliu contează. De la prima conversație până la ultimul pas al îngrijirii.</p>
          </div>
          <div className="values-list">
            <div className="value-row reveal">
              <span>01</span>
              <div>
                <h3>Siguranță</h3>
                <p>Ace de unică folosință, instrumente sterilizate și respectarea normelor sanitare.</p>
              </div>
              <b>↗︎</b>
            </div>
            <div className="value-row reveal">
              <span>02</span>
              <div>
                <h3>Tușuri vegane</h3>
                <p>Produse de calitate, de la producători cunoscuți în industrie.</p>
              </div>
              <b>↗︎</b>
            </div>
            <div className="value-row reveal">
              <span>03</span>
              <div>
                <h3>Intimitate</h3>
                <p>Un spațiu privat, confortabil, în care lucrăm fără grabă.</p>
              </div>
              <b>↗︎</b>
            </div>
            <div className="value-row reveal">
              <span>04</span>
              <div>
                <h3>Consiliere</h3>
                <p>Artistul îți explică procesul și îți recomandă zona și designul potrivite.</p>
              </div>
              <b>↗︎</b>
            </div>
            <div className="value-row reveal">
              <span>05</span>
              <div>
                <h3>Ușor de ajuns</h3>
                <p>Într-o zonă centrală din București, pe Bulevardul Mărășești, Sector 4.</p>
              </div>
              <b>↗︎</b>
            </div>
          </div>
        </div>
      </section>
      <section className="steps section-pad">
        <div className="section-kicker reveal">
          <span>006 / CUM DECURGE</span>
          <span>DE LA PRIMUL MESAJ LA PRIMA LINIE</span>
        </div>
        <h2 className="steps-title reveal">
          Trei pași până
          <br />
          {"la "}
          <em>tatuaj.</em>
        </h2>
        <div className="steps-grid">
          <div className="step reveal">
            <span>01 / PRIMUL CONTACT</span>
            <strong>Ne scrii.</strong>
            <p>Scrie-ne pe WhatsApp. Trimite ideea, zona și, dacă ai, o imagine de referință.</p>
          </div>
          <div className="step reveal">
            <span>02 / PUNEM TOTUL LA PUNCT</span>
            <strong>Stabilim detaliile.</strong>
            <p>Discutăm designul, primești recomandări de la artist și alegem un interval disponibil.</p>
          </div>
          <div className="step reveal">
            <span>03 / E TIMPUL TĂU</span>
            <strong>Vii la ședință.</strong>
            <p>Te ocupi doar de relaxare. Restul e treaba noastră.</p>
          </div>
        </div>
        <a className="btn btn-outline" href="https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20vrea%20s%C4%83%20discut%C4%83m%20despre%20un%20tatuaj." target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
          {"ÎNCEPE PE WHATSAPP "}
          <span>↗︎</span>
        </a>
      </section>
      <section className="social-section section-pad">
        <div className="section-kicker reveal">
          <span>007 / RECENZII</span>
          <span>VOCEA CLIENȚILOR NOȘTRI</span>
        </div>
        <div className="social-inner reveal">
          <h2>
            Experiența
            <br />
            <em>vorbește.</em>
          </h2>
          <div>
            <p>
              Vrei să afli cum este la Hasha Tattoo? Citește părerile clienților noștri direct pe Google Maps, apoi scrie-ne pe WhatsApp pentru o programare.
            </p>
            <a href={"https://www.google.com/maps/search/?api=1&query=Hasha+Tattoo+Bucuresti"} target="_blank" rel="noopener noreferrer" className="text-arrow">
              {"CITEȘTE RECENZIILE PE GOOGLE "}
              <span>↗︎</span>
            </a>
          </div>
        </div>
      </section>
      <section className="local-section section-pad">
        <div className="section-kicker reveal">
          <span>008 / ÎN BUCUREȘTI</span>
          <span>SECTOR 4 · BULEVARDUL MĂRĂȘEȘTI</span>
        </div>
        <div className="local-layout reveal">
          <div>
            <span className="giant-star" aria-hidden="true">✳︎</span>
            <h2>
              Salon de tatuaje
              <br />
              {"în "}
              <em>București,</em>
              <br />
              Sector 4.
            </h2>
          </div>
          <div>
            <p>
              Hasha Tattoo este un studio de tatuaje și piercing situat pe Bulevardul Mărășești, într-o zonă ușor de ajuns din centrul Bucureștiului. Lucrăm pentru clienți care vor un tatuaj corporal sau cosmetic realizat în condiții igienice stricte, cu artiști care iau în serios fiecare detaliu.
            </p>
            <a className="text-arrow" href="https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20mai%20multe%20detalii%20despre%20serviciile%20Hasha%20Tattoo." target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
              {"SCRIE-NE ACUM "}
              <span>↗︎</span>
            </a>
          </div>
        </div>
      </section>
      <section className="faq-section section-pad" id="faq">
        <div className="section-kicker reveal">
          <span>009 / ÎNTREBĂRI FRECVENTE</span>
          <span>BINE DE ȘTIUT</span>
        </div>
        <div className="faq-layout">
          <div className="faq-intro reveal">
            <h2>
              Întrebări?
              <br />
              <em>Avem răspunsuri.</em>
            </h2>
            <p>
              Am strâns câteva dintre cele mai frecvente întrebări. Pentru recomandări adaptate lucrării tale, vorbește direct cu artistul.
            </p>
          </div>
          <div className="faq-list reveal">
            <details>
              <summary>
                Cum se face un tatuaj?
                <span>+</span>
              </summary>
              <p>
                Un aparat electric introduce cerneala în piele cu ajutorul unor ace sterile. Pielea se vindecă apoi în jurul pigmentului, iar desenul rămâne vizibil.
              </p>
            </details>
            <details>
              <summary>
                Doare tatuajul?
                <span>+</span>
              </summary>
              <p>
                Senzația diferă de la o persoană la alta și în funcție de zonă. Majoritatea clienților o consideră suportabilă. Dacă ești relaxat și odihnit, ședința poate decurge mai ușor.
              </p>
            </details>
            <details>
              <summary>
                Cum îngrijesc un tatuaj nou?
                <span>+</span>
              </summary>
              <p>
                Tipul de bandaj și perioada de îngrijire diferă în funcție de lucrare. Urmează indicațiile scrise primite de la artist: păstrează pielea curată, spală delicat când ți se recomandă și folosește doar produsele indicate. Dacă ai dubii în timpul vindecării, scrie-ne pe WhatsApp și te îndrumăm.
              </p>
            </details>
            <details>
              <summary>
                Ce trebuie să evit după ședință?
                <span>+</span>
              </summary>
              <p>
                Evită piscina, marea, băile prelungite, soarele direct, scărpinatul, hainele care freacă zona și efortul care irită pielea. Respectă perioada de vindecare recomandată de artist.
              </p>
            </details>
            <details>
              <summary>
                Unde doare cel mai tare?
                <span>+</span>
              </summary>
              <p>
                Zonele sensibile ale corpului pot fi mai dureroase, dar fiecare persoană simte diferit. Artistul îți recomandă amplasarea potrivită designului, iar alegerea finală îți aparține.
              </p>
            </details>
            <details>
              <summary>
                Sunt tușurile sigure pentru piele?
                <span>+</span>
              </summary>
              <p>
                Folosim tușuri vegane, de la producători cunoscuți. Totuși, reacțiile individuale pot apărea. Dacă ai alergii sau afecțiuni ale pielii, spune-ne înainte de ședință.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="final-cta" id="contact">
        <div className="final-cta-art">
          <img src="/assets/lucrare-8.webp" loading="lazy" alt="Detaliu dintr-un tatuaj realizat la Hasha Tattoo" />
        </div>
        <div className="final-cta-shade" />
        <div className="final-inner">
          <span className="section-kicker-lite">010 / PROGRAMARE</span>
          <h2>
            Ești pregătit(ă)
            <br />
            {"pentru "}
            <em>
              următorul
              <br />
              tatuaj?
            </em>
          </h2>
          <p>Scrie-ne ideea ta. Revenim cu un răspuns și un interval de programare.</p>
          <a className="btn btn-light" href="https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20vrea%20s%C4%83%20m%C4%83%20programez%20la%20Hasha%20Tattoo." target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
            {"PROGRAMEAZĂ-TE PE WHATSAPP "}
            <span>↗︎</span>
          </a>
        </div>
      </section>
      <section className="contact-block section-pad" id="adresa">
        <div className="section-kicker reveal">
          <span>011 / UNDE NE GĂSEȘTI</span>
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
                  Luni – vineri, 12:00 – 20:00
                  <br />
                  Sâmbătă – duminică: închis
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
              <a className="btn btn-light" href="https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20o%20programare%20la%20Hasha%20Tattoo." target="_blank" rel="noopener noreferrer" data-cta="contact_whatsapp">
                {"PROGRAMARE "}
                <span>↗︎</span>
              </a>
              <a className="btn btn-outline" href={"https://www.google.com/maps/dir/?api=1&destination=Bulevardul+M%C4%83r%C4%83%C8%99e%C8%99ti+80+Bucure%C8%99ti"} target="_blank" rel="noopener noreferrer" data-cta="directions">
                {"DIRECȚII "}
                <span>↗︎</span>
              </a>
            </div>
          </div>
          <ConsentMap />
        </div>
      </section>
    </main>
    </>
  );
}
