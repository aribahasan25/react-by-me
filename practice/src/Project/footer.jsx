import { useContext } from "react";
import { ThemeContext } from "./navbar";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`py-10 transition-colors duration-300
      ${theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-900 text-white"}`}>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">Ariba Hasan</h2>
            <p className="mt-3 text-gray-400 leading-6">
              Frontend Developer creating modern and responsive web
              experiences using React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home"     className="hover:text-white transition">Home</a></li>
              <li><a href="#skills"   className="hover:text-white transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact"  className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
                Git
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
                In
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
                X
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ariba Hasan. All rights reserved.</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;