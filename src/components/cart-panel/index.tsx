import { FC } from "react";

import { useCartDrawer } from "../../hooks/cart";
import CartList from "../cart-list";
import CustomDrawer from "../../common/components/drawer/custom-drawer";

const CartDrawer: FC= () => {
  const { open, toggleCartPanel } = useCartDrawer();
  return (
    <CustomDrawer open={open} togglePanelState={toggleCartPanel} title={"Cart"}>
      <CartList/>
    </CustomDrawer>
  );
};

export default CartDrawer;
