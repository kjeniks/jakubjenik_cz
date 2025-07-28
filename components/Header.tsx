import { useLanguage } from "../pages/_app";
import { translations } from "../locales";

export default function Header() {
  const { language, setLanguage, isHydrated } = useLanguage();
  if (!isHydrated) return null;
  const t = translations[language].header;
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#8B5E3C]">{t.title}</h1>
        <nav className="space-x-4 flex items-center">
          <a href="#about" className="text-slate-700 hover:text-[#E63946]">
            {t.about}
          </a>
          <a href="#services" className="text-slate-700 hover:text-[#E63946]">
            {t.services}
          </a>
          <a href="#topics" className="text-slate-700 hover:text-[#E63946]">
            {t.topics}
          </a>
          <a href="#courses" className="text-slate-700 hover:text-[#E63946]">
            {t.courses}
          </a>
          <a href="#contact" className="text-slate-700 hover:text-[#E63946]">
            {t.contact}
          </a>
          <button
            className="ml-4 px-2 py-1 border rounded text-xs hover:bg-slate-100"
            onClick={() => setLanguage(language === "cs" ? "en" : "cs")}
            aria-label="Switch language"
          >
            {t.switch}
          </button>
        </nav>
      </div>
    </header>
  );
}
