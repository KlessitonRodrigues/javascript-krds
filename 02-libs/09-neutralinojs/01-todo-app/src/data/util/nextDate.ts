import { CalendarTodo } from '../api/event/types';

type Periods = 'day' | 'week' | 'month' | 'year';

export const nextDate = (dateStr: string, period: Periods, amount: number) => {
  const date = new Date(dateStr);
  const setTime = {
    day: (num: number) => date.setDate(date.getDate() + num),
    week: (num: number) => date.setDate(date.getDate() + 7 * num),
    month: (num: number) => date.setMonth(date.getMonth() + num),
    year: (num: number) => date.setFullYear(date.getFullYear() + num),
  };

  setTime[period](amount);
  return date.toISOString();
};

export const repeatedDates = (date: string, period: Periods, amount: number, parentId: string) => {
  const events: CalendarTodo[] = [];
  const arr = new Array(amount).fill(1);

  arr.forEach((item, i) => {
    events.push({
      id: parentId,
      index: i,
      date: nextDate(date, period, i),
      status: 'todo',
    });
  });

  return events;
};
