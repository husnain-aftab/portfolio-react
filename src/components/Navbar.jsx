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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgb(var(--bg))]/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          YourName<span className="text-[rgb(var(--primary))]">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm opacity-80 hover:opacity-100">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" className="btn-primary rounded-full" target="_blank" rel="noreferrer">
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
