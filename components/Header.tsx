import { useLanguage } from "../pages/_app";
import { translations } from "../locales";
import { useState } from "react";

export default function Header() {
  const { language, setLanguage, isHydrated } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!isHydrated) return null;

  const t = translations[language].header;

  const navItems = [
    { href: "#about", label: t.about },
    { href: "#services", label: t.services },
    { href: "#topics", label: t.topics },
    { href: "#courses", label: t.courses },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="sticky-nav">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gradient">{t.title}</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-primary-red font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}

            {/* Language Switcher */}
            <button
              className="px-4 py-2 border-2 border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-white font-semibold rounded-lg transition-colors duration-200"
              onClick={() => setLanguage(language === "cs" ? "en" : "cs")}
              aria-label="Switch language"
            >
              {t.switch}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-primary-red font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Language Switcher */}
              <button
                className="px-4 py-2 border-2 border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                onClick={() => {
                  setLanguage(language === "cs" ? "en" : "cs");
                  setIsMobileMenuOpen(false);
                }}
              >
                {t.switch}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
