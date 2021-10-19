import React, { useReducer } from "react";

const INITIAL_STATE = {
  onEditor: -1,
  notes: [],
};

function notesReducer(state, action) {
  let { onEditor, notes } = state;

  switch (action.type) {
    case "ADD_NOTE":
      notes.push(action.payload);
      onEditor = notes.length - 1;
      return { onEditor, notes };

    case "REMOVE_NOTE":
      notes.splice(onEditor, 1);
      onEditor--;
      return { onEditor, notes };

    case "UPDATE_NOTE":
      notes[onEditor] = action.payload;
      return { ...state, notes };

    case "CHANGE_ONEDITOR":
      onEditor = action.payload;
      return { ...state, onEditor };

    default:
      return state;
  }
}

export const NotesContext = React.createContext();

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, INITIAL_STATE);
  const newAction = (type = "", payload = {}) => dispatch({ type, payload });
  return (
    <NotesContext.Provider value={[state, newAction, dispatch]}>
      {children}
    </NotesContext.Provider>
  );
};
