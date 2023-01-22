import express from 'express'
import authToken from '../middlewares/authToken'
import cors from '../middlewares/cors'
import router from '../routes'

export default (): express.Application => {
    const app = express()

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(cors)
    app.use('/api', authToken)
    app.use(router)

    return app
}
