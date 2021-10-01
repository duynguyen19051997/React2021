import { useContext } from "react";
import { CartItem } from "./CartItem";
import { CartContext } from "../store/cart-context";

import { CardNoStyle, Ul, Span, Button, Modal } from "../UI/UI";

import classes from "./Cart.module.css";

export const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = cartContext.items;

  const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
  const itemIsExist = cartContext.items.length > 0;

  const test = () => {};

  const addItemToCart = (item) => {
    cartContext.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      amount: 1,
    });
  };

  const removeItemToCart = (id) => {
    cartContext.removeItem(id);
  };

  return (
    <Modal onClose={props.onClose}>
      <Ul className={classes["cart-items"]}>
        {cartItems.map((x) => (
          <CartItem
            key={x.id}
            item={x}
            onAdd={addItemToCart.bind(null, x)}
            onRemove={removeItemToCart.bind(null, x.id)}
          />
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
