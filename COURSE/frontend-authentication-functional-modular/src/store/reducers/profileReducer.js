const initialState = {};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getuserprofile":
      const profile = {
        ...state,
        profile:action.payload
      };
      //console.log("profile reducer get profile",profile)
      return profile;
    default:
      return state;
  }
};
