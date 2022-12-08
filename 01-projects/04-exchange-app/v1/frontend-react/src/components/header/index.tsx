import React, { useContext } from 'react'

import { GlobalContext } from '../../providers/global'
import UserIcon from '../../assets/svg/Customer.svg'

import * as s from './styled'

type Props = {
  text: string
}

const Header = ({ text }: Props) => {
  const [state] = useContext(GlobalContext)
  return (
    <s.Container>
      {text}
      <s.User>
        {state.user.email || ''}
        <UserIcon style={{ marginLeft: '0.25rem' }} />
      </s.User>
    </s.Container>
  )
}
export default Header
