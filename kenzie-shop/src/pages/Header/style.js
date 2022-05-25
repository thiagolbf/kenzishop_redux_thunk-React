import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    margin-left: 50px;
    &:hover {
      cursor: pointer;
    }
  }

  nav {
    margin-right: 50px;

    ul {
      list-style-type: none;
      display: flex;
      li {
        margin: 0 10px;

        div {
          p {
            display: flex;
            span {
              font-size: 12px;
              color: var(--cartNumber);
              margin: 0 2px;
            }
          }
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 0;
    }
    nav {
      margin-right: 0;
      ul {
        flex-direction: column;
        margin: 10px 0;
        justify-content: center;
        align-items: center;
        li {
          margin: 5px 0;
        }
      }
    }
  }
`;
