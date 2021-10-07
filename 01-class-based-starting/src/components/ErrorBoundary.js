import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.error(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Error</p>;
    }
    return this.props.children;
  }
}
