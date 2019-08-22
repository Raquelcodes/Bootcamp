import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETED } from "../types";

import uuid from "uuid";

const initialState = [
  { id: uuid(), content: "todo1", completed: false },
  { id: uuid(), content: "todo2", completed: true }
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const todo = {
        content: action.data,
        completd: false,
        id: uuid()
      };
      // creates copy of the state
      let newState = [...state];
      // concats the new object
      const newTodos = newState.concat(todo);
      return newTodos;
    }
    case REMOVE_TODO: {
      let newState = [...state];
      // returns an array with all the todos except the one in the action
      const todos = newState.filter(todo => todo.id !== action.data);
      return todos;
    }
    case TOGGLE_COMPLETED: {
      // gets the index of the todo from the state
      const todoIndex = state.findIndex(todo => todo.id === action.data);
      // copies the todo
      const todo = { ...state[todoIndex] };
      // inverts the property of todo completed
      todo.completed = !todo.completed;
      // copies the state
      const newState = [...state];
      // overwrites the copy of the state with the new todo
      newState[todoIndex] = todo;
      return newState;
    }

    default:
      return state;
  }
};
export default todoReducer;
