import axios from 'axios'
import React from 'react'

import { Store } from '../../providers/exchange/types'
import { APIResponse } from '../../types/apiResponse'

type WsData = { type: 'currency'; data: Store.Exchanger } | { type: 'history'; data: Store.Exchanger[] }

export async function getCurrencies(): Promise<string[]> {
  const { data } = await axios.get<APIResponse<string[]>>('/api/currency')
  if (data.success && data.data) return data.data
  return []
}

export function listenWebsocket(dispatch: React.Dispatch<Store.Action>, isMounted: boolean) {
  const ws = new WebSocket('wss://westpoint-module-one-api-krds.herokuapp.com/')

  ws.onmessage = (ev: MessageEvent) => {
    const wsData: WsData = JSON.parse(ev.data)
    if (wsData.type === 'currency') isMounted && dispatch({ type: 'WS_EVENT_CURRENCY', payload: wsData.data })
    if (wsData.type === 'history') isMounted && dispatch({ type: 'WS_EVENT_HISTORY', payload: wsData.data })
  }
}
