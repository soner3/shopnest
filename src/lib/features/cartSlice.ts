import { Cart, CartItem } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart = {
  cartItemList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      let itemInCart = false;

      state.cartItemList.forEach((item) => {
        if (item.product.id === newItem.product.id) {
          item.quantity += newItem.quantity;
          item.totalPrice += newItem.totalPrice;
          itemInCart = true;
        }
      });

      if (itemInCart) {
        localStorage.setItem("cart", JSON.stringify(state.cartItemList));
        return;
      } else {
        state.cartItemList.push(newItem);
        localStorage.setItem("cart", JSON.stringify(state.cartItemList));
      }
    },
    incraseQuantity: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;

      state.cartItemList.forEach((item) => {
        if (item.product.id === newItem.product.id) {
          item.quantity += 1;
          item.totalPrice = item.quantity * item.product.price;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cartItemList));
    },
    decraseQuantity: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;

      state.cartItemList.forEach((item) => {
        if (item.product.id === newItem.product.id) {
          if (item.quantity <= 1) {
            const newCart = state.cartItemList.filter((oldCartItem) => {
              return oldCartItem.product.id !== newItem.product.id;
            });
            state.cartItemList = newCart;
          } else {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.product.price;
          }
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cartItemList));
    },
    deleteCart: (state) => {
      localStorage.removeItem("cart");
      state.cartItemList = [];
    },
  },
});

export const { addToCart, incraseQuantity, decraseQuantity, deleteCart } =
  cartSlice.actions;
export default cartSlice.reducer;
