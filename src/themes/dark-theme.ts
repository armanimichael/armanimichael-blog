import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  paragraph: {
    primary: '#8F93A2',
    secondary: '#2e2f3e',
  },

  headline: {
    primary: '#fffffe',
    secondary: '#0f0e17',
  },

  button: {
    primary: '#0a4494',
    primaryColor: '#fffffe',
    secondary: '',
    secondaryColor: '',
  },

  navbar: {
    background: '#090b10',
    color: '',
  },

  backgrounds: {
    primary: '#0F111A',
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
