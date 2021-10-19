import React, { useReducer } from "react";

import { Container, Timer } from "./styles";
import { initialState, reducer } from "./store";

const Promodoro = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <Timer>10:00</Timer>
    </Container>
  );
};

export default Promodoro;
