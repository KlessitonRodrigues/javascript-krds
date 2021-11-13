export const INITIAL_STATE = {
  selecteds: [],
};

/** @type { Reducer } */
export function reducer(state, action) {
  const { selecteds } = state;

  switch (action.type) {
    case "ADD_SELECTION":
      selecteds.push(action.payload);
      return { selecteds };

    case "REMOVE_SELECTION":
      const removeIndex = selecteds.indexOf(action.payload);
      selecteds.splice(removeIndex, 1);
      return { selecteds };

    default:
      return state;
  }
}

export function newAction(dispatch, type, payload = null) {
  return dispatch({ type, payload });
}

/** @typedef {(
 * state: { selecteds: string[] },
 * action: { type: string, payload?: any}
 * ) => any } Reducer */
