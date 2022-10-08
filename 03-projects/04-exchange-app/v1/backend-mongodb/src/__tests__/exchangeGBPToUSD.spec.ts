import '../config/env'
import { exchangeGBPtoUSD } from '../util/exchangeGBPToUSD'

describe('Currency Refresh', () => {
    it('Should make a exchange from GBP to USD', async () => {
        // delaying the request because the currecy api only allow one per second
        await new Promise((r) => setTimeout(r, 4000))

        const res = await exchangeGBPtoUSD()
        if (!res) return null

        const { from, to, amount, rate, result } = res

        expect(from).toBeTruthy()
        expect(to).toBeTruthy()
        expect(amount).toBeTruthy()
        expect(rate).toBeTruthy()
        expect(result).toBeTruthy()
    }, 10000)
})
