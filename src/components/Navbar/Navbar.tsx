import React from 'react';
import { navigate } from 'gatsby';
import { IoMdHome, IoMdPerson } from 'react-icons/io';

import { ThemeButton } from './..';
import { NavbarStyled, NavItem } from './styles';

interface Props {
  isDarkMode: boolean;
  changeTheme: () => void;
}
const Navbar: React.FC<Props> = ({ isDarkMode, changeTheme }) => (
  <NavbarStyled>
    <NavItem onClick={() => navigate('/')} title="Homepage">
      <IoMdHome />
    </NavItem>
    <NavItem>
      <ThemeButton changeTheme={changeTheme} isDarkMode={isDarkMode} />
    </NavItem>
    <NavItem
      onClick={() => window.open('https://armanimichael.com')}
      title="About Me"
    >
      <IoMdPerson />
    </NavItem>
  </NavbarStyled>
);

export default Navbar;
