import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  // return state of redux store
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    //dispatch({ type: "TOGGLE" });
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    //dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    //dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    //dispatch({ type: "INCREASE", value: 10 });
    dispatch(counterActions.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter Functional</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      {showCounter && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 10</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
