import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "Alergiile și pielea sensibilă sunt printre cele mai frecvente motive de ezitare înainte de un tatuaj sau de un piercing. Oamenii se întreabă dacă o alergie la nichel le strică piercingul, dacă eczema le permite un tatuaj, dacă o piele care se irită ușor poate suporta ace și cerneală și ce se întâmplă dacă reacționează rău după. Sunt întrebări legitime, iar răspunsul corect nu este nici „nu e nicio problemă”, nici „nu ai voie”.",
    "În realitate, majoritatea persoanelor cu piele sensibilă pot avea tatuaje și piercinguri, cu pregătire și cu alegeri potrivite: bijuterii dintr-un material compatibil, produse de îngrijire simple, ședințe planificate în perioade în care pielea este calmă și o comunicare deschisă cu artistul. Există însă și situații în care răspunsul medicului contează și în care amânarea sau renunțarea este alegerea sigură.",
    "Ghidul de față explică ce înseamnă alergie, iritație și sensibilitate, ce reacții pot apărea la tatuaj și la piercing, ce spui artistului înainte de ședință, cum alegi materialele, cum te îngrijești și când mergi la medic. Textul este educativ și nu înlocuiește consultul medical. Dacă ai o afecțiune diagnosticată, o alergie severă sau iei tratamente, discută cu medicul tău înainte să programezi.",
  ],
  sections: [
    {
      id: "alergie-iritatie-sensibilitate",
      h2: "Alergie, iritație și piele sensibilă: diferența",
      blocks: [
        "Cele trei noțiuni se confundă des, dar înseamnă lucruri diferite, iar diferența contează când discuți cu artistul sau cu medicul.",
        {
          table: {
            head: ["Noțiunea", "Ce este", "Exemplu"],
            rows: [
              ["Iritația", "Reacție directă a pielii la o substanță sau la frecare, care apare la majoritatea oamenilor dacă expunerea este suficientă", "Roșeața după spălarea cu un produs agresiv sau după frecarea unei haine"],
              ["Alergia (dermatita de contact alergică)", "Reacție a sistemului imunitar la o substanță cu care ai mai avut contact, care apare doar la unele persoane", "Erupție și mâncărime la locul unde bijuteria cu nichel atinge pielea"],
              ["Pielea sensibilă", "O piele care reacționează mai ușor la factori externi, fără neapărat o alergie", "Piele care se înroșește la schimbări de temperatură sau la produse cosmetice"],
              ["Afecțiunea de piele", "Boală diagnosticată de medic", "Eczemă (dermatită atopică), psoriazis, rozacee"],
            ],
          },
        },
        "O reacție poate apărea imediat sau după zile. O reacție alergică la o bijuterie, de exemplu, se instalează adesea în câteva zile sau săptămâni și se agravează la fiecare contact. Iritația dispare de obicei când cauza dispare.",
        {
          note: "Nu pune singur diagnosticul. Roșeața, mâncărimea și umflătura pot veni din alergie, iritație, infecție sau din procesul normal de vindecare. Dacă ai o îndoială, cere sfatul unui medic, mai ales dacă simptomele se agravează.",
          title: "Important",
        },
      ],
    },
    {
      id: "reactii-la-tatuaj",
      h2: "Ce reacții pot apărea la un tatuaj",
      blocks: [
        "Un tatuaj nou provoacă întotdeauna o reacție normală: roșeață, sensibilitate, o ușoară umflătură și, mai târziu, mâncărime. Aceasta nu este alergie, ci răspunsul pielii la procedură. Reacțiile de care ne ocupăm aici depășesc acest tipar.",
        { h3: "Reacții la cerneală" },
        "Foarte rar, pielea poate reacționa la unul dintre pigmenții din cerneală. Reacția poate apărea la câteva zile sau chiar la luni sau ani după tatuaj și se manifestă de obicei doar în zona unei anumite culori. Semnele pot include mâncărime persistentă, zone ridicate sau dure, descuamare, roșeață care reapare sau erupții localizate pe o singură culoare. O asemenea reacție cere consult medical, de preferință la un dermatolog.",
        { h3: "Reacții la produsele de îngrijire" },
        "Mult mai frecvent decât alergia la cerneală este iritația provocată de produsele de îngrijire: cremele cu parfum, uleiurile, unguentele aplicate în strat gros, săpunurile agresive. Dacă tatuajul se irită după ce începi să folosești un produs, oprește produsul și cere sfatul artistului sau al medicului.",
        { h3: "Reacții la materialele auxiliare" },
        "Pansamentele, benzile adezive, mănușile din latex și dezinfectanții pot provoca reacții la persoanele sensibile. Dacă știi că ai o alergie la latex, la adeziv sau la un dezinfectant, spune-i artistului înainte de ședință, ca să folosească alternative potrivite.",
        { h3: "Alte reacții posibile" },
        {
          ul: [
            "Cicatrici ridicate sau cheloide, la persoanele predispuse. Dacă ai antecedente de cicatrici cheloide, discută cu medicul și cu artistul înainte de orice tatuaj sau piercing.",
            "Infecții, care nu sunt alergii, dar pot fi confundate cu ele. Semne: durere care crește, căldură, puroi, febră.",
            "Reacții ale pielii în zone cu eczemă, psoriazis sau alte afecțiuni, în special în perioadele de activitate a bolii.",
          ],
        },
        "Dacă ai avut vreodată o reacție la un tatuaj sau la un produs aplicat pe piele, spune-i artistului. Informația îl ajută să te sfătuiască și să aleagă produse sau tehnici potrivite.",
      ],
    },
    {
      id: "reactii-la-piercing",
      h2: "Ce reacții pot apărea la un piercing",
      blocks: [
        "Piercingul are o problemă specifică: bijuteria rămâne în piele săptămâni și luni întregi. Orice material care eliberează ioni sau care irită pielea acționează constant, deci reacțiile sunt mai frecvente decât la tatuaj.",
        { h3: "Alergia la nichel" },
        "Nichelul este cel mai frecvent alergen de contact din bijuterii. Se găsește în multe aliaje ieftine, în „oțelul” de calitate slabă și în bijuteriile de fantezie. Reacția tipică este mâncărime, roșeață, umflătură, uneori secreții sau cruste în jurul piercingului, uneori și apariția unei erupții în zona din jur. Dacă ai știut dintotdeauna că „nu suporți bijuteriile ieftine”, e posibil să fii sensibil la nichel.",
        { h3: "Materiale mai bine tolerate" },
        "Pentru piercingurile proaspete se folosesc de obicei materiale destinate implantului, cu conținut foarte mic sau nul de nichel eliberabil. Cel mai des întâlnite sunt titanul de calitate implant, niobiul și aurul de carat ridicat. Exact ce material se folosește la un studio, în ce grad și cu ce certificare, este o întrebare pe care o pui direct piercerului. Un studio serios îți răspunde fără să ezite și îți arată bijuteria sau certificatul. Detalii despre materiale găsești în ghidul despre [cum alegi bijuteria de piercing](/ghiduri/cum-alegi-bijuteria-de-piercing).",
        { h3: "Alte reacții la piercing" },
        {
          ul: [
            "Iritație mecanică: bijuterie prea strânsă, prea scurtă după umflătură, lovită sau agățată.",
            "Reacție la produsele de curățare: dezinfectanți agresivi, alcool, produse cu parfum.",
            "Granulom sau umflătură în zona piercingului, de obicei în cartilaj, legat de iritație prelungită.",
            "Infecție, mai frecventă dacă piercingul este atins cu mâinile murdare sau expus la apă murdară.",
          ],
        },
        "Mai multe despre diferența dintre iritație și infecție în ghidul despre [îngrijirea unui piercing nou](/ghiduri/cum-ingrijesti-un-piercing-nou).",
      ],
    },
    {
      id: "ce-spui-artistului",
      h2: "Ce îi spui artistului înainte de ședință",
      blocks: [
        "O comunicare deschisă cu artistul sau cu piercerul este cea mai importantă măsură de siguranță pe care o poți lua. Nu este nimic jenant în a-ți spune istoricul medical: ei au auzit totul și au nevoie de aceste informații ca să lucreze în siguranță.",
        { h3: "Lista de lucruri de spus" },
        {
          ul: [
            "Alergiile cunoscute: la nichel, latex, adezivi, anestezice locale, antibiotice, cosmetice sau alte substanțe.",
            "Afecțiunile de piele diagnosticate: eczemă, psoriazis, acnee severă, rozacee, dermatită de contact.",
            "Antecedentele de cicatrici: cheloide sau cicatrici hipertrofice.",
            "Afecțiunile generale care influențează vindecarea: diabet, boli autoimune, afecțiuni de coagulare, boli cardiace sau tratamente care slăbesc imunitatea.",
            "Medicamentele pe care le iei: anticoagulante, cortizon, imunosupresoare, retinoizi pentru piele și altele.",
            "Sarcina sau alăptarea.",
            "Reacțiile anterioare la tatuaje sau piercinguri, dacă ai mai avut.",
            "Orice leziune din zona planificată: alunițe, bășici, răni, zone iritate.",
          ],
        },
        "Dacă lista este lungă, nu te sperie. Nu înseamnă automat „nu”, ci „hai să discutăm cu atenție”. Pentru o parte din situații, artistul poate cere un acord scris al medicului.",
        { h3: "Ce poate cere artistul" },
        "Un artist responsabil poate cere un acord medical pentru anumite afecțiuni, poate amâna ședința dacă pielea este iritată sau poate refuza o lucrare dacă riscul este prea mare. Nu este abuz, ci responsabilitate. Dacă vrei un tatuaj și medicul îți spune să aștepți, are sens să aștepți.",
        { h3: "Formularul și consimțământul" },
        "La majoritatea studiourilor, completezi un formular cu întrebări despre sănătate. Completează-l complet și onest. O informație omisă poate afecta siguranța ta și a procedurii.",
      ],
    },
    {
      id: "materiale-si-produse",
      h2: "Materiale, produse și alegeri pentru piele sensibilă",
      blocks: [
        "Dacă ai piele sensibilă, alegerile mici contează. Nu există un set universal, dar câteva principii ajută.",
        { h3: "Bijuteria" },
        {
          ul: [
            "Alege materiale cu reputație bună pentru piercingurile proaspete, de exemplu titan de calitate implant sau niobiu.",
            "Cere informații despre materialul exact și despre certificare.",
            "Evită bijuteriile de fantezie, de pe site-uri necunoscute sau fără indicarea materialului.",
            "Nu schimba bijuteria cu una necunoscută înainte de vindecarea completă.",
          ],
        },
        { h3: "Produsele de îngrijire" },
        {
          ul: [
            "Alege produse simple, fără parfum și fără coloranți, recomandate de artist.",
            "Evită produsele noi pe zona proaspătă: schimbă un singur lucru o dată, ca să știi ce a provocat o eventuală reacție.",
            "Nu folosi alcool, apă oxigenată sau uleiuri pe un piercing proaspăt, decât la indicația specialistului.",
            "Nu aplica unguente în strat gros, care rețin umezeala.",
          ],
        },
        { h3: "Hainele și lenjeria" },
        "Hainele din bumbac, spălate cu detergent fără parfum puternic, sunt mai blânde cu pielea sensibilă. Lenjeria curată, schimbată regulat, ajută în primele zile după tatuaj. Evită materialele sintetice strânse în zona proaspătă.",
        { h3: "Testul de toleranță" },
        "Dacă ai piele foarte reactivă sau ai avut reacții la produse, întreabă dacă poți testa produsul de îngrijire pe o zonă mică, pe antebraț, cu câteva zile înainte. Un test simplu poate evita o reacție pe o zonă proaspăt tatuată. Dacă vrei un test al pielii pentru cerneală sau pentru bijuterie, întreabă studioul ce poate oferi și ce nu. Nu orice studio face astfel de teste, iar un test nu garantează absența unei reacții viitoare.",
      ],
    },
    {
      id: "afectiuni-de-piele",
      h2: "Afecțiuni de piele: eczemă, psoriazis, acnee, rozacee",
      blocks: [
        "Afecțiunile cronice de piele nu înseamnă automat că nu poți avea un tatuaj, dar cer atenție și planificare. Regula cea mai importantă: nu se tatuează pe piele cu leziuni active.",
        {
          table: {
            head: ["Afecțiune", "Ce trebuie să știi", "Abordare prudentă"],
            rows: [
              ["Eczemă (dermatită atopică)", "Pielea poate fi uscată, iritabilă și poate reacționa în puseuri", "Nu tatua în zone cu eczemă activă; discută cu medicul și programează în perioade de remisie"],
              ["Psoriazis", "Pielea poate reacționa la traumatism cu apariția de plăci noi în zona respectivă (fenomen Koebner)", "Cere sfatul dermatologului; evită zonele cu plăci; informează artistul"],
              ["Acnee severă", "Pielea inflamată și leziunile active nu sunt potrivite pentru ace", "Evită zonele afectate; amână până la calmare"],
              ["Rozacee", "Pielea poate fi foarte reactivă la căldură, frecare și produse", "Discută cu dermatologul, mai ales pentru fața și gâtul"],
              ["Vitiligo", "Zonele depigmentate pot reacționa diferit", "Cere sfatul dermatologului"],
              ["Cheloide sau cicatrici ridicate", "Pot apărea cicatrici excesive după orice traumatism al pielii", "Cere sfatul medicului înainte de orice tatuaj sau piercing"],
            ],
          },
        },
        "Tabelul de mai sus este informativ. Decizia revine medicului tău și artistului, care văd pielea concret. Dacă ai o afecțiune activă, nu forța o ședință: un tatuaj pe piele iritată se vindecă mai greu și arată mai rău.",
      ],
    },
    {
      id: "afectiuni-generale-si-medicamente",
      h2: "Afecțiuni generale și medicamente",
      blocks: [
        "Nu doar pielea contează. Anumite afecțiuni generale și medicamente influențează modul în care corpul se vindecă și cât de mult sângerezi în timpul procedurii.",
        { h3: "Diabetul" },
        "Un diabet bine controlat nu exclude un tatuaj sau un piercing, dar vindecarea poate fi mai lentă, iar riscul de infecție mai mare. Discută cu medicul diabetolog înainte de programare și spune-i artistului. În perioadele cu glicemie dezechilibrată, amână procedura.",
        { h3: "Medicamentele care subțiază sângele" },
        "Anticoagulantele și antiagregantele cresc sângerarea. Nu opri niciodată un tratament pe cont propriu pentru a face un tatuaj. Discută cu medicul și spune-i artistului ce iei. Uneori ședința se amână sau se planifică altfel.",
        { h3: "Cortizon, imunosupresoare și boli autoimune" },
        "Aceste tratamente și afecțiuni pot încetini vindecarea și crește riscul de infecție. Cere avizul medicului curant înainte de orice procedură care rupe pielea.",
        { h3: "Retinoizii pentru piele" },
        "Tratamentele cu retinoizi, în special cele administrate pe cale orală, subțiază și fragilizează pielea. Medicul dermatolog îți poate spune cât timp după încheierea tratamentului este bine să aștepți. Nu începe un tatuaj pe durata tratamentului fără acordul medicului.",
        { h3: "Sarcina și alăptarea" },
        "Majoritatea artiștilor responsabili refuză tatuajele și piercingurile în timpul sarcinii și al alăptării. Motivul este lipsa datelor privind siguranța și riscul de infecție. Dacă ești însărcinată sau alăptezi, amână procedura.",
        { h3: "Boli infecțioase și transmisibile" },
        "Dacă ai o boală transmisibilă prin sânge, spune-i artistului, pentru ca el să ia măsurile de protecție necesare. Informația este tratată confidențial. Un studio care respectă normele de igienă lucrează oricum cu echipament de unică folosință și sterilizat pentru toți clienții.",
        {
          note: "Nu schimba și nu opri niciun medicament pe cont propriu pentru un tatuaj sau un piercing. Orice decizie legată de tratamente se ia numai cu medicul curant.",
          title: "Foarte important",
        },
      ],
    },
    {
      id: "piercing-si-piele-sensibila",
      h2: "Piercingul pe piele sensibilă: alegeri practice",
      blocks: [
        "Dacă ai piele sensibilă și vrei un piercing, nu înseamnă că nu se poate. Înseamnă că alegerile contează mai mult decât la un om fără sensibilități: locul, materialul, momentul și îngrijirea.",
        { h3: "Alegerea zonei" },
        "Unele zone sunt mai tolerante decât altele. Lobul urechii, cu țesut moale și circulație bună, este de obicei mai iertător decât cartilajul, care se vindecă mai lent și reacționează mai ușor la iritație. Zonele supuse frecării constante, cum ar fi buricul sau nasul, cer mai multă atenție. Dacă pielea ta este foarte reactivă, începe cu o zonă mai ușoară și vezi cum reacționezi.",
        { h3: "Bijuteria inițială" },
        "Bijuteria pusă la piercing este cea pe care o porți săptămâni sau luni. De aceea merită să fie cea mai bună pe care ți-o permiți, nu cea mai ieftină. Un studio serios discută cu tine despre material și îți explică de ce a ales-o. Pentru prețurile practicate la Hasha Tattoo, vezi pagina de [prețuri](/preturi), unde bijuteria este inclusă pentru anumite tipuri de piercing.",
        { h3: "Dimensiunea și forma" },
        "O bijuterie prea scurtă strânge pielea când apare umflătura și provoacă iritație. Una prea lungă se mișcă și se agață. Piercerul alege lungimea în funcție de anatomia ta și de umflătura așteptată. Nu schimba singur bijuteria cu una mai mică sau mai mare în perioada de vindecare, fără sfatul lui.",
        { h3: "Închiderea bijuteriei" },
        "Pentru pielea sensibilă contează și tipul de închidere: unele modele au filet intern, adică partea filetată nu trece prin orificiul din piele, iar altele au filet extern, care poate zgâria pielea la introducere. Întreabă piercerul ce tip de închidere folosește și de ce.",
        { h3: "Timpul de vindecare" },
        "La pielea sensibilă, vindecarea poate fi mai lungă și mai capricioasă. Nu te grăbi să schimbi bijuteria și nu compara cu alții. Dacă piercingul pare calm și fără secreții, dar nu s-a vindecat complet, mai așteaptă. Dacă ai întrebări legate de momentul schimbării, scrie-ne.",
      ],
    },
    {
      id: "intrebari-pentru-studio",
      h2: "Întrebări de pus unui studio dacă ai alergii",
      blocks: [
        "Alegerea studioului contează mai mult atunci când ai o sensibilitate. Nu e nevoie să interoghezi pe nimeni, dar câteva întrebări simple îți arată cât de serios este locul.",
        {
          ol: [
            "Din ce material este bijuteria pe care o folosiți la piercingurile proaspete și puteți să-mi arătați certificarea?",
            "Folosiți mănuși fără latex, dacă am o alergie la latex?",
            "Ce produse recomandați pentru îngrijire și de ce?",
            "Ce faceți dacă am o reacție după procedură? Mă pot scrie și îmi răspundeți?",
            "Aveți un formular de sănătate și cum este tratată confidențialitatea informațiilor?",
            "Folosiți ace și accesorii de unică folosință, sterile, desfăcute în fața mea?",
            "Ce recomandați dacă am o afecțiune de piele sau iau tratamente?",
          ],
        },
        "Un studio care răspunde clar, fără grabă și fără iritare, este un semn bun. Un răspuns evaziv sau o ușoară ridicare din umeri la întrebarea despre materiale este un semnal de alarmă. La Hasha Tattoo poți pune aceste întrebări pe WhatsApp, înainte de programare, la +40 766 422 219.",
        { h3: "Semne că un studio își ia în serios sănătatea" },
        {
          ul: [
            "Are un formular de sănătate și îți pune întrebări despre alergii și afecțiuni.",
            "Lucrează cu echipament de unică folosință și îl deschide în fața ta.",
            "Îți explică pașii de îngrijire și îți dă instrucțiuni clare, nu doar „ai grijă”.",
            "Îți spune când trebuie să amâni sau să consulți un medic.",
            "Poate răspunde la întrebări despre materiale fără să ocolească.",
          ],
        },
      ],
    },
    {
      id: "patch-test-si-gradat",
      h2: "Testul pe piele și abordarea treptată",
      blocks: [
        "Dacă ai o piele foarte reactivă și te temi de o reacție, o abordare treptată reduce riscul. Nu garantează nimic, dar îți oferă mai multe informații.",
        { h3: "Testul de contact pentru produse" },
        "Poți testa produsul de îngrijire pe o zonă mică din interiorul antebrațului, de două ori pe zi, timp de câteva zile. Dacă apar roșeață, mâncărime sau erupție, nu îl folosi pe tatuaj sau piercing. Este un test simplu pentru produse cosmetice, nu pentru cerneală sau pentru bijuterie.",
        { h3: "Testul alergologic" },
        "Dacă bănuiești o alergie la nichel sau la alte metale, un dermatolog sau un alergolog poate face teste epicutanate (patch tests) care identifică alergenii de contact. Este singura metodă fiabilă de a afla ce substanțe nu suporți. Rezultatul te ajută să alegi bijuterii și produse potrivite și să informezi piercerul.",
        { h3: "Începutul mic" },
        "Dacă vrei un tatuaj și ai piele sensibilă, poți începe cu o lucrare mică, într-o zonă ușor de urmărit și de îngrijit. Vezi cum reacționează pielea la procedură, la cerneală și la îngrijire, apoi decizi dacă vrei o piesă mai mare. Este mai bine să afli în ședința mică decât în una de câteva ore.",
        { h3: "Un singur lucru nou o dată" },
        "Când ai piele sensibilă, introdu un singur produs sau factor nou o dată. Dacă schimbi simultan crema, detergentul, săpunul și lenjeria, nu vei ști niciodată ce a provocat o reacție. Păstrează lucrurile simple și constante în săptămânile de vindecare.",
      ],
    },
    {
      id: "mituri-alergii",
      h2: "Mituri despre alergii, piele sensibilă și tatuaje",
      blocks: [
        {
          table: {
            head: ["Mit", "Realitate"],
            rows: [
              ["„Dacă am alergie la ceva, nu pot avea tatuaje deloc.”", "De cele mai multe ori poți, dar cu informare, alegeri potrivite și, uneori, cu avizul medicului. Depinde de alergie și de severitatea ei."],
              ["„Aurul nu dă niciodată alergie.”", "Aurul pur este bine tolerat, dar aliajele de aur pot conține nichel. Contează caratul și compoziția exactă."],
              ["„Oțelul chirurgical este sigur pentru oricine.”", "Denumirea „oțel chirurgical” nu garantează absența nichelului eliberabil. Contează standardul exact al materialului."],
              ["„Dacă nu am avut alergii până acum, nu voi avea.”", "O alergie de contact se poate dezvolta după expuneri repetate, inclusiv la un material pe care l-ai mai purtat."],
              ["„Un unguent cu antibiotic previne infecția.”", "Poate provoca reacții și poate încetini vindecarea. Nu se folosește fără sfatul medicului."],
              ["„Cu cât pun mai multe creme, cu atât se vindecă mai bine.”", "Pe pielea sensibilă, mai multe produse înseamnă mai multe riscuri de iritație. Simplitatea ajută."],
              ["„Dacă mă mănâncă, înseamnă că se vindecă bine.”", "Mâncărimea este normală în vindecare, dar și semn de iritație sau alergie, dacă este foarte intensă sau este însoțită de erupție."],
            ],
          },
        },
        "Mai multe mituri și răspunsuri verificate găsești în ghidul despre [mituri despre tatuaje și piercing](/ghiduri/mituri-despre-tatuaje-si-piercing).",
      ],
    },
    {
      id: "pregatirea-pielii",
      h2: "Cum pregătești pielea sensibilă înainte de ședință",
      blocks: [
        "O piele calmă și hidratată este baza unei vindecări bune. Pregătirea nu este complicată, dar începe cu cel puțin una sau două săptămâni înainte.",
        { h3: "Cu 1-2 săptămâni înainte" },
        {
          ul: [
            "Ferește zona de soare și de arsuri.",
            "Hidratează zona zilnic cu o cremă simplă, fără parfum, pe care o tolerezi bine.",
            "Evită tratamentele agresive pe zonă: exfolieri, peelinguri, epilare cu ceară, produse cu acizi sau retinol, dacă nu ți-a spus altfel dermatologul.",
            "Nu introduce produse noi de îngrijire chiar înaintea ședinței.",
            "Dacă ai o reacție, o iritație sau o erupție, anunță studioul și amână.",
          ],
        },
        { h3: "În ziua ședinței" },
        {
          ul: [
            "Vino odihnit, hidratat și cu stomacul plin.",
            "Spălă zona cu un săpun blând, fără parfum, înainte de plecare.",
            "Poartă haine largi, din bumbac, curate.",
            "Spune artistului dacă simți ceva ciudat: mâncărime, arsură, amețeală.",
          ],
        },
        "Mai multe detalii practice găsești în ghidul despre [cum te pregătești pentru ședința de tatuaj](/ghiduri/cum-te-pregatesti-pentru-sedinta-de-tatuaj).",
      ],
    },
    {
      id: "ingrijirea-dupa",
      h2: "Îngrijirea după ședință pentru piele sensibilă",
      blocks: [
        "După ședință, regula de aur pentru pielea sensibilă este să faci cât mai puțin și cât mai simplu. Mai multe produse nu înseamnă o vindecare mai bună.",
        { h3: "Principii simple" },
        {
          ul: [
            "Urmează exact instrucțiunile primite de la artist, fără să adaugi produse proprii.",
            "Spală-te pe mâini înainte să atingi zona.",
            "Folosește apă călduță și un săpun blând, fără parfum, dacă ți s-a recomandat.",
            "Usucă zona prin tamponare, cu un șervet curat, nu prin frecare.",
            "Aplică crema recomandată într-un strat subțire.",
            "Poartă haine largi, din bumbac.",
            "Nu zgâria și nu smulge coaja.",
          ],
        },
        { h3: "Dacă apare o reacție" },
        "Dacă observi mâncărime intensă, erupție, umflătură care crește sau roșeață care se extinde, oprește produsul pe care l-ai folosit și cere sfatul artistului sau al unui medic. Trimite fotografii clare, cu lumină naturală, pentru ca specialistul să poată evalua situația. Mai multe detalii despre îngrijire în ghidul despre [îngrijirea unui tatuaj nou](/ghiduri/cum-ingrijesti-un-tatuaj-nou).",
        { h3: "Antibiotice și unguente" },
        "Nu aplica antibiotice sau unguente cu corticoizi pe un tatuaj sau piercing fără sfatul medicului. Pot masca o problemă, pot provoca reacții sau pot încetini vindecarea. Dacă ai o infecție, tratamentul îl stabilește medicul.",
      ],
    },
    {
      id: "cand-amani",
      h2: "Când e mai bine să amâni sau să renunți",
      blocks: [
        "Uneori, cea mai bună decizie este să nu faci tatuajul sau piercingul acum. Nu este un eșec, ci o alegere responsabilă.",
        {
          table: {
            head: ["Situația", "Ce faci"],
            rows: [
              ["Piele arsă de soare, iritată sau cu erupții în zona planificată", "Amâni până la vindecarea completă"],
              ["Eczemă, psoriazis sau acnee active în zonă", "Amâni și discuți cu dermatologul"],
              ["Răceală, febră, infecție în curs", "Amâni până la însănătoșire"],
              ["Sarcină sau alăptare", "Amâni"],
              ["Tratament recent cu retinoizi orali", "Discuți cu medicul despre timpul de așteptare"],
              ["Reacție severă la o procedură anterioară", "Discuți cu un dermatolog înainte de orice nouă procedură"],
              ["Boli cronice decompensate", "Obții acordul medicului curant"],
              ["Stare psihică foarte încărcată sau decizie luată sub presiune", "Amâni și te mai gândești"],
            ],
          },
        },
        "Un studio care îți spune „mai așteaptă” nu îți refuză un serviciu, ci îți protejează pielea. Dacă ți se spune „da” fără nicio întrebare, ar trebui să te întrebi dacă studioul își ia în serios responsabilitatea.",
      ],
    },
    {
      id: "cand-mergi-la-medic",
      h2: "Când mergi la medic",
      blocks: [
        "Cere un consult medical, nu doar sfatul artistului, în următoarele situații.",
        {
          ul: [
            "Roșeață care se extinde, căldură locală intensă și durere în creștere.",
            "Puroi, secreții cu miros neplăcut sau dungi roșii care pornesc din zonă.",
            "Febră, frisoane sau stare generală alterată.",
            "Erupție extinsă, umflarea feței sau a buzelor, dificultăți de respirație: sunt semne de reacție alergică severă și cer ajutor medical imediat, la urgență.",
            "Mâncărime sau umflătură persistentă, localizată pe o singură culoare din tatuaj, care reapare sau nu trece.",
            "Piercing care se umflă, se înroșește și secretă în continuare, după câteva săptămâni de îngrijire corectă.",
            "Cicatrice ridicată, care crește dincolo de zona piercingului sau tatuajului.",
          ],
        },
        "Dacă ai o afecțiune diagnosticată, dermatologul tău este cea mai bună sursă de informații, fiindcă îți cunoaște pielea. Dacă artistul și medicul au păreri diferite, urmează sfatul medicului.",
      ],
    },
    {
      id: "greseli-frecvente",
      h2: "Greșeli frecvente",
      blocks: [
        {
          ul: [
            "Ascunderea alergiilor sau a afecțiunilor „ca să nu fie refuzat”.",
            "Alegerea unei bijuterii ieftine, fără material precizat, pentru un piercing nou.",
            "Folosirea mai multor produse noi deodată pe zona proaspătă, ceea ce face imposibilă identificarea cauzei unei reacții.",
            "Aplicarea de cremă cu corticoizi sau antibiotice pe cont propriu.",
            "Ignorarea unei reacții persistente, în speranța că „trece singură”.",
            "Programarea ședinței în plin puseu de eczemă sau de psoriazis.",
            "Oprirea unui tratament medical fără acordul medicului, pentru a face un tatuaj.",
            "Compararea cu alții: „prietena mea s-a tatuat cu aceeași afecțiune și n-a avut nimic”.",
          ],
        },
        "Pielea fiecărui om este diferită. Ce a mers pentru altcineva nu garantează același rezultat la tine.",
      ],
    },
  ],
  faq: [
    {
      q: "Pot să mă tatuez dacă am piele sensibilă?",
      a: "De obicei da, cu pregătire: spui artistului despre sensibilitate, eviți produsele noi chiar înainte, ții pielea hidratată și respecți instrucțiunile de îngrijire. Dacă pielea este iritată sau inflamată în zona planificată, amâni.",
    },
    {
      q: "Pot să mă tatuez dacă am eczemă?",
      a: "Depinde de zonă și de activitatea bolii. Nu se tatuează pe piele cu eczemă activă. Cere sfatul dermatologului și programează într-o perioadă de remisie, apoi discută cu artistul.",
    },
    {
      q: "Pot să mă tatuez dacă am psoriazis?",
      a: "Psoriazisul poate reacționa la traumatismele pielii cu apariția de plăci noi în zona respectivă. Discută cu dermatologul înainte de orice tatuaj și evită zonele afectate.",
    },
    {
      q: "Sunt alergic la nichel. Ce piercing pot face?",
      a: "Alege bijuterii dintr-un material cu eliberare foarte mică de nichel sau fără nichel, de exemplu titan de calitate implant sau niobiu, și spune piercerului despre alergie. Întreabă ce material exact folosește studioul și cere informații despre certificare.",
    },
    {
      q: "Se poate face alergie la cerneala de tatuaj?",
      a: "Rar, da. O reacție la un pigment se poate manifesta prin mâncărime, descuamare sau zone ridicate, uneori pe o singură culoare și uneori la luni sau ani după tatuaj. Merită un consult la dermatolog.",
    },
    {
      q: "Cum deosebesc alergia de infecție?",
      a: "Alergia produce de obicei mâncărime, erupție și roșeață localizată, iar infecția produce durere în creștere, căldură, puroi și uneori febră. Nu le poți deosebi sigur singur: dacă ai o îndoială sau simptomele se agravează, mergi la medic.",
    },
    {
      q: "Pot folosi cremă cu antibiotic pe un tatuaj nou?",
      a: "Nu fără sfatul medicului. Poate provoca reacții, poate masca o problemă și poate încetini vindecarea. Folosește doar produsele recomandate de artist și cere sfatul medicului dacă ai o infecție.",
    },
    {
      q: "Mă pot tatua dacă iau anticoagulante?",
      a: "Nu opri niciodată tratamentul pe cont propriu. Discută cu medicul curant și spune artistului ce iei. Medicamentele care subțiază sângele cresc sângerarea și pot cere o planificare specială.",
    },
    {
      q: "Pot să mă tatuez în sarcină?",
      a: "Majoritatea artiștilor responsabili refuză tatuajele și piercingurile în timpul sarcinii și al alăptării, din cauza lipsei datelor despre siguranță. Mai bine amâni.",
    },
    {
      q: "Ce spun artistului înainte de ședință?",
      a: "Alergiile, afecțiunile de piele și cele generale, medicamentele pe care le iei, antecedentele de cicatrici și orice reacție avută la tatuaje, piercinguri sau produse. Poți spune totul fără jenă: informațiile sunt necesare pentru siguranța ta.",
    },
    {
      q: "Cum mă programez la Hasha Tattoo?",
      a: "Scrie-ne pe WhatsApp la +40 766 422 219, cu ideea, zona și orice informație despre pielea ta. Poți suna și luni până vineri, între 12:00 și 20:00.",
    },
  ],
  cta: {
    title: ["Ai piele sensibilă", "sau o alergie?"],
    text: "Scrie-ne înainte de programare și spune-ne ce știi despre pielea ta. Discutăm sincer despre zonă, materiale și pașii potriviți pentru tine.",
    wa: "Bună! Am piele sensibilă sau o alergie și vreau să discutăm înainte de a programa un tatuaj sau un piercing la Hasha Tattoo.",
  },
  related: ["cum-alegi-bijuteria-de-piercing", "cum-ingrijesti-un-tatuaj-nou", "cum-ingrijesti-un-piercing-nou"],
};

export default content;
