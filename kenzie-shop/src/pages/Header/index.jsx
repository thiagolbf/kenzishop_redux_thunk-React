import { HeaderContainer } from "./style";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const history = useHistory();

  const cartProducts = useSelector((store) => store.cart);

  function changeToProducts() {
    history.push("/products");
  }

  function changeToCart() {
    history.push("/cart");
  }

  function changeToLogin() {
    history.push("/");
  }

  return (
    <HeaderContainer>
      <h2
        onClick={() => {
          changeToProducts();
        }}
      >
        {" "}
        Kenzie shop
      </h2>

      <nav>
        <ul>
          <li onClick={() => changeToCart()}>
            <div>
              <p>
                Carrinho <span>{cartProducts.length}</span>
              </p>
            </div>
          </li>
          <li></li>
          <li onClick={() => changeToLogin()}>Entrar</li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
