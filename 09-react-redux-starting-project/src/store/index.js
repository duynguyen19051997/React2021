import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  // if (action.type === "INCREMENT") {
  //   return { counter: state.counter + 1, showCounter: state.showCounter };
  // }

  // if (action.type === "DECREMENT") {
  //   return { counter: state.counter - 1, showCounter: state.showCounter };
  // }

  // if (action.type === "INCREASE") {
  //   return {
  //     counter: state.counter + action.value,
  //     showCounter: state.showCounter,
  //   };
  // }
  //return state;

  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case "DECREMENT":
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case "INCREASE":
      return {
        counter: state.counter + action.value,
        showCounter: state.showCounter,
      };
    case "TOGGLE":
      return { counter: state.counter, showCounter: !state.showCounter };

    default:
      return state;
  }
};

export const store = createStore(counterReducer);
