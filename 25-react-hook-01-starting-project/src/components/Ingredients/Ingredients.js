import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (var key in responseData) {
          loadedIngredients.push({
            id: key,
            ...responseData[key],
          });
        }
        setIngredients(loadedIngredients);
      });
  }, [setIngredients]);

  const addIngredientHandler = (x) => {
    fetch(
      "https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(x),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.ok;
      })
      .then((responseData) => {
        setIngredients((prevIngredient) => [
          {
            id: responseData.name,
            ...x,
          },
          ...prevIngredient,
        ]);
      });
  };

  const removeIngredientHandler = (id) => {
    fetch(
      "https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients/" +
        id,
      {
        method: "DELETED",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then(() => {
        setIngredients((prevIngredient) => {
          return prevIngredient.filter((t) => t.id !== id);
        });
      });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />
      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveIngredient={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
