import type { Metadata } from "next";
import Footer from "@/components/sections/footer";
import SiteSearch from "@/components/SiteSearch";

export const metadata: Metadata = {
  title: "Căutare | Hasha Tattoo",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cauta" },
};

export default function Page() {
  return (
    <>
      <main id="main" className="nf section-pad">
        <span className="section-kicker-lite">HASHA TATTOO / CĂUTARE</span>
        <h1>
          Ce cauți
          <br />
          <em>pe site?</em>
        </h1>
        <p>Scrie un cuvânt: un serviciu, o zonă, o întrebare. Rezultatele apar pe măsură ce scrii.</p>
        <SiteSearch />
      </main>
      <Footer />
    </>
  );
}
