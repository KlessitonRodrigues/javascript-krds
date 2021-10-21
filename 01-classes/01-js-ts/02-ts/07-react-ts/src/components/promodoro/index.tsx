import React, { useContext } from "react";

import { TimerContext } from "../../providers/timer";
import { Container, Timer } from "./styles";

const Promodoro = (): JSX.Element => {
  // const [] = useContext(TimerContext)

  return (
    <Container>
      <Timer>10:00</Timer>
    </Container>
  );
};

export default Promodoro;
