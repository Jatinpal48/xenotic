import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-6">
      <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-full shadow-md">
        <div className="text-2xl font-semibold">Xenotix Tech</div>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>Home</li>
          <li>Tech Stack</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Articles</li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-xl">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg">
            Contact Now →
          </button>
        </div>
      </nav>
    </div>
  );
}
