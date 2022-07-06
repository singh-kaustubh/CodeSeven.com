import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const data =
  typeof window !== "undefined" && localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : initialState;
const cartSlice = createSlice({
  name: "cart",
  initialState: data,
  reducers: {
    addToCart(state, actions) {
      try {
        const itemIndex = state.cartItems.findIndex(
          (item) =>
            item._id === actions.payload._id &&
            item.color === actions.payload.color &&
            item.size === actions.payload.size
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
        localStorage.setItem("cart", JSON.stringify(state));
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
      const item = state.cartItems.find(
        (item) =>
          item._id === actions.payload._id &&
          item.color === actions.payload.color &&
          item.size === actions.payload.size
      );
      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item._id === actions.payload._id &&
            item.color === actions.payload.color &&
            item.size === actions.payload.size
          )
      );
      toast.info("Successfully removed item from cart", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      state.cartTotalAmount -= item.price * item.cartQuantity;
      state.cartTotalQuantity -= item.cartQuantity;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    reduceQuantity(state, actions) {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item._id === actions.payload._id &&
          item.color === actions.payload.color &&
          item.size === actions.payload.size
      );
      if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) =>
            !(
              item._id === actions.payload._id &&
              item.color === actions.payload.color &&
              item.size === actions.payload.size
            )
        );
      } else {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
      toast.info("Reduced the quantity", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      state.cartTotalAmount -= item.price;
      state.cartTotalQuantity -= 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantity(state, actions) {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item._id === actions.payload._id &&
          item.color === actions.payload.color &&
          item.size === actions.payload.size
      );
      state.cartItems[itemIndex].cartQuantity += 1;
      toast.info("Increased the quantity", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      state.cartTotalAmount += item.price;
      state.cartTotalQuantity += 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart() {
      localStorage.removeItem("cart");
      toast.success("Your cart has been successfully cleared", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return initialState;
    },
  },
});
export const actions = cartSlice.actions;
export default cartSlice;
