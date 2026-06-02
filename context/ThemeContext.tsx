import { createContext } from 'react';
import { DARK, Tok } from '../styles/theme';

const ThemeCtx = createContext<{ theme: Tok; isDark: boolean; toggle: () => void }>({
  theme: DARK,
  isDark: true,
  toggle: () => {},
});

export { ThemeCtx };
