import { CartState, CartAction } from "./types";
import { createContext } from "react";

export const initialEmptyCart = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const initialCartState: Omit<CartState, "isCartOpen"> = localStorage.getItem(
  "_cartDetails"
)
  ? JSON.parse(localStorage.getItem("_cartDetails"))
  : initialEmptyCart;

export const initialState: CartState = {
  isCartOpen: false,
  ...initialCartState,
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});
