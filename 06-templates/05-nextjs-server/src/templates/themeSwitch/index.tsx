import React, { useContext } from 'react'

import { StyleContext } from '../../style'
import If from '../if'
import SunIcon from '../../assets/svg/Sun.svg'
import MoonIcon from '../../assets/svg/Moon.svg'

import * as s from './styled'

const ThemeSwitch = () => {
  const [theme, setTheme] = useContext(StyleContext)

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <s.Container onClick={() => switchTheme()}>
      <If
        test={theme === 'light'}
        render={
          <s.Button>
            <SunIcon style={{ color: '#fff', marginRight: '0.5rem' }} />
            {theme}
          </s.Button>
        }
        or={
          <s.Button>
            <MoonIcon style={{ marginRight: '0.5rem' }} />
            {theme}
          </s.Button>
        }
      />
    </s.Container>
  )
}

export default ThemeSwitch
