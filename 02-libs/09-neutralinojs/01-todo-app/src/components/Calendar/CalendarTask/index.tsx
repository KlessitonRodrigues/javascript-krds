import { Box } from '@mui/material';

import usePaletteContext from '../../../hooks/usePaletteContext';
import { calendarTask } from './styles';
import { getTaskIcon } from './store';
import * as type from './types';

const CalendarTask = (props: type.Props) => {
  const palette = usePaletteContext();

  return (
    <Box className="dark-text-hover" style={calendarTask} color={palette.black}>
      <Box>
        {getTaskIcon('todo')}
        &nbsp; {props.name}
      </Box>
    </Box>
  );
};

export default CalendarTask;
