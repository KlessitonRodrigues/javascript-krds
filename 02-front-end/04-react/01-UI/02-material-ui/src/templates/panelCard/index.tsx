import React from 'react'
import styled from 'styled-components'

type Props = {
  children
}

const Container = styled.div`
  padding: 0.5rem;
`

const PamelCard = ({ children }: Props) => <Container>{children}</Container>
