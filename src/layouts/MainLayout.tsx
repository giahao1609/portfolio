import Navbar from "../components/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="min-h-screen bg-white text-black dark:bg-[#0A1A2F] dark:text-white transition-colors">

      <Navbar />

      <main className="w-full pt-24">
        {children}
      </main>
    </div>
  );
}
