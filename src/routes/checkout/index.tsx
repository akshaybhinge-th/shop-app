import { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../providers/cart-provider/cart-context";
import toast from "react-hot-toast";
import CustomerInformation from "./components/customer-information";
import OrderSummary from "./components/order-summary";

const CheckoutPage: FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const { handleSubmit, getValues, ...formMethods } = useForm();

  /**
   * Handle the submission of the checkout form and place the order.
   * @description
   * This function is called when the user submits the checkout form.
   * It retrieves the form data, attempts to place the order and
   * clears the cart and redirects the user to the homepage if the order is placed successfully.
   * @return {void} No value is returned
   */
  function handlePlaceOrder() {
    const data = getValues();
    try {
      // TODO: API integration for placing order with customer information
      console.log("placing order", data);
      toast.success("Order placed Successfully");
      dispatch({ type: "CLEAR_CART", payload: null });
      navigate("/");
    } catch (error) {
      console.error("Error while placing order:", error);
      toast.error("Error while placing order:");
    }
  }

  return (
    <form onSubmit={handleSubmit(handlePlaceOrder)}>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Checkout
          </h1>
          <div className="flex flex-wrap lg:flex-nowrap gap-x-8">
            {/* Customer information and order summary */}
            <CustomerInformation formMethods={formMethods} />
            <OrderSummary handlePlaceOrder={handleSubmit(handlePlaceOrder)} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutPage;