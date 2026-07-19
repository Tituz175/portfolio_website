import { useEffect, useState } from "react";
import { motion } from "motion/react";
import useTheme from "../../../hooks/useTheme";
import ThemeToggle from "../ui/ThemeToggle";
import { ChevronRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  active: string;
}

export default function Navbar({ active }: NavbarProps) {
  const { theme } = useTheme();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
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
        borderBottom: scrolled
          ? `1px solid ${theme.navBorder}`
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="text-sm tracking-[0.25em] uppercase transition-colors duration-200"
          style={{
            fontFamily: "var(--font-mono)",
            color: theme.textMuted,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = theme.text;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = theme.textMuted;
          }}
        >
          T<span style={{ color: "#4080ff" }}>.</span>O
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href.slice(1);

            return (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="relative inline-block text-sm"
              >
                {/* Invisible bold copy reserves the link's width up front, so
                    the visible text's weight can animate on hover without
                    pushing neighboring links around. */}
                <span
                  aria-hidden="true"
                  className="block whitespace-nowrap font-bold invisible"
                >
                  {label}
                </span>

                <span
                  className="absolute inset-0 whitespace-nowrap"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${theme.text} 50%, ${theme.textMuted} 50%)`,
                    backgroundSize: "200% 100%",
                    backgroundPosition: isActive ? "0% 0" : "100% 0",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                    fontWeight: isActive ? 700 : 400,
                    transition: "background-position 0.35s ease, font-weight 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundPosition = "0% 0";
                    e.currentTarget.style.fontWeight = "700";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundPosition = isActive
                      ? "0% 0"
                      : "100% 0";
                    e.currentTarget.style.fontWeight = isActive ? "700" : "400";
                  }}
                >
                  {label}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-2 h-px"
                    style={{
                      backgroundColor: "#4080ff",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="group flex items-center gap-2 text-sm px-4 py-2 rounded-full"
            style={{
              backgroundColor: "transparent",
              color: theme.textMuted,
              fontWeight: 400,
              transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, font-weight 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4080ff";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.fontWeight = "600";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(64,128,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = theme.textMuted;
              e.currentTarget.style.fontWeight = "400";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get in touch
            <ChevronRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="transition-colors duration-200"
            style={{
              color: theme.textMuted,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = theme.textMuted;
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="md:hidden absolute top-full inset-x-0 min-h-screen py-6 px-6 border-b"
          style={{
            backgroundColor: theme.mobileBg,
            backdropFilter: "blur(24px)",
            borderBottomColor: theme.navBorder,
          }}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === href.slice(1);

              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className="transition-colors duration-200 py-1"
                  style={{
                    color: isActive ? theme.text : theme.textMuted,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.text;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive
                      ? theme.text
                      : theme.textMuted;
                  }}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
