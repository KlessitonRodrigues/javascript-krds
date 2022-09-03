import { GlobalState } from '../../../hooks/useGlobalContext/state';

export const handleNewTodoClick = (globalState: GlobalState): GlobalState => ({
  ...globalState,
  sidePanel: { ...globalState.sidePanel, todo: !globalState.sidePanel.todo },
});

export const handlePreviousMonthClick = (globalState: GlobalState): GlobalState => {
  const date = new Date(globalState.currentMonth);
  date.setMonth(date.getMonth() - 1);
  return { ...globalState, currentMonth: date };
};

export const handleNextMonthClick = (globalState: GlobalState): GlobalState => {
  const date = new Date(globalState.currentMonth);
  date.setMonth(date.getMonth() + 1);
  return { ...globalState, currentMonth: date };
};
