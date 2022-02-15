import React from 'react'
import axios from 'axios'

import { GlobalProvider } from './providers/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import { GlobalStyle } from './style/global'
import Home from './pages/home'

const apiURL = 'https://westpoint-module-one-api-krds.herokuapp.com'

axios.defaults.baseURL = apiURL

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  </ThemeProvider>
)

export default App
