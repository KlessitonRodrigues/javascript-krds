import React from 'react'

import { GlobalStyle, ThemeProv } from './styles'
import Home from './pages/home'

const App = () => (
  <div>
    <ThemeProv>
      <GlobalStyle />
      <Home />
    </ThemeProv>
  </div>
)

export default App
