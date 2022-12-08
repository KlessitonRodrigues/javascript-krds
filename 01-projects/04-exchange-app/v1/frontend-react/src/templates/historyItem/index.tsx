import React from 'react'

import DollarTrade from '../../assets/svg/Dollar.svg'
import DepositIcon from '../../assets/svg/Deposit.svg'
import WithdrawalIcon from '../../assets/svg/Withdrawal.svg'
import RightArrowIcon from '../../assets/svg/RightArrow.svg'

import { Store } from '../../providers/exchange/types'
import * as s from './styled'

type Props = {
  exchange: Store.Exchanger
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleString('en', {
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
}

const fixNumber = (n: string = '0') => Number(n).toFixed(2).toString()

const HistoryItem = ({ exchange }: Props) => (
  <s.Container>
    <s.Date>{(exchange.createdAt && formatDate(exchange.createdAt)) || ''}</s.Date>
    <s.Grid>
      <WithdrawalIcon />
      <s.Currency>
        {exchange.from || ''}
        <span>{fixNumber(exchange.amount)}</span>
      </s.Currency>
      <s.Rate>
        <s.RateNumber>
          <DollarTrade />
          {fixNumber(exchange.rate)}
        </s.RateNumber>
        <RightArrowIcon />
      </s.Rate>
      <s.Currency>
        {exchange.to || ''}
        <span>{fixNumber(exchange.result)}</span>
      </s.Currency>
      <DepositIcon />
    </s.Grid>
  </s.Container>
)

export default HistoryItem
