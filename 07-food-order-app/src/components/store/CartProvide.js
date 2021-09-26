import { useReducer } from "react";
import { CartContext } from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.amount;
    const updatedTotalPrice =
      state.totalPrice + action.item.amount * action.item.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalPrice: updatedTotalPrice,
    };
  } else if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    const removedItem = state.items.find((item) => item.id === action.id);
    const updatedTotalAmount = state.totalAmount - removedItem.amount;
    const updatedTotalPrice =
      state.totalPrice - removedItem.amount * removedItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalPrice: updatedTotalPrice,
    };
  } else {
    return defaultCartState;
  }
};

export const CartProvide = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
