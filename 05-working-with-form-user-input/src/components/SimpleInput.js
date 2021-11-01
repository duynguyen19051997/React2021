import { useInput } from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  let formIsValid = false;
  if (nameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid) {
      return;
    }
    reset();
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />

        {nameInputHasError && <p className="error-text">Name is not empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
