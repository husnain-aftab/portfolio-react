import React from "react";
import { Layout, ConfigProvider, BackTop } from "antd";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { theme } from "./theme";
import "./App.css";
import "./antd-customizations.css";

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
          © {new Date().getFullYear()} Husnain Mughal
        </footer>
      </main>
    </>
  );
}
