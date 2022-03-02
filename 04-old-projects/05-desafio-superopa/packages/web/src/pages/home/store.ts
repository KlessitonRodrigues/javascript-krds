import { Action, State } from './types'

const sortObj = { classN: [100, 5, 80, 1], classS: ['Z', 'b', 'H'] }
const interlaceObj = { intervalA: [20, 50], intervalB: [30, 60] }

export const initialState: State = {
  reqType: 'sortlist',
  request: JSON.stringify(sortObj),
  response: ''
}

export function reducer(state: State, action: Action) {
  let { response, request, reqType } = state

  switch (action.type) {
    case 'SET_REQ_EDITOR':
      return { ...state, request: action.payload }

    case 'SET_RES_EDITOR':
      response += '\n' + action.payload
      return { ...state, response }

    case 'SET_RES_EDITOR_ERROR':
      response += `\n # error \n ${action.payload}`
      return { ...state, response }

    case 'CHANGE_REQ_TYPE':
      if (reqType === 'sortlist') {
        reqType = 'interlace'
        request = JSON.stringify(interlaceObj)
      } else {
        reqType = 'sortlist'
        request = JSON.stringify(sortObj)
      }
      return { ...state, reqType, request }

    case 'CLEAR_RESPONSE':
      return { ...state, response: '' }

    default:
      return state
  }
}
