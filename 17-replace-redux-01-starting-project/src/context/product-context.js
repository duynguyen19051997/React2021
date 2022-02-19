import React, { useState } from "react";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export const ProductContext = React.createContext({
  products: [],
  toggleFavorite: (id) => {},
});

export const ProductProvider = (props) => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);

  const toggleFavorite = (productId) => {
    setProducts((currentProductsList) => {
      const prodIndex = currentProductsList.findIndex(
        (p) => p.id === productId
      );
      const newFavStatus = !currentProductsList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductsList];
      updatedProducts[prodIndex] = {
        ...currentProductsList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductContext.Provider
      value={{ products: products, toggleFavorite: toggleFavorite }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
