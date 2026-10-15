import type { GuideContent } from "@/lib/guide-types";

const content: GuideContent = {
  intro: [
    "După alegerea desenului, mărimea este decizia care influențează cel mai mult rezultatul final al unui tatuaj. Un desen frumos, făcut prea mic, devine peste câțiva ani o pată încețoșată. Un desen simplu, făcut prea mare, poate arăta disproporționat pe corp și costă mai mult decât ți-ai propus. Între cele două extreme există o mărime potrivită, care depinde de detaliu, de zonă, de stil și de felul în care îți dorești să îmbătrânească lucrarea.",
    "Mulți oameni își aleg mărimea după intuiție sau după ce văd pe internet: „vreau ceva mic, discret” sau „vreau mare, să se vadă”. Dar mărimea nu este doar o chestiune de gust. Este o decizie tehnică: cerneala se răspândește ușor în piele în timp, iar detaliile care nu au suficient spațiu între ele se contopesc. De aceea, un artist cu experiență îți va spune uneori că desenul trebuie mărit sau simplificat.",
    "Ghidul explică ce determină mărimea potrivită, cum se raportează detaliile la dimensiune, ce mărimi se recomandă orientativ pentru diferite tipuri de desene, cum alegi mărimea în funcție de zonă, cum testezi acasă înainte de ședință și ce legătură are mărimea cu prețul, cu durerea și cu numărul de ședințe. Valorile sunt orientative, iar recomandarea finală o dă artistul care vede desenul și zona.",
  ],
  sections: [
    {
      id: "ce-determina-marimea",
      h2: "Ce determină mărimea potrivită",
      blocks: [
        "Nu există o mărime universal bună. Mărimea potrivită rezultă din combinarea mai multor factori, iar ignorarea oricăruia dintre ei duce, de obicei, la probleme.",
        {
          table: {
            head: ["Factor", "De ce contează", "Exemplu"],
            rows: [
              ["Nivelul de detaliu", "Cu cât sunt mai multe detalii, cu atât ai nevoie de mai mult spațiu ca să rămână distincte", "Un portret cu detalii fine cere mult mai mult spațiu decât un simbol simplu"],
              ["Stilul", "Fiecare stil are cerințe diferite: liniile fine și umbrele cer mai mult spațiu decât liniile groase", "Fine line mic poate funcționa; realismul cere dimensiune"],
              ["Zona corpului", "Forma, mobilitatea și grosimea pielii influențează cum arată și cum rămâne desenul", "Un tatuaj pe deget este mai greu de menținut decât unul pe coapsă"],
              ["Cum îmbătrânește cerneala", "Cerneala se estompează și se răspândește ușor în timp, iar detaliile apropiate se pot contopi", "Liniile paralele foarte apropiate pot deveni o pată"],
              ["Vizibilitatea dorită", "Cât de mult vrei să se vadă tatuajul", "Un tatuaj discret poate fi aproape invizibil în haine"],
              ["Bugetul și timpul", "Mărimea influențează direct durata lucrului și deci prețul", "O piesă mai mare înseamnă mai multe ore"],
            ],
          },
        },
        "Cheia este echilibrul: mărimea trebuie să fie destul de mare ca detaliile să rămână lizibile ani la rând și destul de mică ca să se potrivească zonei, bugetului și gustului tău. Un artist bun te ajută să găsești acest echilibru.",
      ],
    },
    {
      id: "detaliu-si-spatiu",
      h2: "Regula de bază: detaliu înseamnă spațiu",
      blocks: [
        "Dacă ar fi o singură regulă de reținut, ar fi aceasta: cu cât desenul are mai multe detalii, cu atât are nevoie de mai mult spațiu. Detaliile nu pot fi micșorate la nesfârșit, pentru că pielea nu este hârtie.",
        { h3: "De ce nu putem micșora la infinit" },
        "Acul lasă o urmă cu o grosime minimă. Pielea mișcă și răspândește ușor cerneala în straturile din jur, în luni și ani. Două linii foarte apropiate se pot uni, un spațiu mic între două forme se poate umple, iar un detaliu foarte fin poate dispărea. Cu cât desenul este mai mic, cu atât aceste efecte se văd mai tare.",
        { h3: "Spațiul dintre linii" },
        "Un principiu util: lasă între liniile și formele desenului un spațiu suficient de mare încât să rămână vizibil și după ani. Artistul cunoaște acest minim pentru fiecare stil și zonă și va ajusta desenul. Dacă îți spune că două elemente trebuie depărtate sau că un detaliu trebuie eliminat, ascultă: este vorba despre cum va arăta tatuajul peste cinci sau zece ani.",
        { h3: "Cum se leagă detaliul de mărime" },
        {
          ul: [
            "Detalii foarte mici (de exemplu ochi, litere mărunte, texturi fine) cer o dimensiune suficientă ca să rămână clare.",
            "Zonele cu umbre și degrade au nevoie de suprafață, pentru ca trecerea de la deschis la închis să fie lină.",
            "Elementele multiple într-un desen mic se înghesuie. Mai bine mai puține elemente, mai bine definite.",
            "Spațiul gol este și el parte din desen: lasă pielea să respire și face ca detaliile să se vadă.",
          ],
        },
        "Dacă îți dorești un desen cu multe detalii, dar într-un format mic, discută cu artistul despre simplificare. Adesea, un desen redus la esență arată mai bine, mai clar și mai durabil decât unul înghesuit.",
      ],
    },
    {
      id: "marimi-orientative",
      h2: "Mărimi orientative pentru tipuri de desene",
      blocks: [
        "Tabelul de mai jos oferă ordine de mărime folosite frecvent în practică. Sunt valori orientative, nu reguli. Recomandarea finală depinde de desenul concret, de stil, de zonă și de artist.",
        {
          table: {
            head: ["Tipul desenului", "Mărime minimă orientativă", "Observații"],
            rows: [
              ["Simbol simplu (linie groasă, formă simplă)", "Aproximativ 2 până la 4 cm", "Cel mai tolerant la mărime mică"],
              ["Text scurt, scris de mână sau în font simplu", "Înălțimea literelor de aproximativ 1 cm sau mai mult", "Literele foarte mici, cu spații mici, se lipesc în timp"],
              ["Text lung sau cu font elaborat", "Înălțimea literelor de 1,5 cm sau mai mult", "Fonturile cu detalii fine cer mai mult spațiu"],
              ["Floare sau element natural în fine line", "Aproximativ 6 până la 10 cm", "Cu cât mai multe petale sau frunze, cu atât mai mare"],
              ["Animal sau obiect în linii cu umbre", "Aproximativ 10 până la 15 cm", "Umbrele cer suprafață"],
              ["Portret realist", "Aproximativ 12 până la 20 cm sau mai mult", "Ochii, buzele și pielea cer detaliu; un portret mic se pierde"],
              ["Peisaj sau scenă cu mai multe elemente", "Aproximativ 15 cm sau mai mult", "Elementele multiple cer spațiu"],
              ["Piesă ornamentală sau geometrică cu linii paralele fine", "În funcție de densitatea liniilor", "Distanța dintre linii contează cel mai mult"],
              ["Mânecă, spate, piept", "Zona întreagă, pe mai multe ședințe", "Se proiectează în funcție de corp"],
            ],
          },
        },
        {
          note: "Valorile sunt orientative. Un artist cu experiență poate face un detaliu fin să funcționeze la o mărime mai mică decât cea din tabel, sau îți poate cere mai mult spațiu. Ia întotdeauna în calcul recomandarea lui pentru desenul tău.",
          title: "Nu sunt reguli fixe",
        },
        { h3: "Ce înseamnă o mărime în viața reală" },
        "Pentru a-ți face o idee, 1 cm este aproximativ lățimea unui deget mic de la mână, 2,5 cm este aproape cât o monedă de 50 de bani mai mare sau cât un deget mare, 5 cm este cât lățimea a patru degete apropiate puse una lângă alta, iar o palmă adultă măsoară de obicei între 8 și 10 cm în lățime. Poți folosi aceste repere pentru a vizualiza, dar măsoară mereu cu o riglă pe corpul tău.",
      ],
    },
    {
      id: "marimea-pe-zone",
      h2: "Mărimea în funcție de zona corpului",
      blocks: [
        "Aceeași mărime arată diferit pe zone diferite. O piesă de 10 cm pare mare pe încheietura mâinii și mică pe spate. Zona determină și cât de mare poate fi un desen, și cât de mare ar trebui să fie.",
        {
          table: {
            head: ["Zona", "Caracteristici", "Mărimi frecvente"],
            rows: [
              ["Încheietură, deget, gleznă", "Zone mici, curbe, piele subțire, mobilitate mare", "Piese mici, simple; detaliile fine sunt riscante"],
              ["Antebraț", "Suprafață alungită, relativ stabilă, vizibilă", "De la piese mici la piese lungi de 15 până la 25 cm"],
              ["Braț (partea superioară)", "Suprafață mai groasă și mai stabilă", "Piese medii până la mari, mâneci"],
              ["Umăr, omoplat", "Suprafață rotunjită, mai ușor de acoperit", "Piese medii până la mari"],
              ["Piept, spate", "Suprafețe mari, plane, potrivite pentru lucrări complexe", "Piese mari, backpiece"],
              ["Coaste", "Piele subțire, mișcare la respirație, sensibilă", "Piese alungite, pe verticală"],
              ["Coapsă", "Suprafață mare, groasă, stabilă", "Piese medii până la foarte mari"],
              ["Gambă", "Suprafață alungită, cu mușchi și os", "Piese alungite, medii până la mari"],
              ["Ceafă, gât", "Zonă vizibilă, mobilă, delicată", "Piese mici până la medii, atenție la detalii"],
            ],
          },
        },
        { h3: "Cum se integrează desenul în formă" },
        "Un desen bun urmează forma corpului. Pe un braț, un desen vertical se așază natural, unul orizontal se curbează odată cu brațul. Pe spate, un desen simetric stă bine pe linia coloanei. Artistul proiectează desenul pentru zona ta, nu îl lipește pur și simplu. De aceea, zona și mărimea se aleg împreună, nu separat.",
        { h3: "Zonele mici și provocările lor" },
        "Degetele, încheietura, urechea, gâtul și laturile mâinii sunt zone în care mărimea este limitată de anatomie, iar pielea se mișcă și se subțiază. Tatuajele de acolo cer desene simple, linii mai groase și, adesea, retușuri. Pentru detalii, vezi ghidul despre [retușul tatuajului](/ghiduri/retusul-tatuajului-cand-e-necesar).",
        "Dacă vrei un desen cu multe detalii și zona aleasă este mică, ia în calcul schimbarea zonei, nu doar micșorarea desenului. Spune artistului ce vrei să obții, iar el îți poate propune un loc mai potrivit.",
      ],
    },
    {
      id: "cum-testezi",
      h2: "Cum testezi mărimea înainte de ședință",
      blocks: [
        "Nu trebuie să ghicești. Există câteva metode simple de a vedea cum arată un desen la o anumită mărime, direct pe corpul tău, înainte de a face ceva ireversibil.",
        { h3: "Metoda hârtiei" },
        {
          ol: [
            "Găsește sau fă desenul în formă simplificată și tipărește-l la mai multe mărimi, de exemplu 5, 8 și 12 cm.",
            "Decupează-le și lipește-le cu o bandă adezivă pe zona dorită.",
            "Privește-le în oglindă, din față, din lateral și în mișcare.",
            "Lasă-le câteva zile, ca să vezi cum te simți cu ele. Cum arată cu haine diferite? Vrei să se vadă? Te deranjează?",
          ],
        },
        { h3: "Metoda markerului" },
        "Cu un marker cosmetic sau cu un creion dermatograf, poți trasa conturul desenului pe piele. Este ușor de șters și îți arată proporția reală. Nu folosi markere permanente de birou pe piele.",
        { h3: "Metoda stencilului" },
        "În ziua ședinței, artistul aplică un stencil, adică un model transferat pe piele. Este ultima ocazie de a verifica mărimea și poziția. Privește-l în oglindă, ridică brațul, mișcă-te, cere să fie mutat sau mărit dacă nu ești mulțumit. Nu ezita: modificarea unui stencil durează câteva minute, iar modificarea unui tatuaj nu este posibilă.",
        { h3: "Sfaturi pentru test" },
        {
          ul: [
            "Testează în condiții obișnuite, în care îți duci viața, nu doar în fața oglinzii.",
            "Întreabă prieteni sau pe cineva de încredere ce părere are, dar decizia îți aparține.",
            "Dacă tot nu ești sigur, alege varianta puțin mai mare: un detaliu mai mare este mai clar și mai durabil.",
            "Nu decide pe loc. O zi sau două de gândire nu strică.",
          ],
        },
        "Dacă vrei să vezi mai multe despre cum se pregătește ședința, vezi ghidul despre [cum te pregătești pentru ședința de tatuaj](/ghiduri/cum-te-pregatesti-pentru-sedinta-de-tatuaj).",
      ],
    },
    {
      id: "cum-imbatranesc-detaliile",
      h2: "Cum îmbătrânesc detaliile la mărimi diferite",
      blocks: [
        "Un tatuaj nu arată la fel peste un an și peste zece ani. Cerneala se estompează și se răspândește ușor, pielea își schimbă textura, iar expunerea la soare adaugă un strat în plus. Mărimea decide cât de mult din desen rămâne clar după acești ani.",
        {
          table: {
            head: ["Element", "Mărime mică", "Mărime potrivită"],
            rows: [
              ["Linie fină, izolată", "Se subțiază și se poate întrerupe; contrastul scade vizibil", "Rămâne clară, cu o ușoară înmuiere"],
              ["Două linii paralele apropiate", "Se pot uni într-o singură linie groasă sau într-o pată", "Spațiul dintre ele rămâne vizibil"],
              ["Text mărunt", "Literele se lipesc, mai ales cele cu bucle sau cu spații mici", "Literele rămân lizibile"],
              ["Umbră sau degrade", "Trecerea se pierde, iar zona devine o pată gri sau neagră", "Degradeul rămâne fin și are profunzime"],
              ["Ochi sau detalii în portret", "Se tociesc, iar expresia se pierde", "Expresia și privirea se păstrează"],
              ["Puncte (dotwork)", "Punctele apropiate se contopesc", "Punctele rămân separate și vizibile"],
            ],
          },
        },
        { h3: "Ce se întâmplă în primii ani" },
        "În primul an, tatuajul se stabilizează și își găsește aspectul final. În următorii ani, schimbările sunt lente: contrastul scade ușor, liniile se înmoaie, iar culorile deschise se pierd cel mai repede. La o mărime potrivită, aceste schimbări sunt abia sesizabile. La o mărime prea mică, desenul poate deveni neclar.",
        { h3: "Rolul soarelui și al pielii" },
        "Pielea expusă la soare se estompează mai repede, iar pielea care își modifică forma (prin greutate, sarcină sau vârstă) deformează desenul. Un tatuaj pe o zonă expusă sau mobilă este mai sensibil la mărime: o piesă mică se vede mai tare afectată. Detalii despre protecție în ghidul despre [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina).",
        { h3: "Ce spun artiștii" },
        "Mulți artiști spun, în practică, același lucru: un tatuaj puțin mai mare și mai simplu îmbătrânește mai frumos decât unul mic și foarte detaliat. De aceea ți se poate propune să mărești desenul sau să renunți la un detaliu. Nu este o dorință de a lucra mai mult, ci o grijă pentru felul în care va arăta peste ani.",
      ],
    },
    {
      id: "exemple-concrete",
      h2: "Exemple concrete: același desen, trei mărimi",
      blocks: [
        "Pentru a înțelege mai bine, imaginează-ți aceeași idee, realizată la trei mărimi diferite. Exemplele sunt ilustrative și nu înlocuiesc recomandarea artistului.",
        { h3: "Exemplul 1: un trandafir în fine line" },
        {
          ul: [
            "La 3 cm: forma generală se vede, dar petalele sunt doar sugerate; după câțiva ani, liniile apropiate din interior se pot contopi.",
            "La 7 cm: petalele sunt distincte, iar desenul rămâne clar; este o mărime frecvent aleasă.",
            "La 12 cm: apar detalii de umbră și de textură, iar trandafirul devine o lucrare de sine stătătoare, cu mai mult impact.",
          ],
        },
        { h3: "Exemplul 2: o propoziție scurtă, în scris de mână" },
        {
          ul: [
            "Cu litere de 0,5 cm înălțime: foarte discret, dar literele se pot lipi în timp, iar bucla unei litere se poate umple.",
            "Cu litere de 1 cm înălțime: lizibil și relativ discret, o alegere des întâlnită.",
            "Cu litere de 2 cm înălțime: foarte clar, cu impact, potrivit pentru zone mai mari.",
          ],
        },
        { h3: "Exemplul 3: un portret realist" },
        {
          ul: [
            "La 8 cm: trăsăturile se simplifică, ochii și buzele pierd detalii, iar rezultatul poate dezamăgi.",
            "La 15 cm: expresia se păstrează și detaliile se văd bine.",
            "La 25 cm sau mai mult: lucrare cu profunzime, cu umbre fine, care își păstrează calitatea ani la rând.",
          ],
        },
        "Observă că „mai mare” nu înseamnă automat „mai bine”. Fiecare desen are o mărime la care funcționează cel mai bine. Căutarea acelei mărimi, împreună cu artistul, este exact scopul discuției de dinaintea ședinței.",
      ],
    },
    {
      id: "spatiul-gol-si-compozitia",
      h2: "Spațiul gol, compoziția și tatuajele multiple",
      blocks: [
        "Mărimea unui tatuaj nu se judecă doar în sine, ci și în raport cu zona din jur. Spațiul gol, adică pielea netatuată din jurul desenului, contează la fel de mult ca desenul.",
        { h3: "Lasă pielea să respire" },
        "Un desen înghesuit, care ajunge aproape de marginile zonei sau de alte tatuaje, arată plin și neelegant. Un desen cu spațiu în jur pare mai clar și mai bine așezat. Artistul poate recomanda o mărime puțin mai mică sau o poziție ușor diferită pentru a obține acest echilibru.",
        { h3: "Dacă ai deja tatuaje" },
        "Un tatuaj nou trebuie să țină cont de cele existente. Poate fi la o distanță care le lasă să respire, poate fi integrat într-un ansamblu sau poate continua o linie. Arată artistului zona și tatuajele existente și spune dacă vrei o piesă de sine stătătoare sau una care se leagă. Dacă vrei să acoperi un tatuaj vechi, citește despre [cover-up](/cover-up-tatuaje-bucuresti).",
        { h3: "Mai multe piese mici" },
        "Unii aleg mai multe tatuaje mici, răspândite pe corp sau grupate. Funcționează frumos dacă au o logică comună (stil, grosime a liniei, temă), dar pot arăta încărcat dacă nu sunt gândite împreună. Dacă vrei să construiești treptat, spune-i artistului planul, chiar dacă faci doar prima piesă acum. Poate sugera o colaborare între mărimi, poziții și stiluri.",
        { h3: "Un plan pentru viitor" },
        "Dacă te gândești că vei dori, mai târziu, să extinzi un tatuaj, de exemplu într-o mânecă, alege acum o mărime și o poziție care lasă loc. Un tatuaj așezat fără să te gândești la extindere poate bloca, mai târziu, o compoziție frumoasă. Pentru o privire pe lucrări mari, vezi paginile despre [mâneci](/stiluri/maneci) și [portrete](/stiluri/portrete).",
      ],
    },
    {
      id: "mic-sau-mare",
      h2: "Mic sau mare: avantaje și riscuri",
      blocks: [
        "Nu există o mărime „corectă”. Fiecare opțiune are avantaje și riscuri, iar alegerea depinde de ce îți dorești.",
        {
          table: {
            head: ["", "Tatuaj mic", "Tatuaj mare"],
            rows: [
              ["Avantaje", "Discret, rapid, mai ieftin, durere scurtă, ușor de ascuns", "Detalii clare, impact vizual, durabilitate mai bună a detaliilor, posibilitatea unei lucrări complexe"],
              ["Riscuri", "Detaliile se pot pierde în timp; estompare mai vizibilă; mai puțin spațiu pentru erori", "Cost mai mare, mai multe ore, posibil mai multe ședințe, durere cumulată, mai greu de ascuns"],
              ["Potrivit pentru", "Simboluri simple, text scurt, ornamente minimale", "Portrete, scene, piese complexe, lucrări color"],
              ["Retuș", "Probabilitate mai mare la detalii fine", "Retuș ocazional pentru uniformizare"],
              ["Regret", "Poate apărea sentimentul că era prea mic", "Poate apărea sentimentul că era prea mare sau prea vizibil"],
            ],
          },
        },
        { h3: "Greșeala frecventă: prea mic" },
        "Cea mai frecventă greșeală este alegerea unei mărimi prea mici, din dorința de a fi discret sau de a evita durerea. Rezultatul: detalii care se pierd, o lucrare care nu mai arată ce ar fi trebuit și, uneori, nevoia de a o refaci sau de a o acoperi. Pentru acoperirea unui tatuaj vechi, vezi [cover-up tatuaje](/cover-up-tatuaje-bucuresti).",
        { h3: "Greșeala opusă: prea mare" },
        "Un tatuaj prea mare pentru zona aleasă poate arăta înghesuit sau disproporționat. Poate cere mai multe ședințe decât ai plănuit și un buget mai mare. Dacă te simți copleșit de mărime, discută cu artistul despre o variantă mai simplă sau despre o realizare în etape.",
        { h3: "Cum alegi, dacă ești la mijloc" },
        "Dacă ești indecis, alege mărimea la care detaliile desenului rămân clare, conform recomandării artistului. Este cea mai sigură cale: un tatuaj puțin mai mare decât minimul rămâne frumos mai mult timp decât unul exact la limită.",
      ],
    },
    {
      id: "marime-pret-durere",
      h2: "Mărimea, prețul, durata și durerea",
      blocks: [
        "Mărimea nu influențează doar aspectul, ci și costul, timpul și senzațiile din ședință. Merită să le iei în calcul înainte să decizi.",
        { h3: "Prețul" },
        "La tatuaje, prețul se calculează în funcție de timpul de lucru, deci mărimea, detaliul și zona contribuie direct la cost. O piesă dublă ca suprafață poate cere mai mult decât dublul timpului, dacă are și mai multe detalii. O estimare exactă se dă după ce artistul vede desenul și zona. Pentru informații despre cum se calculează prețurile la studio, vezi pagina de [prețuri](/preturi).",
        { h3: "Durata" },
        "Un tatuaj mic poate dura sub o oră, unul mediu câteva ore, iar unul mare mai multe ședințe. Lucrările mari se împart pe ședințe, pentru că atât corpul, cât și concentrarea au limite. Un artist responsabil îți spune cât se estimează și ce se poate face într-o singură zi.",
        { h3: "Durerea" },
        "Durerea depinde mai mult de zonă decât de mărime, dar o ședință lungă se simte mai greu: oboseala se acumulează, iar pielea devine mai sensibilă pe parcurs. Pentru o privire orientativă pe zone, vezi [harta durerii](/ghiduri/harta-durerii). Dacă ți-e teamă de durere, o piesă mai mică, făcută în mai multe ședințe, poate fi mai suportabilă decât una lungă, într-o singură zi.",
        { h3: "Vindecarea" },
        "O suprafață mai mare înseamnă o rană mai mare, deci o perioadă de vindecare mai atentă. La lucrările mari, planifică ședințele astfel încât pielea să se vindece complet între ele și ține cont de programul tău: sport, vacanțe, evenimente. Vezi ghidurile despre [tatuaj și sport](/ghiduri/tatuajul-si-sportul) și [tatuaj vara](/ghiduri/tatuaj-vara-soare-plaja-piscina).",
      ],
    },
    {
      id: "lucrari-in-mai-multe-sedinte",
      h2: "Lucrările mari, făcute în mai multe ședințe",
      blocks: [
        "Când un desen este prea mare ca să se facă într-o singură zi, se împarte pe ședințe. Aceasta nu este un inconvenient, ci o practică obișnuită care protejează pielea și calitatea.",
        { h3: "De ce se împart" },
        {
          ul: [
            "Pielea se irită pe parcursul ședinței și poate să nu mai primească bine cerneala după multe ore.",
            "Tu obosești, iar concentrarea și toleranța la durere scad.",
            "Artistul lucrează mai bine când nu este obosit.",
            "Vindecarea între ședințe permite evaluarea rezultatului și ajustări.",
          ],
        },
        { h3: "Cum se planifică" },
        "De obicei, se lucrează întâi conturul și structura, apoi umbrele sau culoarea, în ședințe ulterioare, cu pauze pentru vindecare. Intervalul dintre ședințe depinde de zonă și de piele, adesea de câteva săptămâni. Artistul stabilește planul împreună cu tine, iar tu poți ajusta în funcție de agenda ta.",
        { h3: "Tatuajul care crește în timp" },
        "Poți începe cu o piesă mai mică, care face parte dintr-un plan mai mare, de exemplu o mânecă. Spune artistului de la început care este ideea de ansamblu, chiar dacă faci acum doar prima parte, ca să proiecteze desenul cu spațiu pentru extindere. Pentru mai multe despre stiluri de lucrări mari, vezi paginile despre [mâneci](/stiluri/maneci) și [backpiece](/stiluri/backpiece).",
      ],
    },
    {
      id: "greseli-frecvente",
      h2: "Greșeli frecvente",
      blocks: [
        {
          ul: [
            "Alegerea mărimii după preț sau după frica de durere, nu după desen.",
            "Micșorarea unui desen detaliat fără să-i simplifici detaliile.",
            "Alegerea unei mărimi „discrete” pentru un portret sau o scenă complexă.",
            "Neverificarea mărimii pe corp, înainte de ședință.",
            "Acceptarea stencilului din prima, fără să te uiți în oglindă din mai multe poziții.",
            "Ignorarea sfatului artistului de a mări sau de a simplifica desenul.",
            "Alegerea unei zone prea mici pentru desenul dorit.",
            "Neluarea în calcul a felului în care corpul se schimbă în timp.",
          ],
        },
        "Dacă ai dubii, mai bine întrebi decât regreți. Mai multe despre cum îți explici ideea găsești în ghidul despre [cum îi explici ideea unui tatuator](/ghiduri/cum-ii-explici-ideea-unui-tatuator).",
      ],
    },
    {
      id: "intrebari-pentru-artist",
      h2: "Ce întrebi artistul despre mărime",
      blocks: [
        "Mărimea se stabilește în doi: tu știi ce vrei să vezi, artistul știe ce poate funcționa pe piele. O conversație scurtă, cu întrebările potrivite, evită dezamăgirile.",
        {
          ol: [
            "Cât de mic poate fi desenul meu, fără să piardă din detalii după vindecare și după ani?",
            "Ce elemente ar trebui simplificate dacă îl fac mai mic?",
            "Cât timp de lucru estimezi pentru mărimea aceasta și câte ședințe sunt necesare?",
            "Cum se potrivește mărimea cu forma zonei: se vede din față, din lateral, în mișcare?",
            "Dacă vreau să îl extind mai târziu, trebuie să planificăm de acum spațiul?",
          ],
        },
        { h3: "Cere o previzualizare pe piele" },
        "Un stencil pus pe zonă și privit în oglindă este cel mai bun test. Privește-l din față, din lateral, stând în picioare și în mișcare. Dacă ți se pare prea mic sau prea mare, spune-o înainte de începerea lucrului. Ajustarea unui stencil durează câteva minute, iar corectarea unui tatuaj deja făcut este mult mai grea.",
        { h3: "Nu compara cu pozele de pe telefon" },
        "Imaginile de pe ecran nu au scară. Un desen care pare impunător pe telefon poate avea câțiva centimetri pe piele. Cere artistului dimensiunea exactă în centimetri și pune-o pe corp: măsoară cu o riglă sau decupează o hârtie de mărimea respectivă și ține-o pe zonă.",
        { h3: "Mărime și buget" },
        "Prețul se leagă de timpul de lucru, deci de mărime și de detaliu. Dacă bugetul este limitat, discută cu artistul ce se poate simplifica sau ce se poate face în etape, în loc să micșorezi desenul până la pierderea lizibilității. Vezi [prețurile](/preturi) pentru principiul de calcul al studioului.",
      ],
    },
  ],
  faq: [
    {
      q: "Care este cea mai mică mărime la care se poate face un tatuaj?",
      a: "Depinde de desen. Un simbol simplu, în linii groase, poate fi de câțiva centimetri, în timp ce un desen cu detalii fine cere mai mult. Artistul îți spune dacă detaliile rămân clare la mărimea dorită.",
    },
    {
      q: "De ce îmi spune artistul că desenul trebuie mărit?",
      a: "Pentru că cerneala se răspândește ușor în piele în timp, iar detaliile prea apropiate se contopesc. Mărirea sau simplificarea desenului îl face să arate bine mai mulți ani.",
    },
    {
      q: "Pot face un portret mic?",
      a: "Poți, dar riști ca ochii, buzele și pielea să-și piardă detaliile. Portretele realiste cer, în general, o dimensiune de cel puțin 12 până la 20 cm. Artistul îți spune ce este realist pentru fotografia ta.",
    },
    {
      q: "Cum aleg mărimea unui text?",
      a: "Înălțimea literelor și spațiile dintre ele contează. Literele foarte mici se pot lipi în timp. Un artist îți poate propune un font și o mărime care rămân lizibile. Cere să vezi un stencil cu textul exact.",
    },
    {
      q: "Mărimea influențează prețul?",
      a: "Da. La tatuaje, prețul depinde de timpul de lucru, iar o piesă mai mare sau mai detaliată cere mai mult timp. O estimare exactă se dă după ce artistul vede desenul și zona.",
    },
    {
      q: "Cum văd cum arată tatuajul înainte să-l fac?",
      a: "Tipărește desenul la mai multe mărimi și lipește-l pe zonă cu o bandă, sau trasează conturul cu un marker cosmetic. În ziua ședinței, verifică stencilul în oglindă, din mai multe poziții.",
    },
    {
      q: "Mai bine mic sau mare, dacă nu sunt sigur?",
      a: "Mai sigur este varianta la care detaliile rămân clare, conform recomandării artistului. Un tatuaj puțin mai mare decât minimul rămâne frumos mai mult timp decât unul exact la limită.",
    },
    {
      q: "Pot face un tatuaj mare în mai multe ședințe?",
      a: "Da, este o practică obișnuită. Pielea și corpul au limite, iar vindecarea între ședințe permite un rezultat mai bun. Artistul propune un plan, iar tu îl poți adapta agendei tale.",
    },
    {
      q: "Zona influențează mărimea?",
      a: "Da. Zonele mici și mobile, cum sunt degetele sau încheietura, limitează detaliile, iar zonele mari și stabile, cum sunt spatele sau coapsa, permit lucrări complexe. Zona și mărimea se aleg împreună.",
    },
    {
      q: "Cum cer o estimare de mărime și preț la Hasha Tattoo?",
      a: "Scrie-ne pe WhatsApp la +40 766 422 219, cu ideea, zona și o fotografie a locului. Un artist îți spune ce mărime recomandă și îți dă o estimare orientativă.",
    },
    {
      q: "Cum aflu cât de mare e un desen în centimetri?",
      a: "Cere artistului dimensiunea exactă și verifică-o pe corp cu o riglă sau cu o hârtie decupată la mărimea respectivă. Imaginile de pe ecran nu au scară și pot induce în eroare.",
    },
  ],
  cta: {
    title: ["Nu știi ce mărime", "se potrivește?"],
    text: "Trimite-ne desenul sau referințele și zona. Îți spunem ce mărime recomandăm pentru ca detaliile să rămână clare ani la rând.",
    wa: "Bună! Vreau să aflu ce mărime se potrivește unui tatuaj la Hasha Tattoo. Vă trimit ideea și zona.",
  },
  related: ["cum-ii-explici-ideea-unui-tatuator", "primul-tau-tatuaj", "retusul-tatuajului-cand-e-necesar"],
};

export default content;
