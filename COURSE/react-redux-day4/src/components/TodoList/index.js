import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TodoItem from "../TodoList/TodoItem";
import "./index.css";

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <ul>
          {/* FIX THIS: props not passing somehow */}
          {this.props.todos.map((todo, index) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array
};

const mapStateToProps = state => {
  let filteredTodo;

  switch (state.filter) {
    case "completed": {
      filteredTodo = state.todoReducer.filter(todo => todo.completed);
      break;
    }

    case "uncompleted": {
      filteredTodo = state.todoReducer.filter(todo => !todo.completed);
      break;
    }

    default:
      filteredTodo = state.todoReducer;
  }

  return { todos: filteredTodo };
};

export default connect(mapStateToProps)(TodoList);
