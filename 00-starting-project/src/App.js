import { ExpensesList } from "./Components/ExpenseComponent/ExpensesList";
import { Card } from "./Components/UIComponent/UI";

import "./App.css";

const EXPENSE_LIST = [
  { id: "1", title: "Motor", price: "15", date: new Date() },
  { id: "2", title: "Car", price: "15", date: new Date() },
  { id: "3", title: "Plain", price: "15", date: new Date() },
  { id: "4", title: "Train", price: "15", date: new Date() },
  { id: "5", title: "Wheel barrow", price: "15", date: new Date() },
];

function App() {
  return (
    <Card>
      <ExpensesList expenses={EXPENSE_LIST} />
    </Card>
  );
}

export default App;
