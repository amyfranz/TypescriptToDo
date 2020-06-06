import React, { useState } from "react";
import { ToDoList } from "./ToDoList";
import { AddToDoForm } from "./AddToDoForm";
import "./App.css";

const initialTodos: Array<Todo> = [
  { text: "walk in the park", completion: true },
  { text: "write app", completion: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodo = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, completion: !todo.completion };
      }
      return todo;
    });
    setTodos(newTodo);
  };
  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, completion: false }]);
  };
  return (
    <div className="mainContent">
      <div className="todoListComponent">
        <h1>My To Do List:</h1>
        <ToDoList todos={todos} toggleTodo={toggleTodo} />
        <AddToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
