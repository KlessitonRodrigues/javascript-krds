import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import Search from '../templates/search'
import { theme } from '../style/theme'

const options = ['option1', 'option2', 'option3', 'option4', 'option5']

describe('Search Component', () => {
  it('Should match with the previous snapshot', () => {
    const component = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Search show closeBtn={() => 'test'} onSelect={(v, i) => 'test ' + v + i} options={options} />
        </ThemeProvider>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
