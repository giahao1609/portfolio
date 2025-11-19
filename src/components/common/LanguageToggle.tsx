import { useLangStore } from "../../i18n";

export default function LanguageToggle() {
  const { lang, switchLang } = useLangStore();

  return (
    <button
      onClick={switchLang}
      className="px-3 py-1 border rounded dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      {lang === "en" ? "VI 🇻🇳" : "EN 🇺🇸"}
    </button>
  );
}
