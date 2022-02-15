import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor(props) {
    super();
    this.state = { modalIsOpen: false };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModal.bind(this)}
        />
        <Backdrop
          show={this.state.modalIsOpen}
          closed={this.closeModal.bind(this)}
        />
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
