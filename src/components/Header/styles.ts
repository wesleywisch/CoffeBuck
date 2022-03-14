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

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
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
  
  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    display: none;
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