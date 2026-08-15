import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Navbar() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <nav className="h-16 shadow flex justify-between items-center px-8">
      
      <h1 className="text-2xl font-bold text-blue-600">
        🎓 Student Portal
      </h1>

      <div className="flex gap-3">
        <button
          onClick={() => setTheme("light")}
          className="px-3 py-1 bg-gray-200 text-black rounded"
        >
          Light
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="px-3 py-1 bg-gray-800 text-white rounded"
        >
          Dark
        </button>

        <button
          onClick={() => setTheme("blue")}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Blue
        </button>

        <button
          onClick={() => setTheme("green")}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Green
        </button>
      </div>

    </nav>
  );
}

export default Navbar;