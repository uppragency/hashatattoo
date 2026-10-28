import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "Bijuteria este cea mai importantă alegere dintr-un piercing, după alegerea piercerului. Ea rămâne în corp săptămâni și luni întregi, în contact permanent cu un țesut în vindecare. O bijuterie bună se vindecă fără probleme și arată bine ani de zile. Una slabă produce iritații, reacții alergice, vindecare lentă și piercinguri respinse de corp.",
    "Cu toate acestea, majoritatea oamenilor aleg bijuteria după aspect și preț, fără să știe ce înseamnă „oțel chirurgical”, „titan implant”, „filet intern” sau „calibru 1,2 mm”. Termenii par tehnici, dar sunt ușor de înțeles, iar înțelegerea lor te scutește de bani aruncați și de piercinguri stricate.",
    "Ghidul explică materialele folosite în bijuteriile de piercing, diferența dintre tipurile de închidere, cum se aleg grosimea și lungimea, ce forme se potrivesc fiecărei zone, ce să eviți și ce întrebări să pui înainte să cumperi. Informațiile sunt generale. Pentru alegerea concretă a bijuteriei tale, piercerul este cel care îți vede anatomia și îți poate recomanda cel mai bine.",
  ],
  sections: [
    {
      id: "de-ce-conteaza",
      h2: "De ce contează bijuteria",
      blocks: [
        "Un piercing nu este un orificiu, ci o rană care se vindecă în jurul bijuteriei. Țesutul se formează în jurul ei și o ia ca model. Dacă materialul irită, dacă forma nu se potrivește sau dacă mărimea este greșită, corpul reacționează: umflătură, secreții, cruste, durere, respingere.",
        { h3: "Ce depinde de bijuterie" },
        {
          ul: [
            "Vindecarea: un material bine tolerat și o mărime potrivită reduc iritația.",
            "Confortul: forma și greutatea influențează ce simți zi de zi și noaptea.",
            "Siguranța: filetul, finisajul și închiderea determină riscul de agățare, rănire sau pierdere.",
            "Aspectul: poziția, culoarea și proporțiile se văd.",
            "Durabilitatea: o bijuterie bună rezistă ani, una slabă se deteriorează.",
          ],
        },
        "Pe un site, o bijuterie de 10 lei și una de 100 de lei pot arăta identic în poză. Diferența se vede în material, în finisaj și în cum se poartă piercingul peste o lună.",
      ],
    },
    {
      id: "materiale",
      h2: "Materialele: ce înseamnă fiecare",
      blocks: [
        "Materialul este criteriul numărul unu. Contează ce eliberează în piele și cum reacționează organismul. Mai jos sunt cele mai întâlnite materiale și caracteristicile lor generale.",
        {
          table: {
            head: ["Material", "Caracteristici", "Cum se potrivește"],
            rows: [
              ["Titan de calitate implant", "Ușor, rezistent, bine tolerat de majoritatea oamenilor, fără nichel eliberabil în cantități semnificative", "Alegere frecventă pentru piercinguri proaspete, inclusiv pentru piele sensibilă"],
              ["Niobiu", "Foarte bine tolerat, se poate colora prin anodizare, ușor mai greu decât titanul", "Potrivit pentru piele sensibilă"],
              ["Aur masiv de carat ridicat (de exemplu 14k sau 18k)", "Bine tolerat dacă aliajul nu conține nichel; mai scump", "Potrivit pentru bijuterii finale, după vindecare, sau pentru piercinguri proaspete, dacă aliajul este potrivit"],
              ["Platină", "Foarte bine tolerată, foarte scumpă", "Rar folosită, alegere premium"],
              ["Oțel inoxidabil medical, în grade de implant", "Rezistent, accesibil, dar poate conține nichel; contează standardul exact", "Folosit des; contează să știi gradul și dacă ai sensibilitate la nichel"],
              ["Acrilic, bioplast, PTFE (materiale flexibile)", "Flexibile și ușoare, uzura mai rapidă, nu se sterilizează toate la fel", "Folosite la situații speciale, de exemplu temporar sau pentru perioade în care e nevoie de flexibilitate"],
              ["Bijuterii placate sau de fantezie", "Stratul exterior se uzează, iar sub el apar aliaje ieftine, adesea cu nichel", "Nu sunt potrivite pentru piercinguri proaspete"],
            ],
          },
        },
        {
          note: "Tabelul este orientativ și nu înlocuiește recomandarea piercerului. Contează standardul exact al materialului, nu doar denumirea comercială.",
          title: "De reținut",
        },
        { h3: "Titanul de calitate implant" },
        "Titanul de calitate implant este folosit în medicină, în proteze și implanturi, tocmai pentru că este bine tolerat de țesuturi. Standardele des întâlnite în piercing sunt cele pentru aliajul Ti-6Al-4V ELI (ASTM F136 sau ISO 5832-3). Dacă un vânzător spune doar „titan”, fără standard, nu știi ce primești. Un studio sau un magazin serios îți poate arăta certificatul sau fișa produsului.",
        { h3: "Niobiul" },
        "Niobiul este un metal pur, foarte bine tolerat, care se poate colora prin anodizare în nuanțe de violet, albastru, auriu, roz sau verde, fără vopsea. Culoarea este un strat de oxid, nu o acoperire. Este o alegere bună pentru cei care vor culoare și au piele sensibilă.",
        { h3: "Aurul" },
        "Aurul de 24k este prea moale pentru bijuterii. Se folosesc aliaje, cum ar fi 14k (aproximativ 58% aur) sau 18k (75% aur), iar restul metalelor din aliaj contează: unele conțin nichel, altele nu. Pentru piercinguri, se caută aur masiv, nu placat, cu un aliaj fără nichel. Aurul masiv de calitate este scump și are sens mai ales pentru bijuterii purtate mult timp.",
        { h3: "Oțelul inoxidabil" },
        "Termenul „oțel chirurgical” este folosit larg și nu garantează un anumit standard. Există oțeluri de implant, bine controlate, și oțeluri de calitate slabă, vândute sub același nume. Oțelul conține nichel în aliaj, iar la majoritatea oamenilor nu cauzează probleme, deoarece nichelul este legat în structură, dar la persoanele sensibile poate provoca reacții. Dacă ai o alergie la nichel cunoscută, oțelul nu este alegerea sigură.",
      ],
    },
    {
      id: "materiale-de-evitat",
      h2: "Ce eviți",
      blocks: [
        "Mai important decât să știi ce să cumperi este să știi ce să nu cumperi, mai ales pentru un piercing proaspăt.",
        {
          ul: [
            "Bijuteriile fără material specificat, vândute doar cu „metal” sau „aliaj”.",
            "Bijuteriile de fantezie, de la standuri, magazine de accesorii sau site-uri care vând cu prețuri foarte mici.",
            "Bijuteriile placate cu aur sau argint, care își pierd stratul și lasă la vedere metalul de dedesubt.",
            "Argintul pentru piercinguri proaspete: se oxidează, poate irita și poate colora pielea.",
            "Bijuteriile cu pietre lipite cu adeziv, care se pot desprinde sau pot capta murdărie.",
            "Bijuteriile cu suprafață zgrunțuroasă, cu urme de lustruire slabă sau cu margini ascuțite.",
            "Acrilicul sau plasticul pentru purtare îndelungată, dacă nu este un material medical.",
            "Bijuteriile deja purtate de altcineva.",
          ],
        },
        "Un semn simplu: dacă prețul pare prea bun să fie adevărat, probabil materialul nu este cel promis. O bijuterie de titan de calitate implant, bine finisată, are un cost care reflectă materialul și prelucrarea.",
      ],
    },
    {
      id: "tipuri-de-inchidere",
      h2: "Închiderea bijuteriei: filet intern, extern și fără filet",
      blocks: [
        "Felul în care se închide bijuteria influențează siguranța, confortul și riscul de iritație. Sunt trei sisteme principale.",
        {
          table: {
            head: ["Sistem", "Cum funcționează", "Avantaje", "Dezavantaje"],
            rows: [
              ["Filet intern", "Tija are filetul în interior, iar bila sau capătul se înșurubează pe un știft subțire", "Partea care trece prin piele este netedă; mai comod și mai puțin iritant la introducere", "Piesele sunt mai fragile; se poate desface dacă nu e strâns bine"],
              ["Filet extern", "Tija are filetul pe exterior, iar bila se înșurubează peste filet", "Ieftin, simplu", "Filetul trece prin orificiu și poate zgâria țesutul în vindecare; nu se recomandă pentru piercinguri noi"],
              ["Fără filet (threadless, push pin)", "Capătul se introduce prin presiune într-o tijă, fixat prin tensiunea unui știft îndoit", "Ușor de schimbat, foarte sigur dacă e bine făcut, aspect curat", "Cere o tijă și un capăt compatibile, ca grosime și ca tensiune"],
            ],
          },
        },
        "Pentru piercinguri proaspete se recomandă de obicei sistemele cu filet intern sau fără filet, deoarece partea care trece prin țesut este netedă. Filetul extern, mai ales la bijuteriile ieftine, poate răni orificiul de fiecare dată când schimbi bila.",
        { h3: "Cât de strânsă trebuie să fie bila" },
        "Bila trebuie să fie bine înșurubată, dar nu forțată. O bilă care se desface singură se pierde ușor. Verifică-ți bijuteria cu mâinile curate din când în când, mai ales în primele săptămâni, și strânge dacă e nevoie. O bijuterie fără filet trebuie să țină ferm și să nu se miște în tijă.",
      ],
    },
    {
      id: "grosime-si-lungime",
      h2: "Grosimea și lungimea: ce înseamnă calibrul",
      blocks: [
        "Grosimea bijuteriei se numește calibru și se măsoară în milimetri sau în gauge (g). În sistemul gauge, un număr mai mic înseamnă o tijă mai groasă. În metric se spune pur și simplu grosimea tijei în mm.",
        {
          table: {
            head: ["Grosime (mm)", "Echivalent gauge", "Utilizare frecventă"],
            rows: [
              ["0,8 mm", "20 g", "Piercinguri foarte fine, uneori nas, bijuterii finale delicate"],
              ["1,0 mm", "18 g", "Nas, cartilaj, piercinguri fine"],
              ["1,2 mm", "16 g", "Cartilaj, nas, buză, sprânceană, bijuterii frecvente"],
              ["1,6 mm", "14 g", "Buric, lob, cartilaj, industrial, bijuterii standard"],
              ["2,0 mm", "12 g", "Lobi mai largi, bijuterii mai groase"],
            ],
          },
        },
        "Grosimea o alege piercerul în funcție de zonă și de anatomie. Nu e un parametru pe care să-l schimbi singur: o bijuterie mai subțire decât cea cu care s-a făcut piercingul poate tăia țesutul, iar una mai groasă poate să nu intre.",
        { h3: "Lungimea" },
        "La piercingurile proaspete, bijuteria este mai lungă decât va fi nevoie la final, pentru a lăsa loc umflăturii. Pe măsură ce umflătura scade, bijuteria poate fi prea lungă și se poate mișca sau agăța. Atunci piercerul o înlocuiește cu una mai scurtă. Nu înlocui singur bijuteria cu una mai scurtă în primele săptămâni: umflătura poate reveni, iar o bijuterie strânsă blochează circulația și poate provoca incluziuni.",
        { h3: "Diametrul inelelor" },
        "La inele, diametrul interior contează: unul prea mic strânge, unul prea mare se mișcă și iritează. Un inel este de regulă purtat după vindecarea completă, nu la piercingul proaspăt, pentru că se mișcă mai mult.",
        { h3: "Cum afli mărimea corectă" },
        "Cea mai bună metodă este măsurarea de către piercer, pe anatomia ta. Dacă vrei să cumperi singur o bijuterie, ia mărimea de la bijuteria actuală sau cere piercerului să ți-o noteze. Nu ghici pe baza pozelor din magazinele online.",
      ],
    },
    {
      id: "forme-si-tipuri",
      h2: "Forme și tipuri de bijuterii",
      blocks: [
        "Aceeași zonă poate purta mai multe tipuri de bijuterii, dar nu toate sunt potrivite în perioada de vindecare. Mai jos sunt cele mai frecvente.",
        {
          table: {
            head: ["Tipul", "Descriere", "Potrivit pentru"],
            rows: [
              ["Labret (stud) cu disc plat", "Tijă dreaptă cu un disc plat pe o parte și o bilă sau un decor pe cealaltă", "Lob, cartilaj, buză, nas; confortabil la dormit"],
              ["Bară dreaptă (straight barbell)", "Tijă dreaptă cu bile la capete", "Limbă, sprânceană, unele piercinguri industriale"],
              ["Bară curbată (curved barbell)", "Tijă ușor curbată cu bile", "Sprânceană, buric, buză"],
              ["Banană pentru buric", "Tijă curbată cu o bilă mică sus și una mai mare sau un decor jos", "Buric"],
              ["Inel segment sau captive bead ring (CBR)", "Inel cu o bilă prinsă în capete", "După vindecare: nas, septum, cartilaj, buză"],
              ["Circular barbell (potcoavă)", "Inel deschis cu bile la capete", "Septum, daith, uneori cartilaj"],
              ["Bară pentru industrial", "Tijă lungă dreaptă cu două bile", "Piercing industrial în ureche"],
              ["Cârlig sau ancoră (dermal)", "Un suport implantat sub piele, cu un capăt vizibil la suprafață", "Piercing dermal, aplicat de profesionist"],
            ],
          },
        },
        "Un studio serios îți recomandă tipul de bijuterie potrivit pentru perioada de vindecare. Inelele, de exemplu, sunt mai atractive, dar se mișcă mai mult și irită mai ușor un piercing proaspăt, deci se pun de obicei după vindecare. Mai multe despre tipurile de piercing în ureche în ghidul despre [piercing în ureche](/ghiduri/piercing-ureche-ghid).",
        { h3: "Discul plat și dormitul" },
        "Pentru urechi, discul plat din partea din spate a labretului reduce presiunea când dormi pe o parte. Dacă ești dintre cei care dorm pe o parte, spune-i piercerului și alegeți împreună o bijuterie care să nu te deranjeze noaptea.",
        { h3: "Decorurile" },
        "Pietrele, bilele colorate, formele fanteziste și pandantivele se montează de obicei după vindecare. În perioada de vindecare, o bijuterie simplă, ușoară, fără părți care se pot agăța, este mai sigură. Un decor greu trage de țesut, iar unul cu margini se agață în haine, în păr sau în prosop.",
      ],
    },
    {
      id: "finisaj-si-calitate",
      h2: "Finisajul și calitatea fabricației",
      blocks: [
        "Două bijuterii din același material pot fi foarte diferite, în funcție de felul în care sunt finisate. O suprafață neuniformă, cu zgârieturi microscopice, reține bacterii și irită țesutul.",
        { h3: "Ce urmărești la o bijuterie bună" },
        {
          ul: [
            "Suprafață lucioasă, uniformă, fără zgârieturi, pori sau urme de ștanțare.",
            "Margini rotunjite, fără colțuri sau muchii.",
            "Filet curat, fără bavuri, care se înșurubează fără efort.",
            "Bile care se potrivesc exact pe tijă, fără joc.",
            "Greutate rezonabilă: o bijuterie foarte grea pentru mărimea ei poate fi dintr-un aliaj nepotrivit.",
            "Un producător sau un furnizor identificabil, nu o marcă anonimă.",
          ],
        },
        { h3: "Sterilizarea" },
        "Bijuteriile destinate piercingurilor proaspete se aplică sterile. Un studio serios scoate bijuteria dintr-un ambalaj sigilat sau o sterilizează în fața ta, într-un mod verificabil. Dacă primești o bijuterie dintr-o cutie deschisă și neambalată, întreabă cum este sterilizată.",
        { h3: "Colorarea prin anodizare" },
        "Culorile de pe titan și niobiu sunt un strat de oxid format prin anodizare, nu vopsea. Sunt sigure și durabile, dar se pot ușor modifica prin curățare agresivă sau prin uzură îndelungată. Culorile obținute prin acoperire (de exemplu PVD) sunt diferite și depind de calitatea procesului.",
      ],
    },
    {
      id: "alegerea-pe-zone",
      h2: "Bijuteria potrivită pe fiecare zonă",
      blocks: [
        "Fiecare zonă are cerințele ei. O bijuterie bună pentru lob nu este neapărat bună pentru buric sau pentru nas. Tabelul de mai jos dă o imagine de ansamblu, iar alegerea concretă o face piercerul, după ce îți vede anatomia.",
        {
          table: {
            head: ["Zona", "Forma frecventă la început", "Atenție"],
            rows: [
              ["Lob", "Labret cu disc plat sau stud simplu", "Evită bijuteriile grele sau lungi, care trag de lob"],
              ["Cartilaj (helix, tragus, conch, daith)", "Labret cu disc plat, bară sau circular barbell, în funcție de zonă", "Cartilajul se vindecă lent; nu schimba bijuteria devreme și nu dormi pe ea"],
              ["Industrial", "Bară lungă dreaptă", "Lungimea se alege după distanța dintre cele două puncte; o bară nepotrivită apasă pe cartilaj"],
              ["Buric", "Banană curbată cu bile", "Hainele strânse la talie și contactul cu centura pot irita"],
              ["Nas (nostril)", "Stud cu tijă dreaptă, cârlig sau șurub, în funcție de preferință", "Nu trage de bijuterie; șterge cu atenție fața și nasul"],
              ["Septum", "Inel segment sau potcoavă, în funcție de poziție", "Poți răsfrânge bijuteria în sus, pentru a o ascunde"],
              ["Buză", "Labret cu disc plat în interior", "Discul de pe partea interioară trebuie să nu atingă gingia; pot apărea iritații dentare"],
              ["Sprânceană", "Bară curbată", "Se poate respinge dacă este prea aproape de suprafață sau agățată"],
              ["Intim", "În funcție de zonă și de anatomie, la recomandarea piercerului", "Alege doar materiale medicale; igiena și vindecarea cer atenție specială"],
              ["Dermal", "Ancoră sau platformă implantată, cu capăt la suprafață", "Se aplică doar de un profesionist; capătul se poate schimba doar după vindecare"],
            ],
          },
        },
        "Pentru zonele cu mișcare continuă sau cu risc de agățare, o bijuterie scurtă, simplă și bine fixată este mai sigură decât una elaborată. Când piercingul se vindecă, poți trece la modele mai complexe.",
        { h3: "Buza și dinții" },
        "Piercingurile din zona gurii pot iriteze gingiile și pot afecta dinții și smalțul, mai ales dacă bijuteria este lungă și atinge dantura. Spune piercerului dacă ai probleme dentare, aparat dentar sau gingii sensibile, iar după vindecare cere să se înlocuiască bijuteria cu una cât mai scurtă. Controlul regulat la stomatolog este recomandat.",
        { h3: "Nasul și răcelile" },
        "Piercingul din nas se poate irita ușor când ai nasul înfundat sau când te ștergi des cu batista. Folosește șervețele moi și curăță blând, fără să tragi de bijuterie. În perioadele de răceală, urmărește cu atenție piercingul.",
      ],
    },
    {
      id: "greutate-si-presiune",
      h2: "Greutatea, presiunea și mișcarea",
      blocks: [
        "Un piercing nu este făcut să poarte greutate. Cu cât bijuteria este mai grea sau mai lungă, cu atât trage mai tare de țesut și cu atât crește riscul de rănire, de alungire a orificiului sau de respingere.",
        { h3: "De ce contează greutatea" },
        {
          ul: [
            "O bijuterie grea apasă constant pe același punct și poate tăia încet țesutul.",
            "Pandantivele lungi se mișcă și se agață în haine, păr sau prosoape.",
            "Presiunea prelungită slăbește țesutul și poate duce la alungirea orificiului.",
            "Bijuteria care atârnă trage în jos și poate deforma urechea sau buza.",
          ],
        },
        { h3: "Mișcarea și migrarea" },
        "Dacă bijuteria se mișcă mult în orificiu, țesutul se irită și se vindecă prost. În cazuri nefericite, piercingul poate migra, adică se mută treptat spre suprafață, până când se respinge. Semne de migrare: pielea de deasupra bijuteriei devine subțire, lucioasă sau transparentă, iar bijuteria se vede tot mai clar prin piele. Dacă observi asta, mergi la piercer: uneori este nevoie să scoți bijuteria pentru a evita o cicatrice mai mare.",
        { h3: "Cum reduci riscul" },
        {
          ul: [
            "Alege bijuterii ușoare în perioada de vindecare.",
            "Evită pandantivele și decorurile mari la piercingurile proaspete.",
            "Nu te juca cu bijuteria și nu o roti.",
            "Fii atent la păr, la căști, la haine și la prosoape.",
            "Verifică periodic starea țesutului din jurul bijuteriei.",
          ],
        },
        "Dacă îți place un decor mai mare, așteaptă vindecarea completă și alege o greutate rezonabilă. În multe cazuri, o bijuterie elegantă și ușoară arată mai bine decât una mare.",
      ],
    },
    {
      id: "preturi-si-valoare",
      h2: "Prețul bijuteriei: ce plătești de fapt",
      blocks: [
        "Prețul unei bijuterii de piercing poate varia foarte mult: de la câțiva lei la sute sau mii de lei. Nu merită să pleci de la ideea că „mai scump este mai bun”, dar nici să alegi automat cea mai ieftină.",
        { h3: "Ce intră în preț" },
        {
          ul: [
            "Materialul: titanul de implant și aurul masiv costă mai mult decât oțelul sau aliajele de fantezie.",
            "Prelucrarea: lustruirea, filetarea precisă și controlul calității cresc costul.",
            "Decorul: pietrele autentice, cristalele și modelele elaborate adaugă valoare.",
            "Brandul și certificările: producătorii serioși investesc în testare și documentare.",
            "Sterilizarea și ambalajul.",
          ],
        },
        { h3: "Cum judeci raportul calitate-preț" },
        "Dacă un magazin vinde „titan” la un preț mult sub cel al furnizorilor serioși, probabil nu este vorba despre titan de implant. Compară prețurile la bijuterii similare, de la mai mulți vânzători, și cere informații despre material. O bijuterie bună, purtată ani de zile, ajunge să coste mai puțin pe zi decât una slabă înlocuită de trei ori.",
        { h3: "Costul unei alegeri greșite" },
        "O bijuterie ieftină care provoacă o reacție poate duce la vindecare lentă, la cicatrici, la scoaterea piercingului și la cheltuieli pentru un nou piercing. Economia inițială dispare repede. De aceea, la piercingurile noi, investiția în materialul bun merită.",
        "Prețurile piercingurilor de la Hasha Tattoo, inclusiv ce include fiecare preț, sunt pe pagina de [prețuri](/preturi-tatuaje). Pentru bijuterii finale, mai elaborate, discută cu piercerul după vindecare.",
      ],
    },
    {
      id: "bijuteria-initiala-si-finala",
      h2: "Bijuteria inițială și cea finală",
      blocks: [
        "O distincție importantă: bijuteria cu care se face piercingul nu este în mod necesar cea cu care îl vei purta pe termen lung. Sunt două etape.",
        { h3: "Bijuteria inițială" },
        "Este cea pusă la momentul piercingului. Este mai lungă, mai simplă și făcută dintr-un material foarte bun, pentru că trebuie să țină cont de umflătură și să irite cât mai puțin. Aici nu cumperi pentru aspect, ci pentru vindecare.",
        { h3: "Bijuteria finală" },
        "După vindecarea completă, poți alege bijuteria cu care vrei să rămâi: mai scurtă, cu decor, inel sau formă fantezistă. Aici ai libertate mai mare, dar materialul rămâne important, pentru că o porți luni și ani.",
        { h3: "Când schimbi bijuteria" },
        "Nu schimba bijuteria înainte de vindecarea completă, decât la indicația piercerului. Un piercing poate părea vindecat la suprafață, dar țesutul de dedesubt încă se consolidează. O schimbare prea devreme poate provoca iritație și poate închide orificiul. Pentru perioada de vindecare, vezi ghidul despre [îngrijirea unui piercing nou](/ghiduri/cum-ingrijesti-un-piercing-nou).",
        { h3: "Prima schimbare" },
        "Prima schimbare este bine să o faci la studio, nu acasă, mai ales la cartilaj și la zone sensibile. Piercerul verifică vindecarea, alege mărimea potrivită și o poate face rapid, fără să iriteze.",
      ],
    },
    {
      id: "cum-cumperi",
      h2: "Cum cumperi o bijuterie sigură",
      blocks: [
        "Dacă vrei să cumperi bijuterii separat de studio, câteva reguli te protejează de produse slabe.",
        {
          ol: [
            "Alege un magazin sau un producător specializat în bijuterii de piercing, nu un magazin de accesorii.",
            "Verifică materialul exact: nu doar „titan”, ci și standardul sau gradul. Un vânzător serios îl afișează.",
            "Cere informații despre filet: intern, extern sau fără filet.",
            "Verifică dimensiunile: grosime, lungime, diametrul bilei, în mm.",
            "Compară prețul cu materialul: dacă este mult sub prețul pieței pentru titan de implant, ceva nu e în regulă.",
            "Citește recenziile, dar caută pe cele care menționează calitatea materialului, nu doar aspectul.",
            "Dacă ai îndoieli, cere părerea piercerului înainte de cumpărare. Mulți sunt bucuroși să recomande.",
          ],
        },
        "La Hasha Tattoo, pentru anumite piercinguri, bijuteria este inclusă în preț, conform listei de pe pagina de [prețuri](/preturi-tatuaje). Pentru detalii despre materiale și opțiunile disponibile, întreabă direct pe WhatsApp, înainte de programare.",
      ],
    },
    {
      id: "ingrijirea-bijuteriei",
      h2: "Cum îți îngrijești bijuteriile",
      blocks: [
        "Chiar o bijuterie de calitate se murdărește și se uzează. Câteva obiceiuri simple îi prelungesc viața și protejează pielea.",
        { h3: "Curățarea" },
        {
          ul: [
            "Spală bijuteriile scoase, cu apă caldă și săpun blând, apoi clătește bine și usucă.",
            "Pentru murdăria din filete sau din ornamente, folosește o periuță moale, curată.",
            "Dezinfectează cu o soluție recomandată pentru bijuterii înainte de a le pune, dacă piercerul ți-a spus asta.",
            "Nu folosi substanțe abrazive, înălbitor sau pastă de dinți.",
          ],
        },
        { h3: "Depozitarea" },
        "Păstrează bijuteriile separat, într-o cutie curată, pentru a nu se zgâria între ele. Bilele și piesele mici se pierd ușor, deci păstrează-le într-un recipient mic, închis.",
        { h3: "Verificarea periodică" },
        "Uită-te la bijuterie din când în când: verifică filetul, bilele și tija. Dacă observi zgârieturi, deformări sau un filet uzat, înlocuiește piesa. O bijuterie deteriorată poate răni țesutul.",
        { h3: "Bijuteriile și somnul, sportul, apa" },
        "Nu dormi și nu face sport cu bijuterii mari sau cu pandantive, în special în primele luni. Evită parfumurile, spray-urile de păr și produsele cosmetice aplicate direct pe zona piercingului. Detalii pentru sport în ghidul despre [tatuaj și sport](/ghiduri/tatuajul-si-sportul).",
      ],
    },
    {
      id: "situatii-speciale",
      h2: "Situații speciale",
      blocks: [
        { h3: "Alergie la nichel sau piele sensibilă" },
        "Alege titan de calitate implant sau niobiu și informează piercerul despre alergie. Evită bijuteriile fără material specificat. Mai multe în ghidul despre [alergii și piele sensibilă](/ghiduri/alergii-si-piele-sensibila).",
        { h3: "Sarcina" },
        "Dacă rămâi însărcinată cu un piercing purtat, în special la buric, bijuteria poate deveni incomodă pe măsură ce abdomenul crește. Există bijuterii flexibile, dintr-un material medical, concepute pentru această perioadă. Discută cu piercerul și cu medicul tău.",
        { h3: "Intervenții medicale" },
        "Pentru anumite investigații, cum ar fi radiografiile, unele proceduri sau operațiile, bijuteria trebuie scoasă sau înlocuită temporar cu una nemetalică. Anunță personalul medical că ai piercing și discută din timp, ca să nu se închidă orificiul.",
        { h3: "Piercinguri vechi, nepurtate" },
        "Un piercing vechi, în care nu ai mai purtat bijuterie, se poate închide parțial sau complet. Nu forța bijuteria prin orificiu: se poate răni țesutul. Mergi la un piercer care evaluează situația.",
        { h3: "Copii mici și bijuterii" },
        "Pentru piercinguri ale copiilor, vezi ghidul separat despre [piercing la minori](/ghiduri/piercing-la-minori-reguli-si-acordul-parintilor).",
      ],
    },
    {
      id: "greseli-frecvente",
      h2: "Greșeli frecvente",
      blocks: [
        {
          ul: [
            "Alegerea bijuteriei după preț sau după aspect, fără să întrebi de material.",
            "Schimbarea bijuteriei înainte de vindecarea completă.",
            "Montarea unei bijuterii prea scurte pe un piercing proaspăt umflat.",
            "Folosirea filetului extern pe piercinguri noi.",
            "Cumpărarea bijuteriilor de la standuri sau din magazine de accesorii.",
            "Forțarea unei bijuterii prin orificiu după o perioadă în care nu a fost purtată.",
            "Purtarea bijuteriilor grele sau a pandantivelor la un piercing proaspăt.",
            "Împrumutarea sau purtarea bijuteriilor altor persoane.",
          ],
        },
        "Dacă ai făcut deja una dintre aceste greșeli și piercingul se irită, scoate temporar produsul în cauză, curăță blând și cere sfatul unui piercer. Dacă apar semne de infecție, mergi la medic.",
      ],
    },
    {
      id: "lista-de-verificare",
      h2: "Lista de verificare înainte de a cumpăra",
      blocks: [
        {
          ul: [
            "Materialul este specificat clar, cu standardul sau certificatul producătorului.",
            "Bijuteria are suprafața fină, fără zgârieturi sau muchii ascuțite.",
            "Mărimea (calibru, lungime, diametru) se potrivește zonei și stadiului de vindecare.",
            "Ai întrebat piercerul dacă bijuteria este potrivită pentru zona ta.",
            "Nu cumperi bijuterii de la surse care nu pot indica materialul.",
          ],
        },
        "Dacă un vânzător nu poate spune din ce material este făcută bijuteria, treci mai departe.",
      ],
    },
  ],
  faq: [
    {
      q: "Ce material este cel mai bun pentru un piercing nou?",
      a: "Pentru piercinguri proaspete se folosesc de obicei titan de calitate implant sau niobiu, materiale bine tolerate de majoritatea oamenilor, inclusiv de cei cu piele sensibilă. Întreabă piercerul ce material folosește și cere detalii despre standard.",
    },
    {
      q: "Aurul este mai bun decât titanul?",
      a: "Nu neapărat. Aurul masiv de carat ridicat și cu aliaj fără nichel este bine tolerat, dar este scump și nu se potrivește oricui. Titanul de calitate implant este o alegere practică și sigură pentru piercingurile proaspete.",
    },
    {
      q: "Ce înseamnă oțel chirurgical?",
      a: "Este un termen comercial care nu garantează un standard anume. Există oțeluri de calitate, folosite în medicină, și oțeluri de calitate slabă, vândute sub același nume. Dacă ai alergie la nichel, oțelul nu este alegerea cea mai sigură.",
    },
    {
      q: "Ce este filetul intern și de ce contează?",
      a: "La filetul intern, partea filetată se află în interiorul tijei, iar piesa care trece prin piele este netedă. La filetul extern, filetul trece prin orificiu și poate zgâria țesutul. Filetul intern sau sistemul fără filet este preferat pentru piercingurile noi.",
    },
    {
      q: "Pot să-mi cumpăr singur bijuteria?",
      a: "Poți, dar alege un magazin specializat, verifică materialul exact și mărimea și, la piercingurile proaspete, cere părerea piercerului. Bijuteria inițială este mai bine aleasă împreună cu el.",
    },
    {
      q: "Când pot schimba bijuteria?",
      a: "Nu înainte de vindecarea completă, decât la indicația piercerului. Un piercing poate părea vindecat la suprafață și să nu fie încă stabil în interior. Prima schimbare e bine să se facă la studio.",
    },
    {
      q: "De ce nu pun inel la un piercing nou?",
      a: "Inelul se mișcă mai mult și irită mai ușor un piercing proaspăt. De obicei se montează o bară sau un labret, iar inelul se pune după vindecare.",
    },
    {
      q: "Ce grosime are bijuteria obișnuită?",
      a: "Depinde de zonă. Frecvent se folosesc 1,2 mm sau 1,6 mm la cartilaj, buric și lob, și 1,0 mm sau 1,2 mm la nas. Piercerul alege grosimea în funcție de anatomia ta.",
    },
    {
      q: "Pot dormi cu bijuteria în ureche?",
      a: "Da, dar pentru urechi este mai confortabil un labret cu disc plat, mai ales dacă dormi pe o parte. Spune-i piercerului cum dormi, ca să aleagă o bijuterie potrivită.",
    },
    {
      q: "Bijuteria este inclusă în prețul piercingului?",
      a: "La Hasha Tattoo, bijuteria este inclusă pentru piercingurile intim și dermal, conform listei de prețuri. Pentru celelalte tipuri, întreabă pe WhatsApp ce opțiuni există.",
    },
    {
      q: "Cum mă programez la Hasha Tattoo?",
      a: "Scrie-ne pe WhatsApp la +40 766 422 219, cu zona dorită. Poți suna și luni până vineri, între 12:00 și 20:00.",
    },
  ],
  cta: {
    title: ["Alegem împreună", "bijuteria potrivită."],
    text: "Scrie-ne zona piercingului, eventualele alergii și ce stil îți place. Îți spunem ce se potrivește anatomiei tale și cum se vindecă mai bine.",
    wa: "Bună! Vreau să fac un piercing la Hasha Tattoo și aș vrea să discutăm despre bijuteria potrivită.",
  },
  related: ["piercing-ureche-ghid", "cum-ingrijesti-un-piercing-nou", "alergii-si-piele-sensibila"],
};

export default content;
