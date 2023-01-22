import { useContext, useEffect, useState } from "react";

import { TimerContext } from "../../providers/timer";
import Button from "../../templates/button/index";
import { Container, Timer, HHMM, SS } from "./styles";

const Promodoro = (): JSX.Element => {
  const [state, dispatch] = useContext(TimerContext);
  const [isPaused, setPaused] = useState(true);

  useEffect(() => {
    !isPaused && setTimeout(() => dispatch({ type: "COUNTER_INC" }), 10);
  });

  return (
    <Container>
      <Timer>
        <HHMM>{`${state.timer.hh}:${state.timer.mm}`}</HHMM>
        <SS>{state.timer.ss}</SS>
      </Timer>
      <Button
        text={isPaused ? "Start" : "Pause"}
        onClick={() => setPaused(!isPaused)}
      />
      <Button
        text="Reset"
        onClick={() => {
          setPaused(true);
          dispatch({ type: "COUNTER_RESET" });
        }}
      />
    </Container>
  );
};

export default Promodoro;
