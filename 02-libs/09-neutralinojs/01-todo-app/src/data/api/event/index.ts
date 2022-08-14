import { CalendarEvent } from './types';

const storageName = 'CalendarEvent';

const saveOnLocal = (data: CalendarEvent) => {
  localStorage.setItem(storageName, JSON.stringify(data));
};

const readLocal = (): CalendarEvent | null => {
  const local = localStorage.getItem(storageName);
  if (local === null) return local;
  return JSON.parse(local);
};

export const calendarEvents = () => {};

export const addCalendarEvent = () => {};

export const removeCalendarEvent = () => {};

export const updateCalendarEvent = () => {};
