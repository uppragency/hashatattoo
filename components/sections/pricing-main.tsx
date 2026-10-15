/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export default function PricingMain() {
  return (
    <>
    <main id="main">
      <section className="subhero pricing-hero">
        <img src="/assets/lucrare-4.webp" alt="Tatuaj detaliat, realizat la Hasha Tattoo" />
        <div className="subhero-overlay" />
        <div className="subhero-content">
          <span className="section-kicker-lite">{"HASHA TATTOO / COSTURI & PROGRAMĂRI"}</span>
          <h1>
            PREȚURI,
            <br />
            <em>FĂRĂ SURPRIZE.</em>
          </h1>
          <p>Fiecare lucrare e diferită. Îți oferim o estimare după ce discutăm despre idee, dimensiune și zonă.</p>
        </div>
        <span className="subhero-corner">CONTACTEAZĂ-NE PENTRU O ESTIMARE</span>
      </section>
      <section className="price-section section-pad">
        <div className="section-kicker reveal">
          <span>001 / CUM STABILIM COSTUL</span>
          <span>DETALIILE FAC DIFERENȚA</span>
        </div>
        <div className="price-layout">
          <div className="reveal">
            <h2>
              Ce influențează
              <br />
              <em>prețul final?</em>
            </h2>
            <p>
              Înainte de programare, discutăm împreună detaliile lucrării. Nu publicăm sume orientative care ar putea să nu reflecte costul real al proiectului tău.
            </p>
            <div className="price-points">
              <span>01 / DIMENSIUNEA LUCRĂRII</span>
              <span>02 / COMPLEXITATEA DESIGNULUI</span>
              <span>03 / ZONA ȘI TIMPUL DE EXECUȚIE</span>
              <span>04 / TIPUL DE PIERCING ȘI BIJUTERIE</span>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
    </>
  );
}
