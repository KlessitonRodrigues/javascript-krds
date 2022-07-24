export const todoFormState = {
  name: '',
  description: '',
  time: '',
  date: '',
  duration: '',
}

export type TodoFormState = typeof todoFormState
export type HandleTodoForm = (value: string, state: TodoFormState) => TodoFormState

export const handleNameField: HandleTodoForm = (value, state) => {
  return { ...state, name: value }
}

export const handleDescriptionField: HandleTodoForm = (value, state) => {
  return { ...state, description: value }
}

export const handleTimeField: HandleTodoForm = (value, state) => {
  return { ...state, time: value }
}

export const handleDateField: HandleTodoForm = (value, state) => {
  return { ...state, date: value }
}

export const handleDurationField: HandleTodoForm = (value, state) => {
  return { ...state, duration: value }
}
