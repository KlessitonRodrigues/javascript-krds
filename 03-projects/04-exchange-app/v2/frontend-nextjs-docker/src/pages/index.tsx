import type { NextPage } from 'next'
import styled from 'styled-components'

import Header from '../components/header'
import HistoryDashBoard from '../components/historyDashBoard'
import TradeDashBoard from '../components/tradeDashBoard'
import LoginForm from '../components/loginForm'
import { ExchangeProvider } from '../providers/exchange'

const Home: NextPage = () => (
  <Container>
    <ExchangeProvider>
      <LoginForm />
      <Header />
      <Flex>
        <TradeDashBoard />
        <HistoryDashBoard />
      </Flex>
    </ExchangeProvider>
  </Container>
)

export default Home

export const Container = styled.div`
  margin: auto 0.5rem;
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
