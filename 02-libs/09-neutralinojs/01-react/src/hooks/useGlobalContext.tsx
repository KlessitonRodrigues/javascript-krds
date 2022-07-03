import React from "react";

const initialState = {
  darkTheme: false,
};

type InitialState = typeof initialState;
type GlobalContext = [
  typeof initialState,
  React.Dispatch<React.SetStateAction<InitialState>>
];

const globalContext = React.createContext<GlobalContext>([
  initialState,
  () => {},
]);

export const GlobalProvider = (props: React.PropsWithChildren) => {
  const globalState = React.useState(initialState);

  return (
    <globalContext.Provider value={globalState}>
      {props.children}
    </globalContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(globalContext);
};

export default useGlobalContext;
