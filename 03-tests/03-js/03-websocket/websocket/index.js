const http = require('http')
const express = require('express')
const cors = require('cors')
const Websocket = require('ws')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.get('/t', (req, res) => res.send('ok'))

// starting http server
const server = http.createServer(app)

// starting websocket server
const wsServer = new Websocket.Server({ server })

wsServer.on('connection', wsClient => {
  //  wsClient.on('message', msg => {
  //    console.log('received:', + msg)
  //    wsClient.send('hello, you sent: ' + msg)
  //  })

  wsClient.on('message', msg => {
    wsServer.clients.forEach(client => {
      if (client !== wsClient) {
        client.send('Broadcast:' + msg)
      }
    })
  })

  wsClient.send('connection with success!')

  setInterval(
    () => wsServer.clients.forEach(client => client.send('ping...')),
    3000
  )
})

server.listen(3003, () => console.log(server.address().port))
