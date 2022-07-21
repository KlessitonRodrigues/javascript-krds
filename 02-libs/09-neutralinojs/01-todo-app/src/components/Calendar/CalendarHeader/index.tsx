import { Box, Button, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { BsPlus, BsCaretLeft, BsCaretRight } from 'react-icons/bs'

import { dateStrToObj } from '../../../data/util/formatDate'
import Flex from '../../Templates/Flex'
import { calendarHeader } from '../styles'

const CalendarHeader = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    setTimeout(() => setCurrentDate(new Date()), 1000)
  }, [])

  const date = dateStrToObj(currentDate.toString())

  return (
    <Box style={calendarHeader()}>
      <Flex xContent="stretch">
        <Button variant="contained" startIcon={<BsPlus fontSize="2rem" />}>
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
