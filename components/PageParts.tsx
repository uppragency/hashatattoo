/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

export const WA_BASE = "https://wa.me/40766422219?text=";
export const waLink = (text: string) => WA_BASE + encodeURIComponent(text);
export const num = (n: number) => String(n).padStart(3, "0");

export function PageHero({
  kicker,
  title,
  lead,
  image,
  alt,
  corner = "BUCUREȘTI / SECTOR 4",
  children,
}: {
  kicker: string;
  title: [string, string];
  lead: string;
  image: string;
  alt: string;
  corner?: string;
  children?: ReactNode;
}) {
  return (
    <section className="subhero service-hero lp-hero">
      <img src={`/assets/${image}`} alt={alt} fetchPriority="high" />
      <div className="subhero-overlay" />
      <div className="subhero-content">
        <span className="section-kicker-lite">HASHA TATTOO / {kicker}</span>
        <h1>
          {title[0]}
          <br />
          <em>{title[1]}</em>
        </h1>
        <p>{lead}</p>
        {children}
      </div>
      <span className="subhero-corner">{corner}</span>
    </section>
  );
}

export function FinalCta({
  n,
  title,
  text,
  image,
  wa,
  label = "PROGRAMEAZĂ-TE PE WHATSAPP ",
}: {
  n: number;
  title: [string, string];
  text: string;
  image: string;
  wa: string;
  label?: string;
}) {
  return (
    <section className="final-cta lp-sec" id="contact-cta">
      <div className="final-cta-art">
        <img src={`/assets/${image}`} alt="" loading="lazy" />
      </div>
      <div className="final-cta-shade" />
      <div className="final-inner">
        <span className="section-kicker-lite">{num(n)} / PROGRAMARE</span>
        <h2>
          {title[0]}
          <br />
          <em>{title[1]}</em>
        </h2>
        <p>{text}</p>
        <a className="btn btn-light" href={wa} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
          {label}
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list reveal">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <span>+</span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
