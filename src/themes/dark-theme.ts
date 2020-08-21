import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  paragraph: {
    primary: '#a7a9be',
    secondary: '#2e2f3e',
  },

  headline: {
    primary: '#fffffe',
    secondary: '#0f0e17',
  },

  button: {
    primary: '#ff8906',
    primaryColor: '#fffffe',
    secondary: '',
    secondaryColor: '',
  },

  backgrounds: {
    primary: '#0f0e17',
    secondary: '#fffffe',
  },

  card: {
    background: '#fffffe',
    paragraph: '#000000',
    heading: '#ff8906',
  },

  linearGradients: {
    primary:
      'linear-gradient(to left bottom, #b8c1ec, #9098bf, #6a7095, #454b6c, #232946);',
  },

  alerts: {
    danger: '#F56565',
  },
};

export { darkTheme };
