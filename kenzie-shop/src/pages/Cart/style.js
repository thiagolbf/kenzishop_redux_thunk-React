import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
  margin-top: 50px;

  .productCard {
    display: flex;

    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid transparent;
    background: var(--cartBackground);
    width: 800px;
    margin: 10px;

    .productInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

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

  .cartInfo {
    background: var(--cartBackground);
    padding: 10px;
    border-radius: 10px;
    border: 2px solid black;
    height: 150px;
    margin: 10px 0;
    p {
      margin: 20px 0;
    }
  }

  @media (max-width: 600px) {
    .productCard {
      width: 385px;
    }
  }
`;
