import { useContext } from 'react';
import { ThemeCtx } from '../context/ThemeContext';

export default function useTheme() {
  return useContext(ThemeCtx);
}
