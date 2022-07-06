import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./carttSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
