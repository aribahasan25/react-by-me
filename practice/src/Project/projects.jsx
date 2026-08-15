import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./navbar";

const projects = [
  {
    id: 1,
    title: "Quran Guidance Website",
    description: "A student-focused website providing Quran guidance, audio and learning resources.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "GitHub Profile Finder",
    description: "A React application that fetches GitHub user data using API.",
    tech: ["React", "API", "Tailwind"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app to manage daily tasks with React state management.",
    tech: ["React", "useReducer", "Tailwind"],
    image: "https://via.placeholder.com/600x400",
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300
        ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {t("projects.title")}
          </h2>
          <p className={`mt-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder={t("projects.searchPlaceholder")}
            className={`w-full px-5 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition
              ${theme === "dark"
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                : "border-gray-300"}`}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border
                ${theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"}`}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

              <div className="p-6">
                <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {project.title}
                </h3>
                <p className={`mt-3 leading-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                    {t("projects.liveDemo")}
                  </button>
                  <button className={`flex-1 py-2 rounded-lg border transition
                    ${theme === "dark"
                      ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                      : "border-gray-300 hover:bg-gray-100"}`}>
                    {t("projects.code")}
                  </button>
                </div>

                <button className="mt-4 text-2xl">🤍</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;