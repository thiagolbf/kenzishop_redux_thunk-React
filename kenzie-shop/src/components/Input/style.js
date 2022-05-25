import styled from "styled-components";

export const Container = styled.div`
  font-size: 12px;
`;

export const InputContainer = styled.div`
  border-radius: 4px;
  margin: 10px 0;

  input {
    width: 300px;
    background: transparent;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
  }

  @media (max-width: 500px) {
    input {
      width: 230px;
    }
  }
`;
