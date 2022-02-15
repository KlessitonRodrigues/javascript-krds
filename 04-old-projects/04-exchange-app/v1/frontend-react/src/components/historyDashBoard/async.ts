import axios from 'axios'
import { APIResponse } from '../../types/apiResponse'
import { Store } from '../../providers/exchange/types'

export async function getHistory(): Promise<Store.Exchanger[]> {
  const { data } = await axios.get<APIResponse<Store.Exchanger[]>>('/api/history')
  if (data.success && data.data) return data.data
  return []
}
