import { DefaultTheme } from 'styled-components';

import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';

interface Theme {
  [key: string]: DefaultTheme;
}

// Available themes
const themes: Theme = {
  dark: darkTheme,
  light: lightTheme,
};

export default themes;
