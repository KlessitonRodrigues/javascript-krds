import CalendarItem, { Props as CalendarItemProps } from './CalendarItem';
import CalendarTask from './CalendarTask';
import TagItem from '../Tags/TagItem';
import { CalendarEventApi } from '../../data/api/event';
import { getCalendarDates, getCalendarGap } from '../../data/util/getMonthDates';

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
  // const arr = new Array(36).fill(0, 0, -1);
  // const eventList = CalendarEventApi.list();

  const dates = getCalendarDates(selectedDate.toString());
  const dateList = getCalendarGap(dates.fillFirstWeek.toString(), dates.fillLastWeek.toString());

  const calendarGrid = dateList.map((dateStr, i) => {
    const date = new Date(dateStr);
    const data: CalendarItemProps['data'] = {
      styleType: 'day',
      topLeft: date.getDate(),
      bottomLeft: [<TagItem label="#study" />],
      content: [<CalendarTask />, <CalendarTask />],
    };

    return <CalendarItem data={data} key={'day' + i} />;
  });

  return calendarGrid;
};
