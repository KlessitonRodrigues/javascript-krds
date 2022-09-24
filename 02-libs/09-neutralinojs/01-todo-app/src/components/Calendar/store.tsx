import CalendarItem from './CalendarItem';
import { Props as CalendarItemProps } from './CalendarItem/types';
import CalendarTask from './CalendarTask';
import TagItem from '../Tags/TagItem';
import { getCalendarDates, getCalendarGap, isSameMonth } from '../../data/util/getMonthDates';
import { CalendarEventApi } from '../../data/api/event';

class Store {
  weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  renderWeekHeaders = () => {
    return this.weekdays.map((name, i) => {
      const data: CalendarItemProps['data'] = {
        name,
        styleType: 'header',
      };
      return <CalendarItem data={data} key={'header' + i} />;
    });
  };

  renderCalendarItems = (selectedDate: Date) => {
    const dates = getCalendarDates(selectedDate.toString());
    const dateList = getCalendarGap(dates.fillFirstWeek.toString(), dates.fillLastWeek.toString());
    const eventList = CalendarEventApi.listEventsFromArray(dateList);

    console.log(dates, dateList, eventList)














    const calendarGrid = eventList.map((calendar, i) => {
      const currentDate = new Date(calendar.date);
      const isCurrentMonth = isSameMonth(currentDate, dates.firstMonthDay);
      const currentDay = currentDate.getDate();

      const TaskList = calendar.dateEvents.map(event => {
        return <CalendarTask name={event.status} key={event.id} />;
      });

      const data: CalendarItemProps['data'] = {
        styleType: isCurrentMonth ? 'day' : 'day-out-of-month',
        topLeft: currentDay < 10 ? '0' + currentDay : currentDay,
        bottomLeft: [<TagItem label="#study" />],
        content: TaskList,
        animationDelay: `0.${i < 10 ? '0' + i : i}s`,
      };

      return <CalendarItem data={data} key={'day' + i} />;
    });

    return calendarGrid;
  };
}

export default new Store();
