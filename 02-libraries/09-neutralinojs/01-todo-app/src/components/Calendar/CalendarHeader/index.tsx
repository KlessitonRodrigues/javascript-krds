import { Box, Button, IconButton } from '@mui/material';
import { BsPlus, BsCaretLeft, BsCaretRight, BsCalendar2Date } from 'react-icons/bs';

import { dateStrToObj } from '../../../data/util/formatDate';
import useGlobalContext from '../../../hooks/useGlobalContext';
import Flex from '../../Templates/Flex';
import styles from './styles';
import * as store from './store';

type Props = {
  onNextMonth?: () => void;
  onPreviousMonth?: () => void;
};

const CalendarHeader = (props: Props) => {
  const [global, setGlobal] = useGlobalContext();
  const date = dateStrToObj(global.currentMonth.toISOString());

  return (
    <Box style={styles.calendarHeader()}>
      <Flex xContent="stretch">
        <Button
          variant="contained"
          startIcon={<BsPlus fontSize="2rem" />}
          onClick={() => setGlobal(store.handleNewTodoClick(global))}
        >
          Todo
        </Button>

        <Flex>
          &nbsp;
          <IconButton
            onClick={() => {
              props.onNextMonth && props.onNextMonth();
              setGlobal(store.handlePreviousMonthClick(global));
            }}
          >
            <BsCaretLeft fontSize="1.5rem" />
          </IconButton>
          <Box width={220} textAlign="center">
            {date.dateStr.mm.toUpperCase()}&nbsp;
            {date.dateStr.yy.toUpperCase()}
          </Box>
          <IconButton
            onClick={() => {
              props.onPreviousMonth && props.onPreviousMonth();
              setGlobal(store.handleNextMonthClick(global));
            }}
          >
            <BsCalendar2Date fontSize="1.5rem" />
          </IconButton>
          <IconButton
            onClick={() => {
              props.onPreviousMonth && props.onPreviousMonth();
              setGlobal(store.handleNextMonthClick(global));
            }}
          >
            <BsCaretRight fontSize="1.5rem" />
          </IconButton>
          &nbsp;
        </Flex>
      </Flex>
    </Box>
  );
};

export default CalendarHeader;
