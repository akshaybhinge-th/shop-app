import { FC, useContext, memo } from "react";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

import { IProductItemProps } from "../types";
import { CartContext } from "../../../providers/cart-provider/cart-context";


const ProductItem: FC<IProductItemProps> = memo(({ product }) => {
  const { dispatch } = useContext(CartContext);
  
  /**
   * Adds the product to the cart.
   * Dispatches an action of type `ADD_ITEM` to the cart context.
   * If the action is successful, displays a success toast notification.
   * If the action fails, displays an error toast notification and logs the error to the console.
   */
  const handleAddToCart = () => {
    try {
      dispatch({ type: "ADD_ITEM", payload: product });
      toast.success(`${product.title} added to cart!`);
    } catch (error) {
      console.error(error);
      toast.error(`Unable to add ${product.title} to cart.`);
    }
  };

  return (
    <div className="group relative">
      <img
        alt={product.image}
        src={product.image}
        className="aspect-square w-full rounded-md bg-gray-200 object-center group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div className="flex flex-col flex-1">
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          <p className="text-sm font-medium text-gray-900">{`$${product.price}`}</p>
          <p className="text-sm text-gray-500">
            <span className="mr-1"><FaStar className="inline -mt-1"/> {product.rating.rate}</span>
            {`(${product.rating.count})`}
          </p>
          <div className="flex flex-row items-end justify-between">
            <button
              className="text-white bg-blue-500 hover:bg-blue-700 rounded-md px-3 py-1"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductItem;
