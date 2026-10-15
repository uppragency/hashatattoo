import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "Tatuaj, microblading, machiaj permanent, micropigmentare, powder brows, lip blush: termenii se amestecă în conversațiile de zi cu zi, iar mulți oameni cred că sunt același lucru sub nume diferite. În realitate, sunt proceduri apropiate, dar distincte, cu tehnici, pigmenți, durată și așteptări diferite. Alegerea greșită, sau o așteptare greșită, duce la dezamăgiri: sprâncene care devin gri, buze cu o culoare care nu seamănă cu ce ai ales, un rezultat care nu rezistă cât ai crezut.",
    "Toate aceste proceduri au un punct comun: pigmentul este introdus în piele cu un instrument care o înțeapă. Diferențele apar în adâncimea la care ajunge pigmentul, în tipul de pigment, în unealta folosită, în scopul procedurii și în cât durează rezultatul. Un tatuaj artistic este conceput să fie permanent, iar un microblading este considerat semipermanent, adică se estompează în câțiva ani.",
    "Ghidul explică, în limbaj simplu, ce este fiecare procedură, cum se compară, cum îmbătrânesc rezultatele, ce riscuri și contraindicații există, cum alegi un specialist, ce reglementări se aplică și cum îți îngrijești pielea după. Nu înlocuiește sfatul unui medic dermatolog. Hasha Tattoo este un studio de tatuaje și piercing: pentru microblading și machiaj permanent, alege un specialist în acest domeniu și folosește ghidul pentru a ști ce să întrebi.",
  ],
  sections: [
    {
      id: "ce-au-in-comun",
      h2: "Ce au în comun și ce le diferențiază",
      blocks: [
        "Toate aceste proceduri depun pigment în piele, dar nu în același fel și nu în același scop. Înțelegerea diferențelor ajută la alegere și la așteptări realiste.",
        { h3: "Punctul comun" },
        "Un instrument, manual sau electric, străpunge pielea de multe ori pe secundă sau la fiecare mișcare și lasă în dermă un pigment. Pielea rănită se vindecă, iar pigmentul rămâne prins în țesut. În toate cazurile se lucrează cu ace sau lame de unică folosință, în condiții sterile, iar pielea trebuie îngrijită după procedură.",
        { h3: "Diferențele principale" },
        {
          table: {
            head: ["Aspect", "Tatuaj artistic", "Microblading", "Machiaj permanent (micropigmentare)"],
            rows: [
              ["Scop", "Desen artistic, simbol, text, ornament", "Imitarea firelor de păr la sprâncene", "Aspect de machiaj: sprâncene umplute, contur de buze, linie de ochi"],
              ["Instrument", "Aparat electric cu ace", "Mâner manual cu lame minuscule", "Aparat electric specializat, cu ace fine, sau mâner manual"],
              ["Adâncime", "În dermă, mai profund", "Mai superficial, la limita dintre epidermă și dermă", "Superficial până la mediu, în funcție de tehnică"],
              ["Pigment", "Cerneală pentru tatuaj", "Pigmenți cosmetici dedicați micropigmentării", "Pigmenți cosmetici dedicați micropigmentării"],
              ["Durată", "Permanent, cu estompare lentă în ani", "Semipermanent, de obicei între 1 și 3 ani, cu retușuri", "Semipermanent, de obicei între 1 și 5 ani, în funcție de zonă și tehnică"],
              ["Zone frecvente", "Orice zonă a corpului", "Sprâncene", "Sprâncene, buze, contur de ochi, areole, scalp"],
              ["Retușuri", "Ocazionale, după vindecare", "Obligatorii în general: un retuș după câteva săptămâni, apoi periodice", "Obligatorii în general: un retuș după câteva săptămâni, apoi periodice"],
            ],
          },
        },
        "Termenii sunt folosiți diferit de la un specialist la altul, iar piața folosește frecvent denumiri comerciale. Întreabă întotdeauna ce tehnică se folosește, ce pigment, cât durează în mod realist și cum se estompează.",
      ],
    },
    {
      id: "tatuajul-artistic",
      h2: "Tatuajul artistic",
      blocks: [
        "Tatuajul artistic este procedura clasică: un desen, un text sau un ornament, realizat cu un aparat electric cu ace, într-un stil ales (realism, black and grey, fine line, color etc.). Scopul este expresia vizuală, iar rezultatul este gândit să rămână permanent.",
        { h3: "Cum funcționează" },
        "Acul depune cerneala în dermă, stratul de sub suprafața pielii, unde celulele o prind și o rețin. Stratul superior, epiderma, se reînnoiește continuu, dar cerneala din dermă rămâne. De aceea tatuajul este permanent, chiar dacă își schimbă aspectul în timp: se poate estompa, se poate înmuia sau poate pierde din contrast.",
        { h3: "Ce îl face diferit" },
        {
          ul: [
            "Adâncimea mai mare face rezultatul mai durabil.",
            "Libertatea artistică este mare: de la linii foarte fine la lucrări complexe, cu umbre și culoare.",
            "Se poate aplica pe orice zonă a corpului, cu limitările zonei respective.",
            "Corectarea sau îndepărtarea sunt dificile și se fac prin cover-up sau prin metode laser.",
          ],
        },
        "Pentru detalii despre alegerea stilului, vezi ghidul despre [cum alegi stilul de tatuaj](/ghiduri/cum-alegi-stilul-de-tatuaj), iar pentru a vedea ce se poate face, paginile despre [tatuaje](/tatuaje) și [portofoliu](/portofoliu).",
      ],
    },
    {
      id: "microblading",
      h2: "Microblading",
      blocks: [
        "Microblading este o tehnică de machiaj semipermanent, folosită aproape exclusiv pentru sprâncene. Scopul este să imite firele naturale de păr, prin linii foarte fine, trasate manual.",
        { h3: "Cum se face" },
        "Specialistul folosește un mâner cu un set de lame foarte fine, cu care trasează, prin tăieturi mici și superficiale, linii care imită direcția și forma firelor de păr. În tăieturi se introduce pigmentul cosmetic. Este o tehnică manuală, fără aparat electric.",
        { h3: "Ce rezultat dă" },
        "Efectul este de sprânceană „cu fire”, natural, cu aspect delicat. Este potrivit mai ales pentru persoane care au sprâncene rare sau cu goluri și vor un aspect natural, fără aspect de „machiaj”.",
        { h3: "Pentru cine merge mai puțin bine" },
        {
          ul: [
            "Pielea foarte grasă: liniile fine se pot estompa sau se pot întinde, pierzând claritatea.",
            "Pielea foarte sensibilă sau cu probleme (acnee, eczemă, rozacee în zonă).",
            "Pielea mai matură, cu textură mai laxă, unde liniile se pot dilata.",
            "Cine vrea un efect plin, de „sprânceană machiată”, nu doar fire.",
          ],
        },
        { h3: "Durata" },
        "Microblading-ul se estompează de obicei în câteva luni până la câțiva ani, în funcție de tipul pielii, de pigment, de expunerea la soare și de îngrijire. După procedura inițială, se face un retuș după câteva săptămâni, pentru a corecta ce nu a prins, apoi retușuri periodice, pentru întreținere. Specialistul îți poate spune ce interval este realist pentru tine.",
      ],
    },
    {
      id: "machiaj-permanent",
      h2: "Machiaj permanent și micropigmentare",
      blocks: [
        "Machiajul permanent, numit și micropigmentare, este un termen mai larg. Include mai multe tehnici prin care se depune pigment cosmetic în piele, pentru a obține aspect de machiaj durabil: sprâncene, buze, contur de ochi, uneori și alte zone.",
        { h3: "Sprâncene" },
        {
          ul: [
            "Powder brows (sprâncene „pudrate”): umbrire fină, cu puncte, pentru un aspect de sprânceană machiată cu creionul sau cu pudra.",
            "Ombre brows: degrade de la mai deschis la început la mai închis spre coadă.",
            "Combo brows: combinație între fire (stil microblading) și umbrire.",
          ],
        },
        { h3: "Buze" },
        {
          ul: [
            "Contur de buze: definirea marginii pentru un aspect mai clar.",
            "Lip blush: colorarea întregii buze cu o nuanță delicată, care dă un aspect de culoare naturală, sănătoasă.",
          ],
        },
        { h3: "Ochi" },
        "Linia de ochi, adică un contur subțire la baza genelor, poate fi realizată cu pigment, pentru efectul de gene mai dese. Este o zonă delicată, aproape de ochi, unde alegerea specialistului este deosebit de importantă.",
        { h3: "Alte aplicații" },
        {
          ul: [
            "Micropigmentarea areolei, după reconstrucție mamară, ca parte din recuperare.",
            "Micropigmentarea scalpului, pentru efectul de păr tuns scurt sau de densitate la zone cu păr rar.",
            "Camuflarea unor cicatrici sau a unor zone depigmentate, cu pigment cosmetic.",
          ],
        },
        "Fiecare aplicație cere o pregătire specifică. Un specialist în sprâncene nu este automat potrivit pentru areolă sau pentru scalp. Cere să vezi lucrări vindecate în zona care te interesează.",
      ],
    },
    {
      id: "pigmenti",
      h2: "Pigmenții: ce se folosește și de ce contează",
      blocks: [
        "Pigmentul este o parte esențială din orice procedură de acest fel, pentru că rămâne în piele luni sau ani. Compoziția lui influențează culoarea finală, felul în care se estompează și posibilele reacții.",
        {
          table: {
            head: ["Tipul de produs", "Folosit la", "Observații"],
            rows: [
              ["Cerneală pentru tatuaj", "Tatuaje artistice", "Concepută pentru permanență; palete largi"],
              ["Pigmenți pentru micropigmentare", "Machiaj semipermanent: sprâncene, buze, ochi", "Concepuți pentru a se estompa mai ușor; palete mai restrânse, adaptate nuanțelor pielii"],
              ["Produse de calitate slabă, fără sursă sau compoziție clară", "Locuri necontrolate", "Risc de reacții, de culori imprevizibile și de rezultate slabe"],
            ],
          },
        },
        { h3: "Ce să întrebi despre pigment" },
        {
          ol: [
            "Ce pigment folosiți, de la ce producător și cu ce documentație?",
            "Este pigment de micropigmentare sau cerneală de tatuaj? Pentru zona mea, care este potrivit?",
            "Cum se estompează acest pigment și spre ce culoare tinde în timp?",
            "Ce se întâmplă dacă am o reacție?",
          ],
        },
        { h3: "De ce se schimbă culoarea în timp" },
        "Pigmenții se estompează, dar nu toți la fel. Cei din sprâncene, dacă sunt de calitate slabă sau prost aleși, pot vira spre gri, albăstrui, roșiatic sau portocaliu. Culoarea naturală a pielii, expunerea la soare și tratamentele cosmetice influențează și ele rezultatul. De aceea, culoarea finală se alege cu un specialist care știe cum se comportă pigmenții pe timp, nu doar cum arată în ziua procedurii.",
      ],
    },
    {
      id: "cum-imbatranesc",
      h2: "Cum îmbătrânesc rezultatele",
      blocks: [
        "Aici se vede cea mai mare diferență dintre tatuajul artistic și procedurile semipermanente. Tatuajul este conceput să rămână, în timp ce microblading-ul și micropigmentarea sunt concepute să se estompeze lent, ceea ce poate fi un avantaj sau un dezavantaj, în funcție de așteptări.",
        {
          table: {
            head: ["Procedura", "Ce se întâmplă în timp", "Ce poți face"],
            rows: [
              ["Tatuaj artistic", "Se estompează lent, contrastul scade, liniile se înmoaie", "Protecție solară, retușuri ocazionale"],
              ["Microblading", "Liniile se estompează, pot deveni mai late sau mai moi, culoarea poate vira", "Retușuri periodice, protecție solară"],
              ["Micropigmentare sprâncene", "Pigmentul se deschide treptat, poate vira spre gri sau roșiatic", "Retușuri periodice, alegerea unui pigment potrivit"],
              ["Micropigmentare buze", "Culoarea se estompează, uneori inegal, mai ales dacă ai avut febră labială", "Retuș periodic, grijă la protecție"],
              ["Linie de ochi", "Se estompează, poate deveni mai groasă sau mai neclară", "Retuș, în funcție de specialist"],
            ],
          },
        },
        { h3: "Factorii care accelerează estomparea" },
        {
          ul: [
            "Soarele fără protecție: cel mai important factor.",
            "Pielea grasă, care poate dizolva mai repede pigmentul.",
            "Exfolierile chimice, peelingurile și tratamentele cu acizi sau retinoizi în zonă.",
            "Tratamentele cu laser sau cu lumină pulsată, care pot decolora pigmentul.",
            "Produsele cosmetice agresive pe zonă.",
          ],
        },
        "Dacă vrei ca rezultatul să dureze, protecția solară și evitarea tratamentelor agresive sunt cele mai eficiente măsuri. Pentru protecție solară, vezi ghidul despre [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina), ale cărui reguli se aplică în mare parte și micropigmentării.",
      ],
    },
    {
      id: "riscuri",
      h2: "Riscuri și contraindicații",
      blocks: [
        "Orice procedură care străpunge pielea are riscuri, iar în zona feței, a ochilor și a buzelor acestea cer o atenție în plus.",
        { h3: "Riscuri frecvente" },
        {
          ul: [
            "Iritație, roșeață și umflătură în primele zile, mai ales la buze și în jurul ochilor.",
            "Rezultat inegal, care cere retuș: pigmentul nu se fixează uniform la toată lumea.",
            "Culoare diferită de cea așteptată, sau care virează în timp.",
            "Infecții, dacă igiena nu este respectată sau dacă îngrijirea este neglijată.",
            "Reactivarea herpesului labial după procedurile la buze, la persoanele predispuse.",
            "Reacții alergice la pigment sau la produsele folosite, rare dar posibile.",
          ],
        },
        { h3: "Situații în care procedura nu se face sau se amână" },
        {
          table: {
            head: ["Situația", "De ce contează"],
            rows: [
              ["Sarcină și alăptare", "Normele de igienă din România includ sarcina și alăptarea printre situațiile în care procedurile de tatuare și piercing nu se fac; același principiu de prudență se aplică micropigmentării"],
              ["Afecțiuni de piele active în zonă (acnee, eczemă, psoriazis, rozacee, infecții)", "Pielea inflamată reacționează prost și se vindecă greu"],
              ["Herpes labial activ sau recurent (pentru buze)", "Procedura poate declanșa o erupție; se discută profilaxia cu medicul"],
              ["Tendință la cicatrici cheloide", "Un traumatism al pielii poate declanșa cicatrici ridicate"],
              ["Diabet necontrolat, afecțiuni autoimune, imunosupresie", "Vindecarea este mai lentă, iar riscul de infecție mai mare; cere avizul medicului"],
              ["Tratamente care subțiază sângele", "Sângerarea crește și poate afecta fixarea pigmentului"],
              ["Retinoizi orali sau tratamente recente de piele", "Pielea este fragilă; medicul spune cât să aștepți"],
              ["Afecțiuni ale ochilor (pentru linia de ochi)", "Zona este sensibilă; cere avizul oftalmologului"],
            ],
          },
        },
        "Mai multe despre afecțiuni de piele, alergii și medicamente găsești în ghidul despre [alergii și piele sensibilă](/ghiduri/alergii-si-piele-sensibila). Spune specialistului tot ce contează, fără să ascunzi nimic.",
        { h3: "Investigațiile medicale" },
        "Unele investigații, de exemplu rezonanța magnetică (RMN), pot interacționa cu pigmenții care conțin metale, provocând rar iritații sau artefacte de imagine. Dacă ai un tatuaj sau o micropigmentare și urmează să faci un RMN, anunță personalul medical. Nu e un motiv de panică: este o informație utilă pentru siguranță.",
      ],
    },
    {
      id: "vindecare-si-ingrijire",
      h2: "Vindecarea și îngrijirea",
      blocks: [
        "După micropigmentare, pielea se vindecă în câteva săptămâni, iar îngrijirea corectă este la fel de importantă ca la un tatuaj. Specialistul îți dă instrucțiuni precise, pe care le urmezi întocmai, pentru că tehnicile și produsele diferă.",
        { h3: "Principii generale" },
        {
          ul: [
            "Nu atinge zona cu mâinile murdare și nu zgâria sau smulge coaja.",
            "Ferește zona de apă excesivă, de aburi, de saună și de piscină în perioada indicată.",
            "Evită machiajul, produsele cosmetice și tratamentele pe zonă, până la vindecare.",
            "Ferește zona de soare direct și folosește protecție solară după vindecare.",
            "Nu folosi produse neindicate de specialist.",
            "Respectă programarea pentru retuș, după intervalul recomandat.",
          ],
        },
        { h3: "Ce este normal în primele zile" },
        "Culoarea poate părea mai intensă și mai închisă în primele zile, apoi se estompează pe măsură ce coaja cade. Mulți oameni se sperie de culoarea inițială, dar efectul final apare după vindecarea completă, de obicei după câteva săptămâni. Pentru semne de alarmă (roșeață care se extinde, durere în creștere, puroi, febră), cere ajutor medical.",
        { h3: "Pentru tatuaje" },
        "Îngrijirea unui tatuaj artistic este descrisă detaliat în ghidul despre [cum îngrijești un tatuaj nou](/ghiduri/cum-ingrijesti-un-tatuaj-nou).",
      ],
    },
    {
      id: "alegerea-specialistului",
      h2: "Cum alegi un specialist",
      blocks: [
        "Alegerea persoanei care face procedura contează cel puțin la fel de mult ca alegerea tehnicii. Un specialist bun îți spune ce se potrivește feței și pielii tale, nu doar ce este la modă.",
        { h3: "Ce urmărești" },
        {
          ul: [
            "Lucrări vindecate, în zona care te interesează, nu doar poze proaspete.",
            "Specializare în tehnica dorită: o persoană care face zilnic sprâncene este mai potrivită decât una care face puțin din toate.",
            "Igienă și autorizare: ace sau lame sterile și de unică folosință, spațiu curat, respectarea normelor.",
            "Explicații clare despre durată, retușuri, riscuri și îngrijire.",
            "Disponibilitatea de a spune „nu” când procedura nu este potrivită.",
            "Preț corect, fără promisiuni exagerate precum „rezultat pe viață” sau „fără retușuri”.",
          ],
        },
        { h3: "Semne de atenție" },
        {
          ul: [
            "Promisiuni de rezultate perfecte, fără riscuri.",
            "Prețuri foarte mici, care sugerează materiale sau igienă de calitate slabă.",
            "Lipsa unui formular de sănătate sau a unei discuții despre contraindicații.",
            "Presiunea de a decide imediat sau de a plăti în avans sume mari.",
            "Imposibilitatea de a vedea lucrări vindecate.",
          ],
        },
        "Mai multe despre cum evaluezi lucrările unui specialist găsești în ghidul despre [cum citești portofoliul unui tatuator](/ghiduri/cum-citesti-portofoliul-unui-tatuator), ale cărui criterii se aplică și aici: linii, uniformitate, lucrări vindecate, autenticitatea pozelor.",
      ],
    },
    {
      id: "reglementari",
      h2: "Reglementări în România",
      blocks: [
        "În România, saloanele de înfrumusețare și cele de tatuaj, piercing și implantare dermală sunt reglementate prin Normele de igienă aprobate de Ordinul ministrului sănătății nr. 1648/2024, publicat în Monitorul Oficial nr. 330 din 10 aprilie 2024.",
        {
          ul: [
            "Tatuajul cosmetic și artistic este interzis persoanelor sub 18 ani. Prin urmare, microblading-ul și micropigmentarea se fac doar persoanelor majore.",
            "Clientul trebuie informat despre riscuri și trebuie să completeze o declarație pe propria răspundere.",
            "Operatorul trebuie să dea instrucțiuni de îngrijire verbale și scrise după procedură.",
            "Sarcina și alăptarea sunt printre situațiile în care procedurile nu se fac.",
          ],
        },
        "Normele pot fi modificate, iar detaliile de aplicare diferă de la caz la caz. Pentru verificare, consultă textul oficial din Monitorul Oficial. Pentru minori și piercing, vezi ghidul despre [piercing la minori](/ghiduri/piercing-la-minori-reguli-si-acordul-parintilor).",
      ],
    },
    {
      id: "cum-alegi",
      h2: "Cum alegi între ele",
      blocks: [
        "Dacă nu ești sigur ce procedură ți se potrivește, câteva întrebări simple te ajută.",
        {
          table: {
            head: ["Dacă...", "Ia în calcul"],
            rows: [
              ["Vrei un desen, un simbol sau un text, pe orice zonă, pe termen lung", "Tatuaj artistic"],
              ["Vrei sprâncene cu aspect de fire naturale și accepți retușuri periodice", "Microblading, dacă pielea ta se potrivește"],
              ["Vrei sprâncene pline, „machiate”, sau ai pielea grasă", "Micropigmentare (powder, ombre), mai potrivită pentru acest tip de piele"],
              ["Vrei buze cu aspect mai definit sau cu culoare delicată", "Contur de buze sau lip blush, cu un specialist în zonă"],
              ["Vrei să acoperi o cicatrice sau o zonă depigmentată", "Discută cu un specialist în camuflaj și cu un dermatolog"],
              ["Nu ești sigur că vrei ceva durabil", "Începe cu soluții temporare: machiaj obișnuit, henna naturală, sau așteaptă"],
            ],
          },
        },
        { h3: "Un tatuaj în loc de machiaj permanent?" },
        "Nu folosi cerneala de tatuaj pe sprâncene sau pe buze ca înlocuitor al micropigmentării, decât dacă un specialist cu experiență în zonă te sfătuiește explicit. Cerneala de tatuaj este făcută să fie permanentă și poate vira în culori nedorite, greu de corectat în aceste zone. Dacă vrei un aspect de machiaj, alege un specialist în micropigmentare.",
        { h3: "Dacă ai îndoieli" },
        "Amână. Un machiaj permanent la sprâncene sau la buze este o decizie cu consecințe estetice vizibile zi de zi. Mai bine un răspuns lent și informat decât unul rapid și regretat.",
      ],
    },
    {
      id: "greseli-frecvente",
      h2: "Greșeli frecvente",
      blocks: [
        {
          ul: [
            "Confuzia între tatuaj și micropigmentare: așteptarea ca microblading-ul să fie permanent sau ca tatuajul să se estompeze rapid.",
            "Alegerea tehnicii după modă, nu după tipul de piele.",
            "Alegerea specialistului după preț sau după promoții.",
            "Neverificarea lucrărilor vindecate.",
            "Neluarea în calcul a retușurilor și a costului lor.",
            "Expunerea la soare fără protecție, care accelerează estomparea.",
            "Neinformarea specialistului despre afecțiuni, tratamente sau sarcină.",
            "Folosirea cernelii de tatuaj în locul pigmenților de micropigmentare, pe zone delicate.",
          ],
        },
        "Dacă te recunoști în vreuna, nu e un dezastru. Discută cu un specialist, arată-i zona, cere sfat și decide cu calm.",
      ],
    },
    {
      id: "intrebari-la-consultatie",
      h2: "Ce întrebi la consultație",
      blocks: [
        "Consultația este momentul în care decizi dacă ai încredere în specialist și dacă procedura se potrivește. Pregătește întrebările dinainte și notează răspunsurile.",
        {
          ol: [
            "Ce tehnică recomanzi pentru pielea și forma feței mele și de ce?",
            "Cum arată rezultatul după vindecarea completă, nu doar în ziua procedurii?",
            "Câte ședințe sunt necesare, inclusiv retușul, și la ce interval?",
            "Cât durează, în mod realist, pentru pielea mea, și cum se estompează pigmentul?",
            "Ce pigment folosești și pot vedea ambalajul și documentația?",
            "Ce contraindicații am eu, în funcție de ce îți spun despre sănătate?",
            "Ce se întâmplă dacă nu sunt mulțumită de rezultat?",
            "Care sunt costurile totale, inclusiv retușul și întreținerea?",
          ],
        },
        { h3: "Desenul înainte de procedură" },
        "La sprâncene și la buze, forma se stabilește înainte de a introduce pigment. Specialistul trasează conturul cu creion sau cu un instrument de măsură, iar tu îl privești în oglindă, din față, în mișcare și la lumină bună. Nu te grăbi să accepți. Dacă ceva nu ți se pare în regulă, cere ajustarea până când forma te mulțumește. Pigmentul este greu de corectat, în timp ce creionul se șterge.",
        { h3: "Fotografiile de comparație" },
        "Specialiștii buni fac poze înainte, imediat după și după vindecare. Cere să vezi astfel de serii pentru lucrările lor: arată adevărul despre ce se întâmplă după vindecare, nu doar rezultatul proaspăt.",
      ],
    },
    {
      id: "ziua-procedurii",
      h2: "Cum decurge ziua procedurii",
      blocks: [
        "Deși detaliile diferă după tehnică și specialist, structura unei ședințe de micropigmentare este în general aceeași.",
        {
          ol: [
            "Discuție finală și verificarea stării de sănătate: completezi formularul și confirmi că nu ai contraindicații.",
            "Curățarea și dezinfectarea zonei.",
            "Desenarea formei și aprobarea ei de către tine.",
            "Aplicarea unui produs anestezic topic, dacă specialistul îl folosește și dacă nu ai contraindicații.",
            "Introducerea pigmentului, în straturi, cu pauze pentru verificarea simetriei.",
            "Curățarea zonei și aplicarea produsului recomandat pentru primele ore.",
            "Instrucțiuni de îngrijire verbale și scrise, plus data retușului.",
          ],
        },
        { h3: "Cât durează" },
        "O ședință poate dura între una și trei ore, în funcție de zonă și tehnică, o mare parte fiind dedicată desenului și pregătirii. Întreabă specialistul, ca să-ți planifici ziua.",
        { h3: "Cum te simți după" },
        "Zona poate fi roșie, ușor umflată și sensibilă. Culoarea apare mai intensă decât rezultatul final. Dacă ai programat o procedură la buze, poți avea umflături care se retrag în câteva zile. Planifică procedura astfel încât să nu ai evenimente importante în zilele imediat următoare.",
        { h3: "Ce să nu faci în ziua procedurii" },
        {
          ul: [
            "Nu veni după consum de alcool sau de cafea în exces, care pot crește sângerarea.",
            "Nu te epila sau nu te decolora în zonă cu puțin timp înainte, fără acordul specialistului.",
            "Nu lua medicamente care subțiază sângele fără să spui, iar dacă ai tratament, discută cu medicul.",
            "Nu veni cu pielea iritată, arsă de soare sau cu răni în zonă.",
          ],
        },
      ],
    },
    {
      id: "costuri-si-valoare",
      h2: "Costuri și ce influențează prețul",
      blocks: [
        "Prețurile diferă mult de la un specialist la altul, de la o zonă la alta și de la o tehnică la alta, așa că nu avem o cifră universală de oferit. Contează însă să știi ce intră în calcul, ca să compari corect ofertele.",
        {
          table: {
            head: ["Element", "De ce influențează prețul"],
            rows: [
              ["Tehnica", "Fire manuale, umbrire sau combinație cer timp și abilități diferite"],
              ["Experiența specialistului", "Mâna sigură și rezultatele vindecate se reflectă în tarif"],
              ["Pigmentul și consumabilele", "Calitatea și proveniența documentată costă"],
              ["Retușul", "Poate fi inclus sau taxat separat; întreabă din start"],
              ["Retușurile de întreținere", "Costul se repetă pe parcursul anilor"],
              ["Zona", "Buzele sau ochii cer mai multă pregătire decât sprâncenele"],
            ],
          },
        },
        { h3: "Costul total, nu doar prima ședință" },
        "O procedură semipermanentă înseamnă retușuri periodice. Când compari două oferte, compară costul pe câțiva ani, nu prețul primei ședințe. Un preț foarte mic la început poate ascunde materiale slabe sau retușuri taxate separat și scump.",
        { h3: "Când o ofertă e prea bună" },
        "Reducerile mari, promoțiile „doar azi” și lipsa unor detalii despre pigment sunt semne de atenție. Igiena și materialele de calitate au un cost, iar un preț mult sub piață ridică întrebări.",
      ],
    },
    {
      id: "mituri-micropigmentare",
      h2: "Mituri frecvente despre micropigmentare",
      blocks: [
        { h3: "„Microblading-ul nu doare”" },
        "Senzația există și diferă de la om la om. Se descrie adesea ca zgârieturi fine sau iritație. Zonele sensibile, cum sunt buzele, pot fi mai incomode. Specialistul te poate informa despre opțiunile de confort, în limitele contraindicațiilor.",
        { h3: "„Se șterge singur și nu rămâne nimic”" },
        "Microblading-ul se estompează, dar nu dispare complet la fel pentru toată lumea. Uneori rămâne o urmă slabă, uneori o nuanță care a virat. Gândește-te la rezultat ca la ceva care poate lăsa urme.",
        { h3: "„Pot face procedura dacă vreau, indiferent de piele”" },
        "Pielea influențează mult rezultatul. Pielea foarte grasă, foarte matură sau cu afecțiuni în zonă se pretează mai puțin la anumite tehnici, iar specialistul bun îți spune sincer ce funcționează.",
        { h3: "„Retușul e o formalitate”" },
        "Retușul este parte din procedură. Prima ședință rar dă rezultatul final, pentru că pielea reține pigmentul diferit în fiecare zonă. Fără retuș, rezultatul poate rămâne inegal.",
        { h3: "„Dacă nu-mi place, o corectez imediat”" },
        "Corectarea este mai grea decât aplicarea. Se poate face un retuș care ajustează forma sau culoarea, dar îndepărtarea completă cere metode specializate, iar rezultatul nu e garantat. De aceea desenul și culoarea se aprobă cu grijă înainte de începere.",
      ],
    },
    {
      id: "alternative-temporare",
      h2: "Alternative temporare, dacă nu ești sigur",
      blocks: [
        "Dacă nu ești convins că vrei o procedură care durează ani, există soluții care îți lasă timp să te răzgândești. Ele nu înlocuiesc micropigmentarea, dar îți arată ce îți place.",
        {
          ul: [
            "Machiajul obișnuit pentru sprâncene: creion, pudră sau gel, folosite câteva săptămâni, ca să vezi ce formă ți se potrivește.",
            "Fotografii cu forma desenată de specialist, fără pigment, pentru a vedea cum arată pe fața ta.",
            "Henna pentru sprâncene, care se ține câteva zile până la câteva săptămâni, dar are propriile riscuri de alergie și cere test prealabil.",
            "Laminarea sprâncenelor, care aranjează firele existente fără a introduce pigment.",
          ],
        },
        "Dacă după câteva săptămâni de machiaj zilnic ești mulțumită de forma aleasă, ai un punct de plecare concret pentru discuția cu specialistul. Dacă nu te mai interesează, ai evitat o procedură inutilă.",
        { h3: "Cât să aștepți înainte să decizi" },
        "Nu există o perioadă universală, dar o regulă prudentă este să nu iei decizia sub influența unui eveniment (nuntă, vacanță, schimbare personală) și să te mai gândești câteva săptămâni. Dacă dorința rămâne constantă, procedura devine o decizie matură, nu un impuls.",
      ],
    },
  ],
  faq: [
    {
      q: "Care este diferența dintre tatuaj și microblading?",
      a: "Tatuajul artistic folosește un aparat electric cu ace și depune cerneala mai profund, pentru un rezultat permanent. Microblading-ul folosește un mâner manual cu lame fine și un pigment cosmetic, la o adâncime mai mică, pentru un rezultat semipermanent, folosit mai ales la sprâncene.",
    },
    {
      q: "Cât durează microblading-ul?",
      a: "De obicei câteva luni până la câțiva ani, în funcție de tipul pielii, de pigment, de expunerea la soare și de îngrijire. Se fac retușuri periodice. Specialistul îți poate spune ce interval este realist pentru tine.",
    },
    {
      q: "Machiajul permanent este chiar permanent?",
      a: "Nu în același sens ca un tatuaj. Este considerat semipermanent: pigmentul se estompează treptat, iar rezultatul cere retușuri. Denumirea este comercială.",
    },
    {
      q: "De ce virează spre gri sau roșu sprâncenele micropigmentate?",
      a: "Pigmenții se estompează diferit, iar unii virează în timp, în funcție de compoziție, de pielea ta și de expunerea la soare. De aceea contează alegerea unui pigment potrivit și a unui specialist care știe cum se comportă pe termen lung.",
    },
    {
      q: "Se poate face microblading sub 18 ani?",
      a: "Nu. Normele de igienă din România interzic tatuajul cosmetic și artistic persoanelor sub 18 ani, iar microblading-ul și micropigmentarea intră în această categorie.",
    },
    {
      q: "Pot face machiaj permanent dacă sunt însărcinată?",
      a: "Nu este recomandat. Normele din România includ sarcina și alăptarea printre situațiile în care procedurile de tatuare nu se fac. Amână până după perioada de alăptare.",
    },
    {
      q: "Se poate șterge un machiaj permanent?",
      a: "Se estompează singur în timp, iar îndepărtarea completă se face prin metode specializate, de obicei cu laser, la un specialist. Rezultatul nu este garantat. Gândește-te bine înainte, mai ales la culoare.",
    },
    {
      q: "Doare micropigmentarea?",
      a: "Senzația este de zgâriere sau înțepare, mai intensă în zonele sensibile (buze, ochi). Specialiștii pot folosi o cremă anestezică, conform regulilor și contraindicațiilor. Intensitatea diferă de la om la om.",
    },
    {
      q: "Fac la Hasha Tattoo microblading sau machiaj permanent?",
      a: "Hasha Tattoo este un studio de tatuaje și piercing. Pentru microblading și machiaj permanent alege un specialist în acest domeniu. Pentru tatuaje artistice, cover-up și corectări, scrie-ne pe WhatsApp la +40 766 422 219.",
    },
    {
      q: "Cât timp trebuie să aștept după procedură înainte de a mă machia?",
      a: "Nu aplica machiaj pe zona tratată până la vindecare, conform instrucțiunilor specialistului, de obicei câteva zile până la câteva săptămâni, în funcție de zonă. Respectă indicațiile primite în scris.",
    },
    {
      q: "Pot face retușul la alt specialist?",
      a: "Se poate, dar rezultatul poate diferi, pentru că tehnica și pigmentul diferă. Cel mai sigur este să ceri retușul celui care a făcut prima ședință, iar dacă schimbi specialistul, arată-i lucrarea și întreabă ce este posibil.",
    },
  ],
  cta: {
    title: ["Vrei un tatuaj", "artistic?"],
    text: "Dacă ideea ta este un desen, un simbol sau un text, scrie-ne zona, mărimea și referințele. Un artist îți răspunde cu recomandări și o estimare.",
    wa: "Bună! Vreau să discut despre un tatuaj artistic la Hasha Tattoo. Vă trimit ideea, zona și referințele.",
  },
  related: ["primul-tau-tatuaj", "alergii-si-piele-sensibila", "cum-citesti-portofoliul-unui-tatuator"],
};

export default content;
