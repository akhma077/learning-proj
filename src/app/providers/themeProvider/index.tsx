import { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '../../../shared/config/theme/types';
import { ThemeContext } from '../../../shared/config/theme/themeContext';

const initialState = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export function ThemeContextProvider({ children }: any) {
  const [theme, setTheme] = useState<Theme>(initialState);

  const defaultPropsContext = useMemo(() => ({ theme: theme, setTheme: setTheme }), [theme]);
  return <ThemeContext.Provider value={defaultPropsContext}> {children} </ThemeContext.Provider>;
}
