import { Container } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { removeCartThunk } from "../../store/modules/cart/thunks";
import Button from "../../components/Button";

function Cart() {
  const cartProducts = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const value = cartProducts.reduce((acc, atual) => {
    return atual.price + acc;
  }, 0);

  function cart(currentProduct) {
    dispatch(removeCartThunk(currentProduct));
  }

  return (
    <Container>
      <div>
        {cartProducts.map((value, index) => {
          return (
            <div key={index} className="productCard">
              <figure>
                <img src={value.image} />
                <figcaption></figcaption>
              </figure>
              <div className="productInfo">
                <p>{value.name}</p>

                <p>R${value.price}</p>

                <Button
                  text="Remover do carrinho"
                  size={150}
                  onClick={() => {
                    cart(value);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="cartInfo">
        <p>Resultado do Pedido</p>

        <p>{cartProducts.length} Produtos</p>
        <p>Total R$: {value}</p>
      </div>
    </Container>
  );
}

export default Cart;
