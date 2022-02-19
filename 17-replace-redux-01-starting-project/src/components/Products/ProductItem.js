import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";
// import { useDispatch } from 'react-redux';

import Card from "../UI/Card";
import "./ProductItem.css";
// import { toggleFav } from "../../store/actions/products";

const ProductItem = (props) => {
  // const dispatch = useDispatch();
  const toggleFavorite = useContext(ProductContext).toggleFavorite;

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    toggleFavorite(props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
