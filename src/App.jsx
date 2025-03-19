import { useState } from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (name, date) => {
    const newTodo = {
      id: Date.now(),
      name,
      date,
      status: "Pending",
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newName, newDate) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, name: newName, date: newDate } : todo
      )
    );
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === "Pending" ? "Completed" : "Pending" }
          : todo
      )
    );
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} toggleStatus={toggleStatus} />
    </center>
  );
}

export default App;
