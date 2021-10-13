import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import BackwardCounterClass from "./components/BackwardCounterClass";
import ForwardCounter from "./components/ForwardCounter";
import ForwardCounterClass from "./components/ForwardCounterClass";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <ForwardCounterClass />
      <BackwardCounterClass />
    </React.Fragment>
  );
}

export default App;
