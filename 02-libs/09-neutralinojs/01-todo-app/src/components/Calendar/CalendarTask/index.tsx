import { Box, Tooltip, IconButton } from '@mui/material';
import { BsArrowLeftShort } from 'react-icons/bs';

import styles from './styles';
import Flex from '../../Templates/Flex';
import actions from './actions';
import { Props } from './types';

const CalendarTask = (props: Props) => {
  return (
    <Box className="show-items-onhover" style={styles.calendarTask(props.status)}>
      <Box>
        <Flex xContent="space-between">
          <Box onClick={() => props.onNextStatusClick && props.onNextStatusClick()}>
            <Flex xContent="start">
              {actions.getTaskIcon(props.status)}
              &nbsp;{actions.formatISODate(props.time)}
              &nbsp;{props.name.toLocaleLowerCase()}
            </Flex>
          </Box>
          <Box onClick={() => props.onPreviousStatusClick && props.onPreviousStatusClick()}>
            <Tooltip title="back" placement="left">
              <IconButton style={{ padding: '0' }}>
                <BsArrowLeftShort className="show-onhover" fontSize="1.2rem" opacity="0.6" />
              </IconButton>
            </Tooltip>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CalendarTask;
