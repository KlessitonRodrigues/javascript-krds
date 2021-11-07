import React from 'react'
import styled from 'styled-components'

type Props = {
  children
}

const Container = styled.div`
  background-color: #222;
  padding: 0.5rem;
`

const Panel = ({ children }: Props) => <Container>{children}</Container>

export default Panel
