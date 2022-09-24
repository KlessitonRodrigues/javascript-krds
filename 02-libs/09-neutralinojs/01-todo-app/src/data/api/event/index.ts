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

  const allEventsDates = events.map(event => event.repeatDates).flat();

  const eventsByDate = datesArr.map(date => {
    const dateEvents = allEventsDates.filter(event => isSameDate(event.date, date));
    return {
      date,
      dateEvents,
    };
  });

  return eventsByDate;
};

const removeCalendarEvent = () => {};

const updateCalendarEvent = () => {};

export const CalendarEventApi = {
  list: listCalendarEvents,
  listEventsFromArray: listCalendarEventFromArray,
  add: addCalendarEvent,
  remove: removeCalendarEvent,
  update: updateCalendarEvent,
};
