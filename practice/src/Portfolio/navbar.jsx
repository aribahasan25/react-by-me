import { useTranslation } from "react-i18next";
import i18n from "./Languages/i18n";

function Navbar() {
  const { t } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <nav className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-blue-600">
            {t("hero.title")}
            </h1>
            <p className="text-sm text-gray-500">
              {t("hero.role")}
            </p>
          </div>

          <button
            onClick={handleLanguageChange}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            {t("navbar.button")}
          </button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;