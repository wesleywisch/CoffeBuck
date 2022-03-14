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
        <h1>
          <Link href='/'>
            CoffeeBuck
          </Link>
        </h1>
      </HeaderLogo>

      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>

      <HeaderNav>
        <ul>
          <NavLink title='Home' path='/' />
          <NavLink title='About' path='About' />
          <NavLink title='Coffees' path='/coffees' />
          <NavLink title='Services' path='Coffees' />
          <NavLink title='Contact' path='Contact' />
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