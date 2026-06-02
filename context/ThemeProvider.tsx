import { useEffect, useState } from "react";
import { ThemeCtx } from "./ThemeContext";
import { DARK, LIGHT } from "../styles/theme";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const theme = isDark ? DARK : LIGHT;

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;

      localStorage.setItem("theme", next ? "dark" : "light");

      return next;
    });
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) return;

      setIsDark(e.matches);
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeCtx.Provider
      value={{
        theme,
        isDark,
        toggle,
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
}
