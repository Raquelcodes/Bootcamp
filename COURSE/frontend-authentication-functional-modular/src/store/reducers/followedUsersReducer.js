const initialState = {};

export const followedUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getfollowedusers":
      const followeduser = {
        ...state,
        followedusers:action.payload
      };
      console.log("user reducer get followed user",followeduser)
      return followeduser;
    default:
      return state;
  }
};
