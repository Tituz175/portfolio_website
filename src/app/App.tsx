import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Research from "../components/sections/Research";
// import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

import useTheme from "../../hooks/useTheme";

export default function App() {
  const { theme } = useTheme();

  // =========================
  // ACTIVE SECTION TRACKING
  // =========================

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "projects",
      "research",
      "skills",
      "experience",
      // "blog",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // =========================
  // RENDER
  // =========================

  return (
    <div
      className="min-h-screen antialiased overflow-x-hidden"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      <Navbar active={activeSection} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Experience />
        {/* <Blog /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}