import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, actions) {
      try {
        const itemIndex = state.cartItems.findIndex(
          (item) => item._id === actions.payload._id
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
        state.cartTotalAmount += actions.payload.price;
        state.cartTotalQuantity += 1;
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
    removeFromCart(state, actions) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id === actions.payload._id
      );
      toast.info("Successfully removed all items of this type from cart", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    reduceQuantity(state, actions) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === actions.payload._id
      );
      if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id === actions.payload._id
        );
      } else {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
    },
    increaseQuantity(state, actions) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === actions.payload._id
      );
      state.cartItems[itemIndex].cartQuantity += 1;
    },
  },
});
export const actions = cartSlice.actions;
export default cartSlice;
