import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "Pielea nu este o pânză albă pentru nimeni. Aproape toți avem pe corp urme ale vieții: o cicatrice de la o operație sau de la o cădere din copilărie, vergeturi apărute în adolescență, în sarcină sau după o schimbare de greutate, alunițe, pete, semne din naștere. Unele ne sunt indiferente, altele ne deranjează, iar unii oameni vor să le integreze într-un tatuaj sau să le ascundă sub unul.",
    "Răspunsul la întrebarea „se poate tatua peste cicatrice, vergeturi sau aluniță?” nu este un simplu da sau nu. Depinde de tipul de marcă, de vechimea ei, de zonă, de felul în care s-a vindecat pielea și de așteptările tale. Unele situații se pot rezolva frumos, altele cer prudență, iar unele cer sfatul unui medic înainte de orice. Ghidul de față le parcurge pe rând, în limbaj simplu.",
    "Informațiile sunt generale și educative. Nu înlocuiesc un consult medical, iar decizia concretă se ia numai după ce artistul și, dacă e cazul, medicul tău văd zona. Dacă ai o cicatrice recentă, o aluniță care se schimbă sau o afecțiune de piele, începe cu medicul, nu cu studioul.",
  ],
  sections: [
    {
      id: "pielea-cu-urme",
      h2: "Cum se comportă pielea cu urme la tatuaj",
      blocks: [
        "Pielea sănătoasă primește cerneala într-un fel previzibil: acul depune pigmentul în dermă, iar celulele din jur îl prind și îl păstrează. Când pielea are o cicatrice, vergeturi sau o altă modificare, structura din dermă este diferită, iar cerneala se comportă diferit.",
        { h3: "Ce este diferit în țesutul cicatricial" },
        {
          ul: [
            "Fibrele de colagen sunt aranjate dezordonat, nu într-o rețea regulată, așa că pigmentul poate fi reținut inegal.",
            "Țesutul poate fi mai dens, mai subțire sau mai ridicat, ceea ce schimbă modul în care acul pătrunde.",
            "Irigarea cu sânge este uneori mai slabă, deci vindecarea poate fi mai lentă.",
            "Sensibilitatea poate fi mai mare sau mai mică: unele cicatrici sunt amorțite, altele foarte sensibile.",
            "Culoarea pielii din zonă poate fi diferită (mai deschisă sau mai închisă), iar tatuajul va arăta diferit pe fiecare porțiune.",
          ],
        },
        { h3: "Ce înseamnă asta pentru rezultat" },
        "Pe piele cu urme, tatuajul poate arăta mai puțin uniform. Pot apărea zone în care cerneala se vede mai slab sau se estompează mai repede, iar în unele cazuri este nevoie de retușuri. Rezultatul nu poate fi garantat la fel ca pe pielea fără urme. Un artist onest îți spune asta din start și nu promite perfecțiunea.",
        { h3: "Nu orice marcă se tratează la fel" },
        "Cicatricile, vergeturile, alunițele și petele din naștere sunt lucruri diferite. Fiecare are propriile reguli, iar mai jos le luăm pe rând. Pentru felul în care se vindecă pielea în general, vezi ghidul despre [îngrijirea unui tatuaj nou](/ghiduri/cum-ingrijesti-un-tatuaj-nou).",
      ],
    },
    {
      id: "cicatrici",
      h2: "Tatuajul peste cicatrice",
      blocks: [
        "Este cea mai frecventă întrebare. Răspunsul scurt: de multe ori se poate, dar cu condiții și cu așteptări realiste.",
        { h3: "Condiția principală: cicatricea trebuie să fie matură" },
        "O cicatrice recentă este încă în proces de transformare: este roșie sau violacee, poate fi ridicată, sensibilă sau cu mâncărime. Se tatuează doar după ce s-a maturizat, adică devine plată, palidă, fără sensibilitate și fără modificări vizibile. Timpul diferă mult, de la câteva luni la doi ani sau mai mult, în funcție de tipul și de adâncimea leziunii. Nu există un număr valabil pentru toți. Un medic sau un artist cu experiență poate evalua starea cicatricii.",
        {
          table: {
            head: ["Tipul cicatricii", "Ce trebuie să știi", "Abordare"],
            rows: [
              ["Cicatrice mică, plată, veche", "Cel mai ușor de lucrat; textura poate fi ușor diferită", "De multe ori se poate, după evaluare"],
              ["Cicatrice chirurgicală liniară", "Țesutul din jurul liniei poate fi mai dur; cere răbdare", "Se poate, după maturizare și avizul medicului, dacă a fost o operație"],
              ["Cicatrice de arsură", "Pielea poate fi subțire, fără păr, cu pigmentare diferită, uneori fragilă", "Cere evaluare atentă; de multe ori se poate cu un artist cu experiență"],
              ["Cicatrice ridicată (hipertrofică)", "Se află în relief, poate fi sensibilă", "Cere avizul medicului; rezultatul poate fi imprevizibil"],
              ["Cheloid", "Cicatrice care crește peste limitele leziunii inițiale; un nou traumatism poate agrava", "Nu se tatuează fără acordul medicului; risc ridicat de agravare"],
              ["Cicatrice atrofică (adâncită)", "Pielea este mai subțire și mai joasă decât cea din jur", "Se poate lucra, dar textura rămâne vizibilă"],
              ["Cicatrice recentă (sub un an, roșie, sensibilă)", "Încă în proces de vindecare", "Se așteaptă"],
            ],
          },
        },
        {
          note: "Dacă ai antecedente de cheloide sau cicatrici ridicate, nu programa un tatuaj înainte să vorbești cu medicul. Un tatuaj este un traumatism al pielii și, la persoanele predispuse, poate declanșa o cicatrice nouă, mai vizibilă decât cea veche.",
          title: "Atenție",
        },
        { h3: "Cum arată tatuajul pe cicatrice" },
        "Cicatricea nu dispare sub tatuaj. Relieful și textura rămân, iar tatuajul se vede cu aceste particularități. Uneori, aceasta este chiar o parte din frumusețea lucrării: cicatricea devine o ramură, o linie de vene, un detaliu al desenului. Alteori, vrei ca ea să nu se mai observe, iar atunci alegerea desenului este esențială.",
        { h3: "Cum alegi desenul" },
        {
          ul: [
            "Modelele organice, cu texturi (flori, frunze, pene, scoarță, umbre moi) maschează mai bine neregularitățile decât liniile drepte și formele geometrice stricte.",
            "Desenele cu mult detaliu și cu zone întunecate ascund mai bine decât cele minimaliste, cu mult spațiu gol.",
            "Cicatricea poate fi integrată în desen: o cicatrice liniară poate deveni o tulpină sau o rază.",
            "Evită simetria perfectă sau liniile foarte fine exact peste cicatrice, pentru că relieful le deformează.",
            "Alege o culoare sau un ton care funcționează pe pielea ta, cu pigmentarea ei diferită.",
          ],
        },
        "Artistul poate propune o schiță în care cicatricea este luată în calcul. Cere să vezi lucrări făcute pe cicatrici, vindecate, nu doar proaspete. Vezi și ghidul despre [cum citești portofoliul unui tatuator](/ghiduri/cum-citesti-portofoliul-unui-tatuator).",
      ],
    },
    {
      id: "cicatrici-cu-semnificatie",
      h2: "Cicatrici cu încărcătură emoțională",
      blocks: [
        "Unele cicatrici sunt mai mult decât o textură a pielii. Sunt amintiri ale unei operații grele, ale unui accident, ale unei boli sau ale unui moment dureros. Pentru multe persoane, un tatuaj peste o asemenea cicatrice înseamnă recâștigarea controlului asupra corpului și a poveștii lor.",
        { h3: "Tatuaje după intervenții medicale" },
        "După operații, cum ar fi mastectomia, cezariana sau intervenții pe piept sau abdomen, mulți oameni aleg un tatuaj care integrează sau acoperă cicatricea. Este o alegere personală și legitimă. Înainte de a programa, vorbește cu medicul tău, care îți poate spune când este momentul și dacă există motive de prudență. Un tatuaj nu se face pe o cicatrice încă în vindecare.",
        { h3: "Cum abordezi discuția cu artistul" },
        "Nu ești obligat să povestești nimic. Poți spune simplu: „Vreau să acopăr sau să integrez această cicatrice” și atât. Dacă simți nevoia, poți povesti, iar un artist atent te va asculta cu respect și va pune întrebările necesare pentru lucrare, fără să insiste pe detalii pe care nu vrei să le spui.",
        "Dacă simți că acea cicatrice vine dintr-o perioadă grea și te apasă încă, vorbește și cu un specialist în sănătate mintală sau cu o persoană de încredere. Un tatuaj poate fi o parte din procesul de vindecare, dar nu îl înlocuiește.",
        { h3: "Decizia nu trebuie grăbită" },
        "Nu te grăbi. Dacă ai o cicatrice cu încărcătură emoțională, merită să te gândești cu atenție la ce vrei să se întâmple cu ea: să o acoperi, să o accentuezi, să o integrezi sau să o lași așa cum este. Orice variantă este corectă dacă este a ta.",
      ],
    },
    {
      id: "vergeturi",
      h2: "Tatuajul peste vergeturi",
      blocks: [
        "Vergeturile sunt cicatrici ale dermei, apărute când pielea s-a întins rapid: în creștere, în sarcină, la câștigul sau la pierderea în greutate, la antrenamentul intens. La început sunt roșii sau violacee, apoi devin albe sau argintii.",
        { h3: "Când se poate tatui" },
        "Vergeturile recente, încă roșii sau violacee, sunt în plin proces de vindecare și nu se tatuează. Cele albe, vechi, stabile, se pot tatua, cu rezerve. Cerneala se fixează mai greu în țesutul cu vergeturi, deci tatuajul poate arăta mai slab sau inegal în aceste zone, iar retușurile sunt mai frecvente.",
        { h3: "Cum se comportă tatuajul pe vergeturi" },
        {
          ul: [
            "Pigmentul poate fi absorbit inegal, mai ales în vergeturile albe, subțiri.",
            "Relieful vergeturilor poate rămâne vizibil sub desen.",
            "Pielea poate fi mai sensibilă și poate dura mai mult până se vindecă.",
            "Liniile foarte fine se pot întrerupe sau se pot vedea întrerupte, în dreptul vergeturilor.",
            "Culorile pot arăta diferit pe vergeturi față de pielea din jur.",
          ],
        },
        { h3: "Cum alegi desenul și zona" },
        "Desenele cu textură și cu umbre maschează mai bine vergeturile decât liniile foarte fine. Un desen care urmărește direcția vergeturilor (de multe ori paralele între ele) poate arăta natural, integrând pielea cu urmele ei. Evită zonele în care pielea își schimbă mult forma: abdomenul în perioada sarcinii, de exemplu.",
        { h3: "Sarcina și tatuajele" },
        "Dacă plănuiești o sarcină sau dacă ești însărcinată, nu este momentul pentru un tatuaj în zona abdomenului, a pieptului sau a coapselor. Pielea se întinde și se modifică, iar tatuajul se poate deforma. În timpul sarcinii și al alăptării, majoritatea artiștilor responsabili refuză tatuajele. Mai bine aștepți, iar după ce corpul își găsește un echilibru, discuți cu artistul.",
        { h3: "Greutatea corporală" },
        "Schimbările mari de greutate deformează tatuajele, în special pe abdomen, coapse, brațe și piept. Dacă te gândești să slăbești sau să te îngrași semnificativ, amână tatuajele din aceste zone. Un tatuaj mic, în zone stabile, este mai puțin afectat de variații de greutate.",
      ],
    },
    {
      id: "alunite",
      h2: "Tatuajul peste aluniță",
      blocks: [
        "Alunițele sunt o situație specială, pentru că nu țin doar de estetică, ci și de sănătate. Aici regula este diferită de cea de la cicatrici: de regulă, se tatuează în jurul alunițelor, nu peste ele.",
        { h3: "De ce nu se tatuează peste aluniță" },
        {
          ul: [
            "Cerneala poate ascunde schimbările alunițelor (formă, culoare, margini, dimensiune), care sunt semnele după care dermatologii recunosc o problemă.",
            "Un tatuaj peste o aluniță poate întârzia depistarea unui melanom, ceea ce este periculos.",
            "Acul poate irita sau traumatiza alunița, iar un traumatism repetat nu este de dorit pe o leziune pigmentată.",
            "Dacă alunița trebuie examinată sau îndepărtată mai târziu, tatuajul face evaluarea mai grea.",
          ],
        },
        { h3: "Ce face artistul în practică" },
        "Un artist responsabil lucrează în jurul alunițelor: lasă un mic spațiu liber sau integrează alunița în desen, fără s-o atingă cu acul. De exemplu, alunița poate deveni centrul unei flori sau un punct dintr-un model. Nu tatuează peste ea.",
        { h3: "Ce faci tu înainte" },
        {
          ul: [
            "Verifică-ți alunițele: dacă una este nouă, s-a schimbat sau arată neobișnuit, mergi la dermatolog înainte de tatuaj.",
            "Dacă ai multe alunițe în zona planificată, cere un control dermatologic înainte.",
            "Arată artistului toate alunițele din zonă, nu doar cele evidente.",
            "După tatuaj, continuă controalele periodice, după recomandarea dermatologului.",
          ],
        },
        {
          note: "Dacă o aluniță își schimbă forma, culoarea, mărimea, margina, sângerează, mâncă sau doare, mergi imediat la dermatolog, indiferent dacă este în zona tatuată sau nu. Nu aștepta și nu o ascunde sub un tatuaj.",
          title: "Semn de alarmă",
        },
        { h3: "Alunițele mici și pistruii" },
        "Pistruii și petele mici, plate, nu ridică aceleași probleme ca alunițele, dar se discută cu artistul. În general, pot fi acoperite sau integrate, după evaluare. Dacă ai dubii, cere părerea dermatologului.",
      ],
    },
    {
      id: "semne-din-nastere-si-pete",
      h2: "Semne din naștere, pete și alte particularități",
      blocks: [
        "Pe lângă cicatrici, vergeturi și alunițe, pielea poate avea și alte particularități, care cer atenție la tatuaj.",
        {
          table: {
            head: ["Particularitatea", "Ce trebuie să știi", "Abordare"],
            rows: [
              ["Semne din naștere (nevi congenitali, pete vasculare)", "Unele sunt pigmentate și cer supraveghere; altele sunt vasculare și pot sângera", "Cere avizul dermatologului înainte; de regulă se lucrează în jur, nu peste"],
              ["Vitiligo", "Zonele depigmentate pot primi cerneala diferit, iar pielea poate reacționa la traumatism", "Cere sfatul dermatologului; rezultatul poate fi imprevizibil"],
              ["Hiperpigmentare și pete solare", "Pielea este pigmentată natural sau prin expunere la soare", "Se poate tatua, dar tonul pielii influențează rezultatul"],
              ["Acnee și cicatrici de acnee", "Pielea poate fi inflamată sau texturată", "Se tatuează doar pe piele calmă, fără leziuni active"],
              ["Eczemă, psoriazis", "Pielea reacționează la traumatism, mai ales în puseuri", "Nu se tatuează pe leziuni active; discută cu dermatologul"],
              ["Pielea arsă de soare sau iritată", "Nu poate fi tatuată în siguranță", "Se așteaptă vindecarea completă"],
              ["Păr abundent", "Se rade de artist în ziua ședinței", "Nu este o problemă; nu se epilează agresiv înainte"],
            ],
          },
        },
        "Mai multe despre afecțiunile de piele și precauțiile necesare găsești în ghidul despre [alergii și piele sensibilă](/ghiduri/alergii-si-piele-sensibila).",
      ],
    },
    {
      id: "acoperire-sau-integrare",
      h2: "Acoperire sau integrare: ce vrei de fapt",
      blocks: [
        "Înainte de a alege desenul, hotărăște ce vrei să se întâmple cu marca: să nu se mai vadă, să se vadă mai puțin sau să fie parte din tatuaj. Fiecare variantă duce la o abordare diferită.",
        {
          table: {
            head: ["Obiectiv", "Ce înseamnă", "Cum se realizează"],
            rows: [
              ["Să nu se mai vadă deloc", "Marca să devină cât mai greu de observat", "Desen dens, cu textură și zone întunecate, mai mare decât marca; rezultatul nu este garantat total"],
              ["Să se vadă mai puțin", "Distragerea atenției de la marcă", "Desen cu detaliu și contrast, care atrage privirea în altă parte"],
              ["Să fie integrată", "Marca devine parte din desen", "Desen conceput în jurul mărcii, folosind forma ei"],
              ["Să fie evidențiată", "Marca devine centrul lucrării", "Desen care o subliniază, de exemplu o linie sau o rădăcină"],
            ],
          },
        },
        "Nu orice marcă poate fi ascunsă complet. Relieful și textura rămân, chiar dacă culoarea este acoperită. O așteptare realistă este esențială: un tatuaj bun poate face ca marca să se observe mult mai puțin, dar nu o va șterge. Un artist onest îți spune cât de mult se poate obține în cazul tău.",
        { h3: "Cum afli ce se poate" },
        "Trimite fotografii clare, în lumină naturală, ale zonei, din mai multe unghiuri, înainte de a programa. Artistul poate evalua orientativ dacă este posibil și ce abordare este potrivită. Pentru o evaluare finală, este necesară examinarea directă. Pentru acoperirea unui tatuaj vechi, vezi paginile despre [cover-up](/cover-up-tatuaje-bucuresti) și [corectare](/corectare-tatuaje-bucuresti).",
      ],
    },
    {
      id: "inainte-de-sedinta",
      h2: "Pregătirea înainte de ședință",
      blocks: [
        "Dacă tatuajul se face pe o zonă cu urme, pregătirea contează și mai mult. Câteva lucruri te ajută.",
        { h3: "Cu câteva luni înainte" },
        {
          ul: [
            "Consultă medicul sau dermatologul, dacă ai o cicatrice cu istoric complicat, cheloide, o afecțiune de piele sau o aluniță suspectă.",
            "Așteaptă maturizarea completă a cicatricii, conform evaluării.",
            "Protejează zona de soare: pielea cu urme se arde mai ușor și cere protecție.",
          ],
        },
        { h3: "Cu 1-2 săptămâni înainte" },
        {
          ul: [
            "Hidratează zona zilnic cu o cremă simplă, fără parfum.",
            "Evită tratamentele agresive (exfolieri, peelinguri, retinoizi) pe zonă, dacă dermatologul nu a spus altfel.",
            "Fotografiază zona și trimite pozele artistului.",
            "Discută desenul, mărimea și așteptările. Cere sincer ce se poate și ce nu.",
          ],
        },
        { h3: "În ziua ședinței" },
        {
          ul: [
            "Spune artistului tot ce știi despre zonă: ce a fost, cât timp a trecut, cum a fost vindecarea.",
            "Spune dacă zona este mai sensibilă sau amorțită.",
            "Cere o probă mică, dacă este posibil, într-o zonă discretă a cicatricii, pentru a vedea cum reacționează pielea.",
            "Respectă recomandările generale de pregătire din ghidul despre [cum te pregătești pentru ședința de tatuaj](/ghiduri/cum-te-pregatesti-pentru-sedinta-de-tatuaj).",
          ],
        },
        { h3: "Proba mică" },
        "Pentru zone cu o cicatrice mare sau cu o piele imprevizibilă, un artist poate propune o probă: un detaliu mic, tatuat pe o porțiune a mărcii, pentru a vedea cum se vindecă și cum se comportă cerneala. Dacă rezultatul este bun, se continuă. Dacă nu, ai pierdut puțin, nu o lucrare întreagă. Este o abordare prudentă, mai ales pentru lucrări mari.",
      ],
    },
    {
      id: "durerea-si-vindecarea",
      h2: "Durerea și vindecarea pe piele cu urme",
      blocks: [
        "Pielea cu urme nu se comportă ca pielea obișnuită nici la durere, nici la vindecare.",
        { h3: "Durerea" },
        "Unele cicatrici sunt amorțite, pentru că nervii din zonă au fost secționați, iar tatuajul doare mai puțin sau deloc. Altele sunt foarte sensibile, iar durerea poate fi mai mare decât în zonele din jur. Vergeturile pot fi mai sensibile decât pielea obișnuită. Nu există o regulă: depinde de fiecare marcă. Spune artistului ce simți și cere pauze.",
        { h3: "Vindecarea" },
        {
          ul: [
            "Poate dura mai mult decât pe pielea fără urme, mai ales pe cicatrici dense sau pe cele de arsură.",
            "Coaja poate fi mai groasă sau mai neregulată.",
            "Pot apărea zone în care cerneala se vede mai slab după vindecare, caz în care este nevoie de retuș.",
            "Pielea poate fi mai uscată și mai predispusă la mâncărime.",
            "Riscul de iritație sau de reacție este puțin mai mare, în special pe cicatrici ridicate.",
          ],
        },
        { h3: "Îngrijirea" },
        "Urmează cu strictețe instrucțiunile artistului. Pe pielea cu urme, simplitatea este cea mai bună: curățare blândă, hidratare conform recomandării, fără produse noi sau experimente. Nu zgâria și nu smulge coaja. Detalii în ghidul despre [îngrijirea unui tatuaj nou](/ghiduri/cum-ingrijesti-un-tatuaj-nou).",
        { h3: "Retușul" },
        "Pe piele cu urme, un retuș este mai probabil decât pe piele obișnuită. Întreabă artistul ce politică are studioul în acest caz și când e momentul potrivit. Pentru detalii, vezi ghidul despre [retușul tatuajului](/ghiduri/retusul-tatuajului-cand-e-necesar).",
      ],
    },
    {
      id: "plan-pas-cu-pas",
      h2: "Planul pas cu pas pentru o zonă cu urme",
      blocks: [
        "Dacă vrei un tatuaj pe o zonă cu urme, un parcurs ordonat reduce riscurile și crește șansele unui rezultat bun. Iată o ordine pe care o poți urma.",
        {
          ol: [
            "Evaluarea medicală, dacă este cazul: cicatrice cu istoric, cheloide, afecțiuni de piele, alunițe suspecte, intervenții chirurgicale recente.",
            "Așteptarea maturizării: cicatricea trebuie să fie matură, iar vergeturile stabile și albe.",
            "Fotografii clare ale zonei, în lumină naturală, din mai multe unghiuri, trimise artistului.",
            "Discuția despre obiectiv: ascundere, atenuare, integrare sau evidențiere.",
            "Alegerea desenului potrivit texturii: organic, cu detaliu, adaptat la relief.",
            "Proba mică, dacă artistul o recomandă, pe o porțiune a zonei.",
            "Ședința propriu-zisă, cu pauze și comunicare deschisă despre sensibilitate.",
            "Îngrijirea atentă, simplă și constantă, conform instrucțiunilor.",
            "Retușul, dacă este necesar, după vindecarea completă.",
          ],
        },
        "Nu toți pașii se aplică în fiecare caz. O cicatrice mică și veche cere mai puțin decât una de arsură întinsă. Dar ordinea rămâne valabilă: sănătatea înaintea esteticii, evaluarea înaintea deciziei, proba înaintea lucrării mari.",
        { h3: "Cât durează tot procesul" },
        "Pentru o zonă cu urme, procesul poate dura mai mult decât pentru o piele obișnuită, din cauza așteptării maturizării, a unei eventuale probe și a retușurilor. Nu este un motiv de descurajare: o lucrare făcută cu răbdare arată mai bine și se vindecă mai bine. Dacă ai un termen-limită, discută din timp cu artistul despre ce este realist.",
      ],
    },
    {
      id: "intrebari-pentru-artist",
      h2: "Întrebări de pus artistului",
      blocks: [
        "Nu orice artist are experiență cu pielea cu urme. Întrebările de mai jos te ajută să afli dacă ai găsit omul potrivit.",
        {
          ol: [
            "Ați lucrat până acum pe cicatrici, vergeturi sau piele cu urme? Pot vedea lucrări vindecate?",
            "Cum evaluați dacă zona mea este pregătită pentru tatuaj?",
            "Ce rezultat realist pot aștepta: cât se va vedea marca după tatuaj?",
            "Ce tip de desen recomandați pentru această zonă și de ce?",
            "Recomandați o probă mică înainte de lucrarea întreagă?",
            "Cum se poate schimba durerea și vindecarea pe zona mea?",
            "Cât de probabil este un retuș și ce politică aveți pentru el?",
            "Dacă tatuajul nu se vindecă bine, ce se întâmplă?",
          ],
        },
        "Un artist cu experiență răspunde concret și onest, inclusiv cu „nu pot garanta”. Diferența dintre un specialist și un vânzător se vede aici: unul îți spune ce se poate, celălalt îți spune ce vrei să auzi. Pentru alte întrebări utile, vezi ghidul despre [prima vizită la studio](/ghiduri/prima-vizita-la-studio-pas-cu-pas).",
        { h3: "Semne că ai ales bine" },
        {
          ul: [
            "Artistul cere fotografii și întreabă detalii despre istoricul zonei.",
            "Îți spune deschis limitele rezultatului, nu doar avantajele.",
            "Propune o probă sau o abordare treptată pentru zone dificile.",
            "Te îndrumă către medic, când situația cere asta.",
            "Nu promite că marca va dispărea complet.",
          ],
        },
      ],
    },
    {
      id: "ingrijire-pe-termen-lung",
      h2: "Îngrijirea pe termen lung a pielii tatuate cu urme",
      blocks: [
        "După vindecare, o zonă cu cicatrice sau vergeturi cere o atenție în plus, pentru ca tatuajul să rămână frumos.",
        { h3: "Protecția solară" },
        "Pielea cu cicatrice este mai sensibilă la soare, iar cicatricile expuse se pot pigmenta mai închis. Soarele estompează și cerneala. Folosește zilnic protecție solară cu SPF 50 pe zona tatuată, odată vindecată, și evită expunerea intensă. Detalii în ghidul despre [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina).",
        { h3: "Hidratarea" },
        "Pielea cu urme tinde să fie mai uscată. Hidratează zilnic, cu o cremă simplă, pe care o tolerezi. O piele elastică și hidratată întreține aspectul tatuajului și reduce senzația de tensiune.",
        { h3: "Controalele pielii" },
        "Un tatuaj nu înlocuiește controalele dermatologice. Dacă ai alunițe în apropierea tatuajului, continuă controalele periodice, după recomandarea medicului. Observă orice schimbare a pielii din jur: o pată nouă, o zonă care se îngroașă, o cicatrice care crește. Spune-o medicului.",
        { h3: "Greutatea și schimbările corpului" },
        "Variațiile mari de greutate, sarcina sau un program intens de antrenament pot modifica pielea și pot deforma tatuajul, în special pe abdomen, coapse și brațe. Dacă ai un tatuaj pe o zonă expusă acestor schimbări, e normal ca aspectul să se modifice în timp. Un retuș poate corecta o parte din efecte.",
        { h3: "Retușul ca parte din plan" },
        "Pe pielea cu urme, un retuș nu este un eșec, ci o etapă firească. Planifică-l, dacă artistul îl recomandă, după vindecarea completă. Un retuș bine făcut aduce uniformitate acolo unde cerneala s-a fixat mai slab.",
      ],
    },
    {
      id: "cand-nu-se-tatueaza",
      h2: "Când nu se tatuează sau când se amână",
      blocks: [
        {
          table: {
            head: ["Situația", "Ce faci"],
            rows: [
              ["Cicatrice recentă, roșie, sensibilă, în curs de vindecare", "Aștepți maturizarea completă"],
              ["Cheloid sau antecedente de cheloide, fără aviz medical", "Consulți medicul înainte de orice"],
              ["Aluniță nouă, schimbată sau suspectă", "Mergi la dermatolog; nu tatuezi peste ea"],
              ["Vergeturi recente, roșii sau violacee", "Aștepți să se albească și să se stabilizeze"],
              ["Pielea cu eczemă, psoriazis sau acnee active în zonă", "Aștepți remisia și discuți cu dermatologul"],
              ["Arsură solară sau iritație în zonă", "Aștepți vindecarea completă"],
              ["Sarcină, alăptare, schimbări mari de greutate planificate", "Amâni tatuajul în zonele afectate"],
              ["Intervenție chirurgicală recentă în zonă", "Aștepți avizul medicului"],
            ],
          },
        },
        "A amâna nu înseamnă a renunța. Pielea își recapătă, în timp, o stare potrivită, iar un tatuaj făcut la momentul corect arată mai bine și se vindecă mai ușor. Un artist care îți spune „mai așteaptă” nu îți refuză serviciul, ci îți protejează pielea.",
      ],
    },
    {
      id: "greseli-frecvente",
      h2: "Greșeli frecvente",
      blocks: [
        {
          ul: [
            "Tatuarea unei cicatrici încă în curs de vindecare, pentru că „arată bine acum”.",
            "Ignorarea riscului de cheloid, în ciuda antecedentelor.",
            "Tatuarea peste o aluniță, fără control dermatologic.",
            "Așteptarea ca tatuajul să facă marca „să dispară complet”.",
            "Alegerea unui desen minimalist, cu linii fine, exact peste o cicatrice cu relief.",
            "Programarea unui tatuaj pe abdomen înaintea unei sarcini sau a unei schimbări de greutate planificate.",
            "Lipsa de transparență față de artist, privind istoricul zonei.",
            "Compararea cu rezultatele altora: pielea fiecăruia reacționează diferit.",
          ],
        },
        "Dacă ai dubii, mergi pas cu pas: medic, artist, probă, desen. Un drum mai lent duce, de multe ori, la un rezultat mai bun.",
      ],
    },
    {
      id: "ce-spui-artistului",
      h2: "Ce spui artistului la prima discuție",
      blocks: [
        "Cu cât artistul vede mai bine zona, cu atât îți poate spune mai sincer ce se poate. La prima discuție, arată zona la lumină bună și spune ce știi despre ea.",
        {
          ul: [
            "Cât de veche este cicatricea sau de când sunt vergeturile.",
            "Dacă zona este sensibilă, dureroasă sau își schimbă aspectul.",
            "Dacă ai tendință la cicatrici ridicate sau ai avut probleme de vindecare.",
            "Dacă o aluniță s-a modificat recent sau a fost evaluată de medic.",
          ],
        },
        "Un artist responsabil poate refuza sau amâna lucrarea, iar în cazul alunițelor poate cere un aviz dermatologic. Asta nu înseamnă dezinteres, ci prudență.",
      ],
    },
  ],
  faq: [
    {
      q: "Se poate tatua peste o cicatrice?",
      a: "De multe ori da, dar numai după ce cicatricea s-a maturizat complet (este plată, palidă, fără sensibilitate) și după evaluarea artistului. Rezultatul poate fi mai puțin uniform decât pe piele fără urme și poate cere retuș. La cheloide, cere mai întâi avizul medicului.",
    },
    {
      q: "Cât trebuie să aștept după o operație sau o rană?",
      a: "Nu există un timp valabil pentru toți. Cicatricea trebuie să fie matură, de obicei după cel puțin un an, uneori doi sau mai mult. Medicul sau artistul poate evalua starea zonei. După o operație, cere avizul medicului.",
    },
    {
      q: "Se poate tatua peste vergeturi?",
      a: "Se poate pe vergeturile vechi, albe și stabile, dar cerneala se fixează mai greu și tatuajul poate arăta inegal. Vergeturile recente, roșii sau violacee, nu se tatuează.",
    },
    {
      q: "Se poate tatua peste o aluniță?",
      a: "De regulă nu. Se lucrează în jurul ei, pentru că tatuajul poate ascunde schimbările care semnalează o problemă. Dacă alunița este nouă sau arată neobișnuit, mergi la dermatolog înainte.",
    },
    {
      q: "Pot ascunde complet o cicatrice cu un tatuaj?",
      a: "De obicei, nu complet. Culoarea poate fi acoperită, dar relieful și textura rămân. Un desen bine ales poate face cicatricea mult mai puțin vizibilă. Un artist onest îți spune ce se poate obține.",
    },
    {
      q: "Doare mai tare tatuajul pe cicatrice?",
      a: "Depinde. Unele cicatrici sunt amorțite și doare mai puțin, altele sunt foarte sensibile și doare mai mult. Vergeturile pot fi mai sensibile decât pielea din jur. Spune artistului ce simți și cere pauze.",
    },
    {
      q: "Ce desene se potrivesc cel mai bine peste cicatrici?",
      a: "Cele organice, cu textură și detaliu: flori, frunze, pene, scoarță, umbre moi. Liniile fine și formele geometrice stricte se potrivesc mai greu, pentru că relieful le deformează.",
    },
    {
      q: "Pot să mă tatuez dacă am cheloide?",
      a: "Nu fără acordul medicului. Un tatuaj este un traumatism al pielii și poate declanșa o cicatrice nouă, mai vizibilă, la persoanele predispuse. Discută cu medicul dermatolog înainte de orice programare.",
    },
    {
      q: "Ce fac dacă tatuajul pe cicatrice arată inegal după vindecare?",
      a: "Este frecvent. Cere sfatul artistului: de multe ori se rezolvă cu un retuș, după vindecarea completă. Nu retușa înainte să se termine vindecarea.",
    },
    {
      q: "Cum trimit zona pentru o evaluare la Hasha Tattoo?",
      a: "Scrie-ne pe WhatsApp la +40 766 422 219 și trimite fotografii clare, în lumină naturală, din mai multe unghiuri, cu ideea ta. Poți suna și luni până vineri, între 12:00 și 20:00.",
    },
  ],
  cta: {
    title: ["Ai o urmă", "pe care o vrei integrată?"],
    text: "Trimite-ne fotografii ale zonei și spune-ne ce îți dorești: să o ascunzi, să o integrezi sau să o evidențiezi. Un artist îți spune sincer ce se poate obține.",
    wa: "Bună! Am o cicatrice, vergeturi sau o marcă pe piele și vreau să discut despre un tatuaj la Hasha Tattoo. Vă trimit fotografii ale zonei.",
  },
  related: ["cum-ingrijesti-un-tatuaj-nou", "alergii-si-piele-sensibila", "retusul-tatuajului-cand-e-necesar"],
};

export default content;
