import React from "react";

import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const Modal = (props) => {
  // const cssClass = [
  //   "Modal",
  //   props.show
  //     ? "ModalOpen"
  //     : "ModalClose"
  // ];

  const animationTiming = { enter: 400, exit: 1000 };

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClose",
      }}
      // classNames="fade-slide"
    >
      <div className="Modal" onClick={props.closed}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
