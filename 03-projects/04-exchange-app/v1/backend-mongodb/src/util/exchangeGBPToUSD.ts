import axios from 'axios'

const headers = {
    'x-rapidapi-host': process.env.CURRENCY_API_HOST || '',
    'x-rapidapi-key': process.env.CURRENCY_API_KEY || '',
}

const apiUrl = `https://${headers['x-rapidapi-host']}/currency`

export async function exchangeGBPtoUSD() {
    const params = {
        from: 'GBP',
        to: 'USD',
        amount: '1',
    }

    const { status, data } = await axios.get(`${apiUrl}/convert`, { headers, params })
    if (status !== 200) return undefined

    return {
        refreshed_At: new Date().toLocaleString('en'),
        from: data.base_currency_code,
        to: Object.keys(data.rates)[0],
        amount: data.amount,
        rate: data.rates[params.to].rate,
        result: data.rates[params.to].rate_for_amount,
    }
}
