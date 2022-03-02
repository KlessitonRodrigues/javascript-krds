import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    
    body {
        font-family: sans-serif;
        color: #333;
    }

    html {
        font-size: 15px;
        @media(min-width: 768px ){
            font-size: 15.5px;
        }
        @media(min-width: 1024px ){
            font-size: 16px;
        }
    }
`

export const theme = {
  colors: {
    primary: '#5C5CD6',
    onPrimary: '#f0f0f0',
    background: '#F5F5F5',
    surface: '#E5E5E5'
  }
}

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const ThemeProv = (props: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
