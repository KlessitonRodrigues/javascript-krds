import { green, grey, red, yellow } from '@mui/material/colors';

export type BasePalette = {
  color1: string;
  color1Dark: string;
  color2: string;
  color3: string;
  color4: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  shadow: string;
  shadow2: string;
  border: string;
  bgDark: string;
  bgLight: string;
  dark: string;
  light: string;
};

export const base: BasePalette = {
  color1: '#0075A3', // CIAN
  color1Dark: '#00587A', // CIAN DARK
  color2: red['900'], // RED
  color3: green['700'], // GREEN
  color4: grey['100'], // WHITE
  color6: grey['900'], // BLACK
  color7: grey['500'], // GRAY
  color8: yellow['800'], // YELLOW
  color9: '#6E2594', // VIOLET
  shadow: '#2222',
  shadow2: '#4444',
  border: '#22222200',
  bgDark: '#111111',
  bgLight: '#fcfcfc',
  dark: '#222222',
  light: '#cccccc',
};

export const baseDark = {
  ...base,
  color3: green['400'],
  color1: '#0075A3',
  color1Dark: '#00587A',
  bgDark: '#fcfcfc',
  bgLight: '#1A1A1A',
  dark: '#CCCCCC',
  light: '#222222',
  border: '#DDDDDD22',
};
