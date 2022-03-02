import React from 'react'

import { Container } from './styled'

type Props = {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: Props) => (
  <Container onClick={onClick}>{text}</Container>
)

export default Button
