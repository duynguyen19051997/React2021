import { Component } from "react";
import Card from "./Card";

class BackwardCounterClass extends Component {
  constructor(props) {
    super();
    this.state = { count: 0, intervalId: 0 };
  }

  componentDidMount() {
    const newIntervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          count: prevState.count - 1,
        };
      });
    }, 1000);

    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return <Card>{this.state.count}</Card>;
  }
}

export default BackwardCounterClass;
