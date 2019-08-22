import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  question: {},
  answers: {
    content: "",
    isCorrect: ""
  }
};

const reducer = (state = initialState, action) => {
  console.log("reducer", "action", action, "iniitalState", initialState);
  switch (action.type) {
    case "ADD_QUESTION":
      const newQuestion = {
        ...state,
        question: action.payload
      };
      return newQuestion;
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
