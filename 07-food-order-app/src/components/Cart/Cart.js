import { useContext, useState } from "react";
import { CartItem } from "./CartItem";
import { CartContext } from "../store/cart-context";

import { CardNoStyle, Ul, Span, Button, Modal, P } from "../UI/UI";

import classes from "./Cart.module.css";
import { CheckOut } from "./CheckOut";

export const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isAddingSuccess, setIsAddSuccess] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItems = cartContext.items;

  const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
  const itemIsExist = cartContext.items.length > 0;

  const orderHandler = () => {
    setIsAddSuccess(false);
    setIsCheckOut(true);
  };

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

  const cancelCheckout = () => {
    setIsCheckOut(false);
  };

  const cartAction = (
    <CardNoStyle className={classes.actions}>
      <Button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </Button>
      {itemIsExist && (
        <Button className={classes.button} onClick={orderHandler}>
          Order
        </Button>
      )}
    </CardNoStyle>
  );

  const submitOrderHandler = async (userData) => {
    const response = await fetch(
      "https://react-http-66256-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userData, orderItems: cartContext.items }),
      }
    );

    if (response.ok) {
      setIsCheckOut(false);
      cartContext.clearCart();
    }
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

      {isAddingSuccess && (
        <P className={classes["success-error"]}>Order success</P>
      )}

      {isCheckOut && (
        <CardNoStyle>
          <CheckOut onCancel={cancelCheckout} onConfirm={submitOrderHandler} />
        </CardNoStyle>
      )}

      {!isCheckOut && cartAction}
    </Modal>
  );
};
