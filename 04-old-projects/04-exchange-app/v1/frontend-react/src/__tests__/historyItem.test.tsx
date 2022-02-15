import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import HistotyItem from '../templates/historyItem'
import { theme } from '../style/theme'

const exchange = {
  amount: '1000',
  from: 'GBP',
  to: 'USD',
  createdAt: 'Dec 20, 7:34 PM',
  rate: '1.30',
  result: '1300'
}

describe('HistoryItem Component', () => {
  it('Should match with the previous snapshot', () => {
    const component = renderer
      .create(
        <ThemeProvider theme={theme}>
          <HistotyItem exchange={exchange} />
        </ThemeProvider>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
