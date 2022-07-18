import { blue, green, grey, red, yellow } from '@mui/material/colors'
import React from 'react'
import useGlobalContext from './useGlobalContext'

const lightPalette = {
  color1A: '#0075A3',
  color1B: '#00587A',
  color2: red['900'],
  color3: green['700'],
  color4: grey['100'],
  color6: grey['900'],
  color7: grey['500'],
  color8: yellow['800'],
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
  color3: green['400'],
  color1A: '#00587A',
  color1B: '#00587A',
  bgDark: '#fcfcfc',
  bgLight: '#222',
  dark: '#ccc',
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
