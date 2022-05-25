import { Container } from "./style";

function Button({ text, size, ...rest }) {
  return (
    <Container tamanho={size}>
      <button {...rest}>{text}</button>
    </Container>
  );
}

export default Button;
