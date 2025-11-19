import { create } from "zustand";

interface ThemeState {
  mode: "light" | "dark";
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: "light",
  toggle: () => {
    const newMode = get().mode === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newMode === "dark");
    set({ mode: newMode });
  },
}));
