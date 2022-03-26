import React, { useState, useEffect, useCallback, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((x) => x.id !== action.id);
    default:
      throw new Error("Should not get there");
  }
};

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        isLoading: true,
        isError: false,
        message: "",
      };
    case "RESPONSE":
      return {
        isLoading: false,
        isError: false,
        message: "",
      };
    case "ERROR":
      return {
        isLoading: false,
        isError: true,
        message: action.message,
      };
    case "CLEAR":
      return {
        isLoading: false,
        isError: false,
        message: "",
      };
    default:
      throw new Error("Should not get there");
  }
};

function Ingredients() {
  //const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState({ isError: false, message: "" });

  const [userIngredients, dispatchUserIngredient] = useReducer(
    ingredientReducer,
    []
  );

  const [http, dispatchHttp] = useReducer(httpReducer, {
    isLoading: false,
    isError: false,
    message: "",
  });

  // useState
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     "https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients.json"
  //   )
  //     .then((response) => {
  //       setIsLoading(false);
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       const loadedIngredients = [];
  //       for (var key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           ...responseData[key],
  //         });
  //       }
  //       setIngredients(loadedIngredients);
  //     });
  // }, [setIngredients]);

  useEffect(() => {
    //setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      "https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => {
        //setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
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
        dispatchUserIngredient({ type: "SET", ingredients: loadedIngredients });
      });
  }, [dispatchUserIngredient]);

  const addIngredientHandler = (x) => {
    //setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      "https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(x),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        //setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        return response.json();
      })
      .then((responseData) => {
        // setIngredients((prevIngredient) => [
        //   ...prevIngredient,
        //   {
        //     id: responseData.name,
        //     ...x,
        //   },
        // ]);
        dispatchUserIngredient({
          type: "ADD",
          ingredient: { id: responseData.name, ...x },
        });
      })
      .catch((err) => {
        //setError({ isError: true, message: err.message });
        dispatchHttp({ type: "ERROR", message: "Adding wrong" });
      });
  };

  const removeIngredientHandler = (id) => {
    //setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        //setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        // setIngredients((prevIngredient) => {
        //   return prevIngredient.filter((t) => t.id !== id);
        // });

        dispatchUserIngredient({ type: "DELETE", id: id });
      })
      .catch((err) => {
        //setError({ isError: true, message: err.message });
        dispatchHttp({ type: "ERROR", message: "Deleting wrong" });
      });
  };

  const searchHandler = useCallback(
    // (result) => {
    //   setIngredients(result);
    // },
    // [setIngredients]

    (result) => {
      dispatchUserIngredient({ type: "SET", ingredients: result });
    },
    [dispatchUserIngredient]
  );

  const clearError = () => {
    // setError({ isError: false, message: "" });
    // setIsLoading(false);
    dispatchHttp({ type: "CLEAR" });
  };

  return (
    <div className="App">
      {http.isError && (
        <ErrorModal onClose={clearError}>{http.message}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        isLoading={http.isLoading}
      />
      <section>
        <Search onSearch={searchHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveIngredient={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
