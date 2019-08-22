import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodo, handleToggleCompleted } from "../../../store/actions";
import "./index.css";

class TodoItem extends Component {
  handleRemoveTodo = () => {
    const action = removeTodo(this.props.todo.id);
    this.props.dispatch(action);
  };

  handleToggleCompleted = () => {
    const action = handleToggleCompleted(this.props.todo.id);
    this.props.dispatch(action);
  };

  render() {
    return (
      <li>
        <span
          onClick={this.handleToggleCompleted}
          className={this.props.todo.completed ? "completed" : ""}
        >
          {this.props.todo.content}
        </span>
        <button onClick={this.handleRemoveTodo}>X</button>
      </li>
    );
  }
}

export default connect()(TodoItem);

//if i wanted to differentiate when completed:true or completed:false , can just change the style conidtionaly in th <li> tag like below:
// className={ this.props.todo.completed ? 'TodoItem-completed' : '' }
