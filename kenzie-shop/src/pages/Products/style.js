import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;

  .productCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid transparent;
    background: var(--cartBackground);
    width: 300px;
    margin: 20px;

    p {
      margin: 10px 0;
    }

    &:hover {
      border: 2px solid black;
    }
  }

  img {
    width: 200px;
    height: 250px;
  }
`;
