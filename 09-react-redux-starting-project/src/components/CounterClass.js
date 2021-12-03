import { Component } from "react";
import { connect } from "react-redux";
import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

class CounterClass extends Component {
  constructor(props) {
    super();
  }

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {
    this.props.toggle();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter Class-Based Component</h1>
        {this.props.showCounter && (
          <div className={classes.value}>{this.props.counter}</div>
        )}

        {this.props.showCounter && (
          <div>
            <button onClick={this.incrementHandler.bind(this)}>
              Increment
            </button>
            <button onClick={this.decrementHandler.bind(this)}>
              Decrement
            </button>
          </div>
        )}

        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter, showCounter: state.showCounter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()), // dispatch({ type: 'INCREMENT'})
    decrement: () => dispatch(counterActions.decrement()), // dispatch({ type: 'DECREMENT'})
    toggle: () => dispatch(counterActions.toggle()), // dispatch({ type: 'TOGGLE'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
