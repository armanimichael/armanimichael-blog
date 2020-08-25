import React, { useEffect, useState } from 'react';

import { NavbarStyled, NavbarExtended, Logo } from './styles';

import { generateLinks } from '../../utils/generateLinks';
import NavbarWrapped from './NavbarWrapped';

interface NavbarProps {
  logoSrc?: string;
  isDarkMode: boolean;
  changeTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  logoSrc,
  isDarkMode,
  changeTheme,
}) => {
  const [isWrapped, setMenuSize] = useState(false);

  // Check state before any zoom
  useEffect(() => {
    handleNavbarOverflow();
  }, []);

  // Check if zoom overflows
  useEffect(() => {
    window.addEventListener('resize', handleNavbarOverflow, true);

    return () => {
      window.removeEventListener('resize', handleNavbarOverflow, true);
    };
  });

  const handleNavbarOverflow = () => {
    const navbar: HTMLElement = document.getElementById(
      'navbar-extended'
    ) as HTMLElement;

    const navbarElements: NodeListOf<Element> = document.querySelectorAll(
      '#navbar-extended > *'
    );

    const logo: HTMLElement = document.getElementById('logo') as HTMLElement;

    let navbarElementsWidth = 0;
    for (let i = 0; i < navbarElements.length; i++) {
      navbarElementsWidth += navbarElements[i].clientWidth;
    }

    if (logo) {
      setMenuSize(
        navbar.clientWidth - (logo.clientWidth + 100) < navbarElementsWidth
      );
    } else {
      setMenuSize(navbar.clientWidth < navbarElementsWidth);
    }
  };

  const themeButton = isDarkMode ? (
    <span role="img" aria-label="light-mode" onClick={changeTheme}>
      ☀️
    </span>
  ) : (
    <span role="img" aria-label="dark-mode" onClick={changeTheme}>
      🌙
    </span>
  );

  return (
    <NavbarStyled>
      <div id="top" />
      <NavbarExtended isHidden={isWrapped} id="navbar-extended">
        <Logo
          isWrapped={false}
          id="logo"
          image={logoSrc}
          to="/"
          title="Homepage"
        />
        {generateLinks()}
        {themeButton}
      </NavbarExtended>

      <NavbarWrapped
        isHidden={!isWrapped}
        id="navbar-wrapped"
        logoImg={logoSrc}
        themeButton={themeButton}
      >
        {generateLinks()}
      </NavbarWrapped>
    </NavbarStyled>
  );
};

export default Navbar;
