import { Button, CardNoStyle, Input } from "../UI/UI";
import { useInput } from "../../hooks/use-input";

import classes from "./CheckOut.module.css";

export const CheckOut = (props) => {
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangedHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((x) => {
    return x.trim() !== "";
  });

  const {
    value: street,
    valueIsValid: streetIsValid,
    hasError: streetHasError,
    valueChangedHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput((x) => {
    return x.trim() !== "";
  });

  const {
    value: postal,
    valueIsValid: postalIsValid,
    hasError: postalHasError,
    valueChangedHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: postalReset,
  } = useInput((x) => {
    return x.trim() !== "";
  });

  const {
    value: city,
    valueIsValid: cityIsValid,
    hasError: cityHasError,
    valueChangedHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((x) => {
    return x.trim() !== "";
  });

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !streetIsValid || !postalIsValid || !cityIsValid) {
      return;
    }
    console.log({
      name,
      street,
      city,
      postal,
    });

    props.onConfirm({ name, street, postal, city });

    nameReset();
    streetReset();
    postalReset();
    cityReset();
  };

  const nameInputClass = nameHasError
    ? classes.control + " " + classes.invalid
    : classes.control;

  const streetInputClass = streetHasError
    ? classes.control + " " + classes.invalid
    : classes.control;

  const postalInputClass = postalHasError
    ? classes.control + " " + classes.invalid
    : classes.control;

  const cityInputClass = cityHasError
    ? classes.control + " " + classes.invalid
    : classes.control;

  return (
    <form onSubmit={submitHandler}>
      <Input
        className={nameInputClass}
        id="name"
        type="text"
        label="Your Name"
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        value={name}
        inputHasError={nameHasError}
        error="Your Name must be not empty."
      />

      <Input
        className={streetInputClass}
        id="street"
        type="text"
        label="Street"
        onChange={streetChangeHandler}
        onBlur={streetBlurHandler}
        value={street}
        inputHasError={streetHasError}
        error="Street must be not empty."
      />
      <Input
        className={postalInputClass}
        id="postal-code"
        type="text"
        label="Postal Code"
        onChange={postalChangeHandler}
        onBlur={postalBlurHandler}
        value={postal}
        inputHasError={postalHasError}
        error="Postal Code must be not empty."
      />
      <Input
        className={cityInputClass}
        id="city"
        type="text"
        label="City"
        onChange={cityChangeHandler}
        onBlur={cityBlurHandler}
        value={city}
        inputHasError={cityHasError}
        error="City must be not empty."
      />
      <CardNoStyle className={classes.actions}>
        <Button onClick={props.onCancel}>Cancel</Button>
        {formIsValid && (
          <Button type="submit" className={classes.submit}>
            Confirm
          </Button>
        )}
      </CardNoStyle>
    </form>
  );
};
