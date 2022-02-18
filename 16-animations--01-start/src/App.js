import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor(props) {
    super();
    this.state = { modalIsOpen: false, showBlock: false };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  toggleHandler() {
    this.setState((prevState) => ({ showBlock: !prevState.showBlock }));
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggleHandler.bind(this)}>
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: "100px",
                height: "100px",
                margin: "auto",
                transition: "opacity 1s easy-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModal.bind(this)}
        />
        <Backdrop
          show={this.state.modalIsOpen}
          closed={this.closeModal.bind(this)}
        />
        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <Modal show={state} closed={this.closeModal.bind(this)} />
          )}
        </Transition> */}
        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <Backdrop show={state} closed={this.closeModal.bind(this)} />
          )}
        </Transition> */}
        {/* {this.state.modalIsOpen ? (
          <Modal
            show={this.state.modalIsOpen}
            closed={this.closeModal.bind(this)}
          />
        ) : null} */}
        {/* {this.state.modalIsOpen ? (
          <Backdrop
            show={this.state.modalIsOpen}
            closed={this.closeModal.bind(this)}
          />
        ) : null} */}
        <button className="Button" onClick={this.openModal.bind(this)}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
