import { Dispatch, ReactElement } from 'react';

import CalendarItem from './CalendarItem';
import { Props as CalendarItemProps } from './CalendarItem/types';
import CalendarTask from './CalendarTask';
import TagItem from '../Tags/TagItem';
import { getCalendarDates, getCalendarGap, isSameMonth } from '../../data/util/getMonthDates';
import { calendarAPI } from '../../data/api/event';

class Store {
  weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  renderCache: { date: string; data: any }[] = [];

  renderWeekHeaders = () => {
    return this.weekdays.map((name, i) => {
      const data: CalendarItemProps['data'] = {
        name,
        styleType: 'header',
      };
      return <CalendarItem data={data} key={'header' + i} />;
    });
  };

  renderCalendarItemsCache = (selectedDate: Date) => {
    const cache = this.renderCache.find(cache => cache.date === selectedDate.toDateString());
  };

  renderCalendarItems = (selectedDate: Date, updateEvents: Dispatch<ReactElement[]>) => {
    const dates = getCalendarDates(selectedDate.toISOString());
    const dateList = getCalendarGap(dates.fillFirstWeek.toString(), dates.fillLastWeek.toString());
    const eventList = calendarAPI.listCalendarEventFromArray(dateList);

    const calendarGrid = eventList.map((calendar, i) => {
      const currentDate = new Date(calendar.date);
      const isCurrentMonth = isSameMonth(currentDate, dates.firstMonthDay);
      const currentDay = currentDate.getDate();

      const TaskList = calendar.dateEvents.map(({ name, dateISO, id, index, status }) => (
        <CalendarTask
          name={name}
          time={dateISO}
          status={status}
          key={id + index}
          onNextStatusClick={() => {
            calendarAPI.updateCalendarEvent(id, index, 'nextStatus');
            updateEvents(this.renderCalendarItems(selectedDate, updateEvents));
          }}
          onPreviousStatusClick={() => {
            calendarAPI.updateCalendarEvent(id, index, 'prevStatus');
            updateEvents(this.renderCalendarItems(selectedDate, updateEvents));
          }}
        />
      ));

      const data: CalendarItemProps['data'] = {
        styleType: isCurrentMonth ? 'day' : 'day-out-of-month',
        topLeft: currentDay < 10 ? '0' + currentDay : currentDay,
        bottomLeft: [<TagItem label="#study" />],
        content: TaskList,
      };

      return <CalendarItem data={data} key={'day' + i} />;
    });

    return calendarGrid;
  };
}

export default new Store();
