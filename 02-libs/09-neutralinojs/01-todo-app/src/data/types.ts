export type TaskDate = {
  id: string
  nome: string
  status: 'todo' | 'doing' | 'done'
  tags: string[]
  time: {
    startDate: string
    endDate: string
  }
  repeat?: {
    timeRule: 'minute' | 'hour' | 'day' | 'month' | 'year'
    time: number
  }
}
