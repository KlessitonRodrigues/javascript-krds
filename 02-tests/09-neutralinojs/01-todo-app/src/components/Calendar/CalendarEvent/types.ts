export type TodoFormState = {
  name: string;
  description: string;
  time: string;
  date: string;
  duration: string;
  repeat?: 'day' | 'week' | 'month' | 'year';
  repeatAmount?: string;
};

export type HandleTodoForm = (value: string, state: TodoFormState) => TodoFormState;
