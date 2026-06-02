import { createContext } from "react";
import { DARK, Tok } from "../styles/theme";

export interface ThemeContextType {
  theme: Tok;
  isDark: boolean;
  toggle: () => void;
}

export const ThemeCtx = createContext<ThemeContextType>({
  theme: DARK,
  isDark: true,
  toggle: () => {},
});
