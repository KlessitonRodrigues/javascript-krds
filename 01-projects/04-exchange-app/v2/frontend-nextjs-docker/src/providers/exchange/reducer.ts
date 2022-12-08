import { Store } from './types'

export const initialState: Store.State = {
  exchangers: [],
  currenciesAllowed: [],
  history: []
}

export function reducer(state: Store.State, action: Store.Action): Store.State {
  const exchangers = [...state.exchangers]

  switch (action.type) {
    case 'NEW_EXCHANGER':
      exchangers.push(action.payload)
      return { ...state, exchangers }

    case 'SET_ALLOWED_CURRENCIES':
      return { ...state, currenciesAllowed: action.payload }

    case 'SET_HISTORY':
      return { ...state, history: action.payload }

    case 'CLEAR_EXCHANGERS':
      return { ...state, exchangers: [] }

    case 'WS_EVENT_CURRENCY':
      exchangers.forEach((ex) => {
        if (ex.from === 'GBP' && ex.to === 'USD') {
          ex.rate = '' + Number(action.payload.rate)
          ex.result = '' + Number(ex.amount) * Number(ex.rate)
        }
        if (ex.from === 'USD' && ex.to === 'GBP') {
          ex.rate = '' + 1 / Number(action.payload.rate)
          ex.result = '' + Number(ex.amount) * Number(ex.rate)
        }
      })
      return { ...state, exchangers }

    case 'WS_EVENT_HISTORY':
      return { ...state, history: action.payload }

    default:
      return state
  }
}
