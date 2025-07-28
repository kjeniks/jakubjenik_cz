import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Language context setup
export type Language = "cs" | "en";
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isHydrated: boolean;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("cs");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Only run on client
    const stored = localStorage.getItem("lang") as Language;
    if (stored && stored !== language) {
      setLanguage(stored);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("lang", language);
    }
  }, [language, isHydrated]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
