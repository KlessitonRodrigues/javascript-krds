import React from 'react'

import Header from '../../components/header'
import HistoryDashBoard from '../../components/historyDashBoard'
import TradeDashBoard from '../../components/tradeDashBoard'
import LoginForm from '../../components/loginForm'
import { ExchangeProvider } from '../../providers/exchange'

import * as s from './styled'

const Home = () => {
  return (
    <s.Container>
      <ExchangeProvider>
        <LoginForm />
        <Header text="Currency Converter" />
        <s.flex>
          <TradeDashBoard />
          <HistoryDashBoard />
        </s.flex>
      </ExchangeProvider>
    </s.Container>
  )
}

export default Home
