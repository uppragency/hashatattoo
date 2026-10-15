import type { GuideContent } from "@/lib/guide-types";
import primulTauTatuaj from "./primul-tau-tatuaj";
import ingrijireTatuaj from "./cum-ingrijesti-un-tatuaj-nou";

export const guideContent: Record<string, GuideContent> = {
  "primul-tau-tatuaj": primulTauTatuaj,
  "cum-ingrijesti-un-tatuaj-nou": ingrijireTatuaj,
};
