import useTheme from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, isDark, toggle } = useTheme();
    return (
        <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200"
            style={{
                borderColor: theme.border,
                backgroundColor: theme.tagBg,
                color: theme.textMuted,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.borderHover;
                e.currentTarget.style.color = theme.text;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.border;
                e.currentTarget.style.color = theme.textMuted;
            }}
        >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
    );
}
