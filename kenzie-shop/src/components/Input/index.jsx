import { InputContainer, Container } from "./style";

function Input({ label, ...rest }) {
  return (
    <Container>
      <div>{label}</div>

      <InputContainer>
        <input {...rest} />
      </InputContainer>
    </Container>
  );
}

export default Input;
