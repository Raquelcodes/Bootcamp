const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getusers":
      const user = {
        ...state,
        users:action.payload
      };
      //console.log("user reducer get user",user)
      return user;
    default:
      return state;
  }
};
