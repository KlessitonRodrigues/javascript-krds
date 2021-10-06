import React, { useState } from "react";

const dateNow = () =>
  new Date().toLocaleString("pt", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

const INITIAL_STATE = {
  editorIndex: 0,
  store: [
    {
      index: 0,
      date: dateNow(),
      text: "lorem ipsum",
    },
  ],
};

export const NotesContext = React.createContext();

export const NotesProvider = ({ children, value }) => {
  const notesState = useState(value || INITIAL_STATE);

  return (
    <NotesContext.Provider value={notesState}>{children}</NotesContext.Provider>
  );
};
