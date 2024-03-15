import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../../config';
import { Theme, ThemeContextProps } from '../../config/theme/types';

interface ITheme {
  theme: Theme | undefined;
  toggleTheme: () => void;
}

export function useTheme(): ITheme {
  const context = useContext<ThemeContextProps>(ThemeContext);

  if (!context || !context.setTheme) {
    throw new Error('useTheme должен использоваться внутри ThemeContextProvider.');
  }

  const { theme, setTheme } = context;

  function toggleTheme() {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return { theme, toggleTheme };
}
