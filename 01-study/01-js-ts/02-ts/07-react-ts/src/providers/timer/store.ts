type Timer = {
  hh: string;
  mm: string;
  ss: string;
};

export type State = {
  counter: number;
  timer: Timer;
  preSets: number[];
};

export type Action =
  | { type: "COUNTER_INC" }
  | { type: "COUNTER_RESET" }
  | { type: "ADD_PRESET"; payload: Timer };

export const initialState: State = {
  counter: 0,
  timer: { hh: "00", mm: "00", ss: "00" },
  preSets: [10000, 30000, 60000],
};

export function reducer(state: State, action: Action) {
  let { counter, timer } = Object.assign({}, state);

  switch (action.type) {
    case "COUNTER_INC":
      counter = Number(counter) + 1;
      timer = secondsToTime(counter);
      return { ...state, counter, timer };

    case "COUNTER_RESET":
      counter = -1;
      return { ...initialState, counter };

    default:
      return state;
  }
}

function secondsToTime(count: number): Timer {
  const hh = Math.floor(count / 3600);
  const mm = Math.floor((count % 3600) / 60);
  const ss = Math.floor((count % 3600) % 60);

  const leftZero = (v: number) => (v < 10 ? "0" + v : "" + v);

  return {
    hh: leftZero(hh),
    mm: leftZero(mm),
    ss: leftZero(ss),
  };
}
