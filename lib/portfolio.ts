export type Category = "all" | "tattoo" | "piercing";
export type PortfolioItem = readonly [file: string, title: string, category: "tattoo" | "piercing", alt: string];

export const items: readonly PortfolioItem[] = [
  ["lucrare-5.webp", "Black & grey / Backpiece", "tattoo", "Tatuaj black and grey amplu pe spate"],
  ["pierce-3.webp", "Industrial / Ear piercing", "piercing", "Piercing industrial și bijuterii în ureche"],
  ["lucrare-3.webp", "Realism / Piept", "tattoo", "Tatuaj realist pe piept"],
  ["lucrare-11.webp", "Portret / Realism", "tattoo", "Tatuaj portret realist pe braț"],
  ["pierce-6.webp", "Ureche / Piercing", "piercing", "Piercinguri de ureche, compoziție de bijuterii"],
  ["lucrare-4.webp", "Black & grey / Sleeve", "tattoo", "Tatuaj black and grey pe braț"],
  ["lucrare-8.webp", "Mitologie / Backpiece", "tattoo", "Tatuaj amplu realist pe spate, motiv mitologic"],
  ["pierce-2.webp", "Buric / Piercing", "piercing", "Piercing în buric cu bijuterie argintie"],
  ["lucrare-7.webp", "Ornamental / Sleeve", "tattoo", "Tatuaj ornamental, compoziție pe braț"],
  ["pierce-7.webp", "Industrial / Piercing", "piercing", "Piercing industrial în ureche"],
  ["lucrare-12.webp", "Black & grey / Portret", "tattoo", "Tatuaj realist cu portret pe braț"],
  ["pierce-8.webp", "Ureche / Piercing", "piercing", "Piercinguri multiple în ureche"],
  ["lucrare-6.webp", "Backpiece / Realism", "tattoo", "Tatuaj artistic realist pe spate"],
  ["pierce-4.webp", "Buric / Piercing", "piercing", "Piercing în buric cu bijuterie simplă"],
  ["lucrare-10.webp", "Portret / Sleeve", "tattoo", "Tatuaj full sleeve realist pe braț"],
  ["lucrare-1.webp", "Realism / Sleeve", "tattoo", "Tatuaj realist artistic pe braț"],
  ["pierce-1.webp", "Limbă / Piercing", "piercing", "Piercing în limbă cu bijuterie metalică"],
  ["lucrare-9.webp", "Black & grey / Leg sleeve", "tattoo", "Tatuaj artistic realist pe picior"],
  ["pierce-5.webp", "Suprafață / Piercing", "piercing", "Piercinguri de suprafață în zona toracelui"],
  ["lucrare-2.webp", "Color / Sleeve", "tattoo", "Tatuaj cu detalii color pe braț"],
];

export const INITIAL_VISIBLE = 8;

export function visibleIndices(category: Category): number[] {
  return items.map((_, i) => i).filter((i) => category === "all" || items[i][2] === category);
}
