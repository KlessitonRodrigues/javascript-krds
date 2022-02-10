import './types'

export const initialState: TranslateTypes.State = {
  input: {
    text: "",
    lang: "",
  },
  output: {
    text: "",
    lang: "",
  },
};

export function reducer(
  state: TranslateTypes.State,
  action: TranslateTypes.Action
) {
  switch (action.type) {
    case "SET_INPUT":
      return state;
    default:
      return state;
  }
}
