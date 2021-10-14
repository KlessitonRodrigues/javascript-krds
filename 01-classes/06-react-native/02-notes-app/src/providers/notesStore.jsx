import React, { useReducer } from "react";

const INITIAL_STATE = {
  onEditor: 0,
  notes: [],
};

function notesReducer(state, action) {
  const { onEditor, notes } = state;

  switch (action.type) {
    case "ADD_NOTE":
      notes.push(action.payload);
      return { ...state, notes };

    case "REMOVE_NOTE":
      notes.splice(onEditor, 1);
      return { ...state, notes };

    default:
      return state;
  }
}

export const NotesContext = React.createContext();

export const NotesProvider = ({ children }) => (
  <NotesContext.Provider value={useReducer(notesReducer, INITIAL_STATE)}>
    {children}
  </NotesContext.Provider>
);
