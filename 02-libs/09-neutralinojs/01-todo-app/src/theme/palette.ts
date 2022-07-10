import { ThemeOptions, colors } from '@mui/material'

const basePalette: ThemeOptions['palette'] = {
  common: {
    black: '#444',
    white: '#ddd',
  },
}

export const lightPalette: ThemeOptions['palette'] = {
  ...basePalette,
  background: { default: '#fff' },
  primary: colors.blue,
  secondary: colors.purple,
  text: {
    primary: '#444',
    secondary: '#222',
  },
}

export const darkPalette: ThemeOptions['palette'] = {
  ...basePalette,
  background: { default: '#222' },
  primary: colors.blue,
  secondary: colors.purple,
  text: {
    primary: '#ddd',
    secondary: '#ccc',
  },
}
