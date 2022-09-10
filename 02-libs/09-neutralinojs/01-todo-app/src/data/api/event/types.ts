export type CalendarEventStatus = {
  index: number;
  status: 'todo' | 'doing' | 'done';
};

export type CalendarEvent = {
  id: string;
  name: string;
  description: string;
  time: string;
  date: string;
  iso: string;
  duration: number;
  repeat?: 'day' | 'week' | 'month' | 'year';
  repeatAmount?: number;
  repeatDates?: string[];
  status: CalendarEventStatus[];
  tags: [];
};
