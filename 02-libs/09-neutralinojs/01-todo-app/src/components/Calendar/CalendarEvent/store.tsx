import { calendarAPI } from '../../../data/api/event/index';
import { repeatedDates } from '../../../data/util/nextDate';
import { GlobalState } from '../../../hooks/useGlobalContext/state';
import { TodoFormState, HandleTodoForm } from './types';

const dateInputFormat = (dateStr: string) => {
  const date = new Date(dateStr);
  const zeroLeft = (n: number) => (n < 10 ? '0' + n : n.toString());
  return `${date.getFullYear()}-${zeroLeft(date.getMonth())}-${zeroLeft(date.getDate())}`;
};

class Store {
  todoFormState: TodoFormState = {
    name: '',
    description: '',
    time: '07:00:00',
    date: dateInputFormat(new Date().toISOString()),
    duration: '60',
    repeatAmount: '1',
  };

  handleNameField: HandleTodoForm = (value, state) => {
    return { ...state, name: value };
  };

  handleDescriptionField: HandleTodoForm = (value, state) => {
    return { ...state, description: value };
  };

  handleTimeField: HandleTodoForm = (value, state) => {
    return { ...state, time: value };
  };

  handleDateField: HandleTodoForm = (value, state) => {
    return { ...state, date: value };
  };

  handleDurationField: HandleTodoForm = (value, state) => {
    return { ...state, duration: value };
  };

  handleRepeatCheckbox = (value: TodoFormState['repeat'], state: TodoFormState): TodoFormState => {
    return { ...state, repeat: value };
  };

  handleRepeatTime: HandleTodoForm = (value, state) => {
    return { ...state, repeatAmount: value };
  };

  handleSaveEvent = (event: TodoFormState) => {
    const dateISO = new Date(`${event.date} ${event.time}`).toISOString();
    const id = Date.now().toString(20);
    const todos = repeatedDates(dateISO, event.repeat, Number(event.repeatAmount), id);
    return calendarAPI.addCalendarEvent({
      ...event,
      id,
      duration: Number(event.duration),
      repeatAmount: Number(event.repeatAmount),
      tags: [],
      repeatDates: todos,
      dateISO: dateISO,
      dateISOEnd: todos[todos.length - 1].date,
    });
  };

  handleCloseButton = (global: GlobalState): GlobalState => {
    return { ...global, sidePanel: { ...global.sidePanel, todo: !global.sidePanel.todo } };
  };
}

export default new Store();
