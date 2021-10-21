import React, { useReducer } from "react";

import { initialState, reducer } from "./store";

interface Props {
  children: JSX.Element;
}

export const TimerContext = React.createContext(undefined);
TimerContext.displayName = "TimerContext";

export const TimerProvider = (props: Props): JSX.Element => {
  const store = useReducer(reducer, initialState);

  return (
    <TimerContext.Provider value={store}>
      {props.children}
    </TimerContext.Provider>
  );
};
