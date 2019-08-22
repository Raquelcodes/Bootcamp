const initialState = {};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        token: action.payload,
        error: null,
        authenticated: true
      };

    case "error":
      return {
        ...state,
        token: null,
        error: action.payload,
        authenticated: false
      };
    case "logout":
      localStorage.clear();
      return { ...state, token: null, error: null, authenticated: false };

    default:
      return state;
  }
};
