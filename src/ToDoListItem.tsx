import React from "react";
import "./ToDoListItem.css";

interface ToDoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const ToDoListItem: React.FC<ToDoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.completion ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.completion}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
