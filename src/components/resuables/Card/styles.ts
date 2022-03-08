import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background: #212121;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  transition: .5s;

  svg{
    font-size: 8rem;
    color: ${props => props.theme.colors.textTitle};
  }

  div {
    h3 {
      color: ${props => props.theme.colors.textTitle};
      margin-bottom: 1rem;
    }

    p {
      color: ${props => props.theme.colors.textDescription};
    }
  }

  :hover {
    background: #A26336;

    div p {
      color: #f8f8f8;
    }
  }

  @media(max-width: 400px) {
    grid-template-columns: 1fr;
    text-align: center;

    svg {
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
`;