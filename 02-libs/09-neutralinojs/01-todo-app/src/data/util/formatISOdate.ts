type ISOObj = {
  date: {
    yy: number
    mm: number
    dd: number
  }
  time: {
    hh: number
    mm: number
    ss: number
  }
  dateStr: {
    yy: string
    mm: string
    dd: string
    weekDay: string
  }
  timeStr: {
    hh: string
    mm: string
    ss: string
  }
  weekDay: number
  totalTime: number
}

export const ISOtoObj = (dateStr: string): ISOObj => {
  const date = new Date(dateStr)
  return {
    date: {
      yy: date.getFullYear(),
      mm: date.getMonth(),
      dd: date.getDate(),
    },
    time: {
      hh: date.getHours(),
      mm: date.getMinutes(),
      ss: date.getSeconds(),
    },
    dateStr: {
      yy: date.toLocaleDateString('pt-br', { year: '2-digit' }),
      mm: date.toLocaleDateString('pt-br', { month: 'long' }),
      dd: date.toLocaleDateString('pt-br', { year: '2-digit' }),
      weekDay: date.toLocaleDateString('pt-br', { weekday: 'long' }),
    },
    timeStr: {
      hh: date.toLocaleDateString('pt-br', { hour: '2-digit', hour12: true }),
      mm: date.toLocaleDateString('pt-br', { minute: '2-digit' }),
      ss: date.toLocaleDateString('pt-br', { second: '2-digit' }),
    },
    weekDay: date.getDay(),
    totalTime: date.getTime(),
  }
}

export const ObjToISO = (ISOobj: ISOObj, setTime: boolean): string => {
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
