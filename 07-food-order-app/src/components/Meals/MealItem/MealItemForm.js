import { Button, Input } from "../../UI/UI";

import classes from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
  const mealItemFormHandler = (number) => {
    console.log(number);
  };

  return (
    <form className={classes.form}>
      <Input
        type="number"
        onChange={mealItemFormHandler}
        label="Number"
        id="quantity"
      />
      <Button>Add</Button>
    </form>
  );
};
