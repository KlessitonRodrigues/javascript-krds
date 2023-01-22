import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import Button from '../templates/button/index'
import { theme } from '../style/theme'

describe('Button Component', () => {
  it('Should match with the previous snapshot', () => {
    const component = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Button text="test" onClick={() => ''} active leftIcon={<span />} rightIcon={<span />} />
        </ThemeProvider>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
