import React, { useState } from "react";
import { Todo } from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn Type Script"),
    new Todo("Learn Redux React"),
  ]);

  const addTodoHandler = (x: string) => {
    setTodos((preTodos) => {
      return [new Todo(x), ...preTodos];
    });
  };

  const deleteTodoHandler = (x: string) => {
    setTodos((preTodos) => {
      return preTodos.filter((t) => t.id !== x);
    });
  };

  const defaultContext: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={defaultContext}>
      {props.children}
    </TodosContext.Provider>
  );
};
