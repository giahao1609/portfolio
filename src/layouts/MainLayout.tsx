import ThemeToggle from "../components/common/ThemeToggle";
import LanguageToggle from "../components/common/LanguageToggle";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A1A2F] text-white transition-colors">

      {/* NAVBAR */}
      <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl tracking-wide">Portfolio</h1>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>

      {/* MAIN CONTENT — FULL WIDTH */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
