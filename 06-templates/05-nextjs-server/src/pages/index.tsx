import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => <Container>HELLO</Container>

export default Home

export const Container = styled.div`
  margin: auto 0.5rem;
  height: 100%;
  width: 100%;
  @media (min-width: ${(p) => p.theme.screens.lg}) {
    margin: auto;
    max-width: 80rem;
  }
`

export const Flex = styled.div`
  display: grid;
  row-gap: 0.5rem;
  @media (min-width: ${(p) => p.theme.screens.lg}) {
    grid-template-columns: 2fr 1fr;
    column-gap: 0.5rem;
  }
`
