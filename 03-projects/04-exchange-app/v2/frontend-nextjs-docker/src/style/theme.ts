export const defaultTheme = {
  colors: {
    primary: '#1B62CC',
    primaryOpacity: '#1B62CC33',
    primaryVariant: '#1A3763',
    background: '#F3F3F4',
    surface: '#FFFFFF',
    fontColor: '#616161',
    border: '#5554',
    buttonColor: '#FFFFFF'
  },
  screens: {
    xs: '380px',
    sm: '480px',
    md: '768px',
    lg: '1280px'
  }
}

export const darkTheme: typeof defaultTheme = {
  ...defaultTheme,
  colors: {
    primary: '#4585E6',
    primaryOpacity: '#2076F7',
    primaryVariant: '#AFC8ED',
    background: '#212738',
    surface: '#080A0C',
    fontColor: '#FFFFFF',
    border: '#FFFFFF33',
    buttonColor: '#212738'
  }
}

export type DefaultThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType {}
}
