import React, { useContext } from "react";
import { TodosContext } from "../stores/todo-context";
import { TodoItem } from "./TodoItem";

import classes from "./Todos.module.css";

// export const Todos: React.FC<{
//   items: Todo[];
//   onDeleteTodo: (id: string) => void;
// }> = (props) => {
//   return (
//     <ul className={classes.todos}>
//       {props.items.map((t) => (
//         <TodoItem
//           text={t.text}
//           key={t.id}
//           onDeleteTodo={props.onDeleteTodo.bind(null, t.id)}
//         />
//       ))}
//     </ul>
//   );
// };

export const Todos: React.FC = (props) => {
  const todosContext = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosContext.items.map((t) => (
        <TodoItem
          text={t.text}
          key={t.id}
          onDeleteTodo={todosContext.deleteTodo.bind(null, t.id)}
        />
      ))}
    </ul>
  );
};
