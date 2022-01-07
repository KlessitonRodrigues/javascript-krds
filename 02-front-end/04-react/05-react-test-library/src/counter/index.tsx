import React, { useState } from "react";
import Button from "../button";

import * as s from "./style";

type Props = {
  startFrom?: number;
};

const Counter = ({ startFrom }: Props) => {
  const [counter, setCounter] = useState(startFrom || 0);

  return (
    <div style={s.Container}>
      <div style={s.Counter}>{counter}</div>
      <div>
        <Button text="Inc" onClick={() => setCounter(counter + 1)} />
        <Button text="Dec" onClick={() => setCounter(counter - 1)} />
        <Button text="Reset" onClick={() => setCounter(startFrom || 0)} />
      </div>
    </div>
  );
};

export default Counter;
