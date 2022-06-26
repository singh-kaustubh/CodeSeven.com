import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./carttSlice";
const store = configureStore({
  reducer: {
    product: cartSlice.reducer,
  },
});
export default store;
