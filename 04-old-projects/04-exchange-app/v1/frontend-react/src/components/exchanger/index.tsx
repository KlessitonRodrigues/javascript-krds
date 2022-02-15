import React, { useContext, useEffect, useState } from 'react'

import InputText from '../../templates/input'
import { Store } from '../../providers/exchange/types'

import ScalesIcon from '../../assets/svg/Scales.svg'
import DollarIcon from '../../assets/svg/Dollar.svg'
import ResetIcon from '../../assets/svg/Reset.svg'

import * as s from './styled'
import { currencyExchange } from './async'
import If from '../../templates/if'
import { ExchangeContext } from '../../providers/exchange'

type Props = {
  exchangeData: Store.Exchanger
}

const fixNumber = (n = '0') => Number(n).toFixed(2).toString()
const isGBPAndUSD = (from: string, to: string) => (from === 'GBP' && to === 'USD') || (from === 'USD' && to === 'GBP')

const Exchanger = ({ exchangeData }: Props) => {
  const [exchange, setExchange] = useState(exchangeData)
  const [state, dispatch] = useContext(ExchangeContext)

  useEffect(() => {
    currencyExchange(exchange).then((data) => {
      if (data) {
        setExchange({ ...exchange, ...data })
        dispatch({ type: 'SET_HISTORY', payload: data.history })
      }
    })
  }, [])

  useEffect(() => {
    setExchange(exchangeData)
  }, [exchangeData.result])

  return (
    <s.Container>
      <s.Row>
        <s.Row>
          <ScalesIcon />
          <s.NumberField>{fixNumber(exchange.amount)}</s.NumberField>
          <s.CurrencyField>{exchange.from || ''}</s.CurrencyField>
        </s.Row>
        <s.Row>
          <DollarIcon />
          <s.NumberField>{fixNumber(exchange.rate)}</s.NumberField>
          <If
            test={isGBPAndUSD(exchange.from, exchange.to)}
            render={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <s.Rotate>
                  <ResetIcon />
                </s.Rotate>
                &#160;
                <small>updating</small>
              </span>
            }
          />
        </s.Row>
      </s.Row>
      <s.Row>
        <InputText value={fixNumber(exchange.result)} />
        <s.CurrencyField>{exchange?.to || ''}</s.CurrencyField>
      </s.Row>
    </s.Container>
  )
}

export default Exchanger
