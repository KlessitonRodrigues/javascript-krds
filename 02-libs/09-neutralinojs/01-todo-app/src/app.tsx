import { BrowserRouter } from 'react-router-dom'

import Hearder from './components/Header'
import Body from './components/Body'
import View from './components/View'
import Navigation from './components/Navigation'
import Settings from './components/Settings'
import Tags from './components/Tags'
import Router from './pages'
import { GlobalProvider } from './hooks/useGlobalContext'
import { PaletteProvider } from './hooks/usePalette'

const App = () => (
  <GlobalProvider>
    <PaletteProvider>
      <BrowserRouter>
        <View>
          <Hearder />
          <Navigation />
          <Settings />
          <Tags />
          <Body>
            <Router />
          </Body>
        </View>
      </BrowserRouter>
    </PaletteProvider>
  </GlobalProvider>
)

export default App
