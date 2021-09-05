import { Button, Span } from "../UI/UI";
import { CartIcon } from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

export const HeaderCartButton = (props) => {
  return (
    <Button className={classes.button}>
      <Span className={classes.icon}>
        <CartIcon />
      </Span>
      <Span>Your Cart</Span>
      <Span className={classes.badge}>3</Span>
    </Button>
  );
};
