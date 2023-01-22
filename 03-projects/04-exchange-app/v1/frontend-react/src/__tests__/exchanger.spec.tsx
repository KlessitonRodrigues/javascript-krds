import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import Exchanger from '../components/exchanger'
import { theme } from '../style/theme'

const ExchangeData = {
  from: 'USD',
  to: 'GBP',
  amount: '1000'
}

describe('Exchanger Component', () => {
  it('Should match with the previous snapshot', () => {
    const component = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Exchanger exchangeData={ExchangeData} />
        </ThemeProvider>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
