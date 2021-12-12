const websocket = new WebSocket('ws://localhost:3003')

// @ts-ignore
websocket.onopen = (ws: WebSocket, ev: Event): any => {
  websocket.send('test msg')
}

websocket.onmessage = (ev: MessageEvent) => {
  console.log(ev.data)
}
