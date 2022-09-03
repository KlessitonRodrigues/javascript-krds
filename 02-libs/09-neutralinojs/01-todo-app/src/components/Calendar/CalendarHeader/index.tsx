import { Box, Button, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { BsPlus, BsCaretLeft, BsCaretRight } from 'react-icons/bs';

import { dateStrToObj } from '../../../data/util/formatDate';
import useGlobalContext from '../../../hooks/useGlobalContext';
import Flex from '../../Templates/Flex';
import { calendarHeader } from '../styles';
import * as store from './store';

const CalendarHeader = () => {
  const [global, setGlobal] = useGlobalContext();
  const date = dateStrToObj(global.currentMonth.toISOString());

  return (
    <Box style={calendarHeader()}>
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
          <IconButton onClick={() => setGlobal(store.handlePreviousMonthClick(global))}>
            <BsCaretLeft fontSize="1.5rem" />
          </IconButton>
          <Box width={220} textAlign="center">
            {date.dateStr.mm.toUpperCase()}&nbsp;
            {date.dateStr.yy.toUpperCase()}
          </Box>
          <IconButton onClick={() => setGlobal(store.handleNextMonthClick(global))}>
            <BsCaretRight fontSize="1.5rem" />
          </IconButton>
          &nbsp;
        </Flex>
      </Flex>
    </Box>
  );
};

export default CalendarHeader;
