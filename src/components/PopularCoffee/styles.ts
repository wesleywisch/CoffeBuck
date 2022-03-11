import styled from "styled-components";

export const PopularCoffeeContainer = styled.section`
  width: 100%;
  height: 100%;
  background: #1B1B1B;
  padding: 0 1rem;
  
  h2{
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin: 3rem 0;
  }
  
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem 1rem;
    padding: 0 26rem;

    @media screen and (max-width: 2340px) {
      padding: 0 20rem;
    }

    @media screen and (max-width: 2140px) {
      padding: 0 14rem;
    }

    @media screen and (max-width: 1940px) {
      padding: 0 4rem;
    }

    @media screen and (max-width: 1640px) {
      padding: 0;
    }
  }
`;