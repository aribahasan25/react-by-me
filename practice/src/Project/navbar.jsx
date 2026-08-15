import { useState, useEffect, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./Languages/i18n";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { href: "#home",     label: t("navbar.home")     },
    { href: "#skills",   label: t("navbar.skills")   },
    { href: "#projects", label: t("navbar.projects") },
    { href: "#github",   label: t("navbar.github")   },
    { href: "#contact",  label: t("navbar.contact")  },
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full backdrop-blur-md border-b shadow-sm transition-colors duration-300
        ${theme === "dark"
          ? "bg-gray-900/90 border-gray-700"
          : "bg-white/90 border-gray-200"}`}>

        <div className="max-w-screen-xl mx-auto h-16 px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-blue-600">
              Ariba Hasan
            </h1>
            <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              {t("hero.role")}
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className={`hidden lg:flex items-center gap-8 xl:gap-10 font-medium
            ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-blue-600 transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Buttons */}
          <div className="flex items-center gap-2 lg:gap-3">

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`hidden sm:block px-3 lg:px-4 py-2 rounded-lg border text-sm font-medium transition
                ${theme === "dark"
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-300 hover:bg-gray-100"}`}
            >
              {t("navbar.langBtn")}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition text-lg"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Resume */}
            <button className="hidden lg:block px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium">
              {t("navbar.resume")}
            </button>

            {/* Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden text-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              ☰
            </button>

          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50 shadow-xl transition-transform duration-300 lg:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className={`flex justify-between items-center p-6 border-b
          ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
          <h2 className="text-xl font-bold text-blue-600">Menu</h2>
          <button
            onClick={toggleMobileMenu}
            className={`text-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            ✕
          </button>
        </div>

        <ul className={`flex flex-col gap-6 p-6 font-medium
          ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={toggleMobileMenu} className="hover:text-blue-600 transition">
                {link.label}
              </a>
            </li>
          ))}

          {/* Mobile Language Toggle */}
          <li>
            <button
              onClick={toggleLanguage}
              className="text-left hover:text-blue-600 transition"
            >
              {t("navbar.langBtn")}
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;