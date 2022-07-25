import { useState } from 'react'
import { Box, Input, TextField, Checkbox, FormControlLabel, FormGroup, FormControl } from '@mui/material'
import { BsCalendarEvent, BsCaretDownFill, BsCaretRight, BsCheckSquare, BsCheckSquareFill } from 'react-icons/bs'

import Flex from '../../Templates/Flex'
import Sidepanel from '../../Templates/Sidepanel'
import SidepanelSection from '../../Templates/Sidepanel/Section'
import SidepanelTitle from '../../Templates/Sidepanel/Title'
import { calendarEvent } from '../styles'
import useGlobalContext from '../../../hooks/useGlobalContext'
import * as store from './store'

const CalendarEventDurationSuffix = () => <Box>minutes</Box>

const CalendarEvent = () => {
  const [todoForm, setTodoForm] = useState(store.todoFormState)
  const [global] = useGlobalContext()

  return (
    <Sidepanel show={true || global.sidePanel.todo}>
      <Box style={calendarEvent()}>
        <SidepanelTitle title="Todo" icon={<BsCalendarEvent fontSize="1.5rem" />} />

        <Box>
          <SidepanelSection title="Todo">
            <TextField
              variant="standard"
              size="small"
              fullWidth
              placeholder="Name"
              value={todoForm.name}
              onChange={ev => setTodoForm(store.handleNameField(ev.target.value, todoForm))}
            />
            &nbsp;
            <TextField
              variant="standard"
              size="small"
              fullWidth
              placeholder="Description"
              value={todoForm.description}
              onChange={ev => setTodoForm(store.handleDescriptionField(ev.target.value, todoForm))}
            />
          </SidepanelSection>

          <SidepanelSection title="Time">
            <Flex>
              <Input
                type="time"
                defaultValue="07:00"
                value={todoForm.time}
                onChange={ev => setTodoForm(store.handleTimeField(ev.target.value, todoForm))}
              />
              &nbsp; &nbsp;
              <Input
                type="date"
                fullWidth
                defaultValue={'2022-07-28'}
                value={todoForm.date}
                onChange={ev => setTodoForm(store.handleDateField(ev.target.value, todoForm))}
              />
            </Flex>
          </SidepanelSection>

          <SidepanelSection title="Duration">
            <Input
              type="number"
              defaultValue={60}
              renderSuffix={CalendarEventDurationSuffix}
              value={todoForm.duration}
              onChange={ev => setTodoForm(store.handleDurationField(ev.target.value, todoForm))}
            />
          </SidepanelSection>

          <SidepanelSection title="Repeat">
            <FormControl>
              <Flex xContent="start">
                <FormControlLabel
                  control={<Checkbox icon={<BsCaretRight />} checkedIcon={<BsCaretDownFill />} />}
                  id="c"
                  label="Daily"
                />
                <FormControlLabel
                  control={<Checkbox icon={<BsCaretRight />} checkedIcon={<BsCaretDownFill />} />}
                  label="Weekely"
                />
                <FormControlLabel
                  control={<Checkbox icon={<BsCaretRight />} checkedIcon={<BsCaretDownFill />} />}
                  label="Monthly"
                />
                <FormControlLabel
                  control={<Checkbox icon={<BsCaretRight />} checkedIcon={<BsCaretDownFill />} />}
                  label="Yearly"
                />
              </Flex>
            </FormControl>
            <Input type="time" defaultValue="07:00" />
          </SidepanelSection>

          <SidepanelSection title="Tags">
            <TextField variant="standard" size="small" placeholder="tags" />
          </SidepanelSection>

          <SidepanelSection title="Options">
            <FormControlLabel
              control={<Checkbox icon={<BsCheckSquare />} checkedIcon={<BsCheckSquareFill />} />}
              label="Show on calendar"
            />
            <Flex xContent="flex-start">
              <FormControlLabel
                control={<Checkbox icon={<BsCheckSquare />} checkedIcon={<BsCheckSquareFill />} />}
                label="Create notes"
              />
              <TextField variant="standard" size="small" placeholder="Id" />
            </Flex>
          </SidepanelSection>
        </Box>
      </Box>
    </Sidepanel>
  )
}

export default CalendarEvent
