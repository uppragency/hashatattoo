import { visibleIndices, type Category } from "@/lib/portfolio";

export type GalleryState = {
  category: Category;
  /** de cate ori s-a apasat "mai multe" (fiecare apasare adauga 2 randuri) */
  step: number;
  open: boolean;
  /** pozitia in lista filtrata */
  selected: number;
  focusBack: HTMLElement | null;
  /** listă proprie de indici (pagini pe stil); null = lista filtrată a portofoliului */
  list: number[] | null;
};

let state: GalleryState = { category: "all", step: 0, open: false, selected: 0, focusBack: null, list: null };
const listeners = new Set<() => void>();

function set(patch: Partial<GalleryState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
export const getState = () => state;

export function setCategory(category: Category) {
  set({ category, step: 0 });
}
export function moreRows() {
  set({ step: state.step + 1 });
}
export function resetRows() {
  set({ step: 0 });
}
export const currentList = (s: GalleryState = state) => s.list ?? visibleIndices(s.category);
export function openLightbox(index: number, card: HTMLElement | null, list?: number[]) {
  const l = list ?? visibleIndices(state.category);
  const pos = l.indexOf(index);
  set({ open: true, selected: pos >= 0 ? pos : 0, focusBack: card, list: list ?? null });
}
export function closeLightbox() {
  set({ open: false });
}
export function shift(delta: number) {
  const inds = currentList();
  set({ selected: (state.selected + delta + inds.length) % inds.length });
}
