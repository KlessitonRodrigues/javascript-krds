import express from 'express'

import sortListPost from './routes/api/sortList/post'
import interlacePost from './routes/api/interlace/post'

const routes = express.Router()

routes.post('/api/sortlist', sortListPost)

routes.post('/api/interlace', interlacePost)

export default routes
