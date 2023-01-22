const CounterClosure = () => {
  let counterValue = 0;
  let counterStep = 1;

  return {
    step: {
      get: () => counterStep,
      inc: () => {
        counterValue += 1;
        return counterValue;
      },
      dec: () => {
        counterValue -= 1;
        return counterValue;
      },
    },

    value: {
      get: () => counterValue,
      inc: () => {
        counterValue += counterStep;
        return counterValue;
      },
      dec: () => {
        counterValue -= counterStep;
        return counterValue;
      },
    },
  };
};

export default CounterClosure();
