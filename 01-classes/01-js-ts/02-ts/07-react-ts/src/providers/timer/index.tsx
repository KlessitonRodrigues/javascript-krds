import { createContext, useReducer, Dispatch, ReactNode } from "react";

import { initialState, reducer, Action, State } from "./store";

type Props = {
  children: ReactNode;
};

type Context = [state: State, dispatch: Dispatch<Action>];

const dispatch: Dispatch<Action> = (v) => {};

export const TimerContext = createContext<Context>([initialState, dispatch]);

export const TimerProvider = ({ children }: Props) => (
  <TimerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TimerContext.Provider>
);
