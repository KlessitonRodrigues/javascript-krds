import WebSocket from 'ws'

import exchangeGBPtoUSD from '../util/exchangeGBPToUSD'

export default (wsServer: WebSocket.Server) => {
    const wsInterval = setInterval(() => {
        if (wsServer.clients.size > 0) {
            exchangeGBPtoUSD().then((data) => {
                if (!data) return undefined
                return wsServer.clients.forEach((client) => {
                    client.send(JSON.stringify({ type: 'currency', data }))
                })
            })
        }
    }, 120000)

    if (process.env.NODE_ENV === 'test') clearInterval(wsInterval)
}
