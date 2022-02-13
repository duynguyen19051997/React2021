import { useState } from "react";

import "./List.css";

export const ListNonClass = (props) => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => {
      return prevState.concat(prevState.length + 1);
    });
  };

  const removeItemHandler = (indexItem) => {
    return setItems((prevState) => {
      return prevState.filter((item, index) => index !== indexItem);
    });
  };

  let listItems = items.map((x) => (
    <li key={x} className="ListItem" onClick={() => removeItemHandler(x)}>
      {x}
    </li>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <ul className="List">{listItems}</ul>
    </div>
  );
};
