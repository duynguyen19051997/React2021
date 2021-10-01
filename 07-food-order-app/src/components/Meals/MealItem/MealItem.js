import { useContext } from "react";

import { CardNoStyle, Li, H3 } from "../../UI/UI";
import { MealItemForm } from "./MealItemForm";
import { CartContext } from "../../store/cart-context";

import classes from "./MealItem.module.css";

export const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const meal = props.meal;
  const price = `$${meal.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: amount,
    });
  };

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
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </CardNoStyle>
    </Li>
  );
};
