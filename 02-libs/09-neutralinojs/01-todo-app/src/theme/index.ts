import { createTheme } from '@mui/material'

import { components } from './components'
import { darkPalette, lightPalette } from './palette'
import { typography } from './typography'

const theme = (useDark: boolean) => {
  const palette = useDark ? darkPalette : lightPalette

  return createTheme({
    palette,
    components,
    typography,
    spacing(factor: number) {
      return factor * 0.25 + 'rem'
    },
  })
}

export default theme
