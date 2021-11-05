import { useReducer } from "react";

const initialState = { value: "", isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGED") {
    return { value: action.value, isTouched: false };
  } else if (action.type === "BLUR") {
    return { ...state, isTouched: true };
  } else {
    return initialState;
  }
};

export const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangedHandler = (event) => {
    dispatch({ type: "CHANGED", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid: valueIsValid,
    hasError: hasError,
    valueChangedHandler,
    inputBlurHandler,
    reset,
  };
};
