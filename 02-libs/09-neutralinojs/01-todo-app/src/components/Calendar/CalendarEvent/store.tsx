export type TodoFormState = {
  name: string;
  description: string;
  time: string;
  date: string;
  duration: string;
  repeat?: 'daily' | 'weekly' | 'monthly' | 'yeartly';
  repeatAmount?: string;
};

export type HandleTodoForm = (value: string, state: TodoFormState) => TodoFormState;

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
