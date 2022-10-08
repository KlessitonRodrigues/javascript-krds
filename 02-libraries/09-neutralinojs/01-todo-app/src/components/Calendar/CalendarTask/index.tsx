import { Box, Tooltip, IconButton, Typography } from '@mui/material';
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
            &nbsp;{actions.formatISODate(props.time)}
            <Flex xContent="start">&nbsp;{props.name}</Flex>
          </Box>
          <Box>
            <Box onClick={() => props.onPreviousStatusClick && props.onPreviousStatusClick()}>
              <Tooltip title="back" placement="left">
                <IconButton style={{ padding: '0' }}>
                  <BsArrowLeftShort className="show-onhover" fontSize="1.2rem" opacity="0.6" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CalendarTask;
