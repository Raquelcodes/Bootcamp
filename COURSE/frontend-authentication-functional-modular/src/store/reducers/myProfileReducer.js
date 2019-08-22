const initialState = {};

export const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getmyprofile":
      const getMe = {
        ...state,
        myprofile: action.payload
      };
      //console.log("get me reducer", getMe)
      return getMe;
    default:
        return state
    }
}