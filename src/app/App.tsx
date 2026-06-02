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

import { useEffect, useState } from "react";
import { DARK, LIGHT } from "../../styles/theme";
import { ThemeCtx } from "../../context/ThemeContext";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check saved preference first
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    // Otherwise use system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [activeSection, setActiveSection] = useState("hero");

  const theme = isDark ? DARK : LIGHT;

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;

      // Save preference
      localStorage.setItem("theme", next ? "dark" : "light");

      return next;
    });
  };

  // Listen for system theme changes ONLY if user
  // has not manually selected a theme
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem("theme");

      // Ignore system changes if user already chose manually
      if (savedTheme) return;

      setIsDark(e.matches);
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "projects",
      "research",
      "skills",
      "experience",
      "blog",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeCtx.Provider value={{ theme: theme, isDark, toggle }}>
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
    </ThemeCtx.Provider>
  );
}
