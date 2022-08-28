import { CalendarEventApi } from '../../../data/api/event/index';
import { repeatedDates } from '../../../data/util/nextDate';

import { TodoFormState, HandleTodoForm } from './types';

export const todoFormState: TodoFormState = {
  name: '',
  description: '',
  time: '07:00:00',
  date: '',
  duration: '60',
  repeatAmount: '1',
};

export const handleNameField: HandleTodoForm = (value, state) => {
  return { ...state, name: value };
};

export const handleDescriptionField: HandleTodoForm = (value, state) => {
  return { ...state, description: value };
};

export const handleTimeField: HandleTodoForm = (value, state) => {
  return { ...state, time: value };
};

export const handleDateField: HandleTodoForm = (value, state) => {
  return { ...state, date: value };
};

export const handleDurationField: HandleTodoForm = (value, state) => {
  return { ...state, duration: value };
};

export const handleRepeatCheckbox = (value: TodoFormState['repeat'], state: TodoFormState): TodoFormState => {
  return { ...state, repeat: value };
};

export const handleRepeatTime: HandleTodoForm = (value, state) => {
  return { ...state, repeatAmount: value };
};

export const handleSaveEvent = (event: TodoFormState) => {
  return CalendarEventApi.add({
    ...event,
    id: Date.now().toString(),
    status: [],
    duration: Number(event.duration),
    repeatAmount: Number(event.repeatAmount),
    tags: [],
    repeatDates: repeatedDates(event.date, event.repeat, Number(event.repeatAmount)),
  });
};
