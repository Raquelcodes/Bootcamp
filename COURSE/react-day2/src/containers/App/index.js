import React, { Component } from "react";
import uuid from "uuid";
import TodoList from "../../components/TodoList";
import Header from "../../components/Header";
import NewTodo from "../../components/AddTodo";

//import { tsConstructSignatureDeclaration } from '@babel/types';

class App extends Component {
  state = {
    todos: [
      { id: uuid(), content: "todo1", completed: false },
      { id: uuid(), content: "todo2", completed: false }
    ]
  };

  deleteTodo = id => {
    const newTodos = [...this.state.todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);
    newTodos.splice(todoIndex, 1);
    this.setState({ todos: newTodos });
  };

  addNewTodo = ({ content }) => {
    const newTodo = {
      id: uuid(),
      content
    };
    const todos = [...this.state.todos];
    const newTodos = todos.concat(newTodo);
    this.setState({ todos: newTodos });
  };

  markCompleted = (e, id) => {
    const newTodos = [...this.state.todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);
    const todo = { ...this.state.todos[todoIndex] };
    todo.completed = !todo.completed;
    newTodos[todoIndex] = todo;
    this.setState({ todos: newTodos });
  };

  updateTodo = (e, id) => {
    const newTodos = [...this.state.todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);
    const todo = { ...this.state.todos[todoIndex] };
    todo.content = e.currentTarget.value;
    newTodos[todoIndex] = todo;
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NewTodo addNewTodo={this.addNewTodo} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
          markCompleted={this.markCompleted}
        />
      </div>
    );
  }
}

export default App;
