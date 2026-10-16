import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "„Cât costă un tatuaj?” este prima întrebare pe care o primește aproape orice studio, iar răspunsul onest începe cu „depinde”. Nu pentru că studiourile vor să ascundă ceva, ci pentru că două tatuaje cu aceeași mărime pot cere un număr foarte diferit de ore: unul este o linie simplă, celălalt are umbre fine, detalii mici și culoare.",
    "Ghidul explică ce intră într-un preț de tatuaj în București, cum se calculează, ce factori îl urcă sau îl coboară, cum compari două oferte, ce întrebări pui înainte să plătești un avans și cum eviți costurile neplănuite. Nu dă cifre inventate. Un ghid care promite „un tatuaj mediu costă X lei” induce în eroare, pentru că media nu spune nimic despre tatuajul tău.",
    "Pentru prețurile publice ale Hasha Tattoo, vezi pagina de [prețuri](/preturi). Piercingurile au prețuri afișate, iar tatuajele se calculează după timpul de lucru, cu o estimare clară după ce se discută ideea. Mai jos găsești și tabelul cu prețurile de piercing, pe care le poți verifica direct.",
  ],
  sections: [
    {
      id: "de-ce-nu-exista-pret-fix",
      h2: "De ce nu există un preț fix pentru tatuaje",
      blocks: [
        "Un produs de raft are același preț indiferent cine îl cumpără. Un tatuaj este o lucrare manuală, făcută o singură dată, pe un corp anume. Costul depinde de timpul și de atenția necesare, iar acestea variază enorm de la o idee la alta.",
        "De aceea, un studio care îți dă un preț fix „la telefon”, fără să vadă ideea, fie încasează un risc pe care nu îl poate controla, fie îți va cere mai târziu un supliment. Un studio care îți spune „nu am tarife fixe, trimite-mi ideea și zona și îți dau o estimare” este, de regulă, mai transparent, nu mai puțin.",
        { h3: "Ce înseamnă „o estimare clară”" },
        "O estimare corectă conține: ce desen se face, în ce mărime, în ce zonă, în ce stil, câte ședințe sunt probabile și ce costă în total sau pe ședință. Dacă primești doar o cifră, fără nicio explicație, întreabă ce include.",
        { h3: "Când se poate da un preț rapid" },
        "Pentru lucrări mici și simple, un artist poate estima pe loc, după o poză a zonei și o referință. Pentru lucrări mari, mâneci sau spate, estimarea cere o discuție și, de obicei, un desen. Este normal.",
      ],
    },
    {
      id: "cum-se-calculeaza",
      h2: "Cum se calculează, de fapt, un preț de tatuaj",
      blocks: [
        "Studiourile folosesc, în principal, trei moduri de a stabili prețul. Fiecare are logica lui, iar uneori se combină.",
        {
          table: {
            head: ["Modul", "Cum funcționează", "Când se potrivește"],
            rows: [
              ["După timpul de lucru", "Se estimează orele necesare și se înmulțesc cu tariful artistului", "Lucrări medii și mari, cu detalii, umbre, culoare"],
              ["Preț per lucrare", "Un preț stabilit pentru un desen clar definit", "Desene mici, simple, sau flash-uri gata făcute"],
              ["Minim pe ședință", "O sumă minimă, chiar dacă lucrarea durează puțin", "Tatuaje foarte mici, care consumă materiale și pregătire"],
            ],
          },
        },
        "Hasha Tattoo calculează tatuajele după timpul de lucru. Asta înseamnă că prețul urmărește efortul real: un desen simplu costă mai puțin decât unul foarte detaliat, chiar dacă au aceeași mărime.",
        { h3: "Un exemplu de calcul, doar ilustrativ" },
        "Presupunem, doar ca exemplu de calcul și nu ca tarif al vreunui studio, un artist care lucrează cu 400 lei pe oră. Un desen estimat la 2 ore înseamnă aproximativ 800 lei. Dacă desenul se complică și cere 3 ore, prețul devine aproximativ 1.200 lei. Diferența nu vine din mărime, ci din timpul necesar.",
        "Exemplul arată doar logica. Tariful real depinde de artist, de experiență și de studio. Nu folosi cifrele de mai sus ca referință pentru ofertele pe care le primești.",
        { h3: "Pregătirea intră în preț" },
        "Timpul de lucru nu înseamnă doar minutele în care acul atinge pielea. Studioul pregătește desenul, stencilul, materialele sterile de unică folosință, spațiul și apoi curăță și dezinfectează. Aceste costuri sunt reflectate în preț, fie direct, fie printr-un minim pe ședință.",
      ],
    },
    {
      id: "cei-sase-factori",
      h2: "Cei șase factori care mișcă prețul",
      blocks: [
        "Studioul Hasha Tattoo enumeră șase factori pe care îi ia în calcul. Sunt aceiași pe care îi vei întâlni, în forme apropiate, în aproape orice studio serios.",
        { h3: "1. Complexitatea designului" },
        "Un desen cu linii simple se execută repede. Unul cu umbre fine, texturi, treceri de la întuneric la lumină sau elemente multe cere mult mai multă concentrare și mai mult timp. Complexitatea este cel mai important factor, mai ales la realism și portrete.",
        { h3: "2. Dimensiunea lucrării" },
        "Un desen mai mare acoperă mai multă piele și cere mai mult timp. Relația nu este însă liniară: un tatuaj de două ori mai mare poate costa mai mult decât dublu dacă detaliile se multiplică, sau mai puțin decât dublu dacă este umplut cu suprafețe simple.",
        { h3: "3. Zona corpului" },
        "Zonele mobile sau sensibile, de exemplu coastele, gâtul, mâinile, încheieturile sau picioarele, sunt mai greu de lucrat. Pielea se mișcă, clientul simte mai mult și apar pauze, iar uneori lucrarea durează mai mult decât pe un antebraț. Vezi [harta durerii](/ghiduri/harta-durerii) pentru comparația zonelor.",
        { h3: "4. Color sau monocrom" },
        "Culoarea cere mai mulți pigmenți, uneori mai multe treceri și o atenție la saturație și la ton. De regulă, o lucrare color cere mai mult timp decât una în negru și gri de aceeași mărime. Vezi [cum alegi stilul de tatuaj](/ghiduri/cum-alegi-stilul-de-tatuaj).",
        { h3: "5. Detaliile designului" },
        "Detaliile mici, de exemplu ochi, pene, text fin, texturi, scriu mai greu și cer răbdare. Două desene de aceeași mărime pot avea efort diferit doar prin numărul de detalii.",
        { h3: "6. Experiența artistului" },
        "Un artist cu experiență și cu portofoliu solid lucrează de regulă mai sigur, cu mai puține corecturi, iar cererea pentru timpul lui este mai mare. Tariful reflectă asta. Mai mult despre cum evaluezi un artist găsești în ghidul [cum citești portofoliul unui tatuator](/ghiduri/cum-citesti-portofoliul-unui-tatuator).",
        { h3: "Cum se combină factorii" },
        "Factorii nu se adună mecanic. Un desen mare, dar simplu, într-o zonă comodă, poate costa mai puțin decât unul mic, dar foarte detaliat, în zonă dificilă. De aceea o estimare corectă pornește de la ideea ta, nu de la o listă.",
      ],
    },
    {
      id: "stilul-si-pretul",
      h2: "Stilul ales și efectul lui asupra prețului",
      blocks: [
        "Stilul nu are un preț propriu, dar fiecare stil implică un tip de efort. Tabelul de mai jos nu dă sume, ci arată unde apare timpul.",
        {
          table: {
            head: ["Stil", "Unde se consumă timp", "Ce să ții minte"],
            rows: [
              ["Linework / fine line", "Precizia liniilor, mai ales la desene lungi", "Detaliile foarte fine se estompează mai ușor"],
              ["Black and grey cu umbre", "Umbrirea, trecerile fine de ton", "Cere mai multe ore decât un contur simplu"],
              ["Realism și portret", "Detaliul, asemănarea, volumul", "De regulă cele mai multe ore pe centimetru pătrat"],
              ["Color", "Umplerea cu pigment și combinarea nuanțelor", "Necesită atenție la durabilitate și protecție solară"],
              ["Dotwork", "Fiecare punct se execută separat", "Rezultat grafic, dar consumator de timp"],
              ["Lettering", "Alinierea și uniformitatea literelor", "Un text scurt poate fi rapid, unul lung nu"],
              ["Tradițional (contururi groase, culori pline)", "Contururile și umplerea", "Lizibil și durabil, adesea eficient ca timp"],
            ],
          },
        },
        "Pentru o prezentare completă a stilurilor, vezi [cum alegi stilul de tatuaj](/ghiduri/cum-alegi-stilul-de-tatuaj), iar pentru exemple, paginile despre [portrete](/stiluri/portrete), [mâneci](/stiluri/maneci) și [backpiece](/stiluri/backpiece).",
      ],
    },
    {
      id: "marime-si-pret",
      h2: "Mărimea și cum o poți folosi în favoarea ta",
      blocks: [
        "Mărimea se poate alege în așa fel încât tatuajul să arate bine și să nu coste inutil. Un desen prea mic, cu prea multe detalii, riscă să se strice în timp, iar corectarea costă. Un desen prea mare pentru un buget limitat poate cere compromisuri.",
        {
          ul: [
            "Cere artistului mărimea minimă la care desenul tău rămâne lizibil după ani.",
            "Simplifică detaliile mici, în loc să micșorezi tot desenul.",
            "Dacă bugetul este limitat, discută varianta în etape: o parte acum, restul mai târziu.",
            "Nu cere un desen foarte detaliat într-o dimensiune foarte mică, doar ca să iasă mai ieftin.",
          ],
        },
        "Detalii despre alegerea dimensiunii găsești în ghidul [cum alegi mărimea tatuajului](/ghiduri/cum-alegi-marimea-tatuajului).",
      ],
    },
    {
      id: "mai-multe-sedinte",
      h2: "Lucrările mari: ședințe multiple și buget pe etape",
      blocks: [
        "Mânecile, spatele, coapsele și lucrările mari nu se fac într-o singură zi. Se împart în ședințe, pentru că pielea are nevoie de timp de refacere, iar clientul și artistul obosesc.",
        {
          ul: [
            "Prețul total se stabilește, de regulă, după timpul estimat pentru întreaga lucrare.",
            "Plata se poate face pe ședință, nu neapărat toată suma odată. Întreabă studioul cum procedează.",
            "Între ședințe pielea se vindecă, iar artistul poate ajusta planul.",
            "Planul poate evolua: uneori apar detalii care mai cer o ședință, alteori lucrarea iese mai repede.",
          ],
        },
        "Dacă vrei o lucrare mare, cere de la început o estimare pentru întreg proiectul și numărul probabil de ședințe, ca să îți planifici bugetul pe luni, nu pe zile. Vezi și [cum te pregătești pentru ședința de tatuaj](/ghiduri/cum-te-pregatesti-pentru-sedinta-de-tatuaj).",
      ],
    },
    {
      id: "cover-up-si-corectare",
      h2: "Cover-up și corectare: de ce costă altfel",
      blocks: [
        "Acoperirea unui tatuaj vechi cere, de regulă, mai mult timp și mai multă planificare decât un tatuaj pe piele neatinsă. Artistul trebuie să ascundă desenul vechi, iar rezultatul final se face adesea mai mare și mai închis la culoare decât ai fi ales altfel.",
        {
          ul: [
            "Se evaluează tatuajul vechi: mărime, culoare, densitate, vârstă.",
            "Se propune un desen nou, care să acopere și să arate bine.",
            "Estimarea se face după ce artistul vede tatuajul, nu doar o poză slabă.",
            "Uneori se recomandă mai întâi o estompare cu laser, la un specialist, pentru un rezultat mai bun.",
          ],
        },
        "Pentru detalii, vezi paginile despre [cover-up](/cover-up-tatuaje-bucuresti) și [corectare](/corectare-tatuaje-bucuresti). Costul se stabilește individual, după ce artistul vede lucrarea.",
      ],
    },
    {
      id: "retus-avans-plata",
      h2: "Retușul, avansul și plata: ce întrebi înainte",
      blocks: [
        "Prețul tatuajului nu este singura cifră care contează. Regulile despre retuș, avans și plată pot schimba costul total.",
        {
          table: {
            head: ["Subiect", "Ce întrebi"],
            rows: [
              ["Retuș", "Este inclus în preț? În ce interval se poate face? Ce condiții trebuie îndeplinite?"],
              ["Avans", "Se cere? Ce sumă? Se scade din preț? Se returnează dacă amân sau anulez?"],
              ["Plata", "Se plătește după ședință sau pe etape? Ce metode de plată se acceptă?"],
              ["Anulare", "Ce se întâmplă dacă nu pot veni? Cu cât timp înainte trebuie să anunț?"],
              ["Modificări", "Se pot ajusta detalii pe parcurs? Cât costă modificările?"],
            ],
          },
        },
        "Regulile diferă de la studio la studio, iar Hasha Tattoo își stabilește propriile condiții. Cel mai sigur este să întrebi direct, înainte de ședință, și să notezi răspunsul. Pentru retuș, vezi ghidul despre [retușul tatuajului](/ghiduri/retusul-tatuajului-cand-e-necesar).",
      ],
    },
    {
      id: "cum-compari-doua-oferte",
      h2: "Cum compari două oferte fără să te înșeli",
      blocks: [
        "Două oferte pentru „același tatuaj” nu sunt întotdeauna comparabile. Înainte să alegi pe cea mai mică, verifică ce include fiecare.",
        {
          ol: [
            "Același desen? Un studio poate propune o variantă simplificată, altul una completă.",
            "Aceeași mărime și aceeași zonă?",
            "Același număr de ședințe estimate?",
            "Retușul este inclus sau nu?",
            "Cine execută lucrarea: artistul din portofoliu sau altcineva?",
            "Ce se întâmplă cu avansul?",
            "Ce spun lucrările vindecate ale fiecărui artist?",
          ],
        },
        "O ofertă mai mică poate fi mai bună, dacă ai verificat toate punctele de mai sus. Dacă nu poți compara, cere detalii. Un artist care îți răspunde clar și fără grabă merită, în general, mai mult decât unul care doar dă un preț.",
        { h3: "Preț mic, portofoliu slab" },
        "Dacă diferența de preț este mare și portofoliul este slab, gândește-te la ce vrei de fapt. Un tatuaj prost executat cere corectare sau acoperire, care costă mai mult decât ai economisit. Vezi [cum citești portofoliul unui tatuator](/ghiduri/cum-citesti-portofoliul-unui-tatuator).",
      ],
    },
    {
      id: "semne-de-atentie",
      h2: "Semne de atenție la preț",
      blocks: [
        {
          ul: [
            "Un preț dat imediat, fără să vadă ideea, zona sau mărimea.",
            "Un preț extrem de mic față de alte studiouri, fără explicație.",
            "Cerere de avans mare înainte de orice discuție despre desen.",
            "Refuzul de a explica ce include prețul.",
            "Lipsa unei estimări, chiar și orientative, pentru o lucrare mare.",
            "Presiunea de a decide imediat („oferta e valabilă azi”).",
            "Dispariția retușului din discuție, deși lucrarea pare să-l ceară.",
          ],
        },
        "Niciunul dintre aceste semne nu dovedește singur o problemă, dar adunate spun ceva. Încrederea se construiește prin claritate, nu prin viteză.",
      ],
    },
    {
      id: "cum-reduci-costul",
      h2: "Cum reduci costul fără să sacrifici calitatea",
      blocks: [
        "Dacă bugetul este limitat, există variante care nu strică lucrarea.",
        {
          ul: [
            "Simplifică desenul: mai puține detalii înseamnă mai puțin timp.",
            "Alege un stil mai eficient ca timp, de exemplu linii și umbre simple în loc de realism foarte detaliat.",
            "Alege o zonă mai comodă, unde lucrul decurge mai repede.",
            "Etapizează: începe cu o parte, completează mai târziu.",
            "Alege un flash gata făcut, dacă ți se potrivește.",
            "Vino pregătit: cu ideea clară și referințele, pentru a nu pierde timp la design.",
            "Respectă îngrijirea, pentru a evita retușuri suplimentare.",
          ],
        },
        "Un lucru nu merită făcut: să ceri o reducere prin renunțarea la igienă sau la calitatea materialelor. Acolo nu se negociază.",
        { h3: "Despre negociere" },
        "Poți întreba politicos dacă există o variantă mai accesibilă a ideii tale. Nu insista pe reducerea prețului pentru aceeași lucrare. Un artist bun își calculează timpul, iar a cere mai puțin pentru aceeași muncă înseamnă, de fapt, a cere o lucrare mai grăbită.",
      ],
    },
    {
      id: "costuri-in-plus",
      h2: "Costurile de lângă tatuaj",
      blocks: [
        "Prețul tatuajului nu este singura cheltuială. Bugetul real include și câteva lucruri mici, pe care merită să le iei în calcul de la început.",
        {
          table: {
            head: ["Element", "Ce să știi"],
            rows: [
              ["Produse de îngrijire", "Un produs potrivit pentru vindecare, recomandat de artist. Întreabă ce folosești și nu cumpăra mai mult decât ai nevoie"],
              ["Protecție solară", "Necesară după vindecare, mai ales vara. Vezi ghidul despre tatuaj vara"],
              ["Retuș", "Poate fi inclus sau nu. Verifică înainte"],
              ["Timp liber", "Ședințele lungi ocupă o zi; planifică și zilele de după, fără sport intens"],
              ["Deplasare", "Dacă vii din alt sector sau oraș, ia în calcul transportul"],
              ["Haine potrivite", "Haine largi, pe care nu te deranjează să le murdărești"],
            ],
          },
        },
        "Pentru sport și vară în perioada de vindecare, vezi [tatuajul și sportul](/ghiduri/tatuajul-si-sportul) și [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina).",
      ],
    },
    {
      id: "preturi-piercing",
      h2: "Dar piercingul? Prețuri afișate la Hasha Tattoo",
      blocks: [
        "Spre deosebire de tatuaje, piercingurile au prețuri fixe, pentru că procedura este mai standardizată. Prețurile de mai jos sunt cele din lista studioului, în lei.",
        {
          table: {
            head: ["Piercing", "Preț"],
            rows: [
              ["Lob ureche", "80 lei"],
              ["Cartilaj", "150 lei"],
              ["Industrial", "150 lei"],
              ["Buric", "150 lei"],
              ["Nas", "150 lei"],
              ["Buză", "150 lei"],
              ["Sprânceană", "150 lei"],
              ["Smiley", "150 lei"],
              ["Intim (bijuteria inclusă)", "200 lei"],
              ["Dermal (bijuteria inclusă)", "250 lei"],
            ],
          },
        },
        "Extra: schimbarea unui piercing intim costă 60 lei, iar manopera (schimbare, remontare, verificare, curățare) costă 30 lei. Lista completă și actualizată este pe pagina de [prețuri](/preturi).",
        { h3: "Ce să verifici la bijuterie" },
        "La piercingurile obișnuite, bijuteria se alege separat. Întreabă ce material include prețul și ce opțiuni există. Vezi [cum alegi bijuteria de piercing](/ghiduri/cum-alegi-bijuteria-de-piercing) și [piercing în ureche](/ghiduri/piercing-ureche-ghid).",
      ],
    },
    {
      id: "cum-ceri-o-estimare",
      h2: "Cum ceri o estimare ca să primești un răspuns util",
      blocks: [
        "Cu cât mesajul tău este mai clar, cu atât estimarea este mai precisă și vine mai repede. Pune în mesaj:",
        {
          ol: [
            "Ce vrei să tatuezi, într-o propoziție.",
            "Zona exactă din corp.",
            "Mărimea aproximativă, în centimetri.",
            "Stilul dorit: linii fine, negru și gri, color etc.",
            "Două sau trei imagini de referință.",
            "Dacă este un cover-up, o poză clară a tatuajului vechi, la lumină bună.",
            "Perioada în care vrei să faci tatuajul.",
          ],
        },
        "Pentru un model de mesaj complet, vezi ghidul [cum îi explici ideea unui tatuator](/ghiduri/cum-ii-explici-ideea-unui-tatuator). La Hasha Tattoo poți trimite aceste informații pe WhatsApp la +40 766 422 219.",
        { h3: "Ce vei primi" },
        "Un artist care primește un mesaj complet îți poate răspunde cu o estimare clară, cu numărul probabil de ședințe și cu eventuale sugestii de ajustare a desenului. Dacă ideea cere o discuție, ți se propune o consultație.",
      ],
    },
    {
      id: "greseli-frecvente",
      h2: "Greșeli frecvente când te gândești la preț",
      blocks: [
        {
          ul: [
            "Compararea ofertelor fără să verifici ce include fiecare.",
            "Alegerea celui mai mic preț, fără să te uiți la lucrări vindecate.",
            "Așteptarea unui preț fix pentru o lucrare complexă, fără discuție.",
            "Neluarea în calcul a retușului și a produselor de îngrijire.",
            "Micșorarea desenului doar ca să iasă mai ieftin, pe seama lizibilității.",
            "Plata unui avans mare înainte de a clarifica condițiile.",
            "Neanunțarea unui buget, care ar fi ajutat artistul să propună o variantă potrivită.",
          ],
        },
        "Cel mai simplu antidot este o conversație sinceră. Spune ce ai de gând să cheltuiești, iar artistul poate propune cea mai bună variantă a ideii tale în limita aceea.",
      ],
    },
    {
      id: "ce-primesti-pentru-bani",
      h2: "Ce primești, de fapt, pentru banii tăi",
      blocks: [
        "Prețul unui tatuaj plătește mai mult decât orele artistului. În spatele lui stau lucruri pe care clientul nu le vede, dar pe care le simte în rezultat și în siguranță.",
        {
          table: {
            head: ["Ce intră în preț", "De ce contează"],
            rows: [
              ["Timpul și experiența artistului", "Execuția, siguranța mâinii și deciziile luate pe parcurs"],
              ["Designul și stencilul", "Pregătirea desenului, adaptarea la corp și plasarea corectă"],
              ["Materiale sterile de unică folosință", "Ace, mănuși, folii, capace de cerneală: se aruncă după fiecare client"],
              ["Cerneala", "Calitatea și proveniența influențează siguranța și felul în care îmbătrânește tatuajul"],
              ["Igienă și dezinfecție", "Curățarea suprafețelor, a zonei de lucru și respectarea normelor de igienă"],
              ["Spațiul și utilitățile", "Un studio privat, curat, cu condiții bune de lucru"],
              ["Instrucțiunile de îngrijire", "Normele cer instrucțiuni verbale și scrise după procedură"],
            ],
          },
        },
        "Când un preț este mult sub piață, întreabă-te de unde se taie. Cel mai adesea se taie din materiale, din igienă sau din timpul acordat lucrării, adică exact din lucrurile care contează.",
      ],
    },
    {
      id: "scenarii-comparate",
      h2: "Patru scenarii, comparate fără cifre",
      blocks: [
        "Cel mai simplu mod de a înțelege cum se mișcă prețul este să compari situații concrete. Nu dăm sume, pentru că ele depind de artist și de lucrare. Arătăm doar direcția.",
        {
          table: {
            head: ["Scenariu", "Timp relativ", "Preț relativ", "De ce"],
            rows: [
              ["Un cuvânt scurt, în font simplu, pe antebraț", "Mic", "Mic", "Linii simple, zonă comodă, puține detalii"],
              ["O floare mică în linii fine, pe gleznă", "Mediu", "Mediu spre mic", "Zonă mai delicată și linii care cer precizie"],
              ["Un portret realist pe braț, negru și gri", "Mare", "Mare", "Detaliu, umbre, asemănare, mai multe ședințe"],
              ["Un cover-up pe un tatuaj vechi, mai mare", "Mare", "Mare", "Desenul nou trebuie să ascundă vechiul, deci e mai mare și mai închis"],
            ],
          },
        },
        "Observă că mărimea singură nu decide. Un cuvânt de aceeași lungime cu o floare poate costa diferit, iar un portret mic poate cere mai multe ore decât un desen mai mare, dar simplu.",
      ],
    },
    {
      id: "cum-iti-faci-bugetul",
      h2: "Cum îți faci bugetul, pas cu pas",
      blocks: [
        "Un buget realist te scutește de compromisuri făcute pe loc. Poți parcurge pașii de mai jos înainte de a scrie primului artist.",
        {
          ol: [
            "Decide cât ești dispus să cheltuiești în total, nu doar pentru ședință: tatuaj, îngrijire, eventual retuș.",
            "Hotărăște ce este esențial: mărimea, detaliile, zona sau stilul. Pe restul poți fi flexibil.",
            "Cere estimări de la doi sau trei artiști ale căror lucrări vindecate îți plac.",
            "Compară estimările după aceleași criterii: desen, mărime, zonă, ședințe, retuș.",
            "Spune artistului bugetul și întreabă ce variantă a ideii se potrivește.",
            "Lasă o marjă pentru neprevăzut: o ședință în plus, un retuș, un produs de îngrijire.",
            "Nu te grăbi. Un tatuaj bun merită așteptat până ai banii și până ai decis.",
          ],
        },
        { h3: "Dacă bugetul nu ajunge" },
        "Nu cere artistului să lucreze mai repede sau mai ieftin pentru același rezultat. Cere-i varianta pe care o poate face bine în limita bugetului, sau amâni lucrarea. O lucrare grăbită este cea mai scumpă, pentru că se corectează.",
      ],
    },
    {
      id: "pret-si-valoare",
      h2: "Preț, valoare și costul regretului",
      blocks: [
        "Un tatuaj rămâne cu tine ani de zile. Împărțit la timp, chiar și un tatuaj costisitor ajunge să coste puțin pe an. Dar valoarea nu vine doar din cât durează, ci din cât de bine arată după ce s-a vindecat și după ce a trecut timpul.",
        {
          ul: [
            "Un tatuaj bine executat cere puține sau deloc corecturi, deci costul rămâne cel inițial.",
            "Un tatuaj prost executat cere corectare sau cover-up, care poate costa mai mult decât lucrarea inițială.",
            "Un tatuaj ales în grabă poate fi regretat, iar îndepărtarea completă cere de obicei mai multe ședințe de laser, fără garanție de dispariție totală.",
            "Un tatuaj ales cu calm, cu artist verificat și cu desen potrivit, își păstrează valoarea.",
          ],
        },
        "Cu alte cuvinte, nu căuta cel mai mic preț. Caută cel mai bun raport între preț, calitate și încredere. Mai multe despre cum te asiguri de calitate găsești în ghidul [primul tău tatuaj](/ghiduri/primul-tau-tatuaj).",
      ],
    },
    {
      id: "mituri-despre-pret",
      h2: "Mituri despre prețul tatuajelor",
      blocks: [
        { h3: "„Cu cât e mai mic, cu atât e mai ieftin”" },
        "Nu neapărat. Detaliile contează mai mult decât centimetrii. Un desen mic și foarte fin poate cere mult timp.",
        { h3: "„Studioul scump este automat mai bun”" },
        "Nu. Prețul reflectă experiența și cererea, dar nu garantează că stilul se potrivește ideii tale. Verifică lucrări vindecate.",
        { h3: "„Dacă negociez, primesc aceeași lucrare mai ieftin”" },
        "Rareori. Un artist își calculează timpul. Dacă prețul scade fără ca lucrarea să se schimbe, înseamnă că se taie din altă parte. Mai sigur este să ceri o variantă mai simplă a desenului.",
        { h3: "„Prețul include totul”" },
        "Nu întotdeauna. Retușul, produsele de îngrijire, avansul sau modificările pot fi tratate separat. Întreabă.",
        { h3: "„Un tatuaj color costă la fel ca unul negru”" },
        "De regulă nu. Culoarea cere mai mult timp și atenție, deci poate costa mai mult la aceeași mărime.",
        "Pentru alte mituri legate de tatuaje, vezi [mituri despre tatuaje și piercing](/ghiduri/mituri-despre-tatuaje-si-piercing).",
      ],
    },
    {
      id: "intrebari-despre-pret",
      h2: "Întrebările pe care le pui artistului despre preț",
      blocks: [
        "Dacă ai o listă scurtă, conversația despre bani devine simplă și nu mai are nimic stânjenitor. Artiștii serioși sunt obișnuiți cu ele și preferă clienții informați.",
        {
          ol: [
            "Prețul acesta este pentru toată lucrarea sau doar pentru prima ședință?",
            "Câte ședințe estimezi și cât durează fiecare?",
            "Ce se întâmplă dacă lucrarea durează mai mult decât estimarea?",
            "Ce include prețul: desen, stencil, materiale, retuș?",
            "Care sunt condițiile pentru avans, anulare sau mutarea datei?",
            "Cum se plătește: după fiecare ședință sau la final?",
            "Ce produs de îngrijire recomanzi și cât costă, aproximativ?",
            "Există o variantă mai simplă a desenului, care ar costa mai puțin?",
          ],
        },
        "Notează răspunsurile. Dacă primești un răspuns vag la una dintre ele, cere să ți-l clarifice. Claritatea în privința banilor este un semn bun pentru restul colaborării.",
        { h3: "Dacă estimarea se schimbă pe parcurs" },
        "Se poate întâmpla ca o lucrare complexă să ceară mai mult timp decât s-a estimat, de exemplu dacă pielea reacționează sau dacă apar detalii noi. Un artist corect te anunță din timp și discută cu tine ce se poate face, nu te pune în fața unui preț nou la final.",
      ],
    },
  ],
  faq: [
    {
      q: "Cât costă un tatuaj în București?",
      a: "Nu există un preț unic. Depinde de complexitate, mărime, zonă, culoare, detalii și experiența artistului. La Hasha Tattoo, tatuajele se calculează după timpul de lucru, iar estimarea se dă după ce se discută ideea ta.",
    },
    {
      q: "De ce nu are Hasha Tattoo tarife fixe pentru tatuaje?",
      a: "Pentru că două lucrări nu seamănă niciodată. Prețul urmărește timpul real de lucru, iar o estimare clară se dă după ce discutăm ideea, zona și mărimea.",
    },
    {
      q: "Un tatuaj mic costă puțin?",
      a: "Nu neapărat. Un desen mic, dar foarte detaliat, poate cere mai mult timp decât unul mai mare și simplu. Prețul urmărește efortul, nu doar mărimea.",
    },
    {
      q: "Culoarea face tatuajul mai scump?",
      a: "De regulă, o lucrare color cere mai mult timp decât una în negru și gri de aceeași mărime, deci poate costa mai mult. Estimarea se face pe desenul concret.",
    },
    {
      q: "Cât costă un piercing la Hasha Tattoo?",
      a: "Lobul ureche costă 80 lei. Cartilaj, industrial, buric, nas, buză, sprânceană și smiley costă 150 lei. Intimul costă 200 lei, iar dermalul 250 lei, cu bijuteria inclusă. Lista completă este pe pagina de prețuri.",
    },
    {
      q: "Pot primi o estimare înainte să vin la studio?",
      a: "Da. Trimite pe WhatsApp ideea, zona, mărimea aproximativă și referințele, iar un artist îți răspunde cu o estimare. Pentru lucrări mari, se poate propune o consultație.",
    },
    {
      q: "Retușul se plătește separat?",
      a: "Depinde de studio. Politica de retuș diferă, așa că întreabă direct înainte de ședință ce este inclus și în ce condiții.",
    },
    {
      q: "Cum evit un preț surpriză?",
      a: "Cere o estimare scrisă sau confirmată în mesaj, cu desenul, mărimea, zona și numărul probabil de ședințe. Întreabă ce include și ce nu include prețul, inclusiv retușul.",
    },
    {
      q: "Cum mă programez?",
      a: "Scrie-ne pe WhatsApp la +40 766 422 219 sau completează formularul de pe pagina de prețuri. Programul este de luni până vineri, între 12:00 și 20:00.",
    },
    {
      q: "Pot să plătesc în rate sau pe ședințe?",
      a: "Pentru lucrări mari, plata se poate face, de regulă, pe ședințe, nu neapărat toată suma odată. Regulile exacte diferă de la studio la studio, așa că întreabă înainte de prima ședință.",
    },
    {
      q: "Merită să aștept mai mult pentru un artist mai bun?",
      a: "De obicei da, mai ales la lucrări mari sau greu de corectat. Un tatuaj prost executat costă ulterior corectare sau acoperire. Compară lucrările vindecate, nu doar prețurile.",
    },
    {
      q: "Ce se întâmplă dacă nu am bani pentru toată lucrarea?",
      a: "Spune-i artistului bugetul. Se poate propune o variantă mai simplă a desenului sau o lucrare în etape, iar restul se completează mai târziu.",
    },
    {
      q: "Prețul unui tatuaj include taxele sau bacșișul?",
      a: "Prețul este cel stabilit în estimare. Bacșișul este opțional și nu face parte din preț. Dacă vrei să știi ce include exact suma, întreabă artistul înainte de ședință.",
    },
    {
      q: "Pot primi o estimare doar după o poză?",
      a: "Pentru lucrări mici și simple, da, o poză a zonei și o referință sunt de obicei suficiente. Pentru lucrări mari sau cover-up, artistul poate cere o discuție sau o consultație, ca să dea o estimare corectă.",
    },
  ],
  cta: {
    title: ["Vrei o estimare", "pentru tatuajul tău?"],
    text: "Trimite-ne ideea, zona și mărimea aproximativă. Un artist îți răspunde cu o estimare clară, fără surprize.",
    wa: "Bună! Vreau o estimare pentru un tatuaj la Hasha Tattoo. Vă trimit ideea, zona, mărimea aproximativă și referințele.",
  },
  related: ["cum-alegi-marimea-tatuajului", "cum-ii-explici-ideea-unui-tatuator", "cum-citesti-portofoliul-unui-tatuator"],
};

export default content;
