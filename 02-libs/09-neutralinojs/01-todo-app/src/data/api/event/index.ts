import { CalendarEvent } from './types';
import { localStorageSave, localStorageRead } from '../../util/localStorage';

const storageName = 'CalendarEvent';

const listCalendarEvents = () => {
  return localStorageRead<CalendarEvent[]>(storageName);
};

const addCalendarEvent = (event: CalendarEvent) => {
  let saved = localStorageRead<CalendarEvent[]>(storageName);

  if (!saved) saved = [];
  saved.push(event);
  localStorageSave(storageName, saved);
};

const listCalendarEventsByMonth = (dateStr: string): CalendarEvent[] => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();

  const dates = localStorageRead<CalendarEvent[]>(storageName);
  if (!dates) return [];
};

const removeCalendarEvent = () => {};

const updateCalendarEvent = () => {};

export const CalendarEventApi = {
  list: listCalendarEvents,
  listByMonth: listCalendarEventsByMonth,
  add: addCalendarEvent,
  remove: removeCalendarEvent,
  update: updateCalendarEvent,
};
