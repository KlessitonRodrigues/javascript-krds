import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import HistotyDashboard from '../components/historyDashBoard'
import { defaultTheme } from '../style/theme'

describe('HistoryDashboard Component', () => {
  it('Should match with the previous snapshot', () => {
    const component = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <HistotyDashboard />
        </ThemeProvider>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
