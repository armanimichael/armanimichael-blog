import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';

import themes from '../themes/themes';

interface UseTheme {
  (newTheme?: string): {
    theme: DefaultTheme;
    themeName: string;
  };
}

export const useTheme: UseTheme = newTheme => {
  const [currentTheme, setTheme] = useState<string>(getSavedTheme());

  function getSavedTheme(): string {
    const fetchedTheme =
      typeof window !== `undefined`
        ? window.localStorage.getItem('theme')
        : 'main';

    // Checks if the theme inside local storage exists
    return themes[fetchedTheme || ''] && fetchedTheme ? fetchedTheme : 'main';
  }

  useEffect(() => {
    if (newTheme) {
      window.localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    }
  }, [newTheme]);

  return {
    theme: themes[currentTheme],
    themeName: currentTheme,
  };
};
