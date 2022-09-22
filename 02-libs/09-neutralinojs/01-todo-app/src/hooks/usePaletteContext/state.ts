import { BasePalette } from './types';

export const base: BasePalette = {
  colorA: '#7B1E7A',
  colorADark: '#631861',
  colorB: '#7B1E7A',
  colorBDark: '#631861',
  blue: '#00587A',
  red: '#CF5C36',
  green: '#4DA167',
  white: '#FBF6EF',
  black: '#241909',
  gray: '#99B0C2',
  yellow: '#EFC88B',
  violet: '#6E2594',
  shadow: '#2222',
  shadow2: '#4444',
  border: '#22222200',
  bgDark: '#111111',
  bgLight: '#fcfcfc',
  dark: '#222222',
  light: '#cccccc',
};

export const baseDark: BasePalette = {
  ...base,
  colorA: '#7B1E7A',
  colorADark: '#631861',
  bgDark: '#fcfcfc',
  bgLight: '#1A1A1A',
  dark: '#CCCCCC',
  light: '#222222',
  border: '#DDDDDD22',
};

export const blue: BasePalette = {
  ...base,
  colorA: '#20A4F3',
  colorADark: '#20A4F3',
  colorB: '#20A4F3',
  colorBDark: '#20A4F3',
};
