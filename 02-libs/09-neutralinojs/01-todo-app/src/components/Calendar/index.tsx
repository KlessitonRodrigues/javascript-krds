import { Box } from '@mui/material';

import CalendarHeader from './CalendarHeader';
import CalendarEvent from './CalendarEvent';
import { calendarGrid } from './styles';
import * as store from './store';
import useGlobalContext from '../../hooks/useGlobalContext';

const Calendar = () => {
  const [global] = useGlobalContext();

  return (
    <Box>
      <CalendarHeader />
      <CalendarEvent />
      <Box style={calendarGrid}>
        {store.renderWeekHeaders()}
        {store.renderCalendarItems(global.currentMonth)}
      </Box>
    </Box>
  );
};

export default Calendar;
