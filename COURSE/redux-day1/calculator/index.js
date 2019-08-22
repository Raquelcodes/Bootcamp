const initialState = {
  counter: 0,
  todos: ["todo1", "todo2"]
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      let newStateIncrement = { ...state };
      //console.log(newStateIncrement);
      newStateIncrement.counter += 1;
      //console.log("here", newStateIncrement);
      return newStateIncrement;

    case "DECREMENT":
      let newStateDecrement = { ...state };
      newStateDecrement.counter -= 1;
      //console.log("here", newStateDecrement);
      return newStateDecrement;

    default:
      return state;
  }
};

const todosReducer = (state = initialState, action) => {
  console.log("first in todored", action);
  switch (action.type) {
    case "ADD-TODO":
      let newTodoState = { ...state };
      let newTodos = newTodoState.todos.concat([action.data]);
      console.log("newTodoState", newTodoState);
      console.log("actiotext", action.data);
      newTodoState.todos = newTodos;
      return newTodoState;
      break;

    default:
      return state;
      break;
  }
};

const reducer = Redux.combineReducers({
  counterReducer,
  todosReducer
});

const store = Redux.createStore(reducer);
//console.log(store);

//COUNTER

const render = () => {
  const countElement = document.getElementById("counter");
  const state = store.getState();
  countElement.innerHTML = state.counterReducer.counter;

  const todoList = document.getElementById("todos");
  const stateTodo = store.getState();
  todoList.innerHTML = stateTodo.todosReducer.todos;
};
//could have done a loop to create a list
//   const todoList = document.getElementById("todos");
//   todoList.innerHTML = "";
//   for (let i = 0; i < state.todos.length; i++) {
//     const todoElement = document.createElement("li");
//     todoElement.innerHTML = stateTodo.todo[i];
//     todoList.appendChild(todoElement);
//   }
// };

const incrementButton = document
  .getElementById("increment-button")
  .addEventListener("click", () => {
    store.dispatch({ type: "INCREMENT" });
    render();
  });

const decrementButton = document
  .getElementById("decrement-button")
  .addEventListener("click", () => {
    //console.log("dec listener");
    store.dispatch({ type: "DECREMENT" });
    render();
  });

//  store.subscribe(render);

//TODOS

const addTodoButton = document
  .getElementById("add-todo")
  .addEventListener("click", () => {
    //console.log("add todo listener");
    let text = document.getElementById("new-todo").value; //to get the input value
    store.dispatch({ type: "ADD-TODO", data: text });
    render();
  });
render();
