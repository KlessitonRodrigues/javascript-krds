import express from 'express'

import authControl from './controllers/authControl'
import currencyControl from './controllers/currencyControl'

const router = express.Router()

// auth
router.post('/auth/create', authControl.createAuth)
router.post('/auth', authControl.autheticate)

// currency
router.get('/api/currency/:lang?', currencyControl.availableCurrencies)
router.post('/api/currency/:lang?', currencyControl.currencyConverter)

export default router
