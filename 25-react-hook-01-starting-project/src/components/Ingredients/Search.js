import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const { onSearch } = props;
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const query =
        inputSearch.length === 0
          ? ""
          : `?orderBy="title"&equalTo="${inputSearch}"`;
      fetch(
        "https://react-hooks-update-5052f-default-rtdb.firebaseio.com/ingredients.json" +
          query
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
          onSearch(loadedIngredients);
        });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputSearch, onSearch]);

  const searchChangeHandler = (event) => {
    event.preventDefault();
    setInputSearch(event.target.value);
  };

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={inputSearch}
            onChange={searchChangeHandler}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
