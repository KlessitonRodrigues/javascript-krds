declare namespace TranslateTypes {
  type State = {
    input: {
      text: string;
      lang?: string;
    };
    output: {
      text: string;
      lang?: string;
    };
  };

  type Action =
    | { type: "SET_INPUT"; payload: State["input"] }
    | { type: "INVERT_LANGS" };

  type Context = [state: State, dispatch: React.Dispatch<Action>];
}
