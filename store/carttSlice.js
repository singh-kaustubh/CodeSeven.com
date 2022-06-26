import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
// export const productAdd=
const cartSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addToCart(state, actions) {
      try {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === actions.payload.id
        );
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].cartQuantity += 1;
          toast.info("increased product quantity", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          const tempProduct = { ...actions.payload, cartQuantity: 1 };
          state.cartItems.push(tempProduct);
          toast.success("Product added to cart", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        toast.error("Error adding item in the cart", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    deleteFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
      if (state.cartItems) {
      }
    },
  },
});
export const actions = cartSlice.actions;
export default cartSlice;
