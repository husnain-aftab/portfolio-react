import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <footer className="py-10 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Junaid Shahpal
        </footer>
      </main>
    </>
  );
}
