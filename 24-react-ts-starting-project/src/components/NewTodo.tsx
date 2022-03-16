import React, { useRef, useContext } from "react";
import { TodosContext } from "../stores/todo-context";

import classes from "./NewTodo.module.css";

// export const NewTodo: React.FC<{ onAddTodo: (x: string) => void }> = (
//   props
// ) => {
//   const textInputRef = useRef<HTMLInputElement>(null);

//   const submitHandler = (event: React.FormEvent) => {
//     event.preventDefault();
//     const enteredText = textInputRef.current!.value;

//     if (enteredText.trim().length === 0) {
//       // throw an error
//       return;
//     }

//     props.onAddTodo(enteredText);
//   };

//   return (
//     <form onSubmit={submitHandler} className={classes.form}>
//       <label htmlFor="text">Todo</label>
//       <input type="text" id="text" placeholder="Todo" ref={textInputRef} />
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// };

export const NewTodo: React.FC = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todosContext = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosContext.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo</label>
      <input type="text" id="text" placeholder="Todo" ref={textInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
