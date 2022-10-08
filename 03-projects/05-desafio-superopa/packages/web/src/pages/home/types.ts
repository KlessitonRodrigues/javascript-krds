export type State = {
  reqType: 'sortlist' | 'interlace'
  request: any
  response: string
}

export type Action =
  | { type: 'SET_REQ_EDITOR'; payload: string }
  | { type: 'SET_RES_EDITOR'; payload: string }
  | { type: 'SET_RES_EDITOR_ERROR'; payload: string }
  | { type: 'CHANGE_REQ_TYPE' }
  | { type: 'CLEAR_RESPONSE' }
