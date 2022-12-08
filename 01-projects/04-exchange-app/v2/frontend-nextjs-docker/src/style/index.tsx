import React, { useState, PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global'
import { defaultTheme, darkTheme } from './theme'

type ThemesTypes = 'light' | 'dark'

export const StyleContext = React.createContext<[ThemesTypes, React.Dispatch<React.SetStateAction<ThemesTypes>>]>([
  'light',
  () => {}
])

const StyleProvider = (props: PropsWithChildren<{}>) => {
  const themeType = useState<ThemesTypes>('light')
  return (
    <>
      <StyleContext.Provider value={themeType}>
        <ThemeProvider theme={themeType[0] === 'light' ? defaultTheme : darkTheme}>
          <GlobalStyle />
          {props.children}
        </ThemeProvider>
      </StyleContext.Provider>
    </>
  )
}

export default StyleProvider
