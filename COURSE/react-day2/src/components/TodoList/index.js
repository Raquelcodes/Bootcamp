import React from "react";
import TodoItem from "./TodoItem";
import "./index.css";

const TodoList = ({ todos, deleteTodo, updateTodo, markCompleted }) => {
  return (
    <div>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            markCompleted={markCompleted}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
