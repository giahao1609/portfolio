import { create } from "zustand";
import en from "./en";
import vi from "./vi";

type Lang = "en" | "vi";

const dict = { en, vi };

interface LangStore {
  lang: Lang;
  t: typeof en;
  switchLang: () => void;
}

// EXPORT ĐÚNG TÊN: useLangStore
export const useLangStore = create<LangStore>((set, get) => ({
  lang: "en",
  t: dict.en,
  switchLang: () => {
    const newLang = get().lang === "en" ? "vi" : "en";
    set({
      lang: newLang,
      t: dict[newLang],
    });
  },
}));
