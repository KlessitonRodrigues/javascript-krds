import React, { useContext, useEffect, useState } from 'react'

import { ExchangeContext } from '../../providers/exchange'
import { GlobalContext } from '../../providers/global'
import useTranslation from '../../hooks/userTranslation'
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

import * as s from './styled'
import translation from './translation'
import { getCurrencies, listenWebsocket } from './async'

const TradeBoard = () => {
  const [exchangeData, setExchangeData] = useState({ from: 'GBP', to: 'USD', amount: '' })
  const [search, setSearch] = useState<'fromCurrency' | 'toCurrency' | ''>('')
  const [state, dispatch] = useContext(ExchangeContext)
  const [globalState] = useContext(GlobalContext)

  const book = useTranslation<typeof translation>(translation)

  const ExchangesArray = state.exchangers.map((exchange, i) => <Exchanger exchangeData={exchange} key={i} />)

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
        <PanelTitle title={book?.valueToExchange || ''} />

        <s.Row>
          <s.Label>{book?.from}</s.Label>
          <Button
            leftIcon={<CashIcon />}
            rightIcon={<SortDownIcon />}
            text={exchangeData.from}
            style={{ minWidth: '6rem', fontWeight: 'bold' }}
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
        </s.Row>

        <s.RowWrapped>
          <s.Label>{book?.to}</s.Label>

          <Button
            leftIcon={<CashIcon />}
            rightIcon={<SortDownIcon />}
            text={exchangeData.to}
            style={{ minWidth: '6rem', fontWeight: 'bold', marginRight: '1rem' }}
            onClick={() => setSearch('toCurrency')}
          />
          <s.Row>
            <Button
              leftIcon={<ExchangeIcon />}
              text={book?.add || ''}
              disabled={!exchangeData.amount}
              style={{ marginLeft: '0rem' }}
              onClick={() => exchangeData.amount && dispatch({ type: 'NEW_EXCHANGER', payload: exchangeData })}
            />
            <Button
              leftIcon={<InvertIcon />}
              text={book?.invert || ''}
              onClick={() => {
                setExchangeData({ ...exchangeData, from: exchangeData.to, to: exchangeData.from })
              }}
            />
            <Button
              leftIcon={<BroomIcon />}
              text={book?.clear || ''}
              disabled={!state.exchangers.length}
              onClick={() => {
                dispatch({ type: 'CLEAR_EXCHANGERS' })
                setSearch('')
              }}
            />
          </s.Row>
        </s.RowWrapped>

        <s.Hr />

        <PanelTitle title={book?.autoCurrencyExchange || ''} />

        <s.Exchangers className="scroll">{ExchangesArray}</s.Exchangers>
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
