import { useState } from "react";
import { Output } from "./Output";

export const Greeting = (props) => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(!changedText);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Changed Text</button>
    </div>
  );
};
