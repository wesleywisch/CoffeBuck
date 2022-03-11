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
    max-width: 1600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    gap: 2rem 1rem;
  }

  button.leadMore{
    border: none;
    padding: .5rem 1rem;
    color: #fff;
    font-weight: 300;
    background: #B87A43;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
  }
`;