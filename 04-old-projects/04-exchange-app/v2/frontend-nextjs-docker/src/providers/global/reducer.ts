import axios from 'axios'

import { Store } from './types'

export const initialState: Store.State = {
  user: {
    email: '',
    accessToken: ''
  },
  isLogged: false,
  lang: 'en-us'
}

export function reducer(state: Store.State, action: Store.Action): Store.State {
  switch (action.type) {
    case 'SET_USER':
      // @ts-ignore
      axios.defaults.headers.common['x-access-token'] = action.payload.accessToken
      return { ...state, user: action.payload, isLogged: true }

    case 'SET_LANG':
      return { ...state, lang: action.payload }

    default:
      return state
  }
}
