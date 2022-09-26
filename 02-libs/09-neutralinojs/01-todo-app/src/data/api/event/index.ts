import { CalendarEvent, CalendarTodo } from './types';
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
  if (!events?.length) return [];

  const flatedEvents = events
    .map(event => {
      return event.repeatDates?.map(repeatEvent => ({
        ...repeatEvent,
        name: event.name,
        description: event.description,
        tags: event.tags,
      }));
    })
    .flat();

  const eventsByDate = datesArr.map(date => {
    return {
      date,
      dateEvents: flatedEvents.filter(event => isSameDate(event.date, date)),
    };
  });

  return eventsByDate;
};

const removeCalendarEvent = () => {};

const updateCalendarEvent = (id: string, index: number, status: CalendarTodo['status']) => {
  const events = localStorageRead<CalendarEvent[]>(storageName);

  console.log(id, index, status);

  for (const event of events) {
    if (event.id === id) {
      event.repeatDates[index].status = status;
      break;
    }
  }

  localStorageSave<CalendarEvent[]>(storageName, events);
};

export const CalendarEventApi = {
  list: listCalendarEvents,
  listEventsFromArray: listCalendarEventFromArray,
  add: addCalendarEvent,
  remove: removeCalendarEvent,
  update: updateCalendarEvent,
};
