export interface ICartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  }
  quantity?: number;
}

export type CartState = {
  cartItems: ICartItem[];
  totalAmount: number;
  totalQuantity: number;
  isCartOpen: boolean;
};

export type CartAction = {
  type: "ADD_ITEM" | "REMOVE_CART_ITEM" | "CLEAR_CART" | "TOGGLE_CART_PANEL";
  payload: ICartItem | boolean | any;
};
