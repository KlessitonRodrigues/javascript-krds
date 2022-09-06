import { Box, Slide } from '@mui/material';

import CalendarHeader from './CalendarHeader';
import CalendarEvent from './CalendarEvent';
import { calendarGrid } from './styles';
import * as store from './store';
import useGlobalContext from '../../hooks/useGlobalContext';
import useAnimations from '../../hooks/useAnimations';

const Calendar = () => {
  const [global] = useGlobalContext();
  const calendarAnimations = useAnimations(['slide-right', 'slide-left']);

  return (
    <Slide in direction="up" timeout={350}>
      <Box>
        <CalendarHeader
          onNextMonth={() => calendarAnimations.play(0)}
          onPreviousMonth={() => calendarAnimations.play(1)}
        />
        <CalendarEvent />
        <Box ref={calendarAnimations.elRef} style={calendarGrid}>
          {store.renderWeekHeaders()}
          {store.renderCalendarItems(global.currentMonth)}
        </Box>
      </Box>
    </Slide>
  );
};

export default Calendar;
