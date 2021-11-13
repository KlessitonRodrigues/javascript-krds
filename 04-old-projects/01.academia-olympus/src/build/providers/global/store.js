export const initialState = {
  user: { name: "test", login: true },
};

export function reducer(state, action) {
  const { user } = state;

  switch (action.type) {
    case "USER_LOGIN":
      user.name = action.payload;
      user.login = true;
      return { ...state, user };

    case "USER_LOGOUT":
      user.login = false;
      return { ...state, user };

    default:
      return state;
  }
}
