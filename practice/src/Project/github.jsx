import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./navbar";

const Github = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubUser = async () => {
      try {
        const response = await fetch("https://api.github.com/users/AribaHasan25");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGithubUser();
  }, []);

  if (loading) {
    return (
      <div className={`py-20 text-center ${theme === "dark" ? "bg-gray-900 text-white" : ""}`}>
        <h2 className="text-xl font-semibold">{t("github.loading")}</h2>
      </div>
    );
  }

  return (
    <section
      id="github"
      className={`py-20 transition-colors duration-300
        ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {t("github.title")}
          </h2>
          <p className={`mt-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            {t("github.subtitle")}
          </p>
        </div>

        <div className={`rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8
          ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>

          <img
            src={user.avatar_url}
            alt={user.name}
            className="w-40 h-40 rounded-full border-4 border-blue-500"
          />

          <div className="flex-1">
            <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              {user.name}
            </h3>
            <p className={`mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              {user.bio || "Frontend Developer"}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              className={`inline-block mt-5 px-6 py-3 rounded-xl text-white transition
                ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-900 hover:bg-gray-700"}`}
            >
              {t("github.visitBtn")}
            </a>

            <div className="grid grid-cols-3 gap-5 mt-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-500">{user.followers}</h4>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t("github.followers")}</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-500">{user.following}</h4>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t("github.following")}</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-500">{user.public_repos}</h4>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t("github.repos")}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Github;