import React, { useContext } from 'react'

import { GlobalContext } from '../../providers/global'
import UserIcon from '../../assets/svg/Customer.svg'
import useTranslation from '../../hooks/userTranslation'

import translation from './translation'
import * as s from './styled'
import LangSwitch from '../../templates/langSwitch'
import ThemeSwitch from '../../templates/themeSwitch'

const Header = () => {
  const [state] = useContext(GlobalContext)
  const book = useTranslation<typeof translation>(translation)

  return (
    <s.Container>
      <s.Title>{book?.title}</s.Title>

      <s.ResponsiveRow>
        <s.User>
          <UserIcon style={{ marginRight: '0.5rem' }} />
          {state.user.email || ''}
        </s.User>

        <s.Row>
          <ThemeSwitch />
          <LangSwitch />
        </s.Row>
      </s.ResponsiveRow>
    </s.Container>
  )
}

export default Header
