import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./navbar";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className={`min-h-[90vh] flex items-center transition-colors duration-300
        ${theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-100"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className={`inline-block px-4 py-1 rounded-full font-medium mb-5
            ${theme === "dark" ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-700"}`}>
            {t("hero.badge")}
          </span>

          <h2 className={`text-5xl md:text-6xl font-extrabold leading-tight
            ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {t("hero.greeting")}
            <span className="text-blue-500"> {t("hero.name")}</span>
          </h2>

          <h3 className={`mt-4 text-2xl md:text-3xl font-semibold
            ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            {t("hero.role")}
          </h3>

          <p className={`mt-6 text-lg leading-8 max-w-xl
            ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            {t("hero.description")}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">React</span>
            <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium">JavaScript</span>
            <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-medium">Tailwind CSS</span>
            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">API Integration</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              {t("hero.viewProjects")}
            </button>
            <button className={`px-7 py-3 rounded-xl border font-semibold transition
              ${theme === "dark"
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-gray-300 hover:bg-gray-100"}`}>
              {t("hero.contactMe")}
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className={`shadow-2xl rounded-3xl p-8 w-full max-w-md
            ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>

            <img
              src="https://i.pravatar.cc/300"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 object-cover"
            />

            <h2 className={`text-2xl font-bold text-center mt-6
              ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              {t("hero.name")}
            </h2>

            <p className={`text-center ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              {t("hero.role")}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-500">25+</h3>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t("hero.projects")}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-500">500+</h3>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t("hero.hours")}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-500">100%</h3>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t("hero.passion")}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;