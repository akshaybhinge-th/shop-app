import { FC } from "react";

import CartList from "../../../components/cart-list/index";

const OrderSummary: FC<{ handlePlaceOrder: () => void }> = ({
  handlePlaceOrder,
}): JSX.Element => (
  <section className="w-full lg:w-4/12 mt-8 lg:mt-0">
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
      <CartList checkout={true} handlePlaceOrder={handlePlaceOrder} />
    </div>
  </section>
);

export default OrderSummary;
