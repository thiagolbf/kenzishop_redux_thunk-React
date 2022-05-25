import styled from "styled-components";

export const Container = styled.div`
  button {
    width: ${(props) => `${props.tamanho}px`};
    font-size: 12px;
    padding: 10px;
    margin: 0 20px;
    border: 0;
    border-radius: 10px;
    background-color: var(--buttonBackground);

    &:hover {
      background-color: var(--buttonHoverBackground);
    }
  }
`;
