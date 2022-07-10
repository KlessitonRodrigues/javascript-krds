import { blue, green, grey, red, yellow } from '@mui/material/colors'
import React from 'react'
import useGlobalContext from './useGlobalContext'

const lightPalette = {
  blue: blue['500'],
  blue2: blue['700'],
  red: red['900'],
  green: green['700'],
  white: grey['100'],
  black: grey['900'],
  gray: grey['500'],
  yellow: yellow['800'],
  shadow: '#2222',
  shadow2: '#4444',
  border: '#2222',
  bgDark: '#222',
  bgLight: '#fcfcfc',
  dark: '#555',
  light: '#ddd',
}

const darkPalette = {
  ...lightPalette,
  green: green['400'],
  blue: blue['800'],
  blue2: blue['900'],
  bgDark: '#fcfcfc',
  bgLight: '#222',
  dark: '#ddd',
  light: '#555',
  border: '#ddd2',
}

export type PaletteContext = typeof lightPalette

const paletteContext = React.createContext<PaletteContext>(lightPalette)

export const PaletteProvider = (props: React.PropsWithChildren) => {
  const [{ darkTheme }] = useGlobalContext()

  return (
    // @ts-ignore
    <paletteContext.Provider value={darkTheme ? darkPalette : lightPalette}>{props.children}</paletteContext.Provider>
  )
}

const usePaletteContext = () => {
  return React.useContext(paletteContext)
}

export default usePaletteContext
