//all reducers go here

import { combineReducers } from "redux";
import todoReducer from "./todo-reducer";
import filterReducer from "./filter-reducer";

const reducers = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export default reducers;
