import CalendarItem, { Props as CalendarItemProps } from './CalendarItem';
import CalendarTask from './CalendarTask';
import TagItem from '../Tags/TagItem';

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
  const calendarGrid = new Array(35).map((name, i) => {
    const data: CalendarItemProps['data'] = {
      name,
      styleType: 'day',
      topLeft: 1,
      bottomLeft: [<TagItem label="#study" />, <TagItem label="#remider" />],
      content: [<CalendarTask />, <CalendarTask />, <CalendarTask />, <CalendarTask />],
    };
    return <CalendarItem data={data} key={'day' + i} />;
  });

  return calendarGrid;
};
