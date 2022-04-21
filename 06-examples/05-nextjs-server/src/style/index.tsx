import {
  useState,
  PropsWithChildren,
  Dispatch,
  createContext,
  SetStateAction
} from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './global'
import * as themes from './theme'
import { createPreset, ThemeWithPreset } from './presetCSS'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeWithPreset {}
}

type ThemeContext = [
  themes.ColorTypes,
  Dispatch<SetStateAction<themes.ColorTypes>>
]
export const StyleContext = createContext<ThemeContext>(['light', () => {}])

const StyleProvider = (props: PropsWithChildren<{}>) => {
  const themeType = useState<themes.ColorTypes>('light')

  return (
    <StyleContext.Provider value={themeType}>
      <ThemeProvider theme={createPreset(themes.colors[themeType[0]])}>
        <GlobalStyle />
        {props.children}
      </ThemeProvider>
    </StyleContext.Provider>
  )
}

export default StyleProvider
