import { Box } from '@mui/material';

import usePaletteContext from '../../../hooks/usePaletteContext';
import { calendarTask } from './styles';
import { getTaskIcon } from './store';

const CalendarTask = () => {
  const palette = usePaletteContext();

  return (
    <Box className="dark-text-hover" style={calendarTask} color={palette.color7}>
      <Box>
        {getTaskIcon('todo')}
        &nbsp; Study English
      </Box>
    </Box>
  );
};

export default CalendarTask;
