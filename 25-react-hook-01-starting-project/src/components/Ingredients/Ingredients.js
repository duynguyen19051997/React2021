import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = (x) => {
    setIngredients((prevIngredient) => [
      { id: Math.random().toString(), ...x },
      ...prevIngredient,
    ]);
  };

  const removeIngredientHandler = (id) => {
    setIngredients((prevIngredient) => {
      return prevIngredient.filter((t) => t.id !== id);
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
