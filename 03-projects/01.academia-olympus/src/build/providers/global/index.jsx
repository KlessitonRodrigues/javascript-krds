import React, { useReducer, useCallback } from "react";

import { reducer, initialState } from "./store";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const newAction = useCallback((type, payload) => dispatch(type, payload));

  return (
    <GlobalContext.Provider value={[state, newAction, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
