import express from 'express'

import authControl from './controllers/authControl'

const router = express.Router()

// auth
router.post('/auth/create', authControl.createAuth)
router.post('/auth', authControl.autheticate)

export default router
