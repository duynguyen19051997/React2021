import { useContext } from "react";

import { Button, Span } from "../UI/UI";
import { CartIcon } from "../Cart/CartIcon";
import { CartContext } from "../store/cart-context";

import classes from "./HeaderCartButton.module.css";

export const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numberOfItems = cartContext.items.reduce(
    (prevNumber, currentNumber) => {
      return prevNumber + currentNumber.amount;
    },
    0
  );

  return (
    <Button className={classes.button} onClick={props.onClick}>
      <Span className={classes.icon}>
        <CartIcon />
      </Span>
      <Span>Your Cart</Span>
      <Span className={classes.badge}>{numberOfItems}</Span>
    </Button>
  );
};
