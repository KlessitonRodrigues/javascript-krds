import React from 'react';

import { GlobalState, globalState } from './state';

type InitialState = GlobalState;
type GlobalContext = [GlobalState, React.Dispatch<React.SetStateAction<InitialState>>];

const globalContext = React.createContext<GlobalContext>([globalState, () => {}]);

export const GlobalProvider = (props: React.PropsWithChildren) => {
  const state = React.useState(globalState);

  return <globalContext.Provider value={state}>{props.children}</globalContext.Provider>;
};

const useGlobalContext = () => {
  return React.useContext(globalContext);
};

export default useGlobalContext;
