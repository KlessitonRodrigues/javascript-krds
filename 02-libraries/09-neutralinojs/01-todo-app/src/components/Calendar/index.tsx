import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CalendarHeader from './CalendarHeader';
import CalendarEvent from './CalendarEvent';
import styles from './styles';
import store from './store';
import useGlobalContext from '../../hooks/useGlobalContext';

const Calendar = () => {
  const [events, setEvents] = useState<React.ReactElement[]>();
  const [global] = useGlobalContext();
  const calendarHeaders = React.useMemo(() => store.renderWeekHeaders(), []);

  useEffect(() => {
    setEvents(store.renderCalendarItems(global.currentMonth, setEvents));
  }, [global.currentMonth]);

  return (
    <Box>
      <CalendarHeader />
      <CalendarEvent />
      <Box style={styles.calendarGrid}>
        {calendarHeaders}
        {events}
      </Box>
    </Box>
  );
};

export default Calendar;
