/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Year from "@/components/Year";
import BackToTop from "@/components/BackToTop";
import ExploreLinks from "@/components/ExploreLinks";

export default function Footer() {
  return (
    <>
    <footer className="hasha-footer" aria-label="Hasha Tattoo">
      <div className="hasha-footer__intro">
        <div>
          <p className="hasha-footer__eyebrow">AI O IDEE. NOI ÎI DĂM FORMĂ.</p>
          <h2 className="hasha-footer__title">
            <span>Lasă o</span>
            <span>amprentă.</span>
          </h2>
        </div>
        <a className="hasha-footer__booking" href="https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20o%20programare%20la%20Hasha%20Tattoo." target="_blank" rel="noopener noreferrer" data-cta="footer_whatsapp" aria-label="Programează-te pe WhatsApp">
          <svg viewBox="0 0 160 160" aria-hidden="true">
            <defs>
              <path id="hasha-booking-arc" d="M 27,100 A 57,57 0 1,1 134,100" />
            </defs>
            <text>
              <textPath href="#hasha-booking-arc" startOffset="9%">PROGRAMEAZĂ-TE</textPath>
            </text>
          </svg>
          {" "}
          <svg className="booking-arrow" viewBox="0 0 50 50" aria-hidden="true">
            <path d="M8 42 42 8M9 8h33v33" />
          </svg>
        </a>
      </div>
      <div className="hasha-footer__details">
        <nav className="hasha-footer__group" aria-labelledby="hasha-explore">
          <h3 id="hasha-explore" className="hasha-footer__label">Explorează</h3>
          <ExploreLinks />
        </nav>
        <div className="hasha-footer__group">
          <h3 className="hasha-footer__label">Ne găsești</h3>
          <p>
            <a href={"https://www.google.com/maps/search/?api=1&query=Bulevardul+M%C4%83r%C4%83%C8%99e%C8%99ti+80+Bucure%C8%99ti"} target="_blank" rel="noopener noreferrer">
              Bulevardul Mărășești nr. 80,
              <br />
              {"Sector 4, București "}
              <span aria-hidden="true">↗</span>
            </a>
          </p>
          <p className="hasha-footer__program">
            Luni – vineri · 12:00 – 20:00
            <br />
            Sâmbătă – duminică · Închis
          </p>
        </div>
        <nav className="hasha-footer__group" aria-labelledby="hasha-contact">
          <h3 id="hasha-contact" className="hasha-footer__label"><Link href="/contact">Contact</Link></h3>
          <ul className="hasha-footer__links">
            <li>
              <a href="tel:+40766422219" data-cta="call">+40 766 422 219</a>
            </li>
            <li>
              <a href="mailto:hashatattoo@gmail.com">hashatattoo@gmail.com</a>
            </li>
            <li>
              <a href="https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20o%20programare%20la%20Hasha%20Tattoo." target="_blank" rel="noopener noreferrer" data-cta="footer_whatsapp_link">
                {"WhatsApp "}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hasha-footer__brand" role="img" aria-label="HASHA, cu un piercing cromat">
        <svg className="hasha-footer__word" viewBox="0 0 1400 400" aria-hidden="true">
          <text x="-8" y="348" fontSize="460" textLength="1410" lengthAdjust="spacingAndGlyphs">HASHA</text>
        </svg>
        <div className="hasha-footer__jewelry" aria-hidden="true">
          <img src="/assets/piercing-ring.webp" alt="" width="783" height="800" loading="lazy" />
        </div>
      </div>
      <div className="hasha-footer__legal">
        <span>
          {"© "}
          <Year />
          {" HASHA TATTOO"}
        </span>
        {" "}
        <nav className="hasha-footer__policies" aria-label="Documente legale">
          <Link href="/termeni-si-conditii">TERMENI ȘI CONDIȚII</Link>
          <Link href="/politica-de-confidentialitate">POLITICA DE CONFIDENȚIALITATE</Link>
          <Link href="/politica-cookies">POLITICA COOKIES</Link>
        </nav>
        {" "}
        <BackToTop />
      </div>
    </footer>
    </>
  );
}
