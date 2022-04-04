import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="TodoListContainer">
        <h1>TODO LIST Apollo Client 3</h1>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
