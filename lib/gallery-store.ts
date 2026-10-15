import { visibleIndices, type Category } from "@/lib/portfolio";

export type GalleryState = {
  category: Category;
  expanded: boolean;
  open: boolean;
  /** pozitia in lista filtrata */
  selected: number;
  focusBack: HTMLElement | null;
};

let state: GalleryState = { category: "all", expanded: false, open: false, selected: 0, focusBack: null };
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
  set({ category, expanded: false });
}
export function toggleExpanded() {
  set({ expanded: !state.expanded });
}
export function openLightbox(index: number, card: HTMLElement | null) {
  const pos = visibleIndices(state.category).indexOf(index);
  set({ open: true, selected: pos >= 0 ? pos : 0, focusBack: card });
}
export function closeLightbox() {
  set({ open: false });
}
export function shift(delta: number) {
  const inds = visibleIndices(state.category);
  set({ selected: (state.selected + delta + inds.length) % inds.length });
}
