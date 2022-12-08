import React from 'react'

declare namespace Store {
  type Exchanger = {
    from: string
    to: string
    rate?: stirng
    amount: string
    result?: string
    createdAt?: string
  }

  type State = {
    exchangers: Exchanger[]
    currenciesAllowed: string[]
    history: Exchanger[]
  }

  type Action =
    | { type: 'NEW_EXCHANGER'; payload: Exchanger }
    | { type: 'CLEAR_EXCHANGERS' }
    | { type: 'SET_ALLOWED_CURRENCIES'; payload: string[] }
    | { type: 'SET_HISTORY'; payload: Exchanger[] }
    | { type: 'WS_EVENT_CURRENCY'; payload: Exchanger }
    | { type: 'WS_EVENT_HISTORY'; payload: Exchanger[] }

  type context = [State, React.Dispatch<Action>]
}
