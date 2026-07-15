// Darkened variants of the site's accent palette, tuned to clear WCAG AA
// (4.5:1) as text against the light-theme background. The vivid originals
// stay in use for icons, borders, and background tints, which don't carry
// the same contrast requirement.
const ACCENT_TEXT_LIGHT: Record<string, string> = {
  "#4080ff": "#3366cc",
  "#7c5cfc": "#634aca",
  "#06b6d4": "#046d7f",
  "#10b981": "#0a6f4d",
  "#f59e0b": "#875706",
  "#ef4444": "#b33333",
};

export function accentText(accent: string, isDark: boolean): string {
  if (isDark) return accent;
  return ACCENT_TEXT_LIGHT[accent] ?? accent;
}
