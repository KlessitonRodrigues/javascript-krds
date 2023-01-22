/* eslint-disable */

declare namespace CurencyAPI {
    type ExchangeCurrency = {
        CAD: {
            currency_name: string
            rate: string
            rate_for_amount: string
        }
    }
    type Exchange = {
        base_currency_code: string
        base_currency_name: string
        amount: string
        updated_date: string
        rates: any
        status: string
    }
}
