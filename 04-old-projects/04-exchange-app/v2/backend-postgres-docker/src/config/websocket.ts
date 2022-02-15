import http from 'http'
import Websocket from 'ws'

import currencyRefresh from '../websocket/currencyRefresh'

export default (server: http.Server) => {
    const wsServer = new Websocket.Server({ server })

    wsServer.on('connection', (wsClient) => {
        wsClient.send('connection successfully')
    })

    function sendToAll(data: any) {
        if (wsServer.clients.size > 0)
            wsServer.clients.forEach((client) => client.send(JSON.stringify(data)))
    }

    const customWSS = { ...wsServer, sendToAll }

    currencyRefresh(wsServer)

    return customWSS
}
