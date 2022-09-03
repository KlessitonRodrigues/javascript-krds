import { Box, Slide } from '@mui/material';

import CalendarHeader from './CalendarHeader';
import CalendarEvent from './CalendarEvent';
import { calendarGrid } from './styles';
import * as store from './store';
import useGlobalContext from '../../hooks/useGlobalContext';

const Calendar = () => {
  const [global] = useGlobalContext();
  return (
    <Slide in direction="up" timeout={350}>
      <Box>
        <CalendarHeader />
        <CalendarEvent />
        <Box style={calendarGrid}>
          {store.renderWeekHeaders()}
          {store.renderCalendarItems(global.currentMonth)}
        </Box>
      </Box>
    </Slide>
  );
};

export default Calendar;
