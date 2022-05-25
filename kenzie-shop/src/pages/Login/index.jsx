import { Container } from "./style";
import { useHistory } from "react-router";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Login() {
  const history = useHistory();

  function productsPage() {
    history.push("/products");
  }

  return (
    <Container>
      <Input label="Usuário" placeholder="digite o usuário" />
      <Input label="email" placeholder="digite sua senha" type="password" />

      <div className="buttonsCard">
        <Button
          text={"Entrar"}
          size={80}
          onClick={() =>
            alert(
              "Este projeto não possui função para este botão... Estamos praticando o redux, favor ir para página do carrinho"
            )
          }
        />
        <Button
          text={"Ir p/ produtos"}
          size={120}
          onClick={() => {
            productsPage();
          }}
        />
      </div>
    </Container>
  );
}

export default Login;
