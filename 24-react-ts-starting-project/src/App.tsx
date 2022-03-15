import React from "react";
import { Todos } from "./components/Todos";
import { Todo } from "./models/todo";

const TODO_DUMMY = [
  new Todo("Learn React"),
  new Todo("Learn TypeSript"),
  new Todo("Learn Redux React"),
];

function App() {
  return (
    <div>
      <React.StrictMode>
        <Todos items={TODO_DUMMY} />
      </React.StrictMode>
    </div>
  );
}

export default App;
