import { CHANGE_FILTER } from "../types";

const initialState = "all";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.data;

    default:
      return state;
  }
};

export default filterReducer;
