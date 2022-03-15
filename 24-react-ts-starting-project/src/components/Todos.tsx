import React from "react";
import { Todo } from "../models/todo";
import { TodoItem } from "./TodoItem";

export const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((t) => (
        <TodoItem text={t.text} key={t.id} />
      ))}
    </ul>
  );
};
