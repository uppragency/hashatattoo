export type PriceRow = { name: string; price: number; note?: string };

/** Preturi piercing in lei, dupa pagina de preturi a studioului. */
export const PIERCING_PRICES: PriceRow[] = [
  { name: "Lob ureche", price: 80 },
  { name: "Cartilaj", price: 150 },
  { name: "Industrial", price: 150 },
  { name: "Buric", price: 150 },
  { name: "Nas", price: 150 },
  { name: "Septum", price: 150 },
  { name: "Buză", price: 150 },
  { name: "Sprânceană", price: 150 },
  { name: "Smiley", price: 150 },
  { name: "Intim", price: 200, note: "Bijuteria inclusă" },
  { name: "Dermal", price: 250, note: "Bijuteria inclusă" },
];

export const PIERCING_EXTRAS: PriceRow[] = [
  { name: "Schimbare piercing intim", price: 60 },
  { name: "Manoperă", price: 30, note: "Schimbare, remontare, verificare, curățare" },
];

export const TATTOO_PRICE_FACTORS = [
  "Complexitatea designului",
  "Dimensiunea lucrării",
  "Zona corpului",
  "Color sau monocrom",
  "Detaliile designului",
  "Experiența artistului",
];

export const lei = (n: number) => `${n} lei`;
