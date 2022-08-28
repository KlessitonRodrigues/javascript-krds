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

const removeCalendarEvent = () => {};

const updateCalendarEvent = () => {};

export const CalendarEventApi = {
  list: listCalendarEvents,
  add: addCalendarEvent,
  remove: removeCalendarEvent,
  update: updateCalendarEvent,
};
