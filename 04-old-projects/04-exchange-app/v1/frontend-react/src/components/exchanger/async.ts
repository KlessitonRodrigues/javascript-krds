import axios from 'axios'
import { APIResponse } from '../../types/apiResponse'
import { Store } from '../../providers/exchange/types'

export async function currencyExchange(ct: Store.Exchanger) {
  const { data } = await axios.post<APIResponse<Store.Exchanger & { history: Store.Exchanger[] }>>('/api/currency', ct)
  if (data.success) return data.data
}
