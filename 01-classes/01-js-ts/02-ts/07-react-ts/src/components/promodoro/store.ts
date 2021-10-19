type Timer = {
  hh: number;
  mm: number;
  ss: number;
};

type State = {
  counter: number;
  timer: Timer;
  preSets: number[];
};

type Action = {
  type: string;
  payload: unknown;
};

export const initialState: State = {
  counter: 0,
  timer: { hh: 0, mm: 0, ss: 0 },
  preSets: [10000, 30000, 60000],
};

export function reducer(state: State, action: Action) {
  let { counter, timer } = state;

  switch (action.type) {
    case "INCREMENT":
      counter += 1;
      timer = secondsToTime(counter);
      return { ...state, counter, timer };

    default:
      return state;
  }
}

function secondsToTime(sec: number): Timer {
  const timer: Timer = { hh: 0, mm: 0, ss: 0 };
  timer.hh = sec / 3600;
  timer.mm = (sec % 3600) / 60;
  timer.ss = (sec % 3600) % 60;
  return timer;
}

// export const newAction = (dispatch: Function, type: string, payload: unknown) =>
//  dispatch({ type, payload });
