import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import { FaqList, FinalCta, PageHero, num, waLink } from "@/components/PageParts";
import { landingBySlug } from "@/lib/landing";
import { SITE_URL } from "@/lib/site";

const tat = landingBySlug("tatuaje")!.faq;
const pier = landingBySlug("piercing")!.faq;
const isGeneral = (q: string) => q.startsWith("Cum mă programez") || q.startsWith("Cât costă");

const GENERAL = [
  { q: "Cum mă programez?", a: "Cel mai simplu este pe WhatsApp, la +40 766 422 219. Ne spui ideea, zona corpului și, dacă ai, imagini de referință. Poți suna și luni până vineri, între 12:00 și 20:00." },
  { q: "Care este programul studioului?", a: "Lucrăm de luni până vineri, între 12:00 și 20:00. Sâmbăta și duminica studioul este închis." },
  { q: "Unde se află studioul?", a: "Pe Bulevardul Mărășești nr. 80, Sector 4, București, într-un spațiu privat, într-o zonă centrală." },
  ...tat.filter((f) => f.q.startsWith("Cât costă")),
  ...pier.filter((f) => f.q.startsWith("Cât costă")),
  { q: "Pot trimite imagini de referință?", a: "Da. Pe WhatsApp poți trimite fotografii, schițe sau idei. Artistul le folosește ca punct de plecare pentru design." },
];

const GROUPS = [
  { id: "programare", label: "PROGRAMARE ȘI PREȚURI", title: ["Programare", "și prețuri."], text: "Cum ajungi la o programare, când lucrăm și cât costă.", items: GENERAL },
  { id: "tatuaje", label: "TATUAJE", title: ["Despre", "tatuaje."], text: "De la prima idee la îngrijirea tatuajului nou.", items: tat.filter((f) => !isGeneral(f.q)), more: { href: "/tatuaje", label: "TOT DESPRE TATUAJE " } },
  { id: "piercing", label: "PIERCING", title: ["Despre", "piercing."], text: "Alegerea locului și a bijuteriei, infecții, curățare și vindecare.", items: pier.filter((f) => !isGeneral(f.q)), more: { href: "/piercing", label: "TOT DESPRE PIERCING " } },
];

export default function FaqPage() {
  const all = GROUPS.flatMap((g) => g.items);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "FAQPage", mainEntity: all.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Întrebări frecvente", item: `${SITE_URL}/intrebari-frecvente` },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker="ÎNTREBĂRI FRECVENTE"
          title={["Întrebări?", "Avem răspunsuri."]}
          lead="Am strâns într-un loc cele mai frecvente întrebări despre programare, prețuri, tatuaje, piercing și îngrijire. Dacă nu o găsești pe a ta, scrie-ne pe WhatsApp."
          image="pierce-3.webp"
          alt="Piercing industrial în ureche, realizat la Hasha Tattoo"
          corner={`${all.length} RĂSPUNSURI`}
        />
        <nav className="lp-anchors section-pad" aria-label="Categorii de întrebări">
          {GROUPS.map((g) => (
            <a key={g.id} href={`#${g.id}`}>
              {g.label}
            </a>
          ))}
        </nav>
        {GROUPS.map((g, i) => (
          <section className="faq-section lp-faq-group section-pad lp-sec" id={g.id} key={g.id}>
            <div className="section-kicker reveal">
              <span>
                {num(i + 1)} / {g.label}
              </span>
              <span>{g.items.length} RĂSPUNSURI</span>
            </div>
            <div className="faq-layout">
              <div className="faq-intro reveal">
                <h2>
                  {g.title[0]}
                  <br />
                  <em>{g.title[1]}</em>
                </h2>
                <p>{g.text}</p>
                {g.more ? (
                  <Link className="text-arrow" href={g.more.href}>
                    {g.more.label}
                    <span>↗︎</span>
                  </Link>
                ) : (
                  <Link className="text-arrow" href="/preturi">
                    {"VEZI PREȚURILE "}
                    <span>↗︎</span>
                  </Link>
                )}
              </div>
              <FaqList items={g.items} />
            </div>
          </section>
        ))}
        <FinalCta
          n={4}
          title={["Nu ai găsit", "răspunsul?"]}
          text="Scrie-ne pe WhatsApp, iar un artist îți răspunde cu recomandări adaptate lucrării tale."
          image="pierce-8.webp"
          wa={waLink("Bună! Am o întrebare pentru Hasha Tattoo.")}
          label="ÎNTREABĂ PE WHATSAPP "
        />
      </main>
      <Footer />
    </>
  );
}
