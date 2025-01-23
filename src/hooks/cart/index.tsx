import { useContext } from "react";

import { CartContext } from "../../providers/cart-provider/cart-context";

// Hook to handle cart drawer state and update state
export const useCartDrawer = () => {
  const {
    dispatch,
    state: { isCartOpen },
  } = useContext(CartContext);

  // Toggle cart panel state
  const toggleCartPanel = () => {
    dispatch({
      type: "TOGGLE_CART_PANEL",
      payload: !isCartOpen,
    });
  };

  return { toggleCartPanel, open: isCartOpen };
};

