import Link from "next/link";
import Footer from "@/components/sections/footer";
import JsonLd from "@/components/JsonLd";
import PainMap from "@/components/PainMap";
import { FaqList, FinalCta, PageHero, waLink } from "@/components/PageParts";
import { guideBySlug } from "@/lib/guides";
import { painLabel, painZones } from "@/lib/pain-zones";
import { SITE_URL } from "@/lib/site";

const FAQ = [
  { q: "Care sunt cele mai puțin dureroase zone pentru un tatuaj?", a: "În general, zonele cu mușchi și piele mai groasă: partea exterioară a brațului, umărul, antebrațul, coapsa, gamba și partea de sus a spatelui. De aceea sunt alese frecvent pentru un prim tatuaj." },
  { q: "Care sunt cele mai dureroase zone?", a: "De obicei, cele în care pielea este subțire și osul este aproape de suprafață sau unde se află multe terminații nervoase: coaste, subsuoară, stern, coloană, genunchi, gleznă, laba piciorului, mâini și cap. Senzația diferă de la o persoană la alta." },
  { q: "Harta durerii este valabilă pentru toată lumea?", a: "Nu. Este o scară orientativă. Durerea este subiectivă și depinde de somn, mâncare, stres, hidratare, zonă, durata ședinței și pragul tău personal. Ia harta ca ghid, nu ca promisiune." },
  { q: "De ce doare mai tare lângă os?", a: "Acolo pielea are puțin țesut între ac și os, iar vibrația se simte mai puternic. În zonele cu mușchi gros, țesutul absoarbe o parte din senzație." },
  { q: "Pot alege zona doar după cât doare?", a: "Poți s-o iei în calcul, dar nu este singurul criteriu. Contează și cât se vede tatuajul, cum se mișcă zona, cum se vindecă și cum arată în timp. Artistul te ajută să alegi o zonă potrivită ideii tale." },
  { q: "Pot folosi cremă anestezică?", a: "Nu folosi astfel de produse fără să discuți mai întâi cu artistul. Unele pot modifica textura pielii și pot afecta lucrul, iar efectul diferă de la produs la produs." },
  { q: "Ce fac dacă nu mai suport durerea în timpul ședinței?", a: "Spune-i artistului. Se poate face o pauză, se poate schimba ritmul sau se poate opri ședința și continua altă dată. Nu este un semn de slăbiciune." },
];

export default function PainMapPage() {
  const g = guideBySlug("harta-durerii")!;
  const sorted = [...painZones].sort((a, b) => a.level - b.level || a.name.localeCompare(b.name, "ro"));
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: g.metaTitle,
              description: g.metaDescription,
              url: `${SITE_URL}/ghiduri/${g.slug}`,
              inLanguage: "ro-RO",
              isPartOf: { "@type": "WebSite", name: "Hasha Tattoo", url: SITE_URL },
              datePublished: g.date,
            },
            { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Ghiduri", item: `${SITE_URL}/ghiduri` },
                { "@type": "ListItem", position: 3, name: "Harta durerii", item: `${SITE_URL}/ghiduri/${g.slug}` },
              ],
            },
          ],
        }}
      />
      <main id="main">
        <PageHero
          kicker="GHIDURI / HARTA DURERII"
          title={g.heroTitle}
          lead="Alege o zonă a corpului și vezi, orientativ, cât doare un tatuaj acolo, ce simți și ce te ajută. O scară subiectivă, fără exagerări și fără promisiuni."
          image={g.image}
          alt={g.imageAlt}
          corner="INTERACTIV / 4 MIN"
        />

        <section className="lp-sec section-pad">
          <div className="section-kicker reveal">
            <span>001 / HARTA</span>
            <span>ATINGE O ZONĂ</span>
          </div>
          <PainMap />
        </section>

        <section className="about-statement section-pad">
          <div className="section-kicker reveal">
            <span>002 / CUM CITEȘTI HARTA</span>
            <span>ORIENTATIV</span>
          </div>
          <div className="about-statement-grid">
            <h2 className="reveal">
              Durerea e personală,
              <br />
              <em>zona e un indiciu.</em>
            </h2>
            <div className="reveal">
              <p>
                Scara de la 1 la 10 compară zonele între ele, nu măsoară cât vei simți tu. Doi oameni pot descrie aceeași zonă foarte diferit, iar aceeași persoană poate simți altfel în zile diferite. Harta reflectă consensul general despre structura pielii: unde este mușchi gros se simte mai puțin, unde osul e aproape de piele sau unde sunt multe terminații nervoase se simte mai mult.
              </p>
              <p>
                Ce schimbă senzația în afară de zonă: somnul, mâncarea, hidratarea, stresul, durata ședinței și tehnica folosită. Le găsești explicate în ghidul{" "}
                <Link href="/ghiduri/cum-te-pregatesti-pentru-sedinta-de-tatuaj">cum te pregătești pentru ședința de tatuaj</Link>. Dacă ți-e teamă, citește și{" "}
                <Link href="/ghiduri/pentru-cei-care-se-tem-de-tatuaj">pentru cei care se tem de tatuaj</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="lp-sec section-pad">
          <div className="section-kicker reveal">
            <span>003 / TOATE ZONELE</span>
            <span>DE LA CEL MAI SUPORTABIL</span>
          </div>
          <table className="pm-table reveal">
            <thead>
              <tr>
                <th>ZONA</th>
                <th>DURERE ORIENTATIVĂ</th>
                <th>CE SIMȚI</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((z) => (
                <tr key={z.id}>
                  <td>{z.name}</td>
                  <td>
                    {z.level} din 10, {painLabel(z.level).toLowerCase()}
                  </td>
                  <td>{z.feel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="section-kicker reveal">
            <span>004 / ÎNTREBĂRI ȘI RĂSPUNSURI</span>
            <span>DESPRE DURERE</span>
          </div>
          <div className="faq-layout">
            <div className="faq-intro reveal">
              <h2>
                Întrebări?
                <br />
                <em>Avem răspunsuri.</em>
              </h2>
              <p>Pentru recomandări adaptate ideii și zonei tale, vorbește direct cu un artist.</p>
            </div>
            <FaqList items={FAQ} />
          </div>
        </section>

        <FinalCta
          n={5}
          title={["Ai ales zona?", "Hai să discutăm."]}
          text="Scrie-ne pe WhatsApp cu ideea și zona dorită. Un artist îți răspunde cu recomandări, o estimare de timp și un interval de programare."
          image="lucrare-8.webp"
          wa={waLink("Bună! Mă interesează un tatuaj și aș vrea să aflu mai multe despre zonă, durere și durată.")}
        />
      </main>
      <Footer />
    </>
  );
}
