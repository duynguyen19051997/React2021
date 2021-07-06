import { React, useState } from "react";

import { ExpensesList } from "./Components/ExpenseComponent/ExpensesList";
import { Card } from "./Components/UIComponent/UI";
import { ExpenseForm } from "./Components/ExpenseComponent/ExpenseForm";

import "./App.css";

const EXPENSE_LIST = [
  { id: "1", title: "Motor", price: "15", date: new Date() },
  { id: "2", title: "Car", price: "15", date: new Date() },
  { id: "3", title: "Plain", price: "15", date: new Date() },
  { id: "4", title: "Train", price: "15", date: new Date() },
  { id: "5", title: "Wheel barrow", price: "15", date: new Date() },
];

function App() {
  const [expenses, setExpenses] = useState(EXPENSE_LIST);

  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Math.floor(Math.random()).toString() };
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    console.log(id);
    setExpenses((prevExpense) => {
      return prevExpense.filter((x) => x.id !== id);
    });
  };

  return (
    <Card>
      <ExpenseForm onData={addExpense} />
      <ExpensesList onDelete={deleteExpense} expenses={expenses} />
    </Card>
  );
}

export default App;
