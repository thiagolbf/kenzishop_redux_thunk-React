import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunks";
import { Container } from "./style";
import { useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  // console.log(products);
  // console.log(typeof products);
  // console.log(products.length);

  function addCart(currentProduct) {
    // console.log(currentProduct);
    // const check = cartProducts.includes(currentProduct);

    // if (check) {
    //   alert("Você já adicionou esse produto");
    // } else {}
    dispatch(addCartThunk(currentProduct));
  }

  return (
    <Container>
      {products.map((value, index) => {
        return (
          <div key={index} className="productCard">
            <p>{value.name}</p>

            <figure>
              <img src={value.image} />
              <figcaption></figcaption>
            </figure>

            <p>R${value.price}</p>

            <Button
              text="Adicionar ao carrinho"
              size={150}
              onClick={() => {
                addCart(value);
              }}
            />
          </div>
        );
      })}
    </Container>
  );
}

export default Products;
