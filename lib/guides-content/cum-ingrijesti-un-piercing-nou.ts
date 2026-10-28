import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "Un piercing nou arată bine din prima zi, dar se vindecă în luni, nu în zile. Între ziua în care ți-ai făcut piercingul și ziua în care poți spune că este cu adevărat stabil, trece o perioadă în care îngrijirea ta face diferența. Majoritatea problemelor pe care le vedem nu vin de la procedură, ci de la ce se întâmplă după: curățare prea agresivă, bijuterii schimbate prea devreme, presiune constantă sau atingeri cu mâinile murdare.",
    "Vestea bună este că îngrijirea corectă este simplă și are puține reguli. Cea mai grea parte este disciplina: să faci puțin, dar constant, și să te abții de la ceea ce pare util, dar nu este. Acest ghid explică exact ce faci, ce eviți, cum recunoști o simplă iritație și cum o deosebești de o infecție care cere atenție medicală.",
    "Ghidul se aplică piercingurilor făcute la [Hasha Tattoo](/piercing) și, în linii mari, oricărui piercing făcut într-un studio profesionist. Indicațiile concrete ale piercerului tău au prioritate asupra oricărui text general. Informațiile de aici au rol educativ și nu înlocuiesc sfatul medicului.",
  ],
  sections: [
    {
      id: "principii",
      h2: "Cele trei principii ale unei vindecări reușite",
      blocks: [
        "Înainte de detalii, rețineți trei idei care acoperă 90% din situații.",
        {
          ol: [
            "**Curat, dar blând.** Piercingul are nevoie de igienă, nu de dezinfecție agresivă. Prea multă curățare irită, prea puțină permite acumularea de resturi.",
            "**Liniște.** Piercingul se vindecă cel mai bine când este lăsat în pace: fără răsucit, fără tras, fără presiune, fără schimbat bijuteria la întâmplare.",
            "**Răbdare.** Vindecarea e lentă și neuniformă. Un piercing poate părea vindecat și să mai aibă nevoie de luni.",
          ],
        },
        "Dacă ții minte doar aceste trei lucruri, ai deja o rutină mai bună decât a majorității oamenilor. Restul ghidului intră în detalii, pe tipuri de piercing și pe situații concrete.",
        {
          title: "RISCUL REAL ESTE MIC",
          note: "Într-un studio profesionist, riscul de infecție este redus. Cele mai multe infecții apar în perioada de vindecare, de obicei din cauza contactului cu bacterii din mediu sau a îngrijirii necorespunzătoare. Cu o rutină corectă, marea majoritate a piercingurilor se vindecă fără probleme.",
        },
      ],
    },
    {
      id: "ce-se-intampla",
      h2: "Ce se întâmplă în piele: fazele vindecării",
      blocks: [
        "Piercingul este o rană care se vindecă în jurul unui obiect străin, bijuteria. Corpul formează un mic tunel de piele, numit fistulă, care se maturizează lent. Înțelegerea fazelor te ajută să nu te sperii de ce este normal.",
        { h3: "Faza 1: inflamația (primele zile)" },
        "Roșeață, ușoară umflătură, căldură și sensibilitate. Poate apărea un lichid transparent sau ușor gălbui. Este răspunsul firesc al corpului la o rană proaspătă. Nu este infecție.",
        { h3: "Faza 2: formarea țesutului (săptămâni)" },
        "Roșeața scade, iar în jurul bijuteriei apar cruste mici, albicioase sau gălbui. Ele sunt formate din lichid limfatic uscat și celule moarte. Nu sunt puroi. Se îndepărtează blând, la duș sau cu soluție salină, nu cu unghia.",
        { h3: "Faza 3: maturarea (luni)" },
        "Pielea formează un tub stabil. Piercingul pare vindecat, dar este încă sensibil la presiune, la iritație și la schimbarea bijuteriei. Aici apar frecvent „reacțiile întârziate”: dacă îl lovești sau îl presezi, se poate înroși din nou.",
        { table: {
          head: ["Tip de piercing", "Vindecare orientativă"],
          rows: [
            ["Lob ureche", "6 până la 8 săptămâni"],
            ["Cartilaj ureche (helix, tragus, conch)", "3 până la 12 luni"],
            ["Nas (nară)", "4 până la 6 luni, cu îngrijire timp de 3 luni"],
            ["Septum", "2 până la 4 luni, uneori mai mult"],
            ["Buric", "6 până la 12 luni"],
            ["Limbă", "4 până la 6 săptămâni"],
            ["Buză, sprânceană", "2 până la 4 luni, uneori mai mult"],
          ],
        } },
        "Aceste intervale sunt orientative și arată cât durează, în general. Piercerul tău poate fi mai exact. Dacă ai o problemă, spune-i, pentru că el cunoaște bijuteria, tehnica și zona.",
      ],
    },
    {
      id: "curatarea",
      h2: "Curățarea corectă: ce, cum și cât de des",
      blocks: [
        "Curățarea este nucleul îngrijirii. Dacă o faci prost, restul nu mai contează. Dacă o faci bine, ai rezolvat cea mai mare parte a problemei.",
        { h3: "Ce folosești" },
        {
          ul: [
            "**Soluție salină sterilă**, de preferință sub formă de spray, cu ingrediente simple: apă și clorură de sodiu 0,9%. Este blândă, nu irită și se găsește în farmacii.",
            "**Săpun pH neutru, fără parfum**, doar pentru igiena zonei din jur, nu aplicat zilnic direct în piercing, dacă nu ți se recomandă.",
            "**Hârtie sau șervețele curate, de unică folosință**, pentru uscare prin tamponare.",
          ],
        },
        { h3: "Cum o faci, pas cu pas" },
        {
          ol: [
            "Spală-te bine pe mâini cu apă și săpun.",
            "Pulverizează soluția salină pe piercing, astfel încât să ude zona din față și din spate.",
            "Lasă-o câteva momente să înmoaie crustele. Dacă sunt, ia-le blând cu un șervețel umed, fără să tragi.",
            "Usucă ușor, prin tamponare, în jurul piercingului, cu hârtie curată. Nu folosi prosoape textile, care păstrează bacterii și fire.",
            "Nu răsuci și nu mișca bijuteria, decât dacă ți s-a spus explicit.",
          ],
        },
        { h3: "De câte ori" },
        "De obicei de două ori pe zi: dimineața și seara. Piercingul nasului, de exemplu, se curăță de două ori pe zi în primele trei luni. Dacă piercerul tău recomandă altă frecvență, urmează-o. **Nu exagera.** Curățarea de zece ori pe zi irită pielea, o usucă și întârzie vindecarea.",
        { h3: "De ce „mai mult” nu înseamnă „mai bine”" },
        "Corpul are propriile mecanisme de vindecare. Un piercing curățat prea des își pierde stratul protector natural, devine roșu, sensibil și poate forma mici bubițe iritative. Piercerii spun adesea că majoritatea problemelor vin dintr-o îngrijire prea zeloasă, nu dintr-una prea puțin.",
      ],
    },
    {
      id: "ce-eviti",
      h2: "Ce eviți: lista care contează",
      blocks: [
        { h3: "Produse care irită" },
        {
          ul: [
            "Alcoolul sanitar, apa oxigenată, soluțiile iodate și dezinfectanții puternici: usucă și distrug celulele noi.",
            "Unguentele cu antibiotic și cremele grase, fără recomandarea medicului: pot bloca aerul și favoriza acumularea de bacterii.",
            "Uleiul de arbore de ceai, uleiurile esențiale și remediile improvizate: pot provoca arsuri și alergii.",
            "Săpunurile parfumate, gelurile de duș și șampoanele aplicate direct pe piercing.",
            "Parfumul, laca și spray-urile de păr în zona piercingului.",
          ],
        },
        { h3: "Obiceiuri care strică vindecarea" },
        {
          ul: [
            "Atingerea piercingului cu mâinile nespălate.",
            "Răsucirea, învârtirea sau jocul cu bijuteria.",
            "Scoaterea crustelor cu unghia sau a bijuteriei „ca să se aerisească”.",
            "Dormitul pe piercing sau purtarea de haine, căști ori pălării care apasă.",
            "Schimbarea bijuteriei înainte de a primi acordul piercerului.",
            "Lăsarea părului, a hainelor sau a prosoapelor să se agațe.",
          ],
        },
        { h3: "Apa și piscina" },
        "Evită piscinele, marea, lacurile, jacuzzi și saunele în perioada de vindecare. Apa conține bacterii și substanțe chimice care pot irita sau infecta rana. Dușul este în regulă, cu apă călduță și cu grijă ca produsele de igienă să nu rămână pe piercing.",
        { h3: "Alcoolul, fumatul și somnul prost" },
        "Alcoolul în exces și fumatul încetinesc vindecarea. Lipsa somnului scade capacitatea corpului de a se regenera. Nu sunt interdicții absolute, dar cu cât menții un stil de viață echilibrat în primele săptămâni, cu atât vindecarea decurge mai bine.",
      ],
    },
    {
      id: "pe-zone",
      h2: "Îngrijirea pe tipuri de piercing",
      blocks: [
        "Regulile de bază sunt aceleași, dar fiecare zonă are particularitățile ei.",
        { h3: "Ureche: lob și cartilaj" },
        "Lobul se vindecă relativ repede, dar cartilajul cere luni de răbdare. Evită să dormi pe ureche, folosește o pernă de călătorie cu gaură în mijloc, alege căști care nu apasă și ferește piercingul de păr, de pălării și de lanțuri. Dacă ai piercing în helix, ai grijă la pieptănat, la prinsul părului și la hainele cu glugă. Mai multe despre aceste zone găsești în ghidul despre [piercingul în ureche](/ghiduri/piercing-ureche-ghid).",
        { h3: "Nas: nară și septum" },
        "Piercingul în nas se curăță, de regulă, de două ori pe zi în primele trei luni. Evită să-l atingi cu mâinile necurate, să te ștergi agresiv la nas când ești răcit și să folosești produse de machiaj în zonă. Dacă ai alergii sezoniere sau te sufli des, ai grijă extra la igienă. La septum, evită să-l răsucești în sus și în jos fără motiv, pentru că irită țesutul.",
        { h3: "Buric" },
        "Navelul este o zonă supusă frecării și umezelii. Poartă haine largi, din bumbac, evită curelele și pantalonii strâmți și ține zona uscată după duș. Evită sportul care presează abdomenul în primele săptămâni. Durerea la perforare este de obicei mică, aproximativ 2 din 10, dar vindecarea este lungă și cere răbdare. Cu o igienă corectă și haine lejere, rezultatele sunt foarte bune.",
        { h3: "Limbă și buză" },
        "În cavitatea bucală, vindecarea este rapidă, în 4 până la 6 săptămâni pentru limbă, dar umflătura din primele zile poate fi puternică. Clătește gura cu soluție de apă cu sare sau cu o apă de gură fără alcool, după mese și seara. Evită fumatul cel puțin 3 până la 4 zile, alimentele foarte condimentate, fierbinți sau lipicioase în primele zile și jocul cu bijuteria cu dinții, pentru că poate deteriora smalțul. Mâncarea moale și reci ajută la început.",
        { h3: "Sprânceană" },
        "Este o zonă expusă la frecare cu ochelari, cu machiaj și cu pălării. Evită produsele cosmetice lângă piercing, atingerea zonei și mișcările bruște. Dacă porți ochelari, verifică dacă rama nu apasă bijuteria.",
        { h3: "Piercing intim" },
        "Piercingurile intime au reguli suplimentare de igienă și de activitate, care ți se explică la studio. Urmează cu strictețe instrucțiunile primite, evită contactul intim până când piercerul spune că este în regulă și nu ezita să ceri ajutor medical dacă apar semne de infecție.",
      ],
    },
    {
      id: "iritatie-sau-infectie",
      h2: "Iritație sau infecție: cum le deosebești",
      blocks: [
        "Este cea mai frecventă îngrijorare și, de multe ori, un motiv de panică inutilă sau, invers, de întârziere periculoasă. Iată o comparație simplă.",
        { table: {
          head: ["Semn", "Iritație (de obicei)", "Infecție (suspiciune)"],
          rows: [
            ["Roșeață", "Localizată în jurul piercingului, scade cu timpul", "Se extinde, se intensifică pe zi ce trece"],
            ["Durere", "Sensibilitate la atingere sau presiune", "Durere pulsatilă, persistentă, în creștere"],
            ["Secreție", "Transparentă sau albicioasă, în cantitate mică", "Galbenă, verzuie sau maronie, cu miros neplăcut"],
            ["Căldură", "Ușoară, trecătoare", "Intensă, locală sau extinsă"],
            ["Umflătură", "Ușoară, apare după un șoc sau o presiune", "Marcată, care se extinde"],
            ["Febră sau stare generală proastă", "Nu apare", "Poate apărea"],
            ["Cauza tipică", "Presiune, mișcare, bijuterie, produse cosmetice", "Bacterii din mediu, îngrijire necorespunzătoare"],
          ],
        } },
        { h3: "Ce faci în caz de iritație" },
        {
          ul: [
            "Elimină cauza: presiunea, produsul nou, atingerea, bijuteria prea strânsă.",
            "Continuă cu soluție salină, blând, de două ori pe zi.",
            "Nu scoate bijuteria și nu o schimba singur.",
            "Dacă nu se îmbunătățește în câteva zile, scrie piercerului. Uneori problema este o bijuterie prea scurtă sau un unghi de montare.",
          ],
        },
        { h3: "Ce faci în caz de suspiciune de infecție" },
        {
          ul: [
            "Nu scoate bijuteria, decât la indicația unui specialist. Piercingul se poate închide peste o infecție, creând un abces.",
            "Nu aplica antibiotice sau unguente fără recomandarea medicului.",
            "Mergi la medic cât mai repede, mai ales dacă există febră, dungi roșii sau durere intensă.",
            "Anunță și piercerul, pentru a verifica bijuteria și tehnica.",
          ],
        },
        {
          title: "NU AȘTEPTA",
          note: "Febra, dungile roșii care pornesc din piercing, puroi abundent, durerea intensă sau o umflătură care crește rapid sunt semne care cer evaluare medicală imediată. O infecție tratată din timp se rezolvă ușor. Una neglijată poate deveni serioasă.",
        },
      ],
    },
    {
      id: "bubite-si-cicatrici",
      h2: "Bubițe, umflături și cicatrici lângă piercing",
      blocks: [
        "Apariția unei mici umflături lângă piercing sperie pe mulți. De cele mai multe ori nu este nimic grav, dar merită să o înțelegi.",
        { h3: "Bubița iritativă" },
        "O mică umflătură, uneori cu vârf, lângă locul piercingului, cauzată de presiune, de mișcare sau de produse. Se rezolvă, în general, prin eliminarea cauzei și curățare blândă, fără să o stoarcă sau să o atingi.",
        { h3: "Granulomul" },
        "O formațiune de țesut moale, roșiatică, care poate secreta lichid. Apare în urma iritației persistente. Nu este o infecție. Se tratează prin eliminarea sursei de iritație și, uneori, cu ajutor medical sau al piercerului.",
        { h3: "Cicatricea hipertrofică și cheloidul" },
        "Cicatricea hipertrofică rămâne în limitele rănii inițiale, iar cheloidul depășește aceste limite și poate crește în timp. Cheloidele au o componentă genetică. Dacă ai istoric de cheloide, discută cu un medic dermatolog înainte să-ți faci un piercing. Tratamentul se face medical și poate include, după caz, injecții, presoterapie sau alte metode.",
        { h3: "Ce nu faci niciodată" },
        {
          ul: [
            "Nu stoarce și nu înțepa bubița.",
            "Nu aplica soluții de casă, ca bicarbonat, pastă de dinți sau usturoi.",
            "Nu scoate bijuteria dintr-un impuls, înainte să ceri o părere.",
            "Nu ignora o umflătură care crește sau doare tot mai mult.",
          ],
        },
      ],
    },
    {
      id: "alergii",
      h2: "Alergia la nichel și reacțiile la bijuterie",
      blocks: [
        "Nu orice problemă a unui piercing vine din îngrijire. Uneori, vinovatul este bijuteria. O reacție alergică sau o sensibilitate la metal pot imita o infecție.",
        { h3: "Cum se manifestă" },
        {
          ul: [
            "Mâncărime intensă în jurul piercingului.",
            "Roșeață și erupție, uneori cu bășicuțe sau piele uscată, scorțoasă.",
            "Secreție persistentă și vindecare care nu înaintează.",
            "Simptomele apar sau se accentuează după ce ai purtat bijuteria câteva zile sau săptămâni.",
          ],
        },
        { h3: "Ce faci" },
        "Spune-i piercerului. Dacă bănuiește o reacție la material, poate schimba bijuteria cu una din titan de calitate pentru implanturi sau din niobiu, materiale foarte bine tolerate. Nu schimba singur bijuteria cu una „de bijuterie fantezie”, care poate agrava situația. Dacă ai alergie cunoscută la nichel, spune asta înainte de perforare, nu după.",
        { h3: "Cum eviți problema" },
        "Alege din start un material sigur. Titanul de calitate pentru implanturi, niobiul și aurul masiv fără nichel sunt alegeri standard pentru piercingurile noi. Oțelul chirurgical poate elibera urme de nichel și nu este potrivit pentru toți.",
      ],
    },
    {
      id: "schimbarea-bijuteriei",
      h2: "Când și cum schimbi bijuteria",
      blocks: [
        "Este tentant să schimbi bijuteria imediat ce piercingul „arată bine”. Dar aici se pierd multe piercinguri frumoase.",
        { h3: "Regula de bază" },
        "Nu schimba prima bijuterie decât după ce piercingul este stabil și piercerul îți dă acordul. Până atunci, bijuteria inițială, de obicei mai lungă, protejează rana și permite umflătura.",
        { h3: "De ce prima schimbare o face piercerul" },
        "El verifică dacă tunelul este stabil, alege dimensiunea corectă și o montează în siguranță. O bijuterie schimbată greșit poate rupe țesutul nou, introduce bacterii sau poate fi forțată într-un tunel care încă nu este gata. La Hasha Tattoo, manopera pentru schimbare, remontare, verificare sau curățare este de **30 lei**.",
        { h3: "Semne că piercingul nu este gata de schimbare" },
        {
          ul: [
            "Mai există roșeață, sensibilitate sau secreții.",
            "Piercingul se înroșește sau doare după ce îl atingi sau îl miști.",
            "Bijuteria nu se mișcă ușor, dar nici nu este prea strânsă.",
            "Nu a trecut timpul minim de vindecare pentru zona respectivă.",
          ],
        },
        { h3: "Dacă bijuteria devine prea strâmtă" },
        "Dacă umflătura crește și bijuteria pare să se „înghită” în piele, anunță piercerul imediat. Poate fi necesară o bijuterie mai lungă. Nu încerca să o scoți singur.",
      ],
    },
    {
      id: "respingere",
      h2: "Migrarea și respingerea: când corpul nu acceptă piercingul",
      blocks: [
        "Uneori, corpul tratează bijuteria ca pe un obiect străin și o împinge treptat spre suprafață. Acest proces, numit migrare, poate duce, în final, la respingere.",
        { h3: "Semne de migrare" },
        {
          ul: [
            "Piercingul pare mutat din locul inițial.",
            "Pielea dintre intrare și ieșire devine subțire, translucidă sau lucioasă.",
            "Bijuteria pare mai aproape de suprafață decât la început.",
            "Apare roșeață persistentă, uneori fără durere.",
          ],
        },
        { h3: "Ce faci" },
        "Mergi la piercer cât mai devreme. Uneori, o bijuterie diferită, o altă dimensiune sau o altă formă poate salva piercingul. Dacă respingerea este avansată, scoaterea bijuteriei poate fi cea mai bună soluție, pentru a evita o cicatrice mai mare. Discută deschis, iar piercerul îți explică opțiunile.",
        { h3: "Cum reduci riscul" },
        {
          ul: [
            "Alege o anatomie potrivită, cu ajutorul piercerului.",
            "Folosește bijuterii din materiale sigure, de dimensiune corectă.",
            "Evită loviturile, tracțiunea și presiunea.",
            "Respectă rutina de îngrijire și nu schimba bijuteria prea devreme.",
          ],
        },
      ],
    },
    {
      id: "viata-de-zi-cu-zi",
      h2: "Viața de zi cu zi cu un piercing nou",
      blocks: [
        { h3: "Sport și activitate fizică" },
        "Poți face mișcare, dar evită contactul direct cu zona piercingului, frecarea și transpirația excesivă fără igienă. Spală-te pe mâini înainte să atingi piercingul și șterge transpirația cu hârtie curată. Evită piscina și sala de baie cu aburi în perioada de vindecare.",
        { h3: "Haine și accesorii" },
        "Pentru buric, poartă haine largi, din bumbac. Pentru ureche și nas, evită gulerele strâmte, fularele și pălăriile care agață bijuteria. Pentru sprânceană și buză, atenție la ochelari și la mască.",
        { h3: "Somnul" },
        "Dormi pe partea opusă piercingului, dacă este posibil. Schimbă lenjeria curat și des în primele săptămâni. Evită animalele de companie în pat.",
        { h3: "Machiajul și produsele de îngrijire" },
        "Evită fondul de ten, rujul, parfumul, cremele și spray-urile aplicate în zona piercingului. Dacă folosești machiaj, aplică-l cu atenție, în jurul zonei, și îndepărtează-l blând, fără frecare.",
        { h3: "Boala și răceala" },
        "Dacă ești bolnav, sistemul imunitar este ocupat, iar vindecarea poate încetini. Menține igiena, fii hidratat și odihnit. Dacă ai un piercing în nas și ai guturai, ai grijă la igienă și nu atinge zona cu șervețele murdare.",
      ],
    },
    {
      id: "prima-saptamana",
      h2: "Prima zi și prima săptămână, pe scurt",
      blocks: [
        "Primele zile sunt cele mai sensibile. Un plan simplu te ajută să nu faci greșeli din entuziasm sau din teamă.",
        { h3: "Ziua 1" },
        "Piercingul poate pulsa, se poate înroși și umfla ușor. Nu-l atinge inutil. Evită să dormi pe el, să-l lovești sau să-l expui la fum, praf și produse cosmetice. Dacă piercerul ți-a recomandat o primă curățare seara, urmează întocmai.",
        { h3: "Zilele 2 și 3" },
        "Umflătura poate atinge un vârf. Este normală, mai ales la cartilaj, la limbă și la buză. Menține rutina de curățare cu soluție salină și evită orice presiune. La limbă, mănâncă alimente reci și moi și sorbi apă rece, pentru a reduce umflătura.",
        { h3: "Zilele 4 până la 7" },
        "Umflătura și sensibilitatea scad treptat. Pot apărea cruste ușoare în jurul bijuteriei. Nu le smulge. Ele se desprind la curățare, blând. Dacă roșeața, durerea sau secreția cresc în loc să scadă, notează și cere o părere.",
        { h3: "Săptămânile 2 până la 4" },
        "Piercingul pare mult mai liniștit, dar procesul de vindecare este departe de final. Continuă cu rutina și evită să schimbi bijuteria. Reia treptat activitățile obișnuite, fără presiune pe zonă.",
        { h3: "Dincolo de o lună" },
        "Perioada de maturare continuă. Piercingul poate avea momente de sensibilitate dacă este lovit sau presat. Cu cât păstrezi mai mult regularitatea, cu atât se stabilizează mai bine.",
      ],
    },
    {
      id: "controlul",
      h2: "Controlul la piercer: de ce merită și ce întrebi",
      blocks: [
        "Mulți clienți pierd ocazia unui control, pentru că piercingul „arată bine”. Totuși, o verificare la câteva săptămâni sau luni, la piercer, poate preveni probleme și te poate scuti de nelinișți.",
        { h3: "Când merită să te prezinți" },
        {
          ul: [
            "După prima lună, ca să verifici dacă vindecarea decurge normal.",
            "Când bijuteria pare prea strânsă, prea lungă sau mutată.",
            "Când apar roșeață, bubițe sau secreții care nu trec.",
            "Înainte de prima schimbare a bijuteriei.",
            "Dacă vrei să adaugi un al doilea piercing în aceeași zonă.",
          ],
        },
        { h3: "Întrebări utile de pus" },
        {
          ul: [
            "Este piercingul stabil sau mai am nevoie de timp?",
            "Dimensiunea bijuteriei este potrivită pentru zona mea?",
            "Cât timp mai trebuie să aștept înainte de a o schimba?",
            "Ce material și ce formă îmi recomanzi pentru următoarea bijuterie?",
            "Ce pot face diferit în îngrijire?",
          ],
        },
        "La noi poți afla, pe lângă verificare, ce bijuterie se potrivește zonei tale. Manopera pentru verificare, curățare, schimbare sau remontare este 30 lei, iar toate prețurile le găsești pe pagina de [prețuri](/preturi-tatuaje).",
      ],
    },
    {
      id: "ce-cumperi",
      h2: "Ce ai nevoie în casă pentru îngrijire",
      blocks: [
        "Nu ai nevoie de un raft întreg de produse. Câteva lucruri simple sunt suficiente și te scutesc de tentația de a improviza.",
        {
          ul: [
            "**Spray cu soluție salină sterilă 0,9%.** Fără conservanți, fără alcool, fără parfum. Verifică eticheta: să conțină doar apă și sare.",
            "**Șervețele sau hârtie curată, de unică folosință,** pentru uscare prin tamponare.",
            "**Săpun lichid pH neutru, fără parfum,** pentru mâini și igiena zonei din jur.",
            "**Pernă de călătorie,** dacă ai piercing în ureche, pentru somn.",
            "**Fețe de pernă curate,** pe care să le schimbi des în prima săptămână.",
          ],
        },
        { h3: "Ce nu ai nevoie să cumperi" },
        "Soluții miraculoase, creme „de vindecare”, uleiuri și geluri promovate pe rețelele sociale. Pot fi inutile sau chiar dăunătoare. Dacă un produs te tentează, întreabă piercerul înainte.",
        { h3: "Soluție salină făcută în casă?" },
        "Nu recomandăm. Concentrația incorectă sau lipsa sterilității pot irita sau contamina piercingul. Spray-ul steril din farmacie este ieftin, sigur și ușor de folosit.",
      ],
    },
    {
      id: "sezon-si-calatorii",
      h2: "Vară, vacanță și călătorii cu un piercing nou",
      blocks: [
        "Vara este sezonul în care mulți oameni își fac piercing, dar și cel mai dificil pentru vindecare: transpirație, soare, piscine, mare, nisip și haine subțiri. Nu înseamnă că nu poți, ci că trebuie planificat.",
        {
          ul: [
            "Dacă pleci la mare în mai puțin de o lună, amână piercingul sau alege o zonă care nu este în contact cu apa sau cu nisipul.",
            "Nisipul și apa sărată irită o rană proaspătă. Un piercing de buric sau de ureche nu are ce căuta în mare în primele săptămâni.",
            "Protejează zona de soare cu haine sau cu o pălărie largă, nu cu loțiuni aplicate direct pe piercing.",
            "În călătorie, ia cu tine spray-ul salin în ambalaj mic și hârtie curată.",
            "Evită să-ți atingi piercingul în autobuz, avion sau metrou, cu mâinile care au atins bare și mânere.",
            "Iarna, ai grijă la fulare, căciuli și pulovere care pot agăța bijuteria.",
          ],
        },
        "Cea mai bună regulă pentru vacanțe: programează piercingul cu cel puțin 4 până la 6 săptămâni înainte de plecare sau după întoarcere. Astfel eviți riscurile cele mai mari și te bucuri de ambele.",
      ],
    },
    {
      id: "mituri",
      h2: "Mituri despre îngrijirea piercingului",
      blocks: [
        { h3: "„Trebuie să rotesc bijuteria în fiecare zi”" },
        "Nu. Rotirea irită, rupe crustele și întârzie vindecarea. Bijuteria se mișcă doar cât este necesar la curățare, conform instrucțiunilor.",
        { h3: "„Alcoolul sau apa oxigenată distrug bacteriile și sunt cele mai bune”" },
        "Distrug și celulele sănătoase. Irită și usucă pielea. Soluția salină sterilă este alegerea potrivită.",
        { h3: "„Dacă are puroi, este mereu infecție”" },
        "Nu neapărat. Lichidul albicios sau gălbui în cantitate mică este adesea o secreție normală de vindecare. Semnele de infecție sunt ansamblul: durere în creștere, roșeață extinsă, căldură, secreție abundentă și miros.",
        { h3: "„Dacă nu mă mai doare, pot schimba bijuteria”" },
        "Absența durerii nu înseamnă vindecare completă. Straturile profunde au nevoie de luni. Așteaptă acordul piercerului.",
        { h3: "„Trebuie să-l țin curat cu cât mai multe produse”" },
        "Mai puțin înseamnă, de obicei, mai bine. Soluție salină, igienă a mâinilor, evitarea iritanților. Atât.",
        { h3: "„Un piercing infectat trebuie scos imediat”" },
        "De obicei nu. Scoaterea poate închide rana peste infecție. Cere sfatul unui medic sau al piercerului înainte să iei o decizie.",
      ],
    },
    {
      id: "checklist",
      h2: "Lista de verificare zilnică",
      blocks: [
        "Dacă vrei un rezumat pe care să-l ții la îndemână, iată-l.",
        {
          ul: [
            "Spală-te pe mâini înainte să atingi piercingul.",
            "Curăță cu soluție salină sterilă de două ori pe zi, blând.",
            "Usucă prin tamponare cu hârtie curată.",
            "Nu răsuci, nu scoate, nu schimba bijuteria.",
            "Nu dormi pe piercing și evită presiunea.",
            "Fără alcool, apă oxigenată, unguente sau uleiuri.",
            "Fără piscină, mare și saună.",
            "Haine largi și curate, păr departe de piercing.",
            "Urmărește evoluția: dacă apar semne de alarmă, nu aștepta.",
            "Reia controlul la piercer după perioada recomandată.",
          ],
        },
        "Cu aceste obiceiuri, șansele ca piercingul tău să se vindece fără probleme sunt foarte mari. Iar dacă apar nelămuriri, este mai bine să ne scrii devreme decât să aștepți să se agraveze.",
      ],
    },
  ],
  faq: [
    {
      q: "De câte ori pe zi curăț un piercing nou?",
      a: "De obicei de două ori pe zi, dimineața și seara, cu soluție salină sterilă, în modul recomandat de piercer. Nu exagera: curățarea prea frecventă irită pielea și încetinește vindecarea. Piercingul în nas, de exemplu, se curăță de două ori pe zi în primele trei luni.",
    },
    {
      q: "Pot folosi alcool sau apă oxigenată pe piercing?",
      a: "Nu este recomandat. Ambele irită și usucă pielea, afectând celulele noi. Folosește soluție salină sterilă sau instrucțiunile piercerului tău. Săpunul pH neutru poate fi folosit pentru igiena zonei din jur, dar nu ca produs principal de curățare.",
    },
    {
      q: "Cum știu dacă piercingul meu este infectat?",
      a: "Semnele sunt roșeață care se extinde, durere în creștere, căldură intensă, secreție galbenă sau verzuie cu miros neplăcut și, uneori, febră. O ușoară roșeață și o secreție transparentă în primele zile sunt normale. Dacă ai dubii, scrie piercerului sau mergi la medic.",
    },
    {
      q: "Să scot bijuteria dacă piercingul se infectează?",
      a: "De regulă nu, fără sfatul unui specialist. Scoaterea bijuteriei poate permite închiderea găurii peste infecție, formând un abces. Cere părerea unui medic și informează piercerul înainte să iei o decizie.",
    },
    {
      q: "Pot dormi pe piercing?",
      a: "Este bine să eviți, mai ales la cartilaj. Presiunea constantă provoacă iritații, umflături și vindecare strâmbă. Folosește o pernă cu gaură în mijloc sau o pernă de călătorie, iar dacă este posibil, dormi pe partea opusă.",
    },
    {
      q: "Pot înota cu un piercing nou?",
      a: "Nu în perioada de vindecare. Piscina, marea, lacurile și jacuzzi pot conține bacterii și substanțe care irită sau infectează. Așteaptă până când piercerul confirmă că piercingul este vindecat suficient.",
    },
    {
      q: "Cât durează până când pot schimba bijuteria?",
      a: "Depinde de zonă. Lobul se stabilizează în câteva luni, cartilajul poate cere 6 până la 12 luni sau mai mult. Prima schimbare se face cu acordul și, preferabil, cu ajutorul piercerului. La Hasha Tattoo, manopera de schimbare costă 30 lei.",
    },
    {
      q: "De ce mi s-a format o bubiță lângă piercing?",
      a: "De obicei din cauza iritației: presiune, mișcare, produse cosmetice sau bijuterie nepotrivită. Nu o stoarce și nu o atinge. Elimină cauza, continuă cu soluție salină și, dacă nu se îmbunătățește, scrie piercerului pentru a verifica bijuteria și poziția.",
    },
    {
      q: "Pot face sport cu un piercing nou?",
      a: "Da, cu precauții. Evită frecarea, presiunea și piscina. Spală-te pe mâini înainte să atingi piercingul, șterge transpirația cu hârtie curată și poartă haine curate. La buric, evită exercițiile care presează abdomenul în primele săptămâni.",
    },
    {
      q: "Ce fac dacă piercingul meu pare că „iese” din piele?",
      a: "Poate fi un semn de migrare, în care corpul împinge bijuteria spre suprafață. Mergi cât mai repede la piercer. În unele cazuri, o altă bijuterie sau o altă dimensiune poate salva piercingul. Dacă respingerea este avansată, scoaterea poate fi cea mai bună soluție.",
    },
  ],
  cta: {
    title: ["Ai o întrebare despre", "piercingul tău?"],
    text: "Scrie-ne pe WhatsApp. Dacă ai o nelămurire sau vrei o verificare a piercingului sau a bijuteriei, un piercer îți răspunde.",
    wa: "Bună! Am o întrebare despre îngrijirea unui piercing făcut la Hasha Tattoo.",
  },
  related: ["piercing-ureche-ghid", "primul-tau-tatuaj", "cum-ingrijesti-un-tatuaj-nou"],
};

export default content;
