import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const removeCart = (product) => ({
  type: REMOVE_FROM_CART,
  product,
});
