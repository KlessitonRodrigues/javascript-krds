export const staticCSS = {
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px'
  },
  shadow: {
    sm: '0px 2px 3px #0004',
    md: '0px 4px 4px #0004',
    lg: '0px 4px 6px #000c'
  },
  screens: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px'
  },
  margin: {
    xs: 'margin: 0.25rem',
    sm: 'margin: 0.5rem',
    md: 'margin: 0.75rem',
    lg: 'margin: 1rem'
  },
  padding: {
    xs: 'padding: 0.25rem',
    sm: 'padding: 0.5rem',
    md: 'padding: 0.75rem',
    lg: 'padding: 1rem'
  }
}

export type StaticCSS = typeof staticCSS

export type Color = {
  primary: string
  primaryOpacity: string
  primaryVariant: string
  background: string
  surface: string
  fontColor: string
  border: string
  buttonColor: string
}

export type ColorTypes = 'light' | 'dark'

export const colors : Record<ColorTypes, Color> = {
  light: {
    primary: '#1B62CC',
    primaryOpacity: '#1B62CC33',
    primaryVariant: '#1A3763',
    background: '#F3F3F4',
    surface: '#FFFFFF',
    fontColor: '#616161',
    border: '#5554',
    buttonColor: '#FFFFFF'
  },

  dark: {
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
