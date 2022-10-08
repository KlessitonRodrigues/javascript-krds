import React, { useContext, useEffect, useState } from 'react'

import Button from '../../templates/button'
import Panel from '../../templates/panel'
import PanelTitle from '../../templates/panelTitle'
import InputText from '../../templates/input'
import Exchanger from '../exchanger'
import Search from '../../templates/search'

import ExchangeIcon from '../../assets/svg/Exchange.svg'
import CashIcon from '../../assets/svg/Cash.svg'
import SortDownIcon from '../../assets/svg/SortDown.svg'
import BroomIcon from '../../assets/svg/Broom.svg'
import InvertIcon from '../../assets/svg/Invert.svg'
import { ExchangeContext } from '../../providers/exchange'

import * as s from './styled'
import { getCurrencies, listenWebsocket } from './async'
import { GlobalContext } from '../../providers/global'

const TradeBoard = () => {
  const [exchangeData, setExchangeData] = useState({ from: 'GBP', to: 'USD', amount: '' })
  const [search, setSearch] = useState<'fromCurrency' | 'toCurrency' | ''>('')
  const [state, dispatch] = useContext(ExchangeContext)
  const [globalState] = useContext(GlobalContext)

  useEffect(() => {
    let isMounted = true
    if (globalState.isLogged) {
      listenWebsocket(dispatch, isMounted)
      getCurrencies().then((payload) => isMounted && dispatch({ type: 'SET_ALLOWED_CURRENCIES', payload }))
    }
    return () => {
      isMounted = false
    }
  }, [globalState.isLogged])

  return (
    <s.Container>
      <Panel>
        <PanelTitle title="Value to Exchange" />
        <s.ValueField>
          <s.Label>From</s.Label>
          <Button
            leftIcon={<CashIcon />}
            rightIcon={<SortDownIcon />}
            text={exchangeData.from}
            style={{ minWidth: '6rem' }}
            onClick={() => setSearch('fromCurrency')}
          />
          <s.InputContainer>
            <InputText
              type="number"
              value={exchangeData.amount}
              placeholder="0"
              style={{ marginLeft: '0.5rem', fontSize: '2rem' }}
              onChange={(amount) => amount.length <= 9 && setExchangeData({ ...exchangeData, amount })}
            />
          </s.InputContainer>
        </s.ValueField>
        <s.ValueField>
          <s.Label>To</s.Label>
          <Button
            leftIcon={<CashIcon />}
            rightIcon={<SortDownIcon />}
            text={exchangeData.to}
            style={{ minWidth: '6rem' }}
            onClick={() => setSearch('toCurrency')}
          />
          <Button
            leftIcon={<ExchangeIcon />}
            text="Add"
            disabled={!exchangeData.amount}
            style={{ marginLeft: '1rem' }}
            onClick={() => exchangeData.amount && dispatch({ type: 'NEW_EXCHANGER', payload: exchangeData })}
          />
          <Button
            leftIcon={<InvertIcon />}
            text="Invert"
            onClick={() => {
              setExchangeData({ ...exchangeData, from: exchangeData.to, to: exchangeData.from })
            }}
          />
          <Button
            leftIcon={<BroomIcon />}
            text="Clear"
            disabled={!state.exchangers.length}
            onClick={() => {
              dispatch({ type: 'CLEAR_EXCHANGERS' })
              setSearch('')
            }}
          />
        </s.ValueField>
        <s.Hr />
        <PanelTitle title="Auto Currency Exchangers" />
        <s.Exchangers className="scroll">
          {state.exchangers.map((exchange, i) => (
            <Exchanger exchangeData={exchange} key={i} />
          ))}
        </s.Exchangers>
      </Panel>
      <Search
        show={!!search}
        exception={search === 'fromCurrency' ? exchangeData.from : exchangeData.to}
        options={state.currenciesAllowed}
        closeBtn={() => setSearch('')}
        onSelect={(op) => {
          setSearch('')
          search === 'fromCurrency'
            ? setExchangeData({ ...exchangeData, from: op })
            : setExchangeData({ ...exchangeData, to: op })
        }}
      />
    </s.Container>
  )
}

export default TradeBoard
