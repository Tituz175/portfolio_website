import useTheme from "../../../hooks/useTheme";

export default function SectionLabel({
  index,
  label,
  color,
}: {
  index: string;
  label: string;
  color: string;
}) {
  const { theme } = useTheme();
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.9rem",
          color,
          letterSpacing: "0.18em",
        }}
      >
        {index}
      </span>
      <div
        className="h-px w-8"
        style={{ backgroundColor: color, opacity: 0.4 }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.90rem",
          letterSpacing: "0.2em",
          color: theme.textVeryFaint,
        }}
      >
        {label.toUpperCase()}
      </span>
    </div>
  );
}
