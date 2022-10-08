import React, { useReducer } from 'react'

import { Store } from './types'
import { initialState, reducer } from './reducer'

export const ExchangeContext = React.createContext<Store.context>([initialState, () => {}])

export const ExchangeProvider = (props: { children: React.ReactNode }) => (
  <ExchangeContext.Provider value={useReducer(reducer, initialState)}>
    {props.children}
  </ExchangeContext.Provider>
)
