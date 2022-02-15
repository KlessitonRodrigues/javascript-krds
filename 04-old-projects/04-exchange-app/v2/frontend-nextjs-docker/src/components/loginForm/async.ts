import axios from 'axios'
import { APIResponse } from '../../types/apiResponse'
import { Store as ExchangeStore } from '../../providers/exchange/types'
import { Store as GlobalStore } from '../../providers/global/types'

export async function newAuthetication(user: GlobalStore.User) {
  const { data } = await axios.post<APIResponse<GlobalStore.User['email']>>('/auth/create', user)
  if (data.success) return data.data
}

export async function authetication(user: GlobalStore.User) {
  const { data } = await axios.post<APIResponse<GlobalStore.User & { history: ExchangeStore.Exchanger[] }>>(
    '/auth',
    user
  )
  if (data.success) return data.data
}
