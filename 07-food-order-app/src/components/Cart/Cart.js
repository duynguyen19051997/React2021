import { CardNoStyle, Ul, Li, Span, Button, Modal } from "../UI/UI";

import classes from "./Cart.module.css";

export const Cart = (props) => {
  const cartItems = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const test = () => {};

  return (
    <Modal onClose={props.onClose}>
      <Ul className={classes["cart-items"]}>
        {cartItems.map((x) => (
          <Li key={x.id}>{x.name}</Li>
        ))}
      </Ul>
      <CardNoStyle className={classes.total}>
        <Span>Total Amount:</Span>
        <Span>150</Span>
      </CardNoStyle>
      <CardNoStyle className={classes.actions}>
        <Button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </Button>
        <Button className={classes.button} onClick={test}>
          Order
        </Button>
      </CardNoStyle>
    </Modal>
  );
};
