import { useLanguage } from "../pages/_app";
import { translations } from "../locales";

export default function Footer() {
  const { language, isHydrated } = useLanguage();
  if (!isHydrated) return null;
  const t = translations[language].footer;
  return (
    <footer className="bg-[#F9F9F9] py-6 mt-10 text-center text-slate-500 text-sm">
      &copy; {new Date().getFullYear()} QA Expert Jakub Jenik. {t}
    </footer>
  );
}
