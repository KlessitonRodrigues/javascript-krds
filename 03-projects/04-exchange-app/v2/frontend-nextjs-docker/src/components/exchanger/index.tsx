import React, { useContext, useEffect, useState } from 'react'

import { Store } from '../../providers/exchange/types'
import { ExchangeContext } from '../../providers/exchange'
import useTranslation from '../../hooks/userTranslation'
import InputText from '../../templates/input'
import If from '../../templates/if'

import ScalesIcon from '../../assets/svg/Scales.svg'
import DollarIcon from '../../assets/svg/Dollar.svg'
import UpdateIcon from '../../assets/svg/Updates.svg'

import * as s from './styled'
import translation from './translation'
import { currencyExchange } from './async'

type Props = {
  exchangeData: Store.Exchanger
}

function fixNumber(n = '0') {
  return Number(n).toFixed(2).toString()
}

function isGBPAndUSD(from: string, to: string) {
  return (from === 'GBP' && to === 'USD') || (from === 'USD' && to === 'GBP')
}

const Exchanger = ({ exchangeData }: Props) => {
  const [exchange, setExchange] = useState(exchangeData)
  const [, dispatch] = useContext(ExchangeContext)
  const book = useTranslation<typeof translation>(translation)

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
                  <UpdateIcon />
                </s.Rotate>
                &#160;
                <small>{book?.updateText}</small>
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
