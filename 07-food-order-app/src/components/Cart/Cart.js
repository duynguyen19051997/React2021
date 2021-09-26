import { useContext } from "react";
import { MealItem } from "../Meals/MealItem/MealItem";
import { CartContext } from "../store/cart-context";

import { CardNoStyle, Ul, Span, Button, Modal } from "../UI/UI";

import classes from "./Cart.module.css";

export const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = cartContext.items;

  const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
  const itemIsExist = cartContext.items.length > 0;

  const test = () => {};

  return (
    <Modal onClose={props.onClose}>
      <Ul className={classes["cart-items"]}>
        {cartItems.map((x) => (
          <MealItem key={x.id} meal={x} />
        ))}
      </Ul>
      <CardNoStyle className={classes.total}>
        <Span>Total Amount:</Span>
        <Span>{cartContext.totalAmount}</Span>
      </CardNoStyle>
      <CardNoStyle className={classes.total}>
        <Span>Total Price:</Span>
        <Span>{totalPrice}</Span>
      </CardNoStyle>
      <CardNoStyle className={classes.actions}>
        <Button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </Button>
        {itemIsExist && (
          <Button className={classes.button} onClick={test}>
            Order
          </Button>
        )}
      </CardNoStyle>
    </Modal>
  );
};
