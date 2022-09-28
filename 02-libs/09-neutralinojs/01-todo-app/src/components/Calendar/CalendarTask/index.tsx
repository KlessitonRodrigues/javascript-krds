import { Box, IconButton } from '@mui/material';

import usePaletteContext from '../../../hooks/usePaletteContext';
import styles from './styles';
import { getTaskIcon } from './store';
import * as type from './types';
import Flex from '../../Templates/Flex';
import { BsArrowLeftShort, BsX } from 'react-icons/bs';

const CalendarTask = (props: type.Props) => {
  const palette = usePaletteContext();

  return (
    <Box
      className="show-items-onhover"
      style={styles.calendarTask(props.status)}
      color={palette.black}
      onClick={() => props.onClick && props.onClick()}
    >
      <Box>
        <Flex xContent="space-between">
          <Flex xContent="start">
            {getTaskIcon(props.status)}
            &nbsp;{props.name.toLocaleLowerCase()}
          </Flex>
          <BsArrowLeftShort className="show-onhover" fontSize="1.2rem" opacity="0.6" />
        </Flex>
      </Box>
    </Box>
  );
};

export default CalendarTask;
