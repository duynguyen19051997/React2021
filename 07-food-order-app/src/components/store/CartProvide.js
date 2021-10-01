import { useReducer } from "react";
import { CartContext } from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  debugger;
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.amount;
    const updatedTotalPrice =
      state.totalPrice + action.item.amount * action.item.price;

    const indexItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (indexItem === -1) {
      state.items = state.items.concat(action.item);
    } else {
      state.items[indexItem].amount += action.item.amount;
    }

    const updatedItems = state.items;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalPrice: updatedTotalPrice,
    };
  } else if (action.type === "REMOVE") {
    const indexItem = state.items.findIndex((item) => item.id === action.id);

    const updatedTotalAmount =
      state.totalAmount - state.items[indexItem].amount;
    const updatedTotalPrice = state.totalPrice - state.items[indexItem].price;

    let updatedItems;
    if (state.items[indexItem].amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...state.items];
      updatedItems[indexItem] = {
        ...updatedItems[indexItem],
        amount: updatedItems[indexItem].amount - 1,
      };
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount < 0 ? 0 : updatedTotalAmount,
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
