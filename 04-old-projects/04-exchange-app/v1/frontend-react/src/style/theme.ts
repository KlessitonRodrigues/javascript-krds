export const theme = {
  colors: {
    primary: '#1B62CC',
    primaryOpacity: '#1B62CC33',
    primaryVariant: '#1A3763',
    background: '#F3F3F4',
    surface: '#FFFFFF',
    fontColor: '#616161',
    border: '#5554'
  },
  screens: {
    xs: '380px',
    sm: '480px',
    md: '768px',
    lg: '1280px'
  }
}

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
