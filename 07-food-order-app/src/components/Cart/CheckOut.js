import { useRef } from "react";

import { Button, Card, CardNoStyle, InputRef } from "../UI/UI";

import classes from "./CheckOut.module.css";

export const CheckOut = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({
      name: nameRef.current.value,
      street: streetRef.current.value,
      postal: postalRef.current.value,
      city: cityRef.current.value,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <InputRef
        className={classes.control}
        ref={nameRef}
        id="name"
        type="text"
        label="Your Name"
      />
      <InputRef
        className={classes.control}
        ref={streetRef}
        id="street"
        type="text"
        label="Street"
      />
      <InputRef
        className={classes.control}
        ref={postalRef}
        id="postal"
        type="text"
        label="Postal Code"
      />
      <InputRef
        className={classes.control}
        ref={cityRef}
        id="city"
        type="text"
        label="City"
      />
      <CardNoStyle className={classes.actions}>
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button type="submit" className={classes.submit}>
          Confirm
        </Button>
      </CardNoStyle>
    </form>
  );
};
