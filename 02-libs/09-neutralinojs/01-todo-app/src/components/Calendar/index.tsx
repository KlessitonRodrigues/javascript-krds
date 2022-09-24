import React from 'react';
import { Box } from '@mui/material';

import CalendarHeader from './CalendarHeader';
import CalendarEvent from './CalendarEvent';
import styles from './styles';
import store from './store';
import useGlobalContext from '../../hooks/useGlobalContext';

const Calendar = () => {
  const [global] = useGlobalContext();
  const calendarHeaders = React.useMemo(() => store.renderWeekHeaders(), []);
  const calendarItems = React.useMemo(
    () => store.renderCalendarItems(global.currentMonth),
    [global.currentMonth]
  );

  return (
    <Box>
      <CalendarHeader />
      <CalendarEvent />
      <Box style={styles.calendarGrid}>
        {calendarHeaders}
        {calendarItems}
      </Box>
    </Box>
  );
};

export default Calendar;
