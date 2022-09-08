import CalendarItem from './CalendarItem';
import { Props as CalendarItemProps } from './CalendarItem/types';
import CalendarTask from './CalendarTask';
import TagItem from '../Tags/TagItem';
import { getCalendarDates, getCalendarGap, isSameMonth } from '../../data/util/getMonthDates';

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

  const calendarGrid = dateList.map((dateStr, i) => {
    const date = new Date(dateStr);
    const isCurrentMonth = isSameMonth(date, dates.firstMonthDay);

    const data: CalendarItemProps['data'] = {
      styleType: isCurrentMonth ? 'day' : 'day-out-of-month',
      topLeft: date.getDate(),
      bottomLeft: [<TagItem label="#study" />],
      content: [<CalendarTask />, <CalendarTask />],
      animationDelay: `0.${i < 10 ? '0' + i : i}s`,
    };
    console.log(data.animationDelay);

    return <CalendarItem data={data} key={'day' + i} />;
  });

  return calendarGrid;
};
