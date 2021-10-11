import React, { useReducer } from "react";

const INITIAL_STATE = {
  onEditor: 0,
  notes: [
    { title: "TEST", text: "TEST TEXT" },
    { title: "TEST", text: "TEST TEXT" },
  ],
};

function notesReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      const notes = state.notes;
      notes.push(action.payload);
      return { ...state, notes };
  }
}

export const NotesContext = React.createContext();

export const NotesProvider = ({ children }) => (
  <NotesContext.Provider value={useReducer(notesReducer, INITIAL_STATE)}>
    {children}
  </NotesContext.Provider>
);
