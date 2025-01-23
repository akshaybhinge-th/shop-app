import { FC, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { IProduct } from "../../routes/products/types";
import { CartContext } from "../../providers/cart-provider/cart-context";
import { useIsUserLoggedIn } from "../../hooks/auth/user-auth"

interface ICartListProps {
  checkout?: boolean
  handlePlaceOrder?: () => void
}

const CartList: FC<ICartListProps> = ({checkout = false, handlePlaceOrder}: ICartListProps) => {
  const {
    dispatch,
    state: { cartItems, totalAmount },
  } = useContext(CartContext);
  const navigate = useNavigate();
  const isUserLoggedIn = useIsUserLoggedIn();

  /**
   * Handles the removal of an item from the cart.
   * @param item the item to remove from the cart
   */
  function handleRemoveCartItem(item: IProduct) {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: { ...item },
    });
  }

  /**
   * Toggles the cart panel state.
   * If the user is not logged in, displays an error message prompting login before checkout.
   * Otherwise, dispatches an action to toggle the cart panel state.
   */

  function handleToggleCartPanel() {
    if(!isUserLoggedIn) {
      toast.error("you must login before proceeding to checkout")
    } 
    dispatch({
      type: "TOGGLE_CART_PANEL",
      payload: null,
    });
  }

  /**
   * Function to close the cart panel and navigate to the homepage
   * Used in the cart panel
   */
  function handleContinueShopping() {
    dispatch({type: "TOGGLE_CART_PANEL", payload: null});
    navigate("/")
  }


  return (
    <>
      <div className="mt-8">
        <div className="flow-root">
          <ul className="-my-6 divide-y divide-gray-200">
            {cartItems?.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt={product.image}
                    src={product.image}
                    className="size-full object-cover"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{product.title}</h3>
                      <p className="ml-4">{`$${product.price}`}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="mt-1 text-sm text-gray-500">
                        {product.category}
                      </p>
                      <p className="text-gray-500">Qty {product.quantity}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => handleRemoveCartItem(product)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        {cartItems.length > 0 ? (
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              {/* show value to 2 decimal places */}
              <p>{`$${Math.round(totalAmount * 100)/100}`}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to={"/checkout"}
                onClick={checkout ? handlePlaceOrder : handleToggleCartPanel}
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                {" "}
                {checkout ? "Place Order" : "Checkout"}
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6">
            <p className="text-lg font-medium text-gray-900">
              Your cart is empty
            </p>
            <button
              type="button"
              onClick={handleContinueShopping}
              className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartList;
