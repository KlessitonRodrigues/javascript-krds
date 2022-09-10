import CalendarItem from './CalendarItem';
import { Props as CalendarItemProps } from './CalendarItem/types';
import CalendarTask from './CalendarTask';
import TagItem from '../Tags/TagItem';
import { getCalendarDates, getCalendarGap, isSameMonth } from '../../data/util/getMonthDates';
import { CalendarEventApi } from '../../data/api/event';

const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const renderWeekHeaders = () => {
  return weekdays.map((name, i) => {
    const data: CalendarItemProps['data'] = {
      name,
      styleType: 'header',
    };
    return <CalendarItem data={data} key={'header' + i} />;
  });
};

export const renderCalendarItems = (selectedDate: Date) => {
  const dates = getCalendarDates(selectedDate.toString());
  const dateList = getCalendarGap(dates.fillFirstWeek.toString(), dates.fillLastWeek.toString());
  const eventList = CalendarEventApi.listFromArray(dateList);
  const calendarGrid = eventList.map((calendar, i) => {
    const date = new Date(calendar.date);
    const isCurrentMonth = isSameMonth(date, dates.firstMonthDay);
    const dayNumber = date.getDate();
    const TaskList = calendar.events.map(event => {
      return <CalendarTask name={event.name} key={event.id} />;
    });

    const data: CalendarItemProps['data'] = {
      styleType: isCurrentMonth ? 'day' : 'day-out-of-month',
      topLeft: dayNumber < 10 ? '0' + dayNumber : dayNumber,
      bottomLeft: [<TagItem label="#study" />],
      content: TaskList,
      animationDelay: `0.${i < 10 ? '0' + i : i}s`,
    };

    return <CalendarItem data={data} key={'day' + i} />;
  });

  return calendarGrid;
};
