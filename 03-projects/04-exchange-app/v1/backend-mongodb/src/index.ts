import './config/env'
import mongooseConfig from './config/mongoose'
import expressConfig from './config/express'
import websocketConfig from './config/websocket'
import httpServerConfig from './config/httpServer'

const mongoose = mongooseConfig()
export const app = expressConfig()
export const server = httpServerConfig(app)
export const wsServer = websocketConfig(server)

if (process.env.NODE_ENV !== 'test') server.listen(process.env.PORT || 3003)

process.on('beforeExit', () => {
    mongoose.then((db) => db.connection.close)
})
