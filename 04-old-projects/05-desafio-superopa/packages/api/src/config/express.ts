import express from 'express'
import cors from '../middlewares/cors'
import routes from '../routes'

export default (port = 3000): express.Application => {
  const app = express()

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(cors)
  app.use(routes)

  app.listen(port, () => console.log('port: ' + port))

  return app
}
