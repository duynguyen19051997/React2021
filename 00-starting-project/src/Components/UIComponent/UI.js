import "./UI.css";

export const Card = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const P = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const Span = (props) => {
  return <span>{props.children}</span>;
};
