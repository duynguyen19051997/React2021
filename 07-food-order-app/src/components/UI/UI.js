import "./UI.module.css";

export const Cart = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const HeaderUI = (props) => {
  return <header className={props.className}>{props.children}</header>;
};

export const Image = (props) => {
  return <img src={props.src} alt={props.alt} />;
};

export const H1 = (props) => {
  return <h1 className={props.className}>{props.children}</h1>;
};

export const Button = (props) => {
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export const Span = (props) => {
  return <span className={props.className}>{props.children}</span>;
};
