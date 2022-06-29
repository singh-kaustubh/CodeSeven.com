import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  cartItems: [
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
// export const productAdd=
const cartSlice = createSlice({
  name: "cart",
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
        state.cartTotalAmount += actions.payload.amount;
        state.cartTotalQuantity += actions.payload.amount;
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
        (item) => item.id === actions.payload.id
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
        (item) => item.id === actions.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity === 1) {
      } else {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
    },
    increaseQuantity(state, actions) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === actions.payload.id
      );
      state.cartItems[itemIndex].cartQuantity += 1;
    },
  },
});
export const actions = cartSlice.actions;
export default cartSlice;
