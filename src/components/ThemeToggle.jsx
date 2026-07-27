import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:scale-105 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <>
          <Moon size={18} />
          <span>Dark</span>
        </>
      ) : (
        <>
          <Sun size={18} />
          <span>Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;