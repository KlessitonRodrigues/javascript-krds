import axios from 'axios'

import { Store } from './types'

export const initialState: Store.State = {
  user: {
    email: '',
    accessToken: ''
  },
  isLogged: false
}

export function reducer(state: Store.State, action: Store.Action): Store.State {
  switch (action.type) {
    case 'SET_USER':
      console.log(action.payload.accessToken)
      // @ts-ignore
      axios.defaults.headers.common['x-access-token'] = action.payload.accessToken
      console.log(axios.defaults)

      return { ...state, user: action.payload, isLogged: true }
    default:
      return state
  }
}
