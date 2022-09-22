import { useState } from 'react';
import { Box, Input, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import * as icon from 'react-icons/bs';

import Flex from '../../Templates/Flex';
import Sidepanel from '../../Templates/Sidepanel';
import SidepanelSection from '../../Templates/Sidepanel/Section';
import SidepanelTitle from '../../Templates/Sidepanel/Title';
import { calendarEvent } from '../styles';
import useGlobalContext from '../../../hooks/useGlobalContext';
import * as store from './store';

const calendarCheckboxIcon = {
  icon: <icon.BsCalendarEvent />,
  checkedIcon: <icon.BsCalendarCheckFill />,
};

const CalendarEvent = () => {
  const [todoForm, setTodoForm] = useState(store.todoFormState);
  const [global, setGlobal] = useGlobalContext();

  return (
    <Sidepanel show={global.sidePanel.todo}>
      <Box style={calendarEvent()}>
        <SidepanelTitle
          title="Todo"
          icon={<icon.BsCalendarEvent fontSize="1.5rem" />}
          onClose={() => setGlobal(store.handleCloseButton(global))}
        />

        <Box>
          <SidepanelSection title="Todo">
            <TextField
              variant="standard"
              fullWidth
              label="Name"
              value={todoForm.name}
              onChange={ev => setTodoForm(store.handleNameField(ev.target.value, todoForm))}
            />
            &nbsp;
            <TextField
              fullWidth
              variant="standard"
              label="Description"
              value={todoForm.description}
              onChange={ev => setTodoForm(store.handleDescriptionField(ev.target.value, todoForm))}
            />
          </SidepanelSection>

          <SidepanelSection title="Time">
            <Flex>
              <Input
                type="date"
                fullWidth
                defaultValue={'2022-07-28'}
                value={todoForm.date}
                onChange={ev => setTodoForm(store.handleDateField(ev.target.value, todoForm))}
              />
              &nbsp; &nbsp;
              <Input
                type="time"
                value={todoForm.time}
                onChange={ev => setTodoForm(store.handleTimeField(ev.target.value, todoForm))}
              />
            </Flex>
          </SidepanelSection>

          <SidepanelSection title="Duration">
            <Input
              type="number"
              defaultValue={60}
              renderSuffix={() => <Box>minutes</Box>}
              value={todoForm.duration}
              onChange={ev => setTodoForm(store.handleDurationField(ev.target.value, todoForm))}
            />
          </SidepanelSection>

          <SidepanelSection title="Repeat">
            <Flex xContent="start">
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Daily"
                checked={todoForm.repeat === 'day'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('day', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Weekely"
                checked={todoForm.repeat === 'week'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('week', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Monthly"
                checked={todoForm.repeat === 'month'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('month', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Yearly"
                checked={todoForm.repeat === 'year'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('year', todoForm))}
              />
            </Flex>
            <Flex xContent="start">
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Sun"
                checked={todoForm.repeat === 'day'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('day', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Mon"
                checked={todoForm.repeat === 'week'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('week', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Tue"
                checked={todoForm.repeat === 'month'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('month', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Wed"
                checked={todoForm.repeat === 'year'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('year', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Thu"
                checked={todoForm.repeat === 'year'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('year', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Fri"
                checked={todoForm.repeat === 'year'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('year', todoForm))}
              />
              <FormControlLabel
                control={<Checkbox {...calendarCheckboxIcon} />}
                label="Sat"
                checked={todoForm.repeat === 'year'}
                onChange={() => setTodoForm(store.handleRepeatCheckbox('year', todoForm))}
              />
            </Flex>
            <Input
              type="number"
              defaultValue="1"
              value={todoForm.repeatAmount}
              onChange={ev => setTodoForm(store.handleRepeatTime(ev.target.value, todoForm))}
            />
          </SidepanelSection>

          <SidepanelSection title="Tags">
            <TextField variant="standard" size="small" placeholder="tags" />
          </SidepanelSection>

          <SidepanelSection title="Options">
            <FormControlLabel
              control={<Checkbox icon={<icon.BsSquare />} checkedIcon={<icon.BsCheckSquare />} />}
              label="Show on calendar"
            />
            <Flex xContent="flex-start">
              <FormControlLabel
                control={<Checkbox icon={<icon.BsSquare />} checkedIcon={<icon.BsCheckSquare />} />}
                label="Create notes"
              />
              <TextField variant="standard" size="small" placeholder="note Id" />
            </Flex>
          </SidepanelSection>
          <Box mt={4}>
            <Button
              variant="contained"
              size="small"
              onClick={() => store.handleSaveEvent(todoForm)}
            >
              Save
            </Button>
            &nbsp;
            <Button variant="contained" size="small" color="error">
              Clean
            </Button>
          </Box>
        </Box>
      </Box>
    </Sidepanel>
  );
};

export default CalendarEvent;
