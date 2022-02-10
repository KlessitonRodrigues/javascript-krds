import React, { useReducer } from "react";
import { initialState, reducer } from "./store";
import "./types";

export const TranslateContext = React.createContext<TranslateTypes.Context>([
  initialState,
  () => {},
]);

export const translateProvider = (props: { children: React.ReactChild }) => (
  <TranslateContext.Provider value={useReducer(reducer, initialState)}>
    {props.children}
  </TranslateContext.Provider>
);
