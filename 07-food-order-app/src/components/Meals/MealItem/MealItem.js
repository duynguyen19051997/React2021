import { CardNoStyle, Li, H3 } from "../../UI/UI";
import { MealItemForm } from "./MealItemForm";

import classes from "./MealItem.module.css";

export const MealItem = (props) => {
  const meal = props.meal;
  const price = `$${meal.price.toFixed(2)}`;
  return (
    <Li key={meal.id} className={classes.meal}>
      <CardNoStyle>
        <H3>{meal.name}</H3>
        <CardNoStyle className={classes.description}>
          {meal.description}
        </CardNoStyle>
        <CardNoStyle className={classes.price}>{price}</CardNoStyle>
      </CardNoStyle>
      <CardNoStyle>
        <MealItemForm />
      </CardNoStyle>
    </Li>
  );
};
