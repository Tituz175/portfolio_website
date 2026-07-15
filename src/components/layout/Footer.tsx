import useTheme from "../../../hooks/useTheme";

export default function Footer() {
  const { theme } = useTheme();
  
  const { isDark } = useTheme();
  console.log("Footer theme:", isDark);
  
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ borderColor: theme.navBorder }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            color: theme.textDim,
          }}
        >
          © {new Date().getFullYear()} Tobi Oyekanmi
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            color: theme.textDim,
          }}
        >
          AI Engineer · ML Researcher · MS Candidate — New Mexico Highlands University
        </p>
      </div>
    </footer>
  );
}
