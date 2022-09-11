type Periods = 'day' | 'week' | 'month' | 'year';

export const nextDate = (dateStr: string, period: Periods, amount: number) => {
  const date = new Date(dateStr);
  const setTime = {
    day: (num: number) => date.setDate(date.getDate() + num),
    week: (num: number) => date.setDate(date.getDate() + 7 * num),
    month: (num: number) => date.setMonth(date.getMonth() + num),
    year: (num: number) => date.setFullYear(date.getFullYear() + num),
  };

  console.log(date);
  setTime[period](amount);
  console.log(date);
  return date.toISOString();
};

export const repeatedDates = (date: string, period: Periods, amount: number) => {
  return new Array(amount).fill(1).map((item, i) => nextDate(date, period, amount * (i + 1)));
};
