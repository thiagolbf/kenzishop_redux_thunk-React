import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("chegou no reduce");
      // console.log(action.product);

      return action.product;

    case REMOVE_FROM_CART:
      return action.product;

    default:
      return state;
  }
};

export default cartReducer;
