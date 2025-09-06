import React from "react";
import ThemeToggle from "./ThemeToggle";
import MobileDrawer from "./MobileDrawer";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-gradient-to-r from-sky-50 to-white dark:from-navy-900 dark:to-navy-800 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-sky-500 to-sky-700 dark:from-sky-400 dark:to-sky-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          Husnain<span className="text-sky-500">.</span>
        </a>

        <nav className="hidden items-center gap-4 md:flex">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="px-6 py-2 bg-gradient-to-r from-sky-500/10 to-sky-600/10 hover:from-sky-500 hover:to-sky-600 text-sky-600 hover:text-white dark:text-sky-400 dark:hover:text-white rounded-lg font-medium shadow-sm hover:shadow-lg hover:shadow-sky-500/20 hover:scale-105 transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            className="px-6 py-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-lg font-medium shadow-lg shadow-sky-500/20 hover:scale-105 transition-all duration-300"
            target="_blank" 
            rel="noreferrer"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileDrawer links={links} />
        </div>
      </div>
    </header>
  );
}
