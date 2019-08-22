import React from "react";
import TodoList from "../../components/TodoList";
import Header from "../../components/Header";
import NewTodo from "../../components/AddTodo";
// import Filter from "../../components/TodoList/Filter";

// updateTodo = (e, id) => {
//   const newTodos = [...this.state.todos];
//   const todoIndex = newTodos.findIndex(todo => todo.id === id);
//   const todo = { ...this.state.todos[todoIndex] };
//   todo.content = e.currentTarget.value;
//   newTodos[todoIndex] = todo;
//   this.setState({ todos: newTodos });
// };

const App = () => {
  return (
    <div>
      <Header />
      <NewTodo />
      {/* <Filter /> */}
      <TodoList />
    </div>
  );
};

// const mapStateToProps = state => {
//   return state;
// };

// const connection = connect()
// const connectedApp = connection(App)
// export default connectedApp
//OR JUST IN ONE LINE:
// export default connect(mapStateToProps);

export default App;
