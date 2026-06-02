import { useEffect, useState } from "react";
import useTheme from "../../../hooks/useTheme";
import ThemeToggle from "../../ui/ThemeToggle";
import { ChevronRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
];


export default function Navbar({ active }: { active: string }) {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function handleNav(e: React.MouseEvent, href: string) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

    setOpen(false);
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? "12px 0" : "20px 0",
        backgroundColor: scrolled ? theme.navBg : "transparent",
        borderBottom: scrolled ? `1px solid ${theme.navBorder}` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="text-sm tracking-[0.25em] uppercase transition-colors duration-200"
          style={{ fontFamily: "var(--font-mono)", color: theme.textMuted }}
          onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
          onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted)}
        >
          T<span style={{ color: "#4080ff" }}>.</span>O
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-sm transition-colors duration-200"
              style={{ color: active === href.slice(1) ? theme.text : theme.textFaint }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = active === href.slice(1) ? theme.text : theme.textFaint)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all duration-200"
            style={{ borderColor: theme.border, color: theme.textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(64,128,255,0.5)";
              e.currentTarget.style.color = theme.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.border;
              e.currentTarget.style.color = theme.textMuted;
            }}
          >
            Get in touch <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="transition-colors duration-200"
            style={{ color: theme.textFaint }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
            onMouseLeave={(e) => (e.currentTarget.style.color = theme.textFaint)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden absolute top-full inset-x-0 py-6 px-6 border-b"
          style={{
            backgroundColor: theme.mobileBg,
            backdropFilter: "blur(24px)",
            borderBottomColor: theme.navBorder,
          }}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="py-1 transition-colors duration-200"
                style={{ color: theme.textMuted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
