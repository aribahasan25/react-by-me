import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./navbar";

const skills = [
  { name: "HTML5",           level: 95, color: "bg-orange-500", icon: "🌐" },
  { name: "CSS3",            level: 90, color: "bg-blue-500",   icon: "🎨" },
  { name: "JavaScript",      level: 85, color: "bg-yellow-500", icon: "⚡" },
  { name: "React",           level: 80, color: "bg-cyan-500",   icon: "⚛️" },
  { name: "Tailwind CSS",    level: 90, color: "bg-sky-500",    icon: "💨" },
  { name: "API Integration", level: 75, color: "bg-green-500",  icon: "🔗" },
];

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className={`py-20 transition-colors duration-300
        ${theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-white to-blue-50"}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {t("skills.title")}
          </h2>
          <p className={`mt-3 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6
                ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {skill.name}
                  </h3>
                </div>
                <span className="font-bold text-blue-500">{skill.level}%</span>
              </div>
              <div className={`w-full h-3 rounded-full overflow-hidden ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}>
                <div className={`${skill.color} h-full rounded-full`} style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;