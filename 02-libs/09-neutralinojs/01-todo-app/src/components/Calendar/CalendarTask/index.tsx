import { Box } from '@mui/material';

import usePaletteContext from '../../../hooks/usePaletteContext';
import styles from './styles';
import { getTaskIcon } from './store';
import * as type from './types';
import Flex from '../../Templates/Flex';

const CalendarTask = (props: type.Props) => {
  const palette = usePaletteContext();

  return (
    <Box
      className="dark-text-hover"
      style={styles.calendarTask(props.status)}
      color={palette.black}
      onClick={() => props.onClick && props.onClick()}
    >
      <Box>
        <Flex xContent="start">
          {getTaskIcon(props.status)}
          &nbsp;{props.name.toLocaleLowerCase()}
        </Flex>
      </Box>
    </Box>
  );
};

export default CalendarTask;
