import { useRef, useState } from "react";
import { Button, InputRef, P, Modal } from "../../UI/UI";

import classes from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [success, setSuccess] = useState(false);

  const errorHideHandler = () => {
    setAmountIsValid(true);
  };

  const successHideHandler = () => {
    setSuccess(false);
  };

  const amountInputRef = useRef();

  const mealItemFormHandler = (number) => {
    console.log(number);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const amountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || amountNumber < 1) {
      setAmountIsValid(false);
      return;
    }
    setSuccess(true);
    props.onAddToCart(amountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <InputRef
        ref={amountInputRef}
        type="number"
        onChange={mealItemFormHandler}
        label="Number"
        id="amount"
        defaultValue="1"
      />
      <Button>Add</Button>
      {!amountIsValid && (
        <Modal onClose={errorHideHandler}>
          <P>Please enter a valid amount greater than 1.</P>
          <Button className={classes.button} onClick={errorHideHandler}>
            Close
          </Button>
        </Modal>
      )}
      {success && (
        <Modal onClose={successHideHandler}>
          <P>Add successful to cart.</P>
          <Button className={classes.button} onClick={successHideHandler}>
            Close
          </Button>
        </Modal>
      )}
    </form>
  );
};
