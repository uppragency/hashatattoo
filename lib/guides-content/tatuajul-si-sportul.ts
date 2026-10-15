import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "Pentru cine merge la sală, aleargă sau înoată, prima întrebare după ce programează un tatuaj nu este despre durere, ci despre antrenament: când mă pot întoarce? Răspunsul scurt este că depinde de zonă, de mărimea lucrării și de sportul practicat. Un tatuaj mic pe gleznă nu te oprește din sala de forță, dar îți cere atenție la alergat. Un tatuaj mare pe piept te scoate din multe exerciții timp de câteva săptămâni.",
    "Un tatuaj proaspăt este o rană superficială întinsă pe o suprafață mai mare sau mai mică. Transpirația, frecarea, apa din piscină sau din mare și întinderea repetată a pielii pot irita zona, pot rupe coaja în formare și pot afecta rezultatul final. Dar tot așa de adevărat este că odihna completă nu este necesară în majoritatea cazurilor: există o cale de mijloc, care ține cont de zonă și de ritmul vindecării.",
    "Ghidul de față explică ce se întâmplă în piele în primele săptămâni, ce sporturi sunt mai riscante pentru un tatuaj proaspăt, cum arată o revenire treptată la antrenament și cum îți planifici ședința în raport cu competițiile sau cu sezonul. Pentru instrucțiuni exacte, urmează întotdeauna indicațiile artistului care ți-a făcut tatuajul și, dacă ai o afecțiune, pe cele ale medicului. Informațiile de aici sunt orientative și nu înlocuiesc sfatul unui specialist.",
  ],
  sections: [
    {
      id: "ce-se-intampla-in-piele",
      h2: "Ce se întâmplă în piele după un tatuaj",
      blocks: [
        "Ca să înțelegi de ce sportul contează, ajută să știi cum se vindecă un tatuaj. Acul depune cerneala în dermă, stratul de sub suprafața pielii. Epiderma, stratul de deasupra, este practic o rană: pielea se irită, se înroșește, elimină plasmă, apoi se usucă, formează o coajă fină și, în final, se regenerează.",
        { h3: "Cele trei etape ale vindecării de suprafață" },
        {
          ol: [
            "Primele zile: zona este roșie, sensibilă, uneori ușor umflată. Pielea elimină lichid limpede sau ușor colorat. Este cea mai vulnerabilă perioadă.",
            "Săptămâna a doua: se formează o peliculă fină și apoi coaja, care se desprinde în fulgi. Apare mâncărimea. Nu se zgârie și nu se smulge nimic.",
            "Săptămânile următoare: pielea pare vindecată la suprafață, dar straturile de dedesubt încă se refac. Culoarea se limpezește, iar tatuajul capătă aspectul final.",
          ],
        },
        "Vindecarea de suprafață se încheie, de obicei, în aproximativ două până la patru săptămâni, dar tatuajul se consideră complet stabilizat mai târziu. Pentru vindecarea completă a pielii se vorbește de obicei despre 3 până la 6 săptămâni, iar timpul real diferă de la o persoană la alta și de la o zonă la alta.",
        { h3: "De ce sportul interferează" },
        {
          ul: [
            "Transpirația conține săruri și bacterii de pe piele. Pe o zonă proaspăt tatuată, ea irită și crește riscul de iritație sau infecție.",
            "Frecarea hainelor, a aparatelor, a curelelor sau a benzilor de rezistență rupe coaja și poate smulge cerneala din straturile superioare.",
            "Întinderea pielii la mișcări ample crapă coaja în zonele de articulație, deci vindecarea se prelungește și pot apărea zone mai deschise la culoare.",
            "Apa din piscină (clor), din mare (sare, bacterii) sau din jacuzzi poate irita și infecta zona, iar umezeala prelungită înmoaie coaja.",
            "Încălzirea corpului crește circulația și poate agrava umflarea și roșeața în primele zile.",
          ],
        },
        "Niciun factor din lista de mai sus nu înseamnă că un singur antrenament strică tatuajul. Înseamnă că expunerea repetată și prelungită, în perioada vulnerabilă, crește probabilitatea unor probleme. Scopul este să o reduci cu planificare, nu să renunți la mișcare.",
      ],
    },
    {
      id: "cat-te-opresti",
      h2: "Cât te oprești din sport: reguli generale",
      blocks: [
        "Nu există un număr valabil pentru toată lumea. Există însă reguli de bun-simț, folosite și recomandate de mulți artiști, pe care le poți adapta după zonă și după cum arată pielea ta.",
        {
          table: {
            head: ["Situația", "Abordare orientativă"],
            rows: [
              ["Primele 48 de ore", "Odihnă. Evită orice efort care te face să transpiri abundent și orice frecare pe zonă."],
              ["Primele 7 zile", "Doar mișcare ușoară care nu implică zona tatuată: plimbare, exerciții pentru alte grupe musculare."],
              ["Săptămâna 2", "Revenire treptată, cu intensitate mai mică. Exerciții care nu întind și nu freacă tatuajul."],
              ["Săptămânile 3 și 4", "Revenire spre ritmul normal, dacă coaja s-a desprins și pielea nu mai este sensibilă."],
              ["Piscină, mare, saună, jacuzzi", "Se evită până la vindecarea completă a suprafeței. Întreabă artistul când poți relua."],
            ],
          },
        },
        {
          note: "Tabelul este orientativ. Un tatuaj mic și un tatuaj de dimensiunea unui antebraț întreg nu se vindecă în același ritm. Indicațiile artistului tău primează întotdeauna.",
          title: "Important",
        },
        { h3: "Semnale după care te ghidezi" },
        {
          ul: [
            "Pielea este încă roșie, fierbinte sau dureroasă la atingere: nu forța zona.",
            "Coaja este încă groasă sau lipicioasă: nu o expune la transpirație sau frecare.",
            "Zona se crapă când o întinzi: evită mișcările care o întind complet.",
            "Pielea este mată, fără luciu de rană și fără coajă: de regulă poți relua treptat activitatea.",
          ],
        },
        "Dacă observi roșeață care se extinde, căldură locală intensă, puroi, durere care crește sau febră, nu mai face sport și cere un consult medical. Detalii despre semnele de alarmă găsești în ghidul despre [îngrijirea unui tatuaj nou](/ghiduri/cum-ingrijesti-un-tatuaj-nou).",
      ],
    },
    {
      id: "pe-zone",
      h2: "Sportul în funcție de zona tatuată",
      blocks: [
        "Aceeași activitate pune presiuni diferite pe zone diferite. Un tatuaj pe omoplat nu are nicio problemă la alergat, dar este afectat de ghemuiri cu bară și de tracțiuni. Un tatuaj pe gleznă nu are probleme la presă, dar suferă la ghete sau la șosete strânse.",
        {
          table: {
            head: ["Zona", "Ce o afectează cel mai mult", "Ce poți face de obicei"],
            rows: [
              ["Antebraț, braț", "Frecarea cu mânecile, apucarea barelor, flotări, tracțiuni, transpirația la sală", "Antrenament pentru picioare și core, cardio ușor, fără apucări care freacă"],
              ["Umăr, piept", "Împinsări, flotări, bara pe piept, hainele strâmte, curelele rucsacului", "Antrenament pentru picioare, alergat la ritm moderat"],
              ["Spate, omoplat", "Tracțiuni, ramat, bara pe spate, spătarul aparatelor", "Alergat, exerciții pentru picioare, mers pe bicicletă"],
              ["Coaste, abdomen", "Respirația profundă, flexii, exerciții de core, curelele", "Mers, exerciții pentru brațe fără torsiune"],
              ["Coapsă", "Genuflexiuni, fandări, frecarea hainelor la alergat sau pedalat", "Exerciții pentru partea superioară a corpului"],
              ["Gambă, gleznă", "Încălțămintea, șosetele, alergatul, săriturile, apa", "Exerciții pentru partea superioară, bicicletă statică cu atenție"],
              ["Mână, deget, picior", "Spălatul frecvent, contactul cu aparatele, transpirația, încălțămintea", "Antrenamente adaptate, cu mănuși curate sau protecție, la indicația artistului"],
            ],
          },
        },
        "Dacă ai un program de antrenament strict, discută cu artistul înainte să alegi zona sau data ședinței. Uneori o mică mutare a locului sau a datei face diferența dintre o vindecare liniștită și trei săptămâni de frustrare.",
        { h3: "Zonele de articulație" },
        "Cotul, genunchiul, încheietura mâinii, glezna și umărul se mișcă constant. Pielea de acolo se întinde și se pliază de sute de ori pe zi. Coaja se crapă mai ușor, iar vindecarea este de obicei mai lentă și mai capricioasă. Pentru aceste zone, planifică o perioadă de relativă imobilitate sau de activitate foarte blândă.",
      ],
    },
    {
      id: "sala",
      h2: "Sala de forță",
      blocks: [
        "Sala de forță este mediul în care tatuajele proaspete întâmpină cele mai multe probleme: transpirație, aparate folosite de mulți oameni, frecare, bare, bănci. Nu este interzisă, dar cere reguli.",
        { h3: "Reguli practice pentru sală" },
        {
          ul: [
            "Alege programul în funcție de zonă: dacă ai tatuaj pe braț, fă o săptămână de antrenament pentru picioare și abdomen.",
            "Nu așeza zona tatuată direct pe bancă sau pe spătar. Contactul cu o suprafață folosită de mulți este un risc de contaminare.",
            "Îmbracă haine curate, din bumbac, care nu strâng și nu freacă. Evită materialele sintetice lipicioase, în care transpirația stă pe piele.",
            "Nu folosi mănuși sau bandaje murdare sau umede peste zonă.",
            "Spală-te pe mâini înainte să atingi tatuajul și nu îl atinge în timpul antrenamentului.",
            "Fă duș după antrenament și spală zona conform indicațiilor artistului, apoi usucă-o prin tamponare cu un șervet curat.",
            "Dacă transpiri foarte tare, oprește-te, tamponează și întrerupe exercițiul. Nu freca.",
          ],
        },
        { h3: "Exercițiile mai riscante" },
        "Exercițiile care întind sau freacă puternic zona tatuată sunt cele de evitat. Pentru brațe, sunt problematice flotările, tracțiunile și îndoirile cu haltera. Pentru piept, împinsările cu bara. Pentru spate, ramatul și tracțiunile. Pentru picioare, genuflexiunile cu bara pe umeri când ai tatuaj pe ceafă sau pe umeri. Dacă un exercițiu pune presiune sau întinde brusc pielea tatuată, ia o pauză.",
        { h3: "Cum revii treptat" },
        "După perioada de pauză, revino cu greutăți mai mici și mai puține serii. Pielea nou vindecată este mai puțin elastică, iar întinderea bruscă o poate irita sau crăpa. Dacă după antrenament zona este roșie, dureroasă sau umflată, ai exagerat: scade intensitatea pentru câteva zile.",
      ],
    },
    {
      id: "alergat-cardio",
      h2: "Alergat, mers, bicicletă și cardio",
      blocks: [
        "Alergatul este, în general, mai ușor de combinat cu un tatuaj decât sala, cu o excepție importantă: picioarele. Un tatuaj pe gambă sau pe gleznă este afectat de ghete, de șosete și de transpirația acumulată într-un spațiu închis.",
        { h3: "Dacă tatuajul este pe parte superioară a corpului" },
        "Dacă ai tatuaj pe braț, umăr, spate sau piept, alergatul este de obicei posibil cu o intensitate moderată, cu haine largi și curate. Transpirația este problema principală. Poartă un tricou larg, din material care respiră, și schimbă-l imediat după alergare. Nu folosi curele de telefon sau de puls care freacă zona.",
        { h3: "Dacă tatuajul este pe picior" },
        "Pentru tatuajele pe coapsă, gambă sau gleznă, alergatul este de evitat în primele două sau trei săptămâni. Mersul pe jos cu încălțăminte comodă și șosete largi poate fi suficient pentru mișcarea de zi cu zi. Alege șosete curate, din bumbac, care nu strâng gamba.",
        { h3: "Bicicleta" },
        "Pe bicicletă, problema este frecarea de șa pentru tatuajele pe coapse și fese, și frecarea pantofilor și pedalelor pentru gambă și picior. Pentru tatuajele din partea superioară a corpului, problema este contactul cu ghidonul. Folosește bicicleta statică în locul celei de oraș dacă zona intră în contact cu șaua sau cu haine strâmte.",
        { h3: "Cardio la sală" },
        "Banda, bicicleta eliptică și bicicleta statică sunt acceptabile când zona tatuată nu atinge aparatul. Dezinfectează mânerele înainte să le atingi cu mâinile, mai ales dacă ai tatuaj pe mână sau pe antebraț.",
      ],
    },
    {
      id: "inot-apa",
      h2: "Înot, mare, piscină, saună și jacuzzi",
      blocks: [
        "Apa este restricția cea mai strictă. Un tatuaj proaspăt nu se scufundă în piscină, mare sau cadă fierbinte, pentru că riscul de iritație și infecție crește, iar coaja se înmoaie și se desprinde prematur.",
        { h3: "De ce apa este problematică" },
        {
          ul: [
            "Clorul din piscine irită pielea sensibilă și o usucă excesiv.",
            "Apa de mare conține săruri și microorganisme care pot agrava o zonă în vindecare.",
            "Apa din jacuzzi, saună sau baie caldă prelungită înmoaie coaja și poate decolora cerneala din straturile superioare.",
            "Umezeala prelungită favorizează dezvoltarea bacteriilor.",
          ],
        },
        "Dușul scurt, conform indicațiilor de spălare, este în regulă. Baia în cadă, saunele și piscinele nu sunt, până când artistul îți spune că pielea s-a vindecat suficient.",
        { h3: "Când te poți întoarce la apă" },
        "Regula generală este să aștepți până când coaja s-a desprins complet și pielea nu mai este sensibilă, ceea ce înseamnă de obicei câteva săptămâni. Pentru lucrări mari, pe zone mobile sau cu vindecare lentă, poate dura mai mult. Dacă ai o vacanță programată, citește și ghidul despre [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina).",
        { h3: "Dacă înoți profesionist sau ai antrenamente obligatorii" },
        "Discută cu artistul înainte de programare și planifică ședința într-o perioadă de pauză din calendar. Nu există soluții miraculoase, cum ar fi pansamente impermeabile folosite pentru înot, care să înlocuiască vindecarea. Pansamentele pot fi folosite pentru dus, la recomandarea artistului, nu pentru scufundare.",
      ],
    },
    {
      id: "sporturi-de-contact",
      h2: "Sporturi de contact, escaladă și alte discipline",
      blocks: [
        "Unele sporturi pun probleme speciale, pentru că implică lovituri, contact fizic sau materiale abrazive.",
        {
          table: {
            head: ["Sportul", "De ce este problematic", "Ce faci"],
            rows: [
              ["Arte marțiale, box, lupte", "Lovituri, prize, frecare cu covorul și cu partenerii, transpirație comună", "Pauză completă pentru zona tatuată, de obicei mai lungă decât la alte sporturi"],
              ["Fotbal, handbal, baschet", "Contact, căzături, transpirație, apă și noroi", "Pauză sau antrenament individual ușor, cu zona protejată"],
              ["Escaladă", "Frecare cu roca sau cu prizele, pământ și praf, magneziu", "Pauză pentru mâini și antebrațe tatuate"],
              ["Yoga, pilates", "Întindere extremă, contact cu covorul, transpirație", "Alege poziții care nu comprimă și nu întind zona; folosește un prosop curat"],
              ["Dans", "Frecare, întindere, transpirație", "Adaptează mișcările și hainele; alege costume largi"],
              ["Tenis, golf", "Mișcări repetate ale brațului, mânere", "Pauză pentru brațul tatuat, în perioada de vindecare"],
            ],
          },
        },
        "În sporturile de contact, o lovitură pe un tatuaj proaspăt poate produce vânătăi, hemoragii sub piele sau desprinderea coajei. Aceste lucruri pot afecta aspectul final. Mai bine ai răbdare câteva săptămâni decât să corectezi un tatuaj afectat.",
      ],
    },
    {
      id: "echipament-si-haine",
      h2: "Hainele și echipamentul potrivit",
      blocks: [
        "Alegerea hainelor este o parte importantă din planul tău de revenire la sport. Hainele potrivite reduc frecarea și lasă pielea să respire.",
        { h3: "Ce porți" },
        {
          ul: [
            "Haine largi, din bumbac sau materiale care respiră, nu din fibre sintetice strânse pe corp.",
            "Haine curate, spălate cu detergent fără parfum puternic, dacă ai piele sensibilă.",
            "Șosete largi, nu elastice, pentru tatuajele pe gambă sau pe gleznă.",
            "Încălțăminte comodă, care nu apasă și nu freacă zona.",
            "Un prosop curat, pe care îl folosești doar pentru a tampona transpirația, fără frecare.",
          ],
        },
        { h3: "Ce eviți" },
        {
          ul: [
            "Compresia strânsă: colanți sau mâneci de compresie peste un tatuaj proaspăt, mai ales dacă sunt sintetice.",
            "Curelele, benzile și genunchierele care apasă și freacă pielea.",
            "Hainele noi, nespălate, care pot conține substanțe iritante.",
            "Bijuteriile sau ceasurile care freacă zona.",
          ],
        },
        "Dacă trebuie să porți ceva strâns din motive medicale sau sportive, discută cu artistul sau cu medicul pentru a găsi o soluție de compromis.",
      ],
    },
    {
      id: "plan-de-revenire",
      h2: "Plan de revenire pas cu pas",
      blocks: [
        "Dacă vrei un plan clar, folosește structura de mai jos ca punct de plecare. O adaptezi după mărimea tatuajului, zona și sportul tău, și îl confrunți cu recomandările artistului.",
        { h3: "Săptămâna 1: pauză sau mișcare foarte blândă" },
        "Nu face antrenamente care te fac să transpiri abundent. Mersul pe jos este în regulă, atâta timp cât zona nu este frecată de haine sau încălțăminte. Dormi suficient, bea apă și urmează instrucțiunile de îngrijire. Nu atinge zona decât când o speli și o hidratezi.",
        { h3: "Săptămâna 2: revenire parțială" },
        "Dacă coaja se formează și zona nu mai este foarte sensibilă, reia exerciții ușoare pentru alte grupe musculare. Păstrează intensitatea scăzută. Fă duș după antrenament și curăță zona conform indicațiilor. Dacă roșeața sau durerea revin, scade ritmul.",
        { h3: "Săptămânile 3 și 4: revenire treptată" },
        "Pe măsură ce coaja se desprinde și pielea devine mată și fină, poți relua exercițiile care implică zona, începând cu greutăți mici. Evită exercițiile care întind brusc pielea. Continuă să eviți apa din piscină și din mare, până când artistul îți dă acordul.",
        { h3: "După vindecare" },
        "Când pielea este complet vindecată, poți relua activitatea normală. De acum, protejează tatuajul de soare cu cremă cu factor de protecție ridicat, mai ales dacă faci sport în aer liber. Hidratarea pielii și protecția solară sunt cele mai bune investiții pentru un tatuaj care arată bine ani de zile.",
        {
          note: "Dacă ai o competiție, un concurs sau o perioadă de efort intens, programează ședința de tatuaj după eveniment, nu înainte. Un tatuaj nou și un program intens nu se potrivesc.",
          title: "Sfat de planificare",
        },
      ],
    },
    {
      id: "planificarea-sedintei",
      h2: "Cum îți planifici ședința în raport cu sportul",
      blocks: [
        "Cea mai bună strategie este să alegi ședința ținând cont de calendarul tău sportiv. Câteva reguli simple te ajută să eviți probleme.",
        {
          ul: [
            "Alege o perioadă cu antrenamente mai ușoare, de exemplu după un campionat sau în pauză de sezon.",
            "Nu programa ședința cu o zi sau două înainte de o competiție sau un test fizic important.",
            "Dacă ai un tatuaj mare care se face în mai multe ședințe, lasă între ele timp suficient pentru vindecare, nu doar ce îți permite agenda.",
            "Alege zona în funcție de sport: un alergător poate prefera un tatuaj pe braț sau pe spate, un halterofil poate prefera un tatuaj pe picior pentru o perioadă de recuperare.",
            "Spune-i artistului ce sport practici și cât de intens. Poate recomanda o zonă, o dată sau o strategie diferită.",
          ],
        },
        "Un artist cu experiență știe cum se comportă diferite zone ale corpului la mișcare. Întreabă-l și ascultă răspunsul, chiar dacă nu coincide cu planul tău inițial.",
        { h3: "Ședința propriu-zisă și efortul fizic" },
        "În ziua ședinței și în ziua dinainte, evită antrenamentele epuizante. Un corp obosit suportă mai greu durerea și pierde mai mult din energie. Mănâncă bine, hidratează-te și dormi suficient. Detalii practice despre pregătire găsești în ghidul despre [cum te pregătești pentru ședința de tatuaj](/ghiduri/cum-te-pregatesti-pentru-sedinta-de-tatuaj).",
      ],
    },
    {
      id: "somn-hrana-recuperare",
      h2: "Somn, hrană și recuperare: ce ajută vindecarea",
      blocks: [
        "Pentru un om activ, vindecarea unui tatuaj intră în competiție cu recuperarea după antrenament. Ambele cer același lucru: somn, proteine, hidratare și timp. Dacă îți încarci corpul cu efort mare în aceeași perioadă în care pielea se reface, resursele se împart, iar vindecarea poate deveni mai lentă sau mai agitată.",
        { h3: "Somnul" },
        "Pielea se regenerează mult în timpul somnului. În săptămânile de după tatuaj, încearcă să dormi regulat și suficient. Dacă ai nopți scurte din cauza antrenamentelor de dimineață, scade intensitatea sau mută antrenamentul mai târziu. O noapte proastă nu strică nimic, dar o serie de nopți proaste, combinate cu efort mare, face vindecarea mai grea.",
        { h3: "Hrana" },
        "Nu există o dietă specială pentru vindecarea unui tatuaj. Un regim echilibrat, cu suficiente proteine, legume, fructe și grăsimi sănătoase, ajută pielea să se refacă. Dacă ții dietă strictă pentru competiție sau pentru definire, discută cu medicul sau cu nutriționistul înainte de ședință: un deficit caloric sever poate încetini regenerarea și poate crește sensibilitatea la durere.",
        { h3: "Hidratarea" },
        "Pielea hidratată din interior este mai elastică și mai puțin predispusă la crăpături. Bea apă regulat, mai ales în zilele cu antrenament. Alcoolul, în schimb, subțiază sângele și deshidratează. Evită-l în ziua ședinței și în primele zile de după, iar în perioada de vindecare consumă-l moderat, dacă nu ai o indicație contrară.",
        { h3: "Suplimentele" },
        "Dacă iei suplimente sportive sau medicamente, spune artistului înainte de ședință. Unele substanțe, de exemplu cele care subțiază sângele, pot crește sângerarea în timpul tatuării. Nu începe și nu opri tratamente pe cont propriu: întreabă medicul.",
        { h3: "Recuperarea activă" },
        "Mișcarea blândă ajută circulația fără să irite pielea. O plimbare lungă, exerciții de mobilitate pentru zonele netatuate sau înotul de recuperare după vindecare sunt mai bune decât o pauză totală de câteva săptămâni, dacă te simți bine. Ascultă-ți corpul: dacă zona tatuată se simte caldă sau dureroasă, mărește pauza.",
      ],
    },
    {
      id: "sezon-si-clima",
      h2: "Sezonul și clima: iarnă, vară, aer liber",
      blocks: [
        "Momentul anului schimbă mult felul în care planifici un tatuaj, mai ales dacă faci sport în aer liber. Fiecare sezon are avantaje și dezavantaje.",
        {
          table: {
            head: ["Sezonul", "Avantaje", "Atenție"],
            rows: [
              ["Iarna", "Hainele lungi acoperă tatuajul și îl protejează de soare; mai puțină transpirație la antrenamente în aer liber", "Hainele groase pot freca zona; aerul uscat poate usca pielea, deci hidratarea contează mai mult"],
              ["Primăvara", "Temperaturi moderate, bun moment pentru a începe un tatuaj înainte de vară", "Prima expunere la soare după iarnă este agresivă pentru pielea nouă"],
              ["Vara", "Zile lungi, mai multă energie pentru mulți oameni", "Soare, transpirație, apă, praf: toate lucrează împotriva unui tatuaj proaspăt"],
              ["Toamna", "Clima blândă, soare mai slab, bun moment pentru ședințe mari", "Umezeala și frigul pot afecta unele zone; poartă straturi curate"],
            ],
          },
        },
        "Mulți artiști recomandă toamna și iarna pentru lucrările mari, tocmai pentru că tatuajul se vindecă departe de soare și de apă. Dacă ești sportiv în aer liber, acesta este un argument serios pentru a planifica ședința în sezonul rece. Pentru vară, vezi ghidul separat despre [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina).",
        { h3: "Antrenamentul în aer liber" },
        "Praful, polenul, noroiul și insectele sunt riscuri reale pentru un tatuaj proaspăt. Dacă alergi pe trasee sau mergi pe munte, protejează zona cu haine curate și largi, nu cu pansament ocluziv ținut ore în șir. Spală-te cât mai repede după efort și nu atinge tatuajul cu mâinile murdare.",
        { h3: "Frigul" },
        "Pielea expusă la frig scade în elasticitate și poate deveni mai uscată. Dacă ai tatuaj pe mână sau pe față, folosește mănuși curate, din material moale, care nu freacă. Hidratează zona regulat, conform indicațiilor.",
      ],
    },
    {
      id: "intrebari-practice-sportivi",
      h2: "Situații concrete pentru sportivi",
      blocks: [
        "Aceleași reguli generale se aplică diferit în situații concrete. Mai jos sunt câteva scenarii pe care le întâlnesc des oamenii activi, cu o abordare de bun-simț pentru fiecare.",
        { h3: "Halterofilul cu tatuaj pe antebraț" },
        "Antebrațul este folosit la aproape orice exercițiu cu greutăți, prin priză. Prima săptămână nu forța priza deloc și alege exerciții pentru picioare. În săptămânile următoare, folosește chingi sau mănuși curate pentru a reduce frecarea, dacă artistul consideră asta potrivit, și ține zona curată după fiecare antrenament.",
        { h3: "Alergătoarea cu tatuaj pe gambă" },
        "Gamba lucrează la fiecare pas, iar șoseta și gheata apasă și frecă. În primele două săptămâni alege mersul, bicicleta statică fără presiune pe zonă sau antrenamente pentru partea superioară. Când revii la alergat, folosește șosete curate, largi, și încălțăminte deja rodată, nu una nouă.",
        { h3: "Înotătorul cu tatuaj pe umăr" },
        "Aici apa este problema, nu mișcarea. Planifică ședința într-o pauză lungă din sezon, pentru că poți reveni în apă abia după vindecarea suprafeței. Până atunci, antrenamentele pe uscat, pentru picioare și core, mențin forma.",
        { h3: "Practicantul de arte marțiale cu tatuaj pe braț" },
        "Contactul și frecarea cu partenerii sunt incompatibile cu un tatuaj proaspăt. Anunță antrenorul și partenerii de antrenament și evită sparingul sau lupta la sol cu zona tatuată până la vindecare. Poți continua exercițiile de tehnică individuală, dacă nu implică frecarea zonei.",
        { h3: "Cel care merge pe munte" },
        "Pentru excursii de câteva zile, rucsacul, curelele, transpirația și lipsa unui loc curat pentru spălat sunt o combinație grea. Dacă ai o drumeție planificată, nu programa ședința cu câteva zile înainte. Lasă un interval de câteva săptămâni.",
        { h3: "Cel care muncește fizic" },
        "Mulți oameni nu fac sport, dar muncesc fizic: pe șantier, în depozit, în agricultură. Aceleași reguli se aplică: praf, transpirație, frecare cu hainele de lucru. Programează ședința înaintea unui concediu sau a unei perioade mai liniștite, dacă poți.",
        "Dacă situația ta nu se regăsește aici, scrie-ne și o analizăm împreună. Un artist cu experiență poate recomanda o zonă, o dată sau o strategie de protecție adaptată rutinei tale.",
      ],
    },
    {
      id: "piercing-si-sport",
      h2: "Piercingul și sportul",
      blocks: [
        "Piercingurile au propriile reguli. Pentru un piercing nou, perioada de vindecare este mai lungă decât la un tatuaj, iar riscul de agățare, de lovire sau de contact cu apa este permanent.",
        {
          table: {
            head: ["Piercing", "Riscuri în sport", "Ce eviți"],
            rows: [
              ["Ureche (lob, cartilaj)", "Agățare în haine, căști, căști de protecție, lovituri, apă", "Sporturi de contact, înot, căști care apasă urechea"],
              ["Buric", "Frecare cu centura, flexii abdominale, apă", "Exerciții abdominale intense, haine strânse la talie, apă murdară"],
              ["Nas", "Lovituri, transpirație, agățare în prosop", "Sporturi de contact, șters agresiv cu prosopul"],
              ["Buză, sprânceană", "Lovituri, agățare", "Sporturi de contact, ștergere agresivă"],
              ["Intim", "Frecare, transpirație, apă", "Înot, bicicletă, activități cu frecare, până la vindecare"],
            ],
          },
        },
        "Pentru piercing, nu scoate bijuteria pentru sport în perioada de vindecare, cu excepția cazului în care ți-a recomandat piercerul. Un orificiu proaspăt se poate închide rapid. Dacă trebuie să o scoți din motive de siguranță, cere sfatul piercerului dinainte. Mai multe detalii în ghidul despre [îngrijirea unui piercing nou](/ghiduri/cum-ingrijesti-un-piercing-nou).",
      ],
    },
    {
      id: "greseli-frecvente",
      h2: "Greșeli frecvente",
      blocks: [
        {
          ul: [
            "Revenirea prea devreme la sală, la același nivel de efort ca înainte.",
            "Mersul la piscină sau la mare în prima săptămână, pentru că „apa e curată”.",
            "Folosirea cremelor sau a unguentelor nerecomandate, aplicate gros înaintea efortului, ceea ce reține transpirația.",
            "Smulgerea coajei sau zgâriatul mâncărimii după antrenament.",
            "Purtarea hainelor strâmte sau sintetice peste un tatuaj proaspăt.",
            "Ignorarea semnelor de iritație pentru a nu-ți rupe rutina de antrenament.",
            "Atingerea tatuajului cu mâinile murdare după ce ai folosit aparatele.",
            "Programarea ședinței cu câteva zile înainte de o competiție.",
          ],
        },
        "Dacă ai făcut deja una dintre aceste greșeli, nu intra în panică. Oprește activitatea care a irită zona, curăță blând, urmează instrucțiunile artistului și urmărește evoluția. Dacă observi semne de infecție, cere ajutor medical.",
      ],
    },
    {
      id: "cand-ceri-ajutor",
      h2: "Când ceri ajutor",
      blocks: [
        "Majoritatea tatuajelor se vindecă fără probleme, chiar și la oameni activi. Totuși, există situații în care nu mai aștepți.",
        {
          ul: [
            "Roșeață care se extinde dincolo de marginea tatuajului.",
            "Căldură locală intensă și durere care crește în loc să scadă.",
            "Puroi, secreții cu miros neplăcut sau dungi roșii care pornesc din zonă.",
            "Febră, frisoane sau stare generală alterată.",
            "Umflătură importantă, care nu scade după câteva zile.",
          ],
        },
        "Dacă ai oricare dintre aceste semne, contactează un medic. Nu aștepta să treacă singur și nu te trata pe cont propriu cu antibiotice. Dacă ai întrebări legate de felul în care se vindecă tatuajul făcut la noi, scrie-ne pe WhatsApp la +40 766 422 219 și îți răspundem.",
      ],
    },
  ],
  faq: [
    {
      q: "Când mă pot întoarce la sală după un tatuaj?",
      a: "Depinde de zonă și de mărime. De obicei poți relua antrenamentele care nu implică zona tatuată după câteva zile, iar pe cele care o implică după ce coaja s-a desprins și pielea nu mai este sensibilă, adică după câteva săptămâni. Urmează întotdeauna indicațiile artistului.",
    },
    {
      q: "Pot alerga cu un tatuaj nou pe braț?",
      a: "De cele mai multe ori da, la intensitate moderată și cu haine largi și curate. Problema principală este transpirația și frecarea. Dacă tatuajul este pe picior, alergatul se evită în primele săptămâni.",
    },
    {
      q: "Pot înota cu un tatuaj proaspăt?",
      a: "Nu. Piscina, marea, jacuzzi și sauna se evită până când pielea este vindecată la suprafață, ceea ce durează de obicei câteva săptămâni. Întreabă artistul când poți relua.",
    },
    {
      q: "Transpirația strică tatuajul?",
      a: "O singură ședință de transpirație nu îl strică, dar expunerea repetată în perioada de vindecare poate irita pielea și poate crește riscul de infecție. Tamponează transpirația cu un prosop curat, fără să freci, și fă duș după efort.",
    },
    {
      q: "Pot purta mâneci de compresie peste un tatuaj nou?",
      a: "Este de evitat, mai ales dacă sunt strânse sau sintetice. Compresia și frecarea pot rupe coaja și pot irita pielea. Dacă trebuie să le porți din motive medicale, discută cu medicul și cu artistul.",
    },
    {
      q: "Pot face sală cu piercing nou la buric?",
      a: "Poți face antrenamente care nu apasă și nu freacă zona, dar evită exercițiile abdominale intense și hainele strânse la talie în perioada de vindecare. Nu scoate bijuteria fără recomandarea piercerului.",
    },
    {
      q: "Cât trebuie să aștept după tatuaj înainte de o competiție?",
      a: "Nu există o regulă unică. Cel mai sigur este să programezi ședința după competiție. Dacă nu se poate, discută cu artistul despre zonă și despre o strategie de protecție.",
    },
    {
      q: "Pot folosi pansament impermeabil pentru a înota?",
      a: "Pansamentele impermeabile pot fi folosite pentru duș, la recomandarea artistului, dar nu sunt o soluție pentru scufundare. Apa din piscină sau din mare rămâne un risc pentru un tatuaj proaspăt.",
    },
    {
      q: "Mâncărimea apare mai tare după antrenament?",
      a: "Poate, pentru că transpirația și căldura irită pielea. Nu zgâria și nu freca. Dacă mâncărimea este intensă, aplică cremă recomandată de artist și evită efortul până se calmează.",
    },
    {
      q: "Cum mă programez la Hasha Tattoo?",
      a: "Scrie-ne pe WhatsApp la +40 766 422 219, cu ideea, zona și programul tău de antrenament. Poți suna și luni până vineri, între 12:00 și 20:00.",
    },
  ],
  cta: {
    title: ["Ai un program", "de antrenament?"],
    text: "Scrie-ne zona dorită și calendarul tău sportiv. Împreună alegem un moment potrivit pentru ședință, ca vindecarea să nu-ți strice antrenamentele.",
    wa: "Bună! Fac sport și vreau să programez un tatuaj la Hasha Tattoo. Vreau să aleg o zonă și o dată potrivite.",
  },
  related: ["cum-ingrijesti-un-tatuaj-nou", "cum-te-pregatesti-pentru-sedinta-de-tatuaj", "primul-tau-tatuaj"],
};

export default content;
