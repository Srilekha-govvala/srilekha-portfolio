import { useState } from "react";
import {
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-gray-800/80 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide text-gray-900 dark:text-white"
        >
          SRILEKHA<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;