import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import Footer from "./footer";

const Ghar = () => {
  const { theme } = useContext(ThemeContext);

  const themeClasses = {
    light: "bg-white text-black",
    dark: "bg-black text-white",
    blue: "bg-blue-900 text-white",
    green: "bg-green-900 text-white",
  };

  return (
    <div className={`${themeClasses[theme]} min-h-screen`}>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <Dashboard />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Ghar;