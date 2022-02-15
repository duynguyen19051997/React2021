import React from "react";

import "./Modal.css";

const Modal = (props) => {
  const cssClass = ["Modal", props.show ? "ModalOpen" : "ModalClose"];

  return (
    <div className={cssClass.join(" ")} onClick={props.closed}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default Modal;
