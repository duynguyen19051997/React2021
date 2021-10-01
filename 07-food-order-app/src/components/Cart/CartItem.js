import { Li, CardNoStyle, H2, Span, Button } from "../UI/UI";

import classes from "./CartItem.module.css";

export const CartItem = (props) => {
  const item = props.item;
  const price = `$${(item.price * item.amount).toFixed(2)}`;

  return (
    <Li id={item.id} className={classes["cart-item"]}>
      <CardNoStyle>
        <H2>{item.name}</H2>
        <CardNoStyle className={classes.summary}>
          <Span>{price}</Span>
          <Span>x {item.amount}</Span>
        </CardNoStyle>
      </CardNoStyle>
      <CardNoStyle className={classes.actions}>
        <Button onClick={props.onRemove}>-</Button>
        <Button onClick={props.onAdd}>+</Button>
      </CardNoStyle>
    </Li>
  );
};
