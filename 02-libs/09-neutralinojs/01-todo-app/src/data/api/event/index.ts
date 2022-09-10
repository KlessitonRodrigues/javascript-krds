import { CalendarEvent } from './types';
import { localStorageSave, localStorageRead } from '../../util/localStorage';
import { isSameDate } from '../../util/compareDates';

const storageName = 'CalendarEvent';

const listCalendarEvents = () => {
  return localStorageRead<CalendarEvent[]>(storageName);
};

const addCalendarEvent = (event: CalendarEvent) => {
  console.log(event);
  let saved = localStorageRead<CalendarEvent[]>(storageName);

  if (!saved) saved = [];
  saved.push(event);
  localStorageSave(storageName, saved);
};

const listCalendarEventFromArray = (datesArr: string[]) => {
  const events = localStorageRead<CalendarEvent[]>(storageName);

  if (!events) return [];

  const eventsByDate = datesArr.map(dateStr => {
    const date = new Date(dateStr);
    const monthEvents = events.filter(event => isSameDate(new Date(event.iso), date));

    return {
      date: date.toISOString(),
      events: monthEvents,
    };
  });

  return eventsByDate;
};

const removeCalendarEvent = () => {};

const updateCalendarEvent = () => {};

export const CalendarEventApi = {
  list: listCalendarEvents,
  listFromArray: listCalendarEventFromArray,
  add: addCalendarEvent,
  remove: removeCalendarEvent,
  update: updateCalendarEvent,
};
