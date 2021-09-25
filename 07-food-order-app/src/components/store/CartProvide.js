import { CartContext } from "./cart-context";

export const CartProvide = (props) => {
  const addItemToCartHandler = () => {};

  const removeItemFromCartHandler = () => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
