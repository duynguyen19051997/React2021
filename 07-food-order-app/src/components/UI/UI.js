import classes from "./UI.module.css";

export const Card = (props) => {
  const classStyle = props.className + " " + classes.card;
  return <div className={classStyle}>{props.children}</div>;
};

export const CardNoStyle = (props) => {
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

export const Section = (props) => {
  return <section className={props.className}>{props.children}</section>;
};

export const P = (props) => {
  return <p className={props.className}>{props.children}</p>;
};

export const H2 = (props) => {
  return <h2 className={props.className}>{props.children}</h2>;
};

export const H3 = (props) => {
  return <h3 className={props.className}>{props.children}</h3>;
};

export const List = (props) => {
  return (
    <ul className={props.className}>
      {props.list != null && props.list.length > 0
        ? props.list.map((x) => (
            <li key={x.id} value={x.id}>
              {x.name}
            </li>
          ))
        : null}
    </ul>
  );
};

export const Ul = (props) => {
  return <ul className={props.className}>{props.children}</ul>;
};

export const Li = (props) => {
  return <li className={props.className}>{props.children}</li>;
};

export const Input = (props) => {
  const classStyle = props.className + " " + classes.input;

  const inputHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <CardNoStyle>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={classStyle}
        type={props.type}
        id={props.id}
        onChange={inputHandler}
      />
    </CardNoStyle>
  );
};
