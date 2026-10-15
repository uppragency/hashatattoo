import type { ReactNode } from "react";
import { BUSINESS, type LegalSection } from "@/lib/legal";
import Footer from "@/components/sections/footer";

export default function LegalPage({
  kicker,
  title,
  intro,
  sections,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  children?: ReactNode;
}) {
  return (
    <>
      <main id="main" className="legal-page section-pad">
        <div className="section-kicker">
          <span>{kicker}</span>
          <span>ULTIMA ACTUALIZARE: {BUSINESS.updated.toUpperCase()}</span>
        </div>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        <div className="legal-body">
          {sections.map((s, i) => (
            <section key={s.title}>
              <h2>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {s.items && (
                <ul>
                  {s.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              )}
              {s.extra}
            </section>
          ))}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
