import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  paragraph: {
    primary: '#2d334a',
    secondary: '#2d334a',
  },

  headline: {
    primary: '#272343',
    secondary: '#272343',
  },

  button: {
    primary: '#6246ea',
    primaryColor: '#fffffe',
    secondary: '',
    secondaryColor: '',
  },

  navbar: {
    background: '#e8e8e8',
    color: '',
  },

  footer: {
    background: '#e8e8e8',
    borderColor: '#212121',
    color: '#212121',
  },

  backgrounds: {
    primary: '#fffffe',
    secondary: '#e3f6f5',
  },

  card: {
    background: '#fffffe',
    paragraph: '#2d334a',
    heading: '#272343',
  },

  linearGradients: {
    primary: 'linear-gradient(to right, #8e9eab, #eef2f3)',
  },

  alerts: {
    danger: '#F56565',
  },
};

export { lightTheme };
