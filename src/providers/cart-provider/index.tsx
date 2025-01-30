import { useReducer, PropsWithChildren, useMemo, FC } from "react";
import { CartAction, CartState } from "./types";
import { CartContext, initialState, initialEmptyCart } from "./cart-context";

/**
 * This function is the reducer for the cart context. It takes in a CartState and a CartAction and returns a new CartState.
 * The actions it responds to are 'ADD', 'REMOVE', and 'CLEAR'.
 * 'ADD_ITEM' adds the item to the cart, increments the total quantity and updates the total amount.
 * 'REMOVE_CART_ITEM' removes the item from the cart, decrements the total quantity and updates the total amount.
 * 'CLEAR_CART' clears the cart and resets the total amount and quantity.
 * 'TOGGLE_CART_PANEL' toggles the cart panel state.
 */
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      let cartDetails;
      if(state.cartItems.find(item => item.id === action.payload.id)) {
        cartDetails = {
          cartItems: state.cartItems.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity ? item.quantity + 1 : 1} : item),
          totalAmount: state.totalAmount + action.payload.price,
          totalQuantity: state.totalQuantity + 1
        }
        localStorage.setItem("_cartDetails",JSON.stringify(cartDetails))
        return {
          ...state,
          ...cartDetails,
        }
      }
      cartDetails = {
        cartItems: [...state.cartItems, {...action.payload, quantity: 1}],
        totalAmount: state.totalAmount + action.payload.price,
        totalQuantity: state.totalQuantity + 1,
      }
      localStorage.setItem("_cartDetails",JSON.stringify(cartDetails))
      return {
        ...state,
        ...cartDetails,
      };
    }
    case "REMOVE_CART_ITEM": {
      const cartDetails = {
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        totalAmount: state.totalAmount - (action.payload.price * action.payload.quantity), // update total amount based on quantity
        totalQuantity: state.totalQuantity - action.payload.quantity
      }
      localStorage.setItem("_cartDetails",JSON.stringify(cartDetails))
      return {
        ...state,
        ...cartDetails,
      };
    }
    case "UPDATE_CART_ITEM": {
      const updatedCartItems = state.cartItems.map((item) => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item)
      const cartDetails = {
        cartItems: updatedCartItems,
        totalAmount: updatedCartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        totalQuantity: updatedCartItems.reduce((total, item) => total + item.quantity, 0)
      }
      localStorage.setItem("_cartDetails",JSON.stringify(cartDetails))
      return {
        ...state,
        ...cartDetails,
      };
    }
    case "CLEAR_CART":
      localStorage.removeItem("_cartDetails")
      return {
        ...state,
        ...initialEmptyCart
      };
    case "TOGGLE_CART_PANEL":
      return {
        ...state,
        isCartOpen: typeof action.payload === "boolean" ? action.payload : !state.isCartOpen,
      };
    default:
      return state;
  }
};

export const CartProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const memoizedContextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <CartContext.Provider value={memoizedContextValue}>{children}</CartContext.Provider>;
};

