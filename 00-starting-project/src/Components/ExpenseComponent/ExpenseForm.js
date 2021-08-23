import { React, useState } from "react";

import { Card, Label, Input, Button } from ".././UIComponent/UI";

import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const getTitleEntered = (title) => {
    setEnteredTitle(title);
  };

  const getPriceEntered = (price) => {
    setEnteredPrice(parseFloat(price));
  };

  const getDateEntered = (date) => {
    setEnteredDate(date);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredTitle.length >= 0 &&
      parseFloat(enteredPrice) >= parseFloat(0) &&
      enteredDate.length >= 8
    ) {
      props.onData({
        title: enteredTitle,
        price: enteredPrice,
        date: new Date(enteredDate),
      });
      setEnteredTitle("");
      setEnteredPrice("");
      setEnteredDate("");
    } else {
      alert("Error");
    }
  };

  return (
    <Card className="expense-form">
      <form onSubmit={submitHandler}>
        <Card className="input-label-area">
          <Label>Title</Label>
          <Input
            type="text"
            name="Title"
            className="input-title"
            onChange={getTitleEntered}
            value={enteredTitle}
          />
        </Card>
        <Card className="input-label-area">
          <Label>Price</Label>
          <Input
            type="number"
            name="Price"
            className="input-price"
            onChange={getPriceEntered}
            value={enteredPrice}
          />
        </Card>
        <Card className="input-label-area">
          <Label>Date</Label>
          <Input
            type="date"
            name="Date"
            className="input-date"
            onChange={getDateEntered}
            value={enteredDate}
          />
        </Card>
        <Card className="input-label-area">
          <Button className="expense-form__button" type="submit">
            Submit
          </Button>
        </Card>
      </form>
    </Card>
  );
};
