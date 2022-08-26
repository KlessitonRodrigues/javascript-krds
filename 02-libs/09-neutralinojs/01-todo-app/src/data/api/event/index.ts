import { CalendarEvent } from './types';

const storageName = 'CalendarEvent';

const saveOnLocal = (data: CalendarEvent[]) => {
  localStorage.setItem(storageName, JSON.stringify(data));
};

const readLocal = (): CalendarEvent[] | null => {
  const local = localStorage.getItem(storageName);
  if (local === null) return [];
  return JSON.parse(local);
};

export const calendarEvents = () => {
  return readLocal();
};

export const addCalendarEvent = (event: CalendarEvent) => {
  const data = readLocal();

  if (!data) return saveOnLocal([event]);

  data.push(event);

  saveOnLocal(data);
};

export const removeCalendarEvent = () => {};

export const updateCalendarEvent = () => {};
