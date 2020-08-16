import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  paragraph: {
    primary: '#b8c1ec',
    secondary: '#232946',
  },

  headline: {
    primary: '#fffffe',
    secondary: '#232946',
  },

  button: {
    primary: '#eebbc3',
    primaryColor: '#232946',
    secondary: '',
    secondaryColor: '',
  },

  backgrounds: {
    primary: '#232946',
    secondary: '#d4d8f0',
  },

  card: {
    background: '#fffffe',
    paragraph: '#232946',
    heading: '#232946',
  },

  linearGradients: {
    primary:
      'linear-gradient(to left bottom, #b8c1ec, #9098bf, #6a7095, #454b6c, #232946);',
  },

  alerts: {
    danger: '#F56565',
  },
};

export { mainTheme };
