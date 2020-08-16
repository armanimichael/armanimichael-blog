import { DefaultTheme } from 'styled-components';

import { mainTheme } from './main-theme';
import { secondaryTheme } from './secondary-theme';

interface Theme {
  [key: string]: DefaultTheme;
}

// Available themes
const themes: Theme = {
  main: mainTheme,
  light: secondaryTheme,
};

export default themes;
