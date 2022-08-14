import { useState } from 'react';
import { Box, Input, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { BsCalendarEvent, BsCheckCircle, BsCheckSquare, BsCircle, BsSquare } from 'react-icons/bs';

import Flex from '../../Templates/Flex';
import Sidepanel from '../../Templates/Sidepanel';
import SidepanelSection from '../../Templates/Sidepanel/Section';
import SidepanelTitle from '../../Templates/Sidepanel/Title';
import { calendarEvent } from '../styles';
import useGlobalContext from '../../../hooks/useGlobalContext';
import * as store from './store';

const CalendarEventDurationSuffix = () => <Box>minutes</Box>;

const CalendarEvent = () => {
  const [todoForm, setTodoForm] = useState(store.todoFormState);
  const [global] = useGlobalContext();

  return (
    <Sidepanel show={global.sidePanel.todo}>
      <Box style={calendarEvent()}>
        <SidepanelTitle title="Todo" icon={<BsCalendarEvent fontSize="1.5rem" />} />

        <Box>
          <SidepanelSection title="Todo">
            <TextField
              variant="standard"
              size="small"
              fullWidth
              placeholder="name"
              value={todoForm.name}
              onChange={ev => setTodoForm(store.handleNameField(ev.target.value, todoForm))}
            />
            &nbsp;
            <TextField
              variant="standard"
              size="small"
              fullWidth
              placeholder="description"
              value={todoForm.description}
              onChange={ev => setTodoForm(store.handleDescriptionField(ev.target.value, todoForm))}
            />
          </SidepanelSection>

          <SidepanelSection title="Time">
            <Flex>
              <Input
                type="time"
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
            <Flex xContent="start">
              <FormControlLabel
                control={<Checkbox icon={<BsCircle />} checkedIcon={<BsCheckCircle />} />}
                label="Daily"
                checked={todoForm.repeat === 'daily'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('daily', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox icon={<BsCircle />} checkedIcon={<BsCheckCircle />} />}
                label="Weekely"
                checked={todoForm.repeat === 'weekly'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('weekly', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox icon={<BsCircle />} checkedIcon={<BsCheckCircle />} />}
                label="Monthly"
                checked={todoForm.repeat === 'monthly'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('monthly', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox icon={<BsCircle />} checkedIcon={<BsCheckCircle />} />}
                label="Yearly"
                checked={todoForm.repeat === 'yeartly'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('yeartly', todoForm))}
              />
            </Flex>
            <Input
              type="number"
              defaultValue="0"
              value={todoForm.repeatAmount}
              onChange={() => setTodoForm(store.handleRepeatTime('yeartly', todoForm))}
            />
          </SidepanelSection>

          <SidepanelSection title="Tags">
            <TextField variant="standard" size="small" placeholder="tags" />
          </SidepanelSection>

          <SidepanelSection title="Options">
            <FormControlLabel
              control={<Checkbox icon={<BsSquare />} checkedIcon={<BsCheckSquare />} />}
              label="Show on calendar"
            />
            <Flex xContent="flex-start">
              <FormControlLabel
                control={<Checkbox icon={<BsSquare />} checkedIcon={<BsCheckSquare />} />}
                label="Create notes"
              />
              <TextField variant="standard" size="small" placeholder="note Id" />
            </Flex>
          </SidepanelSection>
        </Box>
      </Box>
    </Sidepanel>
  );
};

export default CalendarEvent;
