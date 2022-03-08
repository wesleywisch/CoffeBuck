import { NavLink } from '../Header/NavLink';

import { BiSearch } from 'react-icons/bi';
import { IoMdLogIn } from 'react-icons/io';
import { BsFillBagCheckFill } from 'react-icons/bs';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarIcons,
} from './styles';

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
}

export function Sidebar({ isOpen, toggle }: SidebarProps) {

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <NavLink title="Home" path="/" toggle={toggle} />
          <NavLink title="About" path="/" toggle={toggle} />
          <NavLink title="Pages" path="/" toggle={toggle} />
          <NavLink title="Services" path="/" toggle={toggle} />
          <NavLink title="Contact" path="/" toggle={toggle} />
        </SidebarMenu>
      </SidebarWrapper>

      <SidebarIcons>
        <BiSearch />
        <IoMdLogIn />
        <BsFillBagCheckFill />
      </SidebarIcons>
    </SidebarContainer>
  );
}