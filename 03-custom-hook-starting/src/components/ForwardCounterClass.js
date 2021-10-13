import { Component } from "react";
import Card from "./Card";

class ForwardCounterClass extends Component {
  constructor(props) {
    super();
    this.state = { count: 0, interval: 0 };
  }

  componentDidMount() {
    const newIntervalId = setInterval(() => {
      this.setState((prevState) => {
        return { ...prevState, count: prevState.count + 1 };
      });
    }, 1000);

    this.setState((prevState) => {
      return { ...prevState, interval: newIntervalId };
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return <Card>{this.state.count}</Card>;
  }
}

export default ForwardCounterClass;
