import React, { useState } from "react";

const INITIAL_STATE = {
  editorIndex: 0,
  notes: [
    {
      index: 0,
      text: "test note",
    },
  ],
};

export const NotesContext = React.createContext(INITIAL_STATE);

export const NotesProvider = ({ children, state }) => {
  return (
    <NotesContext.Provider value={state || INITIAL_STATE}>
      {children}
    </NotesContext.Provider>
  );
};
