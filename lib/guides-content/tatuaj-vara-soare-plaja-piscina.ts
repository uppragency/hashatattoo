import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "Vara este sezonul în care mulți oameni vor un tatuaj nou și, în același timp, sezonul în care un tatuaj proaspăt este cel mai vulnerabil. Soarele, transpirația, apa din piscină sau din mare, nisipul, praful și căldura lucrează toate împotriva unei piele în curs de vindecare. Totuși, nu trebuie să renunți la plan: cu puțină organizare, poți avea un tatuaj frumos vindecat și o vară bună.",
    "Ghidul explică de ce soarele este cel mai mare dușman al tatuajelor, cum protejezi un tatuaj proaspăt și unul vindecat, ce faci dacă ai concediu programat, cum alegi crema de protecție și când este bine să aștepți toamna. Te ajută atât dacă vrei să te tatuezi vara, cât și dacă ai deja un tatuaj și îl expui la soare.",
    "Informațiile sunt generale și educative. Pentru instrucțiuni exacte, urmează indicațiile artistului care ți-a făcut tatuajul. Dacă ai afecțiuni ale pielii, ești sub tratament sau ai fost expus la o arsură, cere sfatul unui medic dermatolog.",
  ],
  sections: [
    {
      id: "soarele-si-tatuajul",
      h2: "De ce soarele este problema principală",
      blocks: [
        "Radiația ultravioletă (UV) deteriorează atât pielea, cât și pigmenții din tatuaj. Pe un tatuaj vindecat, UV decolorează liniile, estompează contrastele și face culorile să pară mai pale cu trecerea anilor. Pe un tatuaj proaspăt, efectul este mai grav: pielea irită, se arde mai ușor, iar vindecarea este afectată.",
        { h3: "Ce face soarele unui tatuaj proaspăt" },
        {
          ul: [
            "Irită pielea sensibilă și o poate arde, chiar și după o expunere scurtă.",
            "Usucă coaja și o face să se crape, ceea ce prelungește vindecarea.",
            "Poate provoca pete mai deschise sau mai întunecate în zona tatuată.",
            "Poate decolora cerneala din straturile superioare ale pielii, înainte ca aceasta să se stabilizeze.",
            "Crește riscul de iritație, mâncărime și inflamație.",
          ],
        },
        { h3: "Ce face soarele unui tatuaj vindecat" },
        "Chiar și după vindecare, expunerea repetată la soare estompează tatuajul. Negrul devine gri, albastrul se estompează, iar liniile fine pierd claritatea. Culorile deschise, cum ar fi galbenul, portocaliul și albul, sunt cele mai afectate. Tatuajele realiste cu degrade fine și detalii mici sunt, în general, cele mai sensibile la UV, pentru că pierderea unui detaliu se vede imediat.",
        { h3: "Soarele și sănătatea pielii" },
        "Pe lângă efectul estetic, protecția solară contează pentru sănătatea pielii în general. Pielea tatuată se protejează la fel ca orice alt tip de piele: cu cremă cu factor de protecție, haine și evitarea orelor de vârf. Un tatuaj nu înlocuiește controlul regulat al aluniților la dermatolog.",
      ],
    },
    {
      id: "vara-sau-toamna",
      h2: "Merită să te tatuezi vara?",
      blocks: [
        "Da, se poate, dar cere disciplină. Mulți artiști recomandă toamna și iarna pentru lucrări mari, dar nu orice om își poate alege luna. Dacă vrei un tatuaj vara, răspunsul depinde de zonă, de mărimea lucrării și de planurile tale.",
        {
          table: {
            head: ["Factor", "Vara", "Toamna sau iarna"],
            rows: [
              ["Expunere la soare", "Mare, mai ales pe zone descoperite", "Mică, hainele acoperă zona"],
              ["Transpirația", "Frecventă, irită coaja", "Mai redusă"],
              ["Apă (mare, piscină)", "Tentație constantă", "Rar prezentă"],
              ["Haine", "Scurte, descoperite, dar și strânse la transpirație", "Lungi, care pot freca dar și proteja"],
              ["Timp liber", "Mai mult pentru ședințe", "Depinde"],
              ["Vindecare", "Mai grea de controlat", "Mai ușor de controlat"],
            ],
          },
        },
        "Dacă totuși te tatuezi vara, alege o zonă care poate fi acoperită cu haine largi, de exemplu partea superioară a brațului sau coapsa. Evită zonele pe care le expui constant, cum ar fi mâinile sau umerii, dacă nu poți evita plaja.",
        { h3: "Cum plănuiești dacă ai vacanță" },
        "Dacă ai un concediu la mare, nu programa ședința cu mai puțin de patru până la șase săptămâni înainte. Mai bine după vacanță. Dacă nu poți evita, lasă cel puțin o lună între tatuaj și apă sărată, soare puternic sau piscină. Pentru instrucțiuni specifice zonei tale, întreabă artistul.",
        "Dacă ai deja un tatuaj nou și pleci în vacanță, vezi secțiunea despre vacanța cu un tatuaj proaspăt, mai jos.",
      ],
    },
    {
      id: "tatuaj-proaspat",
      h2: "Tatuajul proaspăt la soare: ce faci și ce nu faci",
      blocks: [
        "Pe perioada vindecării, cea mai sigură regulă este să ferești complet tatuajul de soare direct. Nu există o formulă magică și nu există cremă care să facă expunerea sigură în primele săptămâni.",
        { h3: "Ce faci" },
        {
          ul: [
            "Acoperă tatuajul cu haine largi, deschise la culoare, din bumbac sau in, când ieși afară.",
            "Stai la umbră în orele de vârf (aproximativ 11:00 până la 16:00).",
            "Folosește o pălărie sau o umbrelă dacă tatuajul este pe cap, față sau gât.",
            "Urmează instrucțiunile de îngrijire și hidratează zona conform recomandărilor artistului.",
            "Dacă trebuie să ieși la soare, limitează expunerea la minimul posibil și acoperă zona.",
          ],
        },
        { h3: "Ce nu faci" },
        {
          ul: [
            "Nu mergi la plajă, nu faci solar și nu te bronzezi în perioada de vindecare.",
            "Nu aplici cremă de protecție solară pe un tatuaj nevindecat decât dacă artistul îți spune că poți. Multe creme conțin substanțe care irită pielea proaspătă.",
            "Nu folosești uleiuri de bronzat pe zonă.",
            "Nu expui tatuajul la soare la geam, în mașină sau în birou, fără protecție, în primele zile. UV trece prin sticlă.",
            "Nu smulgi coaja arsă de soare. Dacă tatuajul s-a ars, spune-i artistului și cere sfat.",
          ],
        },
        { h3: "Ce faci dacă s-a ars" },
        "Dacă tatuajul proaspăt a fost expus la soare și s-a înroșit, a devenit dureros sau s-au format vezicule, nu te trata pe cont propriu cu soluții de pe internet. Scrie artistului, trimite o fotografie și, dacă ai vezicule, durere intensă sau febră, mergi la medic. O arsură pe un tatuaj nou poate afecta rezultatul final.",
      ],
    },
    {
      id: "cand-poti-folosi-crema",
      h2: "Când poți folosi cremă de protecție solară",
      blocks: [
        "Crema cu factor de protecție solară (SPF) devine indispensabilă după ce tatuajul s-a vindecat complet la suprafață, adică după ce coaja s-a desprins și pielea nu mai este sensibilă. Durata variază, dar este de obicei de câteva săptămâni.",
        { h3: "Cum alegi crema" },
        {
          ul: [
            "Factor de protecție ridicat: SPF 50 sau mai mult, pentru tatuajele expuse frecvent.",
            "Protecție UVA și UVB (spectru larg). Verifică eticheta pentru termenul „broad spectrum” sau pentru simbolul UVA în cerc.",
            "Textură pe care pielea ta o tolerează: cremă, lapte sau stick, în funcție de zonă.",
            "Fără parfum puternic, mai ales dacă ai piele sensibilă.",
            "Rezistentă la apă, dacă te scalzi sau transpiri. Rezistența nu este însă permanentă.",
          ],
        },
        { h3: "Filtre minerale sau chimice" },
        "Cremele cu filtre minerale (oxid de zinc, dioxid de titan) stau la suprafață și reflectă radiația. Cele cu filtre chimice absorb radiația și o transformă în căldură. Ambele sunt eficiente când sunt folosite corect, iar alegerea depinde de preferință și de toleranța pielii. Persoanele cu piele sensibilă preferă adesea filtrele minerale. Dacă ai o reacție, schimbă produsul și cere sfatul unui dermatolog.",
        { h3: "Cum o aplici" },
        {
          ol: [
            "Aplică crema cu cel puțin 15 până la 30 de minute înainte de expunere.",
            "Folosește o cantitate generoasă, nu un strat subțire. Pentru un braț, este nevoie de o cantitate mai mare decât ai crede.",
            "Reaplic la fiecare două ore și după baie sau transpirație abundentă.",
            "Nu uita marginile tatuajului și zonele din jur, unde pielea este expusă la fel.",
            "Aplică și pe zilele înnorate: o parte din UV trece prin nori.",
          ],
        },
        "Protecția solară este un obicei pe viață. Un tatuaj protejat constant poate arăta bine mulți ani, în timp ce unul neprotejat îmbătrânește vizibil mai repede.",
      ],
    },
    {
      id: "plaja-si-mare",
      h2: "Plaja, marea și nisipul",
      blocks: [
        "Plaja combină trei factori de risc: soare, apă sărată și nisip. Pentru un tatuaj proaspăt, este mediul de evitat în totalitate.",
        { h3: "Apa de mare" },
        "Apa de mare conține sare și microorganisme care pot irita și infecta o piele în vindecare. Sarea usucă pielea și poate înmuia coaja. Un tatuaj proaspăt nu se scufundă în mare până la vindecarea completă a suprafeței. După vindecare, poți face baie, dar clătește-te cu apă dulce după aceea și hidratează pielea.",
        { h3: "Nisipul" },
        "Nisipul este abraziv și poate conține bacterii. Pe un tatuaj proaspăt, frecarea cu nisipul rupe coaja și poate duce la iritații sau infecții. Nu te așeza cu zona tatuată pe nisip și nu te freca cu prosopul plin de nisip.",
        { h3: "Prosopul și hainele de baie" },
        "Folosește un prosop curat, doar tu, și tamponează, fără să freci. Hainele de baie strâmte pot freca zone precum coapsa, șoldul sau abdomenul, deci alege-le largi în perioada de vindecare, dacă nu poți evita complet plaja.",
        { h3: "Dacă ai tatuaj vindecat" },
        "Un tatuaj vindecat poate fi expus la soare, cu protecție solară adecvată. Evită orele de vârf, reaplică crema și hidratează pielea după plajă. După arsuri solare repetate, tatuajul se degradează mai repede și pielea suferă.",
      ],
    },
    {
      id: "piscina-si-jacuzzi",
      h2: "Piscina, jacuzzi și saună",
      blocks: [
        "Clorul și apa caldă sunt alți doi factori de care trebuie să te ferești cu un tatuaj proaspăt.",
        {
          table: {
            head: ["Situația", "Risc pentru tatuajul proaspăt", "Ce faci"],
            rows: [
              ["Piscină cu clor", "Clorul irită și usucă pielea; apa poate conține bacterii", "Nu intri până la vindecarea suprafeței"],
              ["Jacuzzi, baie fierbinte", "Căldura și umezeala prelungită înmoaie coaja și pot decolora cerneala", "Eviți complet"],
              ["Saună, baie de aburi", "Căldura excesivă și transpirația intensă irită pielea", "Eviți complet"],
              ["Duș scurt", "Risc redus dacă respecți instrucțiunile", "Folosește apă călduță, fără jet puternic pe tatuaj"],
              ["Lac, râu", "Apa poate conține microorganisme", "Eviți până la vindecare"],
            ],
          },
        },
        "Dacă lucrezi sau te antrenezi într-un mediu cu apă, citește și ghidul despre [tatuaj și sport](/ghiduri/tatuajul-si-sportul), unde detaliem situațiile concrete.",
        { h3: "După vindecare" },
        "Când pielea s-a vindecat, poți reveni la piscină și la saună. Clorul poate usca pielea, deci hidratează zona după înot. Dacă observi uscăciune, mâncărime sau roșeață persistentă, scade frecvența și folosește o cremă hidratantă potrivită.",
      ],
    },
    {
      id: "vacanta-cu-tatuaj-proaspat",
      h2: "Vacanța cu un tatuaj proaspăt",
      blocks: [
        "Uneori planurile se schimbă: ai făcut tatuajul și ai o vacanță plătită, de neanulat, în următoarele săptămâni. Nu ai ce face decât să te adaptezi, dar poți reduce mult riscurile.",
        { h3: "Ce pregătești" },
        {
          ul: [
            "Haine largi, din bumbac sau in, cu mâneci lungi sau pantaloni lungi, după zonă.",
            "Pălărie, umbrelă de plajă sau un loc la umbră pentru perioadele în care ești afară.",
            "Soluția de curățare și crema recomandate de artist, în ambalaje de călătorie.",
            "Prosoape curate, doar pentru tine.",
            "Tricouri curate de rezervă, ca să le schimbi când transpiri.",
          ],
        },
        { h3: "Cum te comporți pe parcursul vacanței" },
        {
          ul: [
            "Nu intra în mare sau în piscină cu tatuajul proaspăt.",
            "Petrece orele de vârf în interior sau la umbră.",
            "Păstrează igiena: spală mâinile înainte să atingi zona.",
            "Dacă ai transpirat mult, fă duș și curăță zona conform indicațiilor.",
            "Nu zgâria și nu smulge coaja, chiar dacă mâncărimea este mai mare pe căldură.",
          ],
        },
        "Dacă tatuajul se irită sau se arde, contactează artistul și trimite fotografii. Pentru semne de infecție, cere ajutor medical local, chiar dacă ești în străinătate.",
        { h3: "Zbor cu avionul" },
        "Un tatuaj proaspăt poate fi umflat, iar presiunea și uscăciunea din avion nu ajută. Hidratează-te, poartă haine largi și evită să freci zona de scaun sau de centură. Detalii practice pentru perioada de după ședință găsești în ghidul despre [îngrijirea unui tatuaj nou](/ghiduri/cum-ingrijesti-un-tatuaj-nou).",
      ],
    },
    {
      id: "haine-si-transpiratie",
      h2: "Hainele și transpirația",
      blocks: [
        "Vara, hainele scurte expun tatuajul la soare, dar hainele strânse îl iritează prin frecare și transpirație. Echilibrul este delicat, deci alege cu grijă.",
        { h3: "Ce porți" },
        {
          ul: [
            "Haine largi, din bumbac sau in, care lasă pielea să respire.",
            "Culori deschise, care reflectă lumina mai bine decât cele închise.",
            "Mâneci lungi, ușoare, pentru tatuajele pe braț, când nu poți sta la umbră.",
            "Pălării cu boruri largi pentru tatuajele pe cap, gât sau față.",
            "Încălțăminte deschisă, dar curată, pentru tatuajele pe picior.",
          ],
        },
        { h3: "Ce eviți" },
        {
          ul: [
            "Haine sintetice strânse, care rețin transpirația și freacă pielea.",
            "Curele, benzi și bretele care apasă pe zona tatuată.",
            "Hainele prea groase, care te fac să transpiri excesiv.",
            "Pansamente ținute prea mult pe căldură, care rețin umezeala.",
          ],
        },
        "Dacă transpiri mult, tamponează blând cu un șervețel curat. Nu freca. Fă duș cât mai repede după efort sau după o zi la căldură.",
      ],
    },
    {
      id: "dupa-vindecare",
      h2: "Tatuajul vindecat vara: protecție pe termen lung",
      blocks: [
        "După vindecare, tatuajul nu mai cere atenția din primele săptămâni, dar cere un obicei: protecția solară. Aceasta este cea mai bună investiție pentru longevitatea unui tatuaj.",
        { h3: "Un obicei simplu" },
        {
          ol: [
            "Aplică SPF 50 pe tatuaj înainte de orice expunere prelungită la soare, inclusiv în orașul tău, nu doar la mare.",
            "Reaplică la două ore dacă stai afară, și după baie.",
            "Poartă haine sau protecții când expunerea este lungă.",
            "Hidratează pielea seara, cu o cremă pe care o tolerezi.",
            "Verifică-ți tatuajul și pielea din jur: dacă observi schimbări (alunițe noi, pete, răni care nu se vindecă), mergi la dermatolog.",
          ],
        },
        { h3: "Ce se întâmplă cu timpul" },
        "Chiar și cu protecție, tatuajele se estompează treptat. Este un proces natural, influențat de mărime, culori, zonă, tipul pielii și expunere. Retușul la câțiva ani poate readuce contrastul, dar protecția zilnică rămâne cea mai bună metodă. Detalii despre retușuri găsești în ghidul despre [retușul tatuajului](/ghiduri/retusul-tatuajului-cand-e-necesar).",
        { h3: "Tatuajele care suferă cel mai mult" },
        {
          ul: [
            "Culorile deschise: galben, portocaliu, alb, roz.",
            "Liniile foarte fine și detaliile mici.",
            "Zonele expuse constant: mâini, antebrațe, gât, față.",
            "Tatuajele realiste cu degrade subtile, unde pierderea contrastului schimbă imaginea.",
          ],
        },
        "Dacă îți dorești un tatuaj într-o zonă expusă, alege un artist care să-ți explice cum va îmbătrâni lucrarea și care să proiecteze contrastul pentru viitor. Pentru alegerea stilului, vezi și ghidul despre [cum alegi stilul de tatuaj](/ghiduri/cum-alegi-stilul-de-tatuaj).",
      ],
    },
    {
      id: "piele-bronzata",
      h2: "Pielea bronzată și tatuajul",
      blocks: [
        "O întrebare frecventă la începutul verii: pot veni la ședință cu pielea bronzată? Răspunsul are două părți, una practică și una estetică.",
        { h3: "Partea practică" },
        "Pielea arsă de soare, roșie, sensibilă sau care se cojește nu poate fi tatuată în siguranță. Este deja o rană de suprafață, iar tatuarea ar adăuga o a doua agresiune peste prima. Dacă ai o arsură în zona planificată, spune-i artistului dinainte și așteaptă vindecarea completă. Cele mai multe studiouri amână ședința în acest caz.",
        "Pielea doar bronzată, fără arsură, poate fi tatuată, dar artistul poate prefera să lucreze pe piele cât mai apropiată de culoarea ei naturală. Motivul este simplu: bronzul se estompează, iar tatuajul rămâne. Dacă tatuajul este proiectat pe o piele întunecată de bronz, iar după câteva luni pielea se deschide la culoare, contrastul final poate arăta diferit de cel din ziua ședinței.",
        { h3: "Partea estetică" },
        "Tonul pielii influențează modul în care se văd culorile și degradeurile. Un tatuaj realist black and grey, de exemplu, își creează profunzimea prin diferențe fine între tonuri. Dacă pielea își schimbă tonul cu 2 sau 3 nuanțe de la vară la iarnă, perceperea contrastului se schimbă ușor. Nu este un motiv de panică, dar este un argument pentru ca artistul să te vadă în culoarea ta obișnuită, nu în vârf de bronz.",
        { h3: "Ce faci dacă vrei tatuaj și ai fost la mare" },
        {
          ul: [
            "Așteaptă ca eventualele arsuri să se vindece complet, fără coajă și fără roșeață.",
            "Hidratează zona o săptămână înainte, cu o cremă simplă, neparfumată.",
            "Menționează artistului că ai fost recent la soare și arată-i zona.",
            "Nu folosi autobronzant pe zona planificată cu cel puțin câteva zile înainte, pentru că pielea colorată artificial poate încurca lucrul și poate irita.",
          ],
        },
        "Dacă vrei să planifici ședința pentru finalul verii, spune-ne din timp, ca să alegem o dată în care pielea este într-o stare bună.",
      ],
    },
    {
      id: "mituri-despre-soare",
      h2: "Mituri despre soare și tatuaje",
      blocks: [
        "Despre soare și tatuaje circulă multe idei greșite. Câteva dintre cele mai întâlnite, cu explicația pentru fiecare.",
        {
          table: {
            head: ["Mit", "Realitate"],
            rows: [
              ["„Crema solară pusă gros peste un tatuaj proaspăt îl protejează.”", "Pe un tatuaj nevindecat, multe creme irită pielea. Protecția corectă în acea perioadă este umbra și hainele, nu crema, dacă artistul nu spune altfel."],
              ["„Dacă nu mă ard, nu e nicio problemă.”", "Nu trebuie să te arzi pentru ca soarele să afecteze pigmentul. Expunerea cumulată, chiar fără arsură, estompează tatuajul în timp."],
              ["„Negrul nu se estompează.”", "Și negrul se estompează, tinzând spre gri sau albăstrui. Liniile fine se văd mai puțin după ani de soare."],
              ["„În zilele înnorate nu e nevoie de protecție.”", "O mare parte din radiația UV trece prin nori. Protecția rămâne necesară."],
              ["„Dacă stau doar la geam, nu mă afectează.”", "Sticla filtrează o parte din UVB, dar lasă să treacă mult UVA. Expunerea îndelungată la geam contează."],
              ["„Un tatuaj mare îți apără pielea de soare.”", "Cerneala nu este un filtru solar. Pielea tatuată se arde la fel ca oricare alta."],
              ["„Solarul este mai sigur decât soarele.”", "Solarul emite UV intens și afectează atât pielea, cât și pigmentul. Nu este o alternativă sigură."],
            ],
          },
        },
        "Informațiile corecte te ajută să iei decizii bune. Dacă ai o îndoială, întreabă artistul sau un dermatolog, nu un forum.",
      ],
    },
    {
      id: "caldura-si-hidratare",
      h2: "Căldura, hidratarea și somnul pe timp de vară",
      blocks: [
        "Vindecarea nu depinde doar de ce pui pe piele, ci și de starea generală a corpului. Vara, căldura obosește organismul, iar deshidratarea este mai probabilă.",
        { h3: "Hidratarea" },
        "Bea apă regulat pe parcursul zilei, nu doar când ți-e sete. Pielea hidratată din interior este mai elastică și se vindecă mai bine. Cafeaua și alcoolul deshidratează, deci nu le folosi ca înlocuitori pentru apă. În zilele foarte călduroase, mărește cantitatea de lichide.",
        { h3: "Somnul pe căldură" },
        "Nopțile fierbinți îți strică somnul, iar somnul slab încetinește regenerarea. Păstrează dormitorul aerisit, folosește lenjerie subțire din bumbac și evită să dormi pe zona tatuată, dacă este posibil. Lenjeria curată și schimbată regulat este importantă în prima săptămână.",
        { h3: "Aer condiționat" },
        "Aerul condiționat usucă pielea. Dacă stai mult în încăperi climatizate, hidratează zona tatuată conform indicațiilor și evită jetul direct de aer rece pe piele.",
        { h3: "Hrana" },
        "Mesele ușoare, cu multe fructe și legume, sunt potrivite pentru căldură. Nu există o dietă specială pentru tatuaj, dar un corp bine hrănit se vindecă mai bine. Mai multe despre pregătire și hrană în ghidul despre [cum te pregătești pentru ședința de tatuaj](/ghiduri/cum-te-pregatesti-pentru-sedinta-de-tatuaj).",
      ],
    },
    {
      id: "alegerea-zonei-pentru-vara",
      h2: "Alegerea zonei în funcție de sezon",
      blocks: [
        "Dacă te tatuezi vara, alegerea zonei contează mult. Unele zone sunt ușor de protejat, altele sunt expuse constant.",
        {
          table: {
            head: ["Zona", "Expunere vara", "Cum o gestionezi"],
            rows: [
              ["Partea superioară a brațului", "Medie, se acoperă cu mâneci", "Tricou cu mâneci scurte și largi, umbră"],
              ["Coapsă", "Mică, se acoperă cu pantaloni sau fustă lungă", "Haine largi, fără frecare"],
              ["Spate, omoplat", "Medie, depinde de haine", "Tricou, evitarea apei și a nisipului"],
              ["Antebraț, mână", "Mare, aproape mereu la vedere", "Mânecă lungă ușoară sau planificarea ședinței în afara sezonului"],
              ["Gambă, gleznă", "Mare, expusă în sandale și pantaloni scurți", "Pantaloni lungi și largi, șosete curate"],
              ["Umăr, piept", "Mare la plajă, mică în oraș", "Evitarea plajei în perioada de vindecare"],
              ["Gât, față, cap", "Foarte mare", "Pălărie, evitarea soarelui; de regulă se programează toamna"],
            ],
          },
        },
        "Alegerea zonei se discută cu artistul, care te poate sfătui în funcție de designul ales. Dacă lucrarea ta este mare și are mai multe ședințe, gândește-te la tot parcursul, nu doar la prima ședință.",
      ],
    },
    {
      id: "checklist-vara",
      h2: "Lista de verificare pentru o vară cu tatuaj",
      blocks: [
        { h3: "Înainte de ședință" },
        {
          ul: [
            "Verifică calendarul: vacanțe, nunți, evenimente la piscină sau pe plajă.",
            "Lasă un interval de cel puțin patru până la șase săptămâni înainte de plajă sau piscină.",
            "Hidratează pielea cu o săptămână înainte și evită arsurile solare.",
            "Alege haine largi și curate pentru ziua ședinței și pentru zilele următoare.",
          ],
        },
        { h3: "După ședință" },
        {
          ul: [
            "Ferește tatuajul de soare direct și de apă, în perioada de vindecare.",
            "Poartă haine largi și curate. Schimbă-le dacă transpiri.",
            "Urmează instrucțiunile de îngrijire primite de la artist.",
            "Nu zgâria și nu smulge coaja, chiar dacă te mănâncă mai tare pe căldură.",
            "Hidratează-te: apă, somn, alimentație echilibrată.",
          ],
        },
        { h3: "După vindecare" },
        {
          ul: [
            "Folosește zilnic SPF 50 pe tatuaj, în special la expunere prelungită.",
            "Reaplic crema la două ore și după baie.",
            "Hidratează pielea seara, cu o cremă pe care o tolerezi.",
            "Planifică retușul, dacă este cazul, în afara sezonului cald.",
          ],
        },
        "O listă simplă, urmată cu constanță, face mai mult decât orice produs scump. Dacă ai întrebări despre cazul tău concret, scrie-ne pe WhatsApp.",
      ],
    },
    {
      id: "piercing-vara",
      h2: "Piercingul vara",
      blocks: [
        "Și piercingul are probleme specifice pe căldură. Apa, transpirația și soarele afectează vindecarea.",
        {
          table: {
            head: ["Piercing", "Riscuri vara", "Ce faci"],
            rows: [
              ["Ureche", "Transpirația, protecția solară pe bijuterie, apa de mare, părul lung", "Curăță regulat, evită scufundarea în apă murdară, ține părul departe"],
              ["Buric", "Haine strânse, nisip, apă sărată, soare", "Alege haine largi, evită plaja în perioada de vindecare"],
              ["Nas", "Transpirație, creme solare care ajung pe piercing", "Aplică crema cu grijă, ocolește zona; curăță după transpirație"],
              ["Buză, limbă", "Apa de mare, înghețata și băuturile reci pot irita zona", "Clătește gura, evită alcoolul și mâncarea picantă la început"],
            ],
          },
        },
        "Pentru un piercing nou, evită scufundarea în mare sau în piscină în perioada de vindecare. Dacă trebuie să faci baie, discută cu piercerul despre cum să te protejezi. Aplică crema solară cu grijă, evitând contactul direct cu orificiul proaspăt. Detalii în ghidul despre [îngrijirea unui piercing nou](/ghiduri/cum-ingrijesti-un-piercing-nou).",
      ],
    },
    {
      id: "greseli-vara",
      h2: "Greșeli frecvente vara",
      blocks: [
        {
          ul: [
            "Programarea ședinței chiar înainte de vacanța la mare, fără un plan.",
            "Aplicarea cremei solare pe un tatuaj nevindecat, fără acordul artistului.",
            "Intrarea în apă „doar o dată” în prima săptămână.",
            "Ieșirea la plajă „cu tatuajul acoperit cu un tricou umed”, care reține umezeala.",
            "Folosirea uleiurilor de bronzat sau a produselor cu parfum pe zonă.",
            "Smulgerea coajei arsă de soare.",
            "Neprotejarea tatuajului vindecat, ceea ce duce la estompare accelerată.",
            "Ignorarea semnelor de iritație sau infecție pe căldură.",
          ],
        },
        "Dacă ai făcut una dintre aceste greșeli, oprește expunerea, curăță blând și cere sfatul artistului. Cu cât acționezi mai repede, cu atât sunt mai mici șansele ca tatuajul să sufere.",
      ],
    },
    {
      id: "cand-ceri-ajutor",
      h2: "Când ceri ajutor",
      blocks: [
        {
          ul: [
            "Roșeață care se extinde dincolo de marginea tatuajului.",
            "Veziculă sau arsură evidentă pe zona tatuată.",
            "Durere intensă, căldură locală, puroi sau secreții cu miros neplăcut.",
            "Febră, frisoane sau stare generală alterată.",
            "Mâncărime foarte intensă sau erupție în jurul tatuajului.",
          ],
        },
        "În aceste situații, consultă un medic. Pentru întrebări legate de felul în care se vindecă tatuajul, scrie-ne pe WhatsApp la +40 766 422 219.",
      ],
    },
    {
      id: "lista-rapida-vara",
      h2: "Lista rapidă pentru vară",
      blocks: [
        {
          ul: [
            "Tatuaj proaspăt: fără soare direct, fără piscină, fără mare, până la vindecarea completă.",
            "Tatuaj vindecat: protecție solară, reaplicată la două ore și după baie.",
            "Haine largi, din bumbac, care acoperă zona atunci când ești expus la soare.",
            "Apă multă și hidratarea pielii, seara.",
            "Programarea unui tatuaj cu ceva timp înainte de vacanță, ca să ai timp de vindecare.",
            "Pentru dubii, întreabă artistul înainte de plecare.",
          ],
        },
        "Dacă urmează o vacanță la mare, nu te tatua cu câteva zile înainte. Mai bine amâni tatuajul după întoarcere.",
      ],
    },
  ],
  faq: [
    {
      q: "Pot să mă tatuez vara?",
      a: "Da, dar cere disciplină: ferești tatuajul de soare, apă și transpirație în perioada de vindecare. Dacă ai planuri la mare în următoarele patru până la șase săptămâni, mai bine amâni ședința până după vacanță.",
    },
    {
      q: "Pot merge la plajă cu un tatuaj proaspăt?",
      a: "Nu este recomandat. Soarele, nisipul și apa sărată irită și pot infecta o piele în vindecare. Dacă nu poți evita, acoperă zona cu haine largi și curate, stai la umbră și nu intra în apă.",
    },
    {
      q: "Când pot folosi cremă solară pe tatuaj?",
      a: "După ce tatuajul s-a vindecat la suprafață, adică după ce coaja s-a desprins și pielea nu mai este sensibilă. Pe un tatuaj nevindecat, folosește cremă solară doar dacă artistul îți spune că poți.",
    },
    {
      q: "Ce factor de protecție este potrivit pentru tatuaj?",
      a: "Se recomandă SPF 50 sau mai mult, cu protecție UVA și UVB. Alege o formulă pe care pielea ta o tolerează și reaplic-o la fiecare două ore și după baie.",
    },
    {
      q: "Soarele șterge tatuajul?",
      a: "Nu îl șterge, dar îl estompează în timp. Expunerea repetată fără protecție face negrul gri și culorile mai palide, mai ales la liniile fine și la culorile deschise.",
    },
    {
      q: "Pot merge la piscină după tatuaj?",
      a: "Nu, nu până la vindecarea suprafeței. Clorul irită pielea, iar apa poate conține bacterii. Întreabă artistul când poți relua înotul.",
    },
    {
      q: "Pot face solar cu un tatuaj?",
      a: "Pe un tatuaj proaspăt, nu. Pe unul vindecat, solarul expune tatuajul la UV intens și îl estompează. Dacă faci solar, acoperă tatuajul cu o protecție opacă.",
    },
    {
      q: "Ce fac dacă tatuajul s-a ars la soare?",
      a: "Ferește zona de soare, curăță blând și scrie artistului cu o fotografie. Dacă ai vezicule, durere intensă sau febră, mergi la medic. Nu te trata singur cu produse neverificate.",
    },
    {
      q: "Pot merge în vacanță imediat după tatuaj?",
      a: "Se poate, dar cere pregătire: haine largi, protecție la umbră, produsele de îngrijire în bagaj și evitarea apei. Mai sigur este să programezi tatuajul după vacanță.",
    },
    {
      q: "Pot folosi autobronzant peste un tatuaj?",
      a: "Pe un tatuaj proaspăt, nu: este o piele în vindecare, iar produsele cosmetice o pot irita. Pe un tatuaj vindecat, poți folosi autobronzant, dar nu uita că el nu oferă nicio protecție solară. Aplică SPF separat, înainte de expunere.",
    },
    {
      q: "De ce mă mănâncă tatuajul mai tare pe căldură?",
      a: "Căldura și transpirația irită pielea în curs de vindecare, iar coaja se întinde și se strânge mai des. Nu zgâria și nu freca. Hidratează zona conform indicațiilor, poartă haine largi și, dacă mâncărimea este intensă, cere sfatul artistului.",
    },
    {
      q: "Cât de des trebuie să reaplic crema solară pe tatuaj?",
      a: "La fiecare două ore la expunere directă și imediat după baie sau după transpirație abundentă, chiar dacă produsul este rezistent la apă. Nu uita să aplici și pe pielea din jurul tatuajului, nu doar pe desen.",
    },
    {
      q: "Se poate face retuș vara?",
      a: "Se poate, dar retușul este o procedură ca orice tatuaj, cu aceeași vindecare. Dacă se face vara, aceleași reguli de protecție se aplică. Mulți preferă să facă retușul toamna sau iarna, ca să evite soarele și apa.",
    },
    {
      q: "Cum mă programez la Hasha Tattoo?",
      a: "Scrie-ne pe WhatsApp la +40 766 422 219, cu ideea, zona și planurile tale de vară. Poți suna și luni până vineri, între 12:00 și 20:00.",
    },
  ],
  cta: {
    title: ["Vrei un tatuaj", "înainte de vară?"],
    text: "Spune-ne zona dorită și planurile tale pentru următoarele luni. Alegem împreună momentul potrivit, ca tatuajul să se vindece bine.",
    wa: "Bună! Vreau să programez un tatuaj la Hasha Tattoo și vreau să aleg un moment potrivit în funcție de planurile mele de vară.",
  },
  related: ["cum-ingrijesti-un-tatuaj-nou", "tatuajul-si-sportul", "retusul-tatuajului-cand-e-necesar"],
};

export default content;
