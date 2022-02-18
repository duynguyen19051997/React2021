import React from "react";
import Transition from "react-transition-group/Transition";

import "./Backdrop.css";

const Backdrop = (props) => {
  // const cssClass = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClose"];

  return (
    <Transition in={props.show} timeout={1000} mountOnEnter unmountOnExit>
      {(state) => {
        const cssClass = [
          "Backdrop",
          state === "entering"
            ? "BackdropOpen"
            : state === "exiting"
            ? "BackdropClose"
            : null,
        ];
        return (
          <div className={cssClass.join(" ")} onClick={props.closed}></div>
        );
      }}
    </Transition>
  );
};

export default Backdrop;
