import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex(cartItem => cartItem.id === action.payload.id);

      if (index >= 0) {
        state.items[index].quantity += 1;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(cartItem => cartItem.id === action.payload.id);
      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${ action.payload.id }) because it is not in the cart`);
      }
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) => state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
