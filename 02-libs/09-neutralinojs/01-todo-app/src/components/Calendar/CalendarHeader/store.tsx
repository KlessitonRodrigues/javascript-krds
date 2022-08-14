import { GlobalState } from '../../../hooks/useGlobalContext/state';

export const handleNewTodoClick = (state: GlobalState): GlobalState => ({
  ...state,
  sidePanel: { ...state.sidePanel, todo: !state.sidePanel.todo },
});
