import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  finalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemInCart = (state.cartItems as any[]).find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        state.totalQuantity++;
        itemInCart.totalPrice += itemInCart.price;
        state.finalPrice += itemInCart.price;
      } else {
        (state.cartItems as any[]).push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
        state.totalQuantity += 1;
        state.finalPrice += action.payload.price;
      }
    },

    removeItemFromCartByOne: (state, action) => {
      const itemInCart = (state.cartItems as any[]).find(
        (item) => item.id === action.payload
      );
      if (itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
        state.totalQuantity -= 1;
        itemInCart.totalPrice -= itemInCart.price;
        state.finalPrice -= itemInCart.price;
      } else {
        const removeItem = (state.cartItems as any[]).filter(
          (item) => item.id !== action.payload
        );
        (state.cartItems as any[]) = removeItem;
        state.totalQuantity -= 1;
        state.finalPrice -= itemInCart.price;
        Notify.success("Product removed from your cart");
      }
    },

    removeItemFromCartAtOnce: (state, action) => {
      const itemInCart = (state.cartItems as any[]).find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        const removeItem = (state.cartItems as any[]).filter(
          (item) => item.id !== action.payload.id
        );
        (state.cartItems as any[]) = removeItem;
        state.totalQuantity -= action.payload.quantity;
        state.finalPrice -= action.payload.totalPrice;
        Notify.success("Product removed from your cart");
      }
    },
  },
});

export const selectCartItems = (state: { cart: { cartItems: any[] } }) =>
  state.cart.cartItems;
export const selectTotalQuantity = (state: {
  cart: { totalQuantity: number };
}) => state.cart.totalQuantity;
export const selectTotalPrice = (state: { cart: { finalPrice: number } }) =>
  state.cart.finalPrice;

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
