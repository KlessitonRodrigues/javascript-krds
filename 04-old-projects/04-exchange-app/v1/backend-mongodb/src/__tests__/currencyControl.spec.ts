import server from './__mocks__/server'

describe('Currency Control', () => {
    const testUser = {
        email: process.env.TEST_USER_EMAIL,
        password: process.env.TEST_USER_PASSWORD,
    }

    beforeAll(async () => {
        const res = await server.post('/auth').send(testUser)
        const token = res.body.data.accessToken
        server.set({ 'x-access-token': token })
    })

    it('Should fail on unauthorized access', async () => {
        const res = await server.get('/api/currency').set({ 'x-access-token': '' })
        expect(res.body).toEqual({ success: false, msg: "Token isn't provider!" })
    })

    it('Should return a list of currencies', async () => {
        const res = await server.get('/api/currency')
        expect(res.body.success).toBeTruthy()
        expect(res.body.data).toBeInstanceOf(Array)
    })

    it('Should fail on make a currency exchange', async () => {
        const exchange = { from: '', to: '', amount: '' }

        const res = await server.post('/api/currency').send(exchange)

        expect(res.body).toEqual({ success: false, msg: 'request keys are: from, to, amount' })
    })

    it('Should make a currency exchange', async () => {
        // delaying the request because the currecy api only allow one per second
        await new Promise((r) => setTimeout(r, 2000))

        const exchange = { from: 'GBP', to: 'USD', amount: '100' }

        const res = await server.post('/api/currency').send(exchange)

        const { from, to, amount, rate, result, history } = res.body.data

        expect(res.body.success).toBeTruthy()
        expect(from).toBe(exchange.from)
        expect(to).toBe(exchange.to)
        expect(amount).toBeTruthy()
        expect(rate).toBeTruthy()
        expect(result).toBeTruthy()
        expect(history).toBeInstanceOf(Array)
    })
})
