import CalendarItem, { Props as CalendarItemProps } from './CalendarItem';
import CalendarTask from './CalendarTask';
import TagItem from '../Tags/TagItem';
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

export const renderCalendarItems = () => {
  const arr = new Array(36).fill(0, 0, -1);
  const eventList = CalendarEventApi.list();

  console.log(eventList);

  const calendarGrid = arr.map((name, i) => {
    const data: CalendarItemProps['data'] = {
      name,
      styleType: 'day',
      topLeft: 1,
      bottomLeft: [<TagItem label="#study" />],
      content: [<CalendarTask />, <CalendarTask />, <CalendarTask />, <CalendarTask />],
    };

    return <CalendarItem data={data} key={'day' + i} />;
  });

  return calendarGrid;
};
