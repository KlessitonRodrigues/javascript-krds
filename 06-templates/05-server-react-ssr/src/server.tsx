import path from 'path'
import fs from 'fs'

import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'

import ReactApp from './app'

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(process.env.PORT || 3000)

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<ReactApp />)
  const indexFile = path.resolve('./index.html')

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    )
  })
})
