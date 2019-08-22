const initialState = {};

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getfeed":
      const getFeed = {
        ...state,
        posts: action.payload
      };
      return getFeed;
    case "getusers":
      return{
        ...state,
        users:action.payload
      }
    default:
      return state;
  }
};
