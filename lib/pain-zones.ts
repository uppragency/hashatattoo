export type PainZone = {
  id: string;
  name: string;
  /** 1 (foarte suportabil) până la 10 (foarte intens). Orientativ. */
  level: number;
  feel: string;
  tip: string;
};

export const painLabel = (l: number) => (l <= 3 ? "Suportabil" : l <= 5 ? "Moderat" : l <= 7 ? "Intens" : "Foarte intens");

export const painZones: PainZone[] = [
  { id: "brat-exterior", name: "Braț, partea exterioară", level: 2, feel: "Mușchi și piele relativ groasă, ușor de poziționat. Una dintre cele mai suportabile zone.", tip: "Alegere frecventă pentru un prim tatuaj." },
  { id: "umar", name: "Umăr", level: 3, feel: "Mușchi și piele mai groasă, ușor de ținut nemișcat. De obicei suportabil.", tip: "Bun pentru lucrări de dimensiune medie sau mare." },
  { id: "antebrat", name: "Antebraț", level: 3, feel: "Piele relativ groasă pe partea exterioară, mai sensibilă pe interior, spre încheietură.", tip: "Brațul se sprijină comod pe masă, deci ședințele lungi se suportă mai ușor." },
  { id: "coapsa", name: "Coapsă (față, exterior, spate)", level: 3, feel: "Mușchi mare și piele groasă, în special pe față și pe exterior. De obicei suportabil.", tip: "Potrivită pentru lucrări mari, cu ședințe lungi." },
  { id: "gamba", name: "Gambă (spate)", level: 3, feel: "Mușchi gros, mai ales în partea de mijloc, deci în general suportabil.", tip: "Poziția întins pe burtă este, de obicei, comodă." },
  { id: "spate-sus", name: "Spate, partea de sus", level: 3, feel: "Suprafață mare și relativ plană, cu piele destul de groasă. Bună pentru lucrări ample.", tip: "Respiră regulat și relaxează umerii." },
  { id: "fese", name: "Fese", level: 3, feel: "Țesut gros, de obicei suportabil. Poziția pe parcursul ședinței poate fi incomodă.", tip: "Spune când ai nevoie de o pauză pentru a te muta." },
  { id: "omoplat", name: "Omoplat", level: 4, feel: "Osul se simte aproape de suprafață, dar pielea este mai groasă. În general suportabil.", tip: "Un tatuaj mare pe spate se lucrează, de obicei, în mai multe ședințe." },
  { id: "spate-jos", name: "Spate, partea de jos", level: 4, feel: "Mușchi și piele destul de groasă, cu senzație mai ascuțită lângă coloană.", tip: "Postura contează: ține spatele relaxat." },
  { id: "piept", name: "Piept", level: 5, feel: "Mușchi la mijloc, piele mai sensibilă spre stern și subsuoară. Respirația mișcă zona.", tip: "Respiră lent și anunță înainte să te muți." },
  { id: "abdomen", name: "Abdomen", level: 5, feel: "Variază mult de la o persoană la alta. Este mai sensibil lângă coaste și lângă linia de mijloc.", tip: "Mănâncă înainte de ședință și evită hainele strânse în talie." },
  { id: "brat-interior", name: "Braț, partea interioară", level: 5, feel: "Pielea este mai subțire și mai sensibilă. Senzația crește spre cot și subsuoară.", tip: "Spune artistului dacă ai nevoie de o pauză." },
  { id: "ceafa", name: "Ceafă", level: 5, feel: "Piele subțire, aproape de coloană. Vibrația se simte mai puternic.", tip: "Poziția șezut, cu fruntea sprijinită, ajută." },
  { id: "incheietura", name: "Încheietură", level: 5, feel: "Piele subțire, tendoane și oase aproape de suprafață. Zona se mișcă mult în viața de zi cu zi.", tip: "Evită brățările și ceasul pe perioada vindecării." },
  { id: "gat", name: "Gât", level: 6, feel: "Piele subțire și mobilă, care se mișcă la respirație și la înghițit.", tip: "Spune când ai nevoie să înghiți sau să-ți miști capul, ca să nu se strice linia." },
  { id: "mana", name: "Mână și degete", level: 6, feel: "Piele subțire, oase aproape de suprafață și multe terminații nervoase.", tip: "Mâna este folosită constant, iar tatuajele de acolo se pot estompa mai repede și pot cere retuș." },
  { id: "coapsa-interior", name: "Coapsă, partea interioară", level: 6, feel: "Piele subțire și sensibilă, mai ales spre partea de sus a piciorului.", tip: "Poziția relaxată a picioarelor reduce tensiunea." },
  { id: "cot", name: "Cot", level: 6, feel: "Osul este aproape de suprafață, iar pielea se pliază la fiecare mișcare. Interiorul cotului este mai sensibil decât exteriorul.", tip: "Ține brațul nemișcat și cere pauze atunci când te înțepenești." },
  { id: "tibie", name: "Tibie", level: 6, feel: "Osul este chiar sub piele, deci vibrația se simte intens.", tip: "Respirație lentă și pauze scurte." },
  { id: "cap", name: "Cap și față", level: 7, feel: "Piele subțire, aproape de os. Vibrația se simte în craniu și poate fi neobișnuită.", tip: "Ședințe scurte și pauze dese. Discută cu artistul despre îngrijirea zonei." },
  { id: "stern", name: "Stern", level: 7, feel: "Osul este chiar sub piele, iar vibrația se simte puternic în piept.", tip: "Respirație lentă, pauze scurte." },
  { id: "coloana", name: "Coloană vertebrală", level: 7, feel: "Vibrația se simte în os și în tot corpul. Senzația poate iradia în lateral.", tip: "Ținută relaxată, respirație lentă și pauze la nevoie." },
  { id: "genunchi", name: "Genunchi", level: 7, feel: "Os la suprafață și piele care se pliază. Partea din spate (plica) este foarte sensibilă.", tip: "Genunchiul sprijinit și anunț înainte de mișcare." },
  { id: "glezna", name: "Gleznă", level: 7, feel: "Piele subțire, oase și tendoane la suprafață.", tip: "Poartă încălțăminte largă în perioada vindecării." },
  { id: "picior", name: "Laba piciorului", level: 7, feel: "Multe terminații nervoase, puțină carne, iar încălțămintea freacă zona.", tip: "Evită încălțămintea strâmtă în vindecare. Pe picior, tatuajele se pot estompa mai repede." },
  { id: "coaste", name: "Coaste", level: 8, feel: "Piele subțire, direct peste os, iar zona se mișcă la fiecare respirație. Este considerată una dintre cele mai dificile.", tip: "Expiră lent când artistul lucrează liniile, mănâncă bine înainte și cere pauze." },
  { id: "subsuoara", name: "Subsuoară", level: 8, feel: "Piele foarte subțire și nervi aproape de suprafață. Frecarea și transpirația complică îngrijirea.", tip: "Discută cu artistul înainte, pentru că zona are cerințe speciale de îngrijire." },
];

export const painById = (id: string) => painZones.find((z) => z.id === id)!;
