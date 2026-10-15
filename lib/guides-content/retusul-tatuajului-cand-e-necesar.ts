import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "Un tatuaj proaspăt nu arată ca unul vindecat. După câteva săptămâni, când coaja a căzut și pielea s-a liniștit, mulți oameni observă lucruri care nu erau acolo în ziua ședinței: o linie mai slabă într-un loc, o zonă de culoare mai deschisă, un detaliu mai estompat, un contrast mai mic. Prima întrebare este aproape întotdeauna aceeași: s-a stricat? Răspunsul, în majoritatea cazurilor, este nu. Este momentul în care se discută despre retuș.",
    "Retușul este o ședință scurtă, făcută după vindecare, în care artistul corectează mici neregularități ale unui tatuaj: retrasează linii, completează zone în care cerneala nu a prins uniform, reface contrastul și detaliile. Nu este un semn că tatuajul a fost prost făcut. Este o etapă firească pentru multe lucrări, mai ales cele cu detalii fine, cu umbre, cu culoare sau pe zone dificile.",
    "Ghidul explică ce este un retuș, când este nevoie și când nu, ce poate și ce nu poate corecta, când îl faci, cum decurge, cum îl îngrijești, ce politică au de obicei studiourile și cum faci diferența între un retuș, o corectare și un cover-up. Politica concretă a fiecărui studio diferă, deci întreabă artistul tău înainte de ședința inițială.",
  ],
  sections: [
    {
      id: "ce-este-retusul",
      h2: "Ce este un retuș",
      blocks: [
        "Retușul este o intervenție de finisare pe un tatuaj deja vindecat. Artistul lucrează pe același desen, cu același aparat și aceeași tehnică, dar scopul este diferit: nu creează ceva nou, ci aduce lucrarea la nivelul propus inițial.",
        { h3: "Ce se întâmplă într-un retuș" },
        {
          ul: [
            "Se retrasează liniile care s-au estompat sau s-au întrerupt în timpul vindecării.",
            "Se completează zonele în care cerneala nu s-a fixat uniform și a lăsat pete mai deschise.",
            "Se reface contrastul în umbre și se adâncesc zonele întunecate care au rămas prea palide.",
            "Se saturează culorile care au ieșit mai slab.",
            "Se rafinează detaliile mici care s-au pierdut.",
          ],
        },
        { h3: "Cât durează" },
        "De obicei, mult mai puțin decât ședința inițială: de la câteva zeci de minute la una sau două ore, în funcție de câte zone trebuie corectate. Pentru lucrări foarte mari, cum ar fi o mânecă sau un spate, retușul poate cere mai mult timp și se poate împărți pe mai multe vizite.",
        { h3: "De ce se face după vindecare" },
        "Un retuș nu se face pe un tatuaj proaspăt. Pielea trebuie să se vindece complet, pentru ca artistul să vadă rezultatul real, nu aspectul inflamat din primele zile. Un retuș făcut prea devreme poate irita pielea, poate masca zonele care încă se schimbă și poate duce la un rezultat mai slab.",
      ],
    },
    {
      id: "de-ce-apare-nevoia",
      h2: "De ce apare nevoia de retuș",
      blocks: [
        "Un artist bun lucrează atent, dar pielea este un material viu și nu poate fi controlată complet. Mai mulți factori fac ca un tatuaj să iasă diferit față de ce părea în ședință.",
        {
          table: {
            head: ["Cauza", "Ce se întâmplă", "Exemplu"],
            rows: [
              ["Reacția individuală a pielii", "Fiecare piele primește cerneala diferit: unele rețin mai mult, altele mai puțin", "Același desen arată diferit pe două persoane"],
              ["Vindecarea", "Coaja poate desprinde o parte din pigment, mai ales la zgâriere sau frecare", "Pete mai deschise după căderea coajei"],
              ["Zona", "Zonele cu mișcare, cu piele subțire sau cu frecare rețin mai greu cerneala", "Degete, coate, genunchi, picioare, coaste"],
              ["Tipul lucrării", "Liniile foarte fine, degradeurile și culorile deschise sunt mai sensibile", "Fine line, realism, culori pastelate"],
              ["Îngrijirea", "Hidratare insuficientă, expunere la soare sau la apă, zgâriere", "Zone mai palide după o vacanță la mare"],
              ["Starea pielii", "Piele uscată, deshidratată, bronzată sau cu urme poate reține diferit pigmentul", "Zone cu cicatrici sau vergeturi"],
              ["Timpul", "Cerneala se estompează treptat, iar contrastul scade", "Un tatuaj vechi de zece ani, cu linii mai moi"],
            ],
          },
        },
        "Primele patru cauze sunt normale și previzibile, iar un retuș le rezolvă. Ultimele, legate de îngrijire și de timp, se pot reduce prin protecție și grijă. Pentru îngrijire, vezi ghidul despre [îngrijirea unui tatuaj nou](/ghiduri/cum-ingrijesti-un-tatuaj-nou).",
        {
          note: "Nu orice tatuaj are nevoie de retuș. Multe lucrări simple, în linii groase și bine făcute, se vindecă perfect din prima. Un retuș nu este o obligație, ci o opțiune, folosită când rezultatul o cere.",
          title: "De reținut",
        },
      ],
    },
    {
      id: "cand-faci-retusul",
      h2: "Când faci retușul",
      blocks: [
        "Momentul potrivit este important. Nici prea devreme, nici prea târziu.",
        { h3: "După vindecarea completă" },
        "Retușul se face după ce tatuajul s-a vindecat complet, adică după ce coaja a căzut, pielea nu mai este sensibilă, nu mai este roșie sau lucioasă, iar culoarea s-a stabilizat. De obicei, asta înseamnă cel puțin câteva săptămâni după ședința inițială. Pentru unele zone sau lucrări mari, poate dura mai mult. Un interval de 3 până la 6 săptămâni este cel folosit des pentru vindecarea de suprafață, dar artistul este cel care decide când pielea este pregătită.",
        {
          table: {
            head: ["Moment", "Situația", "Ce faci"],
            rows: [
              ["Primele zile", "Piele roșie, sensibilă, cu coajă în formare", "Nu retușezi; îngrijești conform instrucțiunilor"],
              ["Săptămânile 1 până la 3", "Coaja cade, pielea încă se transformă", "Nu retușezi; aștepți"],
              ["După vindecarea de suprafață", "Pielea este mată, fără coajă, culoarea se stabilizează", "Poți evalua cu artistul dacă este nevoie de retuș"],
              ["După câteva luni", "Tatuajul este stabil", "Retușul se poate face oricând, dacă este cazul"],
              ["După ani", "Contrastul scade natural", "Un retuș de reîmprospătare poate fi o opțiune"],
            ],
          },
        },
        { h3: "Cum afli dacă ai nevoie" },
        "Cea mai bună metodă este să-ți arăți tatuajul artistului, după vindecare. Poți trimite fotografii, în lumină naturală, pe WhatsApp sau poți veni la studio. Artistul îți spune ce se poate corecta și dacă merită. Nu te grăbi să alegi un retuș singur: unele zone care par slabe în prima lună se limpezesc singure.",
        { h3: "Nu amâna la nesfârșit" },
        "Dacă ai observat probleme reale, nu le lăsa ani de zile. Un retuș făcut la câteva luni după vindecare este mai simplu decât unul făcut după ani, când se adaugă și efectul timpului și al soarelui. Dar nici nu te grăbi: un tatuaj are nevoie de timp ca să arate cum va arăta.",
      ],
    },
    {
      id: "ce-poate-si-ce-nu-poate",
      h2: "Ce poate corecta un retuș și ce nu",
      blocks: [
        "Retușul este util, dar nu este magic. Cunoașterea limitelor te ajută să ai așteptări realiste.",
        { h3: "Ce se corectează de obicei" },
        {
          ul: [
            "Linii întrerupte, subțiate sau estompate.",
            "Pete deschise în umbre sau în zone pline de culoare.",
            "Contrast scăzut în tatuaje black and grey.",
            "Culori mai slabe decât se aștepta.",
            "Detalii mici care s-au pierdut în timpul vindecării.",
            "Mici imperfecțiuni de execuție, care devin vizibile doar după vindecare.",
          ],
        },
        { h3: "Ce nu se corectează printr-un retuș simplu" },
        {
          ul: [
            "Un desen cu proporții greșite sau care nu-ți place: aceasta este o chestiune de corectare sau de cover-up, nu de retuș.",
            "Liniile care „s-au întins” sub piele, adică un efect de difuzie a cernelii în straturile inferioare (blowout). Unele pot fi atenuate, altele nu.",
            "Cicatrici apărute din cauza unei vindecări proaste, a zgârierii sau a unei infecții.",
            "Estomparea cauzată de ani de soare neprotejat: se poate reîmprospăta, dar nu se poate readuce complet la starea inițială.",
            "Un tatuaj prea mic, cu detalii prea fine pentru mărime, care se încețoșează în timp. Retușul poate ajuta temporar, dar problema de fond rămâne.",
          ],
        },
        { h3: "Blowout: ce este" },
        "Blowout este un efect în care cerneala se întinde sub piele, în afara liniei, și creează o pată estompată în jurul desenului. Apare atunci când acul a pătruns prea adânc sau pielea este foarte subțire. Nu se rezolvă printr-un retuș obișnuit. Uneori se poate atenua prin lucrări atente de camuflare, alteori cere o corectare mai amplă. Pentru astfel de situații, vezi pagina despre [corectare tatuaje](/corectare-tatuaje-bucuresti).",
        { h3: "Retuș, corectare, cover-up: diferența" },
        {
          table: {
            head: ["", "Retuș", "Corectare", "Cover-up"],
            rows: [
              ["Scop", "Finisarea unei lucrări bune, după vindecare", "Repararea unor greșeli sau a unor defecte vizibile", "Acoperirea completă a unui tatuaj vechi cu unul nou"],
              ["Intervenție", "Mică, pe același desen", "Medie, ajustând desenul existent", "Mare, un desen nou, mai amplu"],
              ["Când", "După vindecare, când tatuajul are zone slabe", "Când tatuajul are probleme vizibile de execuție", "Când nu mai vrei desenul vechi"],
              ["Rezultat", "Lucrarea originală, la nivelul propus", "Lucrarea originală, îmbunătățită", "O lucrare nouă peste cea veche"],
            ],
          },
        },
        "Pentru detalii, vezi paginile despre [corectare tatuaje](/corectare-tatuaje-bucuresti) și [cover-up tatuaje](/cover-up-tatuaje-bucuresti).",
      ],
    },
    {
      id: "zone-si-stiluri",
      h2: "Ce tatuaje și ce zone cer cel mai des retuș",
      blocks: [
        "Nu toate lucrările au aceeași probabilitate de retuș. Anumite zone și anumite stiluri sunt mai predispuse.",
        { h3: "Zonele" },
        {
          table: {
            head: ["Zona", "De ce este mai predispusă", "Ce poți face"],
            rows: [
              ["Degete, mâini", "Piele subțire, mișcare mare, spălat des, expunere la soare", "Așteaptă-te la retuș; alege desene simple, linii mai groase"],
              ["Picioare, glezne", "Frecare cu încălțămintea, circulație mai slabă, piele subțire", "Îngrijire atentă, haine largi, retuș probabil"],
              ["Coate, genunchi", "Piele care se pliază și se întinde mult", "Desene adaptate mișcării, retuș posibil"],
              ["Coaste, abdomen", "Piele care se mișcă la respirație, schimbări de greutate", "Retuș ocazional"],
              ["Față internă a brațului", "Piele subțire și sensibilă", "Îngrijire atentă; retuș rar"],
              ["Spate, umăr, coapsă", "Piele mai groasă, mai stabilă", "Retușul este mai rar necesar"],
            ],
          },
        },
        { h3: "Stilurile" },
        {
          ul: [
            "Fine line și minimalism: liniile foarte subțiri se pierd ușor și pot cere retuș.",
            "Realism black and grey: degradeurile fine sunt sensibile, iar un retuș poate adânci contrastul.",
            "Culoare: unele culori, în special cele deschise, se fixează mai greu și se estompează mai repede.",
            "Text mic și detalii fine: riscul de a se încețoșa sau de a se pierde este mai mare.",
            "Linii groase și forme pline: sunt cele mai stabile și cer rar retuș.",
          ],
        },
        "Vezi ghidul despre [cum alegi stilul de tatuaj](/ghiduri/cum-alegi-stilul-de-tatuaj) pentru mai multe despre cum îmbătrânește fiecare stil. Un artist onest îți spune dinainte dacă lucrarea ta are șanse mari să aibă nevoie de un retuș.",
      ],
    },
    {
      id: "cum-evaluezi-vindecarea",
      h2: "Cum evaluezi singur un tatuaj vindecat, înainte să decizi",
      blocks: [
        "Înainte de a cere un retuș, merită să te uiți cu atenție la tatuaj, în condiții bune, și să separi ce este o etapă a vindecării de ce este o problemă reală. Iată o metodă simplă.",
        { h3: "Condițiile de evaluare" },
        {
          ul: [
            "Așteaptă vindecarea completă: fără coajă, fără roșeață, fără luciu de rană.",
            "Evaluează la lumină naturală, de preferință lângă o fereastră, nu sub lumina artificială directă.",
            "Fă fotografii din mai multe unghiuri, fără bliț și fără filtre.",
            "Compară cu fotografia din ziua ședinței, dar ține cont că tatuajul proaspăt arată mai contrastant.",
            "Privește și de la distanță normală, nu doar de aproape: unele neregularități nu se văd decât la mărire.",
          ],
        },
        { h3: "Ce observi" },
        {
          table: {
            head: ["Ce vezi", "Ce poate însemna", "Ce faci"],
            rows: [
              ["Zone mai deschise, ca niște pete în interiorul unei umbre sau a unei culori", "Cerneala nu s-a fixat uniform; de multe ori se corectează printr-un retuș", "Trimite poze artistului"],
              ["Linii întrerupte sau foarte subțiri", "Pigment pierdut în vindecare sau linii prea fine pentru zonă", "Cere o evaluare; retuș probabil"],
              ["Contrast general mai slab decât în ședință", "Efectul normal al vindecării; uneori se limpezește singur", "Mai așteaptă câteva săptămâni, apoi reevaluează"],
              ["Margini încețoșate, pete în jurul liniilor", "Posibil blowout", "Cere evaluare; nu se rezolvă prin retuș simplu"],
              ["Cicatrici, zone ridicate sau denivelate", "Vindecare problematică, zgâriere sau reacție a pielii", "Cere evaluare medicală și artistică; nu retușa pe loc"],
              ["Culori mai palide decât te așteptai", "Reacția pielii sau culoare mai deschisă", "Cere evaluare; retuș posibil"],
              ["Tatuajul arată bine, dar ți se pare doar „altfel” decât în poza proaspătă", "Diferența firească dintre proaspăt și vindecat", "Probabil nu e nevoie de nimic"],
            ],
          },
        },
        "Nu intra în panică la prima vedere. Mulți clienți se sperie în a doua sau a treia săptămână, când pielea este mată, cojită sau mai „tulbure”, iar tatuajul pare șters. Este faza de pierdere a stratului superior de piele, iar culorile se limpezesc după câteva săptămâni, când pielea nouă se așază peste cerneală.",
        { h3: "Pozele și mesajul către artist" },
        "Când scrii artistului, trimite fotografii clare, de aproape și de la distanță, cu data ședinței. Spune cum ai îngrijit tatuajul și ce te deranjează concret. Un mesaj precis, cu poze bune, permite artistului să-ți răspundă util, fără ca tu să vii pentru o simplă evaluare.",
      ],
    },
    {
      id: "retus-pe-categorii",
      h2: "Retușul în funcție de tipul tatuajului",
      blocks: [
        "Tipul lucrării influențează ce anume se corectează și cum. Tabelul de mai jos arată situațiile frecvente.",
        {
          table: {
            head: ["Tipul lucrării", "Ce cere de obicei retuș", "Observații"],
            rows: [
              ["Realism black and grey", "Adâncirea contrastului în umbre, refacerea degradeurilor fine și a detaliilor din zonele deschise", "Retușul poate îmbunătăți mult profunzimea, dar nu schimbă proporțiile"],
              ["Realism color", "Saturarea culorilor, uniformizarea suprafețelor", "Culorile deschise pot cere mai multă atenție"],
              ["Portret", "Refacerea detaliilor din ochi, buze și păr, contrast pe piele", "Zonele mici cu detalii se pierd cel mai ușor"],
              ["Fine line, minimalism", "Retrasarea liniilor întrerupte, uniformizarea grosimii", "Poate fi nevoie și mai târziu, din cauza liniilor subțiri"],
              ["Ornamental, geometric", "Refacerea liniilor drepte, a simetriei și a punctelor", "Imperfecțiunile se văd ușor, deci un retuș este frecvent util"],
              ["Text, caligrafie", "Retrasarea literelor subțiri, uniformizarea spațierii", "Un retuș poate salva un text, dar nu corectează greșelile de scriere"],
              ["Linii groase, forme pline", "Rar necesar", "Cele mai stabile lucrări"],
            ],
          },
        },
        "Un artist cu experiență îți poate spune, încă din faza de desen, ce părți ale lucrării vor cere probabil retuș și îți poate propune ajustări care reduc această nevoie: linii puțin mai groase, spații mai generoase, detalii proporționate cu mărimea.",
        { h3: "Retușul și mărimea" },
        "Cu cât un tatuaj este mai mic și mai detaliat, cu atât retușul este mai probabil, dar și mai delicat. Un detaliu foarte mic poate fi retușat doar până la un punct: peste anumite limite, nu există suficient spațiu pentru ca pigmentul să rămână distinct. De aceea, alegerea mărimii potrivite încă de la început este cea mai bună prevenție.",
        { h3: "Retușul pe lucrări mari" },
        "Pentru lucrările mari (mâneci, spate, piept), retușul se face de obicei la final, după ce toate ședințele de bază au fost finalizate și vindecate. Astfel, artistul poate evalua întregul și poate corecta uniform, în loc de a retușa bucăți la intervale diferite.",
      ],
    },
    {
      id: "politica-studioului",
      h2: "Politica studioului: ce să întrebi înainte",
      blocks: [
        "Studiourile au reguli diferite privind retușul: unele îl includ în preț într-un anumit interval, altele îl taxează separat, altele au condiții. Nu există o regulă universală, iar singura sursă sigură este studioul tău.",
        { h3: "Întrebări de pus la programare" },
        {
          ol: [
            "Retușul este inclus în preț? Pentru cât timp după ședință?",
            "Dacă nu este inclus, cum se calculează costul?",
            "Ce condiții trebuie îndeplinite, de exemplu urmarea instrucțiunilor de îngrijire?",
            "Cât timp după ședință pot face retușul?",
            "Ce se întâmplă dacă vindecarea nu merge bine din cauza unor factori independenți de mine?",
            "Ce nu acoperă politica de retuș: de exemplu, estomparea după ani de soare?",
          ],
        },
        "Cere răspunsurile clar, de preferință în scris, pe WhatsApp. O politică transparentă este un semn de profesionalism. Nu presupune că retușul este gratuit sau că nu este inclus: întreabă. La Hasha Tattoo, poți pune aceste întrebări pe WhatsApp, la +40 766 422 219, înainte de a programa.",
        { h3: "Condiții tipice" },
        "Multe studiouri cer ca tatuajul să fi fost îngrijit conform instrucțiunilor, ca retușul să se facă într-un anumit interval după ședința inițială și ca pielea să fie complet vindecată. Estomparea apărută din cauza expunerii la soare sau a neîngrijirii nu intră de regulă în retușul gratuit. Aceste reguli nu sunt abuzuri, ci reflectă faptul că rezultatul depinde și de client.",
        { h3: "Prețul unui retuș" },
        "Prețul depinde de zona de lucru și de timpul necesar. Un retuș mic costă, în general, mai puțin decât o ședință completă, dar nu este întotdeauna gratuit. Întreabă artistul pentru o estimare, după ce ți-a văzut tatuajul. Pentru informații despre prețuri, vezi pagina de [prețuri](/preturi).",
      ],
    },
    {
      id: "alt-artist",
      h2: "Retușul făcut de alt artist: când are sens și ce să știi",
      blocks: [
        "Uneori, tatuajul a fost făcut într-un alt oraș, de un artist care nu mai lucrează sau cu care nu mai vrei să lucrezi. Atunci se pune întrebarea dacă alt artist poate face retușul. Răspunsul este de multe ori da, dar cu câteva precizări.",
        { h3: "Ce să știi" },
        {
          ul: [
            "Un artist nou nu cunoaște culorile, cerneala sau tehnica folosite inițial și lucrează pe baza a ce vede pe piele. De aceea, retușul poate arăta ușor diferit de lucrarea originală.",
            "Unii artiști preferă să nu retușeze lucrările altora, mai ales dacă sunt în alt stil sau dacă nu pot garanta rezultatul. Acest lucru este normal.",
            "Condițiile de retuș inclus în preț se aplică, de obicei, doar la studioul care a făcut lucrarea.",
            "Dacă tatuajul are probleme mai serioase (blowout, cicatrici, proporții greșite), poate fi vorba despre o corectare sau un cover-up, nu despre un retuș.",
          ],
        },
        { h3: "Cum procedezi" },
        {
          ol: [
            "Scrie mai întâi artistului inițial, dacă relația este bună. Poate rezolva rapid situația.",
            "Dacă nu este posibil, caută un artist cu experiență în același stil.",
            "Trimite fotografii clare și spune sincer cine a făcut lucrarea inițială și ce te deranjează.",
            "Cere o părere onestă: poate fi retușat, trebuie corectat sau mai bine acoperit?",
            "Întreabă ce rezultat realist se poate obține și cât costă.",
          ],
        },
        "Pentru situații în care tatuajul inițial are probleme mai mari, citește despre [corectarea tatuajelor](/corectare-tatuaje-bucuresti) și despre [cover-up](/cover-up-tatuaje-bucuresti). La Hasha Tattoo poți trimite fotografii pe WhatsApp, iar un artist îți spune ce se poate face.",
      ],
    },
    {
      id: "cum-decurge",
      h2: "Cum decurge o ședință de retuș",
      blocks: [
        "Un retuș seamănă cu o ședință de tatuaj, dar este de obicei mai scurt și mai puțin neplăcut, deoarece lucrează pe o zonă mai mică și pe o piele deja obișnuită cu procedura.",
        {
          ol: [
            "Evaluarea: artistul se uită la tatuajul vindecat și identifică zonele care cer corectare.",
            "Discuția: stabiliți ce se corectează, ce se lasă și ce poate rămâne asemănător.",
            "Pregătirea: pielea se curăță, iar echipamentul steril se pregătește ca la orice ședință.",
            "Lucrul: artistul retrasează și completează zonele stabilite, de obicei cu același aparat și aceleași culori.",
            "Finalizarea: zona se curăță și se acoperă cu pansament.",
            "Îngrijirea: primești instrucțiuni de îngrijire, la fel ca după ședința inițială.",
          ],
        },
        { h3: "Cum se simte" },
        "Mulți clienți spun că retușul este mai suportabil decât ședința inițială. Pielea este, într-un fel, obișnuită, iar suprafața lucrată este mai mică. Totuși, zonele sensibile rămân sensibile. Pentru o privire pe zone, vezi [harta durerii](/ghiduri/harta-durerii).",
        { h3: "Ce se schimbă față de prima ședință" },
        "Un retuș nu schimbă desenul, ci îl finisează. Dacă vrei să adaugi elemente noi, să modifici desenul sau să extinzi tatuajul, aceasta este o lucrare nouă, nu un retuș, și se discută separat, inclusiv ca preț.",
      ],
    },
    {
      id: "ingrijirea-dupa-retus",
      h2: "Îngrijirea după retuș",
      blocks: [
        "Un retuș este o procedură ca oricare alta: pielea se irită și trebuie să se vindece din nou. Îngrijirea este asemănătoare cu cea după un tatuaj nou.",
        {
          ul: [
            "Urmează instrucțiunile primite de la artist, fără să adaugi produse proprii.",
            "Ține pansamentul cât ți s-a spus, apoi spală blând zona, conform recomandărilor.",
            "Aplică crema recomandată în strat subțire.",
            "Nu zgâria și nu smulge coaja.",
            "Ferește zona de soare direct, apă (piscină, mare), saună și transpirație intensă.",
            "Poartă haine largi și curate.",
            "Dacă apar semne de infecție (roșeață care se extinde, căldură, puroi, febră), cere ajutor medical.",
          ],
        },
        "Detaliile zilnice se află în ghidul despre [îngrijirea unui tatuaj nou](/ghiduri/cum-ingrijesti-un-tatuaj-nou). Pentru sport, vezi [tatuaj și sport](/ghiduri/tatuajul-si-sportul), iar pentru vară, [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina).",
        { h3: "Cât durează vindecarea" },
        "Vindecarea după un retuș este de obicei mai scurtă decât după prima ședință, pentru că zona lucrată este mai mică. Dar rămâne necesară răbdarea: nu judeca rezultatul final imediat. Aspectul se limpezește după câteva săptămâni.",
      ],
    },
    {
      id: "reimprospatare-dupa-ani",
      h2: "Reîmprospătarea unui tatuaj după ani",
      blocks: [
        "Chiar și cele mai bine îngrijite tatuaje se schimbă în timp. Cerneala se estompează treptat, contrastul scade, liniile se înmoaie, iar culorile se deschid. Este un proces natural, mai rapid la zonele expuse la soare.",
        { h3: "Cum arată îmbătrânirea" },
        {
          ul: [
            "Negrul tinde spre gri sau albăstrui.",
            "Culorile deschise (galben, portocaliu, alb) se pierd cel mai repede.",
            "Liniile fine se subțiază sau se estompează.",
            "Detaliile mici se contopesc.",
            "Contrastul dintre umbră și lumină se reduce.",
          ],
        },
        { h3: "Când merită o reîmprospătare" },
        "Nu există un interval fix. Unele tatuaje arată bine zece ani fără intervenție, altele cer o reîmprospătare după cinci. Decizia depinde de cum arată tatuajul și de cât te deranjează. Un retuș de reîmprospătare aduce contrastul și liniile la un nivel apropiat de cel inițial, dar nu poate anula complet efectele timpului.",
        { h3: "Cum încetinești estomparea" },
        {
          ul: [
            "Folosește zilnic protecție solară cu SPF 50 pe tatuaj, pe zonele expuse.",
            "Hidratează pielea regulat.",
            "Evită expunerea intensă la soare și solarul.",
            "Menține o greutate stabilă, dacă tatuajul este pe o zonă care se modifică.",
            "Alege de la început un design care îmbătrânește bine: linii suficient de groase, contrast clar, detalii proporționale cu mărimea.",
          ],
        },
        "Protecția solară este, de departe, cea mai eficientă măsură. Detalii în ghidul despre [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina).",
      ],
    },
    {
      id: "greseli-frecvente",
      h2: "Greșeli frecvente",
      blocks: [
        {
          ul: [
            "Cererea unui retuș prea devreme, înainte de vindecarea completă.",
            "Zgâriatul sau smulgerea coajei, care creează chiar zonele ce vor cere retuș.",
            "Neîngrijirea tatuajului în primele săptămâni.",
            "Expunerea la soare sau în apă a unui tatuaj nevindecat.",
            "Presupunerea că retușul este întotdeauna gratuit, fără să fi întrebat.",
            "Folosirea retușului pentru a schimba desenul, în loc de a discuta o lucrare nouă.",
            "Amânarea ani de zile a unui retuș necesar și apoi așteptarea unui rezultat „ca nou”.",
            "Mersul la alt artist pentru retușul lucrării altcuiva, fără a discuta mai întâi cu cel care a făcut-o.",
          ],
        },
        "Dacă tatuajul tău nu arată cum te așteptai, scrie mai întâi artistului care l-a făcut, cu fotografii clare. De multe ori, o discuție simplă lămurește dacă este nevoie de retuș, dacă e doar o etapă a vindecării sau dacă trebuie o altă abordare.",
      ],
    },
    {
      id: "intrebari-despre-retus",
      h2: "Ce întrebi înainte de ședință despre retuș",
      blocks: [
        "Politica de retuș nu este aceeași peste tot. Unele studiouri includ un retuș în prețul inițial, în anumite condiții, altele îl taxează separat, iar altele au intervale proprii. Hasha Tattoo își stabilește propriile reguli, așa că cea mai sigură cale este să întrebi direct studioul înainte de ședință.",
        {
          ol: [
            "Retușul este inclus în preț sau se plătește separat?",
            "În ce interval după vindecare se poate face?",
            "Ce condiții trebuie respectate ca să beneficiez de el (îngrijire, vindecare completă)?",
            "Ce se întâmplă dacă zona se vindecă inegal din cauze care nu țin de îngrijirea mea?",
            "Cum se programează și cât durează, de regulă?",
          ],
        },
        "Notează răspunsurile și, dacă studioul oferă termeni scriși, păstrează-i. Astfel, ai așteptări clare de la început și nu apar neînțelegeri.",
      ],
    },
  ],
  faq: [
    {
      q: "Ce este un retuș de tatuaj?",
      a: "O ședință scurtă, făcută după vindecare, în care artistul corectează mici neregularități: linii estompate, pete deschise, contrast slab sau detalii pierdute. Nu schimbă desenul, ci îl finisează.",
    },
    {
      q: "Orice tatuaj are nevoie de retuș?",
      a: "Nu. Multe lucrări, mai ales cele simple, în linii groase, se vindecă bine din prima. Retușul este mai frecvent la lucrări cu detalii fine, umbre, culoare sau pe zone dificile, cum sunt mâinile și picioarele.",
    },
    {
      q: "Când pot face retușul?",
      a: "După vindecarea completă a pielii: coaja a căzut, pielea nu mai este sensibilă și culoarea s-a stabilizat, de obicei după câteva săptămâni. Artistul decide când zona este pregătită. Un retuș prea devreme poate irita pielea.",
    },
    {
      q: "Retușul este inclus în preț?",
      a: "Depinde de studio. Unele includ un retuș într-un anumit interval, altele îl taxează separat. Întreabă la programare ce politică se aplică și ce condiții trebuie îndeplinite.",
    },
    {
      q: "Doare retușul mai tare decât tatuajul?",
      a: "De obicei mai puțin, pentru că zona lucrată este mai mică, iar pielea este obișnuită cu procedura. Zonele sensibile rămân totuși sensibile.",
    },
    {
      q: "Se poate corecta un tatuaj estompat după ani?",
      a: "Da, printr-un retuș de reîmprospătare, care readuce contrastul și liniile. Nu poate anula complet efectul timpului, mai ales dacă tatuajul a fost expus mult la soare.",
    },
    {
      q: "Care este diferența dintre retuș și corectare?",
      a: "Retușul finisează o lucrare bună, după vindecare. Corectarea repară probleme de execuție mai vizibile. Cover-up-ul acoperă complet un tatuaj vechi cu unul nou. Toate se discută cu artistul, după ce vede tatuajul.",
    },
    {
      q: "Ce este blowout și se rezolvă cu retuș?",
      a: "Blowout este întinderea cernelii sub piele, în afara liniei, care creează o pată estompată. Nu se rezolvă printr-un retuș obișnuit. Uneori se poate atenua, alteori cere o corectare mai amplă.",
    },
    {
      q: "Pot face retuș la alt artist?",
      a: "Poți, dar e bine să discuți mai întâi cu artistul care a făcut tatuajul. Condițiile de retuș (și eventuala gratuitate) se aplică de obicei acolo. Un alt artist poate lucra, dar fără istoricul lucrării.",
    },
    {
      q: "De ce arată tatuajul mai șters după două săptămâni?",
      a: "În timpul vindecării, pielea își schimbă stratul superior, iar un strat subțire de piele moartă acoperă temporar desenul. Culorile se limpezesc după câteva săptămâni. Nu judeca rezultatul înainte de vindecarea completă.",
    },
    {
      q: "Câte retușuri pot fi necesare?",
      a: "De obicei unul, uneori niciunul, rar două. Depinde de lucrare, zonă și piele. Dacă artistul consideră că sunt necesare mai multe, cere o explicație clară.",
    },
    {
      q: "Pot face retuș dacă am bronzat tatuajul?",
      a: "Nu este ideal. Pielea bronzată sau arsă de soare nu este potrivită pentru un retuș. Așteaptă ca pielea să revină la tonul ei natural și să fie complet refăcută.",
    },
    {
      q: "Cum cer un retuș la Hasha Tattoo?",
      a: "Scrie-ne pe WhatsApp la +40 766 422 219 și trimite fotografii clare, în lumină naturală, ale tatuajului vindecat. Poți suna și luni până vineri, între 12:00 și 20:00.",
    },
  ],
  cta: {
    title: ["Ai un tatuaj", "care cere finisare?"],
    text: "Trimite-ne fotografii ale tatuajului vindecat, în lumină naturală. Un artist îți spune dacă e nevoie de retuș și ce se poate corecta.",
    wa: "Bună! Am un tatuaj vindecat și aș vrea să aflu dacă are nevoie de retuș. Vă trimit fotografii.",
  },
  related: ["cum-ingrijesti-un-tatuaj-nou", "tatuaj-vara-soare-plaja-piscina", "cum-alegi-stilul-de-tatuaj"],
};

export default content;
