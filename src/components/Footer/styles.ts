import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  background: #383838;
  padding: 2rem 1rem;
  
  > div.containerFooter {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;

    > div {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      gap: .2rem;

      h3 {
        margin-bottom: .5rem;
        color: #fff;
        font-weight: bold;
      }

      a {
        color: #fff;
        font-weight: 300;
      }
    }

    @media screen and (max-width: 560px) {
      grid-template-columns: 1fr;

      > div {
        justify-content: center;
        align-items: center;
      }

      > div  + div{
        margin-top: 2rem;
      }
    }
  }

  > div.border {
    width: 100%;
    height: 2px;
    background: gray;
    margin: 2rem 0;
  }
`;