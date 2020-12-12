import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    paragraph: {
      primary: string;
      secondary: string;
    };

    headline: {
      primary: string;
      secondary: string;
    };

    navbar: {
      background: string;
      color: string;
    };

    footer: {
      background: string;
      borderColor: string;
      color: string;
    };

    button: {
      primary: string;
      primaryColor: string;
      secondary: string;
      secondaryColor: string;
    };

    backgrounds: {
      primary: string;
      secondary: string;
    };

    card: {
      background: string;
      paragraph: string;
      heading: string;
    };

    linearGradients: {
      primary: string;
    };

    alerts: {
      danger: string;
    };
  }
}
