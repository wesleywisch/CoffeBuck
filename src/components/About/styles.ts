import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  padding: 3rem 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 100rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media(max-width:1450px) {
    max-width: 80rem;
  }

  @media(max-width:1000px) {
    max-width: 50rem;
  }
  
  @media(max-width:700px) {
    padding: 0 2rem;
  }

  > div.img {
    width: 450px;
    height: 450px;
    margin: 3rem auto;
  }

  >div.CardRight {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4rem;
  }

  >div.CardLeft {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4rem;
  }
`;