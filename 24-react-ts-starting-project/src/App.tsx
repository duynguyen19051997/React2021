import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";
import { TodosContextProvider } from "./stores/todo-context";

// function App() {
//   const [todos, setTodos] = useState<Todo[]>([
//     new Todo("Learn React"),
//     new Todo("Learn Type Script"),
//     new Todo("Learn Redux React"),
//   ]);

//   const addTodoHandler = (x: string) => {
//     setTodos((preTodos) => {
//       return [new Todo(x), ...preTodos];
//     });
//   };

//   const deleteTodoHandler = (x: string) => {
//     setTodos((preTodos) => {
//       return preTodos.filter((t) => t.id !== x);
//     });
//   };

//   return (
//     <div>
//       <React.StrictMode>
//         <NewTodo onAddTodo={addTodoHandler} />
//         <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
//       </React.StrictMode>
//     </div>
//   );
// }

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
