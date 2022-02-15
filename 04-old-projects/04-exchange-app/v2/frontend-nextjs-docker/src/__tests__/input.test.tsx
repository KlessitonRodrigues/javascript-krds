import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import Input from '../templates/input'
import { defaultTheme } from '../style/theme'

describe('Input Component', () => {
  it('Should match with the previous snapshot', () => {
    const component = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Input placeholder="test" type="text" value="test" onChange={() => 'test'} readonly />
        </ThemeProvider>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
