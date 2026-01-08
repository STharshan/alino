import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`rounded-md border px-1.5 py-1.5 text-sm flex items-center
                  bg-white text-gray-900 border-gray-300
                  dark:bg-neutral-800 dark:text-gray-100 dark:border-neutral-700 ${className} hover:bg-[#007A4D] cursor-pointer active:bg-[#007A4D] `}
      aria-label="Toggle dark mode"
    >
      {isDark ? <FaMoon size={18} /> : <FaSun size={18} />}
    </button>
  );
}
