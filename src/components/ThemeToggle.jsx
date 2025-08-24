import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enableDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", enableDark);
    setIsDark(enableDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="btn-outline rounded-full">
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
