import classes from "./HelloWorld.module.css";

export const HelloWorld = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.content}>Hello World</p>
    </div>
  );
};
