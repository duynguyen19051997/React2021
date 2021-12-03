//import { createStore } from "redux";

import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.value++;
      //return state;
    },
    decrement: (state) => {
      state.value--;
      //return state;
    },
    increase: (state, action) => {
      state.value += action.payload;
      //return state;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
      //return state;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   // if (action.type === "INCREMENT") {
//   //   return { counter: state.counter + 1, showCounter: state.showCounter };
//   // }

//   // if (action.type === "DECREMENT") {
//   //   return { counter: state.counter - 1, showCounter: state.showCounter };
//   // }

//   // if (action.type === "INCREASE") {
//   //   return {
//   //     counter: state.counter + action.value,
//   //     showCounter: state.showCounter,
//   //   };
//   // }
//   //return state;

//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case "DECREMENT":
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case "INCREASE":
//       return {
//         counter: state.counter + action.value,
//         showCounter: state.showCounter,
//       };
//     case "TOGGLE":
//       return { counter: state.counter, showCounter: !state.showCounter };

//     default:
//       return state;
//   }
// };

//export const store = createStore(counterReducer);

export const counterActions = counterSlice.actions;

// const store = configureStore({
//   reducer: { counter: counterSlice.reducer },
// });

export default counterSlice.reducer;
