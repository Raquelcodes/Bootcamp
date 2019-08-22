import React from "react";
import "./index.css";

const TodoItem = ({
  content,
  id,
  completed,
  deleteTodo,
  updateTodo,
  markCompleted
}) => {
  return (
    <div>
      <div
        onClick={e => markCompleted(e.currentTarget, id)}
        className={completed ? "completed" : "pending"}
      >
        <h2>
          {" "}
          <input
            className="update-box"
            type="text"
            value={content}
            onChange={e => updateTodo(e, id)}
          />
        </h2>
      </div>

      <button className="delete-button" onClick={() => deleteTodo(id)}>
        Delete {content}
      </button>
    </div>
  );
};

export default TodoItem;

//if i wanted to differentiate when completed:true or completed:false , can just change the style conidtionaly in th <li> tag like below:
// className={ this.props.todo.completed ? 'TodoItem-completed' : '' }
