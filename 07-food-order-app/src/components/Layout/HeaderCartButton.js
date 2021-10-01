import { useContext, useEffect, useState } from "react";

import { Button, Span } from "../UI/UI";
import { CartIcon } from "../Cart/CartIcon";
import { CartContext } from "../store/cart-context";

import classes from "./HeaderCartButton.module.css";

export const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const numberOfItems = items.reduce((prevNumber, currentNumber) => {
    return prevNumber + currentNumber.amount;
  }, 0);

  const btnClass = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;
  useEffect(() => {
    if (items === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button className={btnClass} onClick={props.onClick}>
      <Span className={classes.icon}>
        <CartIcon />
      </Span>
      <Span>Your Cart</Span>
      <Span className={classes.badge}>{numberOfItems}</Span>
    </Button>
  );
};
