import { CalendarEvent, CalendarTodo } from './types';
import { localStorageAPI } from '../../util/localStorage';
import { isSameDate } from '../../util/compareDates';

class CalendarAPI {
  storageName = 'CalendarEvent';

  listCalendarEvents = () => {
    return localStorageAPI.read<CalendarEvent[]>(this.storageName);
  };

  addCalendarEvent = (event: CalendarEvent) => {
    console.log(event);
    let saved = localStorageAPI.read<CalendarEvent[]>(this.storageName);

    if (!saved) saved = [];
    saved.push(event);
    localStorageAPI.save(this.storageName, saved);
  };

  listCalendarEventFromArray = (datesArr: string[]) => {
    const events = localStorageAPI.read<CalendarEvent[]>(this.storageName);
    if (!events?.length) return [];

    const flatedEvents = events
      .map(event => {
        return event.repeatDates?.map(repeatEvent => ({
          ...repeatEvent,
          name: event.name,
          dateISO: event.dateISO,
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

  removeCalendarEvent = () => {};

  updateCalendarEvent = (id: string, index: number, op: 'nextStatus' | 'prevStatus') => {
    const events = localStorageAPI.read<CalendarEvent[]>(this.storageName);
    const statusFlow: CalendarTodo['status'][] = ['canceled', 'todo', 'doing', 'done'];

    for (const event of events) {
      if (event.id === id) {
        const statusIndex = statusFlow.indexOf(event.repeatDates[index].status);
        if (op === 'nextStatus')
          event.repeatDates[index].status = statusFlow[statusIndex >= 3 ? 3 : statusIndex + 1];
        else event.repeatDates[index].status = statusFlow[statusIndex <= 0 ? 0 : statusIndex - 1];
        break;
      }
    }

    localStorageAPI.save<CalendarEvent[]>(this.storageName, events);
  };
}

export const calendarAPI = new CalendarAPI();
