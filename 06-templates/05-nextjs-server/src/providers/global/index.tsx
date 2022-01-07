import React, { useReducer } from 'react'

import { Store } from './types'
import { initialState, reducer } from './reducer'

export const GlobalContext = React.createContext<Store.context>([initialState, () => {}])

export const GlobalProvider = (props: { children: React.ReactNode }) => (
  <GlobalContext.Provider value={useReducer(reducer, initialState)}>{props.children}</GlobalContext.Provider>
)
