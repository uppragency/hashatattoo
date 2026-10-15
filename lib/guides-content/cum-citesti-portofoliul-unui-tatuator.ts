import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "Portofoliul este cartea de vizită a oricărui tatuator. Este locul în care vezi ce știe să facă, în ce stil, cu ce nivel de detaliu și cu ce consecvență. Dar a te uita la portofoliu nu înseamnă același lucru cu a-l citi. Cei mai mulți oameni se uită la imagini ca la o expoziție: le place sau nu le place. Cine știe ce să caute vede mult mai mult: calitatea liniei, curățenia umbrelor, felul în care tatuajul stă pe corp și, mai ales, cum arată după vindecare.",
    "Alegerea unui tatuator este una dintre cele mai importante decizii legate de un tatuaj. Un desen frumos, realizat prost, rămâne prost. Un desen simplu, realizat impecabil, arată bine ani la rând. Diferența se vede în portofoliu, dacă știi unde să te uiți.",
    "Ghidul explică, pe înțelesul oricui, ce urmărești într-un portofoliu: liniile, umbrele, culorile, compoziția, consecvența, ce arată o poză proaspătă și ce arată una vindecată, cum recunoști retușul excesiv și filtrele, cum te asiguri că lucrările sunt ale artistului și ce întrebări pui. Nu ai nevoie de pregătire tehnică, doar de atenție.",
  ],
  sections: [
    {
      id: "ce-este-un-portofoliu",
      h2: "Ce este și ce nu este un portofoliu",
      blocks: [
        "Un portofoliu este o selecție de lucrări făcute de același artist, ales de el să-l reprezinte. Prin definiție, arată lucrurile bune. Nimeni nu pune în portofoliu lucrarea de care nu e mulțumit, deci portofoliul nu este un document obiectiv, ci o prezentare.",
        { h3: "Ce îți spune un portofoliu" },
        {
          ul: [
            "Ce stiluri stăpânește artistul și în ce stil excelează.",
            "Nivelul tehnic maxim pe care îl atinge, în condiții bune.",
            "Cum gândește compoziția și cum așază un desen pe corp.",
            "Cât de consecvent este în calitate.",
            "Ce fel de proiecte face cel mai des: mici, mari, portrete, mâneci, piese fine.",
          ],
        },
        { h3: "Ce nu îți spune" },
        {
          ul: [
            "Cum se vindecă lucrările în timp, dacă artistul arată doar poze proaspete.",
            "Cum se poartă artistul cu clienții și cât de bine respectă programările.",
            "Cât de igienic lucrează.",
            "Cum arată media lucrărilor, nu doar cele mai bune.",
            "Dacă pozele sunt neprelucrate.",
          ],
        },
        "De aceea portofoliul este doar prima etapă. Urmează întrebările, discuția directă și, dacă e posibil, lucrările vindecate arătate în persoană.",
      ],
    },
    {
      id: "liniile",
      h2: "Liniile: baza oricărui tatuaj",
      blocks: [
        "Liniile sunt primul lucru la care te uiți, pentru că sunt cel mai greu de falsificat. O linie bine executată este continuă, cu grosime constantă (sau variată intenționat), fără tremur și fără întreruperi.",
        { h3: "Ce urmărești" },
        {
          ul: [
            "Continuitatea: linia trece dintr-o singură mișcare, fără întreruperi sau „trepte”.",
            "Grosimea: constantă acolo unde trebuie, variată acolo unde designul cere, nu accidental.",
            "Curbele: cercurile și arcele sunt fluide, nu poligonale sau deformate.",
            "Colțurile: unghiurile sunt clare, nu rotunjite în mod necontrolat.",
            "Paralelismul: liniile care trebuie să fie paralele sunt paralele.",
            "Terminarea: capetele liniilor sunt curate, nu se termină în pete sau în grosimi bruște.",
          ],
        },
        { h3: "Cum verifici rapid" },
        "Mărește poza și urmărește o linie lungă de la un capăt la altul. Dacă ai senzația că „tremură”, că se îngroașă fără motiv sau că se rupe, calitatea nu este ridicată. Compară cu un cerc sau cu o linie dreaptă din aceeași lucrare: ochiul uman observă ușor abaterile.",
        { h3: "Linii fine și linii groase" },
        "Liniile fine sunt mai greu de executat constant, dar și mai fragile în timp. Liniile groase sunt mai durabile, dar greșelile se văd mai ușor. Un artist bun alege grosimea în funcție de zonă, de mărimea desenului și de felul în care se va vedea după ani. Pentru felul în care îmbătrânesc tatuajele, vezi ghidul despre [cum alegi stilul de tatuaj](/ghiduri/cum-alegi-stilul-de-tatuaj).",
      ],
    },
    {
      id: "umbrele-si-degradeurile",
      h2: "Umbrele și degradeurile",
      blocks: [
        "În tatuajele realiste și în cele black and grey, umbrele fac diferența. Aici se vede măiestria cu adevărat: degradeurile fine, trecerile line de la negru la piele și volumul creat doar prin tonuri.",
        { h3: "Ce urmărești la umbre" },
        {
          ul: [
            "Netezimea: tranzițiile sunt line, fără pete, dungi sau granulație neuniformă.",
            "Uniformitatea: zonele din aceeași nuanță arată la fel pe toată suprafața.",
            "Profunzimea: există o gamă largă de la cele mai deschise la cele mai întunecate tonuri, nu doar două sau trei trepte.",
            "Contrastul: partea cea mai întunecată este suficient de închisă, iar cea mai luminoasă lasă pielea să respire.",
            "Volumul: obiectul pare tridimensional, nu plat.",
          ],
        },
        { h3: "Semne de umbre slabe" },
        {
          ul: [
            "Pete întunecate cu margini bruște, nu degradate.",
            "Zone cu aspect „pătat” sau granulat inegal.",
            "Dungi vizibile, care arată direcția mișcării aparatului.",
            "Contrast slab: totul arată cenușiu, fără negru profund.",
            "Detalii pierdute în umbre, fără definiție.",
          ],
        },
        "Pentru stilurile realiste, uită-te cu atenție la portrete: ochii, buzele și pielea sunt zone în care erorile se văd imediat. Dacă artistul a realizat convingător aceste zone, nivelul tehnic este ridicat. Pentru mai multe despre stiluri, vezi paginile despre [realism](/tatuaje) și [portrete](/stiluri/portrete).",
      ],
    },
    {
      id: "culoarea",
      h2: "Culoarea",
      blocks: [
        "Tatuajele color au propriile criterii. Culoarea bună este plină, uniformă și armonioasă, iar o lucrare color bine făcută arată vie chiar și după ani, dacă este protejată.",
        { h3: "Ce urmărești" },
        {
          ul: [
            "Saturația: culorile sunt pline, fără zone „goale” sau străvezii în interiorul suprafețelor.",
            "Uniformitatea: aceeași culoare arată la fel pe toată suprafața, fără pete mai deschise sau mai închise.",
            "Tranzițiile: trecerea dintre culori este curată, iar degradeurile sunt line.",
            "Paleta: culorile se potrivesc între ele și susțin ideea desenului.",
            "Contururile: dacă există, sunt clare și nu se amestecă cu culoarea.",
          ],
        },
        { h3: "Atenție la poze" },
        "Culorile din fotografii depind enorm de lumină, de cameră și de editare. O poză cu saturația mărită poate arăta spectaculos, dar nu corespunde realității. Dacă este posibil, ia în calcul pozele făcute la lumină naturală, fără filtre. Dacă ai ocazia să vezi lucrarea direct, este cea mai bună variantă.",
        { h3: "Culorile în timp" },
        "Unele culori se estompează mai repede decât altele, în special cele deschise: galben, portocaliu, alb, roz. Un artist responsabil îți spune asta și îți arată lucrări color vindecate, vechi de câțiva ani. Vezi și ghidul despre [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina), pentru protecția solară.",
      ],
    },
    {
      id: "compozitie-si-amplasare",
      h2: "Compoziția și amplasarea pe corp",
      blocks: [
        "Un desen frumos poate arăta prost pe corp, dacă nu este așezat bine. Compoziția și amplasarea separă un tatuator tehnic de un artist cu gândire vizuală.",
        { h3: "Ce urmărești" },
        {
          ul: [
            "Fluxul: desenul urmează liniile corpului (musculatura, curbura brațului, a spatelui) și nu pare lipit peste el.",
            "Proporția: mărimea desenului se potrivește cu zona. Nici prea mic și pierdut, nici prea mare și înghesuit.",
            "Orientarea: tatuajul se citește corect din poziția în care îl vede purtătorul și privitorul.",
            "Echilibrul: spațiul gol din jur este folosit conștient.",
            "Integrarea: în lucrările de mai multe elemente, piesele par să aparțină aceluiași tot.",
          ],
        },
        { h3: "Mâneci și piese mari" },
        "La lucrările mari, cum ar fi mânecile, spatele sau piesele care acoperă o zonă întreagă, compoziția devine esențială. Uită-te dacă toate părțile sunt coerente, dacă tranzițiile dintre elemente sunt naturale și dacă există o idee generală, nu doar o colecție de desene. Vezi și paginile despre [mâneci](/stiluri/maneci) și [backpiece](/stiluri/backpiece).",
        { h3: "Fotografia în context" },
        "Unele lucrări sunt prezentate pe fundal neutru, altele pe corp, în mișcare. Cele din urmă arată mai multe: cum stă tatuajul pe cineva real, în lumina obișnuită, în poziții diferite. Caută fotografii din mai multe unghiuri, nu doar una frontală, aleasă cu grijă.",
      ],
    },
    {
      id: "proaspat-vs-vindecat",
      h2: "Poze proaspete și poze vindecate",
      blocks: [
        "Aceasta este cea mai importantă distincție dintr-un portofoliu. Un tatuaj proaspăt arată întotdeauna mai bine decât unul vindecat: pielea este puțin umflată și roșie, contrastul pare mai puternic, liniile mai ferme. Un tatuaj vindecat arată realitatea, adică ce rămâne după câteva săptămâni sau luni.",
        {
          table: {
            head: ["", "Poză proaspătă", "Poză vindecată"],
            rows: [
              ["Aspect general", "Contrast ridicat, culori vii, uneori cu pielea roșie și lucioasă", "Contrast mai calm, pielea revenită la normal"],
              ["Ce arată despre artist", "Ce a vrut să facă și cum a executat în ședință", "Cât a rămas din execuție și cât de bine s-a vindecat"],
              ["Linii", "Ferme, dar pot părea mai groase datorită umflăturii", "Reale, fără umflătură; arată dacă au rămas clare"],
              ["Umbre", "Intense, uneori exagerate", "Arată adevărata profunzime și dacă s-a păstrat degradeul"],
              ["Culoare", "Foarte saturată", "Arată cât din culoare s-a păstrat"],
              ["Utilitate", "Limitată pentru a judeca calitatea", "Cea mai relevantă"],
            ],
          },
        },
        {
          note: "Cere să vezi lucrări vindecate, vechi de cel puțin câteva luni, de preferință de un an sau mai mult. Un artist care îți poate arăta așa ceva are încredere în ce face.",
          title: "Cel mai bun sfat",
        },
        { h3: "Cum recunoști o poză vindecată" },
        {
          ul: [
            "Pielea este mată sau cu luciu natural, fără roșeață sau urme de coajă.",
            "Nu se vede umflătură sau iritație.",
            "Postarea menționează „healed” sau „vindecat”, iar uneori are și data realizării.",
            "Artistul arată un „înainte, proaspăt” și un „după, vindecat” al aceleiași lucrări.",
          ],
        },
        "Un portofoliu format doar din poze proaspete nu este neapărat suspect, dar e incomplet. Întreabă dacă există lucrări vindecate și cere să le vezi. Pentru felul în care se vindecă un tatuaj, vezi și [îngrijirea unui tatuaj nou](/ghiduri/cum-ingrijesti-un-tatuaj-nou).",
      ],
    },
    {
      id: "retus-si-filtre",
      h2: "Retuș, filtre și lumină: cum te păcălesc pozele",
      blocks: [
        "Fotografiile pot fi editate în moduri care schimbă mult impresia. Nu orice editare este necinstită, dar unele schimbări ascund defecte sau exagerează calitatea.",
        { h3: "Semne de editare excesivă" },
        {
          ul: [
            "Pielea arată perfect netedă, fără pori, fire de păr sau imperfecțiuni: este posibil să fi fost netezită.",
            "Contrastul și saturația sunt mult mai mari decât ar fi logic pe piele reală.",
            "Culorile sunt neobișnuit de vii, aproape fosforescente.",
            "Poza arată ca o ilustrație lipită pe corp, nu ca un tatuaj pe piele.",
            "Toate pozele au aceeași lumină și același filtru, în condiții foarte diferite.",
            "Marginile tatuajului sunt prea clare, fără nicio zonă de tranziție cu pielea.",
          ],
        },
        { h3: "Semne de poză autentică" },
        {
          ul: [
            "Lumină naturală sau uniformă, fără reflexii puternice.",
            "Textura pielii vizibilă, cu pori și, uneori, păr sau vene.",
            "Poze din mai multe unghiuri, nu doar una.",
            "Coloristică realistă: nu există strălucire artificială.",
            "Pozele sunt nu doar cele „perfecte”, ci și cele de rutină.",
          ],
        },
        { h3: "Lumina schimbă totul" },
        "Aceeași lucrare poate arăta diferit sub lumina directă a unei lămpi, la lumina zilei sau la lumina unui bliț. Blițul turtește volumul și evidențiază orice textură. Dacă îți place un tatuaj dintr-o poză, încearcă să-l vezi și în altă lumină sau direct.",
        { h3: "Nu există poză perfectă" },
        "Chiar și cei mai buni artiști au lucrări care nu arată perfect în fotografie. Dacă toate pozele arată impecabil, ca în reviste, mai aprofundează: întreabă, caută mai multe surse, cere să vezi persoane reale.",
      ],
    },
    {
      id: "consecventa-si-specializare",
      h2: "Consecvență, specializare și versatilitate",
      blocks: [
        "Un portofoliu bun are o direcție. Îți arată ce știe artistul să facă foarte bine, nu doar că poate face de toate.",
        { h3: "Consecvența" },
        "Calitatea lucrărilor trebuie să fie relativ constantă. Un portofoliu cu două lucrări excelente și zece mediocre sugerează că excelența este excepția. Un portofoliu cu douăzeci de lucrări bune, de același nivel, arată un meșteșug solid.",
        { h3: "Specializarea" },
        "Cei mai buni artiști au de obicei un stil sau două în care excelează. Dacă vrei un portret realist, caută un artist care face multe portrete bune, nu unul care face puțin din toate. La fel pentru caligrafie, ornamental, minimalism, color sau black and grey.",
        { h3: "Versatilitatea" },
        "Un portofoliu variat nu este un defect, dar merită întrebat: aceste lucrări sunt tot la același nivel? Un artist versatil poate fi excelent, dar dacă fiecare stil arată doar acceptabil, este mai prudent să alegi un specialist.",
        { h3: "Potrivirea cu ideea ta" },
        "Cel mai important: găsește în portofoliu lucrări apropiate de ce vrei. Dacă vrei un tatuaj minimalist și portofoliul este plin de lucrări realiste mari, întreabă dacă artistul face și lucrări fine. Dacă vrei un portret și nu există niciunul, caută în altă parte. Pentru a decide stilul, vezi pagina cu [stilurile de tatuaj](/stiluri) și galeria filtrată.",
      ],
    },
    {
      id: "tehnici-pe-stiluri",
      h2: "Ce cauți în portofoliu, în funcție de stilul dorit",
      blocks: [
        "Criteriile se schimbă după stil. Ce contează la un portret realist nu este același lucru cu ce contează la un tatuaj ornamental sau la unul minimalist. Tabelul de mai jos rezumă lucrurile esențiale pentru fiecare.",
        {
          table: {
            head: ["Stilul", "Ce verifici în portofoliu", "Semn de calitate"],
            rows: [
              ["Realism black and grey", "Degradeuri, volum, detalii în zonele întunecate și luminoase, ochi și piele la portrete", "Tranziții line, contrast bogat, detaliu clar și la scară mică"],
              ["Realism color", "Fidelitatea culorilor, tonurile pielii, tranzițiile dintre culori", "Culori armonioase, fără pete, cu umbre care dau volum"],
              ["Portrete", "Asemănare, expresie, ochi, pielea, părul", "Chipul pare viu, nu plat; proporțiile sunt corecte"],
              ["Fine line, minimalism", "Constanța liniei, spațierea, claritatea detaliilor mici", "Linii egale, fără tremur, fără puncte îngroșate"],
              ["Ornamental, geometric", "Simetria, precizia, repetiția, alinierea la corp", "Modelele se potrivesc și sunt simetrice"],
              ["Caligrafie, text", "Lizibilitatea, spațierea literelor, uniformitatea", "Literele sunt clare și proporționale, fără deformări"],
              ["Mâneci, backpiece", "Coerența întregului, tranzițiile, fluxul pe corp", "Lucrarea pare gândită ca un tot, nu ca piese separate"],
              ["Cover-up", "Cât de bine a fost acoperit tatuajul vechi, raportul înainte și după", "Tatuajul vechi nu se mai vede, iar noul arată natural"],
            ],
          },
        },
        "Dacă vrei un anumit stil, caută în portofoliu cel puțin cinci sau zece lucrări din acel stil, nu una singură. O lucrare bună poate fi accident, zece lucrări bune arată meșteșug.",
        { h3: "Cover-up și corectări" },
        "Pentru cover-up este util să vezi poze înainte și după. Acoperirea unui tatuaj vechi este printre cele mai grele lucrări, iar un portofoliu cu astfel de exemple arată experiență reală. Mai multe despre [cover-up tatuaje](/cover-up-tatuaje-bucuresti) și [corectare tatuaje](/corectare-tatuaje-bucuresti) în paginile dedicate.",
        { h3: "Detaliile mici" },
        "Pentru tatuajele mici și fine, caută lucrări care arată bine și la mărire. Dacă la zoom liniile se rup sau se pătează, riscul este ca în timp tatuajul să se estompeze rapid. Un artist cu mână sigură pe lucrări mici arată de obicei și o înțelegere bună a cum îmbătrânesc detaliile.",
      ],
    },
    {
      id: "retele-sociale",
      h2: "Portofoliul pe rețelele sociale: avantaje și capcane",
      blocks: [
        "Cei mai mulți artiști își țin portofoliul pe rețelele sociale. Este comod, dar vine cu limite pe care e bine să le cunoști.",
        { h3: "Avantaje" },
        {
          ul: [
            "Vezi evoluția în timp: lucrări vechi și noi, în ordine cronologică.",
            "Poți vedea clipuri, nu doar poze, ceea ce arată procesul și mișcarea pielii.",
            "Poți citi comentarii și poți observa cum comunică artistul.",
            "Găsești ușor mai mulți artiști și îi poți compara.",
          ],
        },
        { h3: "Capcane" },
        {
          ul: [
            "Algoritmul favorizează imaginile spectaculoase, nu cele reprezentative.",
            "Filtrele și editarea sunt la îndemână, iar pozele arată adesea mai bine decât realitatea.",
            "Numărul de urmăritori nu este un indicator al calității. Poate fi cumpărat sau obținut prin conținut care nu are legătură cu tatuajele.",
            "Comentariile pot fi moderate sau false.",
            "Postările sunt adesea selectate pentru impact, nu pentru onestitate.",
          ],
        },
        { h3: "Cum folosești rețelele inteligent" },
        {
          ul: [
            "Derulează până la început: lucrările vechi arată cât de mult a progresat artistul și cât de consecvent este.",
            "Caută postările etichetate cu „healed” sau cu o dată ulterioară ședinței.",
            "Urmărește story-urile și clipurile din studio: arată mediul de lucru și modul de lucru.",
            "Citește comentariile: cum răspunde artistul la întrebări și la critici?",
            "Verifică dacă lucrările sunt etichetate cu clienții sau cu locația.",
          ],
        },
        "Rețelele sunt un punct de plecare, nu un verdict. După ce ai o listă scurtă de artiști, treci la conversația directă și, dacă poți, la o vizită în studio.",
      ],
    },
    {
      id: "vizita-in-studio",
      h2: "Portofoliul fizic: vizita în studio",
      blocks: [
        "Cel mai bun mod de a evalua un artist este să-i vezi lucrările în persoană. Multe studiouri au un portofoliu fizic, un album sau o galerie, iar unii artiști pot arăta lucrări vindecate pe clienți dispuși.",
        { h3: "Ce vezi în persoană și nu vezi în poză" },
        {
          ul: [
            "Culoarea reală, fără filtre și fără efectul luminii din fotografie.",
            "Textura și relieful pielii, inclusiv orice urmă de cicatrice sau îngroșare.",
            "Cum se mișcă tatuajul odată cu corpul.",
            "Detaliile mici, pe care o poză le poate ascunde.",
            "Atmosfera din studio, curățenia și felul în care ești tratat.",
          ],
        },
        { h3: "Cum abordezi vizita" },
        "Nu este nevoie să te programezi ca să vezi un portofoliu. Poți scrie înainte și întreba dacă poți trece pe la studio, într-un interval în care artistul este disponibil. La Hasha Tattoo, studioul este la Bulevardul Mărășești nr. 80, Sector 4, iar programul este de luni până vineri, între 12:00 și 20:00. Scrie-ne pe WhatsApp înainte, pentru a ne asigura că cineva este disponibil să te primească.",
        { h3: "Ce observi la studio" },
        {
          ul: [
            "Curățenia și ordinea în spațiul de lucru.",
            "Felul în care te primește echipa și cum răspunde la întrebări.",
            "Dacă te simți în largul tău și dacă ți se permite să pui întrebări.",
            "Dacă ți se arată și lucrări vindecate, nu doar fotografii.",
            "Dacă nu ești presat să te programezi pe loc.",
          ],
        },
        "O vizită scurtă îți poate spune mai mult decât ore petrecute pe rețele. Dacă te simți bine, probabil ești în locul potrivit.",
      ],
    },
    {
      id: "autenticitate",
      h2: "Sunt lucrările ale artistului?",
      blocks: [
        "Din păcate, există portofolii cu poze luate de la alții. Este o practică înșelătoare, iar un client o poate recunoaște cu puțină atenție.",
        { h3: "Semne de alarmă" },
        {
          ul: [
            "Lucrări foarte diferite ca nivel și ca stil, de parcă ar proveni de la mai mulți artiști.",
            "Imagini cu rezoluție foarte mare, în stil de reviste, fără nicio poză de rutină.",
            "Lipsa oricărei poze din studio, cu artistul lucrând, sau din procesul de lucru.",
            "Același tatuaj apare pe conturi diferite, cu nume diferite.",
            "Artistul nu poate explica detalii despre o lucrare: cât a durat, ce a fost greu, ce s-a schimbat față de desen.",
          ],
        },
        { h3: "Cum verifici" },
        {
          ul: [
            "Caută imaginea cu o căutare inversă de imagini, pentru a vedea dacă apare la alt autor.",
            "Cere să vezi lucrări în persoană, la studio, sau clienți reali, cu acordul lor.",
            "Întreabă artistul despre o lucrare anume: cum a fost realizată, ce a durat, ce a fost provocator.",
            "Urmărește procesul: clipuri sau poze din timpul lucrului sunt greu de falsificat.",
            "Caută recenzii independente, nu doar cele de pe pagina proprie.",
          ],
        },
        "Un artist autentic nu se supără la aceste întrebări. Dimpotrivă, le răspunde cu plăcere și cu detalii.",
      ],
    },
    {
      id: "fisa-de-evaluare",
      h2: "Fișa rapidă de evaluare",
      blocks: [
        "Dacă te uiți la mai mulți artiști, o fișă simplă te ajută să-i compari corect, nu doar după prima impresie. Acordă fiecărui criteriu o notă de la 1 la 5 și adună punctele.",
        {
          table: {
            head: ["Criteriul", "Ce notezi", "Nota (1 până la 5)"],
            rows: [
              ["Linii", "Continuitate, grosime, curbe, colțuri", "..."],
              ["Umbre sau culoare", "Netezime, uniformitate, profunzime, saturație", "..."],
              ["Compoziție", "Flux pe corp, proporție, echilibru", "..."],
              ["Potrivirea cu ideea ta", "Câte lucrări apropiate de ce vrei ai văzut", "..."],
              ["Lucrări vindecate", "Ai văzut lucrări de peste câteva luni și cum arată", "..."],
              ["Autenticitate", "Pozele par neprelucrate, procesul este vizibil", "..."],
              ["Comunicare", "Răspunsuri clare, sincere, fără presiune", "..."],
              ["Igienă și atmosferă", "Studio curat, echipament sigilat, conduită profesionistă", "..."],
            ],
          },
        },
        "Un total de peste 32 de puncte din 40 sugerează un artist solid pentru ideea ta. Sub 25, ia în calcul alte variante. Nu este o știință exactă, dar te obligă să te uiți la fiecare element, nu doar la impresia generală.",
        { h3: "Cum folosești fișa" },
        {
          ul: [
            "Completează-o pentru doi sau trei artiști, ca să ai termen de comparație.",
            "Dă greutate mai mare criteriilor care contează pentru tine: la un portret, de exemplu, umbrele și potrivirea cu ideea.",
            "Nu lăsa o notă mică la comunicare să fie ignorată doar pentru că lucrările sunt frumoase. Vei lucra ore în șir cu acest om.",
            "Reia evaluarea după ce vezi o lucrare vindecată sau după ce ai discutat direct.",
          ],
        },
        { h3: "Încrederea contează" },
        "Dincolo de note, contează și senzația generală. Dacă ceva nu ți se pare în regulă, chiar dacă nu poți spune exact ce, merită să mai aștepți sau să cauți încă o părere. Un tatuaj este o decizie pe termen lung, iar o alegere făcută cu liniște este mai bună decât una făcută din grabă.",
      ],
    },
    {
      id: "marimea-portofoliului",
      h2: "Cât de mare trebuie să fie un portofoliu",
      blocks: [
        "Nu există un număr magic, dar proporțiile contează. Un artist la început de drum poate avea un portofoliu mic, iar un artist cu experiență are, în general, mai multă variație și mai multe lucrări vindecate.",
        {
          table: {
            head: ["Situația", "Ce înseamnă"],
            rows: [
              ["Puține lucrări, toate foarte bune", "Poate fi un artist nou, dar cu nivel bun, sau un artist selectiv; întreabă despre experiență"],
              ["Multe lucrări, calitate constantă", "Semn de meșteșug solid și de experiență"],
              ["Multe lucrări, calitate foarte variabilă", "Nivel inconsistent sau portofoliu fără selecție"],
              ["Lucrări vechi și noi, cu progres vizibil", "Artist care evoluează; urmărește evoluția"],
              ["Doar lucrări noi, fără istoric", "Poate fi un portofoliu nou sau resetat; întreabă despre vechime"],
            ],
          },
        },
        "Nu exclude un artist tânăr doar pentru că are mai puține lucrări. Judecă nivelul lucrărilor pe care le vezi, nu numărul lor. Dar nici nu-ți asuma riscul unui tatuaj mare cu un artist ale cărui lucrări vindecate nu le-ai văzut.",
      ],
    },
    {
      id: "intrebari-de-pus",
      h2: "Întrebări de pus artistului",
      blocks: [
        "După ce ai văzut portofoliul, urmează conversația. Câteva întrebări simple îți arată mult.",
        {
          ol: [
            "Pot vedea lucrări vindecate, vechi de cel puțin câteva luni?",
            "Ce stil sau ce tip de lucrări faceți cel mai des și cu cele mai bune rezultate?",
            "Cum se potrivește ideea mea cu ce faceți? Aveți lucrări asemănătoare?",
            "Cum va arăta tatuajul peste cinci sau zece ani, în zona și în stilul ales?",
            "Cum ați proceda dacă detaliul pe care îl vreau nu se poate reda la mărimea aleasă?",
            "Ce faceți dacă tatuajul nu se vindecă bine sau este nevoie de retuș?",
            "Pot vorbi cu un client care a făcut o lucrare asemănătoare, dacă acceptă?",
          ],
        },
        "Un artist bun răspunde clar, cu exemple și cu sinceritate. Un răspuns evaziv, defensiv sau exagerat de optimist este un motiv de atenție.",
        { h3: "Portofoliul Hasha Tattoo" },
        "În pagina de [portofoliu](/portofoliu) poți vedea lucrările realizate la studio, iar în pagina cu [stilurile de tatuaj](/stiluri) le poți filtra după stil. Dacă vrei să discuți despre o lucrare, scrie-ne pe WhatsApp la +40 766 422 219.",
      ],
    },
    {
      id: "greseli-frecvente",
      h2: "Greșeli frecvente când alegi după portofoliu",
      blocks: [
        {
          ul: [
            "Să alegi doar după câteva poze spectaculoase, fără să vezi restul.",
            "Să te iei după numărul de urmăritori de pe rețelele sociale, nu după calitatea lucrărilor.",
            "Să judeci doar după poze proaspete.",
            "Să ignori lipsa stilului dorit în portofoliu și să speri că „se descurcă”.",
            "Să alegi cel mai ieftin, fără să compari calitatea.",
            "Să te lași păcălit de filtre, de saturație sau de lumină.",
            "Să nu verifici autenticitatea lucrărilor.",
            "Să alegi pe baza recomandărilor, fără să verifici personal portofoliul.",
          ],
        },
        "Un portofoliu este un instrument, nu o garanție. Combinat cu o discuție sinceră și cu verificarea lucrărilor vindecate, îți oferă o imagine realistă. Pentru restul pașilor, vezi ghidul despre [prima vizită la studio](/ghiduri/prima-vizita-la-studio-pas-cu-pas).",
      ],
    },
    {
      id: "intrebari-dupa-portofoliu",
      h2: "Ce întrebi după ce ai văzut portofoliul",
      blocks: [
        "Portofoliul îți spune ce poate artistul, dar nu îți spune cum lucrează cu tine. După ce l-ai văzut, câteva întrebări completează imaginea.",
        {
          ul: [
            "Pot vedea lucrări vindecate, în zona și în stilul care mă interesează?",
            "Cine a făcut lucrările din portofoliu și este aceeași persoană care mă va tatua?",
            "Ce se întâmplă dacă ideea mea nu se potrivește stilului tău: îmi spui sincer?",
            "Cât timp îmi trebuie ca să aștept o programare?",
            "Cum arată procesul, de la idee la ședință?",
          ],
        },
        "Un artist care răspunde clar, fără să te grăbească, este un semn bun. Dacă primești răspunsuri vagi sau presiune să decizi imediat, ia o pauză și compară cu alte opțiuni.",
      ],
    },
  ],
  faq: [
    {
      q: "Cum îmi dau seama dacă un tatuator este bun?",
      a: "Uită-te la linii (continue, constante), la umbre (netede, fără pete), la culori (pline, uniforme), la compoziție și, mai ales, la lucrări vindecate. Verifică dacă stilul dorit se regăsește în portofoliu și pune întrebări artistului.",
    },
    {
      q: "De ce contează pozele cu tatuaje vindecate?",
      a: "Pentru că tatuajul proaspăt arată mai bine decât cel vindecat. Un tatuaj vindecat îți arată ce rămâne după câteva luni: cât de clare au rămas liniile, cât de bine s-a păstrat culoarea și umbra.",
    },
    {
      q: "Cum recunosc o poză retușată?",
      a: "Pielea prea netedă, culori nefirești, contrast exagerat, același filtru pe toate pozele și lipsa texturii pielii sunt semne. Cere poze neprelucrate sau vezi lucrarea în persoană.",
    },
    {
      q: "Un portofoliu mic înseamnă un artist slab?",
      a: "Nu neapărat. Un artist nou poate avea lucrări foarte bune, dar mai puține. Judecă nivelul lucrărilor, nu numărul. Pentru un tatuaj mare, e bine să vezi și lucrări vindecate.",
    },
    {
      q: "Cum știu că lucrările sunt ale artistului?",
      a: "Verifică prin căutare inversă de imagini, cere să vezi lucrări în persoană, întreabă despre detaliile unor lucrări și urmărește pozele sau clipurile din timpul procesului.",
    },
    {
      q: "Trebuie să aleg un artist specializat în stilul meu?",
      a: "Este cel mai sigur. Un artist care face des și bine stilul dorit are experiență cu problemele lui specifice. Un artist versatil poate fi excelent, dar cere să-i vezi lucrări în stilul tău.",
    },
    {
      q: "Cât de importante sunt recenziile?",
      a: "Contează, dar privește-le critic. Caută recenzii independente, care vorbesc despre comunicare, igienă și vindecare, nu doar despre aspectul lucrării. Un set de recenzii identice sau prea entuziaste poate fi suspect.",
    },
    {
      q: "Pot cere să văd lucrări în persoană?",
      a: "Da, și este o idee bună, mai ales pentru tatuaje mari. Întreabă dacă artistul are clienți dispuși să-și arate lucrarea vindecată sau dacă poți vedea lucrări la studio.",
    },
    {
      q: "Care este diferența între un portofoliu și un cont de rețele sociale?",
      a: "Portofoliul este o selecție curată de lucrări, cu accent pe calitate. Contul de rețele sociale poate conține și alte lucruri: povești, promoții, poze din studio. Ambele sunt utile, dar portofoliul este cel care contează la evaluare.",
    },
    {
      q: "Unde văd lucrări Hasha Tattoo?",
      a: "În pagina de portofoliu a site-ului și în galeria filtrată pe stiluri. Pentru întrebări despre o lucrare anume, scrie-ne pe WhatsApp la +40 766 422 219.",
    },
  ],
  cta: {
    title: ["Vrei să vezi", "mai multe lucrări?"],
    text: "Scrie-ne stilul care te interesează și îți arătăm lucrări apropiate de ideea ta. Poți pune orice întrebare despre cum au fost realizate.",
    wa: "Bună! Mă uit la portofoliul Hasha Tattoo și aș vrea să văd lucrări apropiate de ideea mea de tatuaj.",
  },
  related: ["primul-tau-tatuaj", "cum-alegi-stilul-de-tatuaj", "prima-vizita-la-studio-pas-cu-pas"],
};

export default content;
