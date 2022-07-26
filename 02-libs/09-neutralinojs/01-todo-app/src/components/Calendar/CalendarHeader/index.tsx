import { Box, Button, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { BsPlus, BsCaretLeft, BsCaretRight } from 'react-icons/bs'

import { dateStrToObj } from '../../../data/util/formatDate'
import useGlobalContext from '../../../hooks/useGlobalContext'
import Flex from '../../Templates/Flex'
import { calendarHeader } from '../styles'
import * as store from './store'

const CalendarHeader = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [global, setGlobal] = useGlobalContext()

  useEffect(() => {
    const timer = setTimeout(() => setCurrentDate(new Date()), 1000)
    return () => clearTimeout(timer)
  }, [])

  const date = dateStrToObj(currentDate.toString())

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
          <IconButton>
            <BsCaretLeft fontSize="1.5rem" />
          </IconButton>
          {date.dateStr.mm.toUpperCase()}&nbsp;
          {date.dateStr.yy.toUpperCase()}
          <IconButton>
            <BsCaretRight fontSize="1.5rem" />
          </IconButton>
        </Flex>
      </Flex>
    </Box>
  )
}

export default CalendarHeader
