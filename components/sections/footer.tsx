/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Year from "@/components/Year";
import BackToTop from "@/components/BackToTop";
import ExploreLinks from "@/components/ExploreLinks";
import { PhoneLink, WaLink } from "@/components/ContactLink";

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
        <WaLink className="hasha-footer__booking" cta="footer_whatsapp" label="Programează-te pe WhatsApp">
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
        </WaLink>
      </div>
      <div className="hasha-footer__details">
        <nav className="hasha-footer__group" aria-labelledby="hasha-explore">
          <h3 id="hasha-explore" className="hasha-footer__label">Explorează</h3>
          <ExploreLinks />
        </nav>
        <div className="hasha-footer__group">
          <h3 className="hasha-footer__label">Ne găsești</h3>
          <p>
            <a href={"https://www.google.com/maps?cid=8814312455281840630"} target="_blank" rel="noopener noreferrer">
              Bulevardul Mărășești nr. 80,
              <br />
              {"Sector 4, București "}
              <span aria-hidden="true">↗︎</span>
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
              <PhoneLink />
            </li>
            <li>
              <a href="mailto:hashatattoo@gmail.com">hashatattoo@gmail.com</a>
            </li>
            <li>
              <WaLink cta="footer_whatsapp_link">
                {"WhatsApp "}
                <span aria-hidden="true">↗︎</span>
              </WaLink>
            </li>
            <li>
              <a href="https://www.instagram.com/hasha_tattoo" target="_blank" rel="noopener noreferrer me">
                {"Instagram "}
                <span aria-hidden="true">↗︎</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/HashaTattoo" target="_blank" rel="noopener noreferrer me">
                {"Facebook "}
                <span aria-hidden="true">↗︎</span>
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
          <Link href="/en" hrefLang="en" lang="en">ENGLISH</Link>
        </nav>
        {" "}
        <BackToTop />
      </div>
    </footer>
    </>
  );
}
