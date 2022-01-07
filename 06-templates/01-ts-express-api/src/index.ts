import './config/env'
import postgresConfig from './config/postgres'
import expressConfig from './config/express'
import websocketConfig from './config/websocket'
import httpServerConfig from './config/httpServer'

export const pgClient = postgresConfig()
export const app = expressConfig()
export const server = httpServerConfig(app)
export const wsServer = websocketConfig(server)

if (process.env.NODE_ENV !== 'test') {
    console.log(`running...`)
    server.listen(process.env.PORT || 3003)
}
 