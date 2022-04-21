import React from 'react'

import * as s from './styled'

type Props = {
  text: string
  leftIcon?: any
  rightIcon?: any
  active?: boolean
  disabled?: boolean
  style?: React.CSSProperties
  onClick: () => void
}

const Button = ({ text, leftIcon, rightIcon, active = false, disabled = false, style = {}, onClick }: Props) => (
  <s.Container active={active} onClick={onClick} disabled={disabled} style={style}>
    <s.IconContainer>{leftIcon || ''}</s.IconContainer>
    <s.Text>{text}</s.Text>
    <s.IconContainer>{rightIcon || ''}</s.IconContainer>
  </s.Container>
)

export default Button
