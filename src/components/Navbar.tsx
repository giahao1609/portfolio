import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLangStore } from "../i18n";

export default function Navbar() {
  const { t, lang, switchLang } = useLangStore();
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Load theme
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050e1c]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow">
            HG
          </div>
          <span className="font-semibold text-white text-lg">
            {t.hero.name}
          </span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-10 text-white/90 text-base font-medium">
          <a href="#home" className="hover:text-white">{t.navbar.home}</a>
          <a href="#projects" className="hover:text-white">{t.navbar.projects}</a>
          <a href="#skills" className="hover:text-white">{t.navbar.skills}</a>
          <a href="#experience" className="hover:text-white">{t.navbar.experience}</a>
          <a href="#contact" className="hover:text-white">{t.navbar.contact}</a>
        </nav>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={switchLang}
            className="px-3 py-1 border border-white/20 rounded-lg text-white/80 hover:bg-white/10 transition"
          >
            {lang.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 border border-white/20 rounded-lg text-yellow-400 hover:bg-white/10 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#050e1c]/95 backdrop-blur-xl border-t border-white/10 py-5 px-6 space-y-4">

          <a onClick={() => setOpen(false)} href="#home" className="block text-white/90 text-lg">{t.navbar.home}</a>
          <a onClick={() => setOpen(false)} href="#projects" className="block text-white/90 text-lg">{t.navbar.projects}</a>
          <a onClick={() => setOpen(false)} href="#skills" className="block text-white/90 text-lg">{t.navbar.skills}</a>
          <a onClick={() => setOpen(false)} href="#experience" className="block text-white/90 text-lg">{t.navbar.experience}</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block text-white/90 text-lg">{t.navbar.contact}</a>

          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <button
              onClick={switchLang}
              className="px-3 py-1 border border-white/20 rounded-lg text-white/80 hover:bg-white/10 transition"
            >
              {lang.toUpperCase()}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 border border-white/20 rounded-lg text-yellow-400 hover:bg-white/10 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
