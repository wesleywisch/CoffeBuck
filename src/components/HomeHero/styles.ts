import styled from "styled-components";

export const HomeHeroContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  
  img{
    width: 100%;
    height: 40rem;
    object-fit: cover;
    background-size: cover;
    background-position: center;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 10.5rem;
  top: 30%;

  h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors.textTitle};
  }

  button {
    padding: 1rem 1rem;
    margin-top: 1rem;
    background: ${props => props.theme.colors.colorButton};
    color: ${props => props.theme.colors.text};
    border: none;
  }

  @media screen and (max-width: 1330px) {
    left: 5rem;
  }

  @media screen and (max-width: 450px) {
    left: 2rem;
    top: 20%;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  max-width: 100rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media(max-width:1450px) {
    max-width: 80rem;
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width:1000px) {
    max-width: 50rem;
  }
  
  @media(max-width:700px) {
    padding: 0 2rem;
    grid-template-columns: 1fr;
  }
`;