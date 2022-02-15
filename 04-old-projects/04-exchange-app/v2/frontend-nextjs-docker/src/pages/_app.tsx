import axios from 'axios'
import type { AppProps } from 'next/app'

import StyleProvider from '../style'
import { GlobalProvider } from '../providers/global'

const apiURL = 'https://westpoint-module-two-api.herokuapp.com'

axios.defaults.baseURL = apiURL

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <StyleProvider>
        <Component {...pageProps} />
      </StyleProvider>
    </GlobalProvider>
  )
}

export default MyApp
