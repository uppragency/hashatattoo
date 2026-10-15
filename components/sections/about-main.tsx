/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function AboutMain() {
  return (
    <>
    <main id="main">
      <section className="subhero about-hero">
        <img src="/assets/studio.webp" alt="Salonul Hasha Tattoo, București" fetchPriority="high" />
        <div className="subhero-overlay" />
        <div className="subhero-content">
          <span className="section-kicker-lite">HASHA TATTOO / POVESTEA NOASTRĂ</span>
          <h1>
            DESPRE
            <br />
            <em>HASHA TATTOO.</em>
          </h1>
          <p>Un studio de tatuaje și piercing în care munca bine făcută contează mai mult decât tendințele.</p>
        </div>
        <span className="subhero-corner">BUCUREȘTI / SECTOR 4</span>
      </section>
      <section className="about-statement section-pad">
        <div className="section-kicker reveal">
          <span>001 / CINE SUNTEM</span>
          <span>MESERIE ȘI RĂBDARE</span>
        </div>
        <div className="about-statement-grid">
          <h2 className="reveal">
            Un studio
            <br />
            {"construit "}
            <em>pe meserie.</em>
          </h2>
          <p className="reveal">
            Hasha Tattoo este un studio de tatuaje și piercing din București, Sector 4. Lucrăm cu o idee simplă: un tatuaj rămâne pentru totdeauna, deci merită făcut fără grabă, cu atenție la detalii și cu respect pentru pielea ta. Fiecare lucrare începe cu o discuție, continuă cu un design pe care îl aprobi și se termină cu instrucțiuni clare de îngrijire.
          </p>
        </div>
      </section>
      <section className="about-gallery section-pad">
        <div className="about-picture tall">
          <img src="/assets/lucrare-5.webp" alt="Lucrare de tatuaj realizată la Hasha Tattoo" loading="lazy" />
          <span>TATUAJ / MESERIA</span>
        </div>
        <div className="about-picture short">
          <img src="/assets/lucrare-11.webp" alt="Tatuaj portret realizat la Hasha Tattoo" loading="lazy" />
          <span>LUCRĂRILE NOASTRE</span>
        </div>
      </section>
      <section className="values section-pad about-values">
        <div className="section-kicker reveal">
          <span>002 / MODUL NOSTRU DE LUCRU</span>
          <span>FĂRĂ SCURTĂTURI</span>
        </div>
        <div className="values-layout">
          <div className="values-head reveal">
            <h2>
              Principiile
              <br />
              <em>după care</em>
              <br />
              lucrăm.
            </h2>
            <p>În centrul fiecărei ședințe rămân confortul, alegerea informată și rezultatul final.</p>
          </div>
          <div className="values-list">
            <div className="value-row reveal">
              <span>01</span>
              <div>
                <h3>Siguranță înainte de tot</h3>
                <p>Ace de unică folosință, instrumente sterilizate și respectarea normelor sanitare.</p>
              </div>
              <b>↗</b>
            </div>
            <div className="value-row reveal">
              <span>02</span>
              <div>
                <h3>Design discutat, nu impus</h3>
                <p>Artistul ascultă ideea ta și îți spune sincer ce funcționează pe pielea ta.</p>
              </div>
              <b>↗</b>
            </div>
            <div className="value-row reveal">
              <span>03</span>
              <div>
                <h3>Calitate verificabilă</h3>
                <p>Folosim tușuri vegane și echipamente de la producători cunoscuți în industrie.</p>
              </div>
              <b>↗</b>
            </div>
            <div className="value-row reveal">
              <span>04</span>
              <div>
                <h3>Fără presiune</h3>
                <p>Spațiul este privat și confortabil. Ai timp să întrebi, să te răzgândești și să decizi.</p>
              </div>
              <b>↗</b>
            </div>
          </div>
        </div>
      </section>
      <section className="about-space section-pad">
        <div className="section-kicker reveal">
          <span>003 / STUDIOUL</span>
          <span>UNDE NE GĂSEȘTI</span>
        </div>
        <div className="about-space-inner">
          <div className="reveal">
            <h2>
              Un studio în
              <br />
              care te simți
              <br />
              <em>în siguranță.</em>
            </h2>
            <p>
              Ne găsești pe Bulevardul Mărășești nr. 80, în Sector 4, într-o zonă centrală și ușor de ajuns. Spațiul este curat, privat și organizat astfel încât să te poți concentra pe ședință, nu pe context.
            </p>
            <a className="text-arrow" href={"https://www.google.com/maps/search/?api=1&query=Bulevardul+M%C4%83r%C4%83%C8%99e%C8%99ti+80+Bucure%C8%99ti"} target="_blank" rel="noopener noreferrer">
              {"VEZI ADRESA PE HARTĂ "}
              <span>↗</span>
            </a>
          </div>
          <div className="about-space-img reveal">
            <img src="/assets/studio.webp" alt="Interiorul salonului Hasha Tattoo, București" loading="lazy" />
          </div>
        </div>
      </section>
      <section className="final-cta" id="contact">
        <div className="final-cta-art">
          <img src="/assets/lucrare-8.webp" alt="Tatuaj artistic creat la Hasha Tattoo" loading="lazy" />
        </div>
        <div className="final-cta-shade" />
        <div className="final-inner">
          <span className="section-kicker-lite">004 / PROGRAMARE</span>
          <h2>
            Hai să discutăm
            <br />
            {"despre "}
            <em>ideea ta.</em>
          </h2>
          <p>Scrie-ne pe WhatsApp, iar un artist îți răspunde cu recomandări și un interval de programare.</p>
          <div className="cta-row">
            <a className="btn btn-light" href="https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20o%20programare%20la%20Hasha%20Tattoo." target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
              {"PROGRAMEAZĂ-TE PE WHATSAPP "}
              <span>↗</span>
            </a>
            <Link href="/preturi" className="text-arrow">
              {"VEZI PREȚURILE "}
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
