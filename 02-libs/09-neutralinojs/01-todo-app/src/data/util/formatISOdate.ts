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
  week: number
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
    week: date.getDay(),
    totalTime: date.getTime(),
  }
}

export const ObjToISO = (ISOobj: ISOObj): string => {
  const date = new Date()

  date.setFullYear(ISOobj.date.yy)
  date.setMonth(ISOobj.date.mm)
  date.setDate(ISOobj.date.dd)
  date.setHours(ISOobj.time.hh)
  date.setMinutes(ISOobj.time.mm)
  date.setSeconds(ISOobj.time.ss)
  date.setTime(ISOobj.totalTime)

  return date.toISOString()
}
