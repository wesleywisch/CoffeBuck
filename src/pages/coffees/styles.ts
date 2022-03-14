import styled from "styled-components";

export const CoffeesContainer = styled.main`
  width: 100%;
  height: 100%;

  >div {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1600px;
    gap: 1.2rem 1.5rem;

    @media screen and (max-width: 370px) {
      margin: 2rem 2rem;
    }
  }
`;