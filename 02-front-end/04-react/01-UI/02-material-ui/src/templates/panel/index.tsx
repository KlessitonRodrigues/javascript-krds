import React from 'react'

import { Container, Title, Content } from './styled'

type Props = {
  title: string
  children: React.ReactNode
}

const Panel = ({ children, title }: Props) => (
  <Container>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Container>
)

export default Panel
