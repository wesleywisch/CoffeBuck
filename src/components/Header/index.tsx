import Link from 'next/link';

import { FaBars } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { IoMdLogIn } from 'react-icons/io';
import { BsFillBagCheckFill } from 'react-icons/bs';

import { NavLink } from './NavLink';

import { HeaderContainer, HeaderLogo, MobileIcon, HeaderNav, HeaderIcons } from './styles';

type HeaderProps = {
  toggle: () => void;
}

export function Header({ toggle }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link href='/'>
          <h1>CoffeBuck</h1>
        </Link>
      </HeaderLogo>

      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>

      <HeaderNav>
        <ul>
          <NavLink title='Home' path='/' />
          <NavLink title='About' path='/' />
          <NavLink title='Pages' path='/' />
          <NavLink title='Services' path='/' />
          <NavLink title='Contact' path='/' />
        </ul>
      </HeaderNav>

      <HeaderIcons>
        <BiSearch />
        <IoMdLogIn />
        <BsFillBagCheckFill />
      </HeaderIcons>
    </HeaderContainer>
  )
}