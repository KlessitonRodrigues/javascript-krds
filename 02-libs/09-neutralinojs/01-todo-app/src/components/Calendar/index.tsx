import Box from '@mui/material/Box';

import CalendarItem, { Props as CalendarItemProps } from './CalendarItem';
import CalendarHeader from './CalendarHeader';
import CalendarTask from './CalendarTask';
import CalendarEvent from './CalendarEvent';
import { calendarGrid } from './styles';
import * as store from './store';

const Calendar = () => {
  return (
    <Box>
      <CalendarHeader />
      <CalendarEvent />
      <Box style={calendarGrid}>
        {store.renderWeekHeaders()}
        {store.renderCalendarItems()}
      </Box>
    </Box>
  );
};

export default Calendar;
