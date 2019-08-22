const initialState = {};

export const myLikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getmylikes":
      const getMyLikes = {
        ...state,
        mylikes: action.payload
      };
      console.log("get my likes reducer", getMyLikes)
      return getMyLikes;
    default:
        return state
    }
}
