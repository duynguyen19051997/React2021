import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
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
    setIsLoading(true);
    fetch(
      "https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(x),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((responseData) => {
        setIngredients((prevIngredient) => [
          ...prevIngredient,
          {
            id: responseData.name,
            ...x,
          },
        ]);
      })
      .catch((err) => {
        setError({ isError: true, message: err.message });
      });
  };

  const removeIngredientHandler = (id) => {
    setIsLoading(true);
    fetch(
      `https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIsLoading(false);
        setIngredients((prevIngredient) => {
          return prevIngredient.filter((t) => t.id !== id);
        });
      })
      .catch((err) => {
        setError({ isError: true, message: err.message });
      });
  };

  const searchHandler = useCallback(
    (result) => {
      setIngredients(result);
    },
    [setIngredients]
  );

  const clearError = () => {
    setError({ isError: false, message: "" });
    setIsLoading(false);
  };

  return (
    <div className="App">
      {error.isError && (
        <ErrorModal onClose={clearError}>{error.message}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        isLoading={isLoading}
      />
      <section>
        <Search onSearch={searchHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveIngredient={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
