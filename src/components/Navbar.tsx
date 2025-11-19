import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLangStore } from "../i18n";

export default function Navbar() {
  const { t, lang, switchLang } = useLangStore();
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  /* Load theme */
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
    <header
      className="
        fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors

        /* LIGHT */
        bg-white/70 border-black/10 text-black

        /* DARK */
        dark:bg-[#050e1c]/70 dark:border-white/10 dark:text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div
            className="
              w-9 h-9 rounded-full flex items-center justify-center font-bold shadow

              /* LIGHT */
              bg-linear-to-br from-blue-500 to-purple-600 text-white

              /* DARK */
              dark:bg-linear-to-br dark:from-blue-500 dark:to-purple-600 dark:text-white
            "
          >
            HG
          </div>

          <span className="font-semibold text-lg text-black dark:text-white">
            {t.hero.name}
          </span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-10 text-black/80 dark:text-white/90 text-base font-medium">
          <a href="#home" className="hover:text-black dark:hover:text-white">{t.navbar.home}</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white">{t.navbar.projects}</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white">{t.navbar.skills}</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white">{t.navbar.experience}</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white">{t.navbar.contact}</a>
        </nav>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-3">
          {/* SWITCH LANGUAGE */}
          <button
            onClick={switchLang}
            className="
              px-3 py-1 rounded-lg transition

              /* LIGHT */
              border border-black/20 text-black hover:bg-black/10

              /* DARK */
              dark:border-white/20 dark:text-white/80 dark:hover:bg-white/10
            "
          >
            {lang.toUpperCase()}
          </button>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-lg transition

              /* LIGHT */
              border border-black/20 text-black hover:bg-black/10

              /* DARK */
              dark:border-white/20 dark:text-yellow-400 dark:hover:bg-white/10
            "
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-black dark:text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden py-5 px-6 space-y-4 border-t transition-colors

            /* LIGHT */
            bg-white/90 border-black/10 text-black backdrop-blur-xl

            /* DARK */
            dark:bg-[#050e1c]/95 dark:border-white/10 dark:text-white
          "
        >
          <a onClick={() => setOpen(false)} href="#home" className="block text-lg">{t.navbar.home}</a>
          <a onClick={() => setOpen(false)} href="#projects" className="block text-lg">{t.navbar.projects}</a>
          <a onClick={() => setOpen(false)} href="#skills" className="block text-lg">{t.navbar.skills}</a>
          <a onClick={() => setOpen(false)} href="#experience" className="block text-lg">{t.navbar.experience}</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block text-lg">{t.navbar.contact}</a>

          {/* LANG + THEME IN MOBILE */}
          <div className="flex items-center gap-4 pt-4 border-t border-black/10 dark:border-white/10">
            <button
              onClick={switchLang}
              className="
                px-3 py-1 rounded-lg transition

                /* LIGHT */
                border border-black/20 hover:bg-black/10 text-black

                /* DARK */
                dark:border-white/20 dark:text-white/80 dark:hover:bg-white/10
              "
            >
              {lang.toUpperCase()}
            </button>

            <button
              onClick={toggleTheme}
              className="
                p-2 rounded-lg transition

                /* LIGHT */
                border border-black/20 text-black hover:bg-black/10

                /* DARK */
                dark:border-white/20 dark:text-yellow-400 dark:hover:bg-white/10
              "
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
