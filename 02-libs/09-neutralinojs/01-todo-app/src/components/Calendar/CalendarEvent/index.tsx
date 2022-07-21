import { Box, Typography, Input } from '@mui/material'
import { useState } from 'react'
import { BsCalendarEvent } from 'react-icons/bs'

import Flex from '../../Templates/Flex'
import Sidepanel from '../../Templates/Sidepanel'
import SidepanelSection from '../../Templates/Sidepanel/Section'
import { calendarEvent } from '../styles'

const CalendarEvent = () => {
  const [eventForm, setEventForm] = useState()

  return (
    <Sidepanel show={true}>
      <Box style={calendarEvent()}>
        <Flex y="center" xContent="start">
          <BsCalendarEvent fontSize="1.5rem" />
          <Typography variant="h2">&nbsp; Event</Typography>
        </Flex>

        <Box mt={4}>
          <Input type="text" fullWidth placeholder="Event name" />

          <SidepanelSection title="Event name">
            <Flex>
              <Input type="time" />
              &nbsp; &nbsp;
              <Input type="date" fullWidth />
            </Flex>
          </SidepanelSection>

          <SidepanelSection title="Duration">
            <Input type="time" />
          </SidepanelSection>
        </Box>
      </Box>
    </Sidepanel>
  )
}

export default CalendarEvent
