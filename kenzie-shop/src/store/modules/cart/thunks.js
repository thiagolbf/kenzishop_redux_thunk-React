import { addCart, removeCart } from "./actions";

export const addCartThunk = (product) => (dispatch, getstate) => {
  // console.log(product);
  // console.log("chegou no thunk");
  // console.log("passou");
  // console.log([...actualCart.cart]);

  // const check = cartProducts.includes(currentProduct);
  const cart = getstate();
  const actualCart = [...cart.cart];
  const check = actualCart.includes(product);
  const addToCart = [...cart.cart, product];

  console.log(check);

  if (check) {
    alert("Este item já foi adicionado no carrinho");
  } else {
    localStorage.setItem("cart", JSON.stringify(addToCart));
    dispatch(addCart(addToCart));
  }
};

export const removeCartThunk = (product) => (dispatch, getstate) => {
  const cart = getstate();
  const actualCart = [...cart.cart];
  const newCart = actualCart.filter((value) => {
    return value !== product;
  });

  localStorage.setItem("cart", JSON.stringify(newCart));
  dispatch(addCart(newCart));
};
