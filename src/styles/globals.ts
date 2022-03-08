import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  body{
    background: ${props => props.theme.colors.background};
  }

  body, input, textarea, select, button{
    font: 400 1rem 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;

    @media(max-width:1450px) {
      max-width: 70rem;
    }

    @media(max-width:1000px) {
      max-width: 50rem;
    }
    
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }

  @media (max-width: 1080px){
    html{
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px){
    html{
      font-size: 87.5%; // 14px
    }
  }
`;