import styled from "styled-components";

type NavLinkProps = {
  isActive: boolean;
}

export const HeaderContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background: #363636;
  position: sticky;
  top: 0;
  z-index: 9;

  @media screen and (max-width: 1320px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: 2fr 1fr;
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: 4fr 1fr;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 2rem;

  h1{
    font-size: 2rem;
    color: ${props => props.theme.colors.text};
  }

  @media screen and (max-width: 920px) {
    justify-content: flex-start;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 920px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 1320px) {
      gap: 1rem;
    }
    
    li {
      font-size: 1rem;
      margin-top: .4rem;
      padding: 1rem 1rem;
      text-transform: uppercase;

      @media screen and (max-width: 1320px) {
        padding: 1rem .7rem;
        font-size: .9rem
      }
    }
  }
  
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;

  svg {
    cursor: pointer;
  }

  div.divBusca {
    background-color: #1A1A1A;
    border: solid 1px;
    border-radius: .8rem;
    width: 10rem;
    padding: .2rem .3rem;
    display: flex;
    align-items: center;

    input {
      width:100%;
      height:100%;
      background-color: transparent;
      font-size: 1.2rem;
      border: none;
      outline: none;
      color: #fff;
      padding: .2rem .3rem;
    }
  }

  div.box {
    margin-top: 3px;
    position: relative;
  }

  div.boxCart {
    display: none;
  }

  div.box:hover div.boxCart {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    border-radius: 1.8rem;
    width: 500px;
    max-height: 400px;
    margin: -3px 0 0 -26.8rem;

    svg.arrowTop {
      color: #fff;
      margin-right: 3.3rem;
    }

    @media screen and (max-width: 1150px) {
      margin: -3px 0 0 -27.5rem;

      svg.arrowTop {
        margin-right: 2.7rem;
      }
    }

    @media screen and (max-width: 1100px) {
      margin: -3px 0 0 -33.5rem;

      svg.arrowTop {
        margin-right: .6rem;
      }
    }

    @media screen and (max-width: 1080px) {
      margin: -3px 0 0 -30.5rem;

      svg.arrowTop {
        margin-right: 1.7rem;
      }
    }

    @media screen and (max-width: 970px) {
      margin: -3px 0 0 -31rem;

      svg.arrowTop {
        margin-right: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 920px) {
    display: none;

    div.box:hover div.boxCart {
      display: none;
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-decoration: uppercase;
    position: relative;
    display: block;
    color: ${props => props.theme.colors.text};
    padding-bottom: 10px;
    transition: .5s;
    cursor: pointer;

    ::after {
      content: '';
      display: block;
      width: 0%;
      height: 2px;
      background-color: ${props => props.theme.colors.text};
      margin-top: 0.4rem;
      transition: width 0.3s;
      position: absolute;
    }

    :hover::after {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  width: 100%;  
  height: 100%;  
  background: #fff;
  border-radius: .8rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    border-radius: 0 .8rem .8rem 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #1B1B1B;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track{
    background: #fff;
    border-radius: 0 .8rem .8rem 0;
  }
  
  div.Finalizar {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem .5rem;

    a {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: #7159c1;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: center;
    padding: 12px;
  }
  
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  tbody {
    overflow-y: auto;
  }

  img {
    height: auto;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: #7159c1;
      }
    }

    &:disabled {
      svg {
        color: #7159c1;
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;