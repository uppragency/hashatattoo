import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/sections/footer";
import SiteSearch from "@/components/SiteSearch";
import { waLink } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Pagina nu a fost găsită | Hasha Tattoo",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/tatuaje", k: "TATUAJE", t: "Realism, black and grey, portrete, mâneci." },
  { href: "/piercing", k: "PIERCING", t: "Ureche, buric, nas și alte zone." },
  { href: "/preturi", k: "PREȚURI", t: "Lista de prețuri și cum se calculează." },
  { href: "/ghiduri", k: "GHIDURI", t: "Pregătire, îngrijire, alegerea stilului." },
];

export default function NotFound() {
  return (
    <>
      <main id="main" className="nf section-pad">
        <span className="section-kicker-lite">HASHA TATTOO / EROARE 404</span>
        <h1>
          Pagina nu
          <br />
          <em>a fost găsită.</em>
        </h1>
        <p>Linkul poate fi vechi sau scris greșit. Caută ce îți trebuie sau alege una dintre paginile de mai jos.</p>
        <SiteSearch />
        <div className="nf-grid">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              <small>{l.k}</small>
              <span>{l.t}</span>
              <b>↗</b>
            </Link>
          ))}
        </div>
        <div className="nf-cta">
          <a className="btn btn-light" href={waLink("Bună! Nu am găsit ce căutam pe site.")} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
            {"SCRIE-NE PE WHATSAPP "}
            <span>↗</span>
          </a>
          <Link className="btn btn-outline" href="/">
            {"ÎNAPOI ACASĂ "}
            <span>↗</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
