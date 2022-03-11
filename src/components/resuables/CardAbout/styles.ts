import styled from "styled-components";

type Props = {
  align: string;
  order: number;
}

export const CardAboutContainer = styled.div<Props>`
  display: flex;
  width: 30rem;
  height: 100%;
  
  svg {
    display: flex;
    width: 4rem;
    height: 4rem;
    order: ${props => props.order == 1 ? 1 : 2};
    color: #A26336;
  }

  > div {
    order: ${props => props.order == 1 ? 2 : 1};
    text-align: ${props => props.align == 'right' ? 'right' : 'left'};
    margin-right: ${props => props.align == 'right' ? '1rem' : '0'};
    margin-left: ${props => props.align == 'left' ? '1rem' : '0'};

    h3 {
      font-size: 1.2rem;
      font-weight: bold;
    }

    p {
      color: gray;
    }
  }

  :nth-child(even) {
    margin-right: ${props => props.align == 'right' ? '4rem' : '0'};
    margin-left: ${props => props.align == 'left' ? '4rem' : '0'};
  }

  @media(max-width: 1570px) {
    justify-content: center;
    align-items: center;

    > div {
      order: 2;
      text-align: left;
      margin-right: 0;
      margin-left: 1rem;
    }

    svg {
      order: 1;
    }

    :nth-child(even) {
      margin-right: 0;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 500px) {
    width: 18rem;

    svg {
      width: 6rem;
      height: 6rem;
    }
  }
`; 