import React, { Component } from "react";

class NewTodo extends Component {
  state = {
    content: ""
  };

  //to update the state to what we type
  onChangeContentHandler = e => {
    this.setState({
      content: e.currentTarget.value
    });
  };

  //to override the fact that the button is always a POST method we want to prevent this default behavior
  //so we pass the parent props here and then pass this new function with the onclick button
  addNewTodoHandler = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="to do"
          value={this.state.content}
          onChange={this.onChangeContentHandler}
        />
        <button onClick={this.addNewTodoHandler}>Add Todo</button>
      </form>
    );
  }
}

export default NewTodo;
