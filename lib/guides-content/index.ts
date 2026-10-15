import type { GuideContent } from "@/lib/guide-types";
import primulTauTatuaj from "./primul-tau-tatuaj";
import ingrijireTatuaj from "./cum-ingrijesti-un-tatuaj-nou";
import alegiStilul from "./cum-alegi-stilul-de-tatuaj";
import piercingUreche from "./piercing-ureche-ghid";
import ingrijirePiercing from "./cum-ingrijesti-un-piercing-nou";
import pregatireSedinta from "./cum-te-pregatesti-pentru-sedinta-de-tatuaj";

export const guideContent: Record<string, GuideContent> = {
  "primul-tau-tatuaj": primulTauTatuaj,
  "cum-ingrijesti-un-tatuaj-nou": ingrijireTatuaj,
  "cum-alegi-stilul-de-tatuaj": alegiStilul,
  "piercing-ureche-ghid": piercingUreche,
  "cum-ingrijesti-un-piercing-nou": ingrijirePiercing,
  "cum-te-pregatesti-pentru-sedinta-de-tatuaj": pregatireSedinta,
};
