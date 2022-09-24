export type CalendarTodo = {
  id: string;
  index: number;
  date: string;
  status: 'todo' | 'doing' | 'done' | 'canceled';
  started?: string;
  ended?: string;
};

export type CalendarEvent = {
  id: string;
  name: string;
  description: string;
  time: string;
  date: string;
  dateISOEnd: string;
  dateISO: string;
  duration: number;
  repeat?: 'day' | 'week' | 'month' | 'year';
  repeatAmount?: number;
  repeatDates?: CalendarTodo[];
  tags: [];
};
