import { ProductCart } from "@/types/producte";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { items: ProductCart[]; total: number } = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initiatCart: (state, action) => {
      state.items.length = 0;
      state.items.push(...action.payload);
      state.total = calculateTotal(state.items);
    },
    removeProduct: (state, action) => {
      const index = state.items.findIndex((el) => el.id === action.payload);

      if (index !== -1) {
        state.items.splice(index, 1);
        state.total = calculateTotal(state.items);
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.items.find((el) => el.id === action.payload);
      if (product) {
        product.quantity += 1;
        state.total = calculateTotal(state.items);
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.items.find((el) => el.id === action.payload);

      if (product && product.quantity !== 1) {
        product.quantity -= 1;
        state.total = calculateTotal(state.items);
      }
    },
  },
});

const calculateTotal = (items: ProductCart[]) => {
  console.log(items)
  let sum = 0;
  items.map((item) => (sum += item.price * item.quantity));
  return sum;
};
export const {
  initiatCart,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
