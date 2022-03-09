import styled from "styled-components";

type Props = {
  align: string;
  order: number;
}

export const CardAboutContainer = styled.div<Props>`
  display: flex;
  width: 30rem;
  height: 100%;
  background: red;
  
  svg {
    display: flex;
    width: 4rem;
    height: 4rem;
    order: ${props => props.order == 1 ? 1 : 2};
    /* order:1; */
  }

  > div {
    order: ${props => props.order == 1 ? 2 : 1};
    /* order: 2; */
    text-align: ${props => props.align == 'right' ? 'right' : 'left'};
    margin-right: ${props => props.align == 'right' ? '1rem' : '0'};
    margin-left: ${props => props.align == 'left' ? '1rem' : '0'};
  }

  :nth-child(even) {
    margin-right: ${props => props.align == 'right' ? '4rem' : '0'};
    margin-left: ${props => props.align == 'left' ? '4rem' : '0'};
  }
`; 