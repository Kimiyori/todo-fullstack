import { devices } from 'data/breakpoints';

export const theme = {
  breakpoints: devices,
  color: {
    Primary: '#d8e2ff',
    Secondary: '#faf0ff',
    Background: '#fffbff',
    Error: '#ba1a1a',
    OnPrimary: '#001a43',
    OnSecondary: '#290055',
    OnBackground: '#1d1b1e',
    OnError: '#ffffff',
    Outline: '#7b757f',
    Surface: '#fffbff',
  },
  font: {
    weight: 300,
    size: {
      big: '2rem',
      middle: '1.5rem',
      normal: '1rem',
    },
  },
  boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
};
