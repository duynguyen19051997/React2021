import { React } from "react";
import { XCircleFill } from "react-bootstrap-icons";

import "./UI.css";

export const Card = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const P = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const Span = (props) => {
  return <span className={props.className}>{props.children}</span>;
};

export const Label = (props) => {
  return <label className={props.className}>{props.children}</label>;
};

export const Input = (props) => {
  const classes = props.className + " input-style";

  const inputHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <input
      type={props.type}
      name={props.name}
      className={classes}
      onChange={inputHandler}
      value={props.value}
      min={props.min}
      max={props.max}
    />
  );
};

export const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export const Delete = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return <XCircleFill onClick={deleteHandler} className="icon" />;
};
