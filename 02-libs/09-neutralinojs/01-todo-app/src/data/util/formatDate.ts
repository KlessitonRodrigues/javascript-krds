type DateObj = {
  date: {
    yy: number
    mm: number
    dd: number
    weekDay: number
  }
  time: {
    hh: number
    mm: number
    ss: number
    tzOffset: number
  }
  dateStr: {
    yy: string
    mm: string
    dd: string
    weekDay: string
    fullDate: string
  }
  timeStr: {
    hh: string
    mm: string
    ss: string
    fullTime: string
  }
  totalTime: number
}

export const dateStrToObj = (dateStr: string): DateObj => {
  const date = new Date(dateStr)
  return {
    date: {
      yy: date.getFullYear(),
      mm: date.getMonth(),
      dd: date.getDate(),
      weekDay: date.getDay(),
    },
    time: {
      hh: date.getHours(),
      mm: date.getMinutes(),
      ss: date.getSeconds(),
      tzOffset: date.getTimezoneOffset(),
    },
    dateStr: {
      yy: date.toLocaleDateString('pt-br', { year: 'numeric' }),
      mm: date.toLocaleDateString('pt-br', { month: 'long' }),
      dd: date.toLocaleDateString('pt-br', { year: '2-digit' }),
      weekDay: date.toLocaleDateString('pt-br', { weekday: 'long' }),
      fullDate: date.toLocaleDateString('pt-br'),
    },
    timeStr: {
      hh: date.toLocaleDateString('pt-br', { hour: '2-digit', hour12: true }),
      mm: date.toLocaleDateString('pt-br', { minute: '2-digit' }),
      ss: date.toLocaleDateString('pt-br', { second: '2-digit' }),
      fullTime: date.toLocaleTimeString('pt-br'),
    },
    totalTime: date.getTime(),
  }
}

export const objToDateStr = (ISOobj: DateObj, setTime?: boolean): string => {
  const date = new Date()

  date.setFullYear(ISOobj.date.yy)
  date.setMonth(ISOobj.date.mm)
  date.setDate(ISOobj.date.dd)
  date.setHours(ISOobj.time.hh)
  date.setMinutes(ISOobj.time.mm)
  date.setSeconds(ISOobj.time.ss)
  setTime && date.setTime(ISOobj.totalTime)

  return date.toISOString()
}
