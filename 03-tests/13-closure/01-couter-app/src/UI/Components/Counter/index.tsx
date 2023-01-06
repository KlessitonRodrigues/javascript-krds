import { Buttons, Container } from "./styled";
import { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import Button from "src/UI/Base/Buttons";
import Display from "src/UI/Base/Display";
import counterClosure from "src/closures/counter";

const Counter = () => {
  const { value, step } = counterClosure;
  const [counter, setCounter] = useState({ display: value.get(), count: step.get() });

  return (
    <Container>
      <Display value={counter.display} />
      <Buttons>
        <Button
          label={counter.count}
          icon={<TiPlus />}
          onClick={() => setCounter({ ...counter, display: value.inc() })}
        />
        <Button
          label={counter.count}
          showArrows
          onArrowclick={(dir) =>
            setCounter({ ...counter, count: dir === "up" ? step.inc() : step.dec() })
          }
        />
        <Button
          label={counter.count}
          icon={<TiMinus />}
          onClick={() => setCounter({ ...counter, display: value.dec() })}
        />
      </Buttons>
    </Container>
  );
};

export default Counter;
