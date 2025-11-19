import { useThemeStore } from "../../store/themeStore";

export default function ThemeToggle() {
  const { mode, toggle } = useThemeStore();

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 border rounded dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      {mode === "light" ? "🌙 Dark" : "☀ Light"}
    </button>
  );
}
